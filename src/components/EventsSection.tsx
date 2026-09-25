import React from 'react';
import { KEYNOTE_EVENTS, EventItem } from '../data/techviritiData';
import { Calendar, Clock, MapPin, Sparkles, User, ExternalLink } from 'lucide-react';
import { cyberAudio } from '../utils/audioSynth';

interface EventsSectionProps {
  onReserveSeat: (item: { title: string; category: string; price: string }) => void;
  onBackToHub: () => void;
}

export const EventsSection: React.FC<EventsSectionProps> = ({ onReserveSeat, onBackToHub }) => {
  return (
    <section id="events" className="relative z-30 min-h-screen px-6 md:px-12 py-24 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-slate-800 pb-8">
        <div>
          <button
            onClick={onBackToHub}
            className="text-xs font-mono text-sky-400 hover:text-sky-300 flex items-center gap-1.5 mb-3 cursor-pointer bg-black/60 border border-sky-400/40 px-3 py-1.5 rounded-lg w-fit transition-all hover:bg-sky-950/60"
          >
            ← BACK TO OBSERVATION DECK (HOLOGRAMS)
          </button>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-sky-400 glow-cyan animate-pulse" />
            <span className="text-xs font-mono tracking-widest text-sky-400 uppercase">SECTOR_01 // TITAN STAGE</span>
          </div>
          <h2 className="font-orbitron text-3xl sm:text-5xl font-black text-white tracking-tight mt-1">
            KEYNOTES & EXPOSITIONS
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl mt-2 font-space">
            Groundbreaking lectures from global pioneers in quantum supremacy, autonomous space robotics, planetary intelligence, and next-gen neuro-interfaces.
          </p>
        </div>

        <div className="text-xs font-mono text-slate-400 px-4 py-2 rounded-lg bg-slate-900 border border-slate-800">
          MAIN CITADEL AMPHITHEATER // DOORS OPEN 09:00 AM
        </div>
      </div>

      {/* Grid of Keynotes & Tech Talks */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {KEYNOTE_EVENTS.map((event) => (
          <div
            key={event.id}
            className="rounded-2xl border border-sky-400/25 bg-gradient-to-b from-slate-900/80 to-slate-950/95 p-6 md:p-8 backdrop-blur-md flex flex-col justify-between hover:border-sky-400/60 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_35px_rgba(56,189,248,0.15)] group"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-[10px] font-mono tracking-widest px-2.5 py-0.5 rounded bg-sky-950/80 border border-sky-500/30 text-sky-400 font-bold uppercase">
                  {event.type} // {event.badge}
                </span>
                <span className="text-xs font-mono text-emerald-400 font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  CONFIRMED
                </span>
              </div>

              <h3 className="font-orbitron text-xl sm:text-2xl font-bold text-white group-hover:text-sky-300 transition-colors leading-snug mb-4">
                {event.title}
              </h3>

              <p className="text-sm text-slate-300 font-space leading-relaxed mb-6">
                {event.description}
              </p>
            </div>

            <div className="space-y-4 border-t border-slate-800/80 pt-5">
              {/* Speaker Card */}
              <div className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                <div className="w-10 h-10 rounded-full bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-sky-300 font-orbitron font-bold">
                  {event.speaker.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="font-orbitron text-sm font-bold text-white">{event.speaker}</h4>
                  <p className="text-[11px] font-mono text-slate-400">{event.speakerTitle} • {event.company}</p>
                </div>
              </div>

              {/* Timing & Venue */}
              <div className="flex flex-wrap items-center justify-between text-xs font-mono text-slate-400 gap-2">
                <div className="flex items-center gap-2">
                  <Clock size={13} className="text-sky-400" />
                  <span>{event.date} // {event.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={13} className="text-sky-400" />
                  <span>{event.location}</span>
                </div>
              </div>

              {/* Reserve Seat Action */}
              <button
                onClick={() => {
                  cyberAudio.playClick(890);
                  onReserveSeat({
                    title: event.title,
                    category: event.type,
                    price: 'Complimentary Pass'
                  });
                }}
                className="w-full py-3 rounded-xl bg-sky-500/20 hover:bg-sky-400 hover:text-slate-950 border border-sky-400/50 text-sky-300 font-orbitron font-bold text-xs tracking-wider transition-all cursor-pointer text-center"
              >
                RESERVE AMPHITHEATER SEAT →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
