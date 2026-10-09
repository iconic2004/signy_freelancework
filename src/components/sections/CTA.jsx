"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CTA_CONTENT } from "@/lib/constants";
import { gsap, ScrollTrigger } from "@/lib/motion";

export default function CTA() {
  const containerRef = useRef(null);
  const cardRef = useRef(null);
  const contentRef = useRef(null);

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

          // 1. CTA Card Container Scroll-Scrubbed Expansion
          gsap.fromTo(
            cardRef.current,
            { opacity: 0.35, scale: 0.95, y: 30 },
            {
              opacity: 1,
              scale: 1,
              y: 0,
              ease: "none",
              scrollTrigger: {
                trigger: containerRef.current,
                start: "top 90%",
                end: "top 40%",
                scrub: 1.2,
                invalidateOnRefresh: true,
              },
            }
          );

          // 2. Content Staggered Scroll-Scrubbed Reveal
          if (contentRef.current?.children) {
            gsap.fromTo(
              contentRef.current.children,
              { opacity: 0, y: 25 },
              {
                opacity: 1,
                y: 0,
                stagger: 0.08,
                ease: "none",
                scrollTrigger: {
                  trigger: containerRef.current,
                  start: "top 85%",
                  end: "top 45%",
                  scrub: 1,
                  invalidateOnRefresh: true,
                },
              }
            );
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-20 md:py-28 bg-white border-t border-slate-100 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={cardRef}
          className="relative rounded-3xl bg-slate-900 p-8 sm:p-14 md:p-16 text-center text-white overflow-hidden shadow-2xl will-change-transform"
        >
          {/* Subtle top accent bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-[#4ABFAD]" />

          <div
            ref={contentRef}
            className="max-w-3xl mx-auto space-y-6 relative z-10"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight will-change-transform">
              {CTA_CONTENT.headline}
            </h2>

            <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto leading-relaxed will-change-transform">
              Reach your audience directly and scale your communications with tailored bulk messaging, WhatsApp, and voice solutions.
            </p>

            <div className="pt-4 flex items-center justify-center will-change-transform">
              <Link
                href={CTA_CONTENT.buttonHref}
                className="btn-primary text-base px-8 py-4 shadow-xl hover:scale-105 transition-all duration-200 group"
              >
                <span>{CTA_CONTENT.buttonLabel}</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
