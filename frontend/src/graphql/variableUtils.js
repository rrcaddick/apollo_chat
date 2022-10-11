import { selectedChatVar } from "./variables/selectedChat";
import { emojiTrayOpenVar, navigationPositionVar } from "./variables/common";

const resetAll = () => {
  selectedChatVar(null);
  emojiTrayOpenVar(false);
  navigationPositionVar(0);
};

export { resetAll };
