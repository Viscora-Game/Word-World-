import React from 'react';
import { ChevronRight } from 'lucide-react';
import { soundManager } from '../utils/audio';
import GameIcon from './GameIcon';
import { getAssetUrl } from '../utils/assetUrl';

export default function CategorySelect({
  categories,
  categoryProgress,
  onSelectCategory,
  t
}) {
  // Theme styling & high-res artwork mappings for all 8 Epic Worlds
  const THEME_CONFIGS = {
    spor: {
      thumb: getAssetUrl('/assets/art/cat_card_spor.webp'),
      gradient: 'from-[#062016]/95 via-[#081b27]/95 to-[#051624]/95',
      border: 'border-emerald-500/70',
      glow: 'shadow-[0_0_24px_rgba(16,185,129,0.25)]',
      pillBg: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
      barGradient: 'from-emerald-400 to-teal-400',
      subcatsText: 'İlk 11 • Efsaneler • NBA • Formula 1'
    },
    'dizi-film': {
      thumb: getAssetUrl('/assets/art/cat_card_dizi-film.webp'),
      gradient: 'from-[#220935]/95 via-[#150d2c]/95 to-[#0b0c24]/95',
      border: 'border-purple-500/70',
      glow: 'shadow-[0_0_24px_rgba(168,85,247,0.25)]',
      pillBg: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
      barGradient: 'from-purple-400 to-indigo-400',
      subcatsText: 'Filmler • Diziler • Oyuncular & Yönetmenler • Ödüller'
    },
    'genel-kultur': {
      thumb: getAssetUrl('/assets/art/cat_card_genel-kultur.webp'),
      gradient: 'from-[#2a1906]/95 via-[#1c140e]/95 to-[#0c0f1c]/95',
      border: 'border-amber-500/70',
      glow: 'shadow-[0_0_24px_rgba(245,158,11,0.25)]',
      pillBg: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
      barGradient: 'from-amber-400 to-yellow-400',
      subcatsText: 'Antik Medeniyetler • Tarihi Liderler • Savaşlar • Dünya Tarihi'
    },
    bilim: {
      thumb: getAssetUrl('/assets/art/cat_card_bilim.webp'),
      gradient: 'from-[#052136]/95 via-[#08182b]/95 to-[#050f1e]/95',
      border: 'border-cyan-500/70',
      glow: 'shadow-[0_0_24px_rgba(6,182,212,0.25)]',
      pillBg: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
      barGradient: 'from-cyan-400 to-blue-400',
      subcatsText: 'Bilim Dünyası • Genetik • Uzay & Gezegenler • Fizik & Kimya'
    },
    cografya: {
      thumb: getAssetUrl('/assets/art/cat_card_cografya.webp'),
      gradient: 'from-[#07262c]/95 via-[#0a1e2e]/95 to-[#071324]/95',
      border: 'border-cyan-500/70',
      glow: 'shadow-[0_0_24px_rgba(6,182,212,0.25)]',
      pillBg: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
      barGradient: 'from-cyan-400 to-emerald-400',
      subcatsText: 'Ülkeler & Başkentler • Şehirler • Dağlar • Denizler'
    },
    doga: {
      thumb: getAssetUrl('/assets/art/cat_card_doga.webp'),
      gradient: 'from-[#062412]/95 via-[#0c1f18]/95 to-[#08151f]/95',
      border: 'border-emerald-500/70',
      glow: 'shadow-[0_0_24px_rgba(16,185,129,0.25)]',
      pillBg: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
      barGradient: 'from-emerald-400 to-teal-400',
      subcatsText: 'Vahşi Hayvanlar • Deniz Canlıları • Kuşlar • Bitkiler'
    },
    muzik: {
      thumb: getAssetUrl('/assets/art/cat_card_muzik.webp'),
      gradient: 'from-[#2d092c]/95 via-[#1b0a29]/95 to-[#0d0a24]/95',
      border: 'border-fuchsia-500/70',
      glow: 'shadow-[0_0_24px_rgba(217,70,239,0.25)]',
      pillBg: 'bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-500/40',
      barGradient: 'from-fuchsia-400 to-purple-400',
      subcatsText: 'Efsane Sanatçılar • Müzik Grupları • Türler • Enstrümanlar'
    },
    mutfak: {
      thumb: getAssetUrl('/assets/art/cat_card_mutfak.webp'),
      gradient: 'from-[#311406]/95 via-[#230d07]/95 to-[#120907]/95',
      border: 'border-amber-500/70',
      glow: 'shadow-[0_0_24px_rgba(245,158,11,0.25)]',
      pillBg: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
      barGradient: 'from-amber-400 to-orange-500',
      subcatsText: 'Türk Mutfağı • Avrupa Mutfağı • Dünya Yemekleri • Tatlılar'
    }
  };

  return (
    <div className="flex-1 w-full max-w-md mx-auto px-3.5 py-2 flex flex-col justify-between overflow-hidden select-none relative bg-[#070d1e]">
      
      {/* 1. CUSTOM 3D EXPEDITION WALLPAPER (User Uploaded Vertical Artwork) */}
      <picture className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
        <source srcSet={getAssetUrl('/assets/art/categories_bg.webp')} type="image/webp" />
        <img
          src={getAssetUrl('/assets/art/categories_bg.jpg')}
          alt="Categories Background"
          className="w-full h-full object-cover object-top"
          loading="lazy"
          decoding="async"
        />
      </picture>

      {/* Atmospheric vignette for maximum readability and vibrant glassmorphism */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#070d1e]/85 via-[#070d1e]/55 to-[#040814]/90 pointer-events-none z-0" />

      {/* 2. TOP BANNER: The Exact "DÜNYALARI KEŞFET" 3D Graphic Banner */}
      <div className="relative z-10 w-full rounded-2xl overflow-hidden shadow-2xl border border-cyan-400/50 mb-2 shrink-0">
        <picture>
          <source srcSet={getAssetUrl('/assets/art/discover_worlds_banner.webp')} type="image/webp" />
          <img
            src={getAssetUrl('/assets/art/discover_worlds_banner.png')}
            alt="Dünyaları Keşfet"
            className="w-full h-auto max-h-20 sm:max-h-24 object-cover pointer-events-none"
            loading="eager"
            decoding="async"
          />
        </picture>
      </div>

      {/* 3. SCROLLABLE CATEGORY CARDS (Featuring the 4 New Dedicated Visuals) */}
      <div className="relative z-10 flex-1 overflow-y-auto space-y-2.5 pr-0.5 min-h-0 pb-1">
        {categories.map((cat) => {
          const prog = categoryProgress[cat.id] || { completedLevels: 0, stars: 0, totalLevels: 0 };
          const totalLevels = prog.totalLevels || 1;
          const maxStars = totalLevels * 3;
          const pct = Math.round((prog.completedLevels / totalLevels) * 100);
          const subCount = cat.subcategories?.length || 0;
          const config = THEME_CONFIGS[cat.id] || THEME_CONFIGS.spor;

          return (
            <button
              key={cat.id}
              onClick={() => {
                soundManager.playKey();
                onSelectCategory(cat.id);
              }}
              className={`group relative w-full text-left rounded-3xl p-2.5 sm:p-3 bg-gradient-to-r ${config.gradient} border ${config.border} ${config.glow} border-b-[5px] border-b-slate-950 active:border-b-[2px] active:translate-y-[2px] shadow-2xl flex flex-col justify-between overflow-hidden cursor-pointer transition-all duration-200 backdrop-blur-md`}
            >
              {/* Atmospheric background watermark of the category art on the right */}
              <img
                src={config.thumb}
                alt=""
                className="absolute right-0 top-0 w-2/5 h-full object-cover opacity-15 pointer-events-none group-hover:opacity-25 transition-opacity"
              />

              {/* Card Header Row: Left 3D Visual + Info + Stars Pill + Chevron */}
              <div className="flex items-center justify-between gap-2.5 w-full relative z-10">
                
                {/* Dedicated 3D Artwork Visual (16:9 widescreen mobile ratio) */}
                <div className="w-20 sm:w-24 h-15 sm:h-17 rounded-2xl overflow-hidden border-2 border-white/25 shadow-xl shrink-0 group-hover:scale-105 transition-transform duration-200 bg-slate-950">
                  <img
                    src={config.thumb}
                    alt={cat.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Center: Title + Subcategory Pill + Subcategory list */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <h3 className="text-xs sm:text-sm font-black text-white group-hover:text-amber-300 transition-colors truncate drop-shadow-sm">
                      {cat.name}
                    </h3>
                    <span className={`text-[8px] font-black uppercase px-2 py-0.5 rounded-full border shrink-0 ${config.pillBg}`}>
                      {subCount} {t?.subcategories || 'ALT KATEGORİ'}
                    </span>
                  </div>

                  {/* Subcategories list */}
                  <p className="text-[9.5px] sm:text-[10px] font-bold text-slate-200/90 truncate mt-1">
                    {config.subcatsText}
                  </p>
                </div>

                {/* Right: Star Progress & Chevron Button */}
                <div className="flex items-center gap-1.5 shrink-0">
                  <div className="flex items-center gap-1 bg-gradient-to-r from-amber-500/25 to-yellow-500/15 border border-amber-500/40 px-2 py-1 rounded-full shadow-sm backdrop-blur-xs">
                    <GameIcon name="star" size="w-3.5 h-3.5" />
                    <span className="text-[10px] sm:text-[11px] font-black text-amber-300">
                      {prog.stars}/{maxStars}
                    </span>
                  </div>

                  <div className="w-7 h-7 rounded-xl bg-slate-950/70 border border-slate-700/80 flex items-center justify-center group-hover:translate-x-0.5 transition-transform text-slate-300 shadow-inner">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Card Footer Row: Progress Bar & Percentage Indicator */}
              <div className="w-full mt-2 pt-1.5 border-t border-slate-800/80 flex items-center gap-2 relative z-10">
                <div className="flex-1 h-2 bg-slate-950/90 rounded-full overflow-hidden border border-slate-800/80 p-px shadow-inner">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${config.barGradient} transition-all duration-500 shadow-sm`}
                    style={{ width: `${Math.max(pct, 4)}%` }}
                  />
                </div>
                <span className="text-[9.5px] font-black text-slate-300 shrink-0">
                  %{pct}
                </span>
              </div>
            </button>
          );
        })}
      </div>

    </div>
  );
}
