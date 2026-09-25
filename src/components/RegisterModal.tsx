import React, { useState } from 'react';
import { X, CheckCircle, Ticket, QrCode, Sparkles, Copy, Check } from 'lucide-react';
import { cyberAudio } from '../utils/audioSynth';

interface RegisterModalProps {
  item: { title: string; category: string; price: string };
  onClose: () => void;
}

export const RegisterModal: React.FC<RegisterModalProps> = ({ item, onClose }) => {
  const [formData, setFormData] = useState({
    name: 'Kabir Varma',
    email: 'kabir.v@college.edu',
    college: 'Delhi Technological University',
    teamName: 'Team Prometheus',
    phone: '+91 98765 43210'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    cyberAudio.playClick(940);
    const generatedId = 'TV26-' + Math.floor(100000 + Math.random() * 900000);
    setTicketId(generatedId);
    setIsSubmitted(true);
  };

  const copyTicketCode = () => {
    navigator.clipboard.writeText(ticketId);
    setCopied(true);
    cyberAudio.playClick(800);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-2xl flex items-center justify-center p-4">
      <div className="relative bg-slate-900 border border-sky-400/40 rounded-2xl max-w-lg w-full p-6 md:p-8 glow-cyan max-h-[92vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-400 hover:text-white p-2 rounded-lg bg-slate-950 border border-slate-800 cursor-pointer"
        >
          <X size={18} />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="mb-6 pr-8">
              <span className="text-[10px] font-mono tracking-widest px-2.5 py-0.5 rounded bg-sky-950 border border-sky-500/30 text-sky-400 uppercase">
                {item.category} // ACCESS PASS
              </span>
              <h3 className="font-orbitron text-xl sm:text-2xl font-bold text-white mt-1">
                {item.title}
              </h3>
              <div className="text-xs font-mono text-amber-400 mt-1">
                FEE: <span className="font-bold">{item.price}</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">DELEGATE FULL NAME</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm font-space focus:border-sky-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">COLLEGE / INSTITUTION</label>
                <input
                  type="text"
                  required
                  value={formData.college}
                  onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm font-space focus:border-sky-400 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">INSTITUTE EMAIL</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm font-space focus:border-sky-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">PHONE NUMBER</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm font-space focus:border-sky-400 focus:outline-none"
                  />
                </div>
              </div>

              {item.category.includes('ARENA') || item.category.includes('HACKATHON') ? (
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">TEAM / SQUAD CALLSIGN</label>
                  <input
                    type="text"
                    value={formData.teamName}
                    onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm font-space focus:border-sky-400 focus:outline-none"
                  />
                </div>
              ) : null}

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-sky-500 via-sky-400 to-blue-600 text-slate-950 font-orbitron font-bold text-xs sm:text-sm tracking-wider uppercase hover:shadow-[0_0_25px_rgba(56,189,248,0.7)] cursor-pointer transition-all"
                >
                  CONFIRM & GENERATE FESTIVAL PASS →
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-4 animate-fadeIn">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-400/50 flex items-center justify-center text-emerald-400 mx-auto mb-4 glow-cyan">
              <CheckCircle size={28} />
            </div>

            <span className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase">
              REGISTRATION VERIFIED & ALLOCATED
            </span>
            <h3 className="font-orbitron text-2xl font-black text-white mt-1">
              FESTIVAL PASS ISSUED
            </h3>

            {/* Generated Cyber Holographic Pass */}
            <div className="my-6 p-5 rounded-2xl bg-slate-950 border border-sky-400/50 text-left relative overflow-hidden glow-cyan">
              <div className="flex justify-between items-start border-b border-slate-800 pb-3 mb-3">
                <div>
                  <div className="font-orbitron text-xs font-bold text-sky-400">TECHVIRITI // 2026</div>
                  <div className="text-[10px] font-mono text-slate-400">IFSA CITADEL ACCESS</div>
                </div>
                <div className="text-right">
                  <div className="text-[9px] font-mono text-slate-500">PASS CODE</div>
                  <div className="font-mono text-xs font-bold text-amber-400">{ticketId}</div>
                </div>
              </div>

              <div className="space-y-1.5 text-xs font-mono">
                <div className="text-white font-bold">{formData.name}</div>
                <div className="text-slate-400">{formData.college}</div>
                <div className="text-sky-300 font-semibold">{item.title}</div>
              </div>

              <div className="mt-4 pt-3 border-t border-dashed border-slate-800 flex justify-between items-center text-[10px] font-mono text-slate-500">
                <span>STATUS: ACTIVE ALLOCATION</span>
                <span>OCTOBER 24-26, 2026</span>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={copyTicketCode}
                className="flex-1 py-2.5 px-4 rounded-xl bg-slate-950 border border-slate-700 text-xs font-mono text-slate-300 hover:text-white flex items-center justify-center gap-2 cursor-pointer"
              >
                {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                <span>{copied ? 'COPIED CODE' : 'COPY PASS ID'}</span>
              </button>
              <button
                onClick={onClose}
                className="flex-1 py-2.5 px-4 rounded-xl bg-sky-400 text-slate-950 font-orbitron font-bold text-xs tracking-wider cursor-pointer hover:bg-sky-300"
              >
                CLOSE & ENTER FEST
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
