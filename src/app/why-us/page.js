import Link from "next/link";
import { 
  Server, 
  ShieldCheck, 
  Cpu, 
  RefreshCw, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  Lock, 
  Zap, 
  Headphones, 
  FileText, 
  Code2 
} from "lucide-react";
import CTA from "@/components/sections/CTA";

export const metadata = {
  title: "Why Choose Signy | Enterprise Infrastructure & Security",
  description: "Learn why hundreds of brands trust Signy for mission-critical bulk SMS, OTP delivery, redundant servers, and dedicated SLA support.",
};

const PILLARS = [
  { text: "CRM Integration Available", icon: Code2 },
  { text: "Dedicated Setup for Corporates & Brands", icon: Server },
  { text: "Supportive of Start-ups (Tailored packages & flexible support)", icon: Sparkles },
  { text: "Billing as Per SLA", icon: FileText },
  { text: "Guaranteed Data Privacy & Compliance", icon: Lock },
  { text: "24/7 Dedicated Support", icon: Headphones },
  { text: "Real-Time Reports & Analytics", icon: Zap },
  { text: "Every Enterprise API Available", icon: Cpu },
  { text: "Best-in-Class Features for Resellers", icon: ShieldCheck }
];

const TECH_FEATURES = [
  {
    title: "In-House Development",
    desc: "All our solutions are developed and maintained by our own expert engineering team. This allows us to quickly address any issues and continuously innovate. We are constantly working on new technologies to enhance performance and provide you with a smoother, more efficient operation.",
    icon: Code2
  },
  {
    title: "Always Evolving",
    desc: "As a leading bulk SMS service provider, we continuously refine and advance our technology. We are actively exploring new methods for precise and efficient SMS delivery. Plus, we welcome customization—our solutions can be adapted to meet your specific requirements.",
    icon: RefreshCw
  },
  {
    title: "High-End Security",
    desc: "In an era of increasing cyber threats, we prioritize security. Multiple layers of protection are embedded across all our systems to safeguard your data and prevent unauthorized access, giving you complete peace of mind.",
    icon: ShieldCheck
  },
  {
    title: "Latest SMPP & Portal Versions",
    desc: "Stay ahead with access to the most up-to-date technology. With Signy, you get the latest versions of SMPP and our web portal, along with all the newest features, compliance patches, and speed improvements.",
    icon: Server
  },
  {
    title: "Rigorous Testing & Validation",
    desc: "Our team doesn’t just build advanced platforms—we rigorously test every product to eliminate bugs before deployment. This ensures stable, reliable performance from day one under heavy peak throughput.",
    icon: CheckCircle2
  }
];

export default function WhyUsPage() {
  return (
    <div className="py-12 md:py-20">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center lg:text-left">
        <div className="max-w-3xl space-y-5">
          <span className="badge-teal">
            <Sparkles className="w-3.5 h-3.5 text-[#4ABFAD]" />
            <span>Enterprise Reliability & Trust</span>
          </span>
          <h1 className="signy-page-title">
            Why Choose <span className="text-[#4ABFAD]">Signy</span>
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            Whether you&apos;re a growing startup or an established enterprise, we provide flexible, carrier-grade, and cost-effective solutions tailored to your scale and ambition.
          </p>
        </div>
      </section>

      {/* 9 Core Advantage Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl p-6 flex items-start gap-4 border border-slate-200/80 group hover:border-[#4ABFAD]/40"
              >
                <div className="w-10 h-10 rounded-xl bg-[#4ABFAD]/10 text-[#4ABFAD] flex items-center justify-center shrink-0 group-hover:bg-[#4ABFAD] group-hover:text-white transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-sm font-bold text-slate-800 pt-1 leading-snug">
                  {pillar.text}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* High-Redundancy Infrastructure Section */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden mb-24">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#4ABFAD]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4 mb-14">
            <span className="badge-teal bg-white/10 text-[#4ABFAD] border-white/20">
              High Availability Architecture
            </span>
            <h2 className="signy-section-heading text-white">
              Enterprise Technology Infrastructure
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              At Signy, we are committed to delivering exceptional service through robust and reliable technology. Our infrastructure is built with redundancy and performance in mind, ensuring uninterrupted service for all your communication needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/80 border border-slate-700 rounded-3xl p-8 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#4ABFAD]/20 text-[#4ABFAD] flex items-center justify-center">
                <Server className="w-6 h-6" />
              </div>
              <h3 className="signy-card-heading text-white">5 Independent Server Clusters</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Our bulk SMS platform is powered by five independent servers. Should one encounter an issue, traffic is automatically rerouted instantly, guaranteeing zero downtime.
              </p>
            </div>

            <div className="bg-slate-800/80 border border-slate-700 rounded-3xl p-8 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="signy-card-heading text-white">Dedicated OTP & Trans-Promo</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                We maintain dedicated servers for OTP and Trans-promotional messages, preventing congestion and ensuring high delivery rates even during peak festive rushes.
              </p>
            </div>

            <div className="bg-slate-800/80 border border-slate-700 rounded-3xl p-8 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="signy-card-heading text-white">Reseller & SMPP Connections</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Separate servers for resellers and SMPP connections allow you to reliably deliver high-throughput message batches to your audiences without latency bottlenecks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Signy Tech Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="badge-teal">Engineering Excellence</span>
          <h2 className="signy-section-heading">
            What Makes Signy Technology Right for You
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TECH_FEATURES.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 space-y-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#4ABFAD]/10 text-[#4ABFAD] flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="signy-card-heading">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Global CTA */}
      <CTA />
    </div>
  );
}
