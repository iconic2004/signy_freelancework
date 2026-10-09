"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { PARTNER_LOGOS } from "@/lib/constants";

export default function Partners() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const itemsRef = useRef([]);

  // Quadruple the logos so we have 40 nodes for an uninterrupted wide stream
  const logos = [
    ...PARTNER_LOGOS,
    ...PARTNER_LOGOS,
    ...PARTNER_LOGOS,
    ...PARTNER_LOGOS,
  ];

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      let animationFrameId;
      let lastScrollY = window.scrollY;
      let scrollVelocity = 0;
      let smoothedVelocity = 0;

      // Base animation parameters
      let offsetX = 0;
      let currentSpeed = 1.2; // Base idle drift speed (px/frame)
      const baseSpeed = 1.2;
      let phase = 0;

      // Dynamic viewport responsive values
      let isMobile = window.innerWidth < 768;
      let itemSpacing = isMobile ? 100 : 155;
      let baseAmplitude = isMobile ? 22 : 45;
      let currentAmplitude = baseAmplitude;
      let frequency = isMobile ? 0.015 : 0.009;

      const totalItems = logos.length;
      const totalWidth = totalItems * itemSpacing;
      const buffer = isMobile ? 120 : 200;

      // Handle window resize dynamically
      const handleResize = () => {
        isMobile = window.innerWidth < 768;
        itemSpacing = isMobile ? 100 : 155;
        baseAmplitude = isMobile ? 22 : 45;
        frequency = isMobile ? 0.015 : 0.009;
      };
      window.addEventListener("resize", handleResize);

      // Scroll listener to compute scroll velocity
      const handleScroll = () => {
        const currentScrollY = window.scrollY;
        const delta = currentScrollY - lastScrollY;
        scrollVelocity = delta;
        lastScrollY = currentScrollY;
      };
      window.addEventListener("scroll", handleScroll, { passive: true });

      // Main 60fps Animation Loop
      const render = () => {
        // 1. Smooth scroll velocity (damped lerp)
        smoothedVelocity += (scrollVelocity - smoothedVelocity) * 0.1;
        // Decay raw scroll velocity if scroll stops
        scrollVelocity *= 0.9;

        // 2. Compute target horizontal speed:
        // Scrolling DOWN (positive delta) pushes logos left (-x)
        // Scrolling UP (negative delta) pushes logos right (+x)
        const scrollInfluence = smoothedVelocity * -0.45;
        const targetSpeed = baseSpeed + scrollInfluence;
        currentSpeed += (targetSpeed - currentSpeed) * 0.08;

        // 3. Update horizontal offset
        offsetX += currentSpeed;

        // 4. Compute dynamic wave amplitude based on velocity intensity
        const extraAmp = Math.min(Math.abs(smoothedVelocity) * 0.6, 25);
        const targetAmplitude = baseAmplitude + extraAmp;
        currentAmplitude += (targetAmplitude - currentAmplitude) * 0.08;

        // 5. Update wave phase (continuous organic motion)
        phase += 0.018 + Math.abs(currentSpeed) * 0.003;

        // 6. Update position for each circle element directly via translate3d
        const containerWidth = containerRef.current
          ? containerRef.current.offsetWidth
          : 1200;

        itemsRef.current.forEach((el, index) => {
          if (!el) return;

          // Compute raw horizontal position
          const initialX = index * itemSpacing;
          const rawX = initialX - offsetX;

          // Modular recycling calculation (wrap seamlessly around screen)
          let wrappedX =
            (((rawX % totalWidth) + totalWidth) % totalWidth) - buffer;

          // Hide elements that fall outside active render range to optimize GPU
          if (wrappedX < -buffer || wrappedX > containerWidth + buffer) {
            el.style.visibility = "hidden";
          } else {
            el.style.visibility = "visible";
          }

          // Compute Y coordinate on continuous sine wave
          const y = Math.sin(wrappedX * frequency + phase) * currentAmplitude;

          // Apply 3D hardware-accelerated transform
          el.style.transform = `translate3d(${wrappedX}px, ${y}px, 0)`;
        });

        animationFrameId = requestAnimationFrame(render);
      };

      animationFrameId = requestAnimationFrame(render);

      return () => {
        cancelAnimationFrame(animationFrameId);
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleResize);
      };
    }, containerRef);

    return () => ctx.revert();
  }, [logos.length]);

  return (
    <section
      ref={containerRef}
      className="py-16 md:py-24 bg-slate-50/70 border-y border-slate-200/80 relative overflow-hidden select-none"
    >
      {/* Ambient Teal Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[380px] bg-[#4ABFAD]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="bg-tech-grid absolute inset-0 opacity-15 pointer-events-none" />

      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center relative z-10">
        <p className="text-xs uppercase tracking-widest text-slate-500 font-bold font-sans">
          Trusted by 400+ leading brands &amp; high-volume platforms
        </p>
      </div>

      {/* Wave Marquee Viewport with Edge Fade Gradient Masks */}
      <div className="relative w-full h-[180px] sm:h-[220px] md:h-[260px] flex items-center overflow-hidden z-10">
        {/* Left & Right Smooth Edge Fade Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent z-20 pointer-events-none" />

        {/* Absolute Canvas Track containing floating circular nodes */}
        <div ref={trackRef} className="relative w-full h-full">
          {logos.map((partner, index) => (
            <div
              key={`wave-${partner.name}-${index}`}
              ref={(el) => (itemsRef.current[index] = el)}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-18 h-18 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-white border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_35px_rgba(74,191,173,0.22)] hover:border-[#4ABFAD]/60 hover:scale-110 transition-all duration-300 flex items-center justify-center p-3.5 sm:p-5 group cursor-pointer will-change-transform"
              title={partner.name}
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={partner.src}
                  alt={partner.name}
                  fill
                  className="object-contain p-1 sm:p-1.5 transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
