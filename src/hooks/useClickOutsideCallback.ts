import React, { useEffect } from "react";

const useClickOutsideCallback = (
  ref: React.RefObject<HTMLElement>,
  callback: () => void,
  excludeElements?: React.RefObject<HTMLElement>[]
) => {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target instanceof HTMLElement)) {
        return;
      }

      const target: HTMLElement = event.target;

      if (
        excludeElements !== undefined &&
        excludeElements.length > 0 &&
        excludeElements.some((value: React.RefObject<HTMLElement>) =>
          value.current?.contains(target)
        )
      ) {
        return;
      }

      if (ref.current && !ref.current.contains(target)) {
        callback();
      }
    };
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
};

export default useClickOutsideCallback;
