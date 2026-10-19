import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight, CheckCircle2, MessageSquare, Image as ImageIcon, Zap, ShieldCheck } from "lucide-react";
import CTA from "@/components/sections/CTA";

export const metadata = {
  title: "RCS Messaging Platform | Rich Media & Interactive Chat | Signy",
  description: "Transform your business with RCS - the next generation of messaging. Rich media, interactive carousels, action buttons, and verified sender profiles.",
};

const RCS_PILLARS = [
  { step: "Feature 1", title: "Transparent, Competitive Pricing", desc: "Straightforward pricing models that maximize your campaign ROI." },
  { step: "Feature 2", title: "Round-the-Clock Support", desc: "Dedicated, priority technical assistance whenever you need it." },
  { step: "Feature 3", title: "Hassle-Free Management", desc: "Guided setup and ongoing carrier support to ensure smooth operations." },
  { step: "Feature 4", title: "Real-Time Rich Conversations", desc: "Enable interactive, two-way dialogues with support for media, locations, quick replies, and more." }
];

export default function RcsPage() {
  return (
    <div className="py-12 md:py-20">
      {/* Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="badge-teal">
              <span className="w-4 h-4 relative shrink-0 inline-flex items-center justify-center">
                <Image
                  src="/images/rcs-messaging.png"
                  alt=""
                  width={16}
                  height={16}
                  className="object-contain"
                />
              </span>
              <span>Next-Gen Mobile Messaging Protocol</span>
            </span>

            <h1 className="signy-page-title">
              Transform Your Business with <span className="text-[#EC4899]">RCS</span> – The Next Generation of Messaging
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed">
              Elevate your customer conversations beyond simple text with RCS (Rich Communication Services). This powerful platform enables you to share rich media, interactive carousels, high-resolution images, videos, and GIFs—all within the native messaging experience. Move past static SMS and deliver compelling, visual messages that truly engage your audience and drive results.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md h-80 sm:h-96 bg-white/70 rounded-3xl border border-slate-200 p-6 shadow-xl backdrop-blur-md flex items-center justify-center">
              <Image
                src="/images/rcs-messaging-hero-ui.svg"
                alt="RCS Next-Gen Rich Interactive Messaging UI"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 450px"
                className="object-contain p-2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Signy for RCS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-slate-200/80 mb-20">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="badge-teal">Core Capabilities</span>
          <h2 className="signy-section-heading">
            Why Choose Signy for RCS?
          </h2>
          <p className="text-slate-600 text-base">
            Signy delivers reliable, cost-effective RCS messaging services that fuel your daily growth and strengthen customer relationships.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {RCS_PILLARS.map((item) => (
            <div
              key={item.step}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:border-[#EC4899] transition-colors space-y-3"
            >
              <span className="text-xs font-bold text-[#EC4899] bg-[#EC4899]/10 px-2.5 py-1 rounded-full">
                {item.step}
              </span>
              <h3 className="signy-card-heading">{item.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Business Needs RCS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-md h-80 sm:h-96 bg-white rounded-3xl border border-slate-200 p-6 shadow-xl flex items-center justify-center">
              <Image
                src="/images/two-way-communication-ui.svg"
                alt="Interactive Rich Media RCS Experience"
                fill
                sizes="(max-width: 768px) 100vw, 450px"
                className="object-contain p-2"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <h2 className="signy-subsection-heading">
                Why Should Your Business Use RCS?
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                RCS enhances communication by offering rich media, real-time interactivity, broader reach, and advanced security—creating meaningful, engaging, and trustworthy conversations with your customers.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-100">
              <h3 className="signy-card-heading">What Is RCS Messaging?</h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                RCS (Rich Communication Services) is a next-generation messaging protocol that transforms ordinary texting into a dynamic, multimedia experience. It empowers businesses to enrich messages with images, stickers, videos, GIFs, and interactive buttons—turning every exchange into an engaging conversation.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-100">
              <h3 className="signy-card-heading">What Makes Signy Different?</h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Our RCS platform goes beyond the basics. We deliver advanced features like group chats, high-quality video sharing, seamless file transfer, and rich multimedia support—all designed to increase engagement, improve satisfaction, and deliver measurable business outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
