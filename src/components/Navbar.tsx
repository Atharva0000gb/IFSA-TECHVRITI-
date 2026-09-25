import React, { useState } from 'react';
import { Menu, X, Ticket, Home, Calendar, Trophy, Users, Download } from 'lucide-react';
import { cyberAudio } from '../utils/audioSynth';
import { TECHVIRITI_CONFIG } from '../data/techviritiData';

interface NavbarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
  scrollProgress: number;
  onRegisterClick?: () => void;
  activeWorld?: 'hub' | 'workshops' | 'competitions' | 'events';
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  scrollProgress,
  onRegisterClick,
  activeWorld = 'hub'
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Side navigation dock with symbols only shows on Page 1 (Home Citadel), not inside events/lectures or page 2
  const showSideDock = activeWorld === 'hub' && scrollProgress < 0.55;

  const navItems = [
    {
      id: 'home',
      label: 'HOME',
      sublabel: 'CITADEL',
      icon: Home
    },
    {
      id: 'events-world',
      label: 'CALENDAR',
      sublabel: 'EVENTS & WORKSHOPS',
      icon: Calendar,
      subItems: [
        { id: 'events', label: 'Events' },
        { id: 'workshops', label: 'Workshops' }
      ]
    },
    {
      id: 'competitions',
      label: 'COMPETITIONS',
      sublabel: 'ARENA & TOURNAMENTS',
      icon: Trophy
    },
    {
      id: 'about',
      label: 'ABOUT US',
      sublabel: 'FEST & LEADERSHIP',
      icon: Users
    }
  ];

  const handleNavClick = (id: string) => {
    cyberAudio.playClick(640);
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Header Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-8 md:px-12 py-4 sm:py-5 pointer-events-auto">
        {/* Top Left: IFSA Logo (Click to Return to Citadel) */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 group cursor-pointer text-left bg-transparent border-none p-0 outline-none"
          title="IFSA - Return to Citadel"
        >
          {/* Futuristic Hexagonal Geometric IFSA Mark */}
          <div className="relative w-10 h-10 flex items-center justify-center rounded-lg bg-slate-900/80 border border-sky-400/40 glow-cyan transition-transform duration-300 group-hover:scale-105">
            <svg className="w-6 h-6 text-sky-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5" className="stroke-sky-400/70" />
              <polyline points="12 2 12 12 22 8.5" className="stroke-sky-300" />
              <polyline points="12 12 2 8.5" className="stroke-sky-400" />
              <circle cx="12" cy="12" r="2.5" fill="#38bdf8" />
            </svg>
            <div className="absolute -inset-0.5 rounded-lg bg-sky-400/20 blur opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          <div className="flex items-center">
            <span className="font-orbitron text-2xl font-black tracking-widest text-white group-hover:text-sky-300 transition-colors drop-shadow-[0_0_12px_rgba(56,189,248,0.5)]">
              IFSA
            </span>
          </div>
        </button>

        {/* Top Center: Telemetry HUD (hidden on small screens) */}
        <div className="hidden lg:flex items-center gap-6 px-4 py-1.5 rounded-full bg-slate-950/60 border border-slate-800/80 text-[11px] font-mono text-slate-400 backdrop-blur-md">
          <span className="flex items-center gap-1.5 text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            SYS_ONLINE
          </span>
          <span className="text-slate-600">|</span>
          <span>LAT: 28.6139° N</span>
          <span>ALT: 4,200m</span>
          <span className="text-slate-600">|</span>
          <span className="text-sky-400">CAMERA DOLBY: {Math.round(scrollProgress * 100)}%</span>
        </div>

        {/* Top Right: REGISTER BUTTON + Audio + Hamburger */}
        <div className="flex items-center gap-2.5 sm:gap-3.5">
          {onRegisterClick && (
            <button
              onClick={() => {
                cyberAudio.playClick(940);
                onRegisterClick();
              }}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-slate-950 font-orbitron font-bold text-xs tracking-wider uppercase hover:shadow-[0_0_20px_rgba(251,191,36,0.7)] transition-all hover:scale-105 active:scale-95 cursor-pointer border border-amber-300"
            >
              <Ticket size={13} className="text-slate-950" />
              <span>REGISTER</span>
            </button>
          )}

          {/* Hamburger Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-10 h-10 rounded-lg flex items-center justify-center bg-slate-900/80 border border-slate-700/80 hover:border-sky-400/60 text-white cursor-pointer transition-all hover:scale-105"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} className="text-sky-400" /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Left Vertical Navigation Dock with Icons - ONLY on Page 1 (Home Citadel) */}
      {showSideDock && (
        <aside className="fixed left-4 sm:left-6 md:left-8 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-3 pointer-events-auto p-2 rounded-2xl bg-slate-950/80 border border-slate-800/90 backdrop-blur-xl shadow-[0_0_30px_rgba(0,0,0,0.85)] animate-fadeIn">
          <div className="h-3 w-[1px] bg-gradient-to-b from-transparent to-sky-400/60" />

          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive =
              activeSection === item.id ||
              (item.id === 'events-world' &&
                (activeSection === 'events' || activeSection === 'workshops' || activeSection === 'events-world'));

            return (
              <div key={item.id} className="relative group">
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`relative w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-sky-500/25 border border-sky-400 text-sky-300 shadow-[0_0_20px_rgba(56,189,248,0.5)] scale-105'
                      : 'bg-slate-900/60 border border-slate-700/50 text-slate-400 hover:text-white hover:border-sky-400/60 hover:bg-slate-800/80 hover:scale-105'
                  }`}
                  title={item.label}
                >
                  <Icon size={18} className={isActive ? 'text-sky-300 animate-pulse' : 'text-slate-400 group-hover:text-sky-300'} />
                  {isActive && (
                    <span className="absolute -left-1 top-1/2 -translate-y-1/2 w-1.5 h-4 rounded-r bg-sky-400 shadow-[0_0_10px_#38bdf8]" />
                  )}
                </button>

                {/* Hover Flyout with details and direct sub-chips for Events/Workshops */}
                <div className="absolute left-14 top-1/2 -translate-y-1/2 hidden group-hover:flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-slate-950/95 border border-sky-500/40 backdrop-blur-2xl shadow-[0_0_25px_rgba(56,189,248,0.35)] whitespace-nowrap z-50 pointer-events-auto">
                  <div className="flex flex-col text-left">
                    <span className="font-orbitron text-xs font-bold text-white tracking-wider">
                      {item.label}
                    </span>
                    {item.sublabel && (
                      <span className="font-mono text-[9.5px] text-sky-400 tracking-wider uppercase">
                        {item.sublabel}
                      </span>
                    )}
                  </div>

                  {item.subItems && (
                    <div className="flex items-center gap-1.5 ml-2 pl-2 border-l border-white/15">
                      {item.subItems.map((sub) => (
                        <button
                          key={sub.id}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleNavClick(sub.id);
                          }}
                          className="px-2 py-0.5 rounded bg-sky-950/90 border border-sky-400/50 hover:bg-sky-400 hover:text-slate-950 text-[10px] font-mono text-sky-300 uppercase transition-all cursor-pointer font-bold shadow-sm"
                        >
                          {sub.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          <div className="h-3 w-[1px] bg-gradient-to-t from-transparent to-sky-400/60" />
        </aside>
      )}

      {/* Fullscreen Cyber Menu Drawer (when hamburger clicked) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-2xl flex flex-col justify-between p-8 md:p-16 animate-fadeIn">
          <div className="flex justify-between items-center border-b border-slate-800 pb-6">
            <div className="flex items-center gap-3">
              <span className="font-orbitron text-2xl font-black tracking-widest text-sky-400">
                TECHVIRITI
              </span>
              <span className="text-xs font-mono text-slate-400 px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
                NAVIGATION MATRIX
              </span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-10 h-10 rounded-lg flex items-center justify-center bg-slate-900 border border-slate-700 text-white hover:text-sky-400 cursor-pointer"
            >
              <X size={20} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-auto">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.id} className="flex flex-col gap-1.5">
                    <button
                      onClick={() => handleNavClick(item.id)}
                      className="flex items-center justify-between p-3.5 rounded-xl border border-slate-800/80 bg-slate-900/50 hover:bg-sky-950/40 hover:border-sky-400/50 transition-all text-left group cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-400/30 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform">
                          <Icon size={16} />
                        </div>
                        <div className="flex flex-col">
                          <span className="font-orbitron text-base sm:text-lg text-white group-hover:text-sky-300 font-bold">
                            {item.label}
                          </span>
                          {item.sublabel && (
                            <span className="font-mono text-[10px] text-sky-400/80">
                              {item.sublabel}
                            </span>
                          )}
                        </div>
                      </div>
                      <span className="font-mono text-xs text-sky-400/70">OPEN →</span>
                    </button>

                    {item.subItems && (
                      <div className="grid grid-cols-2 gap-2 pl-4">
                        {item.subItems.map((sub) => (
                          <button
                            key={sub.id}
                            onClick={() => handleNavClick(sub.id)}
                            className="p-2 rounded-lg bg-slate-900/80 border border-sky-500/30 text-sky-300 hover:text-white font-mono text-xs text-left cursor-pointer flex items-center justify-between"
                          >
                            <span>{sub.label}</span>
                            <span>→</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              {onRegisterClick && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    cyberAudio.playClick(940);
                    onRegisterClick();
                  }}
                  className="flex items-center justify-between p-3.5 rounded-xl border border-amber-400/80 bg-gradient-to-r from-amber-500/20 to-amber-600/30 text-left group cursor-pointer shadow-lg mt-1"
                >
                  <span className="font-orbitron text-base text-amber-300 font-black flex items-center gap-2">
                    <Ticket size={16} />
                    REGISTER FOR FEST
                  </span>
                  <span className="font-mono text-xs text-amber-400 font-bold">GET PASS →</span>
                </button>
              )}
            </div>

            <div className="hidden md:flex flex-col justify-between p-6 rounded-xl border border-sky-500/20 bg-gradient-to-br from-sky-950/30 to-slate-950 text-slate-300">
              <div>
                <span className="text-xs font-mono text-sky-400 uppercase tracking-widest">About Fest</span>
                <h3 className="font-orbitron text-xl font-bold text-white mt-1">
                  {TECHVIRITI_CONFIG.festName} {TECHVIRITI_CONFIG.year}
                </h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  {TECHVIRITI_CONFIG.collegeName}’s annual flagship technology festival. Experience immersive 3D robotics, agentic AI, cyber warfare arenas, and visionary industry keynotes.
                </p>
              </div>

              <div className="space-y-2 border-t border-slate-800/80 pt-4 text-xs font-mono text-slate-400">
                <div className="flex justify-between">
                  <span>DATES:</span>
                  <span className="text-white">{TECHVIRITI_CONFIG.dates}</span>
                </div>
                <div className="flex justify-between">
                  <span>PRIZE POOL:</span>
                  <span className="text-amber-400 font-bold">₹5,00,000+</span>
                </div>
                <div className="flex justify-between">
                  <span>VENUE:</span>
                  <span className="text-white">Main Citadel & Virtual Nodes</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-6 flex flex-wrap justify-between items-center text-xs font-mono text-slate-500 gap-4">
            <span>© 2026 {TECHVIRITI_CONFIG.organizer} // ALL RIGHTS RESERVED</span>
            <span className="text-sky-400">{TECHVIRITI_CONFIG.tagline}</span>
          </div>
        </div>
      )}
    </>
  );
};
