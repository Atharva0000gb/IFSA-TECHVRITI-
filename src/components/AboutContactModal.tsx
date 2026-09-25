import React from 'react';
import { TECHVIRITI_CONFIG } from '../data/techviritiData';
import { X, Mail, Phone, MapPin, Globe, Compass, Shield, Users } from 'lucide-react';
import { cyberAudio } from '../utils/audioSynth';

interface AboutContactModalProps {
  activeTab: 'about' | 'contact';
  onClose: () => void;
  onSwitchTab: (tab: 'about' | 'contact') => void;
}

export const AboutContactModal: React.FC<AboutContactModalProps> = ({
  activeTab,
  onClose,
  onSwitchTab
}) => {
  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-2xl flex items-center justify-center p-4">
      <div className="relative bg-slate-900 border border-sky-400/40 rounded-2xl max-w-3xl w-full p-6 md:p-8 glow-cyan max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={() => {
            cyberAudio.playClick(600);
            onClose();
          }}
          className="absolute top-6 right-6 text-slate-400 hover:text-white p-2 rounded-lg bg-slate-950 border border-slate-800 cursor-pointer"
        >
          <X size={18} />
        </button>

        {/* Tab Switcher */}
        <div className="flex items-center gap-2 p-1 rounded-xl bg-slate-950 border border-slate-800 w-fit mb-8">
          <button
            onClick={() => onSwitchTab('about')}
            className={`px-5 py-2 rounded-lg font-orbitron text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'about'
                ? 'bg-sky-500/20 text-sky-300 border border-sky-400/50 glow-cyan'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            ABOUT IFSA & FEST
          </button>
          <button
            onClick={() => onSwitchTab('contact')}
            className={`px-5 py-2 rounded-lg font-orbitron text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'contact'
                ? 'bg-sky-500/20 text-sky-300 border border-sky-400/50 glow-cyan'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            DISPATCH & CONTACTS
          </button>
        </div>

        {/* TAB 1: ABOUT */}
        {activeTab === 'about' && (
          <div className="space-y-8 animate-fadeIn">
            <div>
              <span className="text-xs font-mono text-sky-400 uppercase tracking-widest">
                Visionary Conclave
              </span>
              <h3 className="font-orbitron text-2xl sm:text-3xl font-black text-white mt-1">
                TECHVIRITI {TECHVIRITI_CONFIG.year}
              </h3>
              <p className="text-xs font-mono text-slate-400 mt-1">
                {TECHVIRITI_CONFIG.collegeName} • {TECHVIRITI_CONFIG.department}
              </p>
            </div>

            <div className="text-sm text-slate-300 font-space leading-relaxed space-y-4">
              <p>
                TECHVIRITI is the premier annual technology and innovation festival organized by the Indian Future Studies Academy (IFSA). Designed as an immersive futuristic citadel, the festival unites forward-thinking engineers, researchers, hackers, and creators to bridge speculative imagination and production code.
              </p>
              <p>
                From planetary-scale agentic AI networks and space robotics to quantum mechanics and 24-hour hackathon arenas, TECHVIRITI empowers the next generation of engineers to build technologies that directly shape planetary progress.
              </p>
            </div>

            {/* The 3 Core Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                <span className="text-2xl font-orbitron font-black text-sky-400 block mb-1">INNOVATE</span>
                <p className="text-xs text-slate-400 font-space">
                  Challenge orthodox engineering axioms with speculative algorithms and next-gen paradigms.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                <span className="text-2xl font-orbitron font-black text-cyan-400 block mb-1">BUILD</span>
                <p className="text-xs text-slate-400 font-space">
                  Turn theoretical blueprints into working silicon, hardware rovers, and fault-tolerant software.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                <span className="text-2xl font-orbitron font-black text-amber-400 block mb-1">TRANSFORM</span>
                <p className="text-xs text-slate-400 font-space">
                  Deploy sustainable high-impact solutions with enterprise mentors and venture partners.
                </p>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-xl bg-slate-950 border border-sky-500/20 text-center">
              {TECHVIRITI_CONFIG.stats.map((s, idx) => (
                <div key={idx}>
                  <div className="font-orbitron text-xl sm:text-2xl font-black text-white">{s.value}</div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: CONTACT */}
        {activeTab === 'contact' && (
          <div className="space-y-8 animate-fadeIn">
            <div>
              <span className="text-xs font-mono text-sky-400 uppercase tracking-widest">
                Headquarters & Communications
              </span>
              <h3 className="font-orbitron text-2xl sm:text-3xl font-black text-white mt-1">
                COMMUNICATIONS DISPATCH
              </h3>
              <p className="text-xs font-mono text-slate-400 mt-1">
                Have questions regarding registration, travel accommodations, or corporate sponsorship? Reach out below.
              </p>
            </div>

            {/* Contact Personnel Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {TECHVIRITI_CONFIG.contacts.map((c, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 text-xs font-mono">
                  <div className="text-[10px] text-sky-400 uppercase mb-1">{c.role}</div>
                  <div className="font-orbitron text-sm font-bold text-white mb-2">{c.name}</div>
                  <div className="text-slate-400 space-y-1">
                    <div className="flex items-center gap-2">
                      <Phone size={12} className="text-slate-500" />
                      <span>{c.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail size={12} className="text-slate-500" />
                      <span>{c.email}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Location & Map Note */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300 flex items-start gap-3">
              <MapPin className="text-sky-400 shrink-0 mt-0.5" size={16} />
              <div>
                <span className="font-bold text-white block">CAMPUS CITADEL COORDINATES:</span>
                <span className="text-slate-400">{TECHVIRITI_CONFIG.venue}</span>
              </div>
            </div>

            {/* Social Channels */}
            <div className="pt-4 border-t border-slate-800 flex flex-wrap gap-4 text-xs font-mono">
              <span className="text-slate-500">DIGITAL CHANNELS:</span>
              <a href={TECHVIRITI_CONFIG.socials.discord} target="_blank" rel="noreferrer" className="text-sky-400 hover:underline">Discord Community</a>
              <a href={TECHVIRITI_CONFIG.socials.linkedin} target="_blank" rel="noreferrer" className="text-sky-400 hover:underline">LinkedIn Official</a>
              <a href={TECHVIRITI_CONFIG.socials.instagram} target="_blank" rel="noreferrer" className="text-sky-400 hover:underline">Instagram Feed</a>
              <a href={TECHVIRITI_CONFIG.socials.github} target="_blank" rel="noreferrer" className="text-sky-400 hover:underline">GitHub Repos</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
