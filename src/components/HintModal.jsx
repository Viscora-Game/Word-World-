import React from 'react';
import { Lightbulb, KeyRound, Radar, X, Sparkles } from 'lucide-react';
import { soundManager } from '../utils/audio';

export default function HintModal({
  isOpen,
  onClose,
  hint,
  categoryName,
  onRevealLetter,
  lettersRevealed = 0,
  maxLetterReveals = 2,
  revealedPositions = {},
  onEliminateLetters,
  radarUsed = false,
  lang = 'tr',
  t
}) {
  if (!isOpen) return null;

  const isTR = lang !== 'en';
  const revealedEntries = Object.entries(revealedPositions);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-150 select-none">
      <div className="relative w-full max-w-sm rounded-3xl bg-[#0a1326] border border-amber-500/40 border-b-[8px] border-b-slate-950 p-5 shadow-2xl flex flex-col overflow-hidden">
        
        {/* Ambient Glow */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-48 h-24 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={() => {
            soundManager.playKey();
            onClose();
          }}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-800/90 border border-slate-700 text-slate-400 hover:text-white flex items-center justify-center active:scale-90 transition cursor-pointer z-10"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Icon & Title */}
        <div className="flex items-center gap-3 mb-3.5 relative z-10">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-400/50 text-amber-300 flex items-center justify-center shadow-lg">
            <Lightbulb className="w-6 h-6" />
          </div>
          <div className="text-left">
            <span className="text-[10px] font-black uppercase tracking-wider text-amber-400 block">
              {categoryName}
            </span>
            <h3 className="text-base font-black text-white">
              {isTR ? 'Taktiksel İpucu & Jokerler' : 'Tactical Clues & Boosters'}
            </h3>
          </div>
        </div>

        {/* Clue Box */}
        <div className="bg-slate-900/90 rounded-2xl p-3.5 border border-slate-800 mb-3 text-left relative z-10 shadow-inner">
          <div className="flex items-center gap-1.5 text-[11px] font-black text-amber-300 mb-1">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>{t?.categoryClueInfo || (isTR ? 'Görev İpucu' : 'Mission Clue')}</span>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-slate-100 leading-relaxed">
            "{hint}"
          </p>

          {revealedEntries.length > 0 && (
            <div className="mt-2.5 pt-2 border-t border-slate-800 flex items-center flex-wrap gap-1.5">
              <span className="text-[10px] font-black text-cyan-300 uppercase">
                {isTR ? 'Tahtadaki Harfler:' : 'Pinned Letters:'}
              </span>
              {revealedEntries.map(([idx, ch]) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded-lg bg-cyan-500/20 border border-cyan-400/40 text-[10px] font-black text-cyan-200"
                >
                  {Number(idx) + 1}. {ch}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* JOKER 1: Reveal & Pin Letter onto Board */}
        <div className="bg-slate-950/80 rounded-2xl p-3 border border-slate-800/90 flex items-center justify-between mb-2 relative z-10">
          <div className="flex items-center gap-2.5 text-left">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 flex items-center justify-center shrink-0">
              <KeyRound className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-black text-white">
                {isTR ? 'Tahtada Harf Sabitle' : 'Pin Letter on Board'}
              </h4>
              <p className="text-[10px] text-slate-400">
                {lettersRevealed}/{maxLetterReveals} {t?.used || (isTR ? 'kullanıldı' : 'used')}
              </p>
            </div>
          </div>

          <button
            disabled={lettersRevealed >= maxLetterReveals}
            onClick={() => {
              soundManager.playHint();
              onRevealLetter();
            }}
            className={`px-3.5 py-2 rounded-xl text-xs font-black transition-all cursor-pointer shrink-0 ${
              lettersRevealed >= maxLetterReveals
                ? 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700'
                : 'bg-gradient-to-b from-cyan-400 to-blue-600 hover:from-cyan-300 hover:to-blue-500 text-slate-950 border-t border-cyan-200 border-b-2 border-b-blue-950 shadow-md active:translate-y-0.5'
            }`}
          >
            {isTR ? 'Harf Aç' : 'Reveal'}
          </button>
        </div>

        {/* JOKER 2: Radar Eliminate 3 Wrong Keys */}
        {onEliminateLetters && (
          <div className="bg-slate-950/80 rounded-2xl p-3 border border-slate-800/90 flex items-center justify-between relative z-10">
            <div className="flex items-center gap-2.5 text-left">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-400/40 text-purple-300 flex items-center justify-center shrink-0">
                <Radar className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-black text-white">
                  {isTR ? '3 Yanlış Harfi Ele' : 'Eliminate 3 Wrong Keys'}
                </h4>
                <p className="text-[10px] text-slate-400">
                  {radarUsed
                    ? isTR
                      ? 'Bu bölümde kullanıldı'
                      : 'Used in this level'
                    : isTR
                    ? 'Klavyedeki tuzakları temizler'
                    : 'Clears 3 unused keyboard keys'}
                </p>
              </div>
            </div>

            <button
              disabled={radarUsed}
              onClick={() => {
                soundManager.playHint();
                onEliminateLetters();
              }}
              className={`px-3.5 py-2 rounded-xl text-xs font-black transition-all cursor-pointer shrink-0 ${
                radarUsed
                  ? 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700'
                  : 'bg-gradient-to-b from-purple-400 to-indigo-600 hover:from-purple-300 hover:to-indigo-500 text-white border-t border-purple-200/70 border-b-2 border-b-indigo-950 shadow-md active:translate-y-0.5'
              }`}
            >
              {radarUsed ? (isTR ? 'Tamam' : 'Done') : isTR ? 'Tara' : 'Scan'}
            </button>
          </div>
        )}

        {/* Dismiss Button */}
        <button
          onClick={() => {
            soundManager.playKey();
            onClose();
          }}
          className="w-full mt-3.5 py-2.5 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-white font-black text-xs uppercase tracking-wider transition border border-slate-700 active:scale-95 cursor-pointer relative z-10"
        >
          {t?.gotIt || (isTR ? 'Oyuna Dön' : 'Back to Game')}
        </button>
      </div>
    </div>
  );
}
