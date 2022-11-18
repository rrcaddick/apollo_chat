import { makeVar } from "@apollo/client";

const emojiTrayOpenVar = makeVar(false);

const navigationPositionVar = makeVar(0);

const selectedEmojiVar = makeVar();

const initDarkModeVar = () => {
  const userPreference = window.localStorage.getItem("isDarkMode");
  if (!userPreference) return true;
  return window.localStorage.getItem("isDarkMode") === "true";
};

const isDarkModeVar = makeVar(initDarkModeVar());

export { emojiTrayOpenVar, navigationPositionVar, selectedEmojiVar, isDarkModeVar };
