"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HERO_CONTENT } from "@/lib/constants";
import { gsap, ScrollTrigger } from "@/lib/motion";
import BookDemoModal from "@/components/modals/BookDemoModal";
import InteractiveIconTrail from "@/components/layout/InteractiveIconTrail";

export default function Hero() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const heroRef = useRef(null);
  const eyebrowRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const copyRef = useRef(null);
  const actionsRef = useRef(null);
  const visualRef = useRef(null);
  const imgWrapperRef = useRef(null);

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

          // 1. Initial Cinematic Line-Masked Entrance
          const entranceTl = gsap.timeline({ defaults: { ease: "power3.out" } });

          entranceTl
            .fromTo(
              eyebrowRef.current,
              { opacity: 0, y: 15 },
              { opacity: 1, y: 0, duration: 0.6 }
            )
            .fromTo(
              [line1Ref.current, line2Ref.current],
              { y: "110%", opacity: 0 },
              { y: "0%", opacity: 1, duration: 0.85, stagger: 0.12 },
              "-=0.4"
            )
            .fromTo(
              [copyRef.current, actionsRef.current],
              { opacity: 0, y: 20 },
              { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 },
              "-=0.5"
            )
            .fromTo(
              imgWrapperRef.current,
              { opacity: 0, y: 30, scale: 0.96 },
              { opacity: 1, y: 0, scale: 1, duration: 0.9, ease: "power2.out" },
              "-=0.7"
            );

          // 2. Scroll-Scrubbed Transition (scrub linked directly to scroll progress)
          const heroScrollTl = gsap.timeline({
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 0.4,
              invalidateOnRefresh: true,
            },
          });

          heroScrollTl.to(
            [eyebrowRef.current, line1Ref.current, line2Ref.current],
            {
              y: -35,
              opacity: 0.5,
              ease: "none",
            },
            0
          );

          heroScrollTl.to(
            [copyRef.current, actionsRef.current],
            {
              y: -25,
              opacity: 0.6,
              ease: "none",
            },
            0.05
          );

          if (imgWrapperRef.current) {
            heroScrollTl.to(
              imgWrapperRef.current,
              {
                y: 45,
                scale: 0.97,
                boxShadow: "0 30px 60px -20px rgba(0, 0, 0, 0.12)",
                ease: "none",
              },
              0
            );
          }
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section ref={heroRef} className="signy-hero relative overflow-hidden select-none">
        {/* Interactive Cursor-Following Icon Trail — Hero Section Only (z-0) */}
        <InteractiveIconTrail containerRef={heroRef} />

        {/* Hero Content (z-10) */}
        <div className="signy-hero-container relative z-10">
          {/* Eyebrow */}
          <div ref={eyebrowRef} className="signy-hero-eyebrow will-change-transform">
            <span>{HERO_CONTENT.eyebrow}</span>
          </div>

          {/* Masked Line-by-Line Typography Headline */}
          <h1 className="signy-hero-title">
            <span className="block overflow-hidden py-1">
              <span
                ref={line1Ref}
                className="block will-change-transform"
              >
                Maximize reach, engagement,
              </span>
            </span>
            <span className="block overflow-hidden py-1">
              <span
                ref={line2Ref}
                className="block text-slate-800 will-change-transform"
              >
                and results with messaging campaigns.
              </span>
            </span>
          </h1>

          {/* Two-column layout */}
          <div className="signy-hero-lower">
            {/* Left: Copy + CTAs */}
            <div className="signy-hero-copy-column">
              <p ref={copyRef} className="signy-hero-copy will-change-transform">
                {HERO_CONTENT.subheadline}
              </p>

              <div ref={actionsRef} className="signy-hero-actions will-change-transform">
                <Link
                  href={HERO_CONTENT.cta1.href}
                  className="signy-hero-button signy-hero-button-secondary"
                >
                  {HERO_CONTENT.cta1.label}
                </Link>
                <button
                  type="button"
                  onClick={() => setIsDemoModalOpen(true)}
                  className="signy-hero-button signy-hero-button-primary group cursor-pointer"
                >
                  <span>Book a Demo</span>
                  <span className="signy-hero-button-icon" aria-hidden="true">
                    <ArrowRight size={17} strokeWidth={2} />
                  </span>
                </button>
              </div>
            </div>

            {/* Right: Hero Image */}
            <div ref={visualRef} className="signy-hero-visual">
              <div ref={imgWrapperRef} className="signy-hero-image-wrapper will-change-transform">
                <Image
                  src="/images/HomePageImage3.png"
                  alt="Signy messaging platform"
                  width={560}
                  height={420}
                  priority
                  className="signy-hero-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book a Demo Modal */}
      <BookDemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </>
  );
}
