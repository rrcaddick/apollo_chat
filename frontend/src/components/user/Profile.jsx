import { Avatar, Box, Button, CircularProgress, IconButton, TextField, Typography } from "@mui/material";
import { Close, PhotoCamera } from "@mui/icons-material";
import { useGetMe } from "../../graphql/user/hooks";
import { useImageUpload } from "../../hooks/useImageUpload";
import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";

const Profile = ({ onClose }) => {
  const { me } = useGetMe();
  const { uploadImage, disgardImage, imageUrl, loading } = useImageUpload();
  const AvatarRef = useRef();

  const { register, setValue, watch, handleSubmit } = useForm({
    defaultValues: {
      status: me?.status,
      mobile: me?.mobile,
      profilePicture: me?.profilePicture,
    },
    mode: "all",
  });

  const imageHandler = async ({ target }) => {
    await uploadImage(target.files[0]);
  };

  useEffect(() => {
    if (imageUrl) {
      setValue("profilePicture", imageUrl);
    }

    if (!imageUrl && me?.profilePicture) {
      setValue("profilePicture", me.profilePicture);
    }
  }, [setValue, imageUrl, me?.profilePicture]);

  const updateHandler = (userData) => {
    console.log(userData);
  };

  const onCloseHandler = () => {
    disgardImage();
    onClose();
  };

  return (
    <Box display="flex" flexDirection="column" p="12px" gap="2rem">
      <Box display="flex" justifyContent="center" position="relative">
        <Typography fontWeight="bold" fontSize="x-large" textAlign="center">
          {me?.name}
        </Typography>
        <IconButton
          onClick={onCloseHandler}
          sx={{
            position: "absolute",
            right: 0,
          }}
        >
          <Close />
        </IconButton>
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center" position="relative">
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="label"
          sx={{ flex: "0 1 50%", height: "100%", position: "relative" }}
          ref={AvatarRef}
        >
          <Avatar alt={me?.name} src={watch("profilePicture", true)} sx={{ width: "100%", height: "100%" }} />
          <input hidden accept="image/*" type="file" onChange={imageHandler} />
          <PhotoCamera sx={{ position: "absolute", bottom: "10%" }} />
        </IconButton>
        {loading && (
          <CircularProgress
            size={AvatarRef.current.offsetWidth}
            sx={{ position: "absolute", width: AvatarRef?.current?.offsetWidth }}
          />
        )}
      </Box>
      <Box display="flex" flexDirection="column" gap="2rem" p="0 15%">
        <TextField variant="standard" label="Status" placeholder="Set a new status" fullWidth {...register("status")} />
        <TextField
          variant="standard"
          placeholder="Update your mobile number"
          label="Mobile Number"
          fullWidth
          {...register("mobile")}
        />
        <Button variant="contained" fullWidth onClick={handleSubmit(updateHandler)}>
          Update
        </Button>
      </Box>
    </Box>
  );
};

export default Profile;
