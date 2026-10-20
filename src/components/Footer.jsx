import React from 'react';
import { useCurrency } from '../context/CurrencyContext';
import { 
  ArrowRight, 
  MapPin, 
  Phone, 
  Mail, 
  Briefcase, 
  GraduationCap, 
  ShieldCheck 
} from 'lucide-react';
import { 
  OFFICIAL_EMAIL, 
  OFFICIAL_PHONE, 
  OFFICIAL_LOCATION 
} from '../services/formSubmit';

export const Footer = ({ onOpenQuote, onOpenInternship }) => {
  const { currency, setCurrency, currencies } = useCurrency();

  return (
    <footer className="w-full border-t border-white/[0.08] bg-[#050811] text-slate-400 text-xs">
      
      {/* Top CTA Band */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="rounded-3xl border border-white/10 bg-dark-900/90 p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
              Have a Project in Mind? Let's Talk.
            </h2>
            <p className="text-sm text-slate-300 max-w-xl">
              Whether you need a business web application, a custom mobile app, or practical tech training for your team, tell us what you want to achieve.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 flex-shrink-0">
            <button
              onClick={onOpenQuote}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-display font-bold text-xs tracking-wide shadow-lg shadow-cyan-500/20 hover:scale-105 transition-all flex items-center gap-2"
            >
              <span>Request a Project Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenInternship}
              className="px-5 py-3.5 rounded-xl border border-white/15 hover:border-cyan-400 text-white font-medium text-xs hover:bg-white/[0.04] transition-all flex items-center gap-2"
            >
              <Briefcase className="w-4 h-4 text-cyan-400" />
              <span>Apply for Internship</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main 5 Columns Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-white/[0.06]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand & Contact */}
          <div className="space-y-4 lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center p-1">
                <img src="/logo/TC_logo.png" alt="Think Community" className="w-full h-full object-contain" />
              </div>
              <span className="font-display font-bold text-base text-white">Think Community</span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Engineering purpose-driven software, web platforms, and mobile solutions, paired with transformative IT training programs across Cameroon and beyond.
            </p>

            <div className="space-y-2 pt-1 text-[11px] font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>{OFFICIAL_LOCATION}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <a href={`tel:${OFFICIAL_PHONE.replace(/\s+/g, '')}`} className="hover:text-cyan-400 transition-colors">
                  {OFFICIAL_PHONE}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <a href={`mailto:${OFFICIAL_EMAIL}`} className="hover:text-cyan-400 transition-colors">
                  {OFFICIAL_EMAIL}
                </a>
              </div>
            </div>
          </div>

          {/* Solutions / Ecosystem */}
          <div className="space-y-3">
            <h5 className="font-display font-bold text-xs text-white uppercase tracking-wider font-mono">
              Solutions
            </h5>
            <div className="flex flex-col space-y-2">
              <a href="#solutions" className="hover:text-cyan-400 transition-colors">Our Ecosystem</a>
              <a href="#services" className="hover:text-cyan-400 transition-colors">Enterprise Services</a>
              <a href="#work" className="hover:text-cyan-400 transition-colors">Education Platform</a>
              <a href="#skills" className="hover:text-cyan-400 transition-colors">Think Academy</a>
              <a href="#internships" className="hover:text-cyan-400 transition-colors">Internship Hub</a>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-3">
            <h5 className="font-display font-bold text-xs text-white uppercase tracking-wider font-mono">
              Company
            </h5>
            <div className="flex flex-col space-y-2">
              <a href="#about" className="hover:text-cyan-400 transition-colors">About Think Community</a>
              <a href="#about" className="hover:text-cyan-400 transition-colors">Mission & Values</a>
              <a href="#partners" className="hover:text-cyan-400 transition-colors">Collaboration Network</a>
              <a href="#work" className="hover:text-cyan-400 transition-colors">Selected Projects</a>
              <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact Desk</a>
            </div>
          </div>

          {/* Academy & Talent */}
          <div className="space-y-3">
            <h5 className="font-display font-bold text-xs text-white uppercase tracking-wider font-mono">
              Training & Skills
            </h5>
            <div className="flex flex-col space-y-2">
              <a href="#skills" className="hover:text-cyan-400 transition-colors">Full-Stack Web Dev</a>
              <a href="#skills" className="hover:text-cyan-400 transition-colors">Mobile Engineering</a>
              <a href="#skills" className="hover:text-cyan-400 transition-colors">UI/UX Product Design</a>
              <a href="#skills" className="hover:text-cyan-400 transition-colors">AI & Automation</a>
              <a href="#internships" className="hover:text-cyan-400 transition-colors">Developer Internships</a>
            </div>
          </div>

          {/* Legal & Standards */}
          <div className="space-y-3">
            <h5 className="font-display font-bold text-xs text-white uppercase tracking-wider font-mono">
              Standards
            </h5>
            <div className="flex flex-col space-y-2">
              <span className="text-slate-500">100% Client Code Ownership</span>
              <span className="text-slate-500">Mutual Non-Disclosure (NDA)</span>
              <span className="text-slate-500">Milestone Invoice Billing</span>
              <span className="text-slate-500">Confidentiality & Privacy</span>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="mt-12 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono">
          <div>
            © {new Date().getFullYear()} Think Community Technology Services. Learn • Build • Grow.
          </div>

          <div className="flex items-center gap-3">
            <span className="text-slate-500">Currency:</span>
            {Object.values(currencies).map((c) => (
              <button
                key={c.code}
                onClick={() => setCurrency(c.code)}
                className={`transition-colors ${currency === c.code ? 'text-cyan-400 font-bold' : 'text-slate-500 hover:text-slate-300'}`}
              >
                {c.code}
              </button>
            ))}
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">Cameroon • Global</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
