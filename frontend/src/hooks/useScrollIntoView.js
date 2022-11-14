import { useEffect, useRef } from "react";

const useScrollIntoView = (array) => {
  const scrollToRef = useRef();
  const scrollContainerRef = useRef();

  useEffect(() => {
    scrollContainerRef?.current?.scroll(0, scrollToRef?.current?.offsetTop);
  }, [array]);

  return { scrollToRef, scrollContainerRef };
};

export { useScrollIntoView };
