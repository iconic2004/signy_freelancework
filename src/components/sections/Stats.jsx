"use client";

import { useEffect, useRef, useState } from "react";
import { STATS } from "@/lib/constants";
import { Users, Award, ShieldCheck, MessageSquare, Sparkles, TrendingUp } from "lucide-react";

const STAT_ICONS = [Users, ShieldCheck, Award, MessageSquare];

function AnimatedCounter({ targetValue, suffix = "", decimal = "" }) {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);

  useEffect(() => {
    let startTime;
    let animationFrame;
    const duration = 2000;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeOutQuart * targetValue));

            if (progress < 1) {
              animationFrame = requestAnimationFrame(step);
            } else {
              setCount(targetValue);
            }
          };
          animationFrame = requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
      observer.disconnect();
    };
  }, [targetValue]);

  return (
    <span ref={counterRef} className="font-mono tracking-tight">
      {count}
      {decimal}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-24 md:py-32 relative bg-slate-900 text-white overflow-hidden">
      {/* Dynamic ambient lights */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[350px] bg-[#4ABFAD]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="bg-tech-grid absolute inset-0 opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#4ABFAD]/15 border border-[#4ABFAD]/30 text-[#4ABFAD] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#4ABFAD]" />
            <span>Empirical Scale &amp; Performance</span>
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Ready to see what <span className="text-[#4ABFAD]">Signy</span> can do for you?
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Proven metrics that demonstrate our commitment to low latency, maximum deliverability, and enterprise-grade reliability.
          </p>
        </div>

        {/* 4 Stats Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((item, index) => {
            const Icon = STAT_ICONS[index] || Sparkles;

            return (
              <div
                key={item.title}
                className="bg-slate-800/60 backdrop-blur-xl border border-slate-700/70 rounded-3xl p-7 relative overflow-hidden group hover:border-[#4ABFAD] transition-all duration-300 hover:-translate-y-1.5 shadow-xl flex flex-col justify-between"
              >
                {/* Top glow hover effect */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#4ABFAD] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#4ABFAD]/15 text-[#4ABFAD] flex items-center justify-center border border-[#4ABFAD]/25 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#4ABFAD] bg-[#4ABFAD]/10 px-2.5 py-1 rounded-full border border-[#4ABFAD]/20">
                      {item.metric}
                    </span>
                  </div>

                  {/* Counter Value */}
                  <div className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-2 group-hover:text-[#4ABFAD] transition-colors flex items-center">
                    <AnimatedCounter
                      targetValue={item.value}
                      suffix={item.suffix}
                      decimal={item.decimal}
                    />
                  </div>

                  <h3 className="text-base font-bold text-slate-100 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-slate-400 text-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-700/50 flex items-center justify-between text-[11px] text-slate-400 font-medium">
                  <span className="flex items-center gap-1 text-[#4ABFAD]">
                    <TrendingUp className="w-3.5 h-3.5" /> Live Verified
                  </span>
                  <span>100% Operational</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
