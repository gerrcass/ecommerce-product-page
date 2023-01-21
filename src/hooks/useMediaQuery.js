import { useState, useCallback, useEffect } from "react";

const useMediaQuery = (targetBreakpoint) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    setTargetReached(e.matches);
  }, []);

  useEffect(() => {
    // typeof window !== "undefined" 👉no need to check for this because of useEffect only runs client-side
    const mediaWatcher = window.matchMedia(targetBreakpoint);
    setTargetReached(mediaWatcher.matches);

    mediaWatcher.addEventListener("change", updateTarget);
    return () => mediaWatcher.removeEventListener("change", updateTarget);
  }, []);

  return targetReached;
};

export default useMediaQuery;
