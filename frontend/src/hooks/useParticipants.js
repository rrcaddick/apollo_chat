import { useState } from "react";

const useParticipants = () => {
  const [participants, setParticipants] = useState([]);

  const addParticipant = (participant) => {
    setParticipants((prevState) => [...prevState, participant]);
  };

  const removeParticipant = (participant) => {
    setParticipants((prevState) => prevState.filter((p) => p.id !== participant.id));
  };

  const resetParticipants = () => {
    setParticipants([]);
  };

  return {
    participants,
    addParticipant,
    removeParticipant,
    resetParticipants,
  };
};

export { useParticipants };
