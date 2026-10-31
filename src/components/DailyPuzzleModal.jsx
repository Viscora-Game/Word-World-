import React, { useEffect, useState } from 'react';
import {
  PiXBold,
  PiStarFill,
  PiCalendarStarDuotone,
  PiArrowRightBold,
  PiCheckCircleFill,
  PiClockCountdownDuotone,
  PiFireFill,
  PiCompassDuotone
} from 'react-icons/pi';
import { soundManager } from '../utils/audio';
import { getCountdownToMidnight, DAILY_BONUS_STARS } from '../utils/dailyQuest';
import GameIcon from './GameIcon';

export default function DailyPuzzleModal({
  isOpen,
  onClose,
  onPlayDaily,
  dailyChallenge,
  dailyCompleted = false,
  dailyRecord = null,
  streak = 1,
  lang = 'tr',
  t
}) {
  const [countdown, setCountdown] = useState(() => getCountdownToMidnight());
  const isTR = lang !== 'en';

  useEffect(() => {
    if (!isOpen) return;
    setCountdown(getCountdownToMidnight());
    const timer = setInterval(() => {
      setCountdown(getCountdownToMidnight());
    }, 1000);
    return () => clearInterval(timer);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/85 backdrop-blur-md animate-in fade-in duration-150 select-none">
      <div className="relative w-full max-w-sm rounded-3xl bg-[#0a1225] border border-purple-500/50 border-b-[8px] border-b-slate-950 p-5 shadow-2xl overflow-hidden flex flex-col items-center text-center">
        
        {/* Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52 bg-purple-500/25 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={() => {
            soundManager.playKey();
            onClose();
          }}
          className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-slate-800/90 border border-slate-700 text-slate-400 hover:text-white flex items-center justify-center active:scale-90 transition cursor-pointer z-10"
        >
          <PiXBold className="w-4 h-4" />
        </button>

        {/* Emblem */}
        <div className="w-15 h-15 rounded-2xl bg-gradient-to-tr from-purple-600/30 via-fuchsia-500/20 to-indigo-600/30 border border-purple-400/50 flex items-center justify-center mb-2.5 shadow-xl relative z-10">
          <GameIcon name={dailyChallenge?.iconKey || 'rocket'} size="w-9 h-9" />
        </div>

        {/* Edition Pill */}
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-purple-500/20 border border-purple-400/40 mb-1.5 relative z-10">
          <PiCalendarStarDuotone className="w-3.5 h-3.5 text-purple-300" />
          <span className="text-[10px] font-black uppercase tracking-wider text-purple-200">
            {isTR
              ? `GÜNÜN KELİMESİ #${dailyChallenge?.edition || 1}`
              : `DAILY WORD #${dailyChallenge?.edition || 1}`}
          </span>
        </div>

        <h3 className="text-xl font-black text-white tracking-tight mb-1 relative z-10">
          {t?.dailyQuest || (isTR ? 'Günün Meydan Okuması' : 'Daily Challenge')}
        </h3>

        <p className="text-xs text-slate-300 mb-3.5 px-2 leading-relaxed relative z-10">
          {isTR
            ? `Tüm oyuncularla aynı anda bugünün gizemli kelimesini çöz ve ekstra +${DAILY_BONUS_STARS} Altın Yıldız kazan!`
            : `Solve today's featured mystery word alongside all hunters and earn +${DAILY_BONUS_STARS} Bonus Stars!`}
        </p>

        {/* Today's Featured Category Info */}
        {dailyChallenge && (
          <div className="w-full bg-slate-900/90 rounded-2xl p-2.5 border border-slate-800 flex items-center justify-between mb-3 relative z-10 text-left">
            <div className="flex items-center gap-2 min-w-0">
              <div className="w-8 h-8 rounded-xl bg-purple-500/15 border border-purple-500/35 flex items-center justify-center shrink-0">
                <PiCompassDuotone className="w-4 h-4 text-purple-300" />
              </div>
              <div className="min-w-0">
                <span className="text-[9px] font-black uppercase tracking-wider text-purple-300 block truncate">
                  {dailyChallenge.categoryName}
                </span>
                <span className="text-xs font-black text-white block truncate">
                  {dailyChallenge.subcategoryName}
                </span>
              </div>
            </div>

            <span className="px-2.5 py-1 rounded-xl bg-slate-950 border border-slate-700/80 text-[10.5px] font-black text-cyan-300 shrink-0">
              {dailyChallenge.wordLength} {isTR ? 'Harf' : 'Letters'}
            </span>
          </div>
        )}

        {/* Stats & Reward Card */}
        <div className="w-full bg-slate-950/80 rounded-2xl p-3 border border-slate-800/90 flex items-center justify-around mb-4 shadow-inner relative z-10">
          <div className="flex flex-col items-center">
            <span className="text-[10px] font-bold text-slate-400">
              {isTR ? 'Özel Ödül' : 'Bonus'}
            </span>
            <div className="flex items-center gap-1 mt-1">
              <PiStarFill className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-black text-amber-300">
                +{DAILY_BONUS_STARS}
              </span>
            </div>
          </div>

          <div className="w-px h-8 bg-slate-800" />

          <div className="flex flex-col items-center">
            <span className="text-[10px] font-bold text-slate-400">
              {isTR ? 'Günlük Seri' : 'Streak'}
            </span>
            <div className="flex items-center gap-1 mt-1">
              <PiFireFill className="w-4 h-4 text-orange-400" />
              <span className="text-sm font-black text-orange-300">
                {streak} {isTR ? 'Gün' : 'Days'}
              </span>
            </div>
          </div>

          <div className="w-px h-8 bg-slate-800" />

          <div className="flex flex-col items-center">
            <span className="text-[10px] font-bold text-slate-400">
              {isTR ? 'Yeni Kelime' : 'Next Word'}
            </span>
            <div className="flex items-center gap-1 mt-1">
              <PiClockCountdownDuotone className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-black text-cyan-300 tabular-nums">
                {countdown}
              </span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        {dailyCompleted ? (
          <div className="w-full flex flex-col gap-2 relative z-10">
            <div className="w-full py-3 px-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 font-black text-xs flex items-center justify-center gap-2">
              <PiCheckCircleFill className="w-4 h-4 text-emerald-400" />
              <span>
                {isTR
                  ? `Bugünün Kelimesi Çözüldü! (${dailyRecord?.attemptsCount || 1}/${dailyRecord?.maxAttempts || 6})`
                  : `Today's Word Completed! (${dailyRecord?.attemptsCount || 1}/${dailyRecord?.maxAttempts || 6})`}
              </span>
            </div>
            <button
              onClick={() => {
                soundManager.playKey();
                onClose();
              }}
              className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-black text-xs uppercase tracking-wider cursor-pointer"
            >
              {isTR ? 'Tamam' : 'Close'}
            </button>
          </div>
        ) : (
          <button
            onClick={() => {
              soundManager.playKey();
              onClose();
              onPlayDaily();
            }}
            className="w-full py-3.5 px-5 rounded-2xl bg-gradient-to-b from-purple-400 via-purple-500 to-indigo-600 hover:from-purple-300 hover:via-purple-400 hover:to-indigo-500 text-white font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 border-t-2 border-purple-200/80 border-b-[5px] border-b-indigo-950 active:border-b-[2px] active:translate-y-1 shadow-xl shadow-purple-950/80 transition-all cursor-pointer relative z-10"
          >
            <span>{isTR ? 'GÜNÜN KELİMESİNE BAŞLA' : 'START DAILY WORD'}</span>
            <PiArrowRightBold className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
