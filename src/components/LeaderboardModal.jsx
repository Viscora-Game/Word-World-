import React, { useState, useEffect } from 'react';
import { X, Trophy, Medal, Star, Crown, ChevronRight, Shield, Edit2, Check, Radio } from 'lucide-react';
import { soundManager } from '../utils/audio';
import { leaderboardService } from '../services/leaderboardService';

export default function LeaderboardModal({
  isOpen,
  onClose,
  totalStars = 0,
  totalCompleted = 0,
  t
}) {
  const [activeTab, setActiveTab] = useState('weekly'); // 'weekly' | 'allTime'
  const [players, setPlayers] = useState([]);
  const [isLive, setIsLive] = useState(false);
  const [playerName, setPlayerName] = useState(() => leaderboardService.getPlayerName());
  const [isEditingName, setIsEditingName] = useState(false);
  const [tempName, setTempName] = useState(playerName);

  useEffect(() => {
    if (isOpen) {
      // Sync player score
      leaderboardService.submitScore(totalStars, totalCompleted);

      // Fetch leaderboard
      leaderboardService.getLeaderboard(activeTab).then((res) => {
        setPlayers(res.players || []);
        setIsLive(res.isLive);
      });
    }
  }, [isOpen, activeTab, totalStars, totalCompleted]);

  if (!isOpen) return null;

  const handleSaveName = () => {
    soundManager.playKey();
    const updated = leaderboardService.setPlayerName(tempName);
    setPlayerName(updated);
    setIsEditingName(false);
    leaderboardService.submitScore(totalStars, totalCompleted);
  };

  // Determine current player rank
  const playerLevelNum = Math.min(Math.floor(totalCompleted / 8) + 1, 99);
  let playerRank = 184;
  if (totalStars >= 2450) playerRank = 1;
  else if (totalStars >= 2180) playerRank = 2;
  else if (totalStars >= 1920) playerRank = 3;
  else if (totalStars >= 1680) playerRank = 4;
  else if (totalStars >= 1420) playerRank = 5;
  else if (totalStars >= 1290) playerRank = 6;
  else if (totalStars >= 1140) playerRank = 7;
  else if (totalStars >= 980) playerRank = 8;
  else if (totalStars > 0) playerRank = Math.max(9, 184 - Math.floor(totalStars * 1.5));

  const top1 = players[0] || { name: 'Efsane_Avci', stars: 2450 };
  const top2 = players[1] || { name: 'Selin_Word', stars: 2180 };
  const top3 = players[2] || { name: 'Kerem_Pro', stars: 1920 };

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
              <div className="flex items-center gap-1.5">
                <h3 className="text-sm font-black text-white tracking-wide">
                  {t?.leaderboard || 'LİDERLİK TABLOSU'}
                </h3>
                {isLive && (
                  <span className="flex items-center gap-1 px-1.5 py-0.2 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-[8px] font-black text-emerald-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    MongoDB
                  </span>
                )}
              </div>
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

        {/* Top 3 Podium (Clean Vector Icons, Zero Emojis) */}
        <div className="flex items-end justify-center gap-2 mb-3 pt-2 relative z-10">
          
          {/* #2 Silver Podium */}
          <div className="flex flex-col items-center flex-1">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-slate-300 to-slate-500 p-0.5 shadow-md mb-1 relative">
              <div className="w-full h-full bg-slate-950/90 rounded-[14px] flex items-center justify-center">
                <Medal className="w-5 h-5 text-slate-200 drop-shadow-sm" />
              </div>
              <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-slate-300 text-slate-950 text-[9px] font-black flex items-center justify-center shadow">2</span>
            </div>
            <span className="text-[10px] font-black text-slate-200 truncate max-w-[70px]">{top2.name}</span>
            <div className="flex items-center gap-0.5 text-[9px] font-extrabold text-amber-300">
              <span>{top2.stars?.toLocaleString() || '2,180'}</span>
              <Star className="w-2.5 h-2.5 text-amber-400 fill-amber-400" />
            </div>
            <div className="w-full h-10 rounded-t-xl bg-gradient-to-b from-slate-600 to-slate-800 border-t-2 border-slate-400/80 flex items-center justify-center font-black text-xs text-slate-200 mt-1 shadow-md">
              2
            </div>
          </div>

          {/* #1 Gold Podium (Tallest) */}
          <div className="flex flex-col items-center flex-1">
            <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-amber-300 via-yellow-400 to-amber-600 p-0.5 shadow-lg mb-1 relative">
              <div className="w-full h-full bg-slate-950/90 rounded-[14px] flex items-center justify-center">
                <Crown className="w-6 h-6 text-amber-300 fill-amber-400/30 drop-shadow-md" />
              </div>
              <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-amber-400 text-slate-950 text-[10px] font-black flex items-center justify-center shadow-md">1</span>
            </div>
            <span className="text-[11px] font-black text-amber-300 truncate max-w-[80px]">{top1.name}</span>
            <div className="flex items-center gap-0.5 text-[10px] font-extrabold text-amber-400">
              <span>{top1.stars?.toLocaleString() || '2,450'}</span>
              <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
            </div>
            <div className="w-full h-14 rounded-t-xl bg-gradient-to-b from-amber-500 to-amber-700 border-t-2 border-amber-200 flex items-center justify-center font-black text-sm text-slate-950 mt-1 shadow-lg">
              1
            </div>
          </div>

          {/* #3 Bronze Podium */}
          <div className="flex flex-col items-center flex-1">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-amber-600 to-amber-900 p-0.5 shadow-md mb-1 relative">
              <div className="w-full h-full bg-slate-950/90 rounded-[14px] flex items-center justify-center">
                <Medal className="w-5 h-5 text-amber-500 drop-shadow-sm" />
              </div>
              <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-amber-700 text-amber-200 text-[9px] font-black flex items-center justify-center shadow">3</span>
            </div>
            <span className="text-[10px] font-black text-slate-200 truncate max-w-[70px]">{top3.name}</span>
            <div className="flex items-center gap-0.5 text-[9px] font-extrabold text-amber-300">
              <span>{top3.stars?.toLocaleString() || '1,920'}</span>
              <Star className="w-2.5 h-2.5 text-amber-400 fill-amber-400" />
            </div>
            <div className="w-full h-8 rounded-t-xl bg-gradient-to-b from-amber-800 to-amber-950 border-t-2 border-amber-600/80 flex items-center justify-center font-black text-xs text-amber-300 mt-1 shadow-md">
              3
            </div>
          </div>

        </div>

        {/* Scrollable Leaderboard List (Rank 4+) */}
        <div className="flex-1 overflow-y-auto space-y-1.5 pr-0.5 mb-2 relative z-10 max-h-40">
          {players.slice(3).map((item) => (
            <div
              key={item.rank || item.id}
              className="flex items-center justify-between p-2 rounded-xl bg-slate-900/90 border border-slate-800 text-left shadow-sm"
            >
              <div className="flex items-center gap-2">
                <span className="w-5 text-center text-xs font-black text-slate-400">
                  #{item.rank}
                </span>
                <div className="w-7 h-7 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-xs font-black text-amber-300">
                  {item.name ? item.name[0] : 'U'}
                </div>
                <div>
                  <h4 className="text-xs font-black text-white">{item.name}</h4>
                  <span className="text-[9px] font-bold text-slate-400">{item.level || 'Lv. 15'} • {item.league || 'Usta'}</span>
                </div>
              </div>

              <div className="flex items-center gap-1 bg-amber-500/15 border border-amber-500/30 px-2 py-1 rounded-lg">
                <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                <span className="text-xs font-black text-amber-300">
                  {item.stars?.toLocaleString()}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Current Player Rank Card (Editable Hunter Name) */}
        <div className="p-2.5 rounded-2xl bg-gradient-to-r from-emerald-950/90 via-teal-950/80 to-slate-900/90 border border-emerald-500/60 shadow-lg relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[10px] font-black">
              #{playerRank}
            </span>

            <div className="flex flex-col text-left">
              {isEditingName ? (
                <div className="flex items-center gap-1">
                  <input
                    type="text"
                    value={tempName}
                    onChange={(e) => setTempName(e.target.value)}
                    maxLength={16}
                    className="bg-slate-900 border border-emerald-400 rounded px-1.5 py-0.5 text-xs text-white font-black w-28 focus:outline-none"
                    autoFocus
                  />
                  <button
                    onClick={handleSaveName}
                    className="p-1 rounded bg-emerald-600 text-white hover:bg-emerald-500 cursor-pointer"
                  >
                    <Check className="w-3 h-3" />
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-black text-white">
                    {playerName}
                  </span>
                  <button
                    onClick={() => {
                      setTempName(playerName);
                      setIsEditingName(true);
                    }}
                    className="text-slate-400 hover:text-emerald-300 cursor-pointer"
                    title="İsmini Düzenle"
                  >
                    <Edit2 className="w-3 h-3" />
                  </button>
                  <span className="text-[8px] font-black px-1 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40">SEN</span>
                </div>
              )}
              <span className="text-[9px] font-bold text-slate-400">
                Lv.{playerLevelNum} • Üst lige geçmek için {Math.max(14, 25 - (totalStars % 25))} yıldız kaldı
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1 bg-amber-500/20 border border-amber-500/50 px-2.5 py-1 rounded-xl">
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span className="text-xs font-black text-amber-300">
              {totalStars}
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
