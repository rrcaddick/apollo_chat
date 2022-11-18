import { isDarkModeVar } from "../graphql/variables/common";

const generateTempId = (modelName) => {
  return `Temp-${modelName}-${Date.now().toString().slice(-5)}`;
};

const toggleDarkMode = () => {
  const isDarkMode = window.localStorage.getItem("isDarkMode") === "true";
  window.localStorage.setItem("isDarkMode", (!isDarkMode).toString());
  isDarkModeVar(!isDarkMode);
};

export { generateTempId, toggleDarkMode };
