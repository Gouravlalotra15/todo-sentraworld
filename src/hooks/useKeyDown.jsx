import React, { useCallback, useEffect } from "react";

const useKeyDown = (ref, callbackFn) => {
  useEffect(() => {
    if (!ref.current) return;

    ref.current.addEventListener("keydown", callbackFn);

    return () => {
      ref.current.removeEventListener("keydown", callbackFn);
    };
  }, [ref]);
};

export default useKeyDown;
