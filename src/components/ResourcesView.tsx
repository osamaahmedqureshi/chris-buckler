import React, { useState } from 'react';
import { Download, FileText, CheckCircle2, ArrowRight, Mail, Sparkles, ShieldCheck } from 'lucide-react';
import { Reveal } from './Reveal';
import { FREE_RESOURCES } from '../data/content';
import type { ResourceItem } from '../types';

interface ResourcesViewProps {
  onOpenBooking: () => void;
}

export const ResourcesView: React.FC<ResourcesViewProps> = ({ onOpenBooking }) => {
  const [downloadModalItem, setDownloadModalItem] = useState<ResourceItem | null>(null);
  const [downloadEmail, setDownloadEmail] = useState('');
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const handleDownloadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!downloadEmail.includes('@')) return;
    setDownloadSuccess(true);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.includes('@')) return;
    setNewsletterSubmitted(true);
  };

  return (
    <div className="pt-32 pb-24 bg-[#0A0F1A] text-[#F8F7F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <Reveal from="left" className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-[#C9A66B] font-medium tracking-wide">
            <span>Free Downloadable Resources</span>
            <span aria-hidden="true">•</span>
            <span>No Fluff, No Upsell</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12]">
            Start Your Journey to Build a{' '}
            <span className="font-editorial italic font-normal text-[#C9A66B]">
              Thriving Agency.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Your time is valuable. Stop chasing down every lead and start building a business that works for you. Our resources are designed to help you streamline your operations, attract top talent, and maximise your earnings.
          </p>
        </Reveal>

        {/* 4 Downloadable Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FREE_RESOURCES.map((resource) => (
            <div
              key={resource.id}
              className="bg-[#101C30] border border-[#1E3352] rounded-3xl p-7 sm:p-9 shadow-xl hover:border-[#0E827C]/60 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#0E827C] bg-[#0E827C]/15 px-3 py-1 rounded-full border border-[#0E827C]/30">
                    {resource.category}
                  </span>
                  <span className="text-xs text-[#718096] font-mono">
                    {resource.pages} Pages • {resource.format}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-[#F8F7F3] group-hover:text-white transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#C9A66B] font-medium">
                    {resource.tagline}
                  </p>
                  <p className="text-sm text-[#94A3B8] leading-relaxed pt-1">
                    {resource.description}
                  </p>
                </div>

                {/* Highlights */}
                <div className="pt-2 space-y-2 border-t border-[#1E3352]/70">
                  <span className="text-[11px] font-semibold text-[#718096] uppercase tracking-wider block">
                    What's Inside:
                  </span>
                  {resource.highlights.map((h) => (
                    <div key={h} className="flex items-start gap-2.5 text-xs text-[#94A3B8]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0E827C] mt-0.5 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 mt-6 border-t border-[#1E3352]/70 flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  onClick={() => {
                    setDownloadModalItem(resource);
                    setDownloadSuccess(false);
                    setDownloadEmail('');
                  }}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#0E827C] hover:bg-[#129E97] text-white font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#0E827C]/20"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Free Copy</span>
                </button>
                {resource.funnelUrl && (
                  <a
                    href={resource.funnelUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#718096] hover:text-[#C9A66B] transition-colors flex items-center gap-1"
                  >
                    <span>Direct Access Funnel</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup Section from live site */}
        <div className="p-8 sm:p-12 bg-[#101C30] border border-[#1E3352] rounded-3xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-3">
              <span className="text-xs uppercase tracking-wider text-[#C9A66B] font-semibold block">
                Sign Up to Our Newsletter
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Get Chris's Insight on Self-Employed Estate Agency Straight to Your Inbox
              </h2>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                Join estate agency professionals receiving valuable insights into levelling up their estate agency career. No spam, just the strategies that work.
              </p>
            </div>

            <div className="lg:col-span-5">
              {newsletterSubmitted ? (
                <div className="bg-[#0B1423] border border-[#0E827C]/50 rounded-2xl p-6 text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-[#0E827C] mx-auto" />
                  <h4 className="text-base font-bold text-white">You're on the List!</h4>
                  <p className="text-xs text-[#94A3B8]">
                    Welcome. You'll receive Chris's next tactical breakdown directly to {newsletterEmail}.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                  <div className="relative">
                    <input
                      type="email"
                      required
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder="Enter your estate agency email..."
                      className="w-full px-4 py-3.5 rounded-xl bg-[#0B1423] border border-[#1E3352] text-sm text-white placeholder-[#718096] focus:outline-none focus:border-[#0E827C] transition-colors"
                    />
                    <Mail className="w-4 h-4 text-[#718096] absolute right-4 top-4 pointer-events-none" />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-[#0E827C] hover:bg-[#129E97] text-white font-semibold text-sm transition-all shadow-lg shadow-[#0E827C]/20 cursor-pointer"
                  >
                    Subscribe to Weekly Insights
                  </button>
                  <p className="text-center text-[11px] text-[#718096]">
                    Weekly tactics • Unsubscribe anytime with 1 click
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Download Modal */}
        {downloadModalItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B1423]/80 backdrop-blur-md">
            <div className="relative w-full max-w-lg bg-[#101C30] border border-[#1E3352] rounded-2xl shadow-2xl p-6 sm:p-8 text-[#F8F7F3]">
              <button
                onClick={() => setDownloadModalItem(null)}
                className="absolute top-5 right-5 text-[#718096] hover:text-white cursor-pointer"
              >
                ✕
              </button>

              {downloadSuccess ? (
                <div className="text-center py-6 space-y-4">
                  <div className="w-14 h-14 mx-auto rounded-full bg-[#0E827C]/20 border border-[#0E827C] flex items-center justify-center text-[#0E827C]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold">Guide Dispatched!</h3>
                  <p className="text-xs sm:text-sm text-[#94A3B8]">
                    We've emailed <span className="text-white font-semibold">{downloadModalItem.title}</span> directly to{' '}
                    <span className="text-[#0E827C] font-semibold">{downloadEmail}</span>.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => setDownloadModalItem(null)}
                      className="px-6 py-2.5 rounded-lg bg-[#0E827C] text-white text-xs font-semibold cursor-pointer"
                    >
                      Close Window
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="space-y-1">
                    <span className="text-xs uppercase tracking-wider text-[#C9A66B] font-semibold">
                      Instant Download
                    </span>
                    <h3 className="text-2xl font-bold">{downloadModalItem.title}</h3>
                    <p className="text-xs text-[#94A3B8]">{downloadModalItem.tagline}</p>
                  </div>

                  <form onSubmit={handleDownloadSubmit} className="space-y-3 pt-2">
                    <div>
                      <label className="block text-xs font-medium text-[#94A3B8] mb-1">
                        Where should we send your copy? *
                      </label>
                      <input
                        type="email"
                        required
                        value={downloadEmail}
                        onChange={(e) => setDownloadEmail(e.target.value)}
                        placeholder="yourname@agency.co.uk"
                        className="w-full px-4 py-3 rounded-lg bg-[#0B1423] border border-[#1E3352] text-sm text-white placeholder-[#718096] focus:outline-none focus:border-[#0E827C]"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 px-6 rounded-lg bg-[#0E827C] hover:bg-[#129E97] text-white font-semibold text-sm transition-all shadow-md shadow-[#0E827C]/20 cursor-pointer"
                    >
                      Send Me The Free Guide Now
                    </button>
                    <p className="text-center text-[11px] text-[#718096]">
                      Instant PDF delivery to your inbox.
                    </p>
                  </form>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
