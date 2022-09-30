import { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_UPLOAD_SIGNATURE } from "../graphql/images/queries";
import { Cloudinary } from "@cloudinary/url-gen";
import { thumbnail } from "@cloudinary/url-gen/actions/resize";
import { focusOn } from "@cloudinary/url-gen/qualifiers/gravity";
import { FocusOn } from "@cloudinary/url-gen/qualifiers/focusOn";

const CLOUDINARY_CLOUD_NAME = "raytechprojects";
const CLOUDINARY_API_KEY = "124122254676488";

export const useImageUpload = () => {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState();
  const [imageDetails, setImageDetails] = useState({});

  // TODO: Handle upload error
  const [loadSignature, { error }] = useLazyQuery(GET_UPLOAD_SIGNATURE, {
    onCompleted: async ({ imageSignature }) => {
      const { timestamp, signature } = imageSignature;
      const url = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload?api_key=${CLOUDINARY_API_KEY}&timestamp=${timestamp}&signature=${signature}`;

      const form = new FormData();
      form.append("file", image);
      form.append("folder", "ApolloChat");
      form.append("upload_preset", "ApolloChat");
      const response = await fetch(url, {
        method: "POST",
        body: form,
      });
      const { public_id, delete_token } = await response.json();

      const cloud = new Cloudinary({
        cloud: {
          cloudName: "raytechprojects",
        },
      });

      const cloudImage = cloud.image(public_id);

      cloudImage.resize(thumbnail().width(150).height(150).gravity(focusOn(FocusOn.face())));

      setImageDetails({ imageUrl: cloudImage.toURL(), public_id, delete_token });
      setLoading(false);
    },
  });

  const uploadImage = async (newImage) => {
    setLoading(true);
    setImage(newImage);
    await loadSignature();
  };

  const disgardImage = async () => {
    const deleteForm = new FormData();
    deleteForm.append("public_id", imageDetails.public_id);
    deleteForm.append("token", imageDetails.delete_token);

    const deleteResponse = await fetch(`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/delete_by_token`, {
      method: "POST",
      body: deleteForm,
    });

    await deleteResponse.json();
    setImageDetails((prevState) => ({ ...prevState, imageUrl: null }));
  };

  return {
    uploadImage,
    disgardImage,
    imageUrl: imageDetails.imageUrl,
    loading,
  };
};
