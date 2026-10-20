import React, { useState } from 'react';
import { Calendar, MapPin, Users, CheckCircle2, ArrowRight, ShieldCheck, Clock, Ticket } from 'lucide-react';
import { Reveal } from './Reveal';
import { UPCOMING_EVENTS } from '../data/content';
import type { EventItem } from '../types';

interface EventsViewProps {
  onOpenBooking: () => void;
}

export const EventsView: React.FC<EventsViewProps> = ({ onOpenBooking }) => {
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [rsvpName, setRsvpName] = useState('');
  const [rsvpEmail, setRsvpEmail] = useState('');
  const [rsvpAgency, setRsvpAgency] = useState('');
  const [rsvpSuccess, setRsvpSuccess] = useState(false);

  const handleRsvpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!rsvpEmail.includes('@') || !rsvpName.trim()) return;
    setRsvpSuccess(true);
  };

  return (
    <div className="pt-32 pb-24 bg-[#0A0F1A] text-[#F8F7F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <Reveal from="left" className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-[#C9A66B] font-medium tracking-wide">
              <span>Live Masterminds & Workshops</span>
              <span aria-hidden="true">•</span>
              <span>Closed-Door Tactical Training</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12]">
              Live Events Where Top Agents{' '}
              <span className="font-editorial italic font-normal text-[#C9A66B]">
                Share What's Working Right Now.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
              No theoretical corporate presentations. No sales pitches masquerading as workshops. Just intensive, closed-door masterminds where high-performing UK estate agents break down the exact strategies, local prospecting systems, and commission models powering their businesses.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#718096]">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-[#0E827C]" />
                <span className="text-[#94A3B8]">Strictly limited attendance (25–30 max)</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#C9A66B]" />
                <span className="text-[#94A3B8]">Confidential peer-to-peer sharing</span>
              </div>
            </div>
          </Reveal>

          <Reveal from="right" className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden border border-[#1E3352] shadow-2xl bg-[#101C30]">
              <div className="aspect-[4/3] relative">
                <img
                  src="/images/chris-buckler-speaking.jpg"
                  alt="Chris Buckler Speaking at Live Agent Mastermind Session"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1423] via-transparent to-transparent opacity-70" />
              </div>
              <div className="p-5 bg-[#101C30] border-t border-[#1E3352] flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-white block">Keynotes & Masterminds</span>
                  <span className="text-[#C9A66B]">London, Manchester & Nationwide</span>
                </div>
                <span className="bg-[#0E827C]/15 text-[#0E827C] border border-[#0E827C]/30 px-3 py-1 rounded-full font-mono font-semibold">
                  Spring 2026 Season
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Event Schedule Cards */}
        <div className="space-y-6 border-t border-[#1E3352]/70 pt-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#C9A66B] font-semibold block">
                Upcoming Schedule
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">
                2026 Mastermind Dates & Speaking Engagements
              </h2>
            </div>
          </div>

          <div className="space-y-6">
            {UPCOMING_EVENTS.map((event) => (
              <div
                key={event.id}
                className="bg-[#101C30] border border-[#1E3352] rounded-3xl p-7 sm:p-9 hover:border-[#0E827C]/60 transition-all duration-300 flex flex-col lg:flex-row lg:items-center justify-between gap-8 shadow-xl"
              >
                <div className="space-y-4 max-w-3xl">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs font-mono font-bold text-[#C9A66B] bg-[#C9A66B]/15 px-3 py-1 rounded-full border border-[#C9A66B]/30">
                      {event.type}
                    </span>
                    <span className="text-xs font-semibold text-[#0E827C] flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {event.date}
                    </span>
                    <span className="text-xs text-[#718096] flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      {event.location} ({event.venue})
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {event.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                    {event.description}
                  </p>

                  <div className="pt-2">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#718096] block mb-2">
                      Session Highlights:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#F8F7F3]">
                      {event.keyTopics.map((topic) => (
                        <div key={topic} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0E827C] shrink-0" />
                          <span className="text-[#94A3B8]">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3 shrink-0 lg:w-56 text-center lg:text-right">
                  <span className="text-xs text-[#C9A66B] font-mono font-medium block">
                    {event.capacity}
                  </span>
                  <button
                    onClick={() => {
                      setSelectedEvent(event);
                      setRsvpSuccess(false);
                      setRsvpName('');
                      setRsvpEmail('');
                      setRsvpAgency('');
                    }}
                    className="w-full py-3 px-6 rounded-xl bg-[#0E827C] hover:bg-[#129E97] text-white font-semibold text-xs sm:text-sm transition-all shadow-lg shadow-[#0E827C]/25 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Ticket className="w-4 h-4" />
                    <span>Reserve Your Seat</span>
                  </button>
                  <span className="text-[11px] text-[#718096]">
                    Registration requires confirmation
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RSVP Modal */}
        {selectedEvent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B1423]/80 backdrop-blur-md">
            <div className="relative w-full max-w-lg bg-[#101C30] border border-[#1E3352] rounded-3xl shadow-2xl p-6 sm:p-8 text-[#F8F7F3]">
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-5 right-5 text-[#718096] hover:text-white cursor-pointer"
              >
                ✕
              </button>

              {rsvpSuccess ? (
                <div className="text-center py-6 space-y-4">
                  <div className="w-14 h-14 mx-auto rounded-full bg-[#0E827C]/20 border border-[#0E827C] flex items-center justify-center text-[#0E827C]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold">Seat Reserved!</h3>
                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                    Thank you, <span className="text-white font-semibold">{rsvpName}</span>. Your registration for{' '}
                    <span className="text-white font-semibold">{selectedEvent.title}</span> has been received. Venue directions and agenda details will be emailed to{' '}
                    <span className="text-[#0E827C] font-semibold">{rsvpEmail}</span>.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => setSelectedEvent(null)}
                      className="px-6 py-2.5 rounded-lg bg-[#0E827C] text-white text-xs font-semibold cursor-pointer"
                    >
                      Done
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="space-y-1">
                    <span className="text-xs uppercase tracking-wider text-[#C9A66B] font-semibold">
                      {selectedEvent.type} Registration
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold">{selectedEvent.title}</h3>
                    <p className="text-xs text-[#94A3B8]">
                      {selectedEvent.date} • {selectedEvent.location}
                    </p>
                  </div>

                  <form onSubmit={handleRsvpSubmit} className="space-y-3.5 pt-2">
                    <div>
                      <label className="block text-xs font-medium text-[#94A3B8] mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={rsvpName}
                        onChange={(e) => setRsvpName(e.target.value)}
                        placeholder="e.g. Richard Davies"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B1423] border border-[#1E3352] text-sm text-white focus:outline-none focus:border-[#0E827C]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#94A3B8] mb-1">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={rsvpEmail}
                        onChange={(e) => setRsvpEmail(e.target.value)}
                        placeholder="richard@daviesproperty.co.uk"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B1423] border border-[#1E3352] text-sm text-white focus:outline-none focus:border-[#0E827C]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#94A3B8] mb-1">
                        Current Agency / Self-Employed Trading Name
                      </label>
                      <input
                        type="text"
                        value={rsvpAgency}
                        onChange={(e) => setRsvpAgency(e.target.value)}
                        placeholder="e.g. Davies & Partners"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B1423] border border-[#1E3352] text-sm text-white focus:outline-none focus:border-[#0E827C]"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-xl bg-[#0E827C] hover:bg-[#129E97] text-white font-semibold text-sm transition-all shadow-lg shadow-[#0E827C]/25 cursor-pointer mt-2"
                    >
                      Confirm Event Seat
                    </button>
                    <p className="text-center text-[11px] text-[#718096]">
                      Strictly limited attendance to preserve masterminding depth.
                    </p>
                  </form>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
