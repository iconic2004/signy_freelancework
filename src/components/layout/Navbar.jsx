"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { 
  Menu, 
  ChevronDown, 
  ArrowRight,
  MessageSquare,
  Volume2,
  Sparkles,
  Bot
} from "lucide-react";
import { NAV_LINKS, COMPANY_INFO } from "@/lib/constants";
import { gsap, prefersReducedMotion } from "@/lib/motion";
import MobileMenu from "@/components/layout/MobileMenu";

// Clean Lucide fallback icons for services without official PNG brand logos
const SERVICE_ICONS = {
  "/services/bulk-sms": MessageSquare,
  "/services/voice-calls": Volume2,
  "/services/rcs": Sparkles,
  "/services/chatbots": Bot,
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Dropdown mounting & visibility states
  const [dropdownMounted, setDropdownMounted] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const pathname = usePathname();

  // Element and animation refs
  const dropdownContainerRef = useRef(null);
  const triggerButtonRef = useRef(null);
  const panelRef = useRef(null);
  const itemsRef = useRef([]);
  const arrowsRef = useRef([]);
  const footerRef = useRef(null);
  const leaveTimerRef = useRef(null);
  const animTimelineRef = useRef(null);

  const servicesLink = NAV_LINKS.find((link) => link.dropdown);

  // Track window scroll for background blur styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus immediately on route change without animation delay
  useEffect(() => {
    setMobileMenuOpen(false);
    if (leaveTimerRef.current) clearTimeout(leaveTimerRef.current);
    if (animTimelineRef.current) animTimelineRef.current.kill();
    setDropdownOpen(false);
    setDropdownMounted(false);
  }, [pathname]);

  /* ─── Animated Entrance ─── */
  const animateOpen = useCallback(() => {
    if (!panelRef.current) return;

    if (animTimelineRef.current) animTimelineRef.current.kill();

    const isReduced = prefersReducedMotion();

    if (isReduced) {
      gsap.set(panelRef.current, {
        opacity: 1,
        y: 0,
        clipPath: "none",
      });
      if (itemsRef.current.length) {
        gsap.set(itemsRef.current, { opacity: 1, y: 0 });
      }
      if (arrowsRef.current.length) {
        gsap.set(arrowsRef.current, { opacity: 0.6, x: 0 });
      }
      if (footerRef.current) {
        gsap.set(footerRef.current, { opacity: 1, y: 0 });
      }
      return;
    }

    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
    });

    // 1. Reveal panel via smooth clip-path mask + subtle vertical settle
    tl.fromTo(
      panelRef.current,
      {
        opacity: 0,
        y: -10,
        clipPath: "inset(0% 0% 100% 0% round 1rem)",
      },
      {
        opacity: 1,
        y: 0,
        clipPath: "inset(0% 0% 0% 0% round 1rem)",
        duration: 0.35,
        ease: "power3.out",
      }
    );

    // 2. Coordinated stagger for individual menu items
    const validItems = itemsRef.current.filter(Boolean);
    if (validItems.length) {
      tl.fromTo(
        validItems,
        {
          opacity: 0,
          y: 8,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.28,
          stagger: 0.035,
          ease: "power2.out",
        },
        "-=0.22"
      );
    }

    // 3. Subtle coordinated reveal of item arrows
    const validArrows = arrowsRef.current.filter(Boolean);
    if (validArrows.length) {
      tl.fromTo(
        validArrows,
        {
          opacity: 0,
          x: -4,
        },
        {
          opacity: 0.6,
          x: 0,
          duration: 0.22,
          stagger: 0.035,
          ease: "power2.out",
        },
        "-=0.2"
      );
    }

    // 4. Reveal bottom footer link
    if (footerRef.current) {
      tl.fromTo(
        footerRef.current,
        { opacity: 0, y: 6 },
        { opacity: 1, y: 0, duration: 0.24, ease: "power2.out" },
        "-=0.18"
      );
    }

    animTimelineRef.current = tl;
  }, []);

  /* ─── Animated Exit ─── */
  const animateClose = useCallback((onComplete) => {
    if (!panelRef.current) {
      setDropdownMounted(false);
      setDropdownOpen(false);
      if (onComplete) onComplete();
      return;
    }

    if (animTimelineRef.current) animTimelineRef.current.kill();

    const isReduced = prefersReducedMotion();

    if (isReduced) {
      setDropdownOpen(false);
      setDropdownMounted(false);
      if (onComplete) onComplete();
      return;
    }

    const tl = gsap.timeline({
      defaults: { ease: "power2.in" },
      onComplete: () => {
        setDropdownMounted(false);
        setDropdownOpen(false);
        if (onComplete) onComplete();
      },
    });

    const validItems = itemsRef.current.filter(Boolean);
    if (validItems.length) {
      tl.to(validItems, {
        opacity: 0,
        y: -4,
        duration: 0.15,
        stagger: 0.015,
      });
    }

    tl.to(
      panelRef.current,
      {
        opacity: 0,
        y: -8,
        clipPath: "inset(0% 0% 35% 0% round 1rem)",
        duration: 0.2,
        ease: "power2.in",
      },
      "-=0.08"
    );

    animTimelineRef.current = tl;
  }, []);

  // Trigger entrance whenever dropdown mounts & opens
  useEffect(() => {
    if (dropdownMounted && dropdownOpen) {
      // Allow next tick for DOM element attachment
      const id = requestAnimationFrame(() => {
        animateOpen();
      });
      return () => cancelAnimationFrame(id);
    }
  }, [dropdownMounted, dropdownOpen, animateOpen]);

  /* ─── Interaction Handlers ─── */
  const openMenu = () => {
    if (leaveTimerRef.current) {
      clearTimeout(leaveTimerRef.current);
      leaveTimerRef.current = null;
    }
    setDropdownMounted(true);
    setDropdownOpen(true);
  };

  const closeMenuWithDelay = (delayMs = 180) => {
    if (leaveTimerRef.current) clearTimeout(leaveTimerRef.current);
    leaveTimerRef.current = setTimeout(() => {
      animateClose();
    }, delayMs);
  };

  const toggleMenu = () => {
    if (dropdownOpen) {
      if (leaveTimerRef.current) clearTimeout(leaveTimerRef.current);
      animateClose();
    } else {
      openMenu();
    }
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        dropdownContainerRef.current &&
        !dropdownContainerRef.current.contains(e.target)
      ) {
        if (dropdownOpen) {
          if (leaveTimerRef.current) clearTimeout(leaveTimerRef.current);
          animateClose();
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownOpen, animateClose]);

  // Handle keyboard events (Escape, Tab, Arrows)
  const handleKeyDown = (e) => {
    if (e.key === "Escape" && dropdownOpen) {
      e.preventDefault();
      if (leaveTimerRef.current) clearTimeout(leaveTimerRef.current);
      animateClose(() => {
        triggerButtonRef.current?.focus();
      });
    } else if (e.key === "ArrowDown" && !dropdownOpen) {
      e.preventDefault();
      openMenu();
      setTimeout(() => {
        const first = itemsRef.current.find(Boolean);
        first?.focus();
      }, 50);
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/85 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3"
          : "bg-white/60 backdrop-blur-sm py-4 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative h-10 w-32 sm:w-36 transition-transform duration-200 group-hover:scale-[1.02]">
              <Image
                src="/images/logow.png"
                alt="Signy"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            <Link
              href="/"
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                pathname === "/"
                  ? "text-[#4ABFAD] bg-[#4ABFAD]/10 font-semibold"
                  : "text-slate-700 hover:text-[#4ABFAD] hover:bg-slate-50"
              }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                pathname === "/about"
                  ? "text-[#4ABFAD] bg-[#4ABFAD]/10 font-semibold"
                  : "text-slate-700 hover:text-[#4ABFAD] hover:bg-slate-50"
              }`}
            >
              About
            </Link>

            {/* Services Dropdown (Interactive with GSAP Clip-Path Stagger Animation) */}
            <div
              ref={dropdownContainerRef}
              className="relative"
              onMouseEnter={openMenu}
              onMouseLeave={() => closeMenuWithDelay(180)}
              onKeyDown={handleKeyDown}
            >
              <button
                ref={triggerButtonRef}
                onClick={toggleMenu}
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
                aria-controls="services-dropdown-panel"
                className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-lg transition-all cursor-pointer ${
                  pathname.startsWith("/services") || dropdownOpen
                    ? "text-[#4ABFAD] bg-[#4ABFAD]/10 font-semibold"
                    : "text-slate-700 hover:text-[#4ABFAD] hover:bg-slate-50"
                }`}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    dropdownOpen ? "rotate-180 text-[#4ABFAD]" : "text-slate-400"
                  }`}
                />
              </button>

              {/* Mega Dropdown Panel */}
              {dropdownMounted && servicesLink?.dropdown && (
                <div
                  id="services-dropdown-panel"
                  role="menu"
                  aria-label="Services Menu"
                  onMouseEnter={openMenu}
                  onMouseLeave={() => closeMenuWithDelay(180)}
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 w-[630px] z-50 pointer-events-auto"
                >
                  {/* Invisible bridging zone to prevent pointer disconnect */}
                  <div className="absolute -top-3 left-0 right-0 h-3" />

                  <div
                    ref={panelRef}
                    className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl shadow-slate-900/10 border border-slate-200/90 p-5 grid grid-cols-2 gap-2.5 will-change-transform"
                    style={{
                      transformOrigin: "top center",
                      clipPath: "inset(0% 0% 100% 0% round 1rem)",
                    }}
                  >
                    {servicesLink.dropdown.map((subItem, index) => {
                      const isActive = pathname === subItem.href;
                      const hasLogo = Boolean(subItem.logoSrc);
                      const IconComponent = SERVICE_ICONS[subItem.href] || Sparkles;

                      return (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          role="menuitem"
                          ref={(el) => (itemsRef.current[index] = el)}
                          className={`p-3 rounded-xl transition-all duration-200 flex items-start gap-3.5 group will-change-transform border ${
                            isActive
                              ? "bg-[#4ABFAD]/10 border-[#4ABFAD]/25 shadow-xs"
                              : "hover:bg-slate-50/90 border-transparent hover:border-slate-200/70 hover:shadow-xs"
                          }`}
                        >
                          {/* Authentic Brand PNG Logo or Clean Service Icon */}
                          <div className="w-9 h-9 rounded-xl bg-slate-100/90 border border-slate-200/60 flex items-center justify-center shrink-0 mt-0.5 group-hover:border-[#4ABFAD]/40 group-hover:bg-[#4ABFAD]/10 transition-colors p-1.5 overflow-hidden">
                            {hasLogo ? (
                              <Image
                                src={subItem.logoSrc}
                                alt=""
                                width={22}
                                height={22}
                                className="object-contain"
                              />
                            ) : (
                              <IconComponent className="w-4 h-4 text-[#4ABFAD] transition-colors" />
                            )}
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-semibold text-slate-900 group-hover:text-[#4ABFAD] transition-colors flex items-center justify-between gap-1">
                              <span className="truncate">{subItem.label}</span>
                              <span
                                ref={(el) => (arrowsRef.current[index] = el)}
                                className="shrink-0 text-slate-400 group-hover:text-[#4ABFAD] transition-all group-hover:translate-x-0.5"
                              >
                                <ArrowRight className="w-3.5 h-3.5 stroke-[2]" />
                              </span>
                            </div>
                            <p className="text-xs text-slate-500 line-clamp-1 mt-0.5 group-hover:text-slate-600 transition-colors">
                              {subItem.desc}
                            </p>
                          </div>
                        </Link>
                      );
                    })}

                    {/* Bottom Bar */}
                    <div
                      ref={footerRef}
                      className="col-span-2 pt-3 mt-1 border-t border-slate-100/90 flex items-center justify-between text-xs text-slate-500 px-1"
                    >
                      <span>Enterprise communication platform</span>
                      <Link
                        href="/services"
                        className="text-[#4ABFAD] font-semibold hover:text-[#3ca393] hover:underline flex items-center gap-1 group/all transition-colors"
                      >
                        <span>View all services</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/all:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/why-us"
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                pathname === "/why-us"
                  ? "text-[#4ABFAD] bg-[#4ABFAD]/10 font-semibold"
                  : "text-slate-700 hover:text-[#4ABFAD] hover:bg-slate-50"
              }`}
            >
              Why Us
            </Link>
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${COMPANY_INFO.phoneHref}`}
              className="text-xs font-semibold text-slate-600 hover:text-[#4ABFAD] transition-colors px-2 py-1"
            >
              {COMPANY_INFO.phone}
            </a>

            <Link
              href="/contact"
              className="btn-primary text-sm px-5 py-2.5 rounded-full"
            >
              <span>Get in touch</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 text-slate-900 hover:text-[#4ABFAD] hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
              aria-label="Open navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <Menu className="w-6 h-6 stroke-[2]" />
            </button>
          </div>
        </div>
      </div>

      {/* Full-screen Minimalist Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        pathname={pathname}
      />
    </header>
  );
}
