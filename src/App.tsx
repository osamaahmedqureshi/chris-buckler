/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PillarsSection } from './components/PillarsSection';
import { CommissionCalculator } from './components/CommissionCalculator';
import { TestimonialsSection } from './components/TestimonialsSection';
import { AboutView } from './components/AboutView';
import { ResourcesView } from './components/ResourcesView';
import { PodcastView } from './components/PodcastView';
import { EventsView } from './components/EventsView';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Reveal } from './components/Reveal';
import { CustomCursor } from './components/CustomCursor';
import type { PageView } from './types';

export default function App() {
  const [currentView, setCurrentView] = useState<PageView>('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [initialInterestNote, setInitialInterestNote] = useState('');

  // Handle URL hash changes or smooth scroll to top on view change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  const handleNavigate = (view: PageView) => {
    setCurrentView(view);
  };

  const handleOpenBooking = (interestNote = '') => {
    setInitialInterestNote(interestNote);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setInitialInterestNote('');
  };

  return (
    <div className="min-h-screen bg-[#0A0F1A] text-[#F8F7F3] selection:bg-[#0E827C] selection:text-white flex flex-col justify-between">
      <CustomCursor />
      {/* 3-Zone Fixed Navbar with Real Logo */}
      <Header
        currentView={currentView}
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking('Header CTA - Discovery Call')}
      />

      {/* Main Content Area Routing */}
      <main className="flex-1">
        {currentView === 'home' && (
          <>
            {/* 1. Hero Section with Real Chris Buckler Portrait & Trusted Headshots */}
            <Hero
              onOpenBooking={() => handleOpenBooking('Hero CTA - Strategy Call')}
              onNavigate={handleNavigate}
            />

            {/* 2. Four Core Pillars: Coaching, Events, Podcasts, Keynotes */}
            <PillarsSection
              onNavigate={handleNavigate}
              onOpenBooking={() => handleOpenBooking('Pillars - 1-on-1 Mentorship')}
            />

            {/* 3. Interactive 70% Commission vs. Employed Salary Simulator */}
            <CommissionCalculator
              onOpenBooking={() => handleOpenBooking('Calculator - 70% Commission Model')}
            />

            <section className="py-24 sm:py-32 bg-[#0B0E13] relative overflow-hidden">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                  <Reveal from="left" className="lg:col-span-6">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="photo-zoom rounded-[1.4rem] overflow-hidden border border-white/10 col-span-2">
                        <img src="/images/chris-buckler-headshot.png" alt="Chris Buckler" className="w-full h-[340px] object-cover object-top" />
                      </div>
                      <div className="photo-zoom rounded-[1.2rem] overflow-hidden border border-white/10">
                        <img src="/images/chris-buckler-coaching.jpg" alt="Chris coaching" className="w-full h-36 object-cover" />
                      </div>
                      <div className="photo-zoom rounded-[1.2rem] overflow-hidden border border-white/10">
                        <img src="/images/chris-buckler-office.jpg" alt="Working from the studio" className="w-full h-36 object-cover" />
                      </div>
                    </div>
                  </Reveal>

                  <Reveal from="right" className="lg:col-span-6 space-y-5">
                    <p className="text-xs tracking-[0.28em] uppercase text-[#C6A46A]">About Chris</p>
                    <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-[#F6F3EC] leading-[1.05]">
                      Built, scaled, and
                      <span className="font-editorial italic font-normal text-[#C6A46A]"> sold.</span>
                    </h2>
                    <p className="text-base text-[#B7B1A6] leading-relaxed">
                      Chris has spent 15 years doing what he now teaches: building self-employed estate agency models from the ground up. He founded The Estate Agency, scaled it nationally, and sold it to TAUK in 2025, where he now serves as Chief Commercial Officer.
                    </p>
                    <p className="text-base text-[#B7B1A6] leading-relaxed">
                      He has represented buyers and sellers in prime markets including Dubai, New York, Sydney, and Kuala Lumpur — and now helps UK agents keep more of every fee.
                    </p>
                    <button
                      onClick={() => handleNavigate('about')}
                      className="btn-ghost inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 text-white font-semibold text-sm cursor-pointer"
                    >
                      Read the full story
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </Reveal>
                </div>
              </div>
            </section>

            {/* 5. Real Client Testimonials ("You're in great company") */}
            <TestimonialsSection
              onOpenBooking={() => handleOpenBooking('Testimonials - Partner Network')}
            />

            <section className="relative py-28 overflow-hidden">
              <img src="/images/chris-buckler-hero.png" alt="" className="absolute inset-0 w-full h-full object-cover object-center opacity-30" />
              <div className="absolute inset-0 bg-gradient-to-b from-[#07090d] via-[#07090d]/75 to-[#07090d]" />
              <Reveal className="relative z-10 max-w-3xl mx-auto px-4 text-center space-y-6">
                <p className="text-xs tracking-[0.28em] uppercase text-[#C6A46A]">Ready to grow</p>
                <h2 className="text-4xl sm:text-6xl font-semibold tracking-tight text-white">
                  Keep more of
                  <span className="font-editorial italic font-normal text-[#C6A46A]"> every fee.</span>
                </h2>
                <p className="text-base sm:text-lg text-[#D5D0C6] leading-relaxed">
                  Traditional agencies have capped income and limited freedom for too long. There is a model where you keep more of what you earn, work the hours that suit you, and build something that is yours.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={() => handleOpenBooking('Ready to Grow - Strategy Call')}
                    className="btn-primary w-full sm:w-auto px-8 py-4 rounded-full bg-[#0E827C] text-white font-semibold flex items-center justify-center gap-2 cursor-pointer"
                  >
                    Book a free 15-minute call
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleNavigate('resources')}
                    className="btn-ghost w-full sm:w-auto px-6 py-4 rounded-full border border-white/20 text-white font-medium cursor-pointer"
                  >
                    Explore free resources
                  </button>
                </div>
                <div className="pt-2 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-[#C9C3B8]">
                  <span className="inline-flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-[#C6A46A]" /> Direct with Chris</span>
                  <span className="inline-flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#C6A46A]" /> Confidential</span>
                </div>
              </Reveal>
            </section>
          </>
        )}

        {currentView === 'about' && (
          <AboutView onOpenBooking={() => handleOpenBooking('About View - Discovery Call')} />
        )}

        {currentView === 'resources' && (
          <ResourcesView onOpenBooking={() => handleOpenBooking('Resources View - Discovery Call')} />
        )}

        {currentView === 'podcast' && (
          <PodcastView onOpenBooking={() => handleOpenBooking('Podcast View - Guest Inquiries')} />
        )}

        {currentView === 'events' && (
          <EventsView onOpenBooking={() => handleOpenBooking('Events View - Mastermind Inquiries')} />
        )}
      </main>

      {/* Footer with Registered Company Details & Social Links */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking('Footer - Discovery Call')}
      />

      {/* Interactive 15-Minute Discovery Call Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialInterest={initialInterestNote}
      />
    </div>
  );
}
