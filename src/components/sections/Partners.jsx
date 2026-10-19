"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { PARTNER_LOGOS } from "@/lib/constants";
import { gsap, ScrollTrigger } from "@/lib/motion";

export default function Partners() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const viewportRef = useRef(null);
  const logoRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          reduceMotion: "(prefers-reduced-motion: reduce)",
          standard: "(prefers-reduced-motion: no-preference)",
        },
        (context) => {
          const { reduceMotion } = context.conditions;

          // 1. Heading Reveal
          gsap.fromTo(
            headingRef.current,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              ease: "none",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 90%",
                end: "top 65%",
                scrub: 0.4,
                invalidateOnRefresh: true,
              },
            }
          );

          if (reduceMotion) {
            return;
          }

          // 2. High-Performance Mathematical Wave Marquee Engine
          const logosCount = logoRefs.current.length;
          if (logosCount === 0) return;

          // Physics & geometry parameters
          const isMobile = window.innerWidth < 640;
          const itemSpacing = isMobile ? 100 : 140; // Horizontal spacing between logo centers
          const totalWidth = itemSpacing * logosCount;
          
          let baseAmplitude = isMobile ? 16 : 28;
          let currentAmplitude = baseAmplitude;
          const maxAmplitude = isMobile ? 24 : 45;
          const frequency = isMobile ? 0.007 : 0.005; // Spatial frequency of sine wave

          const baseVelocity = 1.0; // Idle horizontal speed (px/frame)
          let currentVelocity = baseVelocity;
          let targetVelocity = baseVelocity;
          let phase = 0;

          // Initialize horizontal positions for all logos across the track
          const items = logoRefs.current.map((el, i) => ({
            el,
            x: i * itemSpacing - totalWidth * 0.25,
          }));

          // Track window scroll velocity using GSAP ScrollTrigger
          const scrollTracker = ScrollTrigger.create({
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            onUpdate: (self) => {
              // self.getVelocity() returns px/sec. Scale to smooth velocity impulse
              const vel = self.getVelocity();
              // Scroll down gives positive velocity; scroll up gives negative
              targetVelocity = baseVelocity + vel * 0.0015;
              // Subtle wave amplitude reaction to scroll speed
              const speedMag = Math.abs(vel);
              const targetAmp = Math.min(maxAmplitude, baseAmplitude + speedMag * 0.006);
              currentAmplitude += (targetAmp - currentAmplitude) * 0.1;
            },
          });

          // Single ticker loop for 60fps smooth animation without React re-renders
          const updateMarquee = () => {
            // Smoothly damp velocity back towards base idle speed when scroll slows/stops
            currentVelocity += (targetVelocity - currentVelocity) * 0.06;
            targetVelocity += (baseVelocity - targetVelocity) * 0.04;
            currentAmplitude += (baseAmplitude - currentAmplitude) * 0.04;

            // Advance phase continuously for organic fluid wave flow
            phase += 0.015 + Math.abs(currentVelocity) * 0.001;

            items.forEach((item) => {
              if (!item.el) return;

              // Advance horizontal position
              item.x -= currentVelocity;

              // Infinite wrap handling
              if (item.x < -itemSpacing * 2) {
                item.x += totalWidth;
              } else if (item.x > totalWidth - itemSpacing * 2) {
                item.x -= totalWidth;
              }

              // Compute smooth vertical sine wave offset
              const y = Math.sin(phase + item.x * frequency) * currentAmplitude;

              // Subtle rotation tilt tied to slope of sine wave for extra elegance
              const dy = Math.cos(phase + item.x * frequency) * currentAmplitude * frequency;
              const rotation = Math.max(-6, Math.min(6, dy * 12));

              // Direct hardware-accelerated transform write
              item.el.style.transform = `translate3d(${item.x}px, ${y}px, 0) rotate(${rotation}deg)`;
            });
          };

          gsap.ticker.add(updateMarquee);

          // Teardown ticker & trigger on unmount/revert
          return () => {
            gsap.ticker.remove(updateMarquee);
            scrollTracker.kill();
          };
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Duplicate partner logos array to ensure a long seamless track
  const marqueeLogos = [
    ...PARTNER_LOGOS,
    ...PARTNER_LOGOS,
    ...PARTNER_LOGOS,
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-white border-y border-slate-100 relative overflow-hidden select-none"
    >
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 md:mb-10 text-center">
        <p
          ref={headingRef}
          className="text-xs uppercase tracking-widest text-slate-500 font-bold will-change-transform"
        >
          Trusted by leading enterprises &amp; fast-growing brands
        </p>
      </div>

      {/* Signature Wave Marquee Track Viewport */}
      <div
        ref={viewportRef}
        className="relative w-full overflow-hidden flex items-center h-44 sm:h-52"
      >
        {/* Subtle Left & Right Radial Edge Fade Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        {/* Absolute Positioning Canvas for Smooth Sine-Wave Track */}
        <div className="relative w-full h-full flex items-center justify-center">
          {marqueeLogos.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              ref={(el) => (logoRefs.current[index] = el)}
              className="absolute top-1/2 left-0 -mt-10 sm:-mt-12 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white border border-slate-200/90 shadow-md shadow-slate-200/50 flex items-center justify-center p-3.5 hover:border-[#36BEA4] hover:shadow-lg hover:shadow-[#36BEA4]/15 transition-colors duration-300 group cursor-pointer"
              title={partner.name}
              style={{ willChange: "transform" }}
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={partner.src}
                  alt={partner.name}
                  fill
                  sizes="(max-width: 640px) 80px, 96px"
                  className="object-contain p-1.5 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
