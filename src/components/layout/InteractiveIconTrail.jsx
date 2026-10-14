"use client";

import { useEffect, useRef, useCallback } from "react";

/**
 * SIGNY HERO — PREMIUM CURSOR-FOLLOWING SERVICE LOGO TRAIL
 *
 * Spawns floating messaging-service logos that trail sequentially behind
 * the cursor inside the hero section.
 *
 * - Uses actual PNG logo assets where available (WhatsApp, Google Verified SMS).
 * - Clean inline SVG icons for services without compact PNG logos.
 * - Logos appear sequentially along the cursor's movement path (no random scatter).
 * - Subtle blur-in entrance (~150ms), fast fade-out (~450–700ms total lifetime).
 * - Hero-only, desktop-only, pointer-events: none, z-0.
 * - Zero React state on mousemove — fully imperative DOM animation.
 */

/* ─── Trail Logo Definitions ─── */

const TRAIL_LOGOS = [
  {
    id: "whatsapp",
    label: "WhatsApp Business API",
    type: "png",
    src: "/images/whatsapp-business-api.png",
  },
  {
    id: "verified-sms",
    label: "Google Verified SMS",
    type: "png",
    src: "/images/google-verified-sms.png",
  },
  {
    id: "voice",
    label: "Voice Calls",
    type: "svg",
    // Clean phone + signal icon matching Signy navy
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.97.36 1.92.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.89.34 1.84.57 2.81.7A2 2 0 0122 16.92z" fill="none" stroke="#1B2A4A" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M14.05 2a8.96 8.96 0 017.95 7.95M14.05 6a4.98 4.98 0 013.95 3.95" stroke="#36BEA4" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  },
  {
    id: "rcs",
    label: "RCS Messaging",
    type: "png",
    src: "/images/rcs-messaging.png",
  },
  {
    id: "bulk-sms",
    label: "Bulk SMS",
    type: "svg",
    // Stacked messages icon
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 3H8c-1.1 0-2 .9-2 2v1" stroke="#4ABFAD" stroke-width="1.6" stroke-linecap="round"/>
      <rect x="4" y="6" width="16" height="12" rx="2.5" fill="none" stroke="#4ABFAD" stroke-width="1.8"/>
      <path d="M8 10h3M8 13.5h8" stroke="#4ABFAD" stroke-width="1.6" stroke-linecap="round"/>
      <path d="M20 8v10c0 1.1-.9 2-2 2H6" stroke="#4ABFAD" stroke-width="1.6" stroke-linecap="round"/>
    </svg>`,
  },
];

/* ─── Configuration ─── */

const CONFIG = {
  MAX_ICONS: 10,             // Max simultaneous DOM elements
  SPAWN_SPACING: 65,         // px cursor must move between successive logos (55–85px range)
  MAX_STEPS_PER_EVENT: 3,    // Limit interpolation steps on sudden large mouse jumps
  ICON_SIZE: 42,             // px
  // Lifecycle timings (total lifetime ≈ 150 + 220 + 220 = 590ms, strictly within 450–700ms)
  ENTRANCE_MS: 150,          // blur-in duration (120–180ms range)
  VISIBLE_MS: 220,           // hold at full visibility after entrance
  EXIT_MS: 220,              // smooth fade-out duration
  MAX_ROTATION: 3,           // degrees — very slight rotation as requested
};

/* ─── Component ─── */

export default function InteractiveIconTrail({ containerRef }) {
  const layerRef = useRef(null);
  const stateRef = useRef({
    activeIcons: [],
    lastSpawnX: -999,
    lastSpawnY: -999,
    iconIndex: 0,
    rafId: null,
    isActive: false,
  });

  // Preload PNG logo assets on mount for instantaneous rendering
  useEffect(() => {
    TRAIL_LOGOS.forEach((logo) => {
      if (logo.type === "png" && typeof window !== "undefined") {
        const img = new window.Image();
        img.src = logo.src;
      }
    });
  }, []);

  // Create a single trail logo DOM element at (x, y)
  const createLogoElement = useCallback((logoDef, x, y) => {
    const el = document.createElement("div");
    el.className = "signy-trail-logo";
    el.setAttribute("aria-hidden", "true");

    const rotation = (Math.random() - 0.5) * 2 * CONFIG.MAX_ROTATION;

    // Initial state: subtle blur, reduced opacity, scale 0.92
    Object.assign(el.style, {
      position: "absolute",
      width: `${CONFIG.ICON_SIZE}px`,
      height: `${CONFIG.ICON_SIZE}px`,
      left: `${x - CONFIG.ICON_SIZE / 2}px`,
      top: `${y - CONFIG.ICON_SIZE / 2}px`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      pointerEvents: "none",
      userSelect: "none",
      willChange: "transform, opacity, filter",
      // Entrance start state
      opacity: "0.25",
      filter: "blur(3px)",
      transform: `rotate(${rotation}deg) scale(0.92)`,
      // Entrance transition (120–180ms restrained easing)
      transition: `opacity ${CONFIG.ENTRANCE_MS}ms cubic-bezier(0.16, 1, 0.3, 1), filter ${CONFIG.ENTRANCE_MS}ms cubic-bezier(0.16, 1, 0.3, 1), transform ${CONFIG.ENTRANCE_MS}ms cubic-bezier(0.16, 1, 0.3, 1)`,
    });

    // Create inner content — PNG img or inline SVG
    if (logoDef.type === "png") {
      const img = document.createElement("img");
      img.src = logoDef.src;
      img.alt = logoDef.label || "";
      img.draggable = false;
      Object.assign(img.style, {
        width: "100%",
        height: "100%",
        objectFit: "contain",
        pointerEvents: "none",
      });
      el.appendChild(img);
    } else {
      el.innerHTML = logoDef.svg;
      const svg = el.querySelector("svg");
      if (svg) {
        Object.assign(svg.style, {
          width: "100%",
          height: "100%",
        });
      }
    }

    // Trigger entrance on next animation frame
    requestAnimationFrame(() => {
      el.style.opacity = "1";
      el.style.filter = "blur(0px)";
      el.style.transform = `rotate(${rotation}deg) scale(1)`;
    });

    return {
      el,
      createdAt: performance.now(),
      rotation,
      phase: "entering", // entering → visible → exiting → done
    };
  }, []);

  useEffect(() => {
    // ─── Eligibility ───
    const mql768 = window.matchMedia("(max-width: 768px)");
    const mqFine = window.matchMedia("(pointer: fine)");
    const mqHover = window.matchMedia("(hover: hover)");
    const mqReduce = window.matchMedia("(prefers-reduced-motion: reduce)");

    function isEligible() {
      return !mql768.matches && mqFine.matches && mqHover.matches && !mqReduce.matches;
    }

    if (!isEligible()) return;

    const layer = layerRef.current;
    const container = containerRef?.current;
    if (!layer || !container) return;

    const state = stateRef.current;
    state.isActive = true;

    // Helper to spawn a single element at (px, py)
    function appendLogoAt(px, py) {
      // Enforce max active count — remove oldest
      while (state.activeIcons.length >= CONFIG.MAX_ICONS) {
        const oldest = state.activeIcons.shift();
        if (oldest.el.parentNode) oldest.el.parentNode.removeChild(oldest.el);
      }

      const logoDef = TRAIL_LOGOS[state.iconIndex % TRAIL_LOGOS.length];
      state.iconIndex++;

      const logoObj = createLogoElement(logoDef, px, py);
      layer.appendChild(logoObj.el);
      state.activeIcons.push(logoObj);
    }

    // ─── Trajectory-interpolated sequential spawning ───
    function handleCursorMove(x, y) {
      if (state.lastSpawnX === -999) {
        // Initial entry into hero bounds
        state.lastSpawnX = x;
        state.lastSpawnY = y;
        appendLogoAt(x, y);
        return;
      }

      const dx = x - state.lastSpawnX;
      const dy = y - state.lastSpawnY;
      const dist = Math.hypot(dx, dy);

      if (dist < CONFIG.SPAWN_SPACING) return;

      // Interpolate along the cursor trajectory line
      const numSteps = Math.min(
        Math.floor(dist / CONFIG.SPAWN_SPACING),
        CONFIG.MAX_STEPS_PER_EVENT
      );

      for (let s = 1; s <= numSteps; s++) {
        const ratio = (s * CONFIG.SPAWN_SPACING) / dist;
        const interpX = state.lastSpawnX + dx * ratio;
        const interpY = state.lastSpawnY + dy * ratio;
        appendLogoAt(interpX, interpY);
      }

      // Advance last spawn position by the steps taken
      const finalRatio = (numSteps * CONFIG.SPAWN_SPACING) / dist;
      state.lastSpawnX = state.lastSpawnX + dx * finalRatio;
      state.lastSpawnY = state.lastSpawnY + dy * finalRatio;
    }

    // ─── Animation lifecycle loop ───
    function tick() {
      if (!state.isActive) return;

      const now = performance.now();
      const toRemove = [];

      for (let i = 0; i < state.activeIcons.length; i++) {
        const icon = state.activeIcons[i];
        const age = now - icon.createdAt;

        if (icon.phase === "entering" && age >= CONFIG.ENTRANCE_MS) {
          icon.phase = "visible";
        }

        if (icon.phase === "visible" && age >= CONFIG.ENTRANCE_MS + CONFIG.VISIBLE_MS) {
          // Begin exit — smooth fade-out and slight scale-down
          icon.phase = "exiting";
          icon.exitStart = now;
          icon.el.style.transition = `opacity ${CONFIG.EXIT_MS}ms ease-out, filter ${CONFIG.EXIT_MS}ms ease-out, transform ${CONFIG.EXIT_MS}ms ease-out`;
          icon.el.style.opacity = "0";
          icon.el.style.filter = "blur(2px)";
          icon.el.style.transform = `rotate(${icon.rotation}deg) scale(0.88)`;
        }

        if (icon.phase === "exiting" && now - icon.exitStart >= CONFIG.EXIT_MS) {
          icon.phase = "done";
          toRemove.push(i);
        }
      }

      // Remove expired elements
      for (let i = toRemove.length - 1; i >= 0; i--) {
        const idx = toRemove[i];
        const icon = state.activeIcons[idx];
        if (icon.el.parentNode) icon.el.parentNode.removeChild(icon.el);
        state.activeIcons.splice(idx, 1);
      }

      state.rafId = requestAnimationFrame(tick);
    }

    state.rafId = requestAnimationFrame(tick);

    // ─── Mouse handler ───
    function handleMouseMove(e) {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Only spawn inside hero bounds
      if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        handleCursorMove(x, y);
      } else {
        // Cursor moved outside hero; reset tracking so re-entry starts fresh
        state.lastSpawnX = -999;
        state.lastSpawnY = -999;
      }
    }

    // ─── Resize / media change cleanup ───
    function handleMediaChange() {
      if (!isEligible()) {
        cleanup();
      }
    }

    // ─── Attach ───
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    mql768.addEventListener("change", handleMediaChange);
    mqReduce.addEventListener("change", handleMediaChange);

    // ─── Cleanup ───
    function cleanup() {
      state.isActive = false;
      if (state.rafId) {
        cancelAnimationFrame(state.rafId);
        state.rafId = null;
      }
      for (const icon of state.activeIcons) {
        if (icon.el.parentNode) icon.el.parentNode.removeChild(icon.el);
      }
      state.activeIcons = [];
      window.removeEventListener("mousemove", handleMouseMove);
      mql768.removeEventListener("change", handleMediaChange);
      mqReduce.removeEventListener("change", handleMediaChange);
    }

    return cleanup;
  }, [containerRef, createLogoElement]);

  return (
    <div
      ref={layerRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden hidden md:block"
      aria-hidden="true"
    />
  );
}
