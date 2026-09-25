import React from 'react';
import { ArrowRight, ChevronLeft, Sparkles } from 'lucide-react';
import { cyberAudio } from '../utils/audioSynth';

interface PortalWorldProps {
  onSelectWorld: (worldId: 'events' | 'workshops' | 'competitions') => void;
  onBackToHome: () => void;
  onOpenRegister?: () => void;
  scrollProgress: number;
}

export const PortalWorld: React.FC<PortalWorldProps> = ({
  onSelectWorld,
  onBackToHome,
  scrollProgress
}) => {
  // Revealed once the camera completes the forward flight through the clouds (scrollProgress >= 0.6)
  const isVisible = scrollProgress >= 0.6;
  const entryOpacity = Math.min(1, Math.max(0, (scrollProgress - 0.6) / 0.18));

  if (!isVisible && entryOpacity <= 0.02) return null;

  const handlePortalClick = (worldId: 'events' | 'workshops' | 'competitions') => {
    cyberAudio.playClick(880);
    onSelectWorld(worldId);
  };

  return (
    <div
      className="fixed inset-0 z-30 flex flex-col justify-between overflow-hidden transition-opacity duration-500 select-none"
      style={{ opacity: entryOpacity }}
    >
      {/* Photo 2: Cyber Deck Observation Horizon with Girl Observer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/cyber_deck_girl.jpg"
          alt="TECHVIRITI Cyber Deck Observation Horizon with Hologram Portals"
          className="w-full h-full object-cover object-center filter brightness-105 contrast-[1.03]"
        />
        {/* Subtle cinematic top and bottom vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/75 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(56,189,248,0.12),transparent_70%)] pointer-events-none" />
      </div>

      {/* ------------------------------------------------------------- */}
      {/* 3 HOLOGRAPHIC PORTAL SCREENS: Floating directly in front of the observer */}
      {/* ------------------------------------------------------------- */}
      <div className="relative z-20 w-full max-w-6xl mx-auto px-4 md:px-8 mt-20 sm:mt-24 md:mt-24 mb-auto pointer-events-auto">
        {/* Floating Guide Label */}
        <div className="text-center mb-3 sm:mb-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-950/65 border border-cyan-400/40 text-[11px] font-mono tracking-widest text-cyan-300 backdrop-blur-md uppercase shadow-[0_0_15px_rgba(56,189,248,0.25)]">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>INTERACTIVE HOLOGRAM INTERFACE // SELECT SECTOR</span>
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 items-stretch">

          {/* 1. LEFT PORTAL: EVENTS ("BUILD A BETTER TOMORROW") */}
          <div
            onClick={() => handlePortalClick('events')}
            onMouseEnter={() => cyberAudio.playHover(420)}
            className="group relative cursor-pointer rounded-2xl p-5 sm:p-6 transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.03] flex flex-col justify-between"
            style={{
              background: 'linear-gradient(180deg, rgba(8, 47, 73, 0.45) 0%, rgba(2, 6, 23, 0.65) 100%)',
              border: '1.5px solid rgba(56, 189, 248, 0.65)',
              boxShadow: '0 8px 32px rgba(2, 132, 199, 0.35), inset 0 0 20px rgba(56, 189, 248, 0.2)',
              backdropFilter: 'blur(8px)'
            }}
          >
            {/* Holographic Glowing Corners */}
            <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-sky-400" />
            <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-sky-400" />
            <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-sky-400" />
            <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-sky-400" />

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="px-2.5 py-0.5 rounded bg-sky-950/80 border border-sky-400/60 text-sky-300 font-mono text-[10px] tracking-widest uppercase font-bold">
                  SECTOR 01
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-sky-400 shadow-[0_0_10px_#38bdf8] animate-pulse" />
              </div>

              <h3 className="font-orbitron text-xl sm:text-2xl font-black text-white tracking-wider mb-1 group-hover:text-sky-300 transition-colors drop-shadow-md">
                EVENTS
              </h3>
              <p className="font-mono text-[11px] text-sky-300 tracking-wider uppercase font-bold mb-2 drop-shadow">
                BUILD A BETTER TOMORROW
              </p>
              <p className="text-white/80 text-xs leading-relaxed mb-4 font-sans line-clamp-2">
                Keynotes, technical exhibitions, planetary talks, and drone robotics showcases.
              </p>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-sky-500/30">
              <span className="text-sky-400 font-mono text-xs font-bold tracking-wider uppercase group-hover:text-white transition-colors flex items-center gap-1.5">
                <span>ENTER EVENTS</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="w-7 h-7 rounded-full bg-sky-500/20 border border-sky-400/60 flex items-center justify-center text-sky-300 group-hover:bg-sky-400 group-hover:text-black transition-all">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

          {/* 2. CENTER PORTAL: LECTURES & COMPETITIONS ("CHASE YOUR DREAMS") */}
          <div
            onClick={() => handlePortalClick('competitions')}
            onMouseEnter={() => cyberAudio.playHover(520)}
            className="group relative cursor-pointer rounded-2xl p-5 sm:p-6 transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.03] flex flex-col justify-between"
            style={{
              background: 'linear-gradient(180deg, rgba(69, 39, 10, 0.45) 0%, rgba(20, 12, 4, 0.65) 100%)',
              border: '1.5px solid rgba(251, 191, 36, 0.7)',
              boxShadow: '0 8px 32px rgba(217, 119, 6, 0.35), inset 0 0 20px rgba(251, 191, 36, 0.2)',
              backdropFilter: 'blur(8px)'
            }}
          >
            {/* Holographic Glowing Corners */}
            <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-amber-400" />
            <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-amber-400" />
            <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-amber-400" />
            <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-amber-400" />

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="px-2.5 py-0.5 rounded bg-amber-950/80 border border-amber-400/60 text-amber-300 font-mono text-[10px] tracking-widest uppercase font-bold">
                  SECTOR 02
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_10px_#fbbf24] animate-pulse" />
              </div>

              <h3 className="font-orbitron text-xl sm:text-2xl font-black text-white tracking-wider mb-1 group-hover:text-amber-300 transition-colors drop-shadow-md">
                LECTURES & COMPS
              </h3>
              <p className="font-mono text-[11px] text-amber-300 tracking-wider uppercase font-bold mb-2 drop-shadow">
                CHASE YOUR DREAMS
              </p>
              <p className="text-white/80 text-xs leading-relaxed mb-4 font-sans line-clamp-2">
                Competitive engineering tournaments, 24H Hackathon, and ₹5,00,000+ bounty pool.
              </p>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-amber-500/30">
              <span className="text-amber-400 font-mono text-xs font-bold tracking-wider uppercase group-hover:text-white transition-colors flex items-center gap-1.5">
                <span>ENTER ARENA</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="w-7 h-7 rounded-full bg-amber-500/20 border border-amber-400/60 flex items-center justify-center text-amber-300 group-hover:bg-amber-400 group-hover:text-black transition-all">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

          {/* 3. RIGHT PORTAL: WORKSHOPS ("CREATE INNOVATION") */}
          <div
            onClick={() => handlePortalClick('workshops')}
            onMouseEnter={() => cyberAudio.playHover(620)}
            className="group relative cursor-pointer rounded-2xl p-5 sm:p-6 transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.03] flex flex-col justify-between"
            style={{
              background: 'linear-gradient(180deg, rgba(59, 7, 100, 0.45) 0%, rgba(20, 5, 35, 0.65) 100%)',
              border: '1.5px solid rgba(192, 132, 252, 0.7)',
              boxShadow: '0 8px 32px rgba(168, 85, 247, 0.35), inset 0 0 20px rgba(192, 132, 252, 0.2)',
              backdropFilter: 'blur(8px)'
            }}
          >
            {/* Holographic Glowing Corners */}
            <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-purple-400" />
            <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-purple-400" />
            <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-purple-400" />
            <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-purple-400" />

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="px-2.5 py-0.5 rounded bg-purple-950/80 border border-purple-400/60 text-purple-300 font-mono text-[10px] tracking-widest uppercase font-bold">
                  SECTOR 03
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-purple-400 shadow-[0_0_10px_#c084fc] animate-pulse" />
              </div>

              <h3 className="font-orbitron text-xl sm:text-2xl font-black text-white tracking-wider mb-1 group-hover:text-purple-300 transition-colors drop-shadow-md">
                WORKSHOPS
              </h3>
              <p className="font-mono text-[11px] text-purple-300 tracking-wider uppercase font-bold mb-2 drop-shadow">
                CREATE INNOVATION
              </p>
              <p className="text-white/80 text-xs leading-relaxed mb-4 font-sans line-clamp-2">
                Masterclasses in Agentic AI, Large Language Models, Deep Learning, Cloud, and Robotics.
              </p>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-purple-500/30">
              <span className="text-purple-400 font-mono text-xs font-bold tracking-wider uppercase group-hover:text-white transition-colors flex items-center gap-1.5">
                <span>ENTER LABS</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="w-7 h-7 rounded-full bg-purple-500/20 border border-purple-400/60 flex items-center justify-center text-purple-300 group-hover:bg-purple-400 group-hover:text-black transition-all">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar Direct Navigation & Quick Actions */}
      <div className="relative z-20 w-full px-4 sm:px-8 md:px-12 pb-5 sm:pb-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-white/80 border-t border-white/15 pt-3.5 bg-black/75 backdrop-blur-md pointer-events-auto">
        <div className="flex items-center gap-3">
          <button
            onClick={onBackToHome}
            className="flex items-center gap-1.5 text-cyan-400 hover:text-white transition-colors cursor-pointer font-bold tracking-wider"
          >
            <ChevronLeft size={14} />
            <span>RETURN TO CITADEL</span>
          </button>
          <span className="text-white/40">|</span>
          <span className="text-slate-300 text-[11px] hidden md:inline">OBSERVATION HORIZON VIEW</span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-center">
          <button
            onClick={() => handlePortalClick('events')}
            className="px-3 py-1.5 rounded-lg bg-sky-950/80 border border-sky-400/50 text-sky-300 hover:text-white hover:border-sky-300 transition-all cursor-pointer font-mono text-[11px]"
          >
            [1] EVENTS
          </button>
          <button
            onClick={() => handlePortalClick('competitions')}
            className="px-3 py-1.5 rounded-lg bg-amber-950/80 border border-amber-400/50 text-amber-300 hover:text-white hover:border-amber-300 transition-all cursor-pointer font-mono text-[11px]"
          >
            [2] LECTURES & COMPS
          </button>
          <button
            onClick={() => handlePortalClick('workshops')}
            className="px-3 py-1.5 rounded-lg bg-purple-950/80 border border-purple-400/50 text-purple-300 hover:text-white hover:border-purple-300 transition-all cursor-pointer font-mono text-[11px]"
          >
            [3] WORKSHOPS
          </button>
        </div>
      </div>
    </div>
  );
};
