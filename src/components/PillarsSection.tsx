import React from 'react';
import { UserCheck, Calendar, Radio, Mic, ArrowRight } from 'lucide-react';
import { Reveal, Stagger, StaggerItem } from './Reveal';
import type { PageView } from '../types';

interface PillarsSectionProps {
  onNavigate: (view: PageView) => void;
  onOpenBooking: () => void;
}

export const PillarsSection: React.FC<PillarsSectionProps> = ({ onNavigate, onOpenBooking }) => {
  const pillars = [
    {
      title: 'Coaching',
      badge: '01',
      icon: UserCheck,
      image: '/images/chris-buckler-coaching.jpg',
      headline: 'From employed agent to business owner',
      description:
        '1-on-1 coaching with real numbers, real systems, and real accountability. No fluff.',
      actionText: 'Book a call',
      onAction: onOpenBooking,
      from: 'left' as const,
    },
    {
      title: 'Events',
      badge: '02',
      icon: Calendar,
      image: '/images/chris-buckler-speaking.jpg',
      headline: 'Tactics you can use the next day',
      description:
        "Live rooms where the UK's top self-employed agents share exactly what is working right now.",
      actionText: 'View events',
      onAction: () => onNavigate('events'),
      from: 'right' as const,
    },
    {
      title: 'Podcast',
      badge: '03',
      icon: Radio,
      image: '/images/chris-buckler-podcast.jpg',
      headline: 'Estate Agency Mastery',
      description:
        'Honest conversations with the agents, founders, and operators who built what you are trying to build.',
      actionText: 'Listen now',
      onAction: () => onNavigate('podcast'),
      from: 'left' as const,
    },
    {
      title: 'Keynotes',
      badge: '04',
      icon: Mic,
      image: '/images/chris-buckler-office.jpg',
      headline: 'The model, on a bigger stage',
      description:
        'Keynotes for agency networks and industry rooms on why the best agents are leaving the high street desk.',
      actionText: 'Book Chris to speak',
      onAction: onOpenBooking,
      from: 'right' as const,
    },
  ];

  return (
    <section id="pillars" className="relative py-24 sm:py-32 bg-[#0E0E0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal from="left" className="max-w-2xl mb-14 space-y-4">
          <p className="text-xs tracking-[0.28em] uppercase text-[#B59A6D]">How we work</p>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-[#F6F3EC]">
            Four ways to build
            <span className="font-editorial italic font-normal text-[#B59A6D]"> the agency you own.</span>
          </h2>
        </Reveal>

        <Stagger className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <StaggerItem key={pillar.title} from={pillar.from}>
                <article className="lift-card group h-full rounded-[1.6rem] overflow-hidden border border-white/10 bg-[#161617]">
                  <div className="photo-zoom relative aspect-[16/10]">
                    <img src={pillar.image} alt={pillar.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#161617] via-[#161617]/20 to-transparent" />
                    <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full bg-black/50 backdrop-blur px-3 py-1.5 text-xs text-white border border-white/10">
                      <Icon className="w-3.5 h-3.5 text-[#B59A6D]" />
                      {pillar.title}
                    </div>
                    <span className="absolute top-4 right-4 font-editorial text-2xl text-white/80">{pillar.badge}</span>
                  </div>
                  <div className="p-6 sm:p-7 space-y-4">
                    <h3 className="text-2xl font-semibold text-[#F6F3EC]">{pillar.headline}</h3>
                    <p className="text-sm text-[#B7B1A6] leading-relaxed">{pillar.description}</p>
                    <button
                      onClick={pillar.onAction}
                      className="btn-ghost inline-flex items-center gap-2 text-sm font-semibold text-[#F6F3EC] border-b border-[#B59A6D]/60 pb-1 cursor-pointer"
                    >
                      {pillar.actionText}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
};
