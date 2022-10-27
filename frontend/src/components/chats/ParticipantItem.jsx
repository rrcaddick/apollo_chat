import styled from "@emotion/styled";
import { CancelRounded } from "@mui/icons-material";
import { Badge, Box, IconButton } from "@mui/material";
import AvatarWithInitials from "../common/AvatarWithInitials";

const RemoveIcon = styled(CancelRounded)`
  color: red;
  background-color: white;
  border-radius: 50%;
`;

const ParticipantItem = ({ participant, onRemove }) => {
  const onRemoveHandler = () => {
    onRemove(participant);
  };
  return (
    <Box display="flex" justifyContent="flex-start" alignItems="flex-start">
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        badgeContent={
          <IconButton size="small" onClick={onRemoveHandler}>
            <RemoveIcon fontSize="small" />
          </IconButton>
        }
      >
        <AvatarWithInitials src={participant.profilePicture} alt={participant.name} />
      </Badge>
    </Box>
  );
};

export default ParticipantItem;
