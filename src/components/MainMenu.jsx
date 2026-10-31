import React from 'react';
import {
  Play,
  Star,
  Volume2,
  VolumeX,
  Settings,
  ChevronRight,
  ClipboardList,
  MapPin,
  Trophy,
  Crown,
  Flame,
  TrendingUp,
  CheckCircle2
} from 'lucide-react';
import { soundManager } from '../utils/audio';
import { getAssetUrl } from '../utils/assetUrl';
import { DAILY_BONUS_STARS } from '../utils/dailyQuest';

export default function MainMenu({
  onPlay,
  onOpenCategories,
  onOpenDaily,
  onOpenSettings,
  onOpenLeaderboard,
  soundEnabled,
  onToggleSound,
  totalStars,
  playerName,
  playerRank = 22,
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
  const displayHunterName = playerName || t?.masterHunter || 'Usta Avcı';

  return (
    <div className="flex-1 w-full max-w-md mx-auto flex flex-col justify-between overflow-hidden select-none relative bg-[#070d1e]">
      
      {/* 1. CLEAN HIGH-RES ARTWORK BACKGROUND (High definition 3D Earth, Landmarks, Airplane & W-O-R-D Tiles) */}
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

      {/* Subtle atmospheric vignette at the bottom so buttons and cards pop cleanly without dulling the center artwork */}
      <div className="absolute inset-x-0 bottom-0 h-64 sm:h-72 bg-gradient-to-t from-[#040813]/90 via-[#040813]/25 to-transparent pointer-events-none z-0" />

      {/* 2. TOP BAR: Live Interactive Player Profile, Streak, Stars, Audio & Settings (Clean Vector Icons, Zero Emojis) */}
      <div className="relative z-10 flex items-center justify-between gap-1 w-full px-2.5 sm:px-3.5 pt-3 sm:pt-4 shrink-0">
        
        {/* Interactive Player Profile Badge (Opens League & Profile Modal) */}
        <button
          type="button"
          onClick={() => {
            soundManager.playKey();
            onOpenLeaderboard();
          }}
          className="flex items-center gap-1.5 sm:gap-2 bg-[#0a1324]/95 hover:bg-[#0d182d] border border-slate-700/80 px-2 py-1.5 rounded-2xl shadow-xl backdrop-blur-md active:scale-95 transition cursor-pointer min-w-0 shrink"
          title={isTR ? 'Profil ve Liderlik Tablosu' : 'Profile & Leaderboard'}
        >
          <div className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-gradient-to-tr from-amber-400 via-yellow-300 to-amber-500 p-0.5 shadow-md shrink-0">
            <div className="w-full h-full bg-[#070e1c] rounded-[10px] flex items-center justify-center">
              <Crown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-300 fill-amber-400/30 drop-shadow" />
            </div>
          </div>
          <div className="flex flex-col text-left min-w-0">
            <div className="flex items-center gap-1 leading-none">
              <span className="text-[10.5px] sm:text-[11px] font-black text-white tracking-wide truncate max-w-[68px] sm:max-w-[84px]">
                {displayHunterName}
              </span>
              <span className="text-[8px] font-black text-amber-400 bg-amber-500/20 border border-amber-500/40 px-1 py-0.2 rounded-md shrink-0">
                Lv.{Math.min(Math.floor(totalCompleted / 6) + 1, 99)}
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
            <Flame className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-400 fill-orange-400 drop-shadow-sm shrink-0" />
            <div className="flex flex-col leading-none text-left">
              <span className="text-[10.5px] sm:text-[11px] font-black text-orange-400">
                {streak}{isTR ? 'G' : 'D'}
              </span>
              <span className="text-[7px] font-bold text-slate-400 uppercase tracking-tighter">
                {isTR ? 'Seri' : 'Streak'}
              </span>
            </div>
          </button>

          {/* Stars Pill */}
          <button
            type="button"
            onClick={() => {
              soundManager.playKey();
              onOpenLeaderboard();
            }}
            className="flex items-center gap-1 bg-gradient-to-r from-amber-500/20 via-yellow-500/15 to-amber-500/10 border border-amber-500/50 px-2 py-1.5 rounded-2xl shadow-md backdrop-blur-md active:scale-95 transition cursor-pointer shrink-0"
          >
            <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-300 fill-amber-300 drop-shadow-sm shrink-0" />
            <div className="flex flex-col leading-none text-left">
              <span className="text-[10.5px] sm:text-[11px] font-black text-amber-300">{totalStars}</span>
              <span className="text-[7px] font-bold text-amber-400/90 uppercase tracking-tighter">
                {isTR ? 'Yıldız' : 'Stars'}
              </span>
            </div>
          </button>

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
              <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
            ) : (
              <VolumeX className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-500" />
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
            <Settings className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-300" />
          </button>
        </div>
      </div>

      {/* 3. HERO SHOWCASE SPACER (Shows the 3D Earth, landmarks, airplane trail & W-O-R-D tiles!) */}
      <div className="flex-1 w-full min-h-[140px] pointer-events-none" />

      {/* 4. LOWER ACTION SECTION: Logo + Primary Play Button + 3 Action Cards */}
      <div className="relative z-10 flex flex-col gap-2.5 w-full px-3.5 pb-6 shrink-0">
        
        {/* 3D "WORD & WORLD" Logo */}
        <div className="relative flex items-center justify-center select-none pt-0 pb-1 w-full max-w-[280px] sm:max-w-[320px] mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/15 via-cyan-500/20 to-blue-500/15 rounded-full blur-xl pointer-events-none" />

          <picture className="relative z-10 w-full h-auto max-h-[70px] sm:max-h-[82px] flex items-center justify-center">
            <source srcSet={getAssetUrl('/assets/icons/game_logo_transparent.webp')} type="image/webp" />
            <img
              src={getAssetUrl('/assets/icons/game_logo_transparent.png')}
              alt="Word & World"
              className="w-full h-auto max-h-[70px] sm:max-h-[82px] object-contain drop-shadow-[0_12px_28px_rgba(0,0,0,0.9)] hover:scale-105 active:scale-95 transition-transform duration-200 cursor-pointer"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </picture>
        </div>

        {/* Massive 3D Primary Play Button (OYUNA BAŞLA) */}
        <button
          onClick={() => {
            soundManager.playKey();
            onPlay();
          }}
          className="group relative w-full py-3.5 px-5 rounded-2xl bg-gradient-to-b from-emerald-400 via-emerald-500 to-teal-600 hover:from-emerald-300 hover:via-emerald-400 hover:to-teal-500 text-slate-950 font-black tracking-wider uppercase flex items-center justify-between border-t-2 border-emerald-200/90 border-b-[6px] border-b-emerald-950 active:border-b-[2px] active:translate-y-1 shadow-2xl shadow-emerald-950/90 transition-all cursor-pointer overflow-hidden"
        >
          <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/35 to-transparent -skew-x-20 pointer-events-none animate-shimmer-sweep" />

          <div className="relative z-10 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-slate-950/35 border border-emerald-200/50 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
              <Play className="w-5 h-5 text-white fill-white ml-0.5" />
            </div>
            <div className="flex flex-col text-left leading-none">
              <span className="text-lg sm:text-xl font-black text-slate-950 drop-shadow-[0_1px_0_rgba(255,255,255,0.4)]">
                {t?.playNow || 'OYUNA BAŞLA'}
              </span>
              <span className="text-[10.5px] font-extrabold text-emerald-950/90 mt-1">
                {totalCompleted} / {totalLevelsCount} {t?.levelsOpen || 'SEVİYE AÇIK'}
              </span>
            </div>
          </div>

          <div className="relative z-10 w-8 h-8 rounded-full bg-emerald-700/40 flex items-center justify-center">
            <ChevronRight className="w-5 h-5 text-slate-950 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </button>

        {/* 3 Action Cards Row (Günlük Görev, Dünya Serüveni, Liderlik Tablosu) */}
        <div className="grid grid-cols-3 gap-2">
          
          {/* Card 1: Günlük Görev (Purple Theme) */}
          <button
            onClick={() => {
              soundManager.playKey();
              onOpenDaily();
            }}
            className="relative rounded-2xl p-2.5 text-center bg-gradient-to-b from-[#1e0e33]/95 via-[#140b24]/95 to-[#0b0818]/95 border border-purple-500/60 border-b-[4px] border-b-purple-950 active:border-b-[1px] active:translate-y-[2px] shadow-xl shadow-purple-950/60 flex flex-col items-center justify-between group transition-all cursor-pointer overflow-hidden backdrop-blur-sm"
          >
            {!dailyCompleted && (
              <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-purple-400 animate-ping" />
            )}
            <div className="w-8 h-8 rounded-xl bg-purple-500/25 border border-purple-400/40 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform mb-1 shadow-sm">
              <ClipboardList className="w-4 h-4 text-purple-300" />
            </div>
            <div className="w-full">
              <span className="text-[8.5px] font-black uppercase text-purple-300 tracking-wider block truncate">
                {t?.dailyMission || 'GÜNLÜK GÖREV'}
              </span>
              <span className="text-[10px] font-extrabold text-white truncate block">
                {isTR ? 'Günün Kelimesi' : 'Daily Word'}
              </span>
              {dailyCompleted ? (
                <span className="inline-flex items-center gap-0.5 text-[9px] font-black text-emerald-300 bg-emerald-500/20 border border-emerald-500/40 px-1.5 py-0.2 rounded-full mt-1">
                  <CheckCircle2 className="w-2.5 h-2.5 text-emerald-400" />
                  <span>{isTR ? 'Tamam' : 'Done'}</span>
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 text-[9px] font-black text-amber-300 bg-amber-500/20 border border-amber-500/35 px-1.5 py-0.2 rounded-full mt-1">
                  <Star className="w-2.5 h-2.5 text-amber-300 fill-amber-400" />
                  <span>+{DAILY_BONUS_STARS}</span>
                </span>
              )}
            </div>
          </button>

          {/* Card 2: Dünya Serüveni (Cyan/Blue Theme) */}
          <button
            onClick={() => {
              soundManager.playKey();
              onOpenCategories();
            }}
            className="relative rounded-2xl p-2.5 text-center bg-gradient-to-b from-[#0b2138]/95 via-[#081729]/95 to-[#050e1b]/95 border border-cyan-500/60 border-b-[4px] border-b-cyan-950 active:border-b-[1px] active:translate-y-[2px] shadow-xl shadow-cyan-950/60 flex flex-col items-center justify-between group transition-all cursor-pointer overflow-hidden backdrop-blur-sm"
          >
            <div className="w-8 h-8 rounded-xl bg-cyan-500/25 border border-cyan-400/40 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform mb-1 shadow-sm">
              <MapPin className="w-4 h-4 text-cyan-300" />
            </div>
            <div className="w-full">
              <span className="text-[8.5px] font-black uppercase text-cyan-300 tracking-wider block truncate">
                {t?.worldAdventure || 'DÜNYA SERÜVENİ'}
              </span>
              <span className="text-[10px] font-extrabold text-white truncate block">
                {isTR ? '8 Büyük Tema' : '8 Epic Worlds'}
              </span>
              <span className="inline-flex items-center gap-0.5 text-[9px] font-black text-cyan-300 bg-cyan-500/20 border border-cyan-500/35 px-1.5 py-0.2 rounded-full mt-1">
                {totalLevelsCount}+ {isTR ? 'Seviye' : 'Levels'}
              </span>
            </div>
          </button>

          {/* Card 3: Liderlik Tablosu (Amber/Gold Theme) */}
          <button
            onClick={() => {
              soundManager.playKey();
              onOpenLeaderboard();
            }}
            className="relative rounded-2xl p-2.5 text-center bg-gradient-to-b from-[#2b1c06]/95 via-[#1f1405]/95 to-[#130b02]/95 border border-amber-500/60 border-b-[4px] border-b-amber-950 active:border-b-[1px] active:translate-y-[2px] shadow-xl shadow-amber-950/60 flex flex-col items-center justify-between group transition-all cursor-pointer overflow-hidden backdrop-blur-sm"
          >
            <div className="w-8 h-8 rounded-xl bg-amber-500/25 border border-amber-400/40 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform mb-1 shadow-sm">
              <Trophy className="w-4 h-4 text-amber-300" />
            </div>
            <div className="w-full">
              <span className="text-[8.5px] font-black uppercase text-amber-300 tracking-wider block truncate">
                {t?.leaderboardCard || 'LİDERLİK TABLOSU'}
              </span>
              <span className="text-[10px] font-extrabold text-white truncate block">
                {isTR ? 'Bu Hafta' : 'This Week'}
              </span>
              <span className="inline-flex items-center gap-1 text-[9px] font-black text-amber-300 bg-amber-500/20 border border-amber-500/35 px-1.5 py-0.2 rounded-full mt-1">
                <TrendingUp className="w-2.5 h-2.5 text-amber-300" />
                <span>#{playerRank}</span>
              </span>
            </div>
          </button>

        </div>

      </div>

    </div>
  );
}
