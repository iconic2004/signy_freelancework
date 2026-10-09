"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  MessageSquare, 
  PhoneCall, 
  Volume2, 
  ShieldCheck, 
  Sparkles, 
  Bot, 
  ArrowRight,
  Check,
  Code2,
  Zap,
  Globe,
  Share2,
  Search
} from "lucide-react";
import { SERVICES } from "@/lib/constants";

const ICON_MAP = {
  MessageSquare,
  PhoneCall,
  Volume2,
  ShieldCheck,
  Sparkles,
  Bot
};

const CATEGORIES = [
  { id: "all", label: "All Enterprise Channels" },
  { id: "messaging", label: "Bulk SMS & WhatsApp" },
  { id: "voice", label: "Voice & AI Chatbots" },
  { id: "verified", label: "RCS & Verified Badge" },
];

export default function Services() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredCard, setHoveredCard] = useState(null);

  const filteredServices = SERVICES.filter((service) => {
    if (activeCategory === "all") return true;
    if (activeCategory === "messaging") return service.id === "bulk-sms" || service.id === "whatsapp-business-api";
    if (activeCategory === "voice") return service.id === "voice-calls" || service.id === "chatbots";
    if (activeCategory === "verified") return service.id === "google-verified-sms" || service.id === "rcs";
    return true;
  });

  return (
    <section id="services" className="py-24 md:py-32 relative bg-slate-900 text-white overflow-hidden">
      {/* Dynamic ambient lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-radial from-[#4ABFAD]/20 via-[#4ABFAD]/5 to-transparent blur-3xl pointer-events-none" />
      <div className="bg-tech-grid absolute inset-0 opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#4ABFAD]/15 border border-[#4ABFAD]/30 text-[#4ABFAD] text-xs font-semibold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>High-Throughput Communication Suite</span>
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Enterprise Solutions Built for <span className="text-[#4ABFAD]">Scale &amp; Reliability</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Direct carrier routes, Meta official APIs, and AI-driven automation designed for instant deliverability and maximum ROI.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 border ${
                activeCategory === cat.id
                  ? "bg-[#4ABFAD] text-slate-950 border-[#4ABFAD] shadow-lg shadow-[#4ABFAD]/25 scale-105"
                  : "bg-slate-800/80 text-slate-300 border-slate-700/80 hover:bg-slate-800 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 6 Grid Service Cards with Glass & Hover Glow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => {
            const Icon = ICON_MAP[service.iconName] || Sparkles;
            const isHovered = hoveredCard === service.id;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`relative rounded-3xl p-7 flex flex-col justify-between transition-all duration-500 border bg-slate-800/60 backdrop-blur-xl group hover:-translate-y-2 ${
                  isHovered
                    ? "border-[#4ABFAD] shadow-2xl shadow-[#4ABFAD]/15"
                    : "border-slate-700/60 hover:border-slate-600"
                }`}
              >
                {/* Subtle card top glow */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(400px circle at top left, ${service.color}15, transparent 60%)`
                  }}
                />

                <div className="relative z-10">
                  {/* Top Header with Icon and Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-lg"
                      style={{
                        backgroundColor: `${service.color}20`,
                        color: service.color,
                        boxShadow: `0 8px 20px -6px ${service.color}40`
                      }}
                    >
                      <Icon className="w-7 h-7" />
                    </div>

                    <span
                      className="text-[11px] font-bold px-3 py-1 rounded-full border backdrop-blur-md"
                      style={{
                        backgroundColor: `${service.color}15`,
                        color: service.color,
                        borderColor: `${service.color}40`
                      }}
                    >
                      {service.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#4ABFAD] transition-colors flex items-center gap-2">
                    <span>{service.title}</span>
                  </h3>

                  {/* Description */}
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {service.desc}
                  </p>

                  {/* Feature Highlights */}
                  <ul className="space-y-2.5 mb-8 pt-5 border-t border-slate-700/60">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-xs text-slate-300 font-medium">
                        <span
                          className="w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                          style={{ backgroundColor: `${service.color}25`, color: service.color }}
                        >
                          <Check className="w-3 h-3" />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Link Button */}
                <div className="relative z-10 pt-2 border-t border-slate-700/40">
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:text-[#4ABFAD] transition-colors"
                  >
                    <span>Explore channel specs</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Call to Action Pill */}
        <div className="mt-16 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 transition-all hover:scale-105 shadow-xl"
          >
            <Code2 className="w-4 h-4 text-[#4ABFAD]" />
            <span>View All Channels &amp; Developer API Docs</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
