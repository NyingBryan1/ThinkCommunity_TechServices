import React, { useState } from 'react';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  Video, 
  Phone, 
  X, 
  CheckCircle2, 
  Globe2, 
  Sparkles, 
  MessageSquare,
  ArrowRight,
  Loader2
} from 'lucide-react';
import { sendSubmissionToEmail } from '../services/formSubmit';

export const ConsultationModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    serviceInterest: 'Custom Web Application',
    notes: '',
    selectedDate: '2026-10-22',
    selectedTime: '14:00',
    timezone: 'WAT (West Africa Time / Cameroon / GMT+1)',
    platform: 'Google Meet',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const dates = [
    { day: 'Wed', date: 'Oct 21', value: '2026-10-21' },
    { day: 'Thu', date: 'Oct 22', value: '2026-10-22' },
    { day: 'Fri', date: 'Oct 23', value: '2026-10-23' },
    { day: 'Mon', date: 'Oct 26', value: '2026-10-26' },
    { day: 'Tue', date: 'Oct 27', value: '2026-10-27' },
  ];

  const timeSlots = [
    '09:00 AM', '10:30 AM', '02:00 PM', '03:30 PM', '05:00 PM', '06:30 PM'
  ];

  const timezones = [
    'WAT (West Africa Time / Cameroon / GMT+1)',
    'GMT / UTC (London / Accra)',
    'EST (Eastern Standard Time / New York)',
    'PST (Pacific Standard Time / San Francisco)',
    'CET (Central European Time / Paris)'
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await sendSubmissionToEmail(
      {
        'Client Name': formData.name,
        'Client Email': formData.email,
        'Organization': formData.organization || 'N/A',
        'Service of Interest': formData.serviceInterest,
        'Preferred Date': formData.selectedDate,
        'Preferred Time': formData.selectedTime,
        'Timezone': formData.timezone,
        'Meeting Platform': formData.platform,
        'Meeting Agenda / Notes': formData.notes || 'N/A',
        'Form Type': 'Technical Consultation Booking',
      },
      `[Think Community Consultation] ${formData.serviceInterest} - ${formData.name}`
    );
    setIsSubmitting(false);
    setConfirmed(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-fadeIn">
      <div className="bg-dark-950 border border-white/15 rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative">
        
        {/* Modal Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between sticky top-0 bg-dark-950/95 backdrop-blur-md z-10">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-brand-mint/10 border border-brand-mint/30 flex items-center justify-center text-brand-mint">
              <CalendarIcon className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-display font-bold text-base sm:text-lg text-white">
                Book a Technical Consultation
              </h3>
              <p className="text-xs text-slate-400">
                30-minute private video strategy session with our engineering lead
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {confirmed ? (
            <div className="text-center py-6 space-y-5 animate-fadeIn">
              <div className="w-16 h-16 rounded-2xl bg-brand-mint/10 border border-brand-mint/30 text-brand-mint flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h4 className="font-display font-bold text-2xl text-white">
                  Consultation Request Dispatched!
                </h4>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-white">{formData.name}</strong>. We have logged your request for <strong className="text-brand-mint">{formData.selectedDate} at {formData.selectedTime} ({formData.timezone})</strong> via <strong className="text-white">{formData.platform}</strong>.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-dark-900 border border-white/5 text-xs text-slate-300 font-mono text-left max-w-md mx-auto space-y-1.5">
                <div className="text-white font-bold mb-1">Calendar & Meet Confirmation:</div>
                <div>• Calendar invite will be sent to: <span className="text-brand-mint">{formData.email}</span></div>
                <div>• Lead Engineer: Senior Architect, Think Community</div>
                <div>• Format: 30 minutes video call & project scoping</div>
              </div>

              <div className="pt-4 flex justify-center">
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-xl bg-brand-mint text-black font-display font-bold text-xs shadow-lg shadow-brand-mint/20 hover:scale-105 transition-all"
                >
                  Done & Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Meeting Platform Picker */}
              <div>
                <label className="text-xs font-mono text-slate-300 block mb-2">
                  Select Preferred Meeting Format:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {['Google Meet', 'Zoom', 'WhatsApp Call', 'Phone Call'].map((m) => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => setFormData({ ...formData, platform: m })}
                      className={`p-2.5 rounded-xl text-xs font-mono border transition-all ${
                        formData.platform === m
                          ? 'bg-dark-900 border-brand-mint text-white font-bold'
                          : 'bg-dark-950/70 border-white/5 text-slate-400 hover:text-white'
                      }`}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>

              {/* Date & Time Selector */}
              <div>
                <label className="text-xs font-mono text-slate-300 block mb-2">
                  Select Preferred Date:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                  {dates.map((d) => (
                    <button
                      key={d.value}
                      type="button"
                      onClick={() => setFormData({ ...formData, selectedDate: d.value })}
                      className={`p-2.5 rounded-xl border text-center transition-all ${
                        formData.selectedDate === d.value
                          ? 'bg-dark-900 border-brand-mint shadow-md shadow-brand-mint/10'
                          : 'bg-dark-950/60 border-white/5 text-slate-400 hover:text-white'
                      }`}
                    >
                      <div className="text-[10px] font-mono text-slate-400 uppercase">{d.day}</div>
                      <div className={`text-xs font-bold ${formData.selectedDate === d.value ? 'text-brand-mint' : 'text-white'}`}>
                        {d.date}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Slots */}
              <div>
                <label className="text-xs font-mono text-slate-300 block mb-2">
                  Select Preferred Time Slot:
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setFormData({ ...formData, selectedTime: time })}
                      className={`p-2 rounded-xl text-center text-xs font-mono border transition-all ${
                        formData.selectedTime === time
                          ? 'bg-brand-mint text-black font-bold'
                          : 'bg-dark-950/60 border-white/5 text-slate-400 hover:text-white'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Timezone Selector */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-300">
                  Your Timezone:
                </label>
                <select
                  value={formData.timezone}
                  onChange={(e) => setFormData({ ...formData, timezone: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl glass-input text-xs bg-dark-900"
                >
                  {timezones.map((tz) => (
                    <option key={tz} value={tz}>{tz}</option>
                  ))}
                </select>
              </div>

              {/* Personal Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300">
                    Your Full Name <span className="text-brand-mint">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Marie Claire / Arthur Smith"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl glass-input text-xs"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300">
                    Email Address <span className="text-brand-mint">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl glass-input text-xs"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300">
                    Organization / Company (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. FinTech Labs"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl glass-input text-xs"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300">
                    Service to Discuss
                  </label>
                  <select
                    value={formData.serviceInterest}
                    onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl glass-input text-xs bg-dark-900"
                  >
                    <option value="Website Development">Website Development</option>
                    <option value="Custom Web Application">Custom Web Application / SaaS</option>
                    <option value="AI / ML Solutions">AI & Machine Learning Solution</option>
                    <option value="Mobile App Development">Mobile App Development</option>
                    <option value="Payment / API Integration">API & Payment Integration</option>
                    <option value="Maintenance Retainer">Ongoing SLA & Maintenance</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-300">
                  Brief Project Overview or Agenda
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us in 1-2 sentences what goals or challenges you want to discuss..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl glass-input text-xs"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-brand-mint to-emerald-400 text-black font-display font-bold text-xs tracking-wide shadow-xl shadow-brand-mint/25 hover:shadow-brand-mint/40 hover:scale-[1.01] disabled:opacity-60 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Scheduling Strategy Session...</span>
                    </>
                  ) : (
                    <>
                      <CalendarIcon className="w-4 h-4" />
                      <span>Confirm Consultation Request</span>
                    </>
                  )}
                </button>
                <p className="text-[11px] text-slate-500 text-center font-mono mt-2">
                  * A calendar invitation will be sent to your email after automated schedule verification.
                </p>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
