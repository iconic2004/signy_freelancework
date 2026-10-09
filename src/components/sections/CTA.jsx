"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, MessageSquare, ShieldCheck, Zap } from "lucide-react";
import { CTA_CONTENT } from "@/lib/constants";

export default function CTA() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden text-white">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-radial from-[#4ABFAD]/25 via-blue-600/10 to-transparent blur-3xl pointer-events-none" />
      <div className="bg-tech-grid absolute inset-0 opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl bg-slate-900 border border-slate-800 p-8 sm:p-14 md:p-16 overflow-hidden shadow-2xl backdrop-blur-xl">
          {/* Top glow border bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#4ABFAD] via-cyan-400 to-[#4ABFAD]" />

          <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
              {CTA_CONTENT.headline}
            </h2>

            <p className="text-slate-300 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed">
              Connect with our messaging engineers for customized volume rates, DLT compliance guidance, and seamless RESTful API onboarding.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={CTA_CONTENT.buttonHref}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#4ABFAD] to-[#369c8e] text-slate-950 font-bold text-base shadow-xl shadow-[#4ABFAD]/30 hover:scale-105 transition-all w-full sm:w-auto"
              >
                <span>{CTA_CONTENT.buttonLabel}</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-semibold text-base border border-slate-700 transition-all hover:scale-105 w-full sm:w-auto"
              >
                <MessageSquare className="w-4 h-4 text-[#4ABFAD]" />
                <span>Explore API Capabilities</span>
              </Link>
            </div>

            {/* Live Status Indicators */}
            <div className="pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-slate-400 font-medium">
              <div className="flex items-center gap-2 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-[#4ABFAD]" />
                <span>Meta &amp; DLT Approved Routing</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Zap className="w-4 h-4 text-[#4ABFAD]" />
                <span>Sub-Second OTP SLA</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>24/7 Dedicated Ops Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
