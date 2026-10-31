import React from 'react';
import { GiCrown } from 'react-icons/gi';
import {
  PiPlayFill,
  PiStarFill,
  PiSpeakerHighDuotone,
  PiSpeakerSlashDuotone,
  PiGearSixDuotone,
  PiCaretRightBold,
  PiCalendarStarDuotone,
  PiCompassDuotone,
  PiFireFill,
  PiCheckCircleFill
} from 'react-icons/pi';
import { soundManager } from '../utils/audio';
import { getAssetUrl } from '../utils/assetUrl';
import { DAILY_BONUS_STARS } from '../utils/dailyQuest';

export default function MainMenu({
  onPlay,
  onOpenCategories,
  onOpenDaily,
  onOpenSettings,
  soundEnabled,
  onToggleSound,
  totalStars,
  streak = 1,
  dailyCompleted = false,
  levelProgress,
  categories,
  lang = 'tr',
  t
}) {
  const isTR = lang !== 'en';

  // Calculate overall level stats
  let totalCompleted = 0;
  let totalLevelsCount = 0;
  categories.forEach((cat) => {
    (cat.subcategories || []).forEach((sub) => {
      totalLevelsCount += (sub.levels || []).length;
      const subMap = levelProgress[sub.id] || {};
      Object.keys(subMap).forEach((lvlId) => {
        if (subMap[lvlId]?.completed) totalCompleted++;
      });
    });
  });

  const overallPct = Math.round((totalCompleted / (totalLevelsCount || 1)) * 100);
  const playerLevel = Math.min(Math.floor(totalCompleted / 6) + 1, 99);

  const getExplorerTitle = () => {
    if (totalCompleted >= 120) return isTR ? 'Efsane Avcı' : 'Legend Hunter';
    if (totalCompleted >= 50) return t?.masterHunter || (isTR ? 'Usta Avcı' : 'Master Hunter');
    if (totalCompleted >= 15) return isTR ? 'Dünya Kaşifi' : 'World Explorer';
    return isTR ? 'Kelime Avcısı' : 'Word Hunter';
  };

  return (
    <div className="flex-1 w-full max-w-md mx-auto flex flex-col justify-between overflow-hidden select-none relative bg-[#070d1e]">
      
      {/* 1. CLEAN HIGH-RES ARTWORK BACKGROUND */}
      <picture className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
        <source srcSet={getAssetUrl('/assets/art/main_menu_clean_bg.webp')} type="image/webp" />
        <img
          src={getAssetUrl('/assets/art/main_menu_clean_bg.jpg')}
          alt="Word & World Adventure"
          className="w-full h-full object-cover object-top pointer-events-none select-none contrast-[1.05] saturate-[1.10]"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
      </picture>

      {/* Subtle atmospheric vignette at the bottom */}
      <div className="absolute inset-x-0 bottom-0 h-80 sm:h-96 bg-gradient-to-t from-[#040814]/95 via-[#050b1a]/55 to-transparent pointer-events-none z-0" />

      {/* 2. TOP BAR: Explorer Progress, Streak, Stars, Audio & Settings */}
      <div className="relative z-10 flex items-center justify-between gap-1 w-full px-2.5 sm:px-3.5 pt-3 sm:pt-4 shrink-0">
        
        {/* Explorer Progress Badge */}
        <button
          type="button"
          onClick={() => {
            soundManager.playKey();
            onOpenCategories();
          }}
          className="flex items-center gap-1.5 sm:gap-2 bg-[#0a1324]/95 hover:bg-[#0d182d] border border-slate-700/80 px-2 py-1.5 rounded-2xl shadow-xl backdrop-blur-md active:scale-95 transition cursor-pointer min-w-0 shrink"
          title={isTR ? 'Keşif İlerlemesi' : 'Expedition Progress'}
        >
          <div className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-gradient-to-tr from-amber-400 via-yellow-300 to-amber-500 p-0.5 shadow-md shrink-0">
            <div className="w-full h-full bg-[#070e1c] rounded-[10px] flex items-center justify-center">
              <GiCrown className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-amber-300 drop-shadow" />
            </div>
          </div>
          <div className="flex flex-col text-left min-w-0">
            <div className="flex items-center gap-1 leading-none">
              <span className="text-[10.5px] sm:text-[11px] font-black text-white tracking-wide truncate max-w-[76px] sm:max-w-[92px]">
                {getExplorerTitle()}
              </span>
              <span className="text-[8px] font-black text-amber-400 bg-amber-500/20 border border-amber-500/40 px-1 py-0.2 rounded-md shrink-0">
                Lv.{playerLevel}
              </span>
            </div>
            <div className="flex items-center gap-1 mt-1">
              <div className="w-11 sm:w-14 h-1.5 bg-slate-800 rounded-full overflow-hidden border border-slate-700 shrink-0">
                <div
                  className="h-full bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full transition-all duration-300"
                  style={{ width: `${Math.max(overallPct, 8)}%` }}
                />
              </div>
              <span className="text-[8px] sm:text-[8.5px] font-bold text-slate-300 leading-none">
                {totalCompleted}/{totalLevelsCount}
              </span>
            </div>
          </div>
        </button>

        {/* Action Controls & Counters */}
        <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
          {/* Live Daily Streak */}
          <button
            type="button"
            onClick={() => {
              soundManager.playKey();
              onOpenDaily();
            }}
            className="flex items-center gap-1 bg-[#0a1324]/95 border border-slate-700/80 px-2 py-1.5 rounded-2xl shadow-md backdrop-blur-md active:scale-95 transition cursor-pointer shrink-0"
          >
            <PiFireFill className="w-4 h-4 text-orange-400 drop-shadow-sm shrink-0" />
            <div className="flex flex-col leading-none text-left">
              <span className="text-[10.5px] sm:text-[11px] font-black text-orange-400">
                {streak}{isTR ? 'G' : 'D'}
              </span>
              <span className="text-[7px] font-bold text-slate-400 uppercase tracking-tighter">
                {isTR ? 'Seri' : 'Streak'}
              </span>
            </div>
          </button>

          {/* Total Stars Pill */}
          <div className="flex items-center gap-1 bg-gradient-to-r from-amber-500/20 via-yellow-500/15 to-amber-500/10 border border-amber-500/50 px-2 py-1.5 rounded-2xl shadow-md backdrop-blur-md shrink-0">
            <PiStarFill className="w-4 h-4 text-amber-300 drop-shadow-sm shrink-0" />
            <div className="flex flex-col leading-none text-left">
              <span className="text-[10.5px] sm:text-[11px] font-black text-amber-300">{totalStars}</span>
              <span className="text-[7px] font-bold text-amber-400/90 uppercase tracking-tighter">
                {isTR ? 'Yıldız' : 'Stars'}
              </span>
            </div>
          </div>

          {/* Sound Toggle */}
          <button
            onClick={() => {
              soundManager.playKey();
              onToggleSound();
            }}
            className="w-[30px] h-[30px] sm:w-8 sm:h-8 rounded-xl bg-[#0a1324]/95 border border-slate-700/80 border-b-2 border-b-slate-950 flex items-center justify-center text-slate-300 hover:text-white active:translate-y-0.5 transition shadow-md cursor-pointer shrink-0"
            title={isTR ? 'Ses Aç/Kapat' : 'Toggle Audio'}
          >
            {soundEnabled ? (
              <PiSpeakerHighDuotone className="w-4 h-4 text-emerald-400" />
            ) : (
              <PiSpeakerSlashDuotone className="w-4 h-4 text-slate-500" />
            )}
          </button>

          {/* Settings Button */}
          <button
            onClick={() => {
              soundManager.playKey();
              onOpenSettings();
            }}
            className="w-[30px] h-[30px] sm:w-8 sm:h-8 rounded-xl bg-[#0a1324]/95 border border-slate-700/80 border-b-2 border-b-slate-950 flex items-center justify-center text-slate-300 hover:text-white active:translate-y-0.5 transition shadow-md cursor-pointer shrink-0"
            title={t?.settings || 'Ayarlar'}
          >
            <PiGearSixDuotone className="w-4 h-4 text-slate-200" />
          </button>
        </div>
      </div>

      {/* 3. HERO EARTH SHOWCASE SPACER (Proportional so logo sits closer to Earth without overlapping it) */}
      <div className="flex-[0.76] w-full min-h-[110px] pointer-events-none" />

      {/* 4. ELEVATED & REFINED LOWER SECTION */}
      <div className="relative z-10 flex flex-col gap-3 w-full px-4 shrink-0">
        
        {/* 3D "WORD & WORLD" Logo */}
        <div className="relative flex items-center justify-center select-none pb-0.5 w-full max-w-[305px] sm:max-w-[345px] mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 via-cyan-500/25 to-blue-500/20 rounded-full blur-2xl pointer-events-none" />

          <picture className="relative z-10 w-full h-auto max-h-[84px] sm:max-h-[96px] flex items-center justify-center">
            <source srcSet={getAssetUrl('/assets/icons/game_logo_transparent.webp')} type="image/webp" />
            <img
              src={getAssetUrl('/assets/icons/game_logo_transparent.png')}
              alt="Word & World"
              className="w-full h-auto max-h-[84px] sm:max-h-[96px] object-contain drop-shadow-[0_12px_28px_rgba(0,0,0,0.92)] hover:scale-105 active:scale-95 transition-transform duration-200 cursor-pointer"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </picture>
        </div>

        {/* Primary 3D Play Button (OYUNA BAŞLA) */}
        <button
          onClick={() => {
            soundManager.playKey();
            onPlay();
          }}
          className="group relative w-full py-3.5 px-4 rounded-2xl bg-gradient-to-b from-emerald-400 via-emerald-500 to-teal-600 hover:from-emerald-300 hover:via-emerald-400 hover:to-teal-500 text-slate-950 font-black tracking-wide uppercase flex items-center justify-between border-t-2 border-emerald-200/95 border-b-[6px] border-b-emerald-950 active:border-b-[2px] active:translate-y-1 shadow-[0_14px_30px_rgba(2,44,34,0.85)] transition-all cursor-pointer overflow-hidden"
        >
          <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/35 to-transparent -skew-x-20 pointer-events-none animate-shimmer-sweep" />

          <div className="relative z-10 flex items-center gap-3 min-w-0">
            <div className="w-11 h-11 rounded-2xl bg-slate-950/30 border border-white/35 flex items-center justify-center shadow-inner shrink-0 group-hover:scale-105 transition-transform">
              <PiPlayFill className="w-5 h-5 text-white ml-0.5 drop-shadow" />
            </div>
            <div className="flex flex-col text-left leading-none min-w-0">
              <span className="text-lg sm:text-xl font-black text-slate-950 tracking-wider drop-shadow-[0_1px_0_rgba(255,255,255,0.45)]">
                {t?.playNow || 'OYUNA BAŞLA'}
              </span>
              <span className="text-[10.5px] font-extrabold text-emerald-950/90 mt-1">
                {totalCompleted} / {totalLevelsCount} {isTR ? 'BÖLÜM TAMAMLANDI' : 'LEVELS CLEARED'}
              </span>
            </div>
          </div>

          <div className="relative z-10 flex items-center gap-1.5 bg-slate-950/20 border border-emerald-950/20 px-2.5 py-1.5 rounded-xl shrink-0">
            <span className="text-[11px] font-black text-slate-950">%{overallPct}</span>
            <PiCaretRightBold className="w-4 h-4 text-slate-950 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </button>

        {/* Refined 2-Card Bottom Row (Jewel-Tone 3D Game Cards) */}
        <div className="grid grid-cols-2 gap-2.5">
          
          {/* Card 1: Günlük Görev */}
          <button
            onClick={() => {
              soundManager.playKey();
              onOpenDaily();
            }}
            className="group relative rounded-2xl p-3 text-left bg-gradient-to-b from-[#281347]/95 via-[#190d30]/95 to-[#0e081d]/95 hover:from-[#321857]/95 border-t border-x border-purple-400/55 border-b-[5px] border-b-purple-950 active:border-b-[2px] active:translate-y-0.5 shadow-xl shadow-purple-950/70 flex flex-col justify-between gap-2.5 transition-all cursor-pointer overflow-hidden backdrop-blur-md"
          >
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-purple-500/25 rounded-full blur-xl pointer-events-none" />

            <div className="flex items-center justify-between w-full relative z-10">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 border border-purple-200/50 flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                <PiCalendarStarDuotone className="w-5 h-5 text-white drop-shadow-sm" />
              </div>

              {dailyCompleted ? (
                <span className="inline-flex items-center gap-1 text-[9.5px] font-black text-emerald-300 bg-emerald-500/20 border border-emerald-400/40 px-2 py-0.5 rounded-full">
                  <PiCheckCircleFill className="w-3 h-3 text-emerald-400" />
                  <span>{isTR ? 'Bitti' : 'Done'}</span>
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 text-[10px] font-black text-amber-300 bg-amber-500/20 border border-amber-400/45 px-2 py-0.5 rounded-full shadow-xs">
                  <PiStarFill className="w-3 h-3 text-amber-300" />
                  <span>+{DAILY_BONUS_STARS}</span>
                </span>
              )}
            </div>

            <div className="w-full flex items-end justify-between gap-1 relative z-10">
              <div className="min-w-0">
                <span className="text-[9px] font-black uppercase text-purple-300 tracking-wider block truncate">
                  {t?.dailyMission || 'GÜNLÜK GÖREV'}
                </span>
                <span className="text-xs sm:text-[13px] font-black text-white truncate block leading-snug">
                  {isTR ? 'Günün Kelimesi' : 'Daily Word'}
                </span>
              </div>
              <PiCaretRightBold className="w-3.5 h-3.5 text-purple-300/80 shrink-0 mb-0.5 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </button>

          {/* Card 2: Dünya Serüveni */}
          <button
            onClick={() => {
              soundManager.playKey();
              onOpenCategories();
            }}
            className="group relative rounded-2xl p-3 text-left bg-gradient-to-b from-[#0f2c4c]/95 via-[#0a1e36]/95 to-[#061121]/95 hover:from-[#14375e]/95 border-t border-x border-cyan-400/55 border-b-[5px] border-b-cyan-950 active:border-b-[2px] active:translate-y-0.5 shadow-xl shadow-cyan-950/70 flex flex-col justify-between gap-2.5 transition-all cursor-pointer overflow-hidden backdrop-blur-md"
          >
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-cyan-500/25 rounded-full blur-xl pointer-events-none" />

            <div className="flex items-center justify-between w-full relative z-10">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 border border-cyan-100/50 flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                <PiCompassDuotone className="w-5 h-5 text-white drop-shadow-sm" />
              </div>

              <span className="inline-flex items-center gap-1 text-[10px] font-black text-cyan-200 bg-cyan-500/20 border border-cyan-400/40 px-2 py-0.5 rounded-full shadow-xs">
                {totalLevelsCount} {isTR ? 'Bölüm' : 'Lvls'}
              </span>
            </div>

            <div className="w-full flex items-end justify-between gap-1 relative z-10">
              <div className="min-w-0">
                <span className="text-[9px] font-black uppercase text-cyan-300 tracking-wider block truncate">
                  {t?.worldAdventure || 'DÜNYA SERÜVENİ'}
                </span>
                <span className="text-xs sm:text-[13px] font-black text-white truncate block leading-snug">
                  {isTR ? '8 Büyük Tema' : '8 Epic Worlds'}
                </span>
              </div>
              <PiCaretRightBold className="w-3.5 h-3.5 text-cyan-300/80 shrink-0 mb-0.5 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </button>

        </div>

      </div>

      {/* 5. BOTTOM BREATHING CUSHION (Lifts lower section away from bottom bezel) */}
      <div className="flex-[0.24] w-full min-h-[20px] max-h-[68px] pointer-events-none shrink-0" />

    </div>
  );
}
