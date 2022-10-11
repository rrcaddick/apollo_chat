import { Avatar } from "@mui/material";
import { getAvatarUrl } from "../../utils/cloudinary";

function stringToColor(string) {
  if (!string) return "#ececec";

  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  if (!name) return "";
  if (!name.includes(" "))
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name[0]}`,
    };
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

const AvatarWithInitials = ({ alt, src, ...rest }) => {
  if (!src) src = "";
  return <Avatar {...rest} {...stringAvatar(alt)} alt={alt} src={getAvatarUrl(src)} />;
};

export default AvatarWithInitials;
