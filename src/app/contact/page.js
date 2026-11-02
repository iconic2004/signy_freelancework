"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Sparkles } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

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

const SERVICES = [
  "Bulk SMS",
  "WhatsApp Business API",
  "Voice Calls",
  "Google Verified SMS",
  "RCS Messaging",
  "Chatbots",
  "All Enterprise Services",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+91",
    phone: "",
    company: "",
    designation: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | opened_whatsapp
  const [errorMessage, setErrorMessage] = useState("");
  const [whatsappUrl, setWhatsappUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");

    // Validate required fields
    if (!formData.name.trim()) {
      setErrorMessage("Please enter your name.");
      return;
    }
    if (!formData.email.trim()) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    if (!formData.message.trim()) {
      setErrorMessage("Please enter your message.");
      return;
    }

    // Build the WhatsApp message with ALL form field values
    const fullPhone = formData.phone.trim()
      ? `${formData.countryCode} ${formData.phone.trim()}`
      : "N/A";

    const formattedMessage = `Hello Signy Team,

I would like to get in touch regarding your services.

Name: ${formData.name.trim()}
Email: ${formData.email.trim()}
Phone: ${fullPhone}
Company: ${formData.company.trim() || "N/A"}
Designation: ${formData.designation.trim() || "N/A"}
Service Interested In: ${formData.service || "N/A"}
Message: ${formData.message.trim()}

Please get back to me.`;

    const encodedText = encodeURIComponent(formattedMessage);
    const targetUrl = `https://wa.me/919167775222?text=${encodedText}`;
    setWhatsappUrl(targetUrl);

    try {
      window.open(targetUrl, "_blank", "noopener,noreferrer");
      setStatus("opened_whatsapp");
    } catch (err) {
      console.warn("WhatsApp open notice:", err);
      setStatus("opened_whatsapp");
    }
  };

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="badge-teal">
            <Sparkles className="w-3.5 h-3.5 text-[#4ABFAD]" />
            <span>Connect Directly With Our Specialists</span>
          </span>
          <h1 className="signy-page-title">
            Get in Touch!
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Signy was founded with a clear purpose: to deliver fast, secure, and reliable services to every client. This commitment remains at the heart of our work in API integration—where speed, security, and seamless connectivity are what we build our reputation on.
          </p>
        </div>

        {/* Contact Form & Visual Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Visual Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md h-96 sm:h-[460px] bg-slate-100 rounded-3xl border border-slate-200 shadow-xl overflow-hidden group">
              <Image
                src="/images/contact-specialist-meeting.jpg"
                alt="Signy Enterprise Messaging Specialists"
                fill
                sizes="(max-width: 768px) 100vw, 450px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 text-white pointer-events-none">
                <span className="inline-block px-2.5 py-1 rounded-full bg-[#4ABFAD]/90 text-slate-900 text-xs font-semibold uppercase tracking-wider mb-2">
                  Direct Specialist Access
                </span>
                <p className="text-sm font-medium text-slate-100 leading-snug">
                  Speak directly with senior messaging engineers and compliance consultants.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl relative overflow-hidden">
              <h2 className="signy-subsection-heading mb-6">
                Send us a message
              </h2>

              {status === "opened_whatsapp" ? (
                <div className="space-y-5">
                  <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-3">
                    <div className="flex items-center gap-2 font-bold text-base">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                      <span>WhatsApp Message Prepared</span>
                    </div>
                    <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed">
                      We have opened WhatsApp with your pre-filled message addressed to <strong>+91 91677 75222</strong>.
                    </p>
                    <div className="p-3 bg-white/80 rounded-xl border border-emerald-200/80 text-xs text-emerald-900 font-medium flex items-start gap-2">
                      <span className="text-base leading-none">👉</span>
                      <span><strong>Important:</strong> Please press <strong>Send</strong> inside WhatsApp to deliver your message directly to our team.</span>
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
                <form onSubmit={handleSubmit} className="space-y-5">
                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-medium flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Your Name <span className="text-[#4ABFAD]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#4ABFAD] focus:border-transparent text-slate-900 transition-all text-sm"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Email Address <span className="text-[#4ABFAD]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#4ABFAD] focus:border-transparent text-slate-900 transition-all text-sm"
                    />
                  </div>

                  {/* Phone with Country Code */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Phone Number
                    </label>
                    <div className="flex gap-2">
                      <select
                        value={formData.countryCode}
                        onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                        className="w-36 px-2.5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#4ABFAD] focus:border-transparent text-xs font-medium text-slate-800 bg-white transition-all"
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
                        className="flex-1 px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#4ABFAD] focus:border-transparent text-slate-900 transition-all text-sm"
                      />
                    </div>
                  </div>

                  {/* Company & Designation */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                        Company
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Enterprise Ltd"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#4ABFAD] focus:border-transparent text-slate-900 transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                        Designation
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Marketing Lead"
                        value={formData.designation}
                        onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#4ABFAD] focus:border-transparent text-slate-900 transition-all text-sm"
                      />
                    </div>
                  </div>

                  {/* Service Interested In */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Service Interested In
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#4ABFAD] focus:border-transparent text-sm text-slate-800 bg-white transition-all"
                    >
                      <option value="">Select a service...</option>
                      {SERVICES.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Message <span className="text-[#4ABFAD]">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Enter your message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#4ABFAD] focus:border-transparent text-slate-900 transition-all text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full py-3.5 text-base justify-center shadow-lg"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Contact Details & Google Maps Embed */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch border-t border-slate-200/80 pt-16">
          {/* Google Maps Embed */}
          <div className="lg:col-span-6 rounded-3xl overflow-hidden border border-slate-200 shadow-lg min-h-[350px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7536.645720055784!2d72.83209039453821!3d19.181095761431514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7cc3b4b91af%3A0xc26b33eb01023bff!2s9%2C%20Business%20Bay%20Sales%20Office!5e0!3m2!1sen!2sin!4v1767610410540!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "380px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Signy Office Location"
            />
          </div>

          {/* Contact Details List */}
          <div className="lg:col-span-6 glass-card rounded-3xl p-8 sm:p-10 flex flex-col justify-between space-y-6">
            <div>
              <h3 className="signy-card-heading mb-2">Address</h3>
              <p className="text-slate-600 text-sm leading-relaxed flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#4ABFAD] shrink-0 mt-1" />
                <span>{COMPANY_INFO.address}</span>
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-2">Sales Contact</h4>
                <div className="space-y-1 text-xs">
                  <a href={COMPANY_INFO.phoneHref} className="block text-slate-600 hover:text-[#4ABFAD]">
                    {COMPANY_INFO.phone}
                  </a>
                  <a href={COMPANY_INFO.emailHref} className="block text-slate-600 hover:text-[#4ABFAD]">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-2">Support Contact</h4>
                <div className="space-y-1 text-xs">
                  <a href={COMPANY_INFO.phoneHref} className="block text-slate-600 hover:text-[#4ABFAD]">
                    {COMPANY_INFO.phone}
                  </a>
                  <a href={COMPANY_INFO.emailHref} className="block text-slate-600 hover:text-[#4ABFAD]">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <h4 className="text-sm font-bold text-slate-900 mb-2">Corporate Business Contact</h4>
              <div className="space-y-1 text-xs">
                <a href={COMPANY_INFO.phoneHref} className="block text-slate-600 hover:text-[#4ABFAD]">
                  {COMPANY_INFO.phone}
                </a>
                <a href={COMPANY_INFO.emailHref} className="block text-slate-600 hover:text-[#4ABFAD]">
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
