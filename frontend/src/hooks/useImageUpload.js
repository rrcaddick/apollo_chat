import { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_UPLOAD_SIGNATURE } from "../graphql/images/queries";

const cloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
const apiKey = process.env.REACT_APP_CLOUDINARY_API_KEY;

export const useImageUpload = () => {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState();
  const [public_id, setPublicId] = useState();
  const [deleteToken, setDeleteToken] = useState("");

  // TODO: Handle upload error
  const [loadSignature, { error }] = useLazyQuery(GET_UPLOAD_SIGNATURE, {
    fetchPolicy: "no-cache",
    onCompleted: async ({ imageSignature }) => {
      const { timestamp, signature } = imageSignature;
      const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload?api_key=${apiKey}&timestamp=${timestamp}&signature=${signature}`;

      const form = new FormData();
      form.append("file", image);
      form.append("folder", "ApolloChat");
      form.append("upload_preset", "ApolloChat");
      const response = await fetch(url, {
        method: "POST",
        body: form,
      });
      const { public_id, delete_token } = await response.json();

      setPublicId(public_id);
      setDeleteToken(delete_token);
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
    deleteForm.append("public_id", public_id);
    deleteForm.append("token", deleteToken);

    const deleteResponse = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/delete_by_token`, {
      method: "POST",
      body: deleteForm,
    });

    await deleteResponse.json();
    setPublicId(null);
  };

  return {
    uploadImage,
    disgardImage,
    public_id,
    loading,
  };
};
