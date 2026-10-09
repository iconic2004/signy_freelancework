import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Target, Compass, Sparkles, CheckCircle2 } from "lucide-react";
import CTA from "@/components/sections/CTA";

export const metadata = {
  title: "About Signy — Pioneer in Bulk SMS & API Solutions",
  description: "Learn more about Signy Solutions India Pvt Ltd, our vision, mission, and over a decade of excellence in bulk messaging and communication solutions.",
};

export default function AboutPage() {
  return (
    <div className="py-12 md:py-20 bg-white min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="badge-teal">
              <Sparkles className="w-3.5 h-3.5 text-[#4ABFAD]" />
              <span>About Signy Solutions</span>
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Celebrating over a decade of excellence in <span className="text-[#4ABFAD]">communication solutions</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Signy Solutions India Pvt Ltd has established itself as a leading provider of Bulk SMS, Voice Calls, and Mobile Value-Added Services (VAS). We are committed to empowering businesses with reliable, scalable communication channels that drive growth and customer engagement.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-sm text-slate-700">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#4ABFAD] shrink-0" />
                <span>Over 400+ Satisfied Clients</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#4ABFAD] shrink-0" />
                <span>330+ Delivered Projects</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#4ABFAD] shrink-0" />
                <span>Decade of Industry Expertise</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#4ABFAD] shrink-0" />
                <span>Comprehensive Messaging Suite</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                <span>Get in touch</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/services" className="btn-secondary">
                <span>Explore Services</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md h-80 sm:h-96 bg-slate-50 rounded-3xl border border-slate-200 p-6 shadow-xl flex items-center justify-center overflow-hidden">
              <Image
                src="/images/HomePageImage3.png"
                alt="About Signy Solutions"
                fill
                priority
                className="object-contain p-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-slate-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision Card */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-10 flex flex-col justify-between hover:border-[#4ABFAD]/60 transition-all duration-300">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#4ABFAD]/15 text-[#4ABFAD] flex items-center justify-center">
                <Compass className="w-6 h-6" />
              </div>

              <h2 className="text-2xl font-extrabold text-slate-900">
                Our Vision
              </h2>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Our vision is to be the most trusted and innovative communication partner for businesses across India and beyond, enabling meaningful connections through cutting-edge messaging and voice technologies.
              </p>
            </div>
          </div>

          {/* Mission Card */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-10 flex flex-col justify-between hover:border-[#4ABFAD]/60 transition-all duration-300">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#4ABFAD]/15 text-[#4ABFAD] flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>

              <h2 className="text-2xl font-extrabold text-slate-900">
                Our Mission
              </h2>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Our mission is to deliver high-quality, reliable, and cost-effective communication solutions that help our clients connect with their audience instantly and effectively.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global CTA */}
      <CTA />
    </div>
  );
}
