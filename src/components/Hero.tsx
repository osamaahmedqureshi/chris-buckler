import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { motion } from 'motion/react';
import type { PageView } from '../types';
import {
  FINANCIAL_SUPPORT_CTA,
  SUNDAY_TIMES_BADGE_SUBLINE,
  SUNDAY_TIMES_BADGE_TITLE,
} from '../data/content';

interface HeroProps {
  onOpenBooking: () => void;
  onNavigate: (view: PageView) => void;
}

const ease = [0.22, 1, 0.36, 1] as const;

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onNavigate }) => {
  return (
    <section className="relative overflow-hidden bg-[#0E0E0F]">
      {/* ========== MOBILE / TABLET (< lg): full-bleed portrait (text top, face lower) ========== */}
      <div className="lg:hidden relative min-h-[100svh] flex flex-col">
        <div className="absolute inset-0">
          <img
            src="/images/chris-buckler-hero-mobile.jpg"
            alt="Chris Buckler"
            className="h-full w-full object-cover object-[center_78%] sm:object-[center_70%] md:object-[center_60%]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-[28%] bg-gradient-to-t from-black/55 to-transparent" />
        </div>

        <div className="relative z-10 flex flex-1 flex-col px-4 sm:px-8 pt-24 sm:pt-28 pb-8 min-h-[100svh]">
          <motion.div
            className="space-y-3 sm:space-y-4 max-w-xl shrink-0"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/45 px-2.5 py-1 backdrop-blur-md">
              <img src="/images/trusted-headshots.png" alt="" className="h-5 w-auto" />
              <span className="text-[9px] sm:text-[10px] tracking-[0.16em] uppercase text-white/90">
                Trusted nationwide
              </span>
            </div>

            <h1 className="text-[1.85rem] sm:text-[2.5rem] md:text-5xl font-semibold tracking-[-0.03em] leading-[1.08] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)]">
              Stop building someone else's agency.
              <span className="block font-editorial italic font-normal text-[#B59A6D] mt-0.5">
                Build your own.
              </span>
            </h1>

            <p className="hidden sm:block text-sm md:text-base text-white/85 leading-relaxed max-w-md drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)]">
              You're working 60 hour weeks for capped commission and a boss who doesn't get it. I help estate agents go self-employed, keep up to 70% of every fee, and build agencies that pay them whether they're working or not.
            </p>
          </motion.div>

          {/* Open mid-area so the portrait reads clearly */}
          <div className="flex-1 min-h-[12rem] sm:min-h-[10rem]" aria-hidden="true" />

          <motion.div
            className="space-y-3 shrink-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12, ease }}
          >
            <div className="flex flex-col gap-2.5">
              <button
                onClick={onOpenBooking}
                className="btn-primary w-full px-6 py-3.5 rounded-full font-semibold text-sm flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                Book My Free Strategy Call
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('resources')}
                className="btn-ghost w-full px-6 py-3 rounded-full border border-white/35 bg-black/30 backdrop-blur-sm text-white font-medium text-sm cursor-pointer"
              >
                {FINANCIAL_SUPPORT_CTA}
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <div className="flex text-[#B59A6D]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <p className="text-[11px] text-white/75">
                Trusted by Estate Agents Nationwide
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ========== DESKTOP (lg+): original split banner ========== */}
      <div className="hidden lg:block relative min-h-[100svh]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(181,154,109,0.14),transparent_42%),radial-gradient(ellipse_at_bottom_right,rgba(181,154,109,0.05),transparent_40%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 grid lg:grid-cols-12 gap-8 items-center min-h-[100svh]">
          <motion.div
            className="lg:col-span-6 space-y-7"
            initial={{ opacity: 0, x: -64 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease }}
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-md">
              <img src="/images/trusted-headshots.png" alt="" className="h-7 w-auto" />
              <span className="text-xs tracking-[0.14em] uppercase text-[#E7E2D6]">
                Trusted nationwide
              </span>
            </div>

            <h1 className="text-[4.2rem] font-semibold tracking-[-0.03em] leading-[0.95] text-[#F5F5F5]">
              Stop building someone else's agency.
              <span className="block font-editorial italic font-normal text-[#B59A6D] mt-2">
                Build your own.
              </span>
            </h1>

            <p className="text-lg text-[#A3A3A3] max-w-xl leading-relaxed">
              You're working 60 hour weeks for capped commission and a boss who doesn't get it. I help estate agents go self-employed, keep up to 70% of every fee, and build agencies that pay them whether they're working or not.
            </p>

            <div className="flex flex-row gap-3">
              <button
                onClick={onOpenBooking}
                className="btn-primary px-7 py-4 rounded-full font-semibold text-base flex items-center justify-center gap-2 cursor-pointer"
              >
                Book My Free Strategy Call
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('resources')}
                className="btn-ghost px-6 py-4 rounded-full border border-white/15 bg-white/5 text-[#F5F5F5] font-medium text-base cursor-pointer"
              >
                {FINANCIAL_SUPPORT_CTA}
              </button>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <div className="flex text-[#B59A6D]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-sm text-[#A3A3A3]">
                CCO, The Agency UK · {SUNDAY_TIMES_BADGE_TITLE} (#74)
              </p>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-6 relative"
            initial={{ opacity: 0, x: 72 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.15, ease }}
          >
            <div className="relative photo-zoom rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.45)]">
              <img
                src="/images/chris-buckler-hero.png"
                alt="Chris Buckler"
                className="w-full h-[68vh] min-h-[460px] max-h-[640px] object-cover object-[18%_center]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0F] via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between gap-4">
                <div>
                  <p className="text-lg font-semibold text-white">Chris Buckler</p>
                  <p className="text-sm text-[#B59A6D]">Self-employed estate agency coach</p>
                </div>
                <button
                  onClick={() => onNavigate('about')}
                  className="btn-ghost text-xs font-semibold tracking-wide uppercase text-white border border-white/20 rounded-full px-4 py-2 bg-black/30 backdrop-blur cursor-pointer"
                >
                  My history
                </button>
              </div>
            </div>

            <motion.div
              className="absolute -left-6 bottom-16 bg-[#161617]/90 backdrop-blur-xl border border-white/10 rounded-2xl px-4 py-3 flex items-center gap-3 shadow-2xl"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7, ease }}
            >
              <span className="font-editorial text-3xl text-[#B59A6D] leading-none">#74</span>
              <span className="text-xs text-[#E7E2D6] leading-snug max-w-[12rem]">
                {SUNDAY_TIMES_BADGE_TITLE}
                <span className="block text-[#8E887E]">{SUNDAY_TIMES_BADGE_SUBLINE}</span>
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
