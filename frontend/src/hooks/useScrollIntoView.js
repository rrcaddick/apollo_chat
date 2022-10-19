import { useEffect, useRef } from "react";
import { useReactiveVar } from "@apollo/client";
import { navigationPositionVar } from "../graphql/variables/common";

const useScrollIntoView = (array) => {
  const scrollRef = useRef();
  const navPosition = useReactiveVar(navigationPositionVar);

  useEffect(() => {
    if (array && navPosition === 1) scrollRef?.current?.scrollIntoView(false);
  }, [array, navPosition]);

  return scrollRef;
};

export { useScrollIntoView };
