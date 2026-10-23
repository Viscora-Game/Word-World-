import React from 'react';
import { Star, Lock, Play } from 'lucide-react';
import { soundManager } from '../utils/audio';
import GameIcon from './GameIcon';

export default function LevelSelect({
  subcategory,
  categoryColor = 'from-amber-500 to-orange-600',
  levelProgress,
  onSelectLevel,
  t
}) {
  const currentLevelProgress = levelProgress[subcategory.id] || {};

  let maxUnlocked = 1;
  Object.keys(currentLevelProgress).forEach((lvlId) => {
    const num = parseInt(lvlId, 10);
    if (currentLevelProgress[lvlId]?.completed && num + 1 > maxUnlocked) {
      maxUnlocked = num + 1;
    }
  });

  return (
    <div className="flex-1 w-full max-w-md mx-auto px-3.5 py-2.5 flex flex-col justify-start overflow-y-auto pb-4 select-none relative bg-[#070d1e]">
      
      {/* Background Artwork */}
      <img
        src="/assets/art/categories_bg.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover object-top pointer-events-none select-none z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#070d1e]/85 via-[#070d1e]/60 to-[#040814]/90 pointer-events-none z-0" />

      {/* Subcategory Header Card with 3D Game Icon */}
      <div className="relative rounded-3xl bg-gradient-to-r from-slate-900/90 via-slate-850/90 to-slate-900/90 border border-slate-700/80 border-b-[4px] border-b-slate-950 px-3.5 py-2.5 mb-2.5 shadow-2xl overflow-hidden shrink-0 z-10 backdrop-blur-md">
        <div
          className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-br ${categoryColor} opacity-25 rounded-full blur-2xl pointer-events-none`}
        />
        <div className="flex items-center gap-3 relative z-10">
          <div
            className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${categoryColor} p-0.5 shadow-lg flex items-center justify-center shrink-0`}
          >
            <div className="w-full h-full bg-slate-950/70 rounded-[14px] flex items-center justify-center backdrop-blur-xs">
              <GameIcon name={subcategory.iconKey} size="w-7 h-7" />
            </div>
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="text-[9px] font-black uppercase tracking-wider text-amber-400">
                {subcategory.levels.length} {t?.levels || 'Bölüm'}
              </span>
              {subcategory.badge && (
                <span className="text-[8px] font-black uppercase px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  {subcategory.badge}
                </span>
              )}
            </div>
            <h2 className="text-sm sm:text-base font-black text-white truncate">
              {subcategory.name}
            </h2>
            <p className="text-[10px] text-slate-300/80 truncate">{subcategory.description}</p>
          </div>
        </div>
      </div>

      {/* Level Grid: 3-column Juicy Stage Map */}
      <div className="grid grid-cols-3 gap-2 relative z-10">
        {subcategory.levels.map((lvl) => {
          const lvlInfo = currentLevelProgress[lvl.id] || { completed: false, stars: 0 };
          const isUnlocked = lvl.id <= maxUnlocked;
          const isCurrent = lvl.id === maxUnlocked && !lvlInfo.completed;
          const wordLength = lvl.word.replace(/\s+/g, '').length;

          let btnClass = 'bg-gradient-to-b from-slate-800 to-slate-850 hover:to-slate-800 border-t border-slate-700/80 border-b-[4px] border-b-slate-950 active:border-b-[2px] active:translate-y-0.5 shadow-md';

          if (!isUnlocked) {
            btnClass = 'bg-slate-900/40 border-t border-slate-800/80 border-b-2 border-b-slate-950 opacity-40 cursor-not-allowed';
          } else if (isCurrent) {
            btnClass = 'bg-gradient-to-b from-indigo-600 via-indigo-700 to-purple-800 border-t-2 border-indigo-300 border-b-[5px] border-b-indigo-950 shadow-xl shadow-indigo-950/60 active:border-b-[2px] active:translate-y-0.5 beacon-pulse';
          } else if (lvlInfo.completed) {
            btnClass = 'bg-gradient-to-b from-slate-800 via-slate-850 to-slate-900 border-t border-emerald-500/30 border-b-[4px] border-b-slate-950 shadow-md active:border-b-[2px] active:translate-y-0.5';
          }

          return (
            <button
              key={lvl.id}
              disabled={!isUnlocked}
              onClick={() => {
                if (isUnlocked) {
                  soundManager.playKey();
                  onSelectLevel(lvl.id);
                } else {
                  soundManager.playError();
                }
              }}
              className={`relative rounded-2xl p-2.5 flex flex-col items-center justify-between min-h-[86px] sm:min-h-[96px] transition-all duration-150 cursor-pointer ${btnClass}`}
            >
              {/* Header: length & lock indicator */}
              <div className="w-full flex items-center justify-between">
                <span className="text-[9px] font-black text-slate-300">
                  {wordLength} {t?.language === 'tr' ? 'Harf' : 'Ltr'}
                </span>
                {!isUnlocked ? (
                  <Lock className="w-3.5 h-3.5 text-slate-500" />
                ) : isCurrent ? (
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                ) : null}
              </div>

              {/* Center: Stage Number */}
              <div className="my-0.5 flex flex-col items-center">
                <span
                  className={`text-xl sm:text-2xl font-black ${
                    isCurrent
                      ? 'text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]'
                      : !isUnlocked
                      ? 'text-slate-600'
                      : 'text-amber-300 drop-shadow-sm'
                  }`}
                >
                  {lvl.id}
                </span>
              </div>

              {/* Bottom: 3-Star Rating or Play Pill */}
              <div className="w-full flex items-center justify-center">
                {isCurrent ? (
                  <div className="flex items-center gap-1 bg-white/20 border border-white/40 px-2 py-0.5 rounded-full text-[9px] font-black text-white">
                    <Play className="w-2.5 h-2.5 fill-white" />
                    <span>{t?.playNow || 'OYNA'}</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-0.5">
                    {[1, 2, 3].map((s) => (
                      <Star
                        key={s}
                        className={`w-3.5 h-3.5 ${
                          s <= lvlInfo.stars
                            ? 'fill-amber-400 text-amber-400 drop-shadow-[0_0_4px_rgba(251,191,36,0.6)]'
                            : 'text-slate-700 fill-slate-800'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
