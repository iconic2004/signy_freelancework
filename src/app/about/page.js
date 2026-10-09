import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Target, Compass, Sparkles, CheckCircle2, ShieldCheck, Zap, Server } from "lucide-react";

export const metadata = {
  title: "About Signy — Pioneer in Bulk SMS & API Solutions",
  description: "Learn more about Signy Solutions India Pvt Ltd, our vision, mission, and dedication to rapid and secure messaging infrastructure.",
};

export default function AboutPage() {
  return (
    <div className="py-16 md:py-24 bg-slate-950 text-white min-h-screen relative overflow-hidden">
      {/* Ambient glowing meshes */}
      <div className="absolute top-1/4 left-10 w-[600px] h-[400px] bg-[#4ABFAD]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="bg-tech-grid absolute inset-0 opacity-20 pointer-events-none" />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#4ABFAD]/15 border border-[#4ABFAD]/30 text-[#4ABFAD] text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Our Legacy &amp; Technical Foundation</span>
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Pioneering Enterprise Communications at <span className="text-[#4ABFAD]">Signy</span>
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed">
              Signy Solutions was established with a singular mission: to power rapid, secure, and carrier-grade communication channels for enterprises. Over a decade of engineering excellence has positioned Signy as a premier Bulk SMS, WhatsApp Business API, and VAS provider.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 text-xs font-semibold text-slate-300">
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-[#4ABFAD]" />
                <span>DLT &amp; Meta Certified</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center gap-3">
                <Zap className="w-5 h-5 text-[#4ABFAD]" />
                <span>99.99% Routing SLA</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center gap-3 col-span-2 sm:col-span-1">
                <Server className="w-5 h-5 text-[#4ABFAD]" />
                <span>100k+ TPS Scale</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                <span>Partner with Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/services" className="btn-secondary">
                <span>Explore Solutions</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-lg h-96 bg-slate-900/80 rounded-3xl border border-slate-800 p-4 shadow-2xl backdrop-blur-xl flex items-center justify-center overflow-hidden group">
              <Image
                src="/images/api-integration.jpg"
                alt="About Signy Infrastructure"
                fill
                priority
                className="object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 text-xs text-slate-300 font-semibold bg-slate-950/80 p-3 rounded-xl border border-slate-800 backdrop-blur-md">
                ⚡ Direct Tier-1 Operator Integrations Across Global Carrier Hubs
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-slate-800/80 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Vision Card */}
          <div className="bg-slate-900/70 border border-slate-800 rounded-3xl p-8 sm:p-10 relative overflow-hidden flex flex-col justify-between group hover:border-[#4ABFAD]/60 transition-all duration-300 shadow-xl">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#4ABFAD]/15 text-[#4ABFAD] flex items-center justify-center border border-[#4ABFAD]/30">
                  <Compass className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#4ABFAD]">
                  Strategic Vision
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Our Vision
              </h2>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                Signy Solutions India Pvt Ltd envisions a future illuminated by innovation, continuous carrier integration, and absolute uptime. We strive to empower businesses with frictionless customer touchpoints—combining state-of-the-art AI chatbots, Google Verified SMS, and WhatsApp automation into a single unified API mesh.
              </p>
            </div>

            <div className="relative h-56 w-full mt-8 rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden flex items-center justify-center">
              <Image
                src="/images/cost-savings.jpg"
                alt="Signy Vision"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
              />
            </div>
          </div>

          {/* Mission Card */}
          <div className="bg-slate-900/70 border border-slate-800 rounded-3xl p-8 sm:p-10 relative overflow-hidden flex flex-col justify-between group hover:border-[#4ABFAD]/60 transition-all duration-300 shadow-xl">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/15 text-blue-400 flex items-center justify-center border border-blue-500/30">
                  <Target className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                  Purpose &amp; Execution
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Our Mission
              </h2>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                At Signy, our mission is to eliminate deliverability bottlenecks. We pioneer innovative software and bulk SMS solutions because rapid, secure communication is the lifeblood of transactional trust and marketing conversion for every enterprise.
              </p>
            </div>

            <div className="relative h-56 w-full mt-8 rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden flex items-center justify-center">
              <Image
                src="/images/expert-support.jpg"
                alt="Signy Mission"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
