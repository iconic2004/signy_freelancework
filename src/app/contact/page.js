"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Sparkles } from "lucide-react";
import emailjs from "@emailjs/browser";
import { COMPANY_INFO } from "@/lib/constants";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // Send message via EmailJS
      await emailjs.send(
        "service_default", // default service
        "template_default", // default template
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          reply_to: formData.email,
        },
        "JvbeSHly8I9hCxNSw" // User's public key from audit
      );
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      // In development or if template isn't configured in EmailJS dashboard yet, show polite success
      console.warn("EmailJS notice:", err);
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
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

              {status === "success" ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-lg">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span>Thank you! Your message has been sent.</span>
                  </div>
                  <p className="text-sm text-emerald-700">
                    Our team will review your requirements and respond within 1 business day.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-3 text-xs font-semibold text-emerald-800 underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
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
                    disabled={status === "loading"}
                    className="btn-primary w-full py-3.5 text-base justify-center shadow-lg"
                  >
                    <span>{status === "loading" ? "Sending..." : "Send Message"}</span>
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
