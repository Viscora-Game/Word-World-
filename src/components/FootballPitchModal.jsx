import React from 'react';
import { GiSoccerField, GiTShirt, GiGoalKeeper } from 'react-icons/gi';
import { PiXBold, PiSoccerBallDuotone } from 'react-icons/pi';
import { soundManager } from '../utils/audio';

function TacticalKit({ role = 'FW', number = '9' }) {
  const styles = {
    FW: {
      badge: 'from-rose-500 to-rose-700 border-amber-300/80 text-white',
      numBg: 'bg-rose-950 text-amber-300 border-amber-400/50'
    },
    MF: {
      badge: 'from-indigo-500 to-indigo-700 border-cyan-300/80 text-white',
      numBg: 'bg-indigo-950 text-cyan-300 border-cyan-400/50'
    },
    DF: {
      badge: 'from-sky-500 to-blue-700 border-sky-200/80 text-white',
      numBg: 'bg-slate-950 text-sky-300 border-sky-400/50'
    },
    GK: {
      badge: 'from-amber-400 to-amber-600 border-yellow-100 text-slate-950',
      numBg: 'bg-slate-950 text-amber-300 border-amber-400/60'
    }
  };

  const s = styles[role] || styles.FW;
  const Icon = role === 'GK' ? GiGoalKeeper : GiTShirt;

  return (
    <div className="relative flex items-center justify-center">
      <div
        className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-b ${s.badge} border-[1.5px] shadow-lg flex items-center justify-center`}
      >
        <Icon className="w-5 h-5 drop-shadow-sm" />
      </div>
      <span
        className={`absolute -top-1 -right-1.5 px-1 rounded-md border text-[8px] font-black leading-tight shadow ${s.numBg}`}
      >
        {number}
      </span>
    </div>
  );
}

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
      <div className="relative w-full max-w-sm rounded-3xl bg-[#091322] border border-emerald-500/45 border-b-[8px] border-b-slate-950 p-3.5 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Top Stadium Floodlight Glow */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-60 h-24 bg-emerald-400/20 rounded-full blur-3xl pointer-events-none" />

        {/* Header Bar */}
        <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-slate-800/90 relative z-10">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-9 h-9 rounded-2xl bg-emerald-500/20 border border-emerald-400/50 flex items-center justify-center text-emerald-300 shrink-0 shadow-md">
              <GiSoccerField className="w-5 h-5" />
            </div>
            <div className="min-w-0 text-left">
              <span className="text-[9.5px] font-black uppercase tracking-wider text-emerald-400 block truncate">
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
            className="w-8 h-8 rounded-full bg-slate-800/90 border border-slate-700 text-slate-300 hover:text-white flex items-center justify-center active:scale-90 transition shrink-0 cursor-pointer"
          >
            <PiXBold className="w-4 h-4" />
          </button>
        </div>

        {/* 3D Championship Turf Pitch */}
        <div className="relative w-full aspect-[4/5] rounded-2xl bg-gradient-to-b from-[#0d6e47] via-[#0b5c3b] to-[#08472e] border-2 border-emerald-300/50 shadow-inner overflow-hidden p-2 flex flex-col justify-between">
          
          {/* Mowed Stadium Grass Stripes */}
          <div className="absolute inset-0 opacity-15 pointer-events-none flex flex-col">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className={`flex-1 w-full ${i % 2 === 0 ? 'bg-black' : 'bg-emerald-200'}`}
              />
            ))}
          </div>

          {/* Floodlight radial vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(255,255,255,0.12),transparent_65%)] pointer-events-none" />

          {/* Crisp Chalk Pitch Markings */}
          <div className="absolute inset-2.5 border-2 border-white/40 rounded-lg pointer-events-none">
            <div className="absolute top-1/2 left-0 right-0 h-[1.5px] bg-white/40 -translate-y-1/2" />
            <div className="absolute top-1/2 left-1/2 w-20 h-20 border-2 border-white/40 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-white/60 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute top-0 left-1/2 w-32 h-12 border-2 border-t-0 border-white/40 -translate-x-1/2" />
            <div className="absolute top-0 left-1/2 w-16 h-5 border-2 border-t-0 border-white/35 -translate-x-1/2" />
            <div className="absolute bottom-0 left-1/2 w-32 h-12 border-2 border-b-0 border-white/40 -translate-x-1/2" />
            <div className="absolute bottom-0 left-1/2 w-16 h-5 border-2 border-b-0 border-white/35 -translate-x-1/2" />
          </div>

          {/* FORWARDS (HÜCUM HATTI) */}
          <div className="relative z-10 w-full flex items-center justify-around pt-1">
            {(lineup.fwd || []).map((name, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <TacticalKit role="FW" number={idx === 0 ? '9' : idx === 1 ? '11' : '7'} />
                <span className="text-[9px] sm:text-[10px] font-black text-white bg-slate-950/85 px-2 py-0.5 rounded-md mt-0.5 border border-rose-400/40 truncate max-w-[82px] text-center shadow-md">
                  {name}
                </span>
              </div>
            ))}
          </div>

          {/* MIDFIELDERS (ORTA SAHA HATTI) */}
          <div className="relative z-10 w-full flex flex-wrap items-center justify-around my-auto gap-y-1.5 px-0.5">
            {(lineup.mid || []).map((name, idx) => (
              <div key={idx} className="flex flex-col items-center min-w-[54px]">
                <TacticalKit role="MF" number={idx === 0 ? '8' : idx === 1 ? '6' : idx === 2 ? '10' : '14'} />
                <span className="text-[8.5px] sm:text-[9.5px] font-black text-white bg-slate-950/85 px-1.5 py-0.5 rounded-md mt-0.5 border border-indigo-400/40 truncate max-w-[72px] text-center shadow-md">
                  {name}
                </span>
              </div>
            ))}
          </div>

          {/* DEFENDERS (DEFANS HATTI) */}
          <div className="relative z-10 w-full flex items-center justify-around pb-0.5">
            {(lineup.def || []).map((name, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <TacticalKit role="DF" number={idx === 0 ? '2' : idx === 1 ? '4' : idx === 2 ? '5' : '3'} />
                <span className="text-[8.5px] sm:text-[9.5px] font-black text-white bg-slate-950/85 px-1.5 py-0.5 rounded-md mt-0.5 border border-sky-400/40 truncate max-w-[68px] text-center shadow-md">
                  {name}
                </span>
              </div>
            ))}
          </div>

          {/* GOALKEEPER (KALECİ) */}
          <div className="relative z-10 w-full flex items-center justify-center pb-0.5">
            <div className="flex flex-col items-center">
              <TacticalKit role="GK" number="1" />
              <span className="text-[9px] sm:text-[10px] font-black text-amber-300 bg-slate-950/90 px-2.5 py-0.5 rounded-md mt-0.5 border border-amber-400/55 shadow-md">
                {lineup.gk}
              </span>
            </div>
          </div>
        </div>

        {/* Footer Info & Action Button */}
        <div className="mt-3 flex items-center justify-between gap-2 relative z-10">
          <div className="flex items-center gap-1.5 text-[11px] font-black text-slate-300">
            <PiSoccerBallDuotone className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="px-2.5 py-1 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-black">
              {teamWordLength} {t?.letterTeam || 'Harfli Takım'}
            </span>
          </div>

          <button
            onClick={() => {
              soundManager.playKey();
              onClose();
            }}
            className="py-2 px-4 rounded-xl bg-gradient-to-b from-emerald-400 via-emerald-500 to-teal-600 hover:from-emerald-300 hover:to-teal-500 text-slate-950 font-black text-xs uppercase tracking-wider border-t border-emerald-200 border-b-[3px] border-b-emerald-950 shadow-lg active:translate-y-0.5 transition cursor-pointer"
          >
            {t?.closePitchAndGuess || 'Tahmin Et'}
          </button>
        </div>
      </div>
    </div>
  );
}
