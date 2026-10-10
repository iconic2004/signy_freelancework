"use client";

import { useEffect, useRef } from "react";

/**
 * SIGNY HERO — CIRCULAR CURSOR-FOLLOWING RADIAL DASH TEXTURE
 * Inspired by Google Antigravity.
 *
 * Renders a large, distinctive circular radial field (~600px diameter) of tiny,
 * elegantly curved dash marks in Signy brand teal (#36BEA4), mint, and neutral slate.
 *
 * Requirements:
 * - Hero section only (absolute inset-0 z-0 overflow-hidden).
 * - Smoothly follows cursor as a single organized circular field.
 * - Desktop only (disabled on screens <= 768px, touch-only, or prefers-reduced-motion).
 * - Zero React state updates on mouse move.
 */
export default function InteractiveTexture({ containerRef }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    // 1. Eligibility Check (Desktop > 768px + Fine Pointer + No Reduced Motion)
    const isMobile = window.innerWidth <= 768;
    const isTouchOnly =
      window.matchMedia("(pointer: coarse)").matches &&
      !window.matchMedia("(pointer: fine)").matches;
    const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isMobile || isTouchOnly || isReducedMotion) {
      return;
    }

    const canvas = canvasRef.current;
    const container = containerRef?.current || canvas?.parentElement;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animFrameId = null;
    let width = 0;
    let height = 0;
    let dpr = 1;

    // Mouse tracking state (relative to Hero section)
    const mouse = {
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0,
      isHovering: false,
      speed: 0,
    };

    // Color palette sampled from Signy brand teal & complementary mint/slate
    const COLOR_PALETTE = [
      { r: 54, g: 190, b: 164 },  // #36BEA4 — Official Signy Teal (Logo "Y")
      { r: 45, g: 212, b: 191 },  // #2DD4BF — Bright Mint Teal
      { r: 94, g: 234, b: 212 },  // #5EEAD4 — Light Pale Mint
      { r: 148, g: 163, b: 184 }, // #94A3B8 — Muted Neutral Slate
      { r: 203, g: 213, b: 225 }, // #CBD5E1 — Light Warm Slate
    ];

    // Radial dash geometry rings
    let rings = [];
    const NUM_RINGS = 14;
    const INNER_RADIUS = 40;  // Clean sparse center around cursor
    const OUTER_RADIUS = 310; // Max field radius (~620px diameter)

    // Generate concentric radial dash structure
    const initRadialRings = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = container.getBoundingClientRect();
      width = rect.width || window.innerWidth;
      height = rect.height || 600;

      // Default mouse to center of hero if not hovering yet
      if (!mouse.isHovering) {
        mouse.x = width * 0.5;
        mouse.y = height * 0.45;
        mouse.targetX = mouse.x;
        mouse.targetY = mouse.y;
      }

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);

      rings = [];
      const radiusStep = (OUTER_RADIUS - INNER_RADIUS) / NUM_RINGS;

      for (let i = 0; i < NUM_RINGS; i++) {
        const radius = INNER_RADIUS + i * radiusStep;
        // Number of dashes on this ring proportional to circumference
        const dashCount = Math.floor((2 * Math.PI * radius) / 22);
        const dashes = [];

        for (let j = 0; j < dashCount; j++) {
          const baseAngle = (j / dashCount) * Math.PI * 2;
          const colorObj = COLOR_PALETTE[(i + j * 3) % COLOR_PALETTE.length];
          // Outer rings fade opacity gradually
          const baseAlpha = Math.max(0.15, 0.75 - Math.pow(i / NUM_RINGS, 1.4) * 0.55);

          dashes.push({
            baseAngle,
            dashLength: 5 + (i % 3) * 1.5, // 5px to 8px dash marks
            color: colorObj,
            baseAlpha,
            tiltOffset: (j % 2 === 0 ? 1 : -1) * 0.15,
          });
        }

        rings.push({
          radius,
          dashes,
          rotation: (i * Math.PI) / 8, // Initial staggered angle offset
          speed: (i % 2 === 0 ? 1 : -0.7) * 0.0018, // Slow counter-rotating rings
        });
      }
    };

    // Mouse tracking relative to Hero bounding box
    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const relativeX = e.clientX - rect.left;
      const relativeY = e.clientY - rect.top;

      if (
        relativeX >= -100 &&
        relativeX <= rect.width + 100 &&
        relativeY >= -100 &&
        relativeY <= rect.height + 100
      ) {
        // Calculate mouse movement speed for dynamic swirl impulse
        const dx = relativeX - mouse.targetX;
        const dy = relativeY - mouse.targetY;
        mouse.speed = Math.hypot(dx, dy);

        mouse.targetX = relativeX;
        mouse.targetY = relativeY;
        mouse.isHovering = true;
      } else {
        mouse.isHovering = false;
      }
    };

    const handleMouseLeave = () => {
      mouse.isHovering = false;
    };

    const handleResize = () => {
      if (window.innerWidth <= 768) {
        if (animFrameId) cancelAnimationFrame(animFrameId);
        ctx.clearRect(0, 0, width, height);
        return;
      }
      initRadialRings();
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });

    initRadialRings();

    // Main 60fps rendering loop
    const render = () => {
      // Fluid lerp tracking towards mouse pointer
      mouse.x += (mouse.targetX - mouse.x) * 0.12;
      mouse.y += (mouse.targetY - mouse.y) * 0.12;
      mouse.speed *= 0.92; // Decay speed impulse

      ctx.clearRect(0, 0, width, height);

      // Render concentric radial dash rings around moving cursor center
      const swirlImpulse = Math.min(0.015, mouse.speed * 0.0003);

      for (let r = 0; r < rings.length; r++) {
        const ring = rings[r];
        // Advance ring rotation speed
        ring.rotation += ring.speed + swirlImpulse * (r % 2 === 0 ? 1 : -1);

        for (let d = 0; d < ring.dashes.length; d++) {
          const dash = ring.dashes[d];

          // Current angle of this dash on the circular ring
          const angle = dash.baseAngle + ring.rotation;

          // Radial center offset
          const cx = mouse.x + Math.cos(angle) * ring.radius;
          const cy = mouse.y + Math.sin(angle) * ring.radius;

          // Tangential angle for dash orientation (gently curved radial alignment)
          const dashAngle = angle + Math.PI / 2 + dash.tiltOffset;
          const halfLen = dash.dashLength * 0.5;

          const x1 = cx - Math.cos(dashAngle) * halfLen;
          const y1 = cy - Math.sin(dashAngle) * halfLen;
          const x2 = cx + Math.cos(dashAngle) * halfLen;
          const y2 = cy + Math.sin(dashAngle) * halfLen;

          // Draw short curved radial dash mark
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.lineWidth = 1.8;
          ctx.lineCap = "round";
          ctx.strokeStyle = `rgba(${dash.color.r}, ${dash.color.g}, ${dash.color.b}, ${dash.baseAlpha})`;
          ctx.stroke();
        }
      }

      animFrameId = requestAnimationFrame(render);
    };

    animFrameId = requestAnimationFrame(render);

    return () => {
      if (animFrameId) cancelAnimationFrame(animFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, [containerRef]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 hidden md:block"
      aria-hidden="true"
    />
  );
}
