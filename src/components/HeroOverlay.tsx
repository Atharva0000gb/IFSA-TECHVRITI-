import React from 'react';
import { ArrowRight, ChevronDown, Cpu, Ticket } from 'lucide-react';
import { TECHVIRITI_CONFIG } from '../data/techviritiData';
import { cyberAudio } from '../utils/audioSynth';

interface HeroOverlayProps {
  scrollProgress: number; // 0.0 to 1.0
  onExploreClick: () => void;
  onRegisterClick?: () => void;
  mousePos: { x: number; y: number };
}

export const HeroOverlay: React.FC<HeroOverlayProps> = ({
  scrollProgress,
  onExploreClick,
  onRegisterClick,
  mousePos
}) => {
  // Fade out hero UI as camera begins flying forward toward the citadel (between 0% and 48%)
  const fadeOutOpacity = Math.max(0, 1 - scrollProgress * 2.5);
  const zoomScale = 1 + scrollProgress * 0.35;

  if (fadeOutOpacity <= 0.01) return null;

  return (
    <div
      className="fixed inset-0 z-20 pointer-events-none flex flex-col justify-between p-6 md:p-12 overflow-hidden transition-opacity duration-300"
      style={{
        opacity: fadeOutOpacity,
        transform: `scale(${zoomScale})`
      }}
    >
      {/* Top spacer to align with Navbar */}
      <div className="h-14" />

      {/* ------------------------------------------------------------- */}
      {/* CENTER: Hero Title Lockup (Centered in the middle of page 1) */}
      {/* ------------------------------------------------------------- */}
      <div
        className="relative z-20 max-w-3xl mx-auto text-center flex flex-col items-center justify-center my-auto transition-transform duration-200 ease-out px-4"
        style={{
          transform: `translate3d(${-mousePos.x * 2.5}px, ${-mousePos.y * 1.5}px, 0)`
        }}
      >
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/60 border border-sky-400/40 text-sky-300 text-xs font-mono tracking-widest uppercase mb-3 backdrop-blur-md shadow-[0_0_15px_rgba(56,189,248,0.2)]">
          <Cpu size={13} className="text-sky-400 animate-pulse" />
          <span>{TECHVIRITI_CONFIG.subtitle}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
          <span>ANNUAL FEST</span>
        </div>

        {/* Huge Title: TECHVIRITI */}
        <h1 className="font-orbitron text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-sky-400/90 drop-shadow-[0_15px_30px_rgba(0,0,0,0.95)] select-none">
          {TECHVIRITI_CONFIG.festName}
        </h1>

        {/* Tagline */}
        <div className="font-rajdhani text-base sm:text-xl md:text-2xl font-semibold tracking-[0.2em] text-slate-200 uppercase mt-2 mb-6 drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] flex items-center justify-center gap-2.5">
          <span>INNOVATE</span>
          <span className="text-sky-400">/</span>
          <span>BUILD</span>
          <span className="text-sky-400">/</span>
          <span>TRANSFORM</span>
        </div>

        {/* Primary CTAs: EXPLORE THE FEST & REGISTER PASS */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 flex-wrap">
          <button
            onClick={() => {
              cyberAudio.playClick(920);
              onExploreClick();
            }}
            className="pointer-events-auto group relative inline-flex items-center gap-3 px-6 sm:px-7 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 via-sky-400 to-blue-600 text-slate-950 font-orbitron text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(56,189,248,0.8)] cursor-pointer border border-sky-300 shadow-[0_4px_25px_rgba(0,0,0,0.5)]"
          >
            <span>EXPLORE THE FEST</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5 text-slate-950" />
            <span className="absolute -inset-1 rounded-xl bg-sky-400/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>

          {onRegisterClick && (
            <button
              onClick={() => {
                cyberAudio.playClick(940);
                onRegisterClick();
              }}
              className="pointer-events-auto inline-flex items-center gap-2 px-5 sm:px-6 py-3.5 rounded-xl bg-amber-500/20 hover:bg-amber-400 text-amber-300 hover:text-slate-950 border border-amber-400/80 font-orbitron text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(251,191,36,0.6)] cursor-pointer backdrop-blur-md"
            >
              <Ticket className="w-4 h-4" />
              <span>REGISTER PASS</span>
            </button>
          )}

          <span className="text-[11px] font-mono tracking-widest text-slate-300/80 drop-shadow-md">
            [{TECHVIRITI_CONFIG.dates}]
          </span>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* BOTTOM BAR: Left Scroll Prompt & Right Stats Metrics          */}
      {/* ------------------------------------------------------------- */}
      <div className="relative z-20 flex justify-between items-end w-full">
        {/* Bottom Left: SCROLL Indicator */}
        <button
          onClick={onExploreClick}
          className="pointer-events-auto flex items-center gap-3 group text-left cursor-pointer bg-transparent border-none p-0 outline-none"
        >
          <div className="w-9 h-9 rounded-lg border border-white/20 bg-black/60 flex items-center justify-center text-sky-400 group-hover:border-sky-400 transition-all backdrop-blur-md shadow-[0_0_15px_rgba(56,189,248,0.25)]">
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </div>
          <div className="flex flex-col">
            <span className="font-orbitron text-xs font-bold tracking-widest text-white group-hover:text-sky-300 transition-colors">
              SCROLL
            </span>
            <span className="text-[9.5px] font-mono text-slate-300 tracking-wider">
              ENTER OBSERVATION DECK →
            </span>
          </div>
        </button>

        {/* Bottom Right: Stats Display (1000+ Participants, 50+ Events, 1 Vision) */}
        <div className="hidden sm:flex items-center gap-6 px-5 py-2.5 rounded-xl bg-black/65 border border-white/15 backdrop-blur-md text-right shadow-2xl">
          {TECHVIRITI_CONFIG.stats.slice(0, 3).map((stat, i) => (
            <div key={i} className="flex flex-col">
              <span className="font-orbitron text-base md:text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-sky-300">
                {stat.value}
              </span>
              <span className="text-[9px] font-mono tracking-wider text-slate-300/90 uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
