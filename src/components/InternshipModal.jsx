import React, { useState } from 'react';
import { 
  Briefcase, 
  X, 
  CheckCircle2, 
  Send, 
  MapPin, 
  Clock, 
  FileText,
  Loader2
} from 'lucide-react';
import { sendSubmissionToEmail } from '../services/formSubmit';

export const InternshipModal = ({ isOpen, onClose, defaultTrack }) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneWhatsApp: '',
    track: defaultTrack || 'Frontend Web Engineering Intern',
    education: '',
    experienceLevel: 'Student / Recent Graduate',
    portfolioUrl: '',
    motivation: '',
    preferredFormat: 'Hybrid (Cameroon)',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await sendSubmissionToEmail(
      {
        'Applicant Full Name': formData.fullName,
        'Email Address': formData.email,
        'Phone / WhatsApp': formData.phoneWhatsApp,
        'Internship Track': formData.track,
        'Experience Status': formData.experienceLevel,
        'University / School / Prior Training': formData.education || 'N/A',
        'Portfolio / GitHub': formData.portfolioUrl || 'N/A',
        'Motivation & Goals': formData.motivation || 'N/A',
        'Preferred Format': formData.preferredFormat,
        'Form Type': 'Engineering Internship Hub Application',
      },
      `[Think Community Internship] ${formData.track} - ${formData.fullName}`
    );
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-fadeIn">
      <div className="bg-dark-950 border border-white/15 rounded-3xl max-w-xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative p-6 sm:p-8">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400 flex items-center justify-center">
              <Briefcase className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-white">
                Apply for Engineering Internship
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                Think Community Talent Accelerator • Cohort 2026
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

        {submitted ? (
          <div className="text-center py-8 space-y-4 animate-fadeIn">
            <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/30 text-purple-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="font-display font-bold text-2xl text-white">
              Application Submitted!
            </h4>
            <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-white">{formData.fullName}</strong>. Our engineering leads will review your application for the <strong className="text-purple-400">{formData.track}</strong> track and contact you at <strong className="text-white">{formData.email}</strong> within 3 business days.
            </p>
            <div className="pt-4">
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-purple-500 hover:bg-purple-400 text-white font-bold text-xs"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div className="space-y-1.5">
              <label className="text-xs font-mono text-slate-300">
                Full Name <span className="text-purple-400">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Jean-Luc Nguemo / Sarah Mbi"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl glass-input text-xs"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-300">
                  Email Address <span className="text-purple-400">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@gmail.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl glass-input text-xs"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-300">
                  Phone / WhatsApp <span className="text-purple-400">*</span>
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-300">
                  Internship Track <span className="text-purple-400">*</span>
                </label>
                <select
                  value={formData.track}
                  onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl glass-input text-xs bg-dark-900"
                >
                  <option value="Frontend Web Engineering Intern">Frontend Web Engineering Intern</option>
                  <option value="Backend & Systems Intern">Backend & Systems Intern</option>
                  <option value="Mobile App Development Intern">Mobile App Development Intern</option>
                  <option value="UI/UX & Product Design Intern">UI/UX & Product Design Intern</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-300">
                  Current Status
                </label>
                <select
                  value={formData.experienceLevel}
                  onChange={(e) => setFormData({ ...formData, experienceLevel: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl glass-input text-xs bg-dark-900"
                >
                  <option value="Student / Recent Graduate">University Student / Graduate</option>
                  <option value="Self-Taught Developer">Self-Taught Developer</option>
                  <option value="Career Switcher">Career Switcher</option>
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono text-slate-300">
                School, University, or Prior Training
              </label>
              <input
                type="text"
                placeholder="e.g. University of Buea, Yaounde 1, Dschang, etc."
                value={formData.education}
                onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl glass-input text-xs"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono text-slate-300">
                GitHub, Portfolio, or LinkedIn Link (Optional)
              </label>
              <input
                type="url"
                placeholder="https://github.com/yourusername or portfolio link"
                value={formData.portfolioUrl}
                onChange={(e) => setFormData({ ...formData, portfolioUrl: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl glass-input text-xs"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono text-slate-300">
                Why do you want to intern with Think Community?
              </label>
              <textarea
                rows={3}
                placeholder="Tell us briefly about what you want to learn and achieve..."
                value={formData.motivation}
                onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl glass-input text-xs"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-6 rounded-xl bg-purple-500 hover:bg-purple-400 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-xs shadow-lg shadow-purple-500/20 transition-all flex items-center justify-center gap-2 mt-4"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Submitting Application to Talent Team...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Submit Internship Application</span>
                </>
              )}
            </button>

          </form>
        )}

      </div>
    </div>
  );
};
