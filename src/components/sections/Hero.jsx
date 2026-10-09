"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Lock,
  MessageSquare,
  PhoneCall,
  ShieldCheck,
  TrendingUp,
  Zap,
  Sparkles,
  BarChart3,
  MessageCircle,
  Send,
  Smartphone,
  Server
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HERO_CONTENT } from "@/lib/constants";

export default function Hero() {
  const heroRef = useRef(null);
  const orbTealRef = useRef(null);
  const orbCyanRef = useRef(null);
  const eyebrowRef = useRef(null);
  const headlineRef = useRef(null);
  const copyRef = useRef(null);
  const ctaRef = useRef(null);
  const trustRef = useRef(null);
  const visualRef = useRef(null);
  const productCardRef = useRef(null);
  const whatsappRef = useRef(null);
  const deliveryRef = useRef(null);
  const verifiedRef = useRef(null);

  // Active view tab inside the Hero Product Card
  const [activeTab, setActiveTab] = useState("dashboard");
  const [liveMsgCount, setLiveMsgCount] = useState(1489210);

  // Live count increment effect
  useEffect(() => {
    const timer = setInterval(() => {
      setLiveMsgCount((prev) => prev + Math.floor(Math.random() * 12) + 3);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const compactViewport = window.matchMedia("(max-width: 767px)").matches;

    const context = gsap.context(() => {
      const entranceTargets = [
        eyebrowRef.current,
        ...headlineRef.current.querySelectorAll(".hero-title-line-inner"),
        copyRef.current,
        ctaRef.current,
        trustRef.current,
        visualRef.current,
        whatsappRef.current,
        deliveryRef.current,
        verifiedRef.current,
      ];

      if (reduceMotion) {
        gsap.set(entranceTargets, { clearProps: "all" });
        return;
      }

      const intro = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      intro
        .fromTo(
          eyebrowRef.current,
          { y: 12, opacity: 0, filter: "blur(5px)" },
          { y: 0, opacity: 1, filter: "blur(0px)", duration: 0.65 }
        )
        .fromTo(
          headlineRef.current.querySelectorAll(".hero-title-line-inner"),
          { yPercent: 115, rotate: 1.5 },
          { yPercent: 0, rotate: 0, duration: 0.9, stagger: 0.1 },
          "-=0.22"
        )
        .fromTo(
          copyRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          "-=0.34"
        )
        .fromTo(
          ctaRef.current,
          { y: 16, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.65 },
          "-=0.38"
        )
        .fromTo(
          trustRef.current,
          { y: 12, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          "-=0.3"
        )
        .fromTo(
          visualRef.current,
          { y: 36, opacity: 0, scale: 0.97, rotate: 1 },
          { y: 0, opacity: 1, scale: 1, rotate: 0, duration: 1.05 },
          "-=0.75"
        )
        .fromTo(
          [whatsappRef.current, deliveryRef.current, verifiedRef.current],
          { y: 14, opacity: 0, scale: 0.97 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.55,
            stagger: 0.1,
          },
          "-=0.55"
        );

      gsap.to(orbTealRef.current, {
        x: 30,
        y: -30,
        scale: 1.12,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(orbCyanRef.current, {
        x: -25,
        y: 30,
        scale: 0.92,
        duration: 14,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(productCardRef.current, {
        y: compactViewport ? -10 : -32,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "center top",
          end: "bottom top",
          scrub: 1.2,
        },
      });
    }, heroRef);

    return () => context.revert();
  }, []);

  return (
    <section ref={heroRef} className="signy-hero">
      <div className="signy-hero-orb signy-hero-orb-teal" ref={orbTealRef} />
      <div className="signy-hero-orb signy-hero-orb-cyan" ref={orbCyanRef} />
      <div className="signy-hero-grain" aria-hidden="true" />
      <div className="bg-tech-grid absolute inset-0 opacity-40 pointer-events-none" />

      <div className="signy-hero-container">
        {/* Eyebrow badge */}
        <div className="signy-hero-eyebrow" ref={eyebrowRef}>
          <span className="signy-hero-eyebrow-dot" aria-hidden="true" />
          <span>{HERO_CONTENT.eyebrow}</span>
          <span className="signy-hero-eyebrow-divider" aria-hidden="true" />
          <span className="signy-hero-eyebrow-label">
            Enterprise Cloud Communications Platform
          </span>
        </div>

        {/* Headline */}
        <h1 className="signy-hero-title" ref={headlineRef}>
          <span className="signy-hero-title-line">
            <span className="hero-title-line-inner">Maximize reach,</span>
          </span>
          <span className="signy-hero-title-line">
            <span className="hero-title-line-inner">
              <span className="signy-hero-accent">engagement</span>, and conversion
            </span>
          </span>
          <span className="signy-hero-title-line">
            <span className="hero-title-line-inner">with intelligent messaging.</span>
          </span>
        </h1>

        <div className="signy-hero-lower">
          {/* Left Text & CTA Column */}
          <div className="signy-hero-copy-column">
            <p className="signy-hero-copy" ref={copyRef}>
              Empower your enterprise with ultra-fast Bulk SMS, WhatsApp Business API, RCS rich media, and AI voice channels. Experience 99.99% deliverability and direct tier-1 carrier routing.
            </p>

            <div className="signy-hero-actions" ref={ctaRef}>
              <Link
                href={HERO_CONTENT.cta2.href}
                className="signy-hero-button signy-hero-button-primary group"
              >
                <span>{HERO_CONTENT.cta2.label}</span>
                <span className="signy-hero-button-icon" aria-hidden="true">
                  <ArrowRight size={17} strokeWidth={2} />
                </span>
              </Link>
              <Link
                href={HERO_CONTENT.cta1.href}
                className="signy-hero-button signy-hero-button-secondary"
              >
                {HERO_CONTENT.cta1.label}
              </Link>
            </div>

            {/* Live Message Ticker Pill */}
            <div className="mt-6 inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/5 border border-slate-900/10 text-xs text-slate-700 font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Today's Dispatched Volume:</span>
              <strong className="font-semibold text-slate-900 tracking-tight font-mono">
                {liveMsgCount.toLocaleString()}
              </strong>
            </div>

            {/* Trust Badges */}
            <div className="signy-hero-trust" ref={trustRef}>
              <div className="signy-hero-trust-item">
                <CheckCircle2 aria-hidden="true" />
                <span>DLT &amp; Official Meta Partner</span>
              </div>
              <div className="signy-hero-trust-item">
                <Zap aria-hidden="true" />
                <span>Sub-Second OTP Routing SLA</span>
              </div>
              <div className="signy-hero-trust-item">
                <ShieldCheck aria-hidden="true" />
                <span>ISO 27001 &amp; Enterprise Security</span>
              </div>
            </div>
          </div>

          {/* Right Visual Showcase Card */}
          <div className="signy-hero-visual" ref={visualRef}>
            <div className="signy-hero-visual-halo" aria-hidden="true" />

            <div className="signy-hero-product-card" ref={productCardRef}>
              {/* Product Card Top Bar with Interactive Channel Tabs */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-200/80">
                <div className="signy-hero-product-brand">
                  <span className="signy-hero-product-mark" aria-hidden="true">
                    <MessageSquare size={14} strokeWidth={2.2} />
                  </span>
                  <span className="font-bold text-slate-900">Signy Suite</span>
                </div>

                {/* Tab Switcher */}
                <div className="flex items-center gap-1 bg-slate-100/80 p-1 rounded-xl text-xs font-semibold">
                  <button
                    onClick={() => setActiveTab("dashboard")}
                    className={`px-2.5 py-1 rounded-lg transition-all ${
                      activeTab === "dashboard"
                        ? "bg-white text-[#4ABFAD] shadow-sm font-bold"
                        : "text-slate-500 hover:text-slate-800"
                    }`}
                  >
                    Analytics
                  </button>
                  <button
                    onClick={() => setActiveTab("whatsapp")}
                    className={`px-2.5 py-1 rounded-lg transition-all ${
                      activeTab === "whatsapp"
                        ? "bg-white text-emerald-600 shadow-sm font-bold"
                        : "text-slate-500 hover:text-slate-800"
                    }`}
                  >
                    WhatsApp
                  </button>
                  <button
                    onClick={() => setActiveTab("rcs")}
                    className={`px-2.5 py-1 rounded-lg transition-all ${
                      activeTab === "rcs"
                        ? "bg-white text-blue-600 shadow-sm font-bold"
                        : "text-slate-500 hover:text-slate-800"
                    }`}
                  >
                    RCS Cards
                  </button>
                </div>
              </div>

              {/* Main Media Viewport */}
              <div className="signy-hero-image-frame transition-all duration-300">
                {activeTab === "dashboard" && (
                  <div className="relative w-full h-full min-h-[280px]">
                    <Image
                      src="/images/dashboard-hero.jpg"
                      alt="Signy Enterprise Messaging Dashboard"
                      fill
                      priority
                      className="object-cover rounded-xl shadow-inner"
                    />
                  </div>
                )}

                {activeTab === "whatsapp" && (
                  <div className="p-4 bg-slate-950 text-white rounded-xl min-h-[280px] flex flex-col justify-between font-sans">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs border border-emerald-500/30">
                          ✓
                        </div>
                        <div>
                          <div className="font-bold text-xs flex items-center gap-1">
                            Signy Official Store
                            <span className="bg-emerald-500/20 text-emerald-400 text-[10px] px-1.5 py-0.2 rounded-full border border-emerald-500/40">
                              Verified
                            </span>
                          </div>
                          <div className="text-[10px] text-slate-400">Meta WhatsApp Cloud API</div>
                        </div>
                      </div>
                      <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-full">
                        Live Simulation
                      </span>
                    </div>

                    <div className="space-y-3 py-3 text-xs">
                      <div className="bg-slate-900 border border-slate-800 p-3 rounded-2xl max-w-[85%] space-y-1.5">
                        <p className="text-slate-200 text-[11px] leading-relaxed">
                          ⚡ <strong>Order Confirmation #SG-98214</strong>
                        </p>
                        <p className="text-slate-400 text-[11px]">
                          Your order has shipped! Track your delivery in real-time below:
                        </p>
                        <div className="pt-1 flex gap-2">
                          <button className="bg-emerald-600 hover:bg-emerald-500 text-white text-[10px] font-medium px-3 py-1 rounded-lg transition-colors">
                            📦 Track Order
                          </button>
                          <button className="bg-slate-800 text-slate-300 text-[10px] font-medium px-3 py-1 rounded-lg">
                            💬 Chat Agent
                          </button>
                        </div>
                      </div>

                      <div className="bg-emerald-950/60 border border-emerald-800/40 p-2.5 rounded-2xl ml-auto max-w-[70%] text-emerald-200 text-[11px]">
                        Track status for #SG-98214
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-800 text-[10px] text-slate-400 flex items-center justify-between">
                      <span className="flex items-center gap-1 text-emerald-400 font-medium">
                        <Zap size={12} /> Delivered in 0.4s
                      </span>
                      <span>Meta Template SLA 100%</span>
                    </div>
                  </div>
                )}

                {activeTab === "rcs" && (
                  <div className="p-4 bg-slate-900 text-white rounded-xl min-h-[280px] flex flex-col justify-between">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                      <span className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
                        <Sparkles size={14} className="text-pink-400" /> RCS Rich Media Broadcast
                      </span>
                      <span className="text-[10px] bg-pink-500/20 text-pink-300 px-2 py-0.5 rounded-full border border-pink-500/30">
                        Interactive Chip
                      </span>
                    </div>

                    <div className="bg-slate-800/80 border border-slate-700/60 rounded-xl p-3.5 space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-100">Festival Special Offer 🎉</span>
                        <span className="text-[10px] text-pink-400 font-semibold">50% OFF</span>
                      </div>
                      <p className="text-[11px] text-slate-300">
                        Rich carousels, action chips, and instant OTP verification with Google Verified SMS badge.
                      </p>
                      <div className="flex flex-wrap gap-2 pt-1">
                        <span className="bg-pink-500 text-white text-[10px] font-semibold px-2.5 py-1 rounded-full cursor-pointer hover:bg-pink-400 transition-colors">
                          Claim Discount Code
                        </span>
                        <span className="bg-slate-700 text-slate-200 text-[10px] font-medium px-2.5 py-1 rounded-full">
                          View Catalog
                        </span>
                      </div>
                    </div>

                    <div className="text-[10px] text-slate-400 flex items-center justify-between pt-2">
                      <span>Supported on all Android &amp; Google Messages</span>
                      <span className="text-pink-400 font-semibold">Verified Badge ✓</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Product Card Footer status line */}
              <div className="flex items-center justify-between pt-3 text-xs text-slate-500 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-semibold text-slate-700">API Latency: 42ms</span>
                </div>
                <div className="text-[11px] font-medium text-slate-400">
                  DLT Multi-Operator Redundancy
                </div>
              </div>
            </div>

            {/* Floating Badge 1: WhatsApp Verified */}
            <div
              className="signy-hero-float-card signy-hero-whatsapp"
              ref={whatsappRef}
            >
              <span className="signy-hero-float-icon signy-hero-float-icon-green">
                <PhoneCall size={18} aria-hidden="true" />
              </span>
              <span className="signy-hero-float-copy">
                <span className="signy-hero-float-title">
                  WhatsApp Verified
                  <span className="signy-hero-live">Live</span>
                </span>
                <span className="signy-hero-float-caption">
                  Instant OTP &amp; Catalogs
                </span>
              </span>
            </div>

            {/* Floating Badge 2: Carrier Delivery */}
            <div
              className="signy-hero-float-card signy-hero-delivery"
              ref={deliveryRef}
            >
              <span className="signy-hero-float-icon signy-hero-float-icon-teal">
                <TrendingUp size={18} aria-hidden="true" />
              </span>
              <span className="signy-hero-float-copy">
                <span className="signy-hero-float-caption">Delivery SLA</span>
                <span className="signy-hero-float-title">
                  99.99% Routing Rate
                </span>
              </span>
            </div>

            {/* Floating Badge 3: Verified Badge */}
            <div className="signy-hero-verified" ref={verifiedRef}>
              <ShieldCheck size={16} aria-hidden="true" />
              <span>Google Verified SMS Badge</span>
            </div>
          </div>
        </div>
      </div>
      <div className="signy-hero-bottom-glow" aria-hidden="true" />
    </section>
  );
}
