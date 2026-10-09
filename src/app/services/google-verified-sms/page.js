import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight, CheckCircle2, ShieldCheck, Lock, Check } from "lucide-react";
import CTA from "@/components/sections/CTA";

export const metadata = {
  title: "Google Verified SMS Service | Authentic Brand Sender | Signy",
  description: "Build customer trust with Google Verified SMS. Verified logo, sender verification badge, fraud protection, and two-way conversations.",
};

const VERIFY_STEPS = [
  { step: "Step 1", title: "Submit Business Details", desc: "Share the required business documentation with our team to initiate verification." },
  { step: "Step 2", title: "Receive Verified Badge", desc: "Once approved, a distinctive blue verification badge will appear next to your business name and number in customers' messaging apps." },
  { step: "Step 3", title: "Avoid Spam Filters", desc: "Unverified messages risk being filtered into spam folders. Verified SMS ensures your communications reach the primary inbox." },
  { step: "Step 4", title: "Enable Two-Way Conversations", desc: "Customers can safely reply to your authenticated messages, opening a direct and trusted communication channel." }
];

export default function GoogleVerifiedSmsPage() {
  return (
    <div className="py-12 md:py-20">
      {/* Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="badge-teal">
              <Sparkles className="w-3.5 h-3.5 text-[#4ABFAD]" />
              <span>Official Google Verification Partner</span>
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Build Customer Trust with <span className="text-[#3B82F6]">Google Verified SMS</span>
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed">
              In a crowded market, establishing a credible communication channel is essential. Google Verified SMS enhances your brand&apos;s reliability and accessibility by displaying a verified badge alongside your messages. Signy streamlines the process of obtaining and managing your verified business account, empowering you to build stronger, more trustworthy customer relationships.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md h-80 bg-white/70 rounded-3xl border border-slate-200 p-6 shadow-xl backdrop-blur-md flex items-center justify-center">
              <Image
                src="/images/Google-Verified-SMS-Services.svg"
                alt="Google Verified SMS"
                fill
                priority
                className="object-contain p-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How Does Verified SMS Work */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-slate-200/80 mb-20">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="badge-teal">Trust Flow</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            How Does Verified SMS Work?
          </h2>
          <p className="text-slate-600 text-base">
            The verification process is straightforward and designed to build immediate trust with your audience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VERIFY_STEPS.map((step) => (
            <div
              key={step.step}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:border-[#3B82F6] transition-colors space-y-3"
            >
              <span className="text-xs font-bold text-[#3B82F6] bg-[#3B82F6]/10 px-2.5 py-1 rounded-full">
                {step.step}
              </span>
              <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Your Business Needs Google Verified SMS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-md h-80 bg-white rounded-3xl border border-slate-200 p-6 shadow-xl flex items-center justify-center">
              <Image
                src="/images/why-need-google-verified-sms-services.svg"
                alt="Why Need Google Verified SMS"
                fill
                className="object-contain p-4"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Why Your Business Needs Google Verified SMS?
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                When customers see the verified badge, they immediately recognize your message as legitimate—not spam or fraud. This is critical for sensitive communications like OTPs, appointment reminders, order updates, and payment confirmations, where trust is non-negotiable.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-100">
              <h3 className="text-xl font-bold text-slate-900">What Is Google Verified SMS?</h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                It’s a secure messaging format where each message from your business displays a verification symbol, confirming the sender&apos;s authenticity. This badge is granted only to businesses that complete Google&apos;s verification process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Signy for Verified SMS */}
      <section className="bg-slate-50 py-20 border-y border-slate-200/80 mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-6 text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Why Choose Signy for Verified SMS?
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Our service helps protect your brand and customers from phishing and fraud by ensuring every message is authenticated. We deliver messages swiftly and reliably, enhancing customer experience and fostering loyalty.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left pt-6">
              <div className="p-4 bg-white rounded-2xl border border-slate-200">
                <strong className="text-slate-900 block text-sm mb-1">Competitive &amp; Transparent:</strong>
                <span className="text-xs text-slate-600">Clear cost structures with zero hidden onboarding fees.</span>
              </div>
              <div className="p-4 bg-white rounded-2xl border border-slate-200">
                <strong className="text-slate-900 block text-sm mb-1">24/7 Dedicated Support:</strong>
                <span className="text-xs text-slate-600">Priority assistance and rapid escalation handling.</span>
              </div>
              <div className="p-4 bg-white rounded-2xl border border-slate-200">
                <strong className="text-slate-900 block text-sm mb-1">Simple Management:</strong>
                <span className="text-xs text-slate-600">Full setup support and ongoing Google profile management.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
