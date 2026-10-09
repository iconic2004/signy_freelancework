"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { 
  MessageSquare, 
  PhoneCall, 
  Volume2, 
  ShieldCheck, 
  Sparkles, 
  Bot, 
  ArrowRight 
} from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { gsap, ScrollTrigger } from "@/lib/motion";

const ICON_MAP = {
  MessageSquare,
  PhoneCall,
  Volume2,
  ShieldCheck,
  Sparkles,
  Bot
};

export default function Services() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
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

          // 2. 6 Service Cards Staggered Scroll-Scrubbed Entrance
          gsap.fromTo(
            cardsRef.current,
            { opacity: 0, y: 45, scale: 0.97 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              stagger: 0.08,
              ease: "none",
              scrollTrigger: {
                trigger: gridRef.current,
                start: "top 85%",
                end: "top 35%",
                scrub: 1.2,
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
      className="py-20 md:py-28 bg-white border-t border-slate-100 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={headerRef}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <p className="text-xs uppercase tracking-widest text-[#4ABFAD] font-bold will-change-transform">
            Our Services
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight will-change-transform">
            What we are offering
          </h2>
          <p className="text-slate-600 text-base max-w-2xl mx-auto will-change-transform">
            Comprehensive messaging and communication solutions tailored to grow your business and streamline customer engagement.
          </p>
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
                className="group relative rounded-2xl p-8 bg-slate-50/70 border border-slate-200/80 hover:border-[#4ABFAD]/60 hover:bg-white hover:shadow-xl hover:shadow-[#4ABFAD]/5 transition-all duration-300 flex flex-col justify-between will-change-transform"
              >
                <div>
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-[#4ABFAD]/10 text-[#4ABFAD] flex items-center justify-center mb-6 group-hover:bg-[#4ABFAD] group-hover:text-white group-hover:scale-105 transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#4ABFAD] transition-colors">
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
                    className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 group-hover:text-[#4ABFAD] transition-colors"
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
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-[#4ABFAD] transition-colors group"
          >
            <span>View all service details</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
