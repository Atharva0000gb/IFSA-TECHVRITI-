import React, { useState } from 'react';
import { COMPETITIONS, CompetitionItem } from '../data/techviritiData';
import { Trophy, Users, Clock, ShieldAlert, Award, ArrowRight, Zap } from 'lucide-react';
import { cyberAudio } from '../utils/audioSynth';

interface CompetitionsSectionProps {
  onRegisterTeam: (item: { title: string; category: string; price: string }) => void;
  onBackToHub: () => void;
}

export const CompetitionsSection: React.FC<CompetitionsSectionProps> = ({
  onRegisterTeam,
  onBackToHub
}) => {
  const [selectedComp, setSelectedComp] = useState<CompetitionItem>(COMPETITIONS[0]);

  return (
    <section id="competitions" className="relative z-30 min-h-screen px-6 md:px-12 py-24 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-slate-800 pb-8">
        <div>
          <button
            onClick={onBackToHub}
            className="text-xs font-mono text-amber-400 hover:text-amber-300 flex items-center gap-1.5 mb-3 cursor-pointer bg-black/60 border border-amber-400/40 px-3 py-1.5 rounded-lg w-fit transition-all hover:bg-amber-950/60"
          >
            ← BACK TO OBSERVATION DECK (HOLOGRAMS)
          </button>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400 glow-amber animate-pulse" />
            <span className="text-xs font-mono tracking-widest text-amber-400 uppercase">SECTOR_03 // ARENA</span>
          </div>
          <h2 className="font-orbitron text-3xl sm:text-5xl font-black text-white tracking-tight mt-1">
            CYBERNETIC ARENA
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl mt-2 font-space">
            High-stakes competitive engineering tournaments. ₹5,00,000+ total bounty pool. Test your limits across hackathons, speed coding, combat robotics, and AI warfare.
          </p>
        </div>

        {/* Total Bounties Badge */}
        <div className="px-5 py-3 rounded-xl bg-amber-950/40 border border-amber-500/30 flex items-center gap-4 glow-amber">
          <Trophy className="w-8 h-8 text-amber-400 animate-pulse" />
          <div>
            <span className="text-[10px] font-mono tracking-widest text-amber-300/80 block uppercase">
              TOTAL CUMULATIVE BOUNTY
            </span>
            <span className="font-orbitron text-2xl font-black text-amber-400">
              ₹5,00,000+
            </span>
          </div>
        </div>
      </div>

      {/* Interactive Arena Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Competition Arena Selector Buttons */}
        <div className="lg:col-span-5 flex flex-col gap-3">
          {COMPETITIONS.map((comp) => {
            const isSelected = selectedComp.id === comp.id;
            return (
              <div
                key={comp.id}
                onClick={() => {
                  cyberAudio.playClick(780);
                  setSelectedComp(comp);
                }}
                className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer flex items-center justify-between group ${
                  isSelected
                    ? 'bg-amber-950/40 border-amber-400/80 shadow-[0_0_25px_rgba(245,158,11,0.2)]'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900/90'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-amber-300 font-bold">
                      {comp.category}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      {comp.duration}
                    </span>
                  </div>
                  <h4 className="font-orbitron text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                    {comp.title}
                  </h4>
                </div>

                <div className="text-right">
                  <span className="text-xs font-mono text-slate-400 block">PRIZE POOL</span>
                  <span className="font-orbitron text-sm font-black text-amber-400">
                    {comp.prizePool}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Selected Tournament Terminal Holo-Screen */}
        <div className="lg:col-span-7 rounded-2xl border border-amber-500/40 bg-gradient-to-b from-slate-900/90 via-slate-950/95 to-slate-950 p-6 md:p-8 backdrop-blur-xl relative overflow-hidden flex flex-col justify-between glow-amber">
          {/* Top Info */}
          <div>
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4 pb-4 border-b border-slate-800">
              <div>
                <span className="text-xs font-mono text-amber-400 tracking-widest uppercase">
                  {selectedComp.category} ARENA // LIVE CONTEST
                </span>
                <h3 className="font-orbitron text-2xl sm:text-3xl font-black text-white mt-1">
                  {selectedComp.title}
                </h3>
              </div>
              <div className="px-4 py-2 rounded-lg bg-amber-500/10 border border-amber-400/40 text-right">
                <span className="text-[10px] font-mono text-slate-400 block">FIRST PLACE & CASH POOL</span>
                <span className="font-orbitron text-2xl font-black text-amber-400">{selectedComp.prizePool}</span>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed font-space mb-6">
              {selectedComp.description}
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-3 p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 text-xs font-mono mb-6">
              <div>
                <span className="text-slate-500 block text-[10.5px]">TEAM SQUAD</span>
                <span className="text-white font-bold">{selectedComp.teamSize}</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[10.5px]">DURATION</span>
                <span className="text-white font-bold">{selectedComp.duration}</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[10.5px]">REGISTRATION DEADLINE</span>
                <span className="text-amber-400 font-bold">{selectedComp.registrationDeadline}</span>
              </div>
            </div>

            {/* Tournament Stages */}
            <div className="mb-6">
              <h4 className="text-xs font-mono tracking-widest text-slate-400 uppercase mb-3 flex items-center gap-2">
                <Zap size={14} className="text-amber-400" />
                <span>Tournament Phases & Evaluation Protocol</span>
              </h4>
              <div className="space-y-2.5">
                {selectedComp.rounds.map((rnd, i) => (
                  <div key={i} className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-xs flex gap-3">
                    <span className="font-orbitron font-bold text-amber-400 shrink-0">{rnd.phase}:</span>
                    <div>
                      <span className="font-bold text-white block">{rnd.title}</span>
                      <span className="text-slate-400 font-space">{rnd.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Rules snippet */}
            <div className="mb-6">
              <h4 className="text-xs font-mono tracking-widest text-slate-400 uppercase mb-2">Arena Invariants:</h4>
              <ul className="text-xs text-slate-400 font-space space-y-1 list-disc pl-4">
                {selectedComp.rules.map((rule, idx) => (
                  <li key={idx}>{rule}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action CTA */}
          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => {
                cyberAudio.playClick(960);
                onRegisterTeam({
                  title: selectedComp.title,
                  category: selectedComp.category,
                  price: 'Free Entry'
                });
              }}
              className="flex-1 py-3.5 px-6 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-orange-500 text-slate-950 font-orbitron font-black text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(245,158,11,0.6)] cursor-pointer text-center"
            >
              REGISTER SQUAD FOR {selectedComp.category} →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
