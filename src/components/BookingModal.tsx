import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, User, Phone, Mail, MapPin, ArrowRight, ExternalLink, Sparkles } from 'lucide-react';
import type { BookingFormState } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialInterest?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, initialInterest }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [form, setForm] = useState<BookingFormState>({
    fullName: '',
    email: '',
    phone: '',
    currentRole: 'Employed Branch Manager / Director',
    currentAgency: '',
    operatingArea: '',
    estimatedAnnualBillings: '£100,000 - £200,000',
    preferredDate: '',
    preferredTime: '10:00 AM GMT',
    notes: initialInterest || '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.fullName.trim()) errs.fullName = 'Please enter your full name';
    if (!form.email.trim() || !form.email.includes('@')) errs.email = 'Please enter a valid work email';
    if (!form.phone.trim() || form.phone.length < 9) errs.phone = 'Please enter a valid UK phone number';
    if (!form.operatingArea.trim()) errs.operatingArea = 'Please enter your primary operating town or postcode';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitted(true);
  };

  const resetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center p-4 bg-[#07090d]/80 backdrop-blur-md overflow-y-auto">
      <div
        className="relative w-full max-w-2xl bg-[#101C30] border border-[#1E3352] rounded-3xl shadow-2xl p-6 sm:p-9 text-[#F8F7F3] my-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <button
          onClick={resetAndClose}
          className="absolute top-5 right-5 text-[#718096] hover:text-[#F8F7F3] p-1.5 rounded-lg transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="py-8 text-center space-y-5">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#0E827C]/20 border border-[#0E827C] flex items-center justify-center text-[#0E827C]">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div className="space-y-2">
              <span className="text-xs uppercase tracking-wider text-[#C9A66B] font-semibold">
                Strategy Call Reserved
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#F8F7F3]" id="modal-title">
                Discovery Session Confirmed
              </h3>
              <p className="text-sm text-[#94A3B8] max-w-md mx-auto leading-relaxed">
                Thank you, <span className="text-white font-medium">{form.fullName}</span>. Chris has received your details for{' '}
                <span className="text-white font-medium">{form.operatingArea}</span>.
              </p>
            </div>

            <div className="bg-[#0B1423] border border-[#1E3352] rounded-xl p-4 text-left max-w-md mx-auto space-y-2 text-xs text-[#94A3B8]">
              <div className="flex justify-between items-center py-1 border-b border-[#1E3352]/60">
                <span className="text-[#718096]">Scheduled Date & Time</span>
                <span className="text-white font-medium">
                  {form.preferredDate || 'Earliest Available'} • {form.preferredTime}
                </span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-[#1E3352]/60">
                <span className="text-[#718096]">Format</span>
                <span className="text-[#0E827C] font-medium">1-to-1 Private Zoom with Chris</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-[#718096]">Next Step</span>
                <span className="text-white font-medium">Calendar invitation sent to {form.email}</span>
              </div>
            </div>

            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={resetAndClose}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#0E827C] hover:bg-[#129E97] text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
              >
                Close & Return
              </button>
              <a
                href="https://links.chrisbuckler.co.uk/widget/bookings/discovery-with-chrisbuckler"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#132238] border border-[#1E3352] text-xs text-[#C9A66B] hover:text-white transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Direct HighLevel Calendar</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6 space-y-1.5">
              <div className="flex items-center gap-2 text-xs text-[#C9A66B] font-medium tracking-wide">
                <span>1-on-1 Confidential Strategy Call</span>
                <span aria-hidden="true">•</span>
                <span>15 Minutes with Chris Buckler</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#F8F7F3]" id="modal-title">
                Schedule a Discovery Call
              </h2>
              <p className="text-xs sm:text-sm text-[#94A3B8]">
                A free 15-minute, no-obligation conversation directly with Chris to review your numbers, transition roadmap, and local territory viability.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#94A3B8] mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={form.fullName}
                    onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                    placeholder="e.g. Richard Henderson"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B1423] border border-[#1E3352] text-sm text-[#F8F7F3] placeholder-[#718096] focus:outline-none focus:border-[#0E827C] transition-colors"
                  />
                  {errors.fullName && <p className="text-xs text-rose-400 mt-1">{errors.fullName}</p>}
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#94A3B8] mb-1">Work / Personal Email *</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="richard@estateagency.co.uk"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B1423] border border-[#1E3352] text-sm text-[#F8F7F3] placeholder-[#718096] focus:outline-none focus:border-[#0E827C] transition-colors"
                  />
                  {errors.email && <p className="text-xs text-rose-400 mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#94A3B8] mb-1">Direct Mobile / Phone *</label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="07700 900123"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B1423] border border-[#1E3352] text-sm text-[#F8F7F3] placeholder-[#718096] focus:outline-none focus:border-[#0E827C] transition-colors"
                  />
                  {errors.phone && <p className="text-xs text-rose-400 mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#94A3B8] mb-1">Operating Town / Postcode *</label>
                  <input
                    type="text"
                    required
                    value={form.operatingArea}
                    onChange={(e) => setForm({ ...form, operatingArea: e.target.value })}
                    placeholder="e.g. Richmond, Surrey (TW9 / TW10)"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B1423] border border-[#1E3352] text-sm text-[#F8F7F3] placeholder-[#718096] focus:outline-none focus:border-[#0E827C] transition-colors"
                  />
                  {errors.operatingArea && <p className="text-xs text-rose-400 mt-1">{errors.operatingArea}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#94A3B8] mb-1">Current Estate Agency Role</label>
                  <select
                    value={form.currentRole}
                    onChange={(e) => setForm({ ...form, currentRole: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B1423] border border-[#1E3352] text-sm text-[#F8F7F3] focus:outline-none focus:border-[#0E827C] transition-colors"
                  >
                    <option value="Employed Branch Manager / Director">Employed Branch Manager / Director</option>
                    <option value="Senior Negotiator / Valuer">Senior Negotiator / Valuer</option>
                    <option value="Independent Agency Owner">Independent Agency Owner</option>
                    <option value="Self-Employed Associate (Looking to Scale)">Self-Employed Associate (Looking to Scale)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#94A3B8] mb-1">Estimated Annual Personal Billings</label>
                  <select
                    value={form.estimatedAnnualBillings}
                    onChange={(e) => setForm({ ...form, estimatedAnnualBillings: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B1423] border border-[#1E3352] text-sm text-[#F8F7F3] focus:outline-none focus:border-[#0E827C] transition-colors"
                  >
                    <option value="Under £80,000">Under £80,000 / year</option>
                    <option value="£80,000 - £150,000">£80,000 - £150,000 / year</option>
                    <option value="£150,000 - £250,000">£150,000 - £250,000 / year</option>
                    <option value="£250,000+">£250,000+ / year (High Performer)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#94A3B8] mb-1">Preferred Date</label>
                  <input
                    type="date"
                    value={form.preferredDate}
                    onChange={(e) => setForm({ ...form, preferredDate: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B1423] border border-[#1E3352] text-sm text-[#F8F7F3] focus:outline-none focus:border-[#0E827C] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#94A3B8] mb-1">Preferred Time Window</label>
                  <select
                    value={form.preferredTime}
                    onChange={(e) => setForm({ ...form, preferredTime: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B1423] border border-[#1E3352] text-sm text-[#F8F7F3] focus:outline-none focus:border-[#0E827C] transition-colors"
                  >
                    <option value="09:30 AM GMT">09:30 AM GMT</option>
                    <option value="11:00 AM GMT">11:00 AM GMT</option>
                    <option value="02:00 PM GMT">02:00 PM GMT</option>
                    <option value="04:30 PM GMT">04:30 PM GMT</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#94A3B8] mb-1">
                  What is your primary goal right now? (Optional)
                </label>
                <textarea
                  rows={2}
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  placeholder="e.g. Currently managing a 4-person branch; looking to transition to self-employed within 6 months."
                  className="w-full px-3.5 py-2 rounded-xl bg-[#0B1423] border border-[#1E3352] text-sm text-[#F8F7F3] placeholder-[#718096] focus:outline-none focus:border-[#0E827C] transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#0E827C] hover:bg-[#129E97] text-white font-semibold text-sm transition-all shadow-lg shadow-[#0E827C]/25 cursor-pointer"
                >
                  <span>Confirm 15-Minute Discovery Call with Chris</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="flex items-center justify-center gap-4 text-[11px] text-[#718096] mt-2.5">
                  <span>100% Confidential</span>
                  <span>•</span>
                  <span>Direct with Chris Buckler</span>
                  <span>•</span>
                  <span>Zero Sales Pressure</span>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
