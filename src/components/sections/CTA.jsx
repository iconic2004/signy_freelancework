"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CTA_CONTENT } from "@/lib/constants";
import { gsap, ScrollTrigger } from "@/lib/motion";

export default function CTA() {
  const containerRef = useRef(null);
  const cardRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const buttonRef = useRef(null);

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
            { opacity: 0.4, scale: 0.96, y: 30 },
            {
              opacity: 1,
              scale: 1,
              y: 0,
              ease: "none",
              scrollTrigger: {
                trigger: containerRef.current,
                start: "top 90%",
                end: "top 45%",
                scrub: 0.4,
                invalidateOnRefresh: true,
              },
            }
          );

          // 2. Masked Line Typography Reveal
          gsap.fromTo(
            [titleRef.current, descRef.current, buttonRef.current],
            { y: "100%", opacity: 0 },
            {
              y: "0%",
              opacity: 1,
              stagger: 0.1,
              ease: "none",
              scrollTrigger: {
                trigger: containerRef.current,
                start: "top 85%",
                end: "top 50%",
                scrub: 0.4,
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
      className="py-20 md:py-28 bg-white border-t border-slate-100 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={cardRef}
          className="relative rounded-3xl bg-slate-900 p-8 sm:p-14 md:p-16 text-center text-white overflow-hidden shadow-2xl will-change-transform"
        >
          {/* Top brand accent bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-[#36BEA4]" />

          <div className="max-w-3xl mx-auto space-y-6 relative z-10">
            <div className="overflow-hidden py-1">
              <h2
                ref={titleRef}
                className="signy-section-heading leading-tight will-change-transform"
                style={{ color: "#4ABFAD" }}
              >
                {CTA_CONTENT.headline}
              </h2>
            </div>

            <div className="overflow-hidden py-1">
              <p
                ref={descRef}
                className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto leading-relaxed will-change-transform"
              >
                Reach your audience directly and scale your communications with tailored bulk messaging, WhatsApp, and voice solutions.
              </p>
            </div>

            <div className="overflow-hidden py-2 flex items-center justify-center">
              <div ref={buttonRef} className="will-change-transform">
                <Link
                  href={CTA_CONTENT.buttonHref}
                  className="btn-primary text-base px-8 py-4 !shadow-none hover:!shadow-none hover:scale-105 transition-all duration-200 group inline-flex items-center gap-2"
                  style={{ boxShadow: "none" }}
                >
                  <span>{CTA_CONTENT.buttonLabel}</span>
                  <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
