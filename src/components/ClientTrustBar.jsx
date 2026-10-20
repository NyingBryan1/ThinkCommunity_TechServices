import React from 'react';
import { 
  ShieldCheck, 
  Globe2, 
  Cpu, 
  Lock, 
  Sparkles, 
  Clock, 
  CreditCard 
} from 'lucide-react';

export const ClientTrustBar = () => {
  const credentials = [
    {
      icon: <ShieldCheck className="w-4 h-4 text-brand-mint" />,
      title: "Enterprise Grade",
      desc: "Clean, documented, scalable codebases"
    },
    {
      icon: <Lock className="w-4 h-4 text-brand-sky" />,
      title: "Bank-Level Security",
      desc: "Zero-trust RBAC & OWASP compliant"
    },
    {
      icon: <Globe2 className="w-4 h-4 text-purple-400" />,
      title: "Global Execution",
      desc: "Bilingual (EN / FR) cross-border delivery"
    },
    {
      icon: <CreditCard className="w-4 h-4 text-amber-400" />,
      title: "Multi-Rail Payments",
      desc: "Stripe, MTN MoMo & Orange Money"
    },
    {
      icon: <Clock className="w-4 h-4 text-emerald-400" />,
      title: "Agile 2-Week Sprints",
      desc: "Live interactive staging demos"
    }
  ];

  return (
    <section className="border-y border-white/[0.08] bg-dark-950/60 backdrop-blur-md py-6 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center">
          {credentials.map((item, idx) => (
            <div 
              key={idx}
              className="flex items-start gap-3 p-2 rounded-xl hover:bg-white/[0.02] transition-colors"
            >
              <div className="p-2 rounded-lg bg-white/[0.04] border border-white/5 flex-shrink-0 mt-0.5">
                {item.icon}
              </div>
              <div className="space-y-0.5">
                <div className="text-xs font-semibold text-white tracking-tight">
                  {item.title}
                </div>
                <div className="text-[11px] text-slate-400 leading-tight">
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
