import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import CTA from "@/components/sections/CTA";

export const metadata = {
  title: "All Services & Solutions | Signy Enterprise Platform",
  description: "Explore Signy's comprehensive communication suite: Bulk SMS, WhatsApp Business API, Voice Calls, RCS, Chatbots, Two-Way Communication, SEO, and Web Development.",
};

const DETAILED_SERVICES = [
  {
    title: "Strategic Social Media Management",
    desc: "At Signy, we specialize in delivering premier social media marketing services designed to expertly amplify and grow your eCommerce business.",
    href: "/services/social-media",
    img: "/images/social-media-growth-ui.svg",
    badge: "Audience Growth",
    reverse: false
  },
  {
    title: "High-Impact Bulk SMS Campaigns",
    desc: "Leverage our results-focused bulk SMS service to effectively broadcast promotions, announcements, and surveys—driving engagement directly to your audience.",
    href: "/services/bulk-sms",
    img: "/images/bulk-sms-gateway-ui.svg",
    badge: "99.9% Route Deliverability",
    reverse: true
  },
  {
    title: "Comprehensive SEO Solutions",
    desc: "Our targeted SEO strategies help businesses stand out. We optimize visibility for a wide range of sectors, including online retail, hospitality, healthcare, home services, and beyond.",
    href: "/services/seo",
    img: "/images/seo-analytics-ui.svg",
    badge: "Organic Search Dominance",
    reverse: false
  },
  {
    title: "Dynamic Web Development",
    desc: "A website must do more than just exist—it must perform. We build and refine websites to boost functionality, improve user experience, and increase organic traffic.",
    href: "/services/web-development",
    img: "/images/web-dev-architecture-ui.svg",
    badge: "High Performance Web",
    reverse: true
  },
  {
    title: "Interactive Two-Way Communication",
    desc: "True communication is always a dialogue. Signy enables meaningful interaction through advanced calling and SMS platforms that foster genuine connection and engagement.",
    href: "/services/two-way-communication",
    img: "/images/two-way-communication-ui.svg",
    badge: "Interactive Messaging",
    reverse: false
  }
];

const WHY_CHOOSE_CARDS = [
  { title: "Audience Insight", img: "/images/audience.svg", desc: "Granular data analytics to segment and identify your high-intent audience." },
  { title: "Precision Reach", img: "/images/reach-audience.svg", desc: "Instantaneous, carrier-grade message routing without bottleneck drops." },
  { title: "Community Engagement", img: "/images/community.svg", desc: "Interactive conversational messaging driving authentic relationships." },
  { title: "Data-Driven Analytics", img: "/images/analytics.svg", desc: "Live delivery receipts, conversion insights, and click tracking reports." },
];

export default function ServicesPage() {
  return (
    <div className="py-12 md:py-20">
      {/* Banner Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">

            <h1 className="signy-page-title">
              Our <span className="text-[#4ABFAD]">Services</span>
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              <strong className="text-slate-900 font-semibold block mb-1">
                Elevating Your Brand with Cutting-Edge Social Media &amp; Messaging Infrastructure
              </strong>
              At Signy, we specialize in delivering premier communication platforms and digital marketing services designed to expertly amplify and grow your business.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <Link href="/contact" className="btn-primary">
                <span>Request Custom Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="#solutions" className="btn-secondary">
                <span>Browse Offerings</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md h-80 bg-white/70 rounded-3xl border border-slate-200 p-6 shadow-xl backdrop-blur-md flex items-center justify-center">
              <Image
                src="/images/omnichannel-platform-ui.svg"
                alt="Signy Enterprise Messaging Suite"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 450px"
                className="object-contain p-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Middle CTA Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="bg-gradient-to-r from-[#1B2A4A] to-[#121B30] text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 border border-slate-800">
          <div className="max-w-2xl space-y-3 text-center md:text-left">
            <h2 className="signy-subsection-heading text-white leading-snug">
              Transform Your Vision into Tangible Business Success
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              We turn your concepts into actionable, innovative strategies that drive real-world results for your company.
            </p>
          </div>
          <Link href="/contact" className="btn-primary shrink-0 text-sm px-7 py-3">
            <span>Get in touch</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Detailed Services Listing */}
      <section id="solutions" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 mb-28">
        {DETAILED_SERVICES.map((item, idx) => (
          <div
            key={item.title}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
              item.reverse ? "lg:flex-row-reverse" : ""
            }`}
          >
            <div
              className={`space-y-6 ${
                item.reverse
                  ? "lg:col-span-6 lg:order-2"
                  : "lg:col-span-6 lg:order-1"
              }`}
            >
              <span className="badge-teal">{item.badge}</span>
              <h2 className="signy-section-heading leading-tight">
                {item.title}
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                {item.desc}
              </p>
              <div>
                <Link href={item.href} className="btn-primary">
                  <span>Know More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div
              className={`flex justify-center ${
                item.reverse
                  ? "lg:col-span-6 lg:order-1"
                  : "lg:col-span-6 lg:order-2"
              }`}
            >
              <div className="relative w-full max-w-lg h-80 sm:h-96 bg-white rounded-3xl border border-slate-200/90 p-6 shadow-xl backdrop-blur-md flex items-center justify-center group hover:border-[#4ABFAD]/50 transition-all">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 520px"
                  className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Why Choose Signy Section */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden mb-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#4ABFAD]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-5 space-y-6">
              <span className="badge-teal bg-white/10 text-[#4ABFAD] border-white/20">
                <span>The Signy Advantage</span>
              </span>
              <h2 className="signy-section-heading text-white tracking-tight">
                Why Choose Signy?
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                Whether you&apos;re a growing startup or an established corporation, we provide flexible and cost-effective solutions tailored to your scale and ambition.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                We collaborate with industry leaders like Pizza Hut to deliver exclusive news and offers directly to their customers. From mouth-watering promotions to special deals, we ensure their audience receives compelling content right to their inbox or phone.
              </p>
            </div>

            {/* Right Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {WHY_CHOOSE_CARDS.map((card) => (
                <div
                  key={card.title}
                  className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 backdrop-blur-md hover:border-[#4ABFAD]/50 transition-colors space-y-4"
                >
                  <div className="relative w-12 h-12 bg-white/5 rounded-xl p-2.5 flex items-center justify-center">
                    <Image
                      src={card.img}
                      alt={card.title}
                      fill
                      sizes="48px"
                      className="object-contain p-2"
                    />
                  </div>
                  <h3 className="signy-card-heading text-white">
                    {card.title}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Global CTA */}
      <CTA />
    </div>
  );
}
