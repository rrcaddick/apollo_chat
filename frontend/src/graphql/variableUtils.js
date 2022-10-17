import { selectedChatVar } from "./variables/selectedChat";
import { emojiTrayOpenVar, navigationPositionVar } from "./variables/common";

const resetAllVars = () => {
  selectedChatVar(null);
  emojiTrayOpenVar(false);
  navigationPositionVar(0);
};

export { resetAllVars };
