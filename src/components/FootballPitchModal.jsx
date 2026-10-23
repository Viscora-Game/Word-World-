import React from 'react';
import { X, Shield } from 'lucide-react';
import { soundManager } from '../utils/audio';

export default function FootballPitchModal({
  isOpen,
  onClose,
  lineup,
  teamWordLength,
  t
}) {
  if (!isOpen || !lineup) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/85 backdrop-blur-md animate-in fade-in duration-150 select-none">
      <div className="relative w-full max-w-sm rounded-3xl bg-slate-900 border border-emerald-500/40 border-b-8 border-b-slate-950 p-3 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800">
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-8 h-8 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 shrink-0">
              <Shield className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <span className="text-[9px] font-black uppercase tracking-wider text-emerald-400">
                {lineup.teamType} • {lineup.year}
              </span>
              <h3 className="text-xs sm:text-sm font-black text-white truncate">
                {t?.formation || 'Diziliş'}: {lineup.formation}
              </h3>
            </div>
          </div>

          <button
            onClick={() => {
              soundManager.playKey();
              onClose();
            }}
            className="w-7 h-7 rounded-full bg-slate-800 border border-slate-700 text-slate-300 hover:text-white flex items-center justify-center active:scale-90 transition shrink-0 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* 3D Visual Green Grass Pitch */}
        <div className="relative w-full aspect-[4/5] rounded-2xl bg-gradient-to-b from-emerald-700 via-emerald-800 to-emerald-900 border-2 border-emerald-400/50 shadow-inner overflow-hidden p-2 flex flex-col justify-between">
          
          {/* Grass stripes pattern */}
          <div className="absolute inset-0 opacity-15 pointer-events-none flex flex-col">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className={`flex-1 w-full ${i % 2 === 0 ? 'bg-black' : 'bg-white'}`}
              />
            ))}
          </div>

          {/* Pitch lines & markings */}
          <div className="absolute inset-2 border-2 border-white/35 rounded-xl pointer-events-none">
            {/* Halfway line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/35 -translate-y-1/2" />
            {/* Center circle */}
            <div className="absolute top-1/2 left-1/2 w-20 h-20 border-2 border-white/35 rounded-full -translate-x-1/2 -translate-y-1/2" />
            {/* Center dot */}
            <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-white/50 rounded-full -translate-x-1/2 -translate-y-1/2" />
            {/* Top penalty box */}
            <div className="absolute top-0 left-1/2 w-32 h-14 border-2 border-t-0 border-white/35 -translate-x-1/2" />
            {/* Bottom penalty box */}
            <div className="absolute bottom-0 left-1/2 w-32 h-14 border-2 border-b-0 border-white/35 -translate-x-1/2" />
          </div>

          {/* FORWARDS (HÜCUM HATTI) */}
          <div className="relative z-10 w-full flex items-center justify-around pt-1">
            {(lineup.fwd || []).map((name, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-b from-rose-500 to-rose-700 border-2 border-white shadow-md flex items-center justify-center text-[11px] font-black text-white">
                  ⚽
                </div>
                <span className="text-[9px] sm:text-[10px] font-black text-white bg-black/75 px-1.5 py-0.2 rounded-full mt-0.5 border border-white/30 truncate max-w-[75px] text-center shadow-sm">
                  {name}
                </span>
              </div>
            ))}
          </div>

          {/* MIDFIELDERS (ORTA SAHA HATTI) */}
          <div className="relative z-10 w-full flex flex-wrap items-center justify-around my-auto gap-y-1 px-1">
            {(lineup.mid || []).map((name, idx) => (
              <div key={idx} className="flex flex-col items-center min-w-[50px]">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-b from-indigo-500 to-indigo-700 border-2 border-white shadow-md flex items-center justify-center text-[11px] font-black text-white">
                  👟
                </div>
                <span className="text-[8.5px] sm:text-[9.5px] font-black text-white bg-black/75 px-1.5 py-0.2 rounded-full mt-0.5 border border-white/30 truncate max-w-[65px] text-center shadow-sm">
                  {name}
                </span>
              </div>
            ))}
          </div>

          {/* DEFENDERS (DEFANS HATTI) */}
          <div className="relative z-10 w-full flex items-center justify-around pb-1">
            {(lineup.def || []).map((name, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-b from-blue-500 to-blue-700 border-2 border-white shadow-md flex items-center justify-center text-[11px] font-black text-white">
                  🛡️
                </div>
                <span className="text-[8.5px] sm:text-[9.5px] font-black text-white bg-black/75 px-1.5 py-0.2 rounded-full mt-0.5 border border-white/30 truncate max-w-[65px] text-center shadow-sm">
                  {name}
                </span>
              </div>
            ))}
          </div>

          {/* GOALKEEPER (KALECİ) */}
          <div className="relative z-10 w-full flex items-center justify-center pb-1">
            <div className="flex flex-col items-center">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-b from-amber-400 to-amber-600 border-2 border-white shadow-md flex items-center justify-center text-[11px] font-black text-slate-950">
                🧤
              </div>
              <span className="text-[9px] sm:text-[10px] font-black text-amber-300 bg-black/85 px-2 py-0.2 rounded-full mt-0.5 border border-amber-400/50 shadow-sm">
                {lineup.gk}
              </span>
            </div>
          </div>
        </div>

        {/* Footer info & Guess Button */}
        <div className="mt-2.5 flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 text-[11px] font-black text-slate-300">
            <span>{t?.targetTeam || 'Hedef'}:</span>
            <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-black">
              {teamWordLength} {t?.letterTeam || 'Harfli Takım'}
            </span>
          </div>

          <button
            onClick={() => {
              soundManager.playKey();
              onClose();
            }}
            className="py-2 px-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-xs uppercase tracking-wider shadow-md shadow-emerald-900/40 active:translate-y-0.5 transition cursor-pointer"
          >
            {t?.closePitchAndGuess || 'Sahayı Kapat & Tahmin Et'}
          </button>
        </div>
      </div>
    </div>
  );
}
