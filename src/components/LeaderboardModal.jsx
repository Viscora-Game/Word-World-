import React, { useState } from 'react';
import { X, Trophy, Medal, Star, Flame, Crown, ChevronRight, Shield } from 'lucide-react';
import { soundManager } from '../utils/audio';

const LEADERBOARD_DATA = [
  { rank: 1, name: 'Efsane_Avci', stars: 2450, level: 'Lv. 28', league: 'Elit', avatarBg: 'from-amber-400 to-yellow-600', isTop3: true },
  { rank: 2, name: 'Selin_Word', stars: 2180, level: 'Lv. 25', league: 'Elit', avatarBg: 'from-slate-300 to-slate-500', isTop3: true },
  { rank: 3, name: 'Kerem_Pro', stars: 1920, level: 'Lv. 22', league: 'Elit', avatarBg: 'from-amber-600 to-amber-800', isTop3: true },
  { rank: 4, name: 'KozmikGezgin', stars: 1680, level: 'Lv. 19', league: 'Usta' },
  { rank: 5, name: 'GizemliHarf', stars: 1420, level: 'Lv. 17', league: 'Usta' },
  { rank: 6, name: 'Bora_06', stars: 1290, level: 'Lv. 15', league: 'Uzman' },
  { rank: 7, name: 'DenizYildizi', stars: 1140, level: 'Lv. 14', league: 'Uzman' },
  { rank: 8, name: 'NovaPusula', stars: 980, level: 'Lv. 12', league: 'Gezgin' }
];

export default function LeaderboardModal({
  isOpen,
  onClose,
  totalStars = 106,
  playerRankTitle = 'Usta Avcı',
  t
}) {
  const [activeTab, setActiveTab] = useState('weekly'); // 'weekly' | 'allTime'

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/85 backdrop-blur-md animate-in fade-in duration-150 select-none">
      <div className="relative w-full max-w-sm rounded-3xl bg-[#0b1426] border border-amber-500/40 border-b-8 border-b-slate-950 p-4 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-56 h-28 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* Header Bar */}
        <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-800 relative z-10">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-2xl bg-amber-500/20 border border-amber-400/50 flex items-center justify-center text-amber-300 shadow-md">
              <Trophy className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-black text-white tracking-wide">
                {t?.leaderboard || 'LİDERLİK TABLOSU'}
              </h3>
              <p className="text-[10px] text-amber-300/80 font-bold">
                Elit Avcılar Ligi • Kalan Süre: 2G 14S
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              soundManager.playKey();
              onClose();
            }}
            className="w-8 h-8 rounded-full bg-slate-800/90 border border-slate-700 text-slate-300 hover:text-white flex items-center justify-center active:scale-90 transition cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Switcher: Bu Hafta / Tüm Zamanlar */}
        <div className="grid grid-cols-2 gap-1.5 p-1 bg-slate-950/80 rounded-2xl border border-slate-800 mb-3 relative z-10">
          <button
            onClick={() => {
              soundManager.playKey();
              setActiveTab('weekly');
            }}
            className={`py-1.5 text-xs font-black rounded-xl transition cursor-pointer ${
              activeTab === 'weekly'
                ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Bu Hafta
          </button>
          <button
            onClick={() => {
              soundManager.playKey();
              setActiveTab('allTime');
            }}
            className={`py-1.5 text-xs font-black rounded-xl transition cursor-pointer ${
              activeTab === 'allTime'
                ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Tüm Zamanlar
          </button>
        </div>

        {/* Top 3 Podium (1st, 2nd, 3rd) */}
        <div className="flex items-end justify-center gap-2 mb-3 pt-2 relative z-10">
          
          {/* #2 Silver Podium */}
          <div className="flex flex-col items-center flex-1">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-slate-300 to-slate-500 p-0.5 shadow-md mb-1 relative">
              <div className="w-full h-full bg-slate-950/80 rounded-[14px] flex items-center justify-center font-black text-slate-200 text-xs">
                🥈
              </div>
              <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-slate-400 text-slate-950 text-[9px] font-black flex items-center justify-center">2</span>
            </div>
            <span className="text-[10px] font-black text-slate-200 truncate max-w-[70px]">Selin_Word</span>
            <span className="text-[9px] font-extrabold text-amber-300">2,180 ⭐</span>
            <div className="w-full h-10 rounded-t-xl bg-gradient-to-b from-slate-600 to-slate-800 border-t-2 border-slate-400/80 flex items-center justify-center font-black text-xs text-slate-200 mt-1 shadow-md">
              2
            </div>
          </div>

          {/* #1 Gold Podium (Tallest) */}
          <div className="flex flex-col items-center flex-1">
            <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-amber-300 via-yellow-400 to-amber-600 p-0.5 shadow-lg mb-1 relative animate-bounce-slow">
              <div className="w-full h-full bg-slate-950/80 rounded-[14px] flex items-center justify-center font-black text-amber-300 text-sm">
                👑
              </div>
              <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-amber-400 text-slate-950 text-[10px] font-black flex items-center justify-center shadow-md">1</span>
            </div>
            <span className="text-[11px] font-black text-amber-300 truncate max-w-[80px]">Efsane_Avci</span>
            <span className="text-[10px] font-extrabold text-amber-400">2,450 ⭐</span>
            <div className="w-full h-14 rounded-t-xl bg-gradient-to-b from-amber-500 to-amber-700 border-t-2 border-amber-200 flex items-center justify-center font-black text-sm text-slate-950 mt-1 shadow-lg">
              1
            </div>
          </div>

          {/* #3 Bronze Podium */}
          <div className="flex flex-col items-center flex-1">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-amber-600 to-amber-900 p-0.5 shadow-md mb-1 relative">
              <div className="w-full h-full bg-slate-950/80 rounded-[14px] flex items-center justify-center font-black text-amber-500 text-xs">
                🥉
              </div>
              <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-amber-700 text-amber-200 text-[9px] font-black flex items-center justify-center">3</span>
            </div>
            <span className="text-[10px] font-black text-slate-200 truncate max-w-[70px]">Kerem_Pro</span>
            <span className="text-[9px] font-extrabold text-amber-300">1,920 ⭐</span>
            <div className="w-full h-8 rounded-t-xl bg-gradient-to-b from-amber-800 to-amber-950 border-t-2 border-amber-600/80 flex items-center justify-center font-black text-xs text-amber-300 mt-1 shadow-md">
              3
            </div>
          </div>

        </div>

        {/* Scrollable Leaderboard List (Rank 4+) */}
        <div className="flex-1 overflow-y-auto space-y-1.5 pr-0.5 mb-2 relative z-10 max-h-40">
          {LEADERBOARD_DATA.slice(3).map((item) => (
            <div
              key={item.rank}
              className="flex items-center justify-between p-2 rounded-xl bg-slate-900/90 border border-slate-800 text-left shadow-sm"
            >
              <div className="flex items-center gap-2">
                <span className="w-5 text-center text-xs font-black text-slate-400">
                  #{item.rank}
                </span>
                <div className="w-7 h-7 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-xs font-black text-white">
                  {item.name[0]}
                </div>
                <div>
                  <h4 className="text-xs font-black text-white">{item.name}</h4>
                  <span className="text-[9px] font-bold text-slate-400">{item.level} • {item.league}</span>
                </div>
              </div>

              <div className="flex items-center gap-1 bg-amber-500/10 border border-amber-500/30 px-2 py-0.5 rounded-full">
                <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                <span className="text-xs font-black text-amber-300">{item.stars}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Current Player Rank Card (#184 - Sticky Bottom) */}
        <div className="rounded-2xl bg-gradient-to-r from-emerald-950/90 via-slate-900 to-teal-950/90 border border-emerald-500/60 border-b-[3px] border-b-emerald-950 p-2.5 flex items-center justify-between shadow-lg relative z-10">
          <div className="flex items-center gap-2.5">
            <span className="text-xs font-black text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded-lg border border-emerald-500/40">
              #184
            </span>
            <div>
              <h4 className="text-xs font-black text-white flex items-center gap-1">
                Sen ({playerRankTitle})
                <span className="text-[8px] bg-amber-400 text-slate-950 px-1 rounded-sm font-black">SEN</span>
              </h4>
              <p className="text-[9.5px] text-slate-400">Üst lige geçmek için 14 ⭐ kaldı</p>
            </div>
          </div>

          <div className="flex items-center gap-1 bg-amber-500/20 border border-amber-400/50 px-2.5 py-1 rounded-xl shadow-sm">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span className="text-xs font-black text-amber-300">{totalStars}</span>
          </div>
        </div>

      </div>
    </div>
  );
}
