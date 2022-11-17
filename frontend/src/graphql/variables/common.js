import { makeVar } from "@apollo/client";

const emojiTrayOpenVar = makeVar(false);

const navigationPositionVar = makeVar(0);

const selectedEmojiVar = makeVar();

const isDarkModeVar = makeVar(false);

export { emojiTrayOpenVar, navigationPositionVar, selectedEmojiVar, isDarkModeVar };
