import Image from "next/image";
import Link from "next/link";
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Eye, 
  DollarSign, 
  Zap, 
  Target, 
  ShieldCheck, 
  MessageSquare 
} from "lucide-react";
import CTA from "@/components/sections/CTA";

export const metadata = {
  title: "Bulk SMS Service | High Deliverability SMS Platform | Signy",
  description: "Expand your reach with Signy Bulk SMS Service. High open rates, instant delivery, DLT compliance, promotional and OTP messaging.",
};

const STEPS = [
  { step: "Step 1", title: "Capture Attention", desc: "Concise, clear SMS messages cut through the noise and are effortlessly readable." },
  { step: "Step 2", title: "Build Trust", desc: "SMS acts as a reliable touchpoint in the customer journey, strengthening credibility and enhancing the overall experience." },
  { step: "Step 3", title: "Drive Campaigns", desc: "Execute targeted campaigns that deliver messages effectively and keep customers engaged." },
  { step: "Step 4", title: "Enhance Communication", desc: "From Q&A sessions to important updates, Bulk SMS ensures your message is delivered promptly and professionally." }
];

const ONBOARDING_STEPS = [
  { num: "1", title: "Sign Up", desc: "Create your Signy account in minutes." },
  { num: "2", title: "Add Funds", desc: "Deposit into your account and select 'Send SMS'." },
  { num: "3", title: "Build Your List", desc: "Upload or create a contact list with accurate details." },
  { num: "4", title: "Craft Your Message", desc: "Write engaging SMS copy within 160 characters." },
  { num: "5", title: "Launch & Track", desc: "Send your campaign and monitor performance with real-time analytics." }
];

const ELEVATION_CARDS = [
  {
    title: "High open rates",
    desc: "Text messages achieve unmatched engagement, with studies showing that over 98% are opened and read within minutes. When you send a message through Signy Bulk SMS, you can be confident your communication will be seen—quickly and reliably.",
    icon: Eye
  },
  {
    title: "Cost-effective",
    desc: "Communicate with large audiences affordably. Compared to traditional advertising channels like print or radio, our Bulk SMS solutions offer targeted, high-impact outreach at a fraction of the cost—without compromising on results.",
    icon: DollarSign
  },
  {
    title: "Quick and easy",
    desc: "Our platform is designed for speed and simplicity. Within a few clicks, you can deliver time-sensitive alerts, flash promotions, or important updates to thousands of recipients—instantly.",
    icon: Zap
  },
  {
    title: "Highly targeted",
    desc: "Reach the right audience, every time. Segment your contacts by demographics, location, behavior, or preferences to send hyper-relevant messages that drive higher engagement, foster loyalty, and increase conversions.",
    icon: Target
  }
];

export default function BulkSmsPage() {
  return (
    <div className="py-12 md:py-20">
      {/* Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="badge-teal">
              <Sparkles className="w-3.5 h-3.5 text-[#4ABFAD]" />
              <span>High Deliverability & DLT Compliant</span>
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Expand Your Reach with Signy <span className="text-[#4ABFAD]">Bulk SMS</span> Service
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed">
              Harness the unmatched power of Bulk SMS to connect brands directly with their audience. From global platforms like Facebook to innovative brands like MamaEarth, leading companies trust SMS for authentic customer engagement. Signy offers seamless, high-impact SMS solutions to transform your mobile marketing.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                <span>Contact us now!</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md h-80 bg-white/70 rounded-3xl border border-slate-200 p-6 shadow-xl backdrop-blur-md flex items-center justify-center">
              <Image
                src="/images/banner_image_deatls.svg"
                alt="Bulk SMS Service"
                fill
                priority
                className="object-contain p-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works (4 Steps) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-slate-200/80 mb-20">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="badge-teal">Workflow</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">How It Works?</h2>
          <p className="text-slate-600 text-base">
            Bulk SMS is a dynamic tool that allows businesses to instantly reach thousands of customers with precision and impact.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step) => (
            <div
              key={step.step}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:border-[#4ABFAD] transition-colors space-y-3"
            >
              <span className="text-xs font-bold text-[#4ABFAD] bg-[#4ABFAD]/10 px-2.5 py-1 rounded-full">
                {step.step}
              </span>
              <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What is Bulk SMS & Why Choose */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-md h-80 bg-white rounded-3xl border border-slate-200 p-6 shadow-xl flex items-center justify-center">
              <Image
                src="/images/bluk-sms-service.svg"
                alt="What is Bulk SMS"
                fill
                className="object-contain p-4"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">What Is Bulk SMS?</h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Bulk SMS is a powerful, direct channel for businesses to engage customers at scale. It simplifies outreach while maximizing open rates and conversions. With Signy, you can connect with diverse audiences seamlessly and elevate your communication strategy.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-100">
              <h3 className="text-xl font-bold text-slate-900">Why Choose Bulk SMS?</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4ABFAD] shrink-0 mt-0.5" />
                  <span><strong>Instant &amp; Direct:</strong> Deliver clear, impactful messages straight to your customers’ phones.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4ABFAD] shrink-0 mt-0.5" />
                  <span><strong>Trusted &amp; Reliable:</strong> SMS builds credibility and fosters lasting customer relationships.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4ABFAD] shrink-0 mt-0.5" />
                  <span><strong>Campaign-Ready:</strong> Perfect for promotions, alerts, surveys, and awareness drives.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Scale Business & 5 Easy Steps */}
      <section className="bg-slate-50 py-20 border-y border-slate-200/80 mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Scale Your Business with Signy Bulk SMS
              </h2>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="p-3.5 bg-white rounded-xl border border-slate-200">
                  <strong>Promotional Messaging:</strong> Share exclusive deals, launches, and limited-time offers.
                </li>
                <li className="p-3.5 bg-white rounded-xl border border-slate-200">
                  <strong>Transactional Updates:</strong> Send order confirmations, shipping alerts, and appointment reminders.
                </li>
                <li className="p-3.5 bg-white rounded-xl border border-slate-200">
                  <strong>OTP &amp; Security Messages:</strong> Deliver secure one-time passwords for logins and transactions.
                </li>
                <li className="p-3.5 bg-white rounded-xl border border-slate-200">
                  <strong>Relationship Building:</strong> Enhance customer loyalty through timely, personalized communication.
                </li>
              </ul>
            </div>

            <div className="lg:col-span-6 bg-white p-8 rounded-3xl border border-slate-200 shadow-xl space-y-5">
              <h3 className="text-xl font-bold text-slate-900">Get started in 5 easy steps</h3>
              <div className="space-y-3">
                {ONBOARDING_STEPS.map((step) => (
                  <div key={step.num} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#4ABFAD] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {step.num}
                    </span>
                    <div className="text-sm">
                      <strong className="text-slate-900">{step.title}:</strong>{" "}
                      <span className="text-slate-600">{step.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Elevation Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="badge-teal">Enterprise Advantages</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            How Can Signy Bulk SMS Elevate Your Business?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ELEVATION_CARDS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all space-y-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#4ABFAD]/10 text-[#4ABFAD] flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      <CTA />
    </div>
  );
}
