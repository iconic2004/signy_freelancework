import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight, CheckCircle2, Phone, Volume2, ShieldCheck, Zap } from "lucide-react";
import CTA from "@/components/sections/CTA";

export const metadata = {
  title: "Voice Call Solutions | Automated OBD & Outbound IVR | Signy",
  description: "Elevate your customer engagement with premier voice call solutions. Instant delivery, crystal-clear audio, multilingual outreach, and transparent pricing.",
};

const WORKFLOW = [
  { step: "Step 1", title: "Quick Account Setup", desc: "We create your dedicated account by gathering essential contact and billing details, helping you select the right plan and features for your goals." },
  { step: "Step 2", title: "Custom Configuration", desc: "We tailor the service to your needs—setting up intelligent call routing, designing voice menus, and implementing IVR systems for smooth call handling." },
  { step: "Step 3", title: "Go Live & Connect", desc: "Start making and receiving calls immediately through a user-friendly softphone app on any device, or integrate with your existing phone system." },
  { step: "Step 4", title: "Monitor & Optimize", desc: "Use built-in analytics and reporting to track performance metrics like call volume, duration, wait times, and customer engagement—turning insights into action." }
];

export default function VoiceCallsPage() {
  return (
    <div className="py-12 md:py-20">
      {/* Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="badge-teal">
              <Sparkles className="w-3.5 h-3.5 text-[#4ABFAD]" />
              <span>Crystal Clear Outbound Voice &amp; IVR</span>
            </span>

            <h1 className="signy-page-title">
              Elevate Your Engagement with Premier <span className="text-[#8B5CF6]">Voice Call Solutions</span>
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed">
              Drive faster conversions and build stronger connections with professional voice call services. Benefit from instant message delivery, crystal-clear communication, and seamless customer interactions—all powered by Signy. Scale your outreach effortlessly and unlock the full potential of voice marketing.
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
                src="/images/voice-calls.svg"
                alt="Voice Calls"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 450px"
                className="object-contain p-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-slate-200/80 mb-20">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="badge-teal">Onboarding</span>
          <h2 className="signy-section-heading">How It Works?</h2>
          <p className="text-slate-600 text-base">
            As your trusted voice call partner, we guide you through a simple, step-by-step setup designed for success.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WORKFLOW.map((item) => (
            <div
              key={item.step}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:border-[#8B5CF6] transition-colors space-y-3"
            >
              <span className="text-xs font-bold text-[#8B5CF6] bg-[#8B5CF6]/10 px-2.5 py-1 rounded-full">
                {item.step}
              </span>
              <h3 className="signy-card-heading">{item.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Signy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="signy-subsection-heading">
              Why Choose Signy?
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Looking for a voice call solution that balances performance and simplicity? We deliver a seamless, results-driven experience built around you.
            </p>
            <div className="space-y-3">
              <div className="p-4 bg-white rounded-2xl border border-slate-200">
                <strong className="text-slate-900 block mb-0.5">Transparent &amp; Competitive Pricing:</strong>
                <span className="text-slate-600 text-sm">Cost-effective plans with clear, upfront pricing without hidden fees.</span>
              </div>
              <div className="p-4 bg-white rounded-2xl border border-slate-200">
                <strong className="text-slate-900 block mb-0.5">24/7 Dedicated Support:</strong>
                <span className="text-slate-600 text-sm">Priority assistance and prompt resolution whenever you need it.</span>
              </div>
              <div className="p-4 bg-white rounded-2xl border border-slate-200">
                <strong className="text-slate-900 block mb-0.5">Easy &amp; Guided Implementation:</strong>
                <span className="text-slate-600 text-sm">Fully informed and supported from setup to scale.</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-md h-80 bg-white rounded-3xl border border-slate-200 p-6 shadow-xl flex items-center justify-center">
              <Image
                src="/images/companies-hire-voice-call.svg"
                alt="Companies Hire Voice Call"
                fill
                sizes="(max-width: 768px) 100vw, 450px"
                className="object-contain p-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What is Voice Call & Benefits */}
      <section className="bg-slate-50 py-20 border-y border-slate-200/80 mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="signy-subsection-heading text-center">
              What Is Voice Call Service?
            </h2>
            <p className="text-slate-600 text-base leading-relaxed text-center">
              Voice call service delivers automated, high-impact messages directly to your audience at scale. It offers accessible, memorable communication—especially effective in tier 2 and tier 3 regions—where voice calls often receive higher priority and engagement than texts or emails.
            </p>
            <div className="pt-6 space-y-3">
              <h3 className="signy-card-heading">Benefits of Voice Call Service:</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8B5CF6] shrink-0" />
                  <span><strong>Multilingual Outreach:</strong> Communicate in multiple regional languages to connect with diverse customer segments.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8B5CF6] shrink-0" />
                  <span><strong>Consistent &amp; Verified Delivery:</strong> Ensure uniform message delivery with built-in data verification.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8B5CF6] shrink-0" />
                  <span><strong>Cost-Effective Scaling:</strong> Access enterprise-grade reach with small-business-friendly pricing.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
