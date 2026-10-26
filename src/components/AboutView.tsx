import React from 'react';
import { Award, ArrowRight, Globe } from 'lucide-react';
import { Reveal } from './Reveal';
import {
  SUNDAY_TIMES_BADGE_SUBLINE,
  SUNDAY_TIMES_BADGE_TITLE,
} from '../data/content';

interface AboutViewProps {
  onOpenBooking: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onOpenBooking }) => {
  return (
    <div className="pt-32 pb-24 bg-[#0E0E0F] text-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Top Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <Reveal from="left" className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-[#B59A6D] font-medium tracking-wide">
              <span>My History & Track Record</span>
              <span aria-hidden="true">•</span>
              <span>15+ Years in UK Property</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12]">
              About Chris:{' '}
              <span className="font-editorial italic font-normal text-[#B59A6D] block mt-1">
                Self-Employed Estate Agency Coach
              </span>
            </h1>
            <p className="text-lg text-[#A3A3A3] leading-relaxed">
              Chris has spent 15 years doing what he now teaches: building self-employed estate agency models from the ground up. He founded The Estate Agency, scaled it nationally, and sold it to TAUK in 2025, where he now serves as CCO. TAUK is recognised in The Sunday Times 100, celebrating Britain's fastest-growing private companies — ranked #74 in 2026.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <button
                onClick={onOpenBooking}
                className="btn-primary px-7 py-3.5 rounded-full bg-[#B59A6D] hover:bg-[#c9b088] text-[#0E0E0F] font-semibold text-sm sm:text-base shadow-lg shadow-[#B59A6D]/25 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Schedule a 15-Minute Discovery Call</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </Reveal>

          <Reveal from="right" className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden border border-[#2A2A2A] shadow-2xl bg-[#161617]">
              <div className="aspect-[4/5] relative">
                <img
                  src="/images/chris-buckler-headshot.png"
                  alt="Chris Buckler - Professional Studio Portrait"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0F] via-transparent to-transparent opacity-75" />
              </div>
              <div className="p-5 bg-[#161617] border-t border-[#2A2A2A] flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-white block">Chris Buckler</span>
                  <span className="text-[#B59A6D]">CCO, The Agency UK (TAUK)</span>
                </div>
                <span className="bg-[#B59A6D]/15 text-[#B59A6D] border border-[#B59A6D]/30 px-3 py-1 rounded-full font-mono font-semibold">
                  Founder & Mentor
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Narrative & Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-t border-[#2A2A2A]/70 pt-16">
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xs uppercase tracking-wider text-[#B59A6D] font-semibold block">
              Core Credentials & Experience
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              One Clear Goal: Helping Agents Become Profitable Business Owners.
            </h2>
            <p className="text-sm text-[#A3A3A3] leading-relaxed">
              Chris has owned and operated self-employed estate agency models for over a decade. He knows every operational pitfall, cashflow hurdle, and listing objection an agent faces when going independent.
            </p>
            <div className="space-y-3 pt-4">
              <div className="bg-[#161617] p-4 rounded-xl border border-[#2A2A2A] flex items-center gap-3">
                <Award className="w-8 h-8 text-[#B59A6D] shrink-0" />
                <div className="text-xs">
                  <span className="font-bold text-white block">{SUNDAY_TIMES_BADGE_TITLE}</span>
                  <span className="text-[#A3A3A3]">
                    #74 with TAUK (2026) — {SUNDAY_TIMES_BADGE_SUBLINE}
                  </span>
                </div>
              </div>
              <div className="bg-[#161617] p-4 rounded-xl border border-[#2A2A2A] flex items-center gap-3">
                <Globe className="w-8 h-8 text-[#B59A6D] shrink-0" />
                <div className="text-xs">
                  <span className="font-bold text-white block">Prime Global Markets</span>
                  <span className="text-[#A3A3A3]">Represented buyers in Dubai, NY, Sydney & KL</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-6">
            <div className="bg-[#161617] border border-[#2A2A2A] rounded-2xl p-7 sm:p-9 space-y-6">
              <h3 className="text-xl font-bold text-[#F5F5F5]">
                The Story Behind The Mentorship
              </h3>
              <p className="text-sm sm:text-base text-[#A3A3A3] leading-relaxed">
                Previously, Chris specialised in serving high-profile sports and entertainment figures, family offices, and private individuals. He successfully represented buyers and sellers in prime global markets such as Dubai, New York, Sydney, and Kuala Lumpur.
              </p>
              <p className="text-sm sm:text-base text-[#A3A3A3] leading-relaxed">
                Having experienced the traditional UK estate agency model first-hand, he recognized that the conventional high-street framework was fundamentally broken for top-tier negotiators. Agents were doing 90% of the work while taking home only 10% to 15% of the fee.
              </p>
              <p className="text-sm sm:text-base text-[#A3A3A3] leading-relaxed">
                Today, as CCO at TAUK and an independent mentor, Chris equips motivated UK agents with the operational playbook, lead generation funnels, and contract frameworks required to retain 70% of every deal and scale their own multi-broker practice.
              </p>
            </div>

            {/* Photo Pair from Real Client Sessions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="rounded-2xl overflow-hidden border border-[#2A2A2A] bg-[#161617]">
                <div className="aspect-[4/3] relative">
                  <img
                    src="/images/chris-buckler-coaching.jpg"
                    alt="Chris Buckler 1-on-1 Business Coaching"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 text-xs space-y-1">
                  <span className="font-bold text-white block">1-on-1 Tactical Coaching</span>
                  <span className="text-[#6B6B6B]">Weekly accountability & pipeline reviews</span>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden border border-[#2A2A2A] bg-[#161617]">
                <div className="aspect-[4/3] relative">
                  <img
                    src="/images/chris-buckler-speaking.jpg"
                    alt="Chris Buckler Speaking and Recording Sessions"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 text-xs space-y-1">
                  <span className="font-bold text-white block">Keynotes & Events</span>
                  <span className="text-[#6B6B6B]">Battle-tested masterminds nationwide</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Discovery Call Ribbon */}
        <div className="p-8 sm:p-10 bg-gradient-to-r from-[#161617] via-[#1A1A1A] to-[#121212] border border-[#2A2A2A] rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-2xl font-bold text-[#F5F5F5]">
              Schedule a Discovery Call with Chris Buckler
            </h3>
            <p className="text-sm text-[#A3A3A3]">
              A free 15 minute, no-obligation discovery call directly with Chris to review your numbers.
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="px-7 py-3.5 rounded-xl bg-[#B59A6D] hover:bg-[#C9B088] text-[#0E0E0F] font-semibold text-sm transition-all shadow-lg shadow-[#B59A6D]/25 whitespace-nowrap shrink-0 cursor-pointer"
          >
            Book Free Call
          </button>
        </div>
      </div>
    </div>
  );
};
