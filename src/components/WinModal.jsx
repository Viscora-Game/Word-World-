import React, { useEffect, useState } from 'react';
import {
  RotateCcw,
  ArrowRight,
  List,
  Sparkles,
  Compass,
  CheckCircle2,
  Lock,
  AlertCircle,
  Share2,
  Star,
  Check
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundManager } from '../utils/audio';
import { evaluateGuess } from '../utils/evaluator';
import { buildShareText } from '../utils/dailyQuest';
import GameIcon from './GameIcon';

export default function WinModal({
  isOpen,
  isWon,
  starsEarned = 0,
  dailyBonusAwarded = 0,
  isDailyMode = false,
  dailyEdition = 1,
  subcategoryName = '',
  levelId = 1,
  guesses = [],
  attemptsCount = 0,
  maxAttempts = 6,
  targetWord = '',
  hint = '',
  lang = 'tr',
  onNextLevel,
  onReplay,
  onBackToLevels,
  hasNextLevel,
  t
}) {
  const [animatedStars, setAnimatedStars] = useState(0);
  const [shareCopied, setShareCopied] = useState(false);

  const isTR = lang !== 'en';

  useEffect(() => {
    if (!isOpen) {
      setAnimatedStars(0);
      setShareCopied(false);
      return;
    }

    if (isWon) {
      try {
        confetti({
          particleCount: starsEarned === 3 ? 120 : 60,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {}

      const timer1 = setTimeout(() => {
        if (starsEarned >= 1) {
          setAnimatedStars(1);
          soundManager.playStar(1);
        }
      }, 280);

      const timer2 = setTimeout(() => {
        if (starsEarned >= 2) {
          setAnimatedStars(2);
          soundManager.playStar(2);
        }
      }, 650);

      const timer3 = setTimeout(() => {
        if (starsEarned >= 3) {
          setAnimatedStars(3);
          soundManager.playStar(3);
          try {
            confetti({
              particleCount: 75,
              angle: 60,
              spread: 55,
              origin: { x: 0 }
            });
            confetti({
              particleCount: 75,
              angle: 120,
              spread: 55,
              origin: { x: 1 }
            });
          } catch (e) {}
        }
      }, 1020);

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
    if (!isWon) return t?.gameOver || (isTR ? 'GİZEM ÇÖZÜLEMEDİ' : 'MYSTERY UNSOLVED');
    if (isDailyMode) return isTR ? 'GÜNÜN KELİMESİ ÇÖZÜLDÜ!' : 'DAILY QUEST SOLVED!';
    if (starsEarned === 3) return t?.perfect || (isTR ? 'KUSURSUZ KEŞİF!' : 'PERFECT DISCOVERY!');
    if (starsEarned === 2) return t?.great || (isTR ? 'HARİKA BAŞARI!' : 'GREAT SUCCESS!');
    return t?.good || (isTR ? 'BÖLÜMÜ GEÇTİN!' : 'LEVEL CLEARED!');
  };

  const handleShareScore = async () => {
    soundManager.playKey();
    const text = buildShareText({
      isDaily: isDailyMode,
      dailyEdition,
      subcategoryName,
      levelId,
      guesses,
      targetWord,
      maxAttempts,
      isWon,
      lang,
      evaluateGuessFn: evaluateGuess
    });

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Word & World',
          text
        });
        return;
      } catch (err) {
        // Fallback to clipboard if dismissed or unsupported
      }
    }

    try {
      await navigator.clipboard.writeText(text);
      setShareCopied(true);
      setTimeout(() => setShareCopied(false), 2500);
    } catch (e) {}
  };

  const totalRewardStars = starsEarned + (dailyBonusAwarded || 0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/85 backdrop-blur-md animate-in fade-in duration-150 select-none">
      <div className="relative w-full max-w-xs sm:max-w-sm rounded-3xl bg-[#0b1426] border border-slate-700/80 border-b-[8px] border-b-slate-950 p-4 sm:p-5 shadow-2xl overflow-hidden flex flex-col items-center text-center">
        
        {/* Ambient Top Glow */}
        <div
          className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52 rounded-full blur-3xl pointer-events-none ${
            isWon ? 'bg-amber-500/25' : 'bg-rose-500/20'
          }`}
        />

        {/* 1. STATUS BADGE */}
        <div
          className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-2 shadow-xl border-t relative z-10 ${
            isWon
              ? 'bg-gradient-to-tr from-amber-500/25 via-yellow-500/20 to-amber-600/30 border-amber-300/50 shadow-amber-500/30'
              : 'bg-rose-500/20 border-rose-500/40 text-rose-400'
          }`}
        >
          {isWon ? (
            <GameIcon name="trophy" size="w-9 h-9 sm:w-10 sm:h-10" />
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
            ? `${attemptsCount} / ${maxAttempts} ${t?.wordSolvedIn || (isTR ? 'denemede çözüldü' : 'attempts')}`
            : `${maxAttempts} / ${maxAttempts} ${isTR ? 'Hakkın Tükendi' : 'Out of Attempts'}`}
        </p>

        {/* 2. DOĞRU CEVAP vs GİZLİ KELİME KİLİTLİ */}
        {isWon ? (
          <div className="w-full bg-slate-950/80 rounded-2xl p-2.5 border border-slate-800 shadow-inner flex flex-col items-center mb-2.5 relative z-10">
            <span className="text-[9.5px] font-black text-emerald-400 uppercase tracking-widest mb-1.5 flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
              {t?.wordWas || (isTR ? 'DOĞRU KELİME' : 'CORRECT WORD')}
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
          /* LOSS STATE: Word stays strictly secret so retrying remains a true challenge! */
          <div className="w-full bg-slate-950/80 rounded-2xl p-2.5 border border-slate-800 shadow-inner flex flex-col items-center mb-2.5 relative z-10">
            <span className="text-[9.5px] font-black text-rose-400 uppercase tracking-widest mb-1.5 flex items-center gap-1">
              <Lock className="w-3 h-3 text-rose-400" />
              {targetWord.length} {isTR ? 'HARFLİ KELİME GİZLİ KALDI' : 'LETTER WORD REMAINS LOCKED'}
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

        {/* 3. BİLGİ NOTU (Win) vs TEŞVİK (Loss) */}
        {isWon && hint ? (
          <div className="w-full bg-gradient-to-r from-[#0d1a33]/90 via-[#0a1529]/90 to-[#0d1a33]/90 rounded-2xl p-2.5 border border-cyan-500/35 mb-2.5 text-left relative z-10 shadow-sm">
            <div className="flex items-center gap-1.5 text-[9.5px] font-black uppercase tracking-wider text-cyan-300 mb-1">
              <Compass className="w-3.5 h-3.5 text-cyan-400" />
              <span>{isTR ? 'DÜNYA KEŞFİ & BİLGİ NOTU' : 'WORLD DISCOVERY NOTE'}</span>
            </div>
            <p className="text-[11px] sm:text-xs font-semibold text-slate-100 leading-snug">
              "{hint}"
            </p>
          </div>
        ) : !isWon ? (
          <div className="w-full bg-gradient-to-r from-rose-950/40 via-slate-900/60 to-rose-950/40 rounded-2xl p-2.5 border border-rose-500/30 mb-2.5 text-left relative z-10 shadow-sm">
            <div className="flex items-center gap-1.5 text-[9.5px] font-black uppercase tracking-wider text-rose-300 mb-1">
              <AlertCircle className="w-3.5 h-3.5 text-rose-400" />
              <span>{isTR ? 'YENİDEN DENEME FIRSATI' : 'SECOND CHANCE'}</span>
            </div>
            <p className="text-[10.5px] sm:text-[11px] font-semibold text-slate-300 leading-snug">
              {isTR
                ? 'Gizemli kelimenin sırrı henüz çözülemedi. Bulduğun yeşil ve sarı harfleri hatırlayarak hemen tekrar dene!'
                : 'The secret word remains locked. Remember the green and yellow clues you uncovered and try again!'}
            </p>
          </div>
        ) : null}

        {/* 4. ÖDÜL: Animated 3-Star Showcase & Accurate Earned Star Pill */}
        {isWon && (
          <div className="w-full flex items-center justify-between gap-2 p-2 bg-slate-950/75 rounded-2xl border border-slate-800/80 mb-2.5 relative z-10">
            <div className="flex items-center gap-2 pl-2">
              {[1, 2, 3].map((starIdx) => {
                const isFilled = animatedStars >= starIdx;
                return (
                  <div
                    key={starIdx}
                    className={`transition-all duration-300 ${
                      isFilled ? 'animate-star-burst scale-110' : 'scale-85 opacity-20 grayscale'
                    }`}
                  >
                    <Star
                      className={`w-7 h-7 ${
                        isFilled
                          ? 'text-amber-300 fill-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.75)]'
                          : 'text-slate-600 fill-slate-800'
                      }`}
                    />
                  </div>
                );
              })}
            </div>

            <div className="flex items-center gap-1.5 bg-gradient-to-r from-amber-500/25 to-yellow-500/15 border border-amber-400/50 px-3 py-1 rounded-full shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span className="text-xs font-black text-amber-300">
                +{totalRewardStars} {isTR ? 'Yıldız' : 'Stars'}
              </span>
            </div>
          </div>
        )}

        {/* 5. ACTIONS: Next Level + Share Grid + Replay / Back */}
        <div className="w-full flex flex-col gap-2 relative z-10">
          {isWon && hasNextLevel && !isDailyMode ? (
            <button
              onClick={() => {
                soundManager.playKey();
                onNextLevel();
              }}
              className="group relative w-full py-3 px-4 rounded-2xl bg-gradient-to-b from-emerald-400 via-emerald-500 to-teal-600 hover:from-emerald-300 hover:via-emerald-400 hover:to-teal-500 text-slate-950 font-black text-xs sm:text-sm tracking-wider uppercase flex items-center justify-between border-t-2 border-emerald-200/90 border-b-[5px] border-b-emerald-950 active:border-b-[2px] active:translate-y-1 shadow-xl shadow-emerald-950/70 transition-all cursor-pointer overflow-hidden"
            >
              <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-20 pointer-events-none animate-shimmer-sweep" />
              <span className="drop-shadow-[0_1px_0_rgba(255,255,255,0.4)]">
                {t?.nextLevel || (isTR ? 'SONRAKİ SEVİYE' : 'NEXT LEVEL')}
              </span>
              <div className="w-7 h-7 rounded-full bg-emerald-700/40 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </div>
            </button>
          ) : !isWon ? (
            <button
              onClick={() => {
                soundManager.playKey();
                onReplay();
              }}
              className="group relative w-full py-3 px-4 rounded-2xl bg-gradient-to-b from-amber-400 via-amber-500 to-orange-600 hover:from-amber-300 hover:via-amber-400 hover:to-orange-500 text-slate-950 font-black text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 border-t-2 border-amber-200/90 border-b-[5px] border-b-amber-950 active:border-b-[2px] active:translate-y-1 shadow-xl shadow-amber-950/70 transition-all cursor-pointer overflow-hidden"
            >
              <RotateCcw className="w-4 h-4 text-slate-950" />
              <span>{t?.replay || (isTR ? 'TEKRAR DENE' : 'TRY AGAIN')}</span>
            </button>
          ) : null}

          {/* Share Score with Friends Button (Wordle-style grid) */}
          {isWon && guesses.length > 0 && (
            <button
              onClick={handleShareScore}
              className="w-full py-2.5 px-3 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 hover:from-indigo-500 hover:to-purple-500 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 border-t border-indigo-300/60 border-b-[4px] border-b-indigo-950 active:border-b-[2px] active:translate-y-0.5 shadow-lg transition-all cursor-pointer"
            >
              {shareCopied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-300 stroke-[3]" />
                  <span>{isTR ? 'SKOR PANOYA KOPYALANDI!' : 'SCORE COPIED!'}</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-indigo-200" />
                  <span>{isTR ? 'SKORU ARKADAŞLARINLA PAYLAŞ' : 'SHARE SCORE WITH FRIENDS'}</span>
                </>
              )}
            </button>
          )}

          <div className="flex gap-2 w-full">
            {isWon && !isDailyMode && (
              <button
                onClick={() => {
                  soundManager.playKey();
                  onReplay();
                }}
                className="flex-1 py-2.5 px-3 rounded-2xl bg-gradient-to-b from-slate-800 to-slate-850 hover:to-slate-800 text-white font-black text-[11px] uppercase flex items-center justify-center gap-1.5 border-t border-slate-700/70 border-b-[4px] border-b-slate-950 active:border-b-[2px] active:translate-y-0.5 shadow-md transition-all cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5 text-amber-400" />
                <span>{t?.replay || (isTR ? 'TEKRAR' : 'REPLAY')}</span>
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
              <span>
                {isDailyMode
                  ? isTR
                    ? 'ANA MENÜ'
                    : 'MAIN MENU'
                  : t?.backToLevels || (isTR ? 'BÖLÜMLER' : 'LEVELS')}
              </span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
