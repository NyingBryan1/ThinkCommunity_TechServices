import React, { useState } from 'react';
import { MessageSquare, X, ArrowUpRight, Sparkles } from 'lucide-react';

export const FloatingWhatsApp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const directWhatsAppUrl = "https://wa.me/237670000000?text=Hello%20Think%20Community%20Tech%20Team!%20I%20would%20like%20to%20discuss%20a%20software%20project.";

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Popover Bubble */}
      {isOpen && (
        <div className="mb-3 w-72 p-4 rounded-2xl bg-dark-950/95 border border-emerald-500/30 backdrop-blur-xl shadow-2xl shadow-emerald-500/10 space-y-3 animate-fadeIn">
          <div className="flex items-center justify-between pb-2 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono font-bold text-white">Think Community Desk</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">
            Need a rapid project estimate or want to speak directly with an engineering lead? Connect with us on WhatsApp.
          </p>

          <a
            href={directWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-display font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-emerald-500/20 transition-all"
          >
            <span>Start WhatsApp Chat</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-dark-900 border border-emerald-500/40 text-white shadow-2xl shadow-emerald-500/20 hover:border-emerald-400 hover:scale-105 transition-all"
        aria-label="Chat on WhatsApp"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
        </span>
        <MessageSquare className="w-4 h-4 text-emerald-400" />
        <span className="text-xs font-mono font-semibold hidden sm:inline">
          Chat With Engineers
        </span>
      </button>
    </div>
  );
};
