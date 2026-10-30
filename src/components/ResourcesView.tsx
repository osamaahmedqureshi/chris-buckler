import React from 'react';
import { Download, CheckCircle2, ArrowRight, Calendar, Mail } from 'lucide-react';
import { Reveal } from './Reveal';
import { FREE_RESOURCES } from '../data/content';
import { openDiscoveryCall, openExternal } from '../data/links';
import type { PageView } from '../types';

interface ResourcesViewProps {
  onOpenBooking: () => void;
  onNavigate: (view: PageView) => void;
}

export const ResourcesView: React.FC<ResourcesViewProps> = ({ onOpenBooking, onNavigate }) => {
  const handleResourcePrimary = (id: string, funnelUrl?: string) => {
    if (id === 'advanced-commission') {
      onNavigate('advanced-commission');
      return;
    }
    if (funnelUrl) openExternal(funnelUrl);
  };

  return (
    <div className="bg-[#0E0E0F] text-[#F5F5F5]">
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
              Open a guide, or book a call if you want Chris to walk you through what fits your patch.
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
                Book a Discovery Call
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#161617]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-wrap justify-center gap-3">
          {FREE_RESOURCES.map((r, i) => (
            <a
              key={r.id}
              href={`#resource-${r.id}`}
              className="text-xs sm:text-sm px-4 py-2 rounded-full border border-white/15 text-[#A3A3A3] hover:border-[#B59A6D] hover:text-[#B59A6D] transition-colors"
            >
              {String(i + 1).padStart(2, '0')} ·{' '}
              {r.title.replace(' Guide', '').replace('Self-Employed Agency ', '')}
            </a>
          ))}
        </div>
      </section>

      <section id="resource-library" className="py-8 sm:py-12">
        {FREE_RESOURCES.map((resource, index) => {
          const reverse = index % 2 === 1;
          const isAdvanced = resource.id === 'advanced-commission';
          return (
            <div
              key={resource.id}
              id={`resource-${resource.id}`}
              className={`border-b border-white/10 ${index % 2 === 0 ? 'bg-[#0E0E0F]' : 'bg-[#121212]'}`}
            >
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start ${reverse ? 'lg:direction-rtl' : ''}`}
                >
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
                    <p className="text-sm sm:text-base text-[#A3A3A3] leading-relaxed">
                      {resource.description}
                    </p>
                    <p className="text-xs text-[#6B6B6B] font-mono">
                      {resource.pages} pages · {resource.format}
                    </p>
                  </Reveal>

                  <Reveal from={reverse ? 'left' : 'right'} className="lg:col-span-7 space-y-6">
                    <div className="rounded-2xl border border-white/10 bg-black/40 p-6 sm:p-8 space-y-4">
                      <p className="text-[11px] tracking-[0.2em] uppercase text-[#6B6B6B]">
                        What's inside
                      </p>
                      <ul className="space-y-3">
                        {resource.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-3 text-sm text-[#D4D4D4]">
                            <CheckCircle2 className="w-4 h-4 text-[#B59A6D] mt-0.5 shrink-0" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={() => handleResourcePrimary(resource.id, resource.funnelUrl)}
                        className="btn-primary flex-1 px-6 py-3.5 rounded-full font-semibold text-sm inline-flex items-center justify-center gap-2 cursor-pointer"
                      >
                        {isAdvanced ? (
                          <>
                            Open Advanced Commission page
                            <ArrowRight className="w-4 h-4" />
                          </>
                        ) : (
                          <>
                            <Download className="w-4 h-4" />
                            Open free resource
                          </>
                        )}
                      </button>
                      <button
                        onClick={onOpenBooking}
                        className="btn-ghost flex-1 px-6 py-3.5 rounded-full border font-semibold text-sm inline-flex items-center justify-center gap-2 cursor-pointer"
                      >
                        Book a Discovery Call
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Newsletter → Discovery Call (no email capture; client request) */}
      <section className="py-20 border-b border-white/10 bg-[#161617]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-3">
              <p className="text-xs tracking-[0.28em] uppercase text-[#B59A6D]">Stay in touch</p>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
                Prefer a conversation to an inbox?
              </h2>
              <p className="text-sm sm:text-base text-[#A3A3A3] leading-relaxed max-w-xl">
                Book a free Discovery Call with Chris — same clarity as a weekly tip, tailored to your
                patch and numbers.
              </p>
            </div>
            <div className="lg:col-span-5">
              <button
                onClick={openDiscoveryCall}
                className="btn-primary w-full py-3.5 rounded-full font-semibold text-sm inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                Book a Discovery Call
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(181,154,109,0.12),transparent_60%)]" />
        <Reveal className="relative max-w-3xl mx-auto px-4 text-center space-y-6">
          <p className="text-xs tracking-[0.28em] uppercase text-[#B59A6D]">Next step</p>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white">
            Grab a resource, or talk it through
            <span className="font-editorial italic font-normal text-[#B59A6D]"> with Chris.</span>
          </h2>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#resource-library"
              className="btn-ghost w-full sm:w-auto px-7 py-3.5 rounded-full border font-semibold text-sm inline-flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              Back to resources
            </a>
            <button
              onClick={onOpenBooking}
              className="btn-primary w-full sm:w-auto px-7 py-3.5 rounded-full font-semibold text-sm inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              Book a Discovery Call
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </Reveal>
      </section>
    </div>
  );
};
