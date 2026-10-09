"use client";

import { useState, useEffect, useRef } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { gsap, ScrollTrigger, MOTION_EASE } from "@/lib/motion";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const featuredCardRef = useRef(null);
  const cardBodyRef = useRef(null);
  const quickSelectRef = useRef(null);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const selectTestimonial = (idx) => {
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  };

  // Immediate tactile transition on user click (switching testimonials)
  useEffect(() => {
    if (!cardBodyRef.current) return;

    gsap.fromTo(
      cardBodyRef.current,
      { opacity: 0, x: direction * 16 },
      {
        opacity: 1,
        x: 0,
        duration: 0.38,
        ease: MOTION_EASE.outQuart,
      }
    );
  }, [currentIndex, direction]);

  // Scroll-Scrubbed Visual Entrance
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

          // 1. Header Scroll-Scrubbed Reveal
          if (headerRef.current?.children) {
            gsap.fromTo(
              headerRef.current.children,
              { opacity: 0, y: 30 },
              {
                opacity: 1,
                y: 0,
                stagger: 0.08,
                ease: "none",
                scrollTrigger: {
                  trigger: sectionRef.current,
                  start: "top 85%",
                  end: "top 50%",
                  scrub: 1,
                  invalidateOnRefresh: true,
                },
              }
            );
          }

          // 2. Featured Testimonial Card Scroll-Scrubbed Settle
          if (featuredCardRef.current) {
            gsap.fromTo(
              featuredCardRef.current,
              { opacity: 0.3, y: 40, scale: 0.98 },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                ease: "none",
                scrollTrigger: {
                  trigger: featuredCardRef.current,
                  start: "top 85%",
                  end: "top 45%",
                  scrub: 1.1,
                  invalidateOnRefresh: true,
                },
              }
            );
          }

          // 3. Quick Select Cards Scroll-Scrubbed Stagger
          if (quickSelectRef.current?.children) {
            gsap.fromTo(
              quickSelectRef.current.children,
              { opacity: 0, y: 30 },
              {
                opacity: 1,
                y: 0,
                stagger: 0.06,
                ease: "none",
                scrollTrigger: {
                  trigger: quickSelectRef.current,
                  start: "top 88%",
                  end: "top 55%",
                  scrub: 1,
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

  const active = TESTIMONIALS[currentIndex];

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 bg-slate-50 border-t border-slate-200/70 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={headerRef}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <p className="text-xs uppercase tracking-widest text-[#4ABFAD] font-bold will-change-transform">
            Feedback &amp; Reviews
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight will-change-transform">
            Client&apos;s Testimonials
          </h2>
          <p className="text-slate-600 text-base max-w-2xl mx-auto will-change-transform">
            What our clients have to say about partnering with Signy for their business messaging needs.
          </p>
        </div>

        {/* Featured Testimonial Card */}
        <div className="max-w-3xl mx-auto mb-12">
          <div
            ref={featuredCardRef}
            className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-xl shadow-slate-200/50 relative overflow-hidden will-change-transform"
          >
            <div className="absolute top-6 right-8 text-slate-100 pointer-events-none">
              <Quote className="w-20 h-20 text-slate-100" />
            </div>

            <div ref={cardBodyRef} className="relative z-10 space-y-6">
              {/* Star Rating */}
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 transition-colors ${
                      i < active.rating
                        ? "text-amber-400 fill-amber-400"
                        : "text-slate-200"
                    }`}
                  />
                ))}
                <span className="ml-2 text-xs font-bold text-slate-500">
                  {active.rating}.0 / 5.0
                </span>
              </div>

              {/* Review Quote */}
              <blockquote className="text-base sm:text-xl font-medium text-slate-800 leading-relaxed italic min-h-[5rem]">
                &ldquo;{active.review}&rdquo;
              </blockquote>

              {/* Footer Controls */}
              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500">
                  Verified Client Review
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={prevTestimonial}
                    className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <span className="text-xs font-bold text-slate-500 px-1">
                    {currentIndex + 1} / {TESTIMONIALS.length}
                  </span>
                  <button
                    onClick={nextTestimonial}
                    className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Cards Quick Select */}
        <div
          ref={quickSelectRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto"
        >
          {TESTIMONIALS.map((item, index) => (
            <button
              key={index}
              onClick={() => selectTestimonial(index)}
              className={`text-left p-4 rounded-xl border transition-all duration-200 cursor-pointer will-change-transform ${
                currentIndex === index
                  ? "bg-white border-[#4ABFAD] shadow-md shadow-[#4ABFAD]/10 scale-[1.02]"
                  : "bg-white/60 hover:bg-white border-slate-200 text-slate-600"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-slate-800">Review 0{index + 1}</span>
                <span className="text-xs text-amber-500 font-bold">★ {item.rating}.0</span>
              </div>
              <p className="text-xs text-slate-500 line-clamp-2 italic">
                &ldquo;{item.review}&rdquo;
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
