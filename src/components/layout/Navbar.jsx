"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { 
  Menu, 
  X, 
  ChevronDown, 
  ArrowRight,
  MessageSquare,
  PhoneCall,
  Volume2,
  ShieldCheck,
  Sparkles,
  Bot,
  ExternalLink
} from "lucide-react";
import { NAV_LINKS, COMPANY_INFO } from "@/lib/constants";

import MobileMenu from "@/components/layout/MobileMenu";

const SERVICE_ICONS = {
  "/services/bulk-sms": MessageSquare,
  "/services/whatsapp-business-api": PhoneCall,
  "/services/voice-calls": Volume2,
  "/services/google-verified-sms": ShieldCheck,
  "/services/rcs": Sparkles,
  "/services/chatbots": Bot,
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  const servicesLink = NAV_LINKS.find((link) => link.dropdown);

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
                  ? "text-[#4ABFAD] bg-[#4ABFAD]/10"
                  : "text-slate-700 hover:text-[#4ABFAD] hover:bg-slate-50"
              }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                pathname === "/about"
                  ? "text-[#4ABFAD] bg-[#4ABFAD]/10"
                  : "text-slate-700 hover:text-[#4ABFAD] hover:bg-slate-50"
              }`}
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  pathname.startsWith("/services")
                    ? "text-[#4ABFAD] bg-[#4ABFAD]/10"
                    : "text-slate-700 hover:text-[#4ABFAD] hover:bg-slate-50"
                }`}
                aria-expanded={dropdownOpen}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    dropdownOpen ? "rotate-180 text-[#4ABFAD]" : "text-slate-400"
                  }`}
                />
              </button>

              {/* Mega Dropdown Menu */}
              {dropdownOpen && servicesLink?.dropdown && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[620px] z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="bg-white rounded-2xl shadow-xl border border-slate-200/90 p-5 grid grid-cols-2 gap-3 backdrop-blur-xl">
                    {servicesLink.dropdown.map((subItem) => {
                      const IconComponent = SERVICE_ICONS[subItem.href] || Sparkles;
                      const isActive = pathname === subItem.href;

                      return (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className={`p-3 rounded-xl transition-all flex items-start gap-3.5 group ${
                            isActive
                              ? "bg-[#4ABFAD]/10 border border-[#4ABFAD]/20"
                              : "hover:bg-slate-50 border border-transparent"
                          }`}
                        >
                          <div className="p-2 rounded-lg bg-[#4ABFAD]/10 text-[#4ABFAD] group-hover:bg-[#4ABFAD] group-hover:text-white transition-colors shrink-0 mt-0.5">
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-slate-900 group-hover:text-[#4ABFAD] transition-colors flex items-center gap-1">
                              {subItem.label}
                            </div>
                            <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                              {subItem.desc}
                            </p>
                          </div>
                        </Link>
                      );
                    })}

                    <div className="col-span-2 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                      <span>Enterprise communication platform</span>
                      <Link
                        href="/services"
                        className="text-[#4ABFAD] font-medium hover:underline flex items-center gap-1"
                      >
                        View all services <ArrowRight className="w-3.5 h-3.5" />
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
                  ? "text-[#4ABFAD] bg-[#4ABFAD]/10"
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
