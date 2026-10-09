import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight, CheckCircle2, MessageSquare, Repeat, Users, HelpCircle } from "lucide-react";
import CTA from "@/components/sections/CTA";

export const metadata = {
  title: "Two-Way Communication | Interactive SMS & Inbound Messaging | Signy",
  description: "Types and benefits of two-way communication. Bidirectional messaging flow, active feedback loops, multichannel support, and real-time customer dialogues.",
};

const WORKFLOW = [
  { step: "1", title: "Active Listening", desc: "Both participants engage attentively—listening to understand, not just to reply. This means avoiding interruptions, demonstrating empathy, and processing the information shared." },
  { step: "2", title: "Feedback Loop", desc: "Feedback confirms that messages are received and understood. It can be verbal or automated text, closing the loop in communication." },
  { step: "3", title: "Clarification", desc: "Misunderstandings are addressed in real time. By asking questions or rephrasing points, both parties ensure alignment and clarity." },
  { step: "4", title: "Engagement", desc: "Active involvement is maintained through responsive body language, timely replies, and genuine interest in the exchange." }
];

export default function TwoWayCommunicationPage() {
  return (
    <div className="py-12 md:py-20">
      {/* Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="badge-teal">
              <Sparkles className="w-3.5 h-3.5 text-[#4ABFAD]" />
              <span>Interactive Dialogues</span>
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Interactive <span className="text-[#4ABFAD]">2-Way Communication</span>
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed">
              Two-way communication is a collaborative exchange where both parties can actively send and receive messages. This dynamic process is built on mutual participation and ensures clarity, responsiveness, and deeper connection.
            </p>

            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#4ABFAD]" />
                <span><strong>Bidirectional Flow:</strong> Information moves back and forth, enabling dialogue rather than monologue.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#4ABFAD]" />
                <span><strong>Feedback Loop:</strong> Recipients can respond, ask questions, or share input immediately.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#4ABFAD]" />
                <span><strong>Continuous Dialogue:</strong> Responsive, thoughtful exchanges that promote trust.</span>
              </li>
            </ul>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                <span>Start Two-Way Messaging</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md h-80 bg-white/70 rounded-3xl border border-slate-200 p-6 shadow-xl backdrop-blur-md flex items-center justify-center">
              <Image
                src="/images/Communication.svg"
                alt="Two-Way Communication"
                fill
                priority
                className="object-contain p-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How Does It Work */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-slate-200/80 mb-20">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="badge-teal">Cycle</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            How Does It Work?
          </h2>
          <p className="text-slate-600 text-base">
            Two-way communication operates through a continuous cycle of sharing, receiving, and responding.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WORKFLOW.map((item) => (
            <div
              key={item.step}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:border-[#4ABFAD] transition-colors space-y-3"
            >
              <span className="text-xs font-bold text-[#4ABFAD] bg-[#4ABFAD]/10 px-2.5 py-1 rounded-full">
                Step {item.step}
              </span>
              <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Origin & Channels */}
      <section className="bg-slate-50 py-20 border-y border-slate-200/80 mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Where Does It Come From?
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                The concept of two-way communication has roots in early human interaction, but it was formally recognized and studied in the mid-20th century as communication theory developed into an academic discipline. While the exact origin of the term is difficult to trace, its principles have been fundamental to effective dialogue throughout history—from Socratic discussions to modern-day collaboration tools.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-xl font-bold text-slate-900">Channels of Two-Way Communication:</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4ABFAD]" />
                  <span>Face-to-face conversations</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4ABFAD]" />
                  <span>Phone and voice calls</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4ABFAD]" />
                  <span>Video conferencing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4ABFAD]" />
                  <span>Email exchanges</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4ABFAD]" />
                  <span>Instant messaging platforms</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4ABFAD]" />
                  <span>Social media interactions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
