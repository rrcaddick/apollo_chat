import styled from "@emotion/styled";
import { CancelRounded } from "@mui/icons-material";
import { Avatar, Badge, Box, IconButton } from "@mui/material";
const RemoveIcon = styled(CancelRounded)`
  color: red;
  background-color: white;
  border-radius: 50%;
`;

const Participants = ({ participants }) => {
  return (
    <Box p="0 11px" overflow="hidden" flex="1 0 auto" display={participants.length > 0 ? "flex" : "none"}>
      <Box
        display="flex"
        p="0 1px"
        gap="0.4rem"
        width="100%"
        overflow="hidden"
        flexWrap="wrap"
        flex="0 0 auto"
        minHeight="3.1rem"
        maxHeight="6.1rem"
        sx={{
          overflowY: "overlay",
          "&:hover::-webkit-scrollbar": {
            display: "block",
          },
          "::-webkit-scrollbar": { width: "10px", display: "none" },
          "::-webkit-scrollbar-thumb": {
            backgroundColor: "#8f0acd73",
            borderRadius: "20px",
          },
        }}
      >
        {/* {participants.map((participant) => (
          <Box display="flex" justifyContent="flex-start" alignItems="flex-start">
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              badgeContent={
                <IconButton size="small">
                  <RemoveIcon fontSize="small" />
                </IconButton>
              }
            >
              <Avatar src={participant.profilePicture} />
            </Badge>
          </Box>
        ))} */}
      </Box>
    </Box>
  );
};

export default Participants;
