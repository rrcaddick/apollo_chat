import styled from "@emotion/styled";
import { CancelRounded } from "@mui/icons-material";
import { Avatar, Badge, Box, IconButton } from "@mui/material";
import ParticipantItem from "./ParticipantItem";
const RemoveIcon = styled(CancelRounded)`
  color: red;
  background-color: white;
  border-radius: 50%;
`;

const Participants = ({ participants, onRemove }) => {
  return (
    <Box p="0 11px" overflow="hidden" flex="1 0 auto" display={participants.length > 0 ? "flex" : "none"}>
      <Box
        display="flex"
        p="0 10px 5px"
        gap="0.4rem"
        width="100%"
        overflow="hidden"
        flexWrap="wrap"
        flex="0 0 auto"
        minHeight="3.1rem"
        maxHeight="6.rem"
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
        {participants.map((participant) => (
          <ParticipantItem key={participant.id} participant={participant} onRemove={onRemove} />
        ))}
      </Box>
    </Box>
  );
};

export default Participants;
