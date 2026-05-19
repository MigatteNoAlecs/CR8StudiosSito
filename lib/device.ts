export function isTouchDevice() {
  if (typeof window === "undefined") return false;
  return (
    window.matchMedia("(pointer: coarse)").matches ||
    window.matchMedia("(hover: none)").matches ||
    navigator.maxTouchPoints > 0
  );
}

export function isMobileViewport() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(max-width: 1023px)").matches;
}

/** Smartphone / tablet layout — viewport stretto o input touch. */
export function isMobileExperience() {
  if (typeof window === "undefined") return false;
  return isMobileViewport() || isTouchDevice();
}
