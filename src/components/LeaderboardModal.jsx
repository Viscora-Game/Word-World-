import React, { useState, useEffect, useMemo } from 'react';
import {
  X,
  Trophy,
  Medal,
  Star,
  Crown,
  Shield,
  Edit2,
  Check,
  TrendingUp,
  Clock
} from 'lucide-react';
import { soundManager } from '../utils/audio';
import {
  leaderboardService,
  getLeagueForStars,
  getWeeklySeasonCountdown
} from '../services/leaderboardService';

export default function LeaderboardModal({
  isOpen,
  onClose,
  totalStars = 0,
  totalCompleted = 0,
  lang = 'tr',
  onPlayerNameChange,
  t
}) {
  const [activeTab, setActiveTab] = useState('weekly');
  const [players, setPlayers] = useState([]);
  const [isLive, setIsLive] = useState(false);
  const [playerName, setPlayerName] = useState(() => leaderboardService.getPlayerName());
  const [isEditingName, setIsEditingName] = useState(false);
  const [tempName, setTempName] = useState(playerName);
  const [countdown, setCountdown] = useState(() => getWeeklySeasonCountdown(lang));

  const isTR = lang !== 'en';

  useEffect(() => {
    if (!isOpen) return;

    setCountdown(getWeeklySeasonCountdown(lang));
    const timer = setInterval(() => {
      setCountdown(getWeeklySeasonCountdown(lang));
    }, 30000);

    return () => clearInterval(timer);
  }, [isOpen, lang]);

  useEffect(() => {
    if (!isOpen) return;

    let cancelled = false;
    leaderboardService.submitScore(totalStars, totalCompleted);
    leaderboardService
      .getLeaderboard(activeTab, totalStars, totalCompleted, lang)
      .then((res) => {
        if (!cancelled) {
          setPlayers(res.players || []);
          setIsLive(Boolean(res.isLive));
        }
      });

    return () => {
      cancelled = true;
    };
  }, [isOpen, activeTab, totalStars, totalCompleted, lang, playerName]);

  const currentLeague = useMemo(
    () => getLeagueForStars(totalStars, lang),
    [totalStars, lang]
  );

  const playerEntry = useMemo(() => {
    return (
      players.find((p) => p.isCurrentUser) || {
        rank: players.length || 22,
        name: playerName,
        stars: totalStars,
        level: `Lv.${Math.min(Math.floor(totalCompleted / 6) + 1, 99)}`
      }
    );
  }, [players, playerName, totalStars, totalCompleted]);

  const nextRival = useMemo(() => {
    if (!playerEntry || playerEntry.rank <= 1) return null;
    const above = players.find((p) => p.rank === playerEntry.rank - 1);
    if (!above) return null;
    const diff = Math.max(1, (above.stars || 0) - totalStars + 1);
    return {
      name: above.name,
      rank: above.rank,
      diff
    };
  }, [players, playerEntry, totalStars]);

  if (!isOpen) return null;

  const handleSaveName = () => {
    soundManager.playKey();
    const updated = leaderboardService.setPlayerName(tempName);
    setPlayerName(updated);
    setIsEditingName(false);
    if (onPlayerNameChange) {
      onPlayerNameChange(updated);
    }
    leaderboardService.submitScore(totalStars, totalCompleted);
  };

  const top1 = players[0] || { name: 'Efsane_Avci', stars: 185, rank: 1 };
  const top2 = players[1] || { name: 'Selin_Word', stars: 162, rank: 2 };
  const top3 = players[2] || { name: 'Kerem_Pro', stars: 144, rank: 3 };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/85 backdrop-blur-md animate-in fade-in duration-150 select-none">
      <div className="relative w-full max-w-sm rounded-3xl bg-[#091224] border border-amber-500/45 border-b-[8px] border-b-slate-950 p-4 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Ambient Championship Aura */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* 1. HEADER BAR */}
        <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-slate-800/90 relative z-10 shrink-0">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-amber-400/25 via-yellow-500/20 to-amber-700/25 border border-amber-400/50 flex items-center justify-center text-amber-300 shadow-lg shrink-0">
              <Trophy className="w-5 h-5 drop-shadow" />
            </div>
            <div className="min-w-0 text-left">
              <div className="flex items-center gap-1.5">
                <h3 className="text-sm font-black text-white tracking-wide uppercase truncate">
                  {t?.leaderboard || (isTR ? 'LİDERLİK TABLOSU' : 'LEADERBOARD')}
                </h3>
                <span
                  className={`flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[8px] font-black border shrink-0 ${
                    isLive
                      ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300'
                      : 'bg-amber-500/15 border-amber-500/35 text-amber-300'
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full animate-pulse ${
                      isLive ? 'bg-emerald-400' : 'bg-amber-400'
                    }`}
                  />
                  {isLive ? 'MongoDB' : isTR ? 'Aktif Sezon' : 'Live Season'}
                </span>
              </div>

              <div className="flex items-center gap-2 mt-0.5 text-[10px] font-bold text-slate-300">
                <span className={`font-black ${currentLeague.accentText}`}>
                  {currentLeague.name}
                </span>
                <span className="text-slate-600">•</span>
                <span className="inline-flex items-center gap-1 text-amber-300/90">
                  <Clock className="w-3 h-3 text-amber-400" />
                  {countdown}
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              soundManager.playKey();
              onClose();
            }}
            className="w-8 h-8 rounded-full bg-slate-800/90 border border-slate-700 text-slate-300 hover:text-white flex items-center justify-center active:scale-90 transition cursor-pointer shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* 2. TAB SWITCHER: Bu Hafta / Tüm Zamanlar */}
        <div className="grid grid-cols-2 gap-1.5 p-1 bg-slate-950/90 rounded-2xl border border-slate-800/90 mb-2.5 relative z-10 shrink-0">
          <button
            onClick={() => {
              soundManager.playKey();
              setActiveTab('weekly');
            }}
            className={`py-1.5 text-xs font-black rounded-xl transition-all cursor-pointer ${
              activeTab === 'weekly'
                ? 'bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-slate-950 shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            {isTR ? 'Bu Hafta' : 'This Week'}
          </button>
          <button
            onClick={() => {
              soundManager.playKey();
              setActiveTab('allTime');
            }}
            className={`py-1.5 text-xs font-black rounded-xl transition-all cursor-pointer ${
              activeTab === 'allTime'
                ? 'bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-slate-950 shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            {isTR ? 'Tüm Zamanlar' : 'All Time'}
          </button>
        </div>

        {/* 3. TOP 3 CHAMPIONSHIP PODIUM */}
        <div className="flex items-end justify-center gap-2 mb-2.5 pt-1.5 px-1 relative z-10 shrink-0">
          
          {/* #2 SILVER PODIUM */}
          <div className="flex flex-col items-center flex-1 min-w-0">
            <div
              className={`w-11 h-11 rounded-2xl bg-gradient-to-tr from-slate-300 to-slate-500 p-0.5 shadow-md mb-1 relative ${
                top2.isCurrentUser ? 'ring-2 ring-emerald-400' : ''
              }`}
            >
              <div className="w-full h-full bg-slate-950/95 rounded-[14px] flex items-center justify-center">
                <Medal className="w-5 h-5 text-slate-200 drop-shadow-sm" />
              </div>
              <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-slate-200 text-slate-950 text-[9px] font-black flex items-center justify-center shadow">
                2
              </span>
            </div>
            <div className="flex items-center gap-1 max-w-full">
              <span className="text-[10px] font-black text-slate-100 truncate max-w-[68px]">
                {top2.name}
              </span>
              {top2.isCurrentUser && (
                <span className="text-[7px] font-black px-1 rounded bg-emerald-500/30 text-emerald-300 border border-emerald-400/50">
                  {isTR ? 'SEN' : 'YOU'}
                </span>
              )}
            </div>
            <div className="flex items-center gap-0.5 text-[9.5px] font-extrabold text-amber-300">
              <span>{top2.stars?.toLocaleString()}</span>
              <Star className="w-2.5 h-2.5 text-amber-400 fill-amber-400" />
            </div>
            <div className="w-full h-9 rounded-t-xl bg-gradient-to-b from-slate-500/90 to-slate-800 border-t-2 border-slate-300/80 flex items-center justify-center font-black text-xs text-white mt-1 shadow-md">
              #2
            </div>
          </div>

          {/* #1 GOLD PODIUM */}
          <div className="flex flex-col items-center flex-1 min-w-0">
            <div
              className={`w-13 h-13 rounded-2xl bg-gradient-to-tr from-amber-300 via-yellow-400 to-amber-600 p-0.5 shadow-lg shadow-amber-500/30 mb-1 relative ${
                top1.isCurrentUser ? 'ring-2 ring-emerald-400' : ''
              }`}
            >
              <div className="w-full h-full bg-slate-950/95 rounded-[14px] flex items-center justify-center">
                <Crown className="w-6 h-6 text-amber-300 fill-amber-400/35 drop-shadow-md" />
              </div>
              <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-amber-400 text-slate-950 text-[10px] font-black flex items-center justify-center shadow-md">
                1
              </span>
            </div>
            <div className="flex items-center gap-1 max-w-full">
              <span className="text-[11px] font-black text-amber-300 truncate max-w-[78px]">
                {top1.name}
              </span>
              {top1.isCurrentUser && (
                <span className="text-[7px] font-black px-1 rounded bg-emerald-500/30 text-emerald-300 border border-emerald-400/50">
                  {isTR ? 'SEN' : 'YOU'}
                </span>
              )}
            </div>
            <div className="flex items-center gap-0.5 text-[10px] font-extrabold text-amber-400">
              <span>{top1.stars?.toLocaleString()}</span>
              <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
            </div>
            <div className="w-full h-13 rounded-t-xl bg-gradient-to-b from-amber-400 via-amber-500 to-amber-700 border-t-2 border-amber-100 flex items-center justify-center font-black text-sm text-slate-950 mt-1 shadow-lg">
              #1
            </div>
          </div>

          {/* #3 BRONZE PODIUM */}
          <div className="flex flex-col items-center flex-1 min-w-0">
            <div
              className={`w-11 h-11 rounded-2xl bg-gradient-to-tr from-amber-600 to-amber-900 p-0.5 shadow-md mb-1 relative ${
                top3.isCurrentUser ? 'ring-2 ring-emerald-400' : ''
              }`}
            >
              <div className="w-full h-full bg-slate-950/95 rounded-[14px] flex items-center justify-center">
                <Medal className="w-5 h-5 text-amber-500 drop-shadow-sm" />
              </div>
              <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-amber-700 text-amber-100 text-[9px] font-black flex items-center justify-center shadow">
                3
              </span>
            </div>
            <div className="flex items-center gap-1 max-w-full">
              <span className="text-[10px] font-black text-slate-100 truncate max-w-[68px]">
                {top3.name}
              </span>
              {top3.isCurrentUser && (
                <span className="text-[7px] font-black px-1 rounded bg-emerald-500/30 text-emerald-300 border border-emerald-400/50">
                  {isTR ? 'SEN' : 'YOU'}
                </span>
              )}
            </div>
            <div className="flex items-center gap-0.5 text-[9.5px] font-extrabold text-amber-300">
              <span>{top3.stars?.toLocaleString()}</span>
              <Star className="w-2.5 h-2.5 text-amber-400 fill-amber-400" />
            </div>
            <div className="w-full h-7 rounded-t-xl bg-gradient-to-b from-amber-700 to-amber-950 border-t-2 border-amber-500/80 flex items-center justify-center font-black text-xs text-amber-200 mt-1 shadow-md">
              #3
            </div>
          </div>

        </div>

        {/* 4. SCROLLABLE LEADERBOARD LIST (Rank #4+) */}
        <div className="flex-1 overflow-y-auto space-y-1.5 pr-1 mb-2.5 relative z-10 min-h-[130px] max-h-48">
          {players.slice(3).map((item) => {
            const isMe = Boolean(item.isCurrentUser);
            return (
              <div
                key={item.id || item.rank}
                className={`flex items-center justify-between p-2 rounded-xl border text-left transition-all ${
                  isMe
                    ? 'bg-gradient-to-r from-emerald-950/90 via-teal-950/75 to-slate-900/90 border-emerald-400/70 ring-1 ring-emerald-400/30 shadow-md'
                    : 'bg-slate-900/90 border-slate-800/90 shadow-xs'
                }`}
              >
                <div className="flex items-center gap-2 min-w-0">
                  <span
                    className={`w-6 text-center text-[11px] font-black shrink-0 ${
                      isMe ? 'text-emerald-300' : 'text-slate-400'
                    }`}
                  >
                    #{item.rank}
                  </span>

                  <div
                    className={`w-7 h-7 rounded-lg border flex items-center justify-center text-xs font-black shrink-0 ${
                      isMe
                        ? 'bg-emerald-500/25 border-emerald-400/60 text-emerald-200'
                        : 'bg-slate-800 border-slate-700 text-amber-300'
                    }`}
                  >
                    {(item.name || 'U')[0].toUpperCase()}
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-xs font-black text-white truncate max-w-[115px]">
                        {item.name}
                      </h4>
                      {isMe && (
                        <span className="text-[7.5px] font-black px-1.5 py-0.2 rounded-full bg-emerald-500/25 text-emerald-300 border border-emerald-400/50">
                          {isTR ? 'SEN' : 'YOU'}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="text-[9px] font-bold text-slate-400">
                        {item.level}
                      </span>
                      <span
                        className={`text-[8px] font-black px-1.5 py-0.2 rounded-full border ${
                          item.leaguePillClass || 'bg-slate-800 text-slate-300 border-slate-700'
                        }`}
                      >
                        {item.league}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1 bg-amber-500/15 border border-amber-500/35 px-2 py-1 rounded-lg shrink-0">
                  <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                  <span className="text-xs font-black text-amber-300">
                    {item.stars?.toLocaleString()}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* 5. PINNED PLAYER COMMAND & LEAGUE PROGRESSION CARD */}
        <div className="p-2.5 rounded-2xl bg-gradient-to-r from-emerald-950/95 via-teal-950/85 to-slate-900/95 border border-emerald-500/60 shadow-xl relative z-10 shrink-0 flex flex-col gap-2">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 min-w-0">
              <div className="px-2 py-1 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-400/50 text-xs font-black shrink-0 shadow-inner">
                #{playerEntry.rank}
              </div>

              <div className="flex flex-col text-left min-w-0">
                {isEditingName ? (
                  <div className="flex items-center gap-1">
                    <input
                      type="text"
                      value={tempName}
                      onChange={(e) => setTempName(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') handleSaveName();
                      }}
                      maxLength={16}
                      placeholder={isTR ? 'Avcı Adın...' : 'Hunter Name...'}
                      className="bg-slate-950 border border-emerald-400 rounded-lg px-2 py-0.5 text-xs text-white font-black w-32 focus:outline-none select-text"
                      autoFocus
                    />
                    <button
                      onClick={handleSaveName}
                      className="p-1 rounded-lg bg-emerald-500 text-slate-950 hover:bg-emerald-400 cursor-pointer"
                    >
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-black text-white truncate max-w-[120px]">
                      {playerName}
                    </span>
                    <button
                      onClick={() => {
                        soundManager.playKey();
                        setTempName(playerName);
                        setIsEditingName(true);
                      }}
                      className="p-0.5 rounded text-emerald-300/80 hover:text-emerald-200 cursor-pointer"
                      title={isTR ? 'İsmini Düzenle' : 'Edit Name'}
                    >
                      <Edit2 className="w-3 h-3" />
                    </button>
                    <span className={`text-[8px] font-black px-1.5 py-0.2 rounded-full border ${currentLeague.pillClass}`}>
                      {currentLeague.name}
                    </span>
                  </div>
                )}

                <div className="flex items-center gap-1 text-[9.5px] font-bold text-slate-300 mt-0.5 truncate">
                  <TrendingUp className="w-3 h-3 text-emerald-400 shrink-0" />
                  {nextRival ? (
                    <span className="truncate">
                      {isTR
                        ? `#${nextRival.rank} ${nextRival.name} için +${nextRival.diff} yıldız!`
                        : `+${nextRival.diff} stars to pass #${nextRival.rank} ${nextRival.name}!`}
                    </span>
                  ) : (
                    <span className="text-amber-300 font-black">
                      {isTR ? 'Zirvenin Tek Hakimi Sensin!' : 'You Rule the #1 Throne!'}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1 bg-amber-500/20 border border-amber-400/50 px-2.5 py-1 rounded-xl shrink-0 shadow-sm">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="text-xs font-black text-amber-300">{totalStars}</span>
            </div>
          </div>

          {/* League Tier Progress Bar */}
          {currentLeague.nextName && (
            <div className="w-full flex items-center gap-2 pt-0.5">
              <Shield className="w-3 h-3 text-amber-300 shrink-0" />
              <div className="flex-1 h-1.5 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${currentLeague.barGradient} transition-all duration-500`}
                  style={{ width: `${Math.max(6, currentLeague.progressPct)}%` }}
                />
              </div>
              <span className="inline-flex items-center gap-0.5 text-[8.5px] font-black text-slate-300 shrink-0">
                <span>{currentLeague.nextName}: {currentLeague.starsNeeded}</span>
                <Star className="w-2.5 h-2.5 text-amber-400 fill-amber-400" />
              </span>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
