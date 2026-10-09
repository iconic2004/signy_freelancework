"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { X, ArrowUpRight, ChevronDown, Phone, Mail } from "lucide-react";
import { NAV_LINKS, COMPANY_INFO } from "@/lib/constants";
import { gsap, MOTION_EASE } from "@/lib/motion";

export default function MobileMenu({ isOpen, onClose, pathname }) {
  const [mounted, setMounted] = useState(false);
  const panelRef = useRef(null);
  const headerRef = useRef(null);
  const listRef = useRef(null);
  const footerRef = useRef(null);
  const [servicesExpanded, setServicesExpanded] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock background scroll when open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Animate panel open
  useEffect(() => {
    if (!isOpen || !panelRef.current) return;

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
            gsap.set([panelRef.current, listRef.current?.children, footerRef.current], {
              opacity: 1,
              y: 0,
              yPercent: 0,
              clipPath: "none",
            });
            return;
          }

          const tl = gsap.timeline({
            defaults: { ease: MOTION_EASE.outExpo },
          });

          // Panel entrance via clip-path
          tl.fromTo(
            panelRef.current,
            { clipPath: "inset(0% 0% 100% 0%)" },
            { clipPath: "inset(0% 0% 0% 0%)", duration: 0.5, ease: "power4.inOut" }
          );

          // Header
          tl.fromTo(
            headerRef.current?.children,
            { opacity: 0, y: -10 },
            { opacity: 1, y: 0, duration: 0.35, stagger: 0.05 },
            "-=0.2"
          );

          // Navigation Links
          if (listRef.current?.children) {
            tl.fromTo(
              listRef.current.children,
              { opacity: 0, y: 22 },
              {
                opacity: 1,
                y: 0,
                duration: 0.45,
                stagger: 0.04,
                ease: MOTION_EASE.outQuart,
              },
              "-=0.25"
            );
          }

          // Footer info
          if (footerRef.current) {
            tl.fromTo(
              footerRef.current,
              { opacity: 0, y: 12 },
              { opacity: 1, y: 0, duration: 0.4 },
              "-=0.2"
            );
          }
        }
      );
    }, panelRef);

    return () => ctx.revert();
  }, [isOpen]);

  // Handle animated close
  const handleClose = () => {
    if (!panelRef.current) {
      onClose();
      return;
    }

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      onClose();
      return;
    }

    gsap.to(panelRef.current, {
      clipPath: "inset(0% 0% 100% 0%)",
      duration: 0.35,
      ease: "power3.inOut",
      onComplete: () => {
        onClose();
      },
    });
  };

  if (!mounted || !isOpen) return null;

  const servicesDropdown = NAV_LINKS.find((l) => l.dropdown)?.dropdown || [];

  const menuContent = (
    <div
      ref={panelRef}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
      className="fixed inset-0 top-0 left-0 w-screen h-screen min-h-[100dvh] max-h-[100dvh] bg-[#F7F6F2] text-[#111111] flex flex-col justify-between overflow-y-auto"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: "100vw",
        height: "100dvh",
        zIndex: 99999,
        backgroundColor: "#F7F6F2",
        willChange: "clip-path",
      }}
    >
      {/* Top Header Bar */}
      <div
        ref={headerRef}
        className="flex items-center justify-between px-6 sm:px-10 py-5 sm:py-6 border-b border-black/10 bg-[#F7F6F2] sticky top-0 z-20 shrink-0"
      >
        <Link
          href="/"
          onClick={handleClose}
          className="flex items-center gap-2 group"
          aria-label="Signy Home"
        >
          <div className="relative h-9 w-32">
            <Image
              src="/images/logow.png"
              alt="Signy"
              fill
              priority
              className="object-contain object-left"
            />
          </div>
        </Link>

        <button
          onClick={handleClose}
          className="p-2 -mr-2 text-[#111111] hover:text-[#4ABFAD] transition-colors rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4ABFAD] cursor-pointer"
          aria-label="Close menu"
        >
          <X className="w-7 h-7 stroke-[1.5]" />
        </button>
      </div>

      {/* Main Navigation Items (ORYN Studio Editorial Typography) */}
      <div className="flex-1 px-6 sm:px-10 py-8 flex flex-col justify-center max-w-2xl mx-auto w-full">
        <nav
          ref={listRef}
          className="space-y-0 divide-y divide-black/10 border-t border-b border-black/10"
        >
          {/* 1. Home */}
          <div className="py-4 sm:py-5">
            <Link
              href="/"
              onClick={handleClose}
              className={`flex items-center justify-between text-3xl sm:text-4xl font-light tracking-tight group transition-colors ${
                pathname === "/" ? "text-[#4ABFAD]" : "text-[#111111] hover:text-[#4ABFAD]"
              }`}
            >
              <span>Home</span>
              <ArrowUpRight className="w-5 h-5 stroke-[1.25] text-black/35 group-hover:text-[#4ABFAD] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </Link>
          </div>

          {/* 2. About */}
          <div className="py-4 sm:py-5">
            <Link
              href="/about"
              onClick={handleClose}
              className={`flex items-center justify-between text-3xl sm:text-4xl font-light tracking-tight group transition-colors ${
                pathname === "/about" ? "text-[#4ABFAD]" : "text-[#111111] hover:text-[#4ABFAD]"
              }`}
            >
              <span>About</span>
              <ArrowUpRight className="w-5 h-5 stroke-[1.25] text-black/35 group-hover:text-[#4ABFAD] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </Link>
          </div>

          {/* 3. Services */}
          <div className="py-4 sm:py-5">
            <div className="flex items-center justify-between">
              <Link
                href="/services"
                onClick={handleClose}
                className={`text-3xl sm:text-4xl font-light tracking-tight group transition-colors ${
                  pathname.startsWith("/services") ? "text-[#4ABFAD]" : "text-[#111111] hover:text-[#4ABFAD]"
                }`}
              >
                <span>Services</span>
              </Link>
              <button
                onClick={() => setServicesExpanded(!servicesExpanded)}
                className="p-2 text-black/50 hover:text-[#4ABFAD] transition-colors cursor-pointer"
                aria-label="Toggle services list"
                aria-expanded={servicesExpanded}
              >
                <ChevronDown
                  className={`w-5 h-5 stroke-[1.5] transition-transform duration-300 ${
                    servicesExpanded ? "rotate-180 text-[#4ABFAD]" : ""
                  }`}
                />
              </button>
            </div>

            {/* Sub-services Links */}
            {servicesExpanded && (
              <div className="pt-4 pb-2 pl-3 grid grid-cols-1 gap-2.5 animate-in fade-in slide-in-from-top-2 duration-200">
                {servicesDropdown.map((sub) => (
                  <Link
                    key={sub.href}
                    href={sub.href}
                    onClick={handleClose}
                    className="flex items-center justify-between text-sm sm:text-base font-light text-black/70 hover:text-[#4ABFAD] py-1.5 transition-colors group"
                  >
                    <span>{sub.label}</span>
                    <ArrowUpRight className="w-4 h-4 stroke-[1.25] opacity-40 group-hover:opacity-100 group-hover:text-[#4ABFAD] transition-opacity" />
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* 4. Why Us */}
          <div className="py-4 sm:py-5">
            <Link
              href="/why-us"
              onClick={handleClose}
              className={`flex items-center justify-between text-3xl sm:text-4xl font-light tracking-tight group transition-colors ${
                pathname === "/why-us" ? "text-[#4ABFAD]" : "text-[#111111] hover:text-[#4ABFAD]"
              }`}
            >
              <span>Why Us</span>
              <ArrowUpRight className="w-5 h-5 stroke-[1.25] text-black/35 group-hover:text-[#4ABFAD] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </Link>
          </div>

          {/* 5. Get in touch / Contact */}
          <div className="py-4 sm:py-5">
            <Link
              href="/contact"
              onClick={handleClose}
              className={`flex items-center justify-between text-3xl sm:text-4xl font-light tracking-tight group transition-colors ${
                pathname === "/contact" ? "text-[#4ABFAD]" : "text-[#111111] hover:text-[#4ABFAD]"
              }`}
            >
              <span>Get in touch</span>
              <ArrowUpRight className="w-5 h-5 stroke-[1.25] text-black/35 group-hover:text-[#4ABFAD] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </Link>
          </div>
        </nav>
      </div>

      {/* Bottom Footer Area */}
      <div
        ref={footerRef}
        className="px-6 sm:px-10 py-6 border-t border-black/10 bg-[#F7F6F2] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-light text-black/60 max-w-2xl mx-auto w-full shrink-0"
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6">
          <a
            href={`tel:${COMPANY_INFO.phoneHref}`}
            className="flex items-center gap-1.5 hover:text-[#4ABFAD] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 stroke-[1.5]" />
            <span>{COMPANY_INFO.phone}</span>
          </a>
          <a
            href={COMPANY_INFO.emailHref}
            className="flex items-center gap-1.5 hover:text-[#4ABFAD] transition-colors"
          >
            <Mail className="w-3.5 h-3.5 stroke-[1.5]" />
            <span>{COMPANY_INFO.email}</span>
          </a>
        </div>

        <span className="text-black/40">Mumbai, India</span>
      </div>
    </div>
  );

  return createPortal(menuContent, document.body);
}
