"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { PARTNER_LOGOS } from "@/lib/constants";
import { gsap, ScrollTrigger } from "@/lib/motion";

export default function Partners() {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const trackRef = useRef(null);

  // Triple logos for wide seamless horizontal stream
  const logos = [
    ...PARTNER_LOGOS,
    ...PARTNER_LOGOS,
    ...PARTNER_LOGOS,
  ];

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

          if (reduceMotion) {
            return;
          }

          // 1. Heading Scroll-Scrubbed Reveal
          gsap.fromTo(
            headingRef.current,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              ease: "none",
              scrollTrigger: {
                trigger: containerRef.current,
                start: "top 90%",
                end: "top 60%",
                scrub: 1,
                invalidateOnRefresh: true,
              },
            }
          );

          // 2. Logo Track Scroll-Scrubbed Horizontal Movement
          // Scrolling down scrubs the track smoothly across the viewport; scrolling up reverses it
          gsap.fromTo(
            trackRef.current,
            { x: 0 },
            {
              x: -360,
              ease: "none",
              scrollTrigger: {
                trigger: containerRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.2,
                invalidateOnRefresh: true,
              },
            }
          );
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-14 md:py-20 bg-white border-y border-slate-100 relative overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <p
          ref={headingRef}
          className="text-xs uppercase tracking-widest text-slate-500 font-bold will-change-transform"
        >
          Our trusted partners
        </p>
      </div>

      {/* Scroll-Scrubbed Marquee Track Viewport */}
      <div className="relative w-full overflow-hidden flex items-center py-2">
        {/* Left & Right Smooth Edge Fade Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        {/* Scroll-Scrubbed Canvas Track */}
        <div
          ref={trackRef}
          className="flex items-center gap-6 sm:gap-8 will-change-transform pl-4"
        >
          {logos.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex-shrink-0 w-32 sm:w-36 h-16 sm:h-20 bg-slate-50/80 border border-slate-200/70 rounded-xl flex items-center justify-center p-3 hover:bg-white hover:border-[#4ABFAD]/60 hover:shadow-md transition-all duration-300 group"
              title={partner.name}
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={partner.src}
                  alt={partner.name}
                  fill
                  className="object-contain p-1 opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
