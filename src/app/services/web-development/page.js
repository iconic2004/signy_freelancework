import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight, CheckCircle2, Code2, Globe, Smartphone, Gauge, ShoppingCart } from "lucide-react";
import CTA from "@/components/sections/CTA";

export const metadata = {
  title: "Custom Web Development Services | Next.js & Modern Stacks | Signy",
  description: "Build your digital foundation with expert web development. Fast loading speeds, mobile-responsive layouts, intuitive navigation, and high conversions.",
};

const BENEFITS = [
  { num: "01", title: "User-Friendly Interface", desc: "Deliver a comfortable, accessible digital experience that today’s modern customers expect." },
  { num: "02", title: "Easy Navigation", desc: "Provide a seamless journey so visitors can effortlessly explore every section of your site." },
  { num: "03", title: "Expand Audience Reach", desc: "Optimize your website for search engines (SEO) to attract a wider, more relevant audience." },
  { num: "04", title: "Boost Sales & Revenue", desc: "An engaging, well-structured website attracts customers and encourages repeat business." },
  { num: "05", title: "Mobile-Friendly Design", desc: "Ensure your website looks and works perfectly across all devices, especially smartphones." },
  { num: "06", title: "Faster Loading Time", desc: "Improve site speed to meet user expectations and maximize visitor retention." }
];

export default function WebDevelopmentPage() {
  return (
    <div className="py-12 md:py-20">
      {/* Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="badge-teal">
              <Sparkles className="w-3.5 h-3.5 text-[#4ABFAD]" />
              <span>Modern Scalable Architecture</span>
            </span>

            <h1 className="signy-page-title">
              Build Your Digital Foundation with Expert <span className="text-[#4ABFAD]">Web Development</span>
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed">
              Your website is the cornerstone of your online identity—a dynamic space where first impressions are formed and customer journeys begin. To ensure a seamless user experience, you need a site that is not only visually engaging but also intuitively functional. Web development combines technical expertise and creative strategy to build a custom, brand-defining website from the ground up.
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
                src="/images/Web-Development.svg"
                alt="Web Development"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 450px"
                className="object-contain p-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What is Web Development Marketing */}
      <section className="bg-slate-50 py-16 border-y border-slate-200/80 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="signy-subsection-heading">
              What Is Web Development Marketing?
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Web Development Marketing is a comprehensive service that involves curating a website from scratch—one that strategically aligns with your brand vision and business objectives. It combines technical skills like coding, customization, and web design with a strategic marketing mindset. The result is a user-friendly, high-converting website that not only represents your brand but actively contributes to your growth.
            </p>
          </div>
        </div>
      </section>

      {/* 6 Key Benefits */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="badge-teal">Return On Investment</span>
          <h2 className="signy-section-heading">
            Why Choose Professional Web Development Services?
          </h2>
          <p className="text-slate-600 text-base">
            A professionally developed website is an investment that pays lasting dividends.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BENEFITS.map((item) => (
            <div
              key={item.num}
              className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:border-[#4ABFAD] transition-all space-y-3 group"
            >
              <span className="text-xs font-bold text-[#4ABFAD] bg-[#4ABFAD]/10 px-3 py-1 rounded-full">
                {item.num}
              </span>
              <h3 className="signy-card-heading group-hover:text-[#4ABFAD] transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <CTA />
    </div>
  );
}
