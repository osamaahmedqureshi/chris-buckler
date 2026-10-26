import React from 'react';
import { Linkedin, Instagram, Facebook, Youtube, ArrowRight } from 'lucide-react';
import type { PageView } from '../types';
import {
  FINANCIAL_SUPPORT_CTA,
  SUNDAY_TIMES_BADGE_SUBLINE,
  SUNDAY_TIMES_BADGE_TITLE,
} from '../data/content';

interface FooterProps {
  onNavigate: (view: PageView) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <footer className="bg-[#0E0E0F] border-t border-[#2A2A2A]/80 text-[#A3A3A3] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* Brand Info & Mission */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/brand/chris-buckler-logo-white.png"
                alt="Chris Buckler"
                className="h-9 sm:h-10 w-auto object-contain"
                onError={(e) => {
                  (e.currentTarget as HTMLElement).style.display = 'none';
                }}
              />
              <span className="text-xl font-bold tracking-tight text-[#F5F5F5] font-sans">
                CHRIS BUCKLER
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#6B6B6B] max-w-sm leading-relaxed">
              Helping UK estate agents make the leap from capped, 60-hour employed weeks to profitable, self-employed business ownership — keeping up to 70% of every fee.
            </p>

            <div className="pt-2 text-xs text-[#B59A6D] font-mono leading-relaxed">
              Chief Commercial Officer at The Agency UK (TAUK)
              <span className="block mt-1">
                #74 {SUNDAY_TIMES_BADGE_TITLE} — {SUNDAY_TIMES_BADGE_SUBLINE}
              </span>
            </div>

            {/* Social Media Links from live site */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#161617] border border-[#2A2A2A] flex items-center justify-center text-[#A3A3A3] hover:text-[#B59A6D] hover:border-[#B59A6D] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#161617] border border-[#2A2A2A] flex items-center justify-center text-[#A3A3A3] hover:text-[#B59A6D] hover:border-[#B59A6D] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#161617] border border-[#2A2A2A] flex items-center justify-center text-[#A3A3A3] hover:text-[#B59A6D] hover:border-[#B59A6D] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#161617] border border-[#2A2A2A] flex items-center justify-center text-[#A3A3A3] hover:text-[#B59A6D] hover:border-[#B59A6D] transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links Columns */}
          <div className="md:col-span-4 grid grid-cols-2 gap-6 text-xs">
            <div className="space-y-3">
              <span className="font-bold text-white block uppercase tracking-wider text-[11px]">
                Explore
              </span>
              <ul className="space-y-2.5">
                <li>
                  <button
                    onClick={() => onNavigate('home')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('about')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    About Chris
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('resources')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Free Resources
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('podcast')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Podcast
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('events')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Events & Masterminds
                  </button>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <span className="font-bold text-white block uppercase tracking-wider text-[11px]">
                Free Resources
              </span>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href="https://funnels.chrisbuckler.co.uk/home-page-advanced-commission"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    {FINANCIAL_SUPPORT_CTA}
                  </a>
                </li>
                <li>
                  <a
                    href="https://funnels.chrisbuckler.co.uk/home-page-498370"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Transition Plan
                  </a>
                </li>
                <li>
                  <a
                    href="https://funnels.chrisbuckler.co.uk/buisness-plan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Business Plan Model
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Direct Strategy Booking Card */}
          <div className="md:col-span-3 bg-[#161617] border border-[#2A2A2A] rounded-2xl p-5 space-y-3 text-xs">
            <span className="text-[#B59A6D] font-bold block">Discovery Strategy Call</span>
            <p className="text-[#6B6B6B] leading-relaxed text-[11px]">
              Ready to see what keeping up to 70% of every fee looks like in your local patch? Let's talk.
            </p>
            <button
              onClick={onOpenBooking}
              className="btn-primary w-full mt-2 py-2.5 px-4 rounded-full bg-[#B59A6D] hover:bg-[#c9b088] text-[#0E0E0F] font-semibold shadow-md shadow-[#B59A6D]/20 flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Schedule a Free Call</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Legal & Copyright Strip */}
        <div className="pt-8 border-t border-[#2A2A2A]/70 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6B6B6B]">
          <p>© 2026 Chris Buckler. Designed by Blank Box</p>
          <div className="flex flex-wrap items-center gap-4 text-[11px]">
            <span>Company No 01234567. Registered in England &amp; Wales.</span>
            <span>•</span>
            <a href="https://chrisbuckler.co.uk/?page_id=3" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
