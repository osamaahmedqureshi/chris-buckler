import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { motion } from 'motion/react';
import type { PageView } from '../types';

interface HeroProps {
  onOpenBooking: () => void;
  onNavigate: (view: PageView) => void;
}

const ease = [0.22, 1, 0.36, 1] as const;

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onNavigate }) => {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#0E0E0F]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(181,154,109,0.16),transparent_42%),radial-gradient(ellipse_at_bottom_right,rgba(181,154,109,0.06),transparent_40%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 lg:pt-32 lg:pb-20 grid lg:grid-cols-12 gap-10 lg:gap-6 items-center min-h-[100svh]">
        <motion.div
          className="lg:col-span-6 space-y-7"
          initial={{ opacity: 0, x: -64 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease }}
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-md">
            <img src="/images/trusted-headshots.png" alt="" className="h-7 w-auto" />
            <span className="text-[11px] sm:text-xs tracking-[0.14em] uppercase text-[#E7E2D6]">
              Trusted nationwide
            </span>
          </div>

          <h1 className="text-[2.6rem] sm:text-6xl lg:text-[4.4rem] font-semibold tracking-[-0.03em] leading-[0.95] text-[#F6F3EC]">
            Stop building someone else's agency.
<span className="block font-editorial italic font-normal text-[#B59A6D] mt-2">
                Build your own.
              </span>
          </h1>

          <p className="text-base sm:text-lg text-[#B7B1A6] max-w-xl leading-relaxed">
            You're working 60 hour weeks for capped commission and a boss who doesn't get it. I help estate agents go self-employed, keep up to 70% of every fee, and build agencies that pay them whether they're working or not.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={onOpenBooking}
              className="btn-primary px-7 py-4 rounded-full font-semibold text-sm sm:text-base flex items-center justify-center gap-2 cursor-pointer"
            >
              Book My Free Strategy Call
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('resources')}
              className="btn-ghost px-6 py-4 rounded-full border border-white/15 bg-white/5 text-[#F6F3EC] font-medium text-sm sm:text-base cursor-pointer"
            >
              Free Advanced Commission guide
            </button>
          </div>

          <div className="flex items-center gap-4 pt-2">
            <div className="flex text-[#B59A6D]">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <p className="text-sm text-[#B7B1A6]">
              CCO, The Agency UK · Sunday Times 100
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
              className="w-full h-[68vh] min-h-[460px] object-cover object-[18%_center]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07090d] via-transparent to-transparent" />
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
            className="hidden sm:flex absolute -left-6 bottom-16 bg-[#11141a]/90 backdrop-blur-xl border border-white/10 rounded-2xl px-4 py-3 items-center gap-3 shadow-2xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7, ease }}
          >
            <span className="font-editorial text-3xl text-[#B59A6D] leading-none">#74</span>
            <span className="text-xs text-[#E7E2D6] leading-snug">
              Sunday Times 100
              <span className="block text-[#8E887E]">Britain's fastest-growing</span>
            </span>
          </motion.div>
        </motion.div>
      </div>

      <div className="relative z-10 border-y border-white/10 bg-black/30">
        <div className="marquee py-4">
          <div className="marquee-track text-[11px] sm:text-xs tracking-[0.22em] uppercase text-[#C6A46A]">
            {Array.from({ length: 2 }).map((_, loop) => (
              <div key={loop} className="flex gap-10 pr-10">
                {['Up to 70% of every fee', '15 years building agencies', '30% advanced commission', '1-on-1 coaching', 'London · Manchester · Nationwide', 'Sold The Estate Agency to TAUK'].map((item) => (
                  <span key={`${loop}-${item}`} className="flex items-center gap-10">
                    {item}
                    <span className="w-1 h-1 rounded-full bg-[#0E827C]" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
