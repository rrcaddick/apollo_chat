import { Close, Phone } from "@mui/icons-material";
import { Box, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useReadSelectedChat } from "../../graphql/chat/hooks";
import AvatarWithInitials from "../common/AvatarWithInitials";
import ContainedDrawer from "../common/ContainedDrawer";
import ScrollableList from "../common/ScrollableList";
import FriendItem from "../friends/FriendItem";

const ChatProfile = ({ openProfile, onClose }) => {
  const {
    selectedChat: { chatType, details, members, admins },
  } = useReadSelectedChat();
  const { name, profilePicture, mobile, status } = details;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <ContainedDrawer open={openProfile} anchor={isMobile ? "bottom" : "right"} width={isMobile ? "100%" : "45%"}>
      <Box
        p="2rem"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        gap="3rem"
        flexGrow={1}
        position="relative"
        overflow="hidden"
      >
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            right: "1rem",
            top: "1rem",
          }}
        >
          <Close />
        </IconButton>
        <Box display="flex" justifyContent="center" sx={{ flex: "0 1 10%", height: "45%" }}>
          <AvatarWithInitials src={profilePicture} alt={name} large sx={{ width: "100%", height: "100%" }} />
        </Box>
        <Box display="flex" overflow="hidden" flexGrow={1} flexDirection="column" alignItems="center">
          <Typography fontWeight="bold" fontSize="x-large" textAlign="center">
            {name}
          </Typography>
          {chatType === "DIRECT" && (
            <>
              <Typography fontSize="x-large" textAlign="center">
                {status}
              </Typography>
              <Box display="flex" justifyContent="center">
                <Typography fontSize="x-large" textAlign="center">
                  {mobile}
                </Typography>
                <IconButton color="success" href={`tel:${mobile}`}>
                  <Phone />
                </IconButton>
              </Box>
            </>
          )}
          {chatType !== "DIRECT" && (
            <ScrollableList gap="0.5rem" thumbWidth="10px" thumbColor="#8f0acd73" marginTop="2rem">
              {chatType === "GROUP" && admins.map((m) => <FriendItem key={m.id} friend={m} />)}
              {members.map((m) => (
                <FriendItem key={m.id} friend={m} />
              ))}
            </ScrollableList>
          )}
        </Box>
      </Box>
    </ContainedDrawer>
  );
};

export default ChatProfile;
