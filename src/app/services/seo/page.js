import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight, CheckCircle2, TrendingUp, Search, BarChart3 } from "lucide-react";
import CTA from "@/components/sections/CTA";

export const metadata = {
  title: "Search Engine Optimization (SEO) Services | Signy",
  description: "Power your organic growth with data-driven SEO optimization. 24/7 visibility push, economical traffic acquisition, and high-quality lead generation.",
};

const BENEFITS = [
  { num: "01", title: "24/7 Promotional Push", desc: "SEO services ensure continuous promotion, building brand awareness, and driving organic traffic to your top-ranking website around the clock." },
  { num: "02", title: "Economical Source of Growth", desc: "Affordable rates for long-term compounding results compared to expensive, time-bound paid ad campaigns." },
  { num: "03", title: "Improved User Experience", desc: "SEO architecture and user-intent analysis helps refine page structure, site speed, and navigation to keep visitors engaged." },
  { num: "04", title: "Quality Over Quantity", desc: "Generate recurring, high-intent organic leads that convert consistently into loyal paying customers." }
];

export default function SeoPage() {
  return (
    <div className="py-12 md:py-20">
      {/* Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="badge-teal">
              <Sparkles className="w-3.5 h-3.5 text-[#4ABFAD]" />
              <span>Organic Search Dominance</span>
            </span>

            <h1 className="signy-page-title">
              Power Your Growth with <span className="text-[#4ABFAD]">SEO Optimization</span>
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed">
              At Signy, we deliver tailored search engine optimization solutions that strengthen your market presence, build lasting organic credibility, and convert search queries into measurable business growth—all with seamless technical execution.
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
                src="/images/seo-service.svg"
                alt="SEO Services"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 450px"
                className="object-contain p-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What Is SEO */}
      <section className="bg-slate-50 py-16 border-y border-slate-200/80 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="signy-subsection-heading">
              What Is Search Engine Optimization?
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Search Engine Optimization is the foundation of digital discovery that gives your brand an organic push. While every business can list a website on a search engine, it’s the strategic task of SEO to deliver premier visibility so your business stands out when high-intent prospects search for your services.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits of SEO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="badge-teal">Long-Term Value</span>
          <h2 className="signy-section-heading">
            Benefits Of SEO
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BENEFITS.map((item) => (
            <div
              key={item.num}
              className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:border-[#4ABFAD] transition-all space-y-3"
            >
              <span className="text-xs font-bold text-[#4ABFAD] bg-[#4ABFAD]/10 px-3 py-1 rounded-full">
                {item.num}
              </span>
              <h3 className="signy-card-heading">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <CTA />
    </div>
  );
}
