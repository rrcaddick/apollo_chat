import { useEffect, useRef } from "react";

const useScrollIntoView = (array) => {
  const scrollRef = useRef();

  useEffect(() => {
    if (array) scrollRef?.current?.scrollIntoView(false);
  }, [array]);

  return scrollRef;
};

export { useScrollIntoView };
