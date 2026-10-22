import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Calendar } from 'lucide-react';
import type { PageView } from '../types';

interface HeaderProps {
  currentView: PageView;
  onNavigate: (view: PageView) => void;
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView, onNavigate, onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoOk, setLogoOk] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; view: PageView }[] = [
    { label: 'Home', view: 'home' },
    { label: 'About', view: 'about' },
    { label: 'Free Resources', view: 'resources' },
    { label: 'Podcast', view: 'podcast' },
    { label: 'Events', view: 'events' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#0E0E0F]/90 backdrop-blur-xl border-b border-white/10 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.35)]'
          : 'bg-gradient-to-b from-black/50 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          {/* Brand Logo Zone */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 text-left group cursor-pointer focus:outline-none"
            aria-label="Chris Buckler - Home"
          >
            {logoOk ? (
              <img
                src="/brand/chris-buckler-logo-white.png"
                alt="Chris Buckler"
                className="h-10 sm:h-12 w-auto object-contain"
                onError={() => setLogoOk(false)}
              />
            ) : (
              <span className="text-lg font-semibold tracking-tight text-[#F6F3EC]">Chris Buckler</span>
            )}
          </button>

          {/* Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#94A3B8]">
            {navItems.map((item) => {
              const isActive = currentView === item.view;
              return (
                <button
                  key={item.label}
                  onClick={() => onNavigate(item.view)}
                  className={`nav-link whitespace-nowrap cursor-pointer py-1 text-[13px] tracking-wide ${
                    isActive ? 'is-active text-[#F6F3EC]' : 'text-[#C9C3B8] hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* CTA Zone (Desktop & Tablet) */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenBooking}
              className="btn-primary px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-full flex items-center gap-2 cursor-pointer group"
            >
              <Calendar className="w-3.5 h-3.5 text-white/90" />
              <span>Schedule a Discovery Call</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={onOpenBooking}
              className="btn-primary sm:hidden px-3 py-1.5 text-xs font-semibold rounded-full cursor-pointer"
            >
              Book Call
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#94A3B8] hover:text-[#F8F7F3] rounded-lg focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-4 pb-4 border-t border-[#1E3352] bg-[#101C30]/95 backdrop-blur-xl rounded-2xl p-5 shadow-2xl">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = currentView === item.view;
                return (
                  <button
                    key={item.label}
                    onClick={() => {
                      onNavigate(item.view);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`text-left text-sm font-medium py-2.5 px-3 rounded-lg transition-colors flex items-center justify-between ${
                      isActive
                        ? 'bg-[#0E827C]/15 text-white font-semibold border border-[#0E827C]/30'
                        : 'text-[#94A3B8] hover:text-white hover:bg-[#132238]'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#0E827C]" />}
                  </button>
                );
              })}
              <div className="pt-3 mt-1 border-t border-[#1E3352]">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#0E827C] text-white font-semibold text-sm cursor-pointer shadow-lg shadow-[#0E827C]/25"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Schedule a Discovery Call</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
