"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { X, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { gsap, MOTION_EASE } from "@/lib/motion";

const COUNTRY_CODES = [
  { code: "+91", country: "India" },
  { code: "+1", country: "USA / Canada" },
  { code: "+44", country: "UK" },
  { code: "+971", country: "UAE" },
  { code: "+65", country: "Singapore" },
  { code: "+61", country: "Australia" },
  { code: "+49", country: "Germany" },
  { code: "+33", country: "France" },
  { code: "+966", country: "Saudi Arabia" },
  { code: "+974", country: "Qatar" },
  { code: "+60", country: "Malaysia" },
  { code: "+81", country: "Japan" },
  { code: "+62", country: "Indonesia" },
  { code: "+880", country: "Bangladesh" },
  { code: "+94", country: "Sri Lanka" },
  { code: "+977", country: "Nepal" },
];

const PRODUCTS = [
  "Bulk SMS",
  "WhatsApp Business API",
  "Voice Calls",
  "Google Verified SMS",
  "RCS Messaging",
  "Chatbots",
  "All Enterprise Services",
];

export default function BookDemoModal({ isOpen, onClose }) {
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "+91",
    phone: "",
    designation: "",
    company: "",
    product: "",
    privacyConsent: false,
  });

  const [status, setStatus] = useState("idle"); // idle | opened_whatsapp | error
  const [errorMessage, setErrorMessage] = useState("");
  const [whatsappUrl, setWhatsappUrl] = useState("");

  const overlayRef = useRef(null);
  const modalRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prevOverflow;
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

  // Animate modal open
  useEffect(() => {
    if (!isOpen || !modalRef.current) return;

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
            gsap.set([overlayRef.current, modalRef.current], {
              opacity: 1,
              scale: 1,
              y: 0,
            });
            return;
          }

          gsap.fromTo(
            overlayRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 0.25, ease: "power2.out" }
          );

          gsap.fromTo(
            modalRef.current,
            { opacity: 0, scale: 0.95, y: 15 },
            { opacity: 1, scale: 1, y: 0, duration: 0.35, ease: MOTION_EASE.outExpo }
          );
        }
      );
    }, modalRef);

    return () => ctx.revert();
  }, [isOpen]);

  const handleClose = () => {
    if (!modalRef.current) {
      onClose();
      return;
    }

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      onClose();
      return;
    }

    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 0.2,
      ease: "power2.inOut",
    });

    gsap.to(modalRef.current, {
      opacity: 0,
      scale: 0.96,
      y: 10,
      duration: 0.2,
      ease: "power2.inOut",
      onComplete: () => {
        onClose();
        setStatus("idle");
      },
    });
  };

  const handleBackdropClick = (e) => {
    if (e.target === overlayRef.current) {
      handleClose();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");

    // Validate required fields
    if (!formData.email.trim()) {
      setErrorMessage("Please provide a valid work email.");
      return;
    }

    if (!formData.privacyConsent) {
      setErrorMessage("Please accept the privacy policy to proceed.");
      return;
    }

    // Build structured WhatsApp message
    const formattedMessage = `Book a Demo Request

First Name: ${formData.firstName.trim() || "N/A"}
Last Name: ${formData.lastName.trim() || "N/A"}
Email: ${formData.email.trim()}
Phone: ${formData.phone.trim() ? `${formData.countryCode} ${formData.phone.trim()}` : "N/A"}
Designation: ${formData.designation.trim() || "N/A"}
Company: ${formData.company.trim() || "N/A"}
Product Interested In: ${formData.product || "General Enterprise Solutions"}
Privacy Consent: Yes`;

    const encodedText = encodeURIComponent(formattedMessage);
    const targetUrl = `https://wa.me/919167775222?text=${encodedText}`;
    setWhatsappUrl(targetUrl);

    try {
      // Open WhatsApp click-to-chat in new tab
      window.open(targetUrl, "_blank", "noopener,noreferrer");
      setStatus("opened_whatsapp");
    } catch (err) {
      console.warn("WhatsApp open notice:", err);
      setStatus("opened_whatsapp");
    }
  };

  if (!mounted || !isOpen) return null;

  const modalContent = (
    <div
      ref={overlayRef}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="book-demo-title"
      className="fixed inset-0 z-[99999] bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      style={{ willChange: "opacity" }}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-xl bg-white text-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-2xl my-auto max-h-[90dvh] overflow-y-auto will-change-transform"
      >
        {/* Header with Close X */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-100">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#4ABFAD] font-bold">
              Signy Solutions
            </span>
            <h2
              id="book-demo-title"
              className="signy-subsection-heading mt-1"
            >
              Book a Demo
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Connect directly with our communication specialists.
            </p>
          </div>

          <button
            onClick={handleClose}
            className="p-2 -mr-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* WhatsApp Redirection Banner after submission */}
        {status === "opened_whatsapp" ? (
          <div className="py-6 space-y-5">
            <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-3">
              <div className="flex items-center gap-2 font-bold text-base">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>WhatsApp Demo Request Prepared</span>
              </div>
              <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed">
                We have opened WhatsApp with your pre-filled demo request details addressed to <strong>+91 91677 75222</strong>.
              </p>
              <div className="p-3 bg-white/80 rounded-xl border border-emerald-200/80 text-xs text-emerald-900 font-medium flex items-start gap-2">
                <span className="text-base leading-none">👉</span>
                <span><strong>Important:</strong> Please press <strong>Send</strong> inside WhatsApp to deliver your request directly to our support engineers.</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full sm:w-auto text-sm justify-center py-3"
              >
                <span className="w-4 h-4 relative shrink-0 inline-flex items-center justify-center">
                  <Image
                    src="/images/whatsapp-business-api.png"
                    alt=""
                    width={17}
                    height={17}
                    className="object-contain"
                  />
                </span>
                <span>Open WhatsApp Again</span>
              </a>

              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="btn-secondary w-full sm:w-auto text-sm justify-center py-3 cursor-pointer"
              >
                <span>Edit Details</span>
              </button>
            </div>
          </div>
        ) : (
          /* Form */
          <form onSubmit={handleSubmit} className="space-y-4 pt-5 text-left">
            {errorMessage && (
              <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-medium flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* First & Last Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Rahul"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#4ABFAD]/30 focus:border-[#4ABFAD] text-sm text-slate-900 transition-all placeholder:text-slate-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Sharma"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#4ABFAD]/30 focus:border-[#4ABFAD] text-sm text-slate-900 transition-all placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* Email (Required) */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Work Email <span className="text-[#4ABFAD]">*</span>
              </label>
              <input
                type="email"
                required
                placeholder="name@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#4ABFAD]/30 focus:border-[#4ABFAD] text-sm text-slate-900 transition-all placeholder:text-slate-400"
              />
            </div>

            {/* Phone with Country Code Selector */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Phone Number
              </label>
              <div className="flex gap-2">
                <select
                  value={formData.countryCode}
                  onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                  className="w-36 px-2.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#4ABFAD]/30 focus:border-[#4ABFAD] text-xs font-medium text-slate-800 bg-white transition-all"
                >
                  {COUNTRY_CODES.map((c) => (
                    <option key={c.code + c.country} value={c.code}>
                      {c.code} ({c.country})
                    </option>
                  ))}
                </select>

                <input
                  type="tel"
                  placeholder="98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="flex-1 px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#4ABFAD]/30 focus:border-[#4ABFAD] text-sm text-slate-900 transition-all placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* Designation & Company */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Designation
                </label>
                <input
                  type="text"
                  placeholder="e.g. Marketing Lead"
                  value={formData.designation}
                  onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#4ABFAD]/30 focus:border-[#4ABFAD] text-sm text-slate-900 transition-all placeholder:text-slate-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Company
                </label>
                <input
                  type="text"
                  placeholder="e.g. Enterprise Ltd"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#4ABFAD]/30 focus:border-[#4ABFAD] text-sm text-slate-900 transition-all placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* Product Interested In */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Product Interested In
              </label>
              <select
                value={formData.product}
                onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#4ABFAD]/30 focus:border-[#4ABFAD] text-sm text-slate-800 bg-white transition-all"
              >
                <option value="">Select a service / product...</option>
                {PRODUCTS.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </div>

            {/* Privacy Policy Consent Checkbox */}
            <div className="pt-2">
              <label className="flex items-start gap-2.5 cursor-pointer select-none">
                <input
                  type="checkbox"
                  required
                  checked={formData.privacyConsent}
                  onChange={(e) => setFormData({ ...formData, privacyConsent: e.target.checked })}
                  className="mt-0.5 h-4 w-4 rounded border-slate-300 text-[#4ABFAD] focus:ring-[#4ABFAD] cursor-pointer"
                />
                <span className="text-xs text-slate-600 leading-relaxed">
                  I agree to the{" "}
                  <Link
                    href="/privacy-policy"
                    target="_blank"
                    className="text-[#4ABFAD] underline hover:text-[#3ca393]"
                  >
                    Privacy Policy
                  </Link>{" "}
                  and authorize Signy to contact me regarding my demo inquiry.
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-3">
              <button
                type="submit"
                className="btn-primary w-full py-3.5 text-base justify-center shadow-lg cursor-pointer"
              >
                <span>Book a Demo</span>
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
