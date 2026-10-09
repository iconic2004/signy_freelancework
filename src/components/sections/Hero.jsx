"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HERO_CONTENT } from "@/lib/constants";
import { gsap, ScrollTrigger } from "@/lib/motion";
import BookDemoModal from "@/components/modals/BookDemoModal";

export default function Hero() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const heroRef = useRef(null);
  const eyebrowRef = useRef(null);
  const headlineRef = useRef(null);
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

          // Hero Scroll-Scrubbed Transition (scrub linked to page scroll from top)
          const heroTimeline = gsap.timeline({
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 1,
              invalidateOnRefresh: true,
            },
          });

          // Headline & Eyebrow subtle upward drift and gentle fade
          heroTimeline.to(
            [eyebrowRef.current, headlineRef.current],
            {
              y: -35,
              opacity: 0.65,
              ease: "none",
            },
            0
          );

          // Copy column gentle drift
          heroTimeline.to(
            [copyRef.current, actionsRef.current],
            {
              y: -25,
              opacity: 0.75,
              ease: "none",
            },
            0.05
          );

          // Hero Image optical depth scrub (subtle positive parallax & scale settle)
          if (imgWrapperRef.current) {
            heroTimeline.to(
              imgWrapperRef.current,
              {
                y: 50,
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
      <section ref={heroRef} className="signy-hero">
        <div className="signy-hero-container">
          {/* Eyebrow */}
          <div ref={eyebrowRef} className="signy-hero-eyebrow">
            <span>{HERO_CONTENT.eyebrow}</span>
          </div>

          {/* Headline */}
          <h1 ref={headlineRef} className="signy-hero-title">
            <span className="block">
              Maximize reach, engagement,
            </span>
            <span className="block text-slate-800">
              and results with messaging campaigns.
            </span>
          </h1>

          {/* Two-column layout */}
          <div className="signy-hero-lower">
            {/* Left: Copy + CTAs */}
            <div className="signy-hero-copy-column">
              <p ref={copyRef} className="signy-hero-copy">
                {HERO_CONTENT.subheadline}
              </p>

              <div ref={actionsRef} className="signy-hero-actions">
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

            {/* Right: Actual Hero Image */}
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
