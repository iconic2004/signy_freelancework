"use client";

import { useState } from "react";
import Image from "next/image";
import { Sparkles, ArrowRight, ShieldCheck, Clock, TrendingUp, CheckCircle, Cpu } from "lucide-react";
import { BENEFITS } from "@/lib/constants";

export default function Benefits() {
  const [activeTab, setActiveTab] = useState(0);

  const activeBenefit = BENEFITS[activeTab];

  return (
    <section className="py-24 md:py-32 bg-slate-50 relative overflow-hidden border-y border-slate-200/80">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-[#4ABFAD]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="bg-tech-grid absolute inset-0 opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="badge-teal">
            <Sparkles className="w-3.5 h-3.5 text-[#4ABFAD]" />
            <span>Proven Enterprise Impact</span>
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Why Leading Brands Choose <span className="text-[#4ABFAD]">Signy</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Built for mission-critical reliability, direct carrier delivery, and sub-second OTP latency at enterprise scale.
          </p>
        </div>

        {/* Interactive Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Navigation Pillar Cards */}
          <div className="lg:col-span-5 space-y-4 flex flex-col justify-center">
            {BENEFITS.map((benefit, index) => {
              const isActive = activeTab === index;
              return (
                <button
                  key={benefit.number}
                  onClick={() => setActiveTab(index)}
                  className={`w-full text-left p-6 rounded-3xl transition-all duration-300 border relative overflow-hidden group ${
                    isActive
                      ? "bg-white border-[#4ABFAD] shadow-xl shadow-[#4ABFAD]/15 translate-x-2"
                      : "bg-white/80 hover:bg-white border-slate-200/80 hover:border-slate-300 hover:shadow-md"
                  }`}
                >
                  {/* Left accent bar */}
                  {isActive && (
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#4ABFAD]" />
                  )}

                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      <span
                        className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                          isActive
                            ? "bg-[#4ABFAD] text-white shadow-sm"
                            : "bg-slate-100 text-slate-600 group-hover:bg-slate-200"
                        }`}
                      >
                        Pillar {benefit.number}
                      </span>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                        Enterprise Advantage
                      </span>
                    </div>

                    {isActive && (
                      <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ABFAD] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4ABFAD]"></span>
                      </span>
                    )}
                  </div>

                  <h3 className={`text-lg font-bold transition-colors ${
                    isActive ? "text-slate-900" : "text-slate-700 group-hover:text-slate-900"
                  }`}>
                    {benefit.title}
                  </h3>

                  <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                    {benefit.description}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Showcase Card Displaying High-Res Generated Graphics */}
          <div className="lg:col-span-7">
            <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-2xl relative overflow-hidden h-full flex flex-col justify-between group">
              {/* Background ambient radial glow */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#4ABFAD]/15 rounded-full blur-3xl pointer-events-none" />

              <div className="space-y-6 relative z-10">
                {/* Metric pill */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#4ABFAD]/20 border border-[#4ABFAD]/40 text-[#4ABFAD] text-xs font-bold">
                  <TrendingUp className="w-4 h-4" />
                  <span>{activeBenefit.metric}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug tracking-tight">
                  {activeBenefit.title}
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {activeBenefit.description}
                </p>

                {/* High-Res Image Display */}
                <div className="relative h-64 sm:h-80 w-full rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden shadow-inner mt-4 group">
                  <Image
                    src={activeBenefit.image}
                    alt={activeBenefit.title}
                    fill
                    priority
                    className="object-cover transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Bottom Feature Badges */}
              <div className="pt-6 mt-6 border-t border-slate-800 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-4 relative z-10">
                <div className="flex items-center gap-2 text-slate-300 font-medium">
                  <CheckCircle className="w-4 h-4 text-[#4ABFAD]" />
                  <span>Direct Carrier SLA</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300 font-medium">
                  <Cpu className="w-4 h-4 text-[#4ABFAD]" />
                  <span>100k+ TPS Concurrent Engine</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300 font-medium">
                  <ShieldCheck className="w-4 h-4 text-[#4ABFAD]" />
                  <span>End-to-End Encryption</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
