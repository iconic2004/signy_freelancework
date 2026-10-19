"use client";

import { useEffect, useRef } from "react";
import { STATS } from "@/lib/constants";
import { Users, Award, ShieldCheck } from "lucide-react";
import { gsap, ScrollTrigger } from "@/lib/motion";

const STAT_ICONS = [Users, ShieldCheck, Award];

export default function Stats() {
  const sectionRef = useRef(null);
  const eyebrowRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const gridRef = useRef(null);
  const cardsRef = useRef([]);
  const valueRefs = useRef([]);

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
            if (valueRefs.current[0]) valueRefs.current[0].textContent = "400+";
            if (valueRefs.current[1]) valueRefs.current[1].textContent = "Trusted";
            if (valueRefs.current[2]) valueRefs.current[2].textContent = "330";
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

          // 2. Stat Cards Staggered Scroll-Scrubbed Entrance
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
                end: "top 45%",
                scrub: 0.4,
                invalidateOnRefresh: true,
              },
            }
          );

          // 3. Numeric Counter Scroll-Scrubbed Direct DOM Update (Zero React Rerenders)
          const counterObj = { clients: 0, projects: 0 };

          gsap.to(counterObj, {
            clients: 400,
            projects: 330,
            ease: "none",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 85%",
              end: "top 40%",
              scrub: 0.3,
              invalidateOnRefresh: true,
              onUpdate: () => {
                if (valueRefs.current[0]) {
                  valueRefs.current[0].textContent = `${Math.floor(counterObj.clients)}+`;
                }
                if (valueRefs.current[2]) {
                  valueRefs.current[2].textContent = `${Math.floor(counterObj.projects)}`;
                }
              },
            },
          });
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
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
              Proven Track Record
            </p>
          </div>

          <div className="overflow-hidden py-1">
            <h2
              ref={titleRef}
              className="signy-section-heading will-change-transform"
            >
              Ready to see what <span className="text-[#36BEA4]">Signy</span> can do for you?
            </h2>
          </div>

          <div className="overflow-hidden py-1">
            <p
              ref={descRef}
              className="text-slate-600 text-base max-w-2xl mx-auto will-change-transform"
            >
              Experience reliable, high-performance messaging backed by over a decade of industry expertise.
            </p>
          </div>
        </div>

        {/* 3 Genuine Stats Cards Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {STATS.map((item, index) => {
            const Icon = STAT_ICONS[index] || Users;

            return (
              <div
                key={item.title}
                ref={(el) => (cardsRef.current[index] = el)}
                className="bg-slate-50/70 border border-slate-200/80 rounded-2xl p-8 hover:bg-white hover:border-[#36BEA4]/60 hover:shadow-xl hover:shadow-[#36BEA4]/5 transition-all duration-300 flex flex-col justify-between group will-change-transform"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#36BEA4]/10 text-[#36BEA4] flex items-center justify-center mb-6 group-hover:bg-[#36BEA4] group-hover:text-white group-hover:scale-105 transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div
                    ref={(el) => (valueRefs.current[index] = el)}
                    className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mb-2 font-mono"
                  >
                    {item.value}
                  </div>

                  <h3 className="signy-card-heading text-slate-800 mb-3 capitalize">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
