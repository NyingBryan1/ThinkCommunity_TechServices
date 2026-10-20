import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Clock, 
  CheckCircle2, 
  Sparkles,
  ShieldCheck,
  Loader2
} from 'lucide-react';
import { 
  sendSubmissionToEmail, 
  OFFICIAL_EMAIL, 
  OFFICIAL_PHONE, 
  OFFICIAL_LOCATION 
} from '../services/formSubmit';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await sendSubmissionToEmail(
      {
        'Sender Name': formData.name,
        'Sender Email': formData.email,
        'Inquiry Subject': formData.subject || 'General Inquiry',
        'Message': formData.message,
        'Source': 'Direct Contact Desk',
      },
      `[Think Community] Inquiry from ${formData.name}: ${formData.subject || 'General Inquiry'}`
    );
    setIsSubmitting(false);
    setSent(true);
  };

  return (
    <section id="contact" className="py-24 relative scroll-mt-20 overflow-hidden bg-dark-950/60 border-t border-white/[0.08]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-cyan-500/5 blur-[170px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-900 border border-cyan-400/30 text-xs font-mono text-cyan-400">
            <Mail className="w-3.5 h-3.5" />
            <span>Direct Channels</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
            Connect With Our <span className="text-cyan-400">Team</span>
          </h2>

          <p className="text-base text-slate-300">
            Have a question, partnership inquiry, or technical proposal? Send a message to our desk and we will get back to you promptly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Contact Details: 5 cols */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-panel rounded-2xl p-6 border border-white/10 space-y-4">
              <h3 className="font-display font-bold text-lg text-white">
                Official Contact Channels
              </h3>
              <p className="text-xs text-slate-400">
                Operating hours: Monday – Friday (08:00 – 18:00 WAT).
              </p>

              <div className="space-y-3 pt-2">
                <a
                  href={`mailto:${OFFICIAL_EMAIL}`}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-dark-900/80 border border-white/5 hover:border-cyan-400/40 transition-colors group"
                >
                  <div className="p-2.5 rounded-lg bg-dark-950 text-cyan-400 border border-white/5 group-hover:border-cyan-400/30">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase text-slate-400">Email Inquiries</div>
                    <div className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {OFFICIAL_EMAIL}
                    </div>
                  </div>
                </a>

                <a
                  href={`tel:${OFFICIAL_PHONE.replace(/\s+/g, '')}`}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-dark-900/80 border border-white/5 hover:border-cyan-400/40 transition-colors group"
                >
                  <div className="p-2.5 rounded-lg bg-dark-950 text-cyan-400 border border-white/5 group-hover:border-cyan-400/30">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase text-slate-400">Official Telephone Line</div>
                    <div className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {OFFICIAL_PHONE}
                    </div>
                    <div className="text-[11px] text-slate-500 font-mono mt-0.5">
                      Direct office desk & advisory
                    </div>
                  </div>
                </a>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-dark-900/80 border border-white/5">
                  <div className="p-2.5 rounded-lg bg-dark-950 text-cyan-400 border border-white/5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase text-slate-400">Headquarters</div>
                    <div className="text-sm font-semibold text-white">
                      {OFFICIAL_LOCATION}
                    </div>
                    <div className="text-[11px] text-slate-500 font-mono mt-0.5">
                      Delivering worldwide via digital platforms
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SLA Response Guarantee */}
            <div className="p-5 rounded-2xl bg-dark-900 border border-white/10 space-y-2 text-xs font-mono text-slate-300">
              <div className="text-cyan-400 font-bold flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Service Level Response:</span>
              </div>
              <div>• Initial review within <span className="text-white font-bold">4 business hours</span></div>
              <div>• Detailed invoice & scope proposal within <span className="text-white font-bold">24 hours</span></div>
              <div>• Signed mutual NDA provided for all proprietary projects</div>
            </div>

          </div>

          {/* Direct Message Form: 7 cols */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 shadow-2xl">
              <h3 className="font-display font-bold text-xl text-white mb-1">
                Send Us a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill out the form below and an advisor will respond to your inquiry.
              </p>

              {sent ? (
                <div className="p-8 rounded-xl bg-dark-900 border border-cyan-400/40 text-center space-y-4 animate-fadeIn">
                  <div className="w-12 h-12 rounded-xl bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-display font-bold text-xl text-white">
                    Message Dispatched Successfully!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Our team has received your message and will reply to <span className="text-cyan-400">{formData.email}</span> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSent(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="px-4 py-2 rounded-lg bg-white/[0.05] text-xs font-mono text-slate-300 hover:text-white"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">
                        Your Name <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl glass-input text-xs"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">
                        Email Address <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl glass-input text-xs"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Partnership inquiry, Software RFP, Advisory"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl glass-input text-xs"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">
                      Your Message <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Write your message or inquiry here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl glass-input text-xs leading-relaxed"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-display font-bold text-xs tracking-wide shadow-lg shadow-cyan-400/20 hover:scale-[1.01] disabled:opacity-60 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Transmitting to Think Community Desk...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message to Team</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
