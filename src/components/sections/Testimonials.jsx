"use client";

import { useState } from "react";
import { Star, Quote, Sparkles, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const active = TESTIMONIALS[currentIndex];

  return (
    <section className="py-24 md:py-32 bg-slate-50 relative overflow-hidden border-t border-slate-200/80">
      {/* Ambient background decoration */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-[#4ABFAD]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="badge-teal">
            <Sparkles className="w-3.5 h-3.5 text-[#4ABFAD]" />
            <span>Client Endorsements &amp; Reviews</span>
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Trusted by Enterprise Leaders Nationwide
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Hear directly from products leads, CTOs, and marketing directors who rely on Signy every day.
          </p>
        </div>

        {/* Featured Interactive Testimonial Carousel */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl relative overflow-hidden transition-all duration-500">
            <div className="absolute top-6 right-8 text-slate-100 pointer-events-none">
              <Quote className="w-24 h-24 text-slate-100/80" />
            </div>

            <div className="relative z-10 space-y-6">
              {/* Star Rating */}
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < active.rating
                        ? "text-amber-400 fill-amber-400"
                        : "text-slate-200"
                    }`}
                  />
                ))}
                <span className="ml-2 text-xs font-bold text-slate-500">
                  {active.rating}.0 / 5.0 Rating
                </span>
              </div>

              {/* Review Quote */}
              <blockquote className="text-lg sm:text-2xl font-medium text-slate-800 leading-relaxed italic">
                &ldquo;{active.review}&rdquo;
              </blockquote>

              {/* Author Info & Control Buttons */}
              <div className="pt-8 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#4ABFAD]/15 text-[#4ABFAD] font-bold text-lg flex items-center justify-center border border-[#4ABFAD]/30 shadow-sm">
                    {active.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">
                      {active.author}
                    </h4>
                    <p className="text-xs text-slate-500 font-medium">
                      {active.company}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Verified Customer
                  </span>

                  <div className="flex items-center gap-1">
                    <button
                      onClick={prevTestimonial}
                      className="p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={nextTestimonial}
                      className="p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Cards Overview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((item, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`text-left p-6 rounded-2xl border transition-all duration-300 ${
                currentIndex === index
                  ? "bg-white border-[#4ABFAD] shadow-lg scale-105"
                  : "bg-white/60 hover:bg-white border-slate-200 text-slate-600"
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-slate-900 line-clamp-1">{item.company}</span>
                <span className="text-[10px] text-amber-500 font-bold">★ {item.rating}.0</span>
              </div>
              <p className="text-xs text-slate-500 line-clamp-2 italic mb-3">
                "{item.review}"
              </p>
              <div className="text-[11px] font-semibold text-slate-700">
                {item.author}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
