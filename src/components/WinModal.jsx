import React, { useEffect, useState } from 'react';
import { Trophy, RotateCcw, ArrowRight, List, Sparkles, Frown, Compass, CheckCircle2, Lock, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundManager } from '../utils/audio';
import GameIcon from './GameIcon';

export default function WinModal({
  isOpen,
  isWon,
  starsEarned = 0,
  attemptsCount = 0,
  maxAttempts = 6,
  targetWord = '',
  hint = '',
  onNextLevel,
  onReplay,
  onBackToLevels,
  hasNextLevel,
  t
}) {
  const [animatedStars, setAnimatedStars] = useState(0);

  useEffect(() => {
    if (!isOpen) {
      setAnimatedStars(0);
      return;
    }

    if (isWon) {
      // Confetti burst
      try {
        confetti({
          particleCount: starsEarned === 3 ? 120 : 60,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {}

      // Staggered star reveal with chimes
      const timer1 = setTimeout(() => {
        if (starsEarned >= 1) {
          setAnimatedStars(1);
          soundManager.playStar(1);
        }
      }, 300);

      const timer2 = setTimeout(() => {
        if (starsEarned >= 2) {
          setAnimatedStars(2);
          soundManager.playStar(2);
        }
      }, 700);

      const timer3 = setTimeout(() => {
        if (starsEarned >= 3) {
          setAnimatedStars(3);
          soundManager.playStar(3);
          try {
            confetti({
              particleCount: 80,
              angle: 60,
              spread: 55,
              origin: { x: 0 }
            });
            confetti({
              particleCount: 80,
              angle: 120,
              spread: 55,
              origin: { x: 1 }
            });
          } catch (e) {}
        }
      }, 1100);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
      };
    } else {
      soundManager.playError();
    }
  }, [isOpen, isWon, starsEarned]);

  if (!isOpen) return null;

  const getTitle = () => {
    if (!isWon) return t?.gameOver || 'GİZEM ÇÖZÜLEMEDİ';
    if (starsEarned === 3) return t?.perfect || 'KUSURSUZ KEŞİF!';
    if (starsEarned === 2) return t?.great || 'HARİKA BAŞARI!';
    return t?.good || 'BÖLÜMÜ GEÇTİN!';
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/85 backdrop-blur-md animate-in fade-in duration-150 select-none">
      <div className="relative w-full max-w-xs sm:max-w-sm rounded-3xl bg-[#0b1426] border border-slate-700/80 border-b-[8px] border-b-slate-950 p-4 sm:p-5 shadow-2xl overflow-hidden flex flex-col items-center text-center">
        
        {/* Ambient Top Glow */}
        <div
          className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full blur-3xl pointer-events-none ${
            isWon ? 'bg-amber-500/25' : 'bg-rose-500/20'
          }`}
        />

        {/* 1. STATUS BADGE: Trophy / Defeat */}
        <div
          className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-2 shadow-xl border-t relative z-10 ${
            isWon
              ? 'bg-gradient-to-tr from-amber-500/25 via-yellow-500/20 to-amber-600/30 border-amber-300/50 shadow-amber-500/30'
              : 'bg-rose-500/20 border-rose-500/40 text-rose-400'
          }`}
        >
          {isWon ? (
            <GameIcon name="trophy" size="w-10 h-10 sm:w-12 sm:h-12" />
          ) : (
            <Lock className="w-8 h-8 sm:w-9 sm:h-9 text-rose-400 animate-pulse" />
          )}
        </div>

        {/* Header Title */}
        <h3 className="text-base sm:text-lg font-black text-white tracking-wide mb-0.5 relative z-10">
          {getTitle()}
        </h3>
        <p className="text-[11px] font-bold text-slate-300 mb-2 relative z-10">
          {isWon
            ? `${attemptsCount} / ${maxAttempts} ${t.wordSolvedIn || 'denemede çözüldü'}`
            : `${maxAttempts} / ${maxAttempts} ${t.remainingAttempts || 'Hakkın Tükendi'}`}
        </p>

        {/* 2. DOĞRU CEVAP vs GİZLİ KELİME KİLİTLİ */}
        {isWon ? (
          /* WIN STATE: Solved Word Displayed in 3D Emerald Tiles */
          <div className="w-full bg-slate-950/80 rounded-2xl p-2.5 border border-slate-800 shadow-inner flex flex-col items-center mb-2.5 relative z-10">
            <span className="text-[9.5px] font-black text-emerald-400 uppercase tracking-widest block mb-1.5 flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
              {t.wordWas || 'DOĞRU KELİME'}
            </span>
            <div className="flex items-center justify-center gap-1 flex-wrap">
              {(targetWord || '').split('').map((ch, idx) => (
                <span
                  key={idx}
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-gradient-to-b from-emerald-400 via-emerald-500 to-teal-600 border-t-2 border-emerald-200/90 border-b-[3px] border-b-emerald-950 text-white font-black text-xs sm:text-sm flex items-center justify-center shadow-md drop-shadow-sm"
                >
                  {ch}
                </span>
              ))}
            </div>
          </div>
        ) : (
          /* LOSS STATE: Kelimeyi Asla Açıklama! Gizli Tut ki Tekrar Dene Denildiğinde Kolay Olmasın */
          <div className="w-full bg-slate-950/80 rounded-2xl p-2.5 border border-slate-800 shadow-inner flex flex-col items-center mb-2.5 relative z-10">
            <span className="text-[9.5px] font-black text-rose-400 uppercase tracking-widest block mb-1.5 flex items-center gap-1">
              <Lock className="w-3 h-3 text-rose-400" />
              {targetWord.length} HARFLİ KELİME GİZLİ KALDI
            </span>
            <div className="flex items-center justify-center gap-1 flex-wrap">
              {Array.from({ length: targetWord.length }).map((_, idx) => (
                <span
                  key={idx}
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-slate-900 border border-slate-700/80 border-b-2 border-b-slate-950 text-slate-500 font-black text-xs sm:text-sm flex items-center justify-center shadow-inner"
                >
                  ?
                </span>
              ))}
            </div>
          </div>
        )}

        {/* 3. BİLGİ / KEŞİF: Only show on Win; Show encourage on Loss */}
        {isWon && hint ? (
          <div className="w-full bg-gradient-to-r from-[#0d1a33]/90 via-[#0a1529]/90 to-[#0d1a33]/90 rounded-2xl p-2.5 border border-cyan-500/35 mb-2.5 text-left relative z-10 shadow-sm">
            <div className="flex items-center gap-1.5 text-[9.5px] font-black uppercase tracking-wider text-cyan-300 mb-1">
              <Compass className="w-3.5 h-3.5 text-cyan-400" />
              <span>DÜNYA KEŞFİ & BİLGİ NOTU</span>
            </div>
            <p className="text-[11px] sm:text-xs font-semibold text-slate-100 leading-snug">
              "{hint}"
            </p>
          </div>
        ) : !isWon ? (
          <div className="w-full bg-gradient-to-r from-rose-950/40 via-slate-900/60 to-rose-950/40 rounded-2xl p-2.5 border border-rose-500/30 mb-2.5 text-left relative z-10 shadow-sm">
            <div className="flex items-center gap-1.5 text-[9.5px] font-black uppercase tracking-wider text-rose-300 mb-1">
              <AlertCircle className="w-3.5 h-3.5 text-rose-400" />
              <span>YENİDEN DENEME FIRSATI</span>
            </div>
            <p className="text-[10.5px] sm:text-[11px] font-semibold text-slate-300 leading-snug">
              Gizemli kelimenin sırrı henüz çözülemedi. Bildiğin harfleri hatırlayarak hemen tekrar dene ve bu seviyeyi fetheyle!
            </p>
          </div>
        ) : null}

        {/* 4. ÖDÜL: Animated 3-Star Showcase & Earned Star Pill (Only on Win) */}
        {isWon && (
          <div className="w-full flex items-center justify-between gap-2 p-2 bg-slate-950/70 rounded-2xl border border-slate-800/80 mb-3 relative z-10">
            {/* Stars */}
            <div className="flex items-center gap-2 pl-2">
              {[1, 2, 3].map((starIdx) => {
                const isFilled = animatedStars >= starIdx;
                return (
                  <div
                    key={starIdx}
                    className={`transition-all duration-300 ${
                      isFilled ? 'animate-star-burst scale-110' : 'scale-85 opacity-25 grayscale'
                    }`}
                  >
                    <GameIcon name="star" size="w-7 h-7 sm:w-8 sm:h-8" />
                  </div>
                );
              })}
            </div>

            {/* Reward Pill */}
            <div className="flex items-center gap-1 bg-gradient-to-r from-amber-500/25 to-yellow-500/15 border border-amber-500/40 px-2.5 py-1 rounded-full shadow-sm">
              <Sparkles className="w-3 h-3 text-amber-300" />
              <span className="text-[11px] font-black text-amber-300">
                +{starsEarned * 10} ⭐
              </span>
            </div>
          </div>
        )}

        {/* 5. SONRAKİ SEVİYE / ACTIONS: Clear "Ne Yapmam Gerekiyor?" primary action */}
        <div className="w-full flex flex-col gap-2 relative z-10">
          {isWon && hasNextLevel ? (
            <button
              onClick={() => {
                soundManager.playKey();
                onNextLevel();
              }}
              className="group relative w-full py-3 px-4 rounded-2xl bg-gradient-to-b from-emerald-400 via-emerald-500 to-teal-600 hover:from-emerald-300 hover:via-emerald-400 hover:to-teal-500 text-slate-950 font-black text-xs sm:text-sm tracking-wider uppercase flex items-center justify-between border-t-2 border-emerald-200/90 border-b-[5px] border-b-emerald-950 active:border-b-[2px] active:translate-y-1 shadow-xl shadow-emerald-950/70 transition-all cursor-pointer overflow-hidden"
            >
              <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-20 pointer-events-none animate-shimmer-sweep" />
              <span className="drop-shadow-[0_1px_0_rgba(255,255,255,0.4)]">
                {t.nextLevel || 'SONRAKİ SEVİYE'}
              </span>
              <div className="w-7 h-7 rounded-full bg-emerald-700/40 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </div>
            </button>
          ) : !isWon ? (
            /* LOSS PRIMARY BUTTON: Massive Tactile Retry Button */
            <button
              onClick={() => {
                soundManager.playKey();
                onReplay();
              }}
              className="group relative w-full py-3 px-4 rounded-2xl bg-gradient-to-b from-amber-400 via-amber-500 to-orange-600 hover:from-amber-300 hover:via-amber-400 hover:to-orange-500 text-slate-950 font-black text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 border-t-2 border-amber-200/90 border-b-[5px] border-b-amber-950 active:border-b-[2px] active:translate-y-1 shadow-xl shadow-amber-950/70 transition-all cursor-pointer overflow-hidden"
            >
              <RotateCcw className="w-4 h-4 text-slate-950" />
              <span>{t.replay || 'TEKRAR DENE'}</span>
            </button>
          ) : null}

          <div className="flex gap-2 w-full">
            {isWon && (
              <button
                onClick={() => {
                  soundManager.playKey();
                  onReplay();
                }}
                className="flex-1 py-2.5 px-3 rounded-2xl bg-gradient-to-b from-slate-800 to-slate-850 hover:to-slate-800 text-white font-black text-[11px] uppercase flex items-center justify-center gap-1.5 border-t border-slate-700/70 border-b-[4px] border-b-slate-950 active:border-b-[2px] active:translate-y-0.5 shadow-md transition-all cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5 text-amber-400" />
                <span>{t.replay || 'TEKRAR DENE'}</span>
              </button>
            )}

            <button
              onClick={() => {
                soundManager.playKey();
                onBackToLevels();
              }}
              className="flex-1 py-2.5 px-3 rounded-2xl bg-gradient-to-b from-slate-800 to-slate-850 hover:to-slate-800 text-slate-200 hover:text-white font-black text-[11px] uppercase flex items-center justify-center gap-1.5 border-t border-slate-700/70 border-b-[4px] border-b-slate-950 active:border-b-[2px] active:translate-y-0.5 shadow-md transition-all cursor-pointer"
            >
              <List className="w-3.5 h-3.5 text-cyan-400" />
              <span>{t.backToLevels || 'BÖLÜMLER'}</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
