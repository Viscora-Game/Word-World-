import React from 'react';
import { Lightbulb, KeyRound, X, Sparkles } from 'lucide-react';
import { soundManager } from '../utils/audio';

export default function HintModal({
  isOpen,
  onClose,
  hint,
  categoryName,
  onRevealLetter,
  lettersRevealed = 0,
  maxLetterReveals = 2,
  t
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200 select-none">
      <div className="relative w-full max-w-sm rounded-3xl bg-slate-900 border border-slate-700/80 p-5 shadow-2xl flex flex-col">
        {/* Close Button */}
        <button
          onClick={() => {
            soundManager.playKey();
            onClose();
          }}
          className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-white rounded-full active:bg-slate-800 transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Icon & Title */}
        <div className="flex items-center gap-3 mb-3.5">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center shadow-md">
            <Lightbulb className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <span className="text-[10px] font-black uppercase tracking-wider text-amber-400">
              {categoryName}
            </span>
            <h3 className="text-base font-black text-white">{t?.hint || 'İpucu'}</h3>
          </div>
        </div>

        {/* Clue Box */}
        <div className="bg-slate-850 rounded-2xl p-3.5 border border-slate-700/70 mb-3 text-left">
          <div className="flex items-center gap-1.5 text-xs font-black text-slate-400 mb-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>{t?.categoryClueInfo || 'Kategori İpucu Bilgisi'}</span>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-slate-100 leading-relaxed italic">
            "{hint}"
          </p>
        </div>

        {/* Reveal Letter Power-Up */}
        <div className="bg-slate-950/70 rounded-2xl p-3 border border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-500/40 text-indigo-400 flex items-center justify-center">
              <KeyRound className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-black text-white">{t?.revealLetter || 'Harf Aç'}</h4>
              <p className="text-[10px] text-slate-400">
                {lettersRevealed}/{maxLetterReveals} {t?.used || 'kullanıldı'}
              </p>
            </div>
          </div>

          <button
            disabled={lettersRevealed >= maxLetterReveals}
            onClick={() => {
              soundManager.playHint();
              onRevealLetter();
            }}
            className={`px-3.5 py-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
              lettersRevealed >= maxLetterReveals
                ? 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700'
                : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-md shadow-indigo-600/30 active:scale-95'
            }`}
          >
            {t?.reveal || 'Aç'}
          </button>
        </div>

        {/* Dismiss Button */}
        <button
          onClick={() => {
            soundManager.playKey();
            onClose();
          }}
          className="w-full mt-3 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-750 text-white font-black text-xs uppercase tracking-wider transition border border-slate-700 active:scale-95 cursor-pointer"
        >
          {t?.gotIt || 'Tamam'}
        </button>
      </div>
    </div>
  );
}
