"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, CheckCircle2, TrendingDown, Headphones, Settings } from "lucide-react";
import { BENEFITS } from "@/lib/constants";
import { gsap, ScrollTrigger, MOTION_EASE } from "@/lib/motion";

const BENEFIT_ICONS = [TrendingDown, Headphones, Settings];

export default function Benefits() {
  const [activeSlide, setActiveSlide] = useState(0);
  const sectionRef = useRef(null);
  const eyebrowRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const pillarGridRef = useRef(null);
  const showcaseRef = useRef(null);
  const showcaseContentRef = useRef(null);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % BENEFITS.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + BENEFITS.length) % BENEFITS.length);
  };

  // Immediate tactile transition on user click (slide switch)
  useEffect(() => {
    if (!showcaseContentRef.current) return;

    gsap.fromTo(
      showcaseContentRef.current.children,
      { opacity: 0, y: 10 },
      {
        opacity: 1,
        y: 0,
        duration: 0.35,
        stagger: 0.05,
        ease: MOTION_EASE.outQuart,
      }
    );
  }, [activeSlide]);

  // Scroll-Scrubbed Visual Animations
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

          // 1. Masked Line Typography Reveal
          gsap.fromTo(
            [eyebrowRef.current, titleRef.current, descRef.current],
            { y: "100%", opacity: 0 },
            {
              y: "0%",
              opacity: 1,
              stagger: 0.1,
              ease: "none",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 85%",
                end: "top 55%",
                scrub: 0.4,
                invalidateOnRefresh: true,
              },
            }
          );

          // 2. Pillars Grid Scroll-Scrubbed Reveal
          if (pillarGridRef.current?.children) {
            gsap.fromTo(
              pillarGridRef.current.children,
              { opacity: 0, y: 35, scale: 0.98 },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                stagger: 0.08,
                ease: "none",
                scrollTrigger: {
                  trigger: pillarGridRef.current,
                  start: "top 85%",
                  end: "top 45%",
                  scrub: 0.4,
                  invalidateOnRefresh: true,
                },
              }
            );
          }

          // 3. Featured Showcase Card Scroll-Scrubbed Settle
          if (showcaseRef.current) {
            gsap.fromTo(
              showcaseRef.current,
              { opacity: 0.4, y: 30, scale: 0.98 },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                ease: "none",
                scrollTrigger: {
                  trigger: showcaseRef.current,
                  start: "top 85%",
                  end: "top 50%",
                  scrub: 0.4,
                  invalidateOnRefresh: true,
                },
              }
            );
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const current = BENEFITS[activeSlide];
  const Icon = BENEFIT_ICONS[activeSlide] || CheckCircle2;

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 bg-slate-50 border-t border-slate-200/70 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Masked Line Typography */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="overflow-hidden py-1">
            <p
              ref={eyebrowRef}
              className="text-xs uppercase tracking-widest text-[#36BEA4] font-bold will-change-transform"
            >
              The Signy Advantage
            </p>
          </div>

          <div className="overflow-hidden py-1">
            <h2
              ref={titleRef}
              className="signy-section-heading will-change-transform"
            >
              Why should you choose us?
            </h2>
          </div>

          <div className="overflow-hidden py-1">
            <p
              ref={descRef}
              className="text-slate-600 text-base max-w-2xl mx-auto will-change-transform"
            >
              Discover why hundreds of organizations rely on our dependable communication infrastructure and expert team.
            </p>
          </div>
        </div>

        {/* Benefits Pillar Cards Navigation */}
        <div
          ref={pillarGridRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
        >
          {BENEFITS.map((benefit, index) => {
            const ItemIcon = BENEFIT_ICONS[index] || CheckCircle2;
            const isActive = activeSlide === index;

            return (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`text-left p-6 sm:p-8 rounded-2xl border transition-all duration-300 flex flex-col justify-between cursor-pointer will-change-transform ${
                  isActive
                    ? "bg-white border-[#36BEA4] shadow-xl shadow-[#36BEA4]/10 scale-[1.02]"
                    : "bg-white/70 border-slate-200 hover:border-slate-300 hover:bg-white text-slate-700"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                        isActive
                          ? "bg-[#36BEA4] text-white"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      <ItemIcon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-slate-400">
                      0{index + 1}
                    </span>
                  </div>

                  <h3
                    className={`signy-card-heading mb-2 transition-colors ${
                      isActive ? "text-slate-900" : "text-slate-700"
                    }`}
                  >
                    {benefit.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed line-clamp-3">
                    {benefit.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
                  <span className={isActive ? "text-[#36BEA4]" : "text-slate-400"}>
                    {isActive ? "Active View" : "Click to view"}
                  </span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-[#36BEA4]" />
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Featured Detailed Slide View */}
        <div
          ref={showcaseRef}
          className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-lg relative overflow-hidden will-change-transform"
        >
          <div ref={showcaseContentRef} className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#36BEA4]/10 text-[#36BEA4] text-xs font-bold">
              <Icon className="w-4 h-4" />
              <span>Pillar {activeSlide + 1} of {BENEFITS.length}</span>
            </div>

            <h3 className="signy-subsection-heading leading-snug">
              {current.title}
            </h3>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              {current.description}
            </p>

            {/* Slide Navigation Controls */}
            <div className="pt-4 flex items-center gap-3">
              <button
                onClick={prevSlide}
                className="p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
                aria-label="Previous benefit"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="text-xs font-bold text-slate-500 px-2">
                {activeSlide + 1} / {BENEFITS.length}
              </span>
              <button
                onClick={nextSlide}
                className="p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
                aria-label="Next benefit"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
