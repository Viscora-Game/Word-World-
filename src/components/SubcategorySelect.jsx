import React from 'react';
import { Star, ChevronRight, Sparkles } from 'lucide-react';
import { soundManager } from '../utils/audio';
import GameIcon from './GameIcon';
import { getAssetUrl } from '../utils/assetUrl';

export default function SubcategorySelect({
  category,
  levelProgress,
  onSelectSubcategory,
  t
}) {
  const subcategories = category.subcategories || [];

  return (
    <div className="flex-1 w-full max-w-md mx-auto px-3.5 py-2 flex flex-col justify-start overflow-y-auto pb-4 select-none relative bg-[#070d1e]">
      
      {/* Background Artwork */}
      <img
        src={getAssetUrl('/assets/art/categories_bg.jpg')}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover object-top pointer-events-none select-none z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#070d1e]/85 via-[#070d1e]/60 to-[#040814]/90 pointer-events-none z-0" />

      {/* Category Header Card with 3D Main Icon & Dedicated Visual Banner */}
      <div className="relative rounded-3xl bg-gradient-to-r from-slate-900/90 via-slate-850/90 to-slate-900/90 border border-slate-700/80 border-b-[4px] border-b-slate-950 px-3.5 py-2.5 mb-2.5 shadow-2xl overflow-hidden shrink-0 z-10 backdrop-blur-md">
        {/* Category Artwork Banner in Background */}
        <img
          src={getAssetUrl(`/assets/art/cat_card_${category.id}.jpg`)}
          alt={category.name}
          className="absolute inset-0 w-full h-full object-cover opacity-25 pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-transparent pointer-events-none" />

        <div
          className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-br ${category.color} opacity-25 rounded-full blur-2xl pointer-events-none`}
        />
        <div className="flex items-center gap-3 relative z-10">
          <div
            className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${category.color} p-0.5 shadow-lg flex items-center justify-center shrink-0`}
          >
            <div className="w-full h-full bg-slate-950/70 rounded-[14px] flex items-center justify-center backdrop-blur-xs">
              <GameIcon name={category.iconKey} size="w-7 h-7" />
            </div>
          </div>
          <div className="min-w-0">
            <span className="text-[9px] font-black uppercase tracking-wider text-amber-400">
              {category.name}
            </span>
            <h2 className="text-sm sm:text-base font-black text-white truncate">
              {t?.selectSubcategory || 'Konsept & Alt Kategori'}
            </h2>
            <p className="text-[10px] text-slate-300/80 truncate">{category.description}</p>
          </div>
        </div>
      </div>

      {/* Subcategories List: Clean, modern cards with comfortable breathing space */}
      <div className="flex flex-col gap-2 relative z-10">
        {subcategories.map((sub) => {
          const subProgress = levelProgress[sub.id] || {};
          const totalLevels = sub.levels.length;
          const maxStars = totalLevels * 3;

          let completedCount = 0;
          let earnedStars = 0;
          Object.keys(subProgress).forEach((lvlId) => {
            if (subProgress[lvlId]?.completed) {
              completedCount++;
              earnedStars += subProgress[lvlId].stars || 0;
            }
          });

          const pct = Math.round((completedCount / (totalLevels || 1)) * 100);

          return (
            <button
              key={sub.id}
              onClick={() => {
                soundManager.playKey();
                onSelectSubcategory(sub.id);
              }}
              className="group relative w-full text-left rounded-3xl p-3 transition-all duration-150 bg-gradient-to-r from-slate-900/95 via-slate-850/95 to-slate-900/95 hover:to-slate-850 border border-slate-700/70 border-b-[4px] border-b-slate-950 active:border-b-[2px] active:translate-y-0.5 shadow-xl flex flex-col justify-between overflow-hidden cursor-pointer backdrop-blur-md"
            >
              {/* Subtle background glow */}
              <div
                className={`absolute -right-4 -bottom-4 w-28 h-28 bg-gradient-to-br ${category.color} opacity-15 rounded-full blur-xl pointer-events-none group-hover:scale-125 transition-transform`}
              />

              <div className="flex items-center justify-between gap-2 relative z-10 w-full mb-1.5">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div
                    className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${category.color} p-0.5 shadow-md flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}
                  >
                    <div className="w-full h-full bg-slate-950/70 rounded-[14px] flex items-center justify-center">
                      <GameIcon name={sub.iconKey} size="w-7 h-7" />
                    </div>
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <h3 className="text-xs sm:text-sm font-black text-white group-hover:text-amber-300 transition-colors truncate">
                        {sub.name}
                      </h3>
                      {sub.badge && (
                        <span className="text-[8px] font-black uppercase px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                          {sub.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-[10px] text-slate-300/80 truncate max-w-[210px] mt-0.5">
                      {sub.description}
                    </p>
                  </div>
                </div>

                {/* Stars Badge with 3D Star */}
                <div className="flex items-center gap-2 shrink-0">
                  <div className="flex items-center gap-1 bg-amber-500/15 border border-amber-500/30 px-2.5 py-1 rounded-full shadow-sm">
                    <GameIcon name="star" size="w-4 h-4" />
                    <span className="text-xs font-black text-amber-300">
                      {earnedStars}/{maxStars}
                    </span>
                  </div>
                  <div className="w-7 h-7 rounded-xl bg-slate-950/40 border border-slate-700/60 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                    <ChevronRight className="w-4 h-4 text-slate-300" />
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="relative z-10 w-full pt-1 flex items-center gap-2">
                <div className="flex-1 h-1.5 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 transition-all duration-300"
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <span className="text-[9px] font-black text-slate-400 shrink-0">
                  {completedCount}/{totalLevels} {t?.levels || 'Bölüm'}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
