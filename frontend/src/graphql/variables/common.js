import { makeVar } from "@apollo/client";

const emojiTrayOpenVar = makeVar(false);

const navigationPositionVar = makeVar(0);

export { emojiTrayOpenVar, navigationPositionVar };
