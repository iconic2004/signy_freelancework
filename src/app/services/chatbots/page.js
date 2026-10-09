import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight, CheckCircle2, Bot, MessageSquare, Zap, Cpu } from "lucide-react";
import CTA from "@/components/sections/CTA";

export const metadata = {
  title: "AI Chatbot Solutions | 24/7 Automated Customer Support | Signy",
  description: "Revolutionize your business with AI chatbots. Instant responses, Natural Language Processing (NLP), CRM integrations, and multilingual support.",
};

const CHATBOT_STEPS = [
  { step: "Step 1", title: "Understand Customer Input", desc: "Using Natural Language Processing (NLP), the chatbot interprets the customer’s message to grasp intent and context." },
  { step: "Step 2", title: "Process & Generate Response", desc: "Based on predefined rules or machine learning models, the chatbot processes the query and formulates the most relevant reply." },
  { step: "Step 3", title: "Deliver Intelligent Response", desc: "The chatbot responds in clear, natural language—through text, voice, images, or videos—tailored to the user's needs." },
  { step: "Step 4", title: "Continue the Conversation", desc: "The chatbot maintains the dialogue, asking follow-up questions or offering further assistance to ensure a seamless experience." }
];

export default function ChatbotsPage() {
  return (
    <div className="py-12 md:py-20">
      {/* Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="badge-teal">
              <Sparkles className="w-3.5 h-3.5 text-[#4ABFAD]" />
              <span>Intelligent Conversational AI</span>
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Revolutionize Your Business with the Power of <span className="text-[#F59E0B]">AI Chatbots</span>
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed">
              In today’s fast-moving world, customers expect instant answers. With AI-powered chatbots, businesses can resolve queries around the clock—from order tracking to returns—boosting response times and ensuring consistent customer satisfaction. Let Signy help you implement the right chatbot solution for your business.
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
                src="/images/Chatbots.svg"
                alt="AI Chatbots"
                fill
                priority
                className="object-contain p-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How Do Our Chatbots Work */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-slate-200/80 mb-20">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="badge-teal">NLP Architecture</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            How Do Our Chatbots Work?
          </h2>
          <p className="text-slate-600 text-base">
            Our chatbots use advanced technology to understand, process, and respond to your customers naturally and effectively.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CHATBOT_STEPS.map((item) => (
            <div
              key={item.step}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:border-[#F59E0B] transition-colors space-y-3"
            >
              <span className="text-xs font-bold text-[#F59E0B] bg-[#F59E0B]/10 px-2.5 py-1 rounded-full">
                {item.step}
              </span>
              <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Business Needs Chatbots */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-md h-80 bg-white rounded-3xl border border-slate-200 p-6 shadow-xl flex items-center justify-center">
              <Image
                src="/images/why-do-need-chatbots.svg"
                alt="Why Need Chatbots"
                fill
                className="object-contain p-4"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Why Does Your Business Need a Chatbot?
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Chatbots provide 24/7 support, automate repetitive inquiries, and free your team to focus on higher-value tasks—enhancing efficiency, reducing costs, and improving scalability.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-100">
              <h3 className="text-xl font-bold text-slate-900">What Are Chatbot Services?</h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Chatbot services are AI-driven conversational tools designed for instant, automated customer interaction. They deliver personalized, prompt responses and create memorable customer experiences by integrating your business’s unique solutions.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-100">
              <h3 className="text-xl font-bold text-slate-900">Key Benefits of Chatbot Services:</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F59E0B] shrink-0" />
                  <span><strong>Instant Responses:</strong> Boost satisfaction with immediate answers.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F59E0B] shrink-0" />
                  <span><strong>Efficient Scalability:</strong> Handle thousands of concurrent conversations simultaneously.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F59E0B] shrink-0" />
                  <span><strong>Multilingual Support:</strong> Communicate effectively with diverse audiences.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F59E0B] shrink-0" />
                  <span><strong>Personalized Interaction:</strong> Human-like contextual flows that build trust.</span>
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
