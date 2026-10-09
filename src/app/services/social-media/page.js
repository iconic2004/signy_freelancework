import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight, CheckCircle2, Share2, Users, Heart, Award } from "lucide-react";
import CTA from "@/components/sections/CTA";

export const metadata = {
  title: "Social Media Marketing Services | eCommerce & Brand Growth | Signy",
  description: "Master your digital presence with strategic social media marketing. Rapid brand awareness, high conversion rates, and community building.",
};

const BENEFITS = [
  { num: "01", title: "Rapid Brand Awareness", desc: "Instantly reach and resonate with millions of active users across social channels." },
  { num: "02", title: "Higher Conversion Rates", desc: "Build personal connections and targeted campaigns that turn followers into paying customers." },
  { num: "03", title: "Compelling Storytelling", desc: "Share your brand narrative in an engaging, dynamic visual format that captures attention." },
  { num: "04", title: "Data-Driven Insights", desc: "Understand your audience deeply through actionable analytics and behavior trends." },
  { num: "05", title: "Stronger Customer Relationships", desc: "Foster trust and credibility through prompt, authentic two-way interactions." },
  { num: "06", title: "Enhanced Brand Authority", desc: "A consistent, valuable presence establishes you as an undisputed industry voice." }
];

export default function SocialMediaPage() {
  return (
    <div className="py-12 md:py-20">
      {/* Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="badge-teal">
              <Sparkles className="w-3.5 h-3.5 text-[#4ABFAD]" />
              <span>Omnichannel Growth &amp; Engagement</span>
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Master Your Digital Presence with Strategic <span className="text-[#4ABFAD]">Social Media</span>
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed">
              In today&apos;s digital-first world, a powerful online presence is non-negotiable for business growth. Social Media Marketing is the engine that drives brand awareness, connects you with a global audience, and directly fuels sales. With over 80% of Indian businesses actively on social media and 40% seeing significant returns, the opportunity is undeniable.
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
                src="/images/Social-media.png"
                alt="Social Media Marketing"
                fill
                priority
                className="object-contain p-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What is Social Media Marketing */}
      <section className="bg-slate-50 py-16 border-y border-slate-200/80 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              What Is Social Media Marketing?
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              It&apos;s the strategic use of platforms like Instagram, Facebook, LinkedIn, and Twitter to elevate your brand. It’s about creating a vibrant online persona, running campaigns that spark conversation, and leveraging real-time trends to establish your brand as an industry leader.
            </p>
          </div>
        </div>
      </section>

      {/* 6 Key Benefits */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="badge-teal">Brand Growth</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Key Benefits of Professional Social Media Marketing
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BENEFITS.map((item) => (
            <div
              key={item.num}
              className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:border-[#4ABFAD] transition-all space-y-3"
            >
              <span className="text-xs font-bold text-[#4ABFAD] bg-[#4ABFAD]/10 px-3 py-1 rounded-full">
                {item.num}
              </span>
              <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <CTA />
    </div>
  );
}
