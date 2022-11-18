import { makeVar } from "@apollo/client";

const emojiTrayOpenVar = makeVar(false);

const navigationPositionVar = makeVar(0);

const selectedEmojiVar = makeVar();

const isDarkModeVar = makeVar(window.localStorage.getItem("isDarkMode") === "true");

export { emojiTrayOpenVar, navigationPositionVar, selectedEmojiVar, isDarkModeVar };
