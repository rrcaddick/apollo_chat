import { Avatar, Box, Button, CircularProgress, IconButton, TextField, Typography } from "@mui/material";
import { Close, PhotoCamera } from "@mui/icons-material";
import { useGetMe, useUpdateProfile } from "../../graphql/user/hooks";
import { useImageUpload } from "../../hooks/useImageUpload";
import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { createUpdateProfile } from "../../graphql/user/mutations";
import { getDirtyFields } from "../../utils/formUtils";
import { getAvatarUrl } from "../../utils/cloudinary";
import DefaultAvatar from "../../assets/default-avatar.png";

const Profile = ({ onClose }) => {
  const {
    register,
    setValue,
    reset,
    watch,
    handleSubmit,
    formState: { dirtyFields, isValid, errors, isDirty },
  } = useForm({
    mode: "all",
  });

  const setDefaultValues = (me) => {
    reset(me);
  };

  const onUpdateCompleted = () => {
    onClose();
  };

  const { me } = useGetMe(setDefaultValues);
  const { uploadImage, disgardImage, public_id, loading: imageUploadLoading } = useImageUpload();
  const { loading: updateProfileLoading, serverErrors, mutate: updateProfile } = useUpdateProfile(onUpdateCompleted);
  const AvatarRef = useRef();

  useEffect(() => {
    if (public_id) {
      setValue("profilePicture", public_id, { shouldDirty: true });
    }
  }, [setValue, public_id]);

  const imageHandler = ({ target }) => {
    dirtyFields.profilePicture = true;
    uploadImage(target.files[0]);
    target.value = null;
  };

  const updateHandler = (userData) => {
    const input = getDirtyFields(userData, dirtyFields);
    updateProfile({ variables: { input }, mutation: createUpdateProfile(input) });
  };

  const onCloseHandler = () => {
    disgardImage();
    setDefaultValues(me);
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
          <Avatar
            alt={me?.name}
            src={getAvatarUrl(watch("profilePicture")) || DefaultAvatar}
            sx={{ width: "100%", height: "100%" }}
          />
          <input hidden accept="image/*" type="file" onChange={imageHandler} />
          <PhotoCamera sx={{ position: "absolute", bottom: "10%" }} />
        </IconButton>
        {imageUploadLoading && (
          <CircularProgress
            size={AvatarRef.current.offsetWidth}
            sx={{ position: "absolute", width: AvatarRef?.current?.offsetWidth }}
          />
        )}
      </Box>
      <Box display="flex" flexDirection="column" gap="2rem" p="0 15%">
        <TextField
          variant="standard"
          label="Status"
          placeholder="Set a new status"
          fullWidth
          InputLabelProps={{ shrink: Boolean(watch("status")) }}
          helperText={errors?.status?.message || serverErrors?.status}
          error={errors?.status || Boolean(serverErrors?.status)}
          {...register("status", { required: "Status cannot be blank" })}
        />
        <TextField
          variant="standard"
          placeholder="Update your mobile number"
          label="Mobile Number"
          fullWidth
          InputLabelProps={{ shrink: Boolean(watch("mobile")) }}
          helperText={errors?.mobile?.message || serverErrors?.mobile}
          error={errors?.mobile || Boolean(serverErrors?.mobile)}
          {...register("mobile", { required: "Mobile cannot be blank" })}
        />
        <Button
          variant="contained"
          fullWidth
          onClick={handleSubmit(updateHandler)}
          disabled={!isValid || !isDirty || updateProfileLoading}
        >
          {updateProfileLoading ? "Loading..." : "Update"}
        </Button>
      </Box>
    </Box>
  );
};

export default Profile;
