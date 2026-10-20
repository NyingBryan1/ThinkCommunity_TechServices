import React, { useState, useEffect } from 'react';
import { 
  GraduationCap, 
  X, 
  CheckCircle2, 
  Send, 
  Clock,
  Loader2,
  CreditCard,
  Video,
  Award,
  Layers,
  Sparkles
} from 'lucide-react';
import { sendSubmissionToEmail } from '../services/formSubmit';

export const SkillsModal = ({ isOpen, onClose, defaultProgram }) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneWhatsApp: '',
    program: 'Web-Developer Full-Stack Program (4 Months • 20,000 FCFA/mo)',
    format: 'Online (3–4 Live Classes / Wk + Weekly Projects)',
    currentSkillLevel: 'Beginner (No coding experience)',
    goals: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (defaultProgram) {
      if (defaultProgram.includes('Web')) {
        setFormData(p => ({ ...p, program: 'Web-Developer Full-Stack Program (4 Months • 20,000 FCFA/mo)' }));
      } else if (defaultProgram.includes('AI') || defaultProgram.includes('Machine')) {
        setFormData(p => ({ ...p, program: 'AI & Machine Learning Program (4 Months • 20,000 FCFA/mo)' }));
      } else if (defaultProgram.includes('Mobile')) {
        setFormData(p => ({ ...p, program: 'Mobile Application Engineering (4 Months • 20,000 FCFA/mo)' }));
      } else if (defaultProgram.includes('UI') || defaultProgram.includes('Design')) {
        setFormData(p => ({ ...p, program: 'UI/UX & Product Design Program (4 Months • 20,000 FCFA/mo)' }));
      } else if (defaultProgram.includes('Corporate')) {
        setFormData(p => ({ ...p, program: 'Corporate & Team Upskilling (Custom Scope)' }));
      }
    }
  }, [defaultProgram]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await sendSubmissionToEmail(
      {
        'Student Full Name': formData.fullName,
        'Email Address': formData.email,
        'Phone / WhatsApp': formData.phoneWhatsApp,
        'Selected Program': formData.program,
        'Program Duration': '4 Months',
        'Tuition Fee': '20,000 FCFA / Month (80,000 FCFA Total)',
        'Payment Terms': 'Paid on or before the 5th of each month',
        'Learning Method': '3–4 Live Online Classes/Week + Weekly Mini-Projects',
        'Key Outcomes': 'Internship Placement Pathway + Certificate + Job Preparation',
        'Attendance Format': formData.format,
        'Current Background': formData.currentSkillLevel,
        'Student Objectives': formData.goals || 'N/A',
        'Form Type': 'Think Community Academy 4-Month Enrollment',
      },
      `[Think Community Academy] Enrollment: ${formData.program} - ${formData.fullName}`
    );
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-fadeIn">
      <div className="bg-dark-950 border border-white/15 rounded-3xl max-w-xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative p-6 sm:p-8">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-white">
                Enroll in Think Community Academy
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                From Complete Beginner to Job-Ready Developer
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/[0.05] text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 4-Month Structure & Fee Callout Banner */}
        <div className="mb-5 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-400/30 space-y-2">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
            <div className="flex items-center gap-1.5 text-white font-bold">
              <Clock className="w-4 h-4 text-emerald-400" />
              <span>4 Months Duration</span>
            </div>
            <div className="flex items-center gap-1.5 text-emerald-300 font-bold">
              <CreditCard className="w-4 h-4 text-emerald-400" />
              <span>20,000 FCFA / Month (80,000 FCFA Total)</span>
            </div>
          </div>
          <div className="text-[11px] text-slate-300 font-mono flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>• 3–4 Live Online Classes Each Week</span>
            <span>• Real Mini-Project Delivered Every Week</span>
            <span>• Pay monthly on or before the 5th</span>
            <span>• Internship Placement Pathway</span>
          </div>
        </div>

        {submitted ? (
          <div className="text-center py-8 space-y-4 animate-fadeIn">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="font-display font-bold text-2xl text-white">
              Enrollment Request Received!
            </h4>
            <div className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed space-y-2">
              <p>
                Thank you, <strong className="text-white">{formData.fullName}</strong>. We have logged your application for the <strong className="text-emerald-400">{formData.program}</strong> track.
              </p>
              <div className="p-4 rounded-xl bg-dark-900 border border-white/5 text-xs text-slate-300 font-mono text-left space-y-1.5">
                <div className="text-white font-bold mb-1">What to expect next:</div>
                <div>• Cohort start dates & syllabus sent via WhatsApp / Email to <strong className="text-white">{formData.phoneWhatsApp}</strong></div>
                <div>• Program Schedule: 3–4 live online classes/week + weekly mini-projects</div>
                <div>• Tuition: 20,000 FCFA/month (Pay on or before the 5th)</div>
                <div>• Direct qualification for internship recommendations upon completion</div>
              </div>
            </div>
            <div className="pt-4">
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div className="space-y-1.5">
              <label className="text-xs font-mono text-slate-300">
                Full Name <span className="text-emerald-400">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Samuel Fon / Vanessa Taku"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl glass-input text-xs"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-300">
                  Email Address <span className="text-emerald-400">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl glass-input text-xs"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-300">
                  Phone / WhatsApp <span className="text-emerald-400">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+237 651062315"
                  value={formData.phoneWhatsApp}
                  onChange={(e) => setFormData({ ...formData, phoneWhatsApp: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl glass-input text-xs"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono text-slate-300">
                Program of Interest (4 Months • 20,000 FCFA/mo) <span className="text-emerald-400">*</span>
              </label>
              <select
                value={formData.program}
                onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl glass-input text-xs bg-dark-900"
              >
                <option value="Web-Developer Full-Stack Program (4 Months • 20,000 FCFA/mo)">
                  Web-Developer Full-Stack Program (4 Months • 20,000 FCFA/mo)
                </option>
                <option value="AI & Machine Learning Program (4 Months • 20,000 FCFA/mo)">
                  AI & Machine Learning Program (4 Months • 20,000 FCFA/mo)
                </option>
                <option value="Mobile Application Engineering (4 Months • 20,000 FCFA/mo)">
                  Mobile Application Engineering (4 Months • 20,000 FCFA/mo)
                </option>
                <option value="UI/UX & Product Design Program (4 Months • 20,000 FCFA/mo)">
                  UI/UX & Product Design Program (4 Months • 20,000 FCFA/mo)
                </option>
                <option value="Corporate & Team Upskilling (Custom Scope)">
                  Corporate & School Team Upskilling (Custom Scope)
                </option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-300">
                  Learning Method & Attendance
                </label>
                <select
                  value={formData.format}
                  onChange={(e) => setFormData({ ...formData, format: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl glass-input text-xs bg-dark-900"
                >
                  <option value="Online (3–4 Live Classes / Wk + Weekly Projects)">
                    Online (3–4 Live Classes / Wk + Weekly Projects)
                  </option>
                  <option value="Hybrid (In-Person Hub + Online Mentorship)">
                    Hybrid (In-Person Cameroon Hub + Online)
                  </option>
                  <option value="Flexible Evening / Weekend Track">
                    Flexible Evening / Weekend Cohort
                  </option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-300">
                  Current Background
                </label>
                <select
                  value={formData.currentSkillLevel}
                  onChange={(e) => setFormData({ ...formData, currentSkillLevel: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl glass-input text-xs bg-dark-900"
                >
                  <option value="Complete Beginner (No prior coding experience)">
                    Complete Beginner (Zero prior coding experience)
                  </option>
                  <option value="Basic Knowledge (Learned some HTML/basics)">
                    Basic Knowledge (Know some basic concepts)
                  </option>
                  <option value="Self-Taught / University Student">
                    Self-Taught / University Student
                  </option>
                  <option value="Working Professional Switching Careers">
                    Working Professional Switching Careers
                  </option>
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono text-slate-300">
                What is your main goal for taking this program?
              </label>
              <textarea
                rows={3}
                placeholder="e.g. Learn to build full-stack web applications from scratch, land an internship at a tech company, prepare for developer employment..."
                value={formData.goals}
                onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl glass-input text-xs"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 disabled:opacity-60 disabled:cursor-not-allowed text-black font-display font-bold text-xs shadow-lg shadow-emerald-400/20 transition-all flex items-center justify-center gap-2 mt-4"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Submitting Enrollment Application...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Submit Enrollment Application</span>
                </>
              )}
            </button>

            <div className="text-[10px] text-slate-400 font-mono text-center pt-2">
              * Monthly tuition of 20,000 FCFA is paid on or before the 5th of each month. No large upfront fee required.
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
