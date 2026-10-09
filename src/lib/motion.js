import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Ensure GSAP plugins are registered safely on client side
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };

/**
 * Standardized easing curves for cinematic motion
 */
export const MOTION_EASE = {
  // Ultra smooth deceleration for hero and masked text
  outExpo: "power4.out",
  outQuart: "power3.out",
  // Smooth directional fluid transition
  fluid: "cubic-bezier(0.16, 1, 0.3, 1)",
  // Gentle in-out for carousels
  inOut: "power2.inOut",
};

/**
 * Check if the user prefers reduced motion
 */
export function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
