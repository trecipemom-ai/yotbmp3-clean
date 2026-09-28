"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Converter from "../components/Converter";
import { homeContent } from "../lib/homeContent";
import {
  Sparkles,
  Zap,
  ShieldCheck,
  Smartphone,
  ChevronDown,
  Music2,
  Headphones,
} from "lucide-react";

export default function Home() {
  const content = homeContent.en;
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-red-500 selection:text-white">
      <Header />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-red-600/10 blur-[120px] rounded-full pointer-events-none" />

          <div className="max-w-4xl mx-auto relative space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-xs sm:text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              <span>{content.hero.badge}</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
              {content.hero.title}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-red-400">
                {content.hero.highlight}
              </span>
            </h1>

            <p className="max-w-2xl mx-auto text-slate-400 text-sm sm:text-base leading-relaxed">
              {content.hero.subtitle}
            </p>

            {/* CONVERTER COMPONENT */}
            <div className="pt-6">
              <Converter />
            </div>

            <p className="text-xs text-slate-500 pt-4">
              {content.hero.supported}
            </p>
          </div>
        </section>

        {/* HOW IT WORKS SECTION */}
        <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="text-center space-y-3 mb-16">
            <h2 className="text-3xl font-bold text-white tracking-tight">
              {content.howItWorks.title}
            </h2>
            <p className="text-slate-400 text-sm">
              {content.howItWorks.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.howItWorks.steps.map((s, idx) => (
              <div
                key={idx}
                className="relative bg-slate-900/60 border border-slate-800 rounded-3xl p-8 hover:border-slate-700 transition space-y-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-red-600/10 border border-red-500/20 text-red-400 font-extrabold flex items-center justify-center text-lg">
                  {s.step}
                </div>
                <h3 className="text-xl font-bold text-white">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/40 border-y border-slate-900">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-3 mb-16">
              <h2 className="text-3xl font-bold text-white tracking-tight">
                Why Choose YOTBMP3?
              </h2>
              <p className="text-slate-400 text-sm">
                Built for performance, high fidelity audio, and complete simplicity
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {content.features.map((f, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-red-500/40 transition space-y-3"
                >
                  <div className="inline-block px-2.5 py-1 rounded-lg bg-red-600/10 text-red-400 text-xs font-semibold">
                    {f.badge}
                  </div>
                  <h3 className="text-base font-bold text-white">{f.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {f.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* QUALITY SECTION */}
        <section id="quality" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="text-center space-y-3 mb-16">
            <h2 className="text-3xl font-bold text-white tracking-tight">
              {content.quality.title}
            </h2>
            <p className="text-slate-400 text-sm">
              {content.quality.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.quality.items.map((q, idx) => (
              <div
                key={idx}
                className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 hover:border-slate-700 transition flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-red-600/10 text-red-400">
                    {q.badge}
                  </span>
                  <div className="text-3xl font-extrabold text-white">
                    {q.title}
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {q.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ SECTION */}
        <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
          <div className="text-center space-y-3 mb-12">
            <h2 className="text-3xl font-bold text-white tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-400 text-sm">
              Everything you need to know about using YOTBMP3
            </p>
          </div>

          <div className="space-y-4">
            {content.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-slate-800 rounded-2xl bg-slate-900/60 overflow-hidden transition"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full py-4 px-6 text-left font-semibold text-white flex items-center justify-between gap-4 hover:text-red-400 transition"
                >
                  <span className="text-sm sm:text-base">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 transition-transform duration-200 ${
                      openFaq === idx ? "rotate-180 text-red-500" : "text-slate-500"
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-4 text-xs sm:text-sm text-slate-400 leading-relaxed border-t border-slate-800/60 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}