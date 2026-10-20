import React from 'react';
import { Radio, Play, ExternalLink, Headphones, ArrowRight, Share2, Sparkles } from 'lucide-react';
import { Reveal } from './Reveal';
import { PODCAST_EPISODES } from '../data/content';

interface PodcastViewProps {
  onOpenBooking: () => void;
}

export const PodcastView: React.FC<PodcastViewProps> = ({ onOpenBooking }) => {
  return (
    <div className="pt-32 pb-24 bg-[#0A0F1A] text-[#F8F7F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <Reveal from="left" className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-[#C9A66B] font-medium tracking-wide">
              <span>Estate Agency Mastery Podcast</span>
              <span aria-hidden="true">•</span>
              <span>Hosted by Chris Buckler</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12]">
              Honest Conversations with{' '}
              <span className="font-editorial italic font-normal text-[#C9A66B]">
                Real Estate Agency Founders.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
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
                className="px-5 py-3 rounded-xl bg-[#101C30] hover:bg-[#152540] border border-[#1E3352] text-white font-semibold text-xs sm:text-sm flex items-center gap-2 transition-colors"
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
            <div className="rounded-3xl overflow-hidden border border-[#1E3352] shadow-2xl bg-[#101C30]">
              <div className="aspect-[16/10] sm:aspect-[4/3] relative">
                <img
                  src="/images/chris-buckler-podcast.jpg"
                  alt="Chris Buckler Recording Live Studio Podcast Episode"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1423] via-transparent to-transparent opacity-70" />
              </div>
              <div className="p-5 bg-[#101C30] border-t border-[#1E3352] flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-white block">Estate Agency Mastery</span>
                  <span className="text-[#C9A66B]">Weekly In-Depth Interviews</span>
                </div>
                <span className="bg-[#0E827C]/15 text-[#0E827C] border border-[#0E827C]/30 px-3 py-1 rounded-full font-mono font-semibold">
                  New Episodes
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Featured Episode Directory */}
        <div className="space-y-6 border-t border-[#1E3352]/70 pt-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#C9A66B] font-semibold block">
                Episode Directory
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">
                Recent Masterclasses & Guest Interviews
              </h2>
            </div>
            <span className="text-xs text-[#718096] font-mono">
              Updated Bi-Weekly • Available Worldwide
            </span>
          </div>

          <div className="space-y-4">
            {PODCAST_EPISODES.map((ep) => (
              <div
                key={ep.id}
                className="bg-[#101C30] border border-[#1E3352] rounded-2xl p-6 sm:p-8 hover:border-[#0E827C]/60 transition-all duration-300 flex flex-col lg:flex-row lg:items-center justify-between gap-6"
              >
                <div className="space-y-3 max-w-3xl">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs font-mono font-bold text-[#0E827C] bg-[#0E827C]/15 px-2.5 py-1 rounded-md border border-[#0E827C]/30">
                      {ep.episodeNumber}
                    </span>
                    <span className="text-xs text-[#C9A66B] font-semibold">
                      Featured Guest: {ep.guest} ({ep.guestRole})
                    </span>
                    <span className="text-xs text-[#718096] font-mono">
                      • {ep.duration}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#F8F7F3] leading-snug">
                    {ep.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                    {ep.summary}
                  </p>

                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    {ep.topics.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] bg-[#0B1423] text-[#718096] border border-[#1E3352] px-2.5 py-0.5 rounded-full"
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
                    className="px-5 py-2.5 rounded-xl bg-[#0E827C] hover:bg-[#129E97] text-white font-semibold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
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
        <div className="p-8 bg-[#101C30] border border-[#1E3352] rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl font-bold text-white">Have an Extraordinary Estate Agency Story?</h3>
            <p className="text-xs sm:text-sm text-[#94A3B8]">
              We regularly interview self-employed agency founders breaking £200k+ in personal billings.
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="px-6 py-3 rounded-xl bg-[#0E827C]/20 border border-[#0E827C]/40 text-[#0E827C] hover:bg-[#0E827C] hover:text-white font-semibold text-xs sm:text-sm transition-all whitespace-nowrap shrink-0 cursor-pointer"
          >
            Apply as a Guest Speaker
          </button>
        </div>
      </div>
    </div>
  );
};
