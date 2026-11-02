"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/motion";

export default function ScrollAnimationManager() {
  const pathname = usePathname();
  const ctxRef = useRef(null);

  useEffect(() => {
    // Respect user's motion preference
    if (prefersReducedMotion()) {
      return;
    }

    // Safety check for window
    if (typeof window === "undefined") return;

    // Ensure GSAP plugins are registered
    gsap.registerPlugin(ScrollTrigger);

    // Give DOM a frame to settle across Next.js route transitions
    const timer = setTimeout(() => {
      // Clean up previous animations
      if (ctxRef.current) {
        ctxRef.current.revert();
      }

      ctxRef.current = gsap.context(() => {
        const mm = gsap.matchMedia();

        mm.add(
          {
            reduceMotion: "(prefers-reduced-motion: reduce)",
            standard: "(prefers-reduced-motion: no-preference)",
          },
          (context) => {
            const { reduceMotion } = context.conditions;
            if (reduceMotion) return;

            // 1. FOOTER ANIMATION (Applies to ALL pages)
            const footer = document.querySelector("footer");
            if (footer) {
              const footerColumns = footer.querySelectorAll(
                ".max-w-7xl > .grid > div"
              );
              if (footerColumns.length > 0) {
                gsap.fromTo(
                  footerColumns,
                  { opacity: 0, y: 25 },
                  {
                    opacity: 1,
                    y: 0,
                    stagger: 0.08,
                    duration: 0.6,
                    ease: "power2.out",
                    scrollTrigger: {
                      trigger: footer,
                      start: "top 90%",
                      toggleActions: "play none none reverse",
                      invalidateOnRefresh: true,
                    },
                  }
                );
              }

              // Footer background ambient glow scrub
              const footerGlows = footer.querySelectorAll(".blur-3xl");
              footerGlows.forEach((glow, idx) => {
                gsap.to(glow, {
                  y: idx % 2 === 0 ? -35 : 35,
                  ease: "none",
                  scrollTrigger: {
                    trigger: footer,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 0.5,
                  },
                });
              });
            }

            // 2. HOMEPAGE CHECK
            // If on homepage ("/"), all homepage sections (Hero, Partners, Services,
            // Benefits, Stats, Testimonials, CTA) already have their own dedicated GSAP
            // animations. We strictly DO NOT touch them to preserve the marquee & existing animations.
            if (pathname === "/") {
              return;
            }

            const main = document.querySelector("main");
            if (!main) return;

            // 3. LEGAL & POLICY PAGES (/privacy-policy, /terms-and-conditions, /cancellation-refund-policy)
            const isLegalPage =
              pathname.includes("privacy-policy") ||
              pathname.includes("terms-and-conditions") ||
              pathname.includes("cancellation-refund-policy");

            if (isLegalPage) {
              const legalCard = main.querySelector(".bg-white.rounded-3xl");
              if (legalCard) {
                // Header reveal on page entrance
                const headerElements = legalCard.querySelectorAll(
                  "div > .badge-teal, div > .signy-page-title, div > p"
                );
                if (headerElements.length > 0) {
                  gsap.fromTo(
                    headerElements,
                    { opacity: 0, y: 20 },
                    {
                      opacity: 1,
                      y: 0,
                      stagger: 0.08,
                      duration: 0.6,
                      ease: "power3.out",
                    }
                  );
                }

                // Legal subsections smooth scroll reveals
                const proseSections = legalCard.querySelectorAll(
                  ".prose > h2, .prose > h3, .prose > p, .prose > ul"
                );

                // Group by headings or animate sequentially
                const subsections = legalCard.querySelectorAll(
                  ".signy-subsection-heading"
                );
                subsections.forEach((heading) => {
                  // Find content until next subsection
                  const elementsToAnimate = [heading];
                  let next = heading.nextElementSibling;
                  while (
                    next &&
                    !next.classList.contains("signy-subsection-heading")
                  ) {
                    elementsToAnimate.push(next);
                    next = next.nextElementSibling;
                  }

                  gsap.fromTo(
                    elementsToAnimate,
                    { opacity: 0, y: 18 },
                    {
                      opacity: 1,
                      y: 0,
                      stagger: 0.05,
                      duration: 0.5,
                      ease: "power2.out",
                      scrollTrigger: {
                        trigger: heading,
                        start: "top 88%",
                        toggleActions: "play none none reverse",
                        invalidateOnRefresh: true,
                      },
                    }
                  );
                });
              }
              return;
            }

            // 4. GENERAL PAGES (About, Why Us, Services Hub, Service Subpages, Contact)
            const sections = main.querySelectorAll("section");

            sections.forEach((section, index) => {
              // Skip CTA section since CTA.jsx already manages its own GSAP animations
              if (section.hasAttribute("data-cta-section")) {
                return;
              }

              // A. HERO / BANNER SECTION (First section on page)
              if (index === 0) {
                const badge = section.querySelector(".badge-teal, span[class*='badge']");
                const title = section.querySelector("h1, .signy-page-title");
                const desc = section.querySelector("p.text-lg, p.text-base, p.text-slate-600");
                const buttons = section.querySelectorAll(".btn-primary, .btn-secondary");
                const checkItems = section.querySelectorAll(".flex.items-center.gap-3");
                const heroVisual = section.querySelector(
                  ".relative.w-full.max-w-md, .relative.h-80, .relative.h-96"
                );

                const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });

                if (badge) {
                  heroTl.fromTo(
                    badge,
                    { opacity: 0, y: 15 },
                    { opacity: 1, y: 0, duration: 0.5 }
                  );
                }

                if (title) {
                  heroTl.fromTo(
                    title,
                    { opacity: 0, y: 25 },
                    { opacity: 1, y: 0, duration: 0.65 },
                    "-=0.35"
                  );
                }

                if (desc) {
                  heroTl.fromTo(
                    desc,
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 0.55 },
                    "-=0.4"
                  );
                }

                if (checkItems.length > 0) {
                  heroTl.fromTo(
                    checkItems,
                    { opacity: 0, y: 15 },
                    { opacity: 1, y: 0, stagger: 0.06, duration: 0.45 },
                    "-=0.3"
                  );
                }

                if (buttons.length > 0) {
                  heroTl.fromTo(
                    buttons,
                    { opacity: 0, y: 15, scale: 0.96 },
                    { opacity: 1, y: 0, scale: 1, stagger: 0.08, duration: 0.5 },
                    "-=0.3"
                  );
                }

                if (heroVisual) {
                  heroTl.fromTo(
                    heroVisual,
                    { opacity: 0, scale: 0.94, y: 25 },
                    { opacity: 1, scale: 1, y: 0, duration: 0.75, ease: "power2.out" },
                    "-=0.55"
                  );

                  // Subtle scroll-scrubbed parallax as you leave hero
                  gsap.to(heroVisual, {
                    y: 25,
                    ease: "none",
                    scrollTrigger: {
                      trigger: section,
                      start: "top top",
                      end: "bottom top",
                      scrub: 0.4,
                      invalidateOnRefresh: true,
                    },
                  });
                }

                return;
              }

              // B. SUBSEQUENT SECTIONS
              // 1. Section Header Reveal (Badge, Headings, Subtitles)
              const headerContainer = section.querySelector(".text-center, .max-w-2xl, .max-w-3xl, .space-y-3, .space-y-4");
              const headings = section.querySelectorAll(
                "h2, .signy-section-heading, .signy-subsection-heading, .badge-teal, p.text-slate-600, p.text-slate-300, p.text-slate-400"
              );

              // Filter headings that are direct children or within the section header (not inside cards)
              const directHeadings = Array.from(headings).filter(
                (el) => !el.closest(".grid > div") && !el.closest(".rounded-2xl") && !el.closest(".rounded-3xl")
              );

              if (directHeadings.length > 0) {
                gsap.fromTo(
                  directHeadings,
                  { opacity: 0, y: 24 },
                  {
                    opacity: 1,
                    y: 0,
                    stagger: 0.08,
                    duration: 0.55,
                    ease: "power2.out",
                    scrollTrigger: {
                      trigger: section,
                      start: "top 88%",
                      toggleActions: "play none none reverse",
                      invalidateOnRefresh: true,
                    },
                  }
                );
              }

              // 2. Grids and Cards (Stagger effect)
              const grids = section.querySelectorAll(".grid");
              grids.forEach((grid) => {
                // If it's a 2-column split (e.g., text on left, image on right), handle as split section
                if (grid.classList.contains("lg:grid-cols-12") || grid.classList.contains("md:grid-cols-2") && grid.querySelector(".relative.w-full")) {
                  // Content column
                  const textCol = grid.querySelector(".lg:col-span-6, .lg:col-span-7, .space-y-6");
                  if (textCol) {
                    const children = Array.from(textCol.children);
                    gsap.fromTo(
                      children,
                      { opacity: 0, y: 22 },
                      {
                        opacity: 1,
                        y: 0,
                        stagger: 0.07,
                        duration: 0.55,
                        ease: "power2.out",
                        scrollTrigger: {
                          trigger: grid,
                          start: "top 85%",
                          toggleActions: "play none none reverse",
                          invalidateOnRefresh: true,
                        },
                      }
                    );
                  }

                  // Visual / Image column
                  const imageCol = grid.querySelector(
                    ".relative.w-full.max-w-md, .relative.h-80, .relative.h-96"
                  );
                  if (imageCol) {
                    gsap.fromTo(
                      imageCol,
                      { opacity: 0, scale: 0.94, y: 25 },
                      {
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        duration: 0.65,
                        ease: "power2.out",
                        scrollTrigger: {
                          trigger: grid,
                          start: "top 85%",
                          toggleActions: "play none none reverse",
                          invalidateOnRefresh: true,
                        },
                      }
                    );

                    // Scroll scrubbed subtle illustration movement
                    const img = imageCol.querySelector("img");
                    if (img) {
                      gsap.to(img, {
                        y: -15,
                        ease: "none",
                        scrollTrigger: {
                          trigger: grid,
                          start: "top bottom",
                          end: "bottom top",
                          scrub: 0.5,
                        },
                      });
                    }
                  }
                } else {
                  // Standard card grid (e.g., 3-col, 4-col feature cards)
                  const cards = grid.children;
                  if (cards && cards.length > 0) {
                    gsap.fromTo(
                      cards,
                      { opacity: 0, y: 32, scale: 0.98 },
                      {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        stagger: 0.08,
                        duration: 0.5,
                        ease: "power2.out",
                        scrollTrigger: {
                          trigger: grid,
                          start: "top 85%",
                          toggleActions: "play none none reverse",
                          invalidateOnRefresh: true,
                        },
                      }
                    );
                  }
                }
              });

              // 3. Lists and step items (Sequential reveal)
              const lists = section.querySelectorAll("ul:not(.grid), .space-y-4 > div.flex");
              lists.forEach((list) => {
                const items = list.children || [list];
                if (items.length > 0) {
                  gsap.fromTo(
                    items,
                    { opacity: 0, x: -16 },
                    {
                      opacity: 1,
                      x: 0,
                      stagger: 0.06,
                      duration: 0.45,
                      ease: "power2.out",
                      scrollTrigger: {
                        trigger: list,
                        start: "top 88%",
                        toggleActions: "play none none reverse",
                        invalidateOnRefresh: true,
                      },
                    }
                  );
                }
              });

              // 4. Background Decorative Blurs (Subtle scrub movement)
              const decorativeGlows = section.querySelectorAll(".blur-3xl");
              decorativeGlows.forEach((glow, idx) => {
                gsap.to(glow, {
                  y: idx % 2 === 0 ? -35 : 35,
                  ease: "none",
                  scrollTrigger: {
                    trigger: section,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 0.5,
                  },
                });
              });
            });

            // 5. CONTACT PAGE SPECIAL ELEMENTS (/contact)
            if (pathname === "/contact") {
              const mapContainer = main.querySelector("iframe")?.parentElement;
              if (mapContainer) {
                gsap.fromTo(
                  mapContainer,
                  { opacity: 0, scale: 0.98, y: 25 },
                  {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 0.65,
                    ease: "power2.out",
                    scrollTrigger: {
                      trigger: mapContainer,
                      start: "top 85%",
                      toggleActions: "play none none reverse",
                      invalidateOnRefresh: true,
                    },
                  }
                );
              }
            }

            // Refresh ScrollTrigger positions after initialization
            ScrollTrigger.refresh();
          }
        );
      });
    }, 120);

    return () => {
      clearTimeout(timer);
      if (ctxRef.current) {
        ctxRef.current.revert();
      }
    };
  }, [pathname]);

  return null;
}
