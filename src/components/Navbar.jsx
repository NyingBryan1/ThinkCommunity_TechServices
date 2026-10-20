import React, { useState, useEffect } from 'react';
import { useCurrency } from '../context/CurrencyContext';
import { 
  Menu, 
  X, 
  ChevronRight, 
  Globe2, 
  ArrowUpRight, 
  Sparkles,
  GraduationCap,
  Briefcase
} from 'lucide-react';

export const Navbar = ({ onOpenQuote, onOpenInternship, onOpenSkills }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { currency, setCurrency, currencies } = useCurrency();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Services', href: '#services' },
    { name: 'Skills Academy', href: '#skills' },
    { name: 'Internships', href: '#internships' },
    { name: 'Our Work', href: '#work' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#070b14]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl py-3.5' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-400/10 border border-cyan-400/30 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                <img 
                  src="/logo/TC_logo.png" 
                  alt="Think Community" 
                  className="w-7 h-7 object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <span className="hidden items-center justify-center font-display font-extrabold text-cyan-400 text-sm">
                  TC
                </span>
              </div>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-lg tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                  Think Community
                </span>
                <span className="text-[10px] font-mono tracking-wider uppercase px-2 py-0.5 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 font-semibold">
                  Tech
                </span>
              </div>
              <span className="text-[11px] text-slate-400 tracking-wide font-sans">
                Software & Digital Solutions
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-xs font-semibold text-slate-300 hover:text-white rounded-lg hover:bg-white/[0.04] transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center gap-3">
            
            {/* Currency Selector */}
            <div className="relative flex items-center bg-dark-900 border border-white/10 rounded-lg p-1 text-xs font-mono">
              <Globe2 className="w-3.5 h-3.5 text-slate-400 ml-1.5 mr-1" />
              {Object.values(currencies).map((curr) => (
                <button
                  key={curr.code}
                  onClick={() => setCurrency(curr.code)}
                  className={`px-2 py-0.5 rounded transition-all text-[11px] font-semibold ${
                    currency === curr.code
                      ? 'bg-cyan-400 text-black shadow-sm font-bold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                  title={`Switch currency to ${curr.label}`}
                >
                  {curr.code}
                </button>
              ))}
            </div>

            {/* Internship CTA Button */}
            <button
              onClick={onOpenInternship}
              className="px-3.5 py-2 text-xs font-semibold text-cyan-300 hover:text-white border border-cyan-400/30 hover:border-cyan-400 rounded-xl hover:bg-cyan-400/10 transition-all flex items-center gap-1.5"
            >
              <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
              <span>Internship</span>
            </button>

            {/* Request a Quote Button */}
            <button
              onClick={onOpenQuote}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black text-xs font-bold tracking-wide shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all hover:scale-[1.02] flex items-center gap-1.5"
            >
              <span>Request a Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-dark-900 border border-white/10 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-dark-950/98 backdrop-blur-2xl border-b border-white/10 px-4 pt-4 pb-6 mt-3 space-y-4 shadow-2xl animate-fadeIn">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Currency</span>
            <div className="flex items-center gap-1 bg-dark-900 p-1 rounded-lg border border-white/10">
              {Object.values(currencies).map((curr) => (
                <button
                  key={curr.code}
                  onClick={() => setCurrency(curr.code)}
                  className={`px-2.5 py-1 rounded text-xs font-semibold ${
                    currency === curr.code ? 'bg-cyan-400 text-black' : 'text-slate-400'
                  }`}
                >
                  {curr.flag} {curr.code}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/[0.04] rounded-lg transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInternship();
              }}
              className="w-full py-2.5 px-4 rounded-xl border border-cyan-400/40 text-cyan-300 text-xs font-semibold flex items-center justify-center gap-2 hover:bg-cyan-400/10"
            >
              <Briefcase className="w-4 h-4" />
              <span>Explore Internship Program</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSkills();
              }}
              className="w-full py-2.5 px-4 rounded-xl border border-white/15 text-slate-200 text-xs font-semibold flex items-center justify-center gap-2 hover:bg-white/[0.04]"
            >
              <GraduationCap className="w-4 h-4 text-cyan-400" />
              <span>Skills Training Program</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black text-xs font-bold shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2"
            >
              <span>Request a Quote</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
