import { Cloudinary } from "@cloudinary/url-gen";
import { thumbnail } from "@cloudinary/url-gen/actions/resize";
import { focusOn } from "@cloudinary/url-gen/qualifiers/gravity";
import { FocusOn } from "@cloudinary/url-gen/qualifiers/focusOn";

const getAvatarUrl = (public_id) => {
  if (!public_id) return;

  const cloud = new Cloudinary({
    cloud: {
      cloudName: "raytechprojects",
    },
  });

  const cloudImage = cloud.image(public_id);
  cloudImage.resize(thumbnail().width(150).height(150).gravity(focusOn(FocusOn.face())));
  return cloudImage.toURL();
};

export { getAvatarUrl };
