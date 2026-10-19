import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#0B132B] text-slate-300 pt-16 pb-12 border-t border-slate-800 relative z-10 overflow-hidden">
      {/* Subtle ambient glow in footer */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#4ABFAD]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="inline-block">
              <div className="relative h-10 w-36 brightness-110">
                <Image
                  src="/images/logow.png"
                  alt="Signy"
                  fill
                  sizes="144px"
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              {COMPANY_INFO.tagline}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={COMPANY_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800/80 hover:bg-[#4ABFAD] hover:text-white flex items-center justify-center text-slate-300 transition-all duration-200"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800/80 hover:bg-[#4ABFAD] hover:text-white flex items-center justify-center text-slate-300 transition-all duration-200"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-slate-400 hover:text-[#4ABFAD] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-[#4ABFAD] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/why-us" className="text-slate-400 hover:text-[#4ABFAD] transition-colors">
                  Why Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-[#4ABFAD] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions / Services */}
          <div className="space-y-4">
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase">
              Solutions
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/services/bulk-sms" className="text-slate-400 hover:text-[#4ABFAD] transition-colors">
                  Bulk SMS Service
                </Link>
              </li>
              <li>
                <Link href="/services/whatsapp-business-api" className="text-slate-400 hover:text-[#4ABFAD] transition-colors">
                  WhatsApp Business API
                </Link>
              </li>
              <li>
                <Link href="/services/voice-calls" className="text-slate-400 hover:text-[#4ABFAD] transition-colors">
                  Voice Call Services
                </Link>
              </li>
              <li>
                <Link href="/services/google-verified-sms" className="text-slate-400 hover:text-[#4ABFAD] transition-colors">
                  Google Verified SMS
                </Link>
              </li>
              <li>
                <Link href="/services/rcs" className="text-slate-400 hover:text-[#4ABFAD] transition-colors">
                  RCS Messaging
                </Link>
              </li>
              <li>
                <Link href="/services/chatbots" className="text-slate-400 hover:text-[#4ABFAD] transition-colors">
                  Chatbot Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Location */}
          <div className="space-y-4">
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase">
              Get in Touch
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#4ABFAD] shrink-0 mt-1" />
                <span className="text-slate-400 text-xs leading-relaxed">
                  {COMPANY_INFO.address}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#4ABFAD] shrink-0" />
                <a
                  href={COMPANY_INFO.phoneHref}
                  className="text-slate-400 hover:text-[#4ABFAD] transition-colors text-xs"
                >
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#4ABFAD] shrink-0" />
                <a
                  href={COMPANY_INFO.emailHref}
                  className="text-slate-400 hover:text-[#4ABFAD] transition-colors text-xs"
                >
                  {COMPANY_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar with legal & copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>{COMPANY_INFO.copyright}</p>
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-slate-300 transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/cancellation-refund-policy" className="hover:text-slate-300 transition-colors">
              Cancellation & Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
