import React, { useState } from 'react';
import { faqData } from '../data/faqData';
import { HelpCircle, ChevronDown, ChevronUp, Sparkles, MessageSquare } from 'lucide-react';

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 relative scroll-mt-20 overflow-hidden bg-dark-900/30 border-b border-white/[0.06]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-950 border border-white/10 text-xs font-mono text-brand-mint">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Client Clarifications & Commercial Terms</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight text-white">
            Frequently Asked <span className="text-gradient-mint">Questions</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300">
            Clear, transparent answers about our engineering process, intellectual property rights, payment terms, and delivery guarantees.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen 
                    ? 'bg-dark-900/90 border-brand-mint/40 shadow-xl shadow-brand-mint/5' 
                    : 'bg-dark-950/60 border-white/5 hover:border-white/15'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4"
                >
                  <span className="font-display font-semibold text-sm sm:text-base text-white">
                    {item.question}
                  </span>
                  <div className={`p-1.5 rounded-lg border transition-colors flex-shrink-0 ${
                    isOpen ? 'bg-brand-mint text-black border-brand-mint' : 'bg-dark-950 text-slate-400 border-white/5'
                  }`}>
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 animate-fadeIn">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Need more answers */}
        <div className="mt-12 text-center text-xs font-mono text-slate-400 flex items-center justify-center gap-2">
          <span>Have a question not listed here?</span>
          <a href="#contact" className="text-brand-mint hover:underline font-semibold">
            Ask our engineering desk →
          </a>
        </div>

      </div>
    </section>
  );
};
