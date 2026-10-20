import React from 'react';
import { skillsPrograms, ACADEMY_PRICING } from '../data/skillsData';
import { 
  GraduationCap, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Code2, 
  Briefcase, 
  Award, 
  Calendar, 
  CreditCard,
  RefreshCw, 
  Zap, 
  Check, 
  FileCheck2,
  Video,
  Layers
} from 'lucide-react';

export const SkillsProgramSection = ({ onOpenSkills }) => {
  return (
    <section id="skills" className="py-24 relative scroll-mt-20 bg-dark-950/80 border-b border-white/[0.08] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-10 w-[600px] h-[500px] bg-emerald-500/5 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[500px] h-[400px] bg-cyan-500/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-900 border border-emerald-400/30 text-xs font-mono text-emerald-300 shadow-md">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Think Community Academy • Cohort 2026</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            From Complete Beginner to <br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              Job-Ready Developer.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Practical 4-month mentored technology programs designed for students, university freshers, and aspiring builders — including complete beginners with no previous coding background.
          </p>
        </div>

        {/* 4 Pillars Highlight Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          
          <div className="p-5 rounded-2xl bg-dark-900/90 border border-white/10 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-mono text-slate-400 uppercase">Duration</span>
              <div className="p-2 rounded-lg bg-emerald-400/10 text-emerald-400">
                <Clock className="w-4 h-4" />
              </div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-display font-extrabold text-white">4 Months</div>
              <div className="text-xs text-slate-400 font-sans mt-0.5">Structured intensive progression</div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-dark-900/90 border border-emerald-400/30 flex flex-col justify-between relative overflow-hidden shadow-lg shadow-emerald-500/5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-mono text-emerald-400 uppercase font-semibold">Tuition / Fee</span>
              <div className="p-2 rounded-lg bg-emerald-400/10 text-emerald-400">
                <CreditCard className="w-4 h-4" />
              </div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-display font-extrabold text-white">
                20,000 FCFA <span className="text-xs font-normal text-slate-400">/ mo</span>
              </div>
              <div className="text-[11px] text-emerald-300 font-mono mt-0.5">
                80,000 FCFA Total • Pay by 5th
              </div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-dark-900/90 border border-white/10 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-mono text-slate-400 uppercase">Method</span>
              <div className="p-2 rounded-lg bg-cyan-400/10 text-cyan-400">
                <Video className="w-4 h-4" />
              </div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-display font-extrabold text-white">3–4 Classes / Wk</div>
              <div className="text-xs text-slate-400 font-sans mt-0.5">Live online sessions with mentors</div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-dark-900/90 border border-white/10 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-mono text-slate-400 uppercase">Practical Output</span>
              <div className="p-2 rounded-lg bg-purple-400/10 text-purple-400">
                <Layers className="w-4 h-4" />
              </div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-display font-extrabold text-white">Weekly Projects</div>
              <div className="text-xs text-slate-400 font-sans mt-0.5">Build & submit real code weekly</div>
            </div>
          </div>

        </div>

        {/* How You Will Learn: The Feedback Cycle */}
        <div className="mb-20 rounded-3xl p-8 sm:p-10 border border-white/10 bg-dark-900/80 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl mb-8 space-y-2">
            <div className="text-xs font-mono uppercase tracking-wider text-emerald-400">
              Not Just Watching Tutorials — You Build Real Software
            </div>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
              How You Will Learn: The Practical Cycle
            </h3>
            <p className="text-sm text-slate-300">
              This is not a program where you simply watch videos and study alone. You receive structured guidance, live code reviews, and direct mentorship from experienced developers every single week.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-3 pt-2">
            {[
              { step: "01", title: "LEARN", desc: "Live mentor lectures & concepts" },
              { step: "02", title: "BUILD", desc: "Write real code & mini-project" },
              { step: "03", title: "SUBMIT", desc: "Weekly project code submission" },
              { step: "04", title: "FEEDBACK", desc: "Mentor code review & critique" },
              { step: "05", title: "IMPROVE", desc: "Refactor, optimize & polish" },
              { step: "06", title: "BUILD AGAIN", desc: "Advance to next architecture" }
            ].map((cycle, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-dark-950 border border-white/5 flex flex-col justify-between group hover:border-emerald-400/40 transition-colors">
                <div className="text-xs font-mono text-emerald-400 font-bold mb-2">{cycle.step}</div>
                <div>
                  <div className="text-sm font-display font-extrabold text-white group-hover:text-emerald-300 transition-colors">
                    {cycle.title}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1 leading-snug">
                    {cycle.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-5 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-300">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>Key Principle: <strong className="text-white">Learn by doing. Build by building. Improve through feedback.</strong></span>
            </div>
            <div className="text-emerald-400 font-semibold">
              Payment: 20,000 FCFA/month (Pay on or before the 5th)
            </div>
          </div>
        </div>

        {/* 4 Core Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {skillsPrograms.map((program) => (
            <div
              key={program.id}
              className="glass-card rounded-3xl p-8 border border-white/10 hover:border-emerald-400/40 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                {/* Card Header & Badges */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/30 text-emerald-300 font-semibold">
                    {program.badge}
                  </span>
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-300 bg-dark-950 px-3 py-1 rounded-full border border-white/10">
                    <Clock className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{program.duration}</span>
                  </div>
                </div>

                <h3 className="font-display font-bold text-2xl text-white group-hover:text-emerald-400 transition-colors mb-1">
                  {program.title}
                </h3>
                <p className="text-xs font-mono text-emerald-300/90 mb-4 font-medium">
                  {program.tagline}
                </p>

                {/* Pricing & Structure Callout */}
                <div className="p-4 rounded-2xl bg-dark-950/80 border border-white/5 mb-5 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-slate-400">Tuition:</span>
                    <span className="text-sm font-display font-bold text-white">
                      {program.monthlyFee} <span className="text-xs text-emerald-400 font-mono">({program.totalFee})</span>
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 pt-1 border-t border-white/5">
                    <span>Schedule:</span>
                    <span className="text-slate-200">{program.format}</span>
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono text-right">
                    * Paid monthly on or before the 5th of each month
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {program.summary}
                </p>

                {/* Curriculum Highlights */}
                <div className="space-y-2 mb-6">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>What You Will Learn & Master:</span>
                  </div>
                  <div className="space-y-1.5">
                    {program.curriculum.map((item, cIdx) => (
                      <div key={cIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Benefits */}
                <div className="p-4 rounded-2xl bg-dark-900/60 border border-emerald-400/20 mb-6 space-y-2">
                  <div className="text-xs font-mono text-emerald-300 font-semibold flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Program Benefits & Career Pathways:</span>
                  </div>
                  <div className="space-y-1.5">
                    {program.benefits.map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-xs text-slate-400 font-sans max-w-sm">
                  <strong className="text-white block font-medium">Outcome:</strong>
                  {program.outcome}
                </div>

                <button
                  onClick={() => onOpenSkills(program.title)}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 text-black text-xs font-bold transition-all flex items-center justify-center gap-2 flex-shrink-0 shadow-lg shadow-emerald-400/20 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Apply for Cohort</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Month 4 Transformation: "Your Final Month" */}
        <div className="mb-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-dark-900 via-dark-950 to-dark-900 border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl mb-8 space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-purple-400">
              Career Transition & Placement
            </span>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
              Month 4: Become Career-Ready & Step Into Tech
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              In your final month, technical theory takes a backseat to professional readiness. You will build and polish real-world assets that make you hireable to software engineering teams.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            <div className="p-5 rounded-2xl bg-dark-950 border border-white/5 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-cyan-400/10 text-cyan-400 flex items-center justify-center">
                <FileCheck2 className="w-4 h-4" />
              </div>
              <h4 className="font-display font-bold text-sm text-white">Portfolio Website & GitHub</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                A custom live website showcasing your deployed applications and clean Git commits.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-dark-950 border border-white/5 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-400/10 text-emerald-400 flex items-center justify-center">
                <Briefcase className="w-4 h-4" />
              </div>
              <h4 className="font-display font-bold text-sm text-white">Technical CV & LinkedIn</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Polished developer CV and LinkedIn profile optimized for recruiter discovery.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-dark-950 border border-white/5 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-purple-400/10 text-purple-400 flex items-center justify-center">
                <Award className="w-4 h-4" />
              </div>
              <h4 className="font-display font-bold text-sm text-white">Official Certification</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Think Community Certificate of Completion based on code submissions and capstone assessment.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-dark-950 border border-emerald-400/30 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-400/10 text-emerald-400 flex items-center justify-center">
                <Zap className="w-4 h-4" />
              </div>
              <h4 className="font-display font-bold text-sm text-white">Internship Placement Pathway</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Direct recommendation to hiring partner companies and tech startups in Cameroon.
              </p>
            </div>

          </div>
        </div>

        {/* Accessible Education Manifesto & Fee Breakdown */}
        <div className="rounded-3xl border border-emerald-400/30 bg-gradient-to-r from-dark-950 via-dark-900 to-dark-950 p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
          <div className="space-y-4 max-w-xl text-center md:text-left">
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
              Access to Technology Education
            </span>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white leading-tight">
              Your financial situation should not have to end your interest in technology.
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Think Community makes practical technology education accessible by offering an affordable, high-impact pathway. You do not need to pay the full 80,000 FCFA upfront.
            </p>

            {/* Transformation Quote */}
            <div className="p-4 rounded-2xl bg-dark-950 border border-white/5 space-y-1">
              <div className="flex items-center gap-3 text-xs font-mono">
                <span className="line-through text-slate-500">"I completed a course."</span>
                <span className="text-emerald-400 font-bold">➔ "I CAN BUILD."</span>
              </div>
              <p className="text-xs text-slate-400 italic">
                "Start with what you know. Build with what you learn. Become what you are capable of becoming."
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-dark-950 border border-emerald-400/40 text-center space-y-4 flex-shrink-0 w-full md:w-80 shadow-xl">
            <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider">Tuition Plan</div>
            <div>
              <div className="text-3xl sm:text-4xl font-display font-extrabold text-white">
                20,000 <span className="text-xs font-mono font-normal text-slate-400">FCFA / Month</span>
              </div>
              <div className="text-xs text-slate-400 font-mono mt-1">
                4 Months × 20,000 = 80,000 FCFA Total
              </div>
            </div>
            
            <div className="text-[11px] text-slate-400 font-mono bg-dark-900 p-2.5 rounded-xl border border-white/5">
              Paid monthly on or before the 5th of each month.
            </div>

            <button
              onClick={() => onOpenSkills()}
              className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 text-black font-display font-bold text-xs tracking-wide shadow-lg shadow-emerald-400/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
            >
              <span>Apply for Next Cohort</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Corporate & Institutional Training Banner */}
        <div className="mt-12 p-8 rounded-3xl bg-dark-900/60 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h4 className="font-display font-bold text-xl text-white">
              Corporate & School Team Upskilling
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              We train company staff, school educators, and enterprise teams in modern digital tools, full-stack software practices, and AI automation.
            </p>
          </div>

          <button
            onClick={() => onOpenSkills('Corporate & Team Upskilling')}
            className="px-6 py-3 rounded-xl border border-white/20 hover:border-emerald-400 text-white text-xs font-semibold transition-all flex items-center gap-2 flex-shrink-0 hover:bg-white/[0.04]"
          >
            <span>Request Team Training</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
