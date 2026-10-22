import React, { useState } from 'react';
import { Download, CheckCircle2, ArrowRight, Mail, Calendar } from 'lucide-react';
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

  const openDownload = (resource: ResourceItem) => {
    setDownloadModalItem(resource);
    setDownloadSuccess(false);
    setDownloadEmail('');
  };

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
    <div className="bg-[#0E0E0F] text-[#F5F5F5]">
      {/* 1. Wide landing hero */}
      <section className="relative pt-32 pb-20 sm:pt-36 sm:pb-28 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(181,154,109,0.14),transparent_55%)]" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <Reveal>
            <p className="text-xs tracking-[0.28em] uppercase text-[#B59A6D]">Free resources</p>
            <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
              Templates, plans and playbooks
              <span className="block font-editorial italic font-normal text-[#B59A6D] mt-2">
                Chris uses with coaching clients.
              </span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-[#A3A3A3] max-w-2xl mx-auto leading-relaxed">
              Download them all. Free, no upsell. Or book a call if you want Chris to walk you through what fits your patch.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="#resource-library"
                className="btn-primary px-7 py-3.5 rounded-full font-semibold text-sm inline-flex items-center gap-2"
              >
                Browse free resources
                <ArrowRight className="w-4 h-4" />
              </a>
              <button
                onClick={onOpenBooking}
                className="btn-ghost px-7 py-3.5 rounded-full border font-semibold text-sm inline-flex items-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                Book a free strategy call
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. Resource jump strip */}
      <section className="border-b border-white/10 bg-[#161617]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-wrap justify-center gap-3">
          {FREE_RESOURCES.map((r, i) => (
            <a
              key={r.id}
              href={`#resource-${r.id}`}
              className="text-xs sm:text-sm px-4 py-2 rounded-full border border-white/15 text-[#A3A3A3] hover:border-[#B59A6D] hover:text-[#B59A6D] transition-colors"
            >
              {String(i + 1).padStart(2, '0')} · {r.title.replace(' Guide', '').replace('Self-Employed Agency ', '')}
            </a>
          ))}
        </div>
      </section>

      {/* 3. Wide flowed resource sections */}
      <section id="resource-library" className="py-8 sm:py-12">
        {FREE_RESOURCES.map((resource, index) => {
          const reverse = index % 2 === 1;
          return (
            <div
              key={resource.id}
              id={`resource-${resource.id}`}
              className={`border-b border-white/10 ${index % 2 === 0 ? 'bg-[#0E0E0F]' : 'bg-[#121212]'}`}
            >
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start ${reverse ? 'lg:direction-rtl' : ''}`}>
                  <Reveal from={reverse ? 'right' : 'left'} className="lg:col-span-5 space-y-4">
                    <div className="flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-[#B59A6D]">
                      <span>{String(index + 1).padStart(2, '0')}</span>
                      <span className="w-8 h-px bg-[#B59A6D]/60" />
                      <span>{resource.category}</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white leading-tight">
                      {resource.title}
                    </h2>
                    <p className="text-[#B59A6D] text-sm sm:text-base font-medium">{resource.tagline}</p>
                    <p className="text-sm sm:text-base text-[#A3A3A3] leading-relaxed">{resource.description}</p>
                    <p className="text-xs text-[#6B6B6B] font-mono">
                      {resource.pages} pages · {resource.format}
                    </p>
                  </Reveal>

                  <Reveal from={reverse ? 'left' : 'right'} className="lg:col-span-7 space-y-6">
                    <div className="rounded-2xl border border-white/10 bg-black/40 p-6 sm:p-8 space-y-4">
                      <p className="text-[11px] tracking-[0.2em] uppercase text-[#6B6B6B]">What's inside</p>
                      <ul className="space-y-3">
                        {resource.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-3 text-sm text-[#D4D4D4]">
                            <CheckCircle2 className="w-4 h-4 text-[#B59A6D] mt-0.5 shrink-0" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Dual path: download or book */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={() => openDownload(resource)}
                        className="btn-primary flex-1 px-6 py-3.5 rounded-full font-semibold text-sm inline-flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <Download className="w-4 h-4" />
                        Download free copy
                      </button>
                      <button
                        onClick={onOpenBooking}
                        className="btn-ghost flex-1 px-6 py-3.5 rounded-full border font-semibold text-sm inline-flex items-center justify-center gap-2 cursor-pointer"
                      >
                        Book a call about this
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                    {resource.funnelUrl && (
                      <a
                        href={resource.funnelUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-[#6B6B6B] hover:text-[#B59A6D] transition-colors"
                      >
                        Open direct funnel
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    )}
                  </Reveal>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* 4. Newsletter band — from live site */}
      <section className="py-20 border-b border-white/10 bg-[#161617]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-3">
              <p className="text-xs tracking-[0.28em] uppercase text-[#B59A6D]">Newsletter</p>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
                Get Chris's weekly tactical breakdown
              </h2>
              <p className="text-sm sm:text-base text-[#A3A3A3] leading-relaxed max-w-xl">
                Real talk on going self-employed, building your agency, and keeping more of every fee. Straight to your inbox, every week.
              </p>
            </div>
            <div className="lg:col-span-5">
              {newsletterSubmitted ? (
                <div className="rounded-2xl border border-[#B59A6D]/40 bg-black/40 p-6 text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-[#B59A6D] mx-auto" />
                  <h4 className="text-base font-semibold text-white">You're on the list</h4>
                  <p className="text-xs text-[#A3A3A3]">Next breakdown goes to {newsletterEmail}.</p>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                  <div className="relative">
                    <input
                      type="email"
                      required
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder="Enter your email..."
                      className="w-full px-4 py-3.5 rounded-full bg-[#0E0E0F] border border-white/15 text-sm text-white placeholder-[#6B6B6B] focus:outline-none focus:border-[#B59A6D]"
                    />
                    <Mail className="w-4 h-4 text-[#6B6B6B] absolute right-4 top-4 pointer-events-none" />
                  </div>
                  <button
                    type="submit"
                    className="btn-primary w-full py-3.5 rounded-full font-semibold text-sm cursor-pointer"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. Final flowed CTA — download again or book */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(181,154,109,0.12),transparent_60%)]" />
        <Reveal className="relative max-w-3xl mx-auto px-4 text-center space-y-6">
          <p className="text-xs tracking-[0.28em] uppercase text-[#B59A6D]">Next step</p>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white">
            Grab a resource, or talk it through
            <span className="font-editorial italic font-normal text-[#B59A6D]"> with Chris.</span>
          </h2>
          <p className="text-base text-[#A3A3A3] leading-relaxed">
            Same free tools. Same clear choice. Download what you need now, or book a 15-minute call if you want a plan for your numbers.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#resource-library"
              className="btn-ghost w-full sm:w-auto px-7 py-3.5 rounded-full border font-semibold text-sm inline-flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              Back to downloads
            </a>
            <button
              onClick={onOpenBooking}
              className="btn-primary w-full sm:w-auto px-7 py-3.5 rounded-full font-semibold text-sm inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              Book a free 15-minute call
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </Reveal>
      </section>

      {/* Download modal */}
      {downloadModalItem && (
        <div className="fixed inset-0 z-[90] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-lg bg-[#161617] border border-white/10 rounded-2xl shadow-2xl p-6 sm:p-8">
            <button
              onClick={() => setDownloadModalItem(null)}
              className="absolute top-5 right-5 text-[#6B6B6B] hover:text-white cursor-pointer"
              aria-label="Close"
            >
              ✕
            </button>

            {downloadSuccess ? (
              <div className="text-center py-6 space-y-4">
                <CheckCircle2 className="w-10 h-10 text-[#B59A6D] mx-auto" />
                <h3 className="text-xl font-semibold">Guide on its way</h3>
                <p className="text-sm text-[#A3A3A3]">
                  We've emailed <span className="text-white font-medium">{downloadModalItem.title}</span> to{' '}
                  <span className="text-[#B59A6D]">{downloadEmail}</span>.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row gap-2 justify-center">
                  <button
                    onClick={() => setDownloadModalItem(null)}
                    className="btn-ghost px-5 py-2.5 rounded-full border text-xs font-semibold cursor-pointer"
                  >
                    Keep browsing
                  </button>
                  <button
                    onClick={() => {
                      setDownloadModalItem(null);
                      onOpenBooking();
                    }}
                    className="btn-primary px-5 py-2.5 rounded-full text-xs font-semibold cursor-pointer"
                  >
                    Or book a call
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="space-y-1">
                  <span className="text-xs uppercase tracking-[0.2em] text-[#B59A6D]">Instant download</span>
                  <h3 className="text-2xl font-semibold">{downloadModalItem.title}</h3>
                  <p className="text-xs text-[#A3A3A3]">{downloadModalItem.tagline}</p>
                </div>
                <form onSubmit={handleDownloadSubmit} className="space-y-3 pt-2">
                  <input
                    type="email"
                    required
                    value={downloadEmail}
                    onChange={(e) => setDownloadEmail(e.target.value)}
                    placeholder="yourname@agency.co.uk"
                    className="w-full px-4 py-3 rounded-full bg-[#0E0E0F] border border-white/15 text-sm text-white placeholder-[#6B6B6B] focus:outline-none focus:border-[#B59A6D]"
                  />
                  <button
                    type="submit"
                    className="btn-primary w-full py-3 rounded-full font-semibold text-sm cursor-pointer"
                  >
                    Send me the free guide
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setDownloadModalItem(null);
                      onOpenBooking();
                    }}
                    className="w-full text-xs text-[#A3A3A3] hover:text-[#B59A6D] transition-colors cursor-pointer"
                  >
                    Prefer to talk it through? Book a call instead
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
