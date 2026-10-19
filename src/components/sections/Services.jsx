"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  MessageSquare, 
  Volume2, 
  Sparkles, 
  Bot, 
  ArrowRight 
} from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { gsap, ScrollTrigger } from "@/lib/motion";

const ICON_MAP = {
  MessageSquare,
  Volume2,
  Sparkles,
  Bot
};

export default function Services() {
  const sectionRef = useRef(null);
  const eyebrowRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const gridRef = useRef(null);
  const cardsRef = useRef([]);

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

          // 1. Masked Line Typography Scroll-Scrubbed Reveal
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

          // 2. Service Cards Staggered Entrance
          gsap.fromTo(
            cardsRef.current,
            { opacity: 0, y: 35, scale: 0.98 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              stagger: 0.08,
              ease: "none",
              scrollTrigger: {
                trigger: gridRef.current,
                start: "top 85%",
                end: "top 40%",
                scrub: 0.4,
                invalidateOnRefresh: true,
              },
            }
          );
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-20 md:py-28 bg-white border-t border-slate-100 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Masked Line Typography */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="overflow-hidden py-1">
            <p
              ref={eyebrowRef}
              className="text-xs uppercase tracking-widest text-[#36BEA4] font-bold will-change-transform"
            >
              Our Services
            </p>
          </div>

          <div className="overflow-hidden py-1">
            <h2
              ref={titleRef}
              className="signy-section-heading will-change-transform"
            >
              What we are offering
            </h2>
          </div>

          <div className="overflow-hidden py-1">
            <p
              ref={descRef}
              className="text-slate-600 text-base max-w-2xl mx-auto will-change-transform"
            >
              Comprehensive messaging and communication solutions tailored to grow your business and streamline customer engagement.
            </p>
          </div>
        </div>

        {/* 6 Clean Service Cards Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {SERVICES.map((service, index) => {
            const Icon = ICON_MAP[service.iconName] || Sparkles;

            return (
              <div
                key={service.id}
                ref={(el) => (cardsRef.current[index] = el)}
                className="group relative rounded-2xl p-8 bg-slate-50/70 border border-slate-200/80 hover:border-[#36BEA4]/60 hover:bg-white hover:shadow-xl hover:shadow-[#36BEA4]/5 transition-all duration-300 flex flex-col justify-between will-change-transform"
              >
                <div>
                  {/* Icon / Authentic PNG Brand Logo */}
                  {service.logoSrc ? (
                    <div className="w-12 h-12 rounded-xl bg-[#36BEA4]/10 border border-[#36BEA4]/20 flex items-center justify-center mb-6 group-hover:bg-[#36BEA4]/20 group-hover:scale-105 transition-all duration-300 p-2.5 overflow-hidden">
                      <div className="relative w-7 h-7">
                        <Image
                          src={service.logoSrc}
                          alt={service.title}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="w-12 h-12 rounded-xl bg-[#36BEA4]/10 text-[#36BEA4] flex items-center justify-center mb-6 group-hover:bg-[#36BEA4] group-hover:text-white group-hover:scale-105 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                  )}

                  {/* Title */}
                  <h3 className="signy-card-heading mb-3 group-hover:text-[#36BEA4] transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {service.desc}
                  </p>
                </div>

                {/* Link */}
                <div className="pt-4 border-t border-slate-200/60">
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 group-hover:text-[#36BEA4] transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Link */}
        <div className="mt-14 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-[#36BEA4] transition-colors group"
          >
            <span>View all service details</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
