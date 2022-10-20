import { useEffect, useRef } from "react";
import { navigationPositionVar } from "../graphql/variables/common";

const useScrollIntoView = (array) => {
  const scrollRef = useRef();

  useEffect(() => {
    if (array && navigationPositionVar() === 1) scrollRef?.current?.scrollIntoView(false);
  }, [array]);

  return scrollRef;
};

export { useScrollIntoView };
