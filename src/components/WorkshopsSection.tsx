import React, { useState } from 'react';
import { WORKSHOPS, WorkshopItem } from '../data/techviritiData';
import { Terminal, Clock, MapPin, Tag, Users, CheckCircle2, ArrowRight } from 'lucide-react';
import { cyberAudio } from '../utils/audioSynth';

interface WorkshopsSectionProps {
  onRegister: (item: { title: string; category: string; price: string }) => void;
  onBackToHub: () => void;
}

export const WorkshopsSection: React.FC<WorkshopsSectionProps> = ({ onRegister, onBackToHub }) => {
  const [selectedCategory, setSelectedCategory] = useState<'ALL' | 'AI & DATA' | 'TECHNOLOGY & CYBERSECURITY'>('ALL');
  const [activeModalItem, setActiveModalItem] = useState<WorkshopItem | null>(null);

  const filteredWorkshops = WORKSHOPS.filter(
    (w) => selectedCategory === 'ALL' || w.category === selectedCategory
  );

  return (
    <section id="workshops" className="relative z-30 min-h-screen px-6 md:px-12 py-24 max-w-7xl mx-auto">
      {/* Sector Header with Navigation breadcrumb */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-slate-800 pb-8">
        <div>
          <button
            onClick={onBackToHub}
            className="text-xs font-mono text-purple-400 hover:text-purple-300 flex items-center gap-1.5 mb-3 cursor-pointer bg-black/60 border border-purple-400/40 px-3 py-1.5 rounded-lg w-fit transition-all hover:bg-purple-950/60"
          >
            ← BACK TO OBSERVATION DECK (HOLOGRAMS)
          </button>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 glow-cyan animate-pulse" />
            <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase">SECTOR_02 // WORKSHOPS</span>
          </div>
          <h2 className="font-orbitron text-3xl sm:text-5xl font-black text-white tracking-tight mt-1">
            ADVANCED TECHNICAL LABS
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl mt-2 font-space">
            Master next-generation computational frameworks under industry researchers and engineers. Live sandboxes, real hardware telemetry, and verified diplomas.
          </p>
        </div>

        {/* Category Switcher Tabs */}
        <div className="flex items-center p-1 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-mono">
          {(['ALL', 'AI & DATA', 'TECHNOLOGY & CYBERSECURITY'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => {
                cyberAudio.playClick(720);
                setSelectedCategory(cat);
              }}
              className={`px-4 py-2 rounded-lg transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-sky-500/20 text-sky-300 border border-sky-400/40 glow-cyan font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Futuristic Physical Terminals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredWorkshops.map((ws) => (
          <div
            key={ws.id}
            className="group relative rounded-xl border border-slate-800/90 bg-gradient-to-b from-slate-900/80 to-slate-950/95 p-6 backdrop-blur-md flex flex-col justify-between transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_10px_35px_rgba(6,182,212,0.15)] hover:-translate-y-1.5"
          >
            {/* Top Bar of Terminal */}
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-[10px] font-mono tracking-widest px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-400">
                  {ws.category}
                </span>
                <span
                  className={`text-xs font-orbitron font-bold px-2.5 py-0.5 rounded ${
                    ws.isFree
                      ? 'bg-emerald-500/20 border border-emerald-400/40 text-emerald-300'
                      : 'bg-amber-500/20 border border-amber-400/40 text-amber-300'
                  }`}
                >
                  {ws.price}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="font-orbitron text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2.5">
                {ws.title}
              </h3>
              <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed font-space mb-4">
                {ws.shortDesc}
              </p>
            </div>

            {/* Meta Attributes */}
            <div className="space-y-2.5 border-t border-slate-800/80 pt-4 text-xs font-mono text-slate-300 mb-6">
              <div className="flex items-center gap-2">
                <Clock size={13} className="text-cyan-400 shrink-0" />
                <span>{ws.date} // {ws.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={13} className="text-cyan-400 shrink-0" />
                <span className="truncate">{ws.venue}</span>
              </div>
              <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                <span>INSTRUCTOR: {ws.instructor}</span>
                <span className="text-emerald-400 font-bold">{ws.spotsLeft} SPOTS LEFT</span>
              </div>
            </div>

            {/* Actions: EXPLORE & REGISTER */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  cyberAudio.playClick(680);
                  setActiveModalItem(ws);
                }}
                className="flex-1 py-2.5 px-3 rounded-lg bg-slate-950 border border-slate-700/80 text-xs font-orbitron text-slate-300 hover:text-white hover:border-slate-500 transition-all text-center cursor-pointer"
              >
                EXPLORE LAB
              </button>
              <button
                onClick={() => {
                  cyberAudio.playClick(920);
                  onRegister({
                    title: ws.title,
                    category: ws.category,
                    price: ws.price
                  });
                }}
                className="flex-1 py-2.5 px-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-orbitron font-bold text-xs tracking-wider transition-all hover:shadow-[0_0_20px_rgba(6,182,212,0.6)] cursor-pointer text-center"
              >
                REGISTER →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Workshop Deep-Dive Detail Modal */}
      {activeModalItem && (
        <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-xl flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-cyan-400/40 rounded-2xl max-w-2xl w-full p-6 md:p-8 glow-cyan max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-[10px] font-mono text-cyan-400 px-2 py-0.5 rounded bg-cyan-950 border border-cyan-500/30">
                  {activeModalItem.category}
                </span>
                <h3 className="font-orbitron text-2xl md:text-3xl font-bold text-white mt-2">
                  {activeModalItem.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalItem(null)}
                className="text-slate-400 hover:text-white p-1 text-lg font-mono cursor-pointer"
              >
                ✕
              </button>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed font-space mb-6">
              {activeModalItem.fullDesc}
            </p>

            <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-slate-950/70 border border-slate-800 text-xs font-mono mb-6">
              <div>
                <span className="text-slate-500 block">SESSION TIME</span>
                <span className="text-white font-bold">{activeModalItem.date} ({activeModalItem.time})</span>
              </div>
              <div>
                <span className="text-slate-500 block">VENUE / LOCATION</span>
                <span className="text-white font-bold">{activeModalItem.venue}</span>
              </div>
              <div>
                <span className="text-slate-500 block">LEAD MENTOR</span>
                <span className="text-cyan-300">{activeModalItem.instructor} ({activeModalItem.instructorRole})</span>
              </div>
              <div>
                <span className="text-slate-500 block">FEES</span>
                <span className="text-amber-400 font-bold">{activeModalItem.price}</span>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div>
                <h4 className="text-xs font-mono uppercase text-sky-400 tracking-wider mb-2">Key Takeaways & Deliverables:</h4>
                <ul className="space-y-1.5 text-xs text-slate-300 font-space">
                  {activeModalItem.takeaways.map((t, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setActiveModalItem(null)}
                className="flex-1 py-3 rounded-xl border border-slate-700 text-xs font-orbitron text-slate-400 hover:text-white cursor-pointer"
              >
                CLOSE
              </button>
              <button
                onClick={() => {
                  const item = activeModalItem;
                  setActiveModalItem(null);
                  onRegister({
                    title: item.title,
                    category: item.category,
                    price: item.price
                  });
                }}
                className="flex-1 py-3 rounded-xl bg-cyan-400 text-slate-950 font-orbitron font-bold text-xs tracking-wider cursor-pointer hover:bg-cyan-300 transition-all"
              >
                PROCEED TO REGISTRATION
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
