import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight, CheckCircle2, MessageCircle, Layers, ShieldCheck, Zap } from "lucide-react";
import CTA from "@/components/sections/CTA";

export const metadata = {
  title: "WhatsApp Business API Platform | Official Meta Partner | Signy",
  description: "Transform your business communication with WhatsApp Business API. Verified business profile, automated replies, templates, and CRM integration.",
};

const WORKFLOW = [
  { step: "Step 1", title: "Verification & Onboarding", desc: "We secure and manage your WhatsApp Business API verification, ensuring full compliance and a trusted business profile." },
  { step: "Step 2", title: "Seamless Integration", desc: "We connect the API directly into your existing CRM, support software, or business tools for unified communication." },
  { step: "Step 3", title: "Intelligent Messaging", desc: "Engage customers with approved message templates or live session messages—delivered directly within WhatsApp." },
  { step: "Step 4", title: "Track & Optimize", desc: "Monitor delivery rates, customer interactions, and engagement insights using built-in analytics to refine your strategy." }
];

export default function WhatsAppApiPage() {
  return (
    <div className="py-12 md:py-20">
      {/* Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="badge-teal">
              <span className="w-4 h-4 relative shrink-0 inline-flex items-center justify-center">
                <Image
                  src="/images/whatsapp-business-api.png"
                  alt=""
                  width={15}
                  height={15}
                  className="object-contain"
                />
              </span>
              <span>Official Meta Business Partner Platform</span>
            </span>

            <h1 className="signy-page-title">
              Transform Your Business Communication with <span className="text-[#25D366]">WhatsApp Business API</span>
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed">
              As smartphones continue to dominate global connectivity, WhatsApp has become an essential platform for meaningful communication. With over 2 billion active users, WhatsApp Business API offers powerful tools to help businesses engage more personally and efficiently with customers—at scale. Signy ensures a seamless and strategic integration, empowering you to enhance customer relationships and accelerate business growth.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                <span>Get started</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md h-80 sm:h-96 bg-white/70 rounded-3xl border border-slate-200 p-6 shadow-xl backdrop-blur-md flex items-center justify-center">
              <Image
                src="/images/whatsapp-business-hero-ui.svg"
                alt="Signy WhatsApp Business API Verified Interface"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 450px"
                className="object-contain p-2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-slate-200/80 mb-20">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="badge-teal">Process</span>
          <h2 className="signy-section-heading">
            How WhatsApp Business API Works
          </h2>
          <p className="text-slate-600 text-base">
            Our streamlined process ensures that your WhatsApp API integration is smooth, compliant, and effective from day one.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WORKFLOW.map((item) => (
            <div
              key={item.step}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:border-[#25D366] transition-colors space-y-3"
            >
              <span className="text-xs font-bold text-[#25D366] bg-[#25D366]/10 px-2.5 py-1 rounded-full">
                {item.step}
              </span>
              <h3 className="signy-card-heading">{item.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Signy & Message Types */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="signy-subsection-heading">Why Choose Signy?</h2>
            <ul className="space-y-2 text-slate-700 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                <span>Premium service without the premium cost.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                <span>Real-time assistance to keep your communication flowing.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                <span>Clear setup, no hidden steps, hassle-free growth.</span>
              </li>
            </ul>

            <div className="pt-6 border-t border-slate-100 space-y-4">
              <h3 className="signy-card-heading">Message Types Available with WhatsApp API</h3>
              <div className="space-y-3">
                <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
                  <strong className="text-slate-900 block mb-1">Message Templates:</strong>
                  <span className="text-slate-600 text-xs">Use clear CTAs like “Shop Now,” “Learn More,” or “Chat with Us.”</span>
                </div>
                <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
                  <strong className="text-slate-900 block mb-1">Session Message:</strong>
                  <span className="text-slate-600 text-xs">Engage in real-time conversations within 24 hours of customer contact.</span>
                </div>
                <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
                  <strong className="text-slate-900 block mb-1">List Message:</strong>
                  <span className="text-slate-600 text-xs">Present up to 10 interactive options to guide customers and boost conversions.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md h-80 sm:h-96 bg-white rounded-3xl border border-slate-200 p-6 shadow-xl flex items-center justify-center">
              <Image
                src="/images/two-way-communication-ui.svg"
                alt="Interactive WhatsApp Message Types"
                fill
                sizes="(max-width: 768px) 100vw, 450px"
                className="object-contain p-2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Use & What is WhatsApp Business API */}
      <section className="bg-slate-50 py-20 border-y border-slate-200/80 mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md h-80 sm:h-96 bg-white rounded-3xl border border-slate-200 p-6 shadow-xl flex items-center justify-center">
                <Image
                  src="/images/omnichannel-platform-ui.svg"
                  alt="Enterprise WhatsApp API Integration Suite"
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-contain p-2"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <h2 className="signy-subsection-heading">
                  Why Use WhatsApp Business API?
                </h2>
                <p className="text-slate-600 text-base leading-relaxed">
                  With billions of active users, WhatsApp offers a direct, secure, and trusted channel to connect with customers personally. The API helps businesses expand their reach while building credibility and improving response times.
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-200">
                <h3 className="signy-card-heading">
                  What Is WhatsApp Business API?
                </h3>
                <p className="text-slate-600 text-base leading-relaxed">
                  It’s a professional messaging solution that enables businesses to send automated, secure, and personalized messages at scale—streamlining communication, enhancing customer support, and boosting brand reliability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
