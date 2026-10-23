import React from 'react';
import { Radio, Play, ExternalLink, Headphones, ArrowRight, Share2, Sparkles } from 'lucide-react';
import { Reveal } from './Reveal';
import { PODCAST_EPISODES } from '../data/content';

interface PodcastViewProps {
  onOpenBooking: () => void;
}

export const PodcastView: React.FC<PodcastViewProps> = ({ onOpenBooking }) => {
  return (
    <div className="pt-32 pb-24 bg-[#0E0E0F] text-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <Reveal from="left" className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-[#B59A6D] font-medium tracking-wide">
              <span>Estate Agency Mastery Podcast</span>
              <span aria-hidden="true">•</span>
              <span>Hosted by Chris Buckler</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12]">
              Honest Conversations with{' '}
              <span className="font-editorial italic font-normal text-[#B59A6D]">
                Real Estate Agency Founders.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-[#A3A3A3] leading-relaxed">
              No corporate PR. No generic sales mantras. Honest, unfiltered conversations with the agents, founders, and operators who built what you're trying to build — from overcoming corporate employment fears to winning £1M+ instructions at 2% fees.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="https://open.spotify.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-[#1DB954] hover:bg-[#1AA34A] text-white font-bold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-md shadow-[#1DB954]/20"
              >
                <Headphones className="w-4 h-4" />
                <span>Listen on Spotify</span>
              </a>
              <a
                href="https://podcasts.apple.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-[#161617] hover:bg-[#1F1F1F] border border-[#2A2A2A] text-white font-semibold text-xs sm:text-sm flex items-center gap-2 transition-colors"
              >
                <span>Apple Podcasts</span>
              </a>
              <a
                href="https://youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-[#FF0000]/15 hover:bg-[#FF0000]/25 border border-[#FF0000]/40 text-rose-300 font-semibold text-xs sm:text-sm flex items-center gap-2 transition-colors"
              >
                <span>Watch on YouTube</span>
              </a>
            </div>
          </Reveal>

          <Reveal from="right" className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden border border-[#2A2A2A] shadow-2xl bg-[#161617]">
              <div className="aspect-[16/10] sm:aspect-[4/3] relative">
                <img
                  src="/images/chris-buckler-podcast.jpg"
                  alt="Chris Buckler Recording Live Studio Podcast Episode"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0F] via-transparent to-transparent opacity-70" />
              </div>
              <div className="p-5 bg-[#161617] border-t border-[#2A2A2A] flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-white block">Estate Agency Mastery</span>
                  <span className="text-[#B59A6D]">Weekly In-Depth Interviews</span>
                </div>
                <span className="bg-[#B59A6D]/15 text-[#B59A6D] border border-[#B59A6D]/30 px-3 py-1 rounded-full font-mono font-semibold">
                  New Episodes
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Featured Episode Directory */}
        <div className="space-y-6 border-t border-[#2A2A2A]/70 pt-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#B59A6D] font-semibold block">
                Episode Directory
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">
                Recent Masterclasses & Guest Interviews
              </h2>
            </div>
            <span className="text-xs text-[#6B6B6B] font-mono">
              Updated Bi-Weekly • Available Worldwide
            </span>
          </div>

          <div className="space-y-4">
            {PODCAST_EPISODES.map((ep) => (
              <div
                key={ep.id}
                className="bg-[#161617] border border-[#2A2A2A] rounded-2xl p-6 sm:p-8 hover:border-[#B59A6D]/60 transition-all duration-300 flex flex-col lg:flex-row lg:items-center justify-between gap-6"
              >
                <div className="space-y-3 max-w-3xl">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs font-mono font-bold text-[#B59A6D] bg-[#B59A6D]/15 px-2.5 py-1 rounded-md border border-[#B59A6D]/30">
                      {ep.episodeNumber}
                    </span>
                    <span className="text-xs text-[#B59A6D] font-semibold">
                      Featured Guest: {ep.guest} ({ep.guestRole})
                    </span>
                    <span className="text-xs text-[#6B6B6B] font-mono">
                      • {ep.duration}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#F5F5F5] leading-snug">
                    {ep.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#A3A3A3] leading-relaxed">
                    {ep.summary}
                  </p>

                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    {ep.topics.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] bg-[#0E0E0F] text-[#6B6B6B] border border-[#2A2A2A] px-2.5 py-0.5 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row lg:flex-col gap-2 shrink-0">
                  <a
                    href={ep.spotifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-[#B59A6D] hover:bg-[#C9B088] text-[#0E0E0F] font-semibold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Play Episode</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Media & Guest Pitching Banner */}
        <div className="p-8 bg-[#161617] border border-[#2A2A2A] rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl font-bold text-white">Have an Extraordinary Estate Agency Story?</h3>
            <p className="text-xs sm:text-sm text-[#A3A3A3]">
              We regularly interview self-employed agency founders breaking £200k+ in personal billings.
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="px-6 py-3 rounded-xl bg-[#B59A6D]/20 border border-[#B59A6D]/40 text-[#B59A6D] hover:bg-[#B59A6D] hover:text-white font-semibold text-xs sm:text-sm transition-all whitespace-nowrap shrink-0 cursor-pointer"
          >
            Apply as a Guest Speaker
          </button>
        </div>
      </div>
    </div>
  );
};
