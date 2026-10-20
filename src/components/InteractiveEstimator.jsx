import React, { useState, useEffect } from 'react';
import { 
  Send, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  Clock,
  FileText,
  Loader2
} from 'lucide-react';
import { sendSubmissionToEmail } from '../services/formSubmit';

export const InteractiveEstimator = ({ preSelectedServiceId }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneWhatsApp: '',
    organization: '',
    serviceType: 'Custom Software & Web Platforms',
    targetTimeline: '1 - 2 Months',
    projectDescription: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preSelectedServiceId) {
      const mapping = {
        'software-development': 'Custom Software & Web Platforms',
        'mobile-development': 'Mobile Application Development',
        'ai-automation': 'AI & Business Automation',
        'cloud-infrastructure': 'Cloud & Payment Integrations',
      };
      if (mapping[preSelectedServiceId]) {
        setFormData(prev => ({ ...prev, serviceType: mapping[preSelectedServiceId] }));
      }
    }
  }, [preSelectedServiceId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await sendSubmissionToEmail(
      {
        'Client Full Name': formData.fullName,
        'Company / Organization': formData.organization || 'Individual / Startup',
        'Client Email': formData.email,
        'Phone / WhatsApp': formData.phoneWhatsApp,
        'Requested Service': formData.serviceType,
        'Target Timeline': formData.targetTimeline,
        'Project Description & Scope': formData.projectDescription,
        'Form Type': 'Project Quote & Scope Request',
      },
      `[Think Community Quote] ${formData.serviceType} - ${formData.fullName} (${formData.organization || 'Individual'})`
    );
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section id="quote" className="py-24 relative scroll-mt-20 overflow-hidden bg-dark-900/40 border-b border-white/[0.08]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-950 border border-white/10 text-xs font-mono text-cyan-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Start a Project</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
            Request a <span className="text-cyan-400">Project Quote</span>
          </h2>

          <p className="text-base text-slate-300">
            Tell us about what you want to build. Our team will review your objectives and generate a detailed scope, milestone roadmap, and formal invoice within 24 hours.
          </p>
        </div>

        {submitted ? (
          <div className="glass-panel rounded-3xl p-8 sm:p-12 text-center space-y-6 max-w-xl mx-auto border border-cyan-400/40 animate-fadeIn shadow-2xl">
            <div className="w-16 h-16 rounded-2xl bg-cyan-400/10 text-cyan-400 border border-cyan-400/30 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="font-display font-bold text-2xl text-white">
                Inquiry Received Successfully!
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Thank you, <strong className="text-white">{formData.fullName}</strong>. Our engineering leads are analyzing your requirements for <strong className="text-cyan-400">{formData.serviceType}</strong> and will prepare an itemized project scope and invoice.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-dark-950 border border-white/5 text-xs text-slate-300 space-y-2.5 text-left">
              <div className="text-white font-bold flex items-center gap-2">
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>What Happens Next:</span>
              </div>
              <p>1. We review your requirements and assess system architecture (Within 24 hours)</p>
              <p>2. We draft an official project proposal, timeline, and invoice sent to <strong className="text-white">{formData.email}</strong></p>
              <p>3. We confirm milestone terms, sign a mutual NDA, and commence sprint kickoff</p>
            </div>

            <div className="pt-2 flex justify-center">
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-slate-200 text-xs font-semibold transition-all"
              >
                Submit Another Project Inquiry
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="glass-panel rounded-3xl p-8 sm:p-10 border border-white/10 shadow-2xl space-y-6">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-300">
                  Your Full Name <span className="text-cyan-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Samuel Fon / Paul Ngu"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl glass-input text-xs"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-300">
                  Business or Organization Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Apex Health Clinic / Tech Startup"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl glass-input text-xs"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-300">
                  Email Address <span className="text-cyan-400">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl glass-input text-xs"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-300">
                  Phone or WhatsApp Number <span className="text-cyan-400">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+237 651062315"
                  value={formData.phoneWhatsApp}
                  onChange={(e) => setFormData({ ...formData, phoneWhatsApp: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl glass-input text-xs"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-300">
                  What service do you need? <span className="text-cyan-400">*</span>
                </label>
                <select
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl glass-input text-xs bg-dark-900"
                >
                  <option value="Custom Software & Web Platforms">Custom Software & Web Platforms</option>
                  <option value="Mobile Application Development">Mobile Application Development (iOS/Android)</option>
                  <option value="AI & Business Automation">AI & Business Automation</option>
                  <option value="Cloud & Payment Integrations">Cloud & Mobile Money Payment Integration</option>
                  <option value="Corporate / Team IT Training">Corporate / Team IT Training</option>
                  <option value="Other / Not Sure Yet">Other / Specialized Scope</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-300">
                  Preferred Completion Timeline
                </label>
                <select
                  value={formData.targetTimeline}
                  onChange={(e) => setFormData({ ...formData, targetTimeline: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl glass-input text-xs bg-dark-900"
                >
                  <option value="Flexible / Exploring Feasibility">Flexible / Exploring Feasibility</option>
                  <option value="Under 1 Month (Expedited)">Under 1 Month (Expedited Sprint)</option>
                  <option value="1 - 2 Months (Standard Full MVP)">1 - 2 Months (Standard Full MVP)</option>
                  <option value="3+ Months (Multi-Phase Enterprise)">3+ Months (Multi-Phase Enterprise)</option>
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono text-slate-300">
                Tell us about your project or the problem you want to solve <span className="text-cyan-400">*</span>
              </label>
              <textarea
                rows={4}
                required
                placeholder="Briefly describe what your business does and what digital system you want us to build (e.g. 'We need a clinic appointment booking system with Mobile Money payments and automated patient alerts')..."
                value={formData.projectDescription}
                onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                className="w-full px-4 py-3 rounded-xl glass-input text-xs leading-relaxed"
              />
            </div>

            {/* Actions */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-display font-bold text-xs tracking-wide shadow-xl shadow-cyan-500/20 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Transmitting Project Scope to Engineering Team...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry & Request Scope Invoice</span>
                  </>
                )}
              </button>
            </div>

            <div className="pt-3 border-t border-white/[0.06] flex items-center justify-center gap-2 text-[11px] font-mono text-slate-500">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>All information submitted is protected under our strict client confidentiality policy.</span>
            </div>

          </form>
        )}

      </div>
    </section>
  );
};
