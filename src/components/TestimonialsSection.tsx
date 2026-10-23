import React from 'react';
import { ArrowRight } from 'lucide-react';
import { TESTIMONIALS } from '../data/content';
import { Reveal, Stagger, StaggerItem } from './Reveal';

interface TestimonialsSectionProps {
  onOpenBooking: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="testimonials" className="relative py-24 sm:py-32 bg-[#0E0E0F] overflow-hidden">
      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#B59A6D]/10 blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <Reveal from="left" className="max-w-2xl space-y-4">
            <p className="text-xs tracking-[0.28em] uppercase text-[#B59A6D]">You're in great company</p>
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-[#F6F3EC]">
              Agents who made
              <span className="font-editorial italic font-normal text-[#B59A6D]"> the leap.</span>
            </h2>
          </Reveal>
          <Reveal from="right">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {TESTIMONIALS.slice(0, 4).map((t) => (
                  <img key={t.id} src={t.image} alt="" className="h-11 w-11 rounded-full object-cover ring-2 ring-[#0E0E0F]" />
                ))}
              </div>
              <p className="text-sm text-[#B7B1A6]">Partners across the UK</p>
            </div>
          </Reveal>
        </div>

        <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, index) => (
            <StaggerItem key={t.id} from={index % 2 === 0 ? 'left' : 'right'}>
              <article className="lift-card h-full rounded-[1.5rem] border border-white/10 bg-[#161617] p-6 flex flex-col">
                <div className="flex items-center gap-4 mb-5">
                  <img src={t.image} alt={t.name} className="h-16 w-16 rounded-2xl object-cover" />
                  <div>
                    <h3 className="text-lg font-semibold text-[#F6F3EC]">{t.name}</h3>
                    <p className="text-xs tracking-wide uppercase text-[#B59A6D]">{t.role}</p>
                  </div>
                </div>
                <p className="text-sm text-[#C9C3B8] leading-relaxed flex-1">“{t.content}”</p>
                <p className="mt-5 pt-4 border-t border-white/10 text-xs text-[#8E887E]">{t.badge}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal from="up" className="mt-12">
          <div className="rounded-[1.6rem] border border-white/10 bg-gradient-to-r from-[#1A1A1A] to-[#B59A6D]/20 p-7 sm:p-9 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-[#F6F3EC]">Start your journey today</h3>
              <p className="text-sm text-[#B7B1A6] mt-2">A free 15-minute call. Directly with Chris.</p>
            </div>
            <button
              onClick={onOpenBooking}
              className="btn-primary px-6 py-3.5 rounded-full bg-[#B59A6D] text-[#0E0E0F] font-semibold text-sm inline-flex items-center gap-2 cursor-pointer"
            >
              Book a free call
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
