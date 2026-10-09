"use client";

import { useEffect, useRef, useState } from "react";
import { STATS } from "@/lib/constants";
import { Users, Award, ShieldCheck } from "lucide-react";
import { gsap, ScrollTrigger } from "@/lib/motion";

const STAT_ICONS = [Users, ShieldCheck, Award];

export default function Stats() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);
  const cardsRef = useRef([]);
  const [counts, setCounts] = useState({
    clientCount: 0,
    projectCount: 0,
  });

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
            setCounts({ clientCount: 400, projectCount: 330 });
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

          // 2. Stat Cards Staggered Scroll-Scrubbed Entrance
          gsap.fromTo(
            cardsRef.current,
            { opacity: 0, y: 40, scale: 0.97 },
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
                scrub: 1.1,
                invalidateOnRefresh: true,
              },
            }
          );

          // 3. Numeric Counter Scroll-Scrubbed Interpolation
          // Scrolling down increments; scrolling up decrements; stopping pauses in place
          const counterObj = { clients: 0, projects: 0 };

          gsap.to(counterObj, {
            clients: 400,
            projects: 330,
            ease: "none",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 85%",
              end: "top 35%",
              scrub: 1,
              invalidateOnRefresh: true,
              onUpdate: () => {
                setCounts({
                  clientCount: Math.floor(counterObj.clients),
                  projectCount: Math.floor(counterObj.projects),
                });
              },
            },
          });
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const getDisplayValue = (item) => {
    if (item.value.includes("400")) {
      return `${counts.clientCount}+`;
    }
    if (item.value === "330") {
      return counts.projectCount;
    }
    return item.value;
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 bg-white border-t border-slate-100 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={headerRef}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <p className="text-xs uppercase tracking-widest text-[#4ABFAD] font-bold will-change-transform">
            Proven Track Record
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight will-change-transform">
            Ready to see what <span className="text-[#4ABFAD]">Signy</span> can do for you?
          </h2>
          <p className="text-slate-600 text-base max-w-2xl mx-auto will-change-transform">
            Experience reliable, high-performance messaging backed by over a decade of industry expertise.
          </p>
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
                className="bg-slate-50/70 border border-slate-200/80 rounded-2xl p-8 hover:bg-white hover:border-[#4ABFAD]/60 hover:shadow-xl hover:shadow-[#4ABFAD]/5 transition-all duration-300 flex flex-col justify-between group will-change-transform"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#4ABFAD]/10 text-[#4ABFAD] flex items-center justify-center mb-6 group-hover:bg-[#4ABFAD] group-hover:text-white group-hover:scale-105 transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mb-2 font-mono">
                    {getDisplayValue(item)}
                  </div>

                  <h3 className="text-lg font-bold text-slate-800 mb-3 capitalize">
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
