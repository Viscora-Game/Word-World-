import React from 'react';
import { Volume2, VolumeX, Settings, ChevronLeft, Star } from 'lucide-react';
import { soundManager } from '../utils/audio';

export default function Header({
  view,
  onBack,
  totalStars,
  soundEnabled,
  onToggleSound,
  onOpenSettings,
  onOpenHelp,
  title,
  subtitle
}) {
  return (
    <header className="w-full bg-[#0d121f]/95 backdrop-blur-md border-b border-slate-800/80 px-3 py-2 flex items-center justify-between shrink-0 z-30 select-none shadow-sm">
      <div className="flex items-center gap-1.5 min-w-0">
        {view !== 'main' && (
          <button
            onClick={() => {
              soundManager.playKey();
              onBack();
            }}
            className="w-8 h-8 rounded-xl bg-slate-800 border border-slate-700/80 border-b-2 border-b-slate-950 text-slate-200 hover:text-white active:translate-y-0.5 flex items-center justify-center transition shadow-sm cursor-pointer"
            title="Geri"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        )}

        <div className="flex flex-col min-w-0">
          <h1 className="text-base sm:text-lg font-black tracking-wide bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent truncate flex items-center gap-1 drop-shadow-sm">
            {title}
          </h1>
          {subtitle && (
            <span className="text-[10px] font-bold text-slate-400 truncate max-w-[160px] sm:max-w-[220px]">
              {subtitle}
            </span>
          )}
        </div>
      </div>

      <div className="flex items-center gap-1.5">
        {/* Total Stars Pill */}
        <div className="flex items-center gap-1.5 bg-gradient-to-r from-amber-500/20 via-yellow-500/15 to-amber-500/10 border border-amber-500/50 px-2.5 py-1.5 rounded-2xl shadow-md backdrop-blur-md">
          <Star className="w-3.5 h-3.5 text-amber-300 fill-amber-300 drop-shadow-sm" />
          <span className="text-amber-300 font-black text-xs tracking-wide">
            {totalStars}
          </span>
        </div>

        {/* Sound Toggle */}
        <button
          onClick={() => {
            soundManager.playKey();
            onToggleSound();
          }}
          className="w-8 h-8 rounded-xl bg-[#0a1324]/90 border border-slate-700/80 border-b-2 border-b-slate-950 flex items-center justify-center text-slate-300 hover:text-white active:translate-y-0.5 transition shadow-md cursor-pointer"
          title="Ses Aç/Kapat"
        >
          {soundEnabled ? (
            <Volume2 className="w-4 h-4 text-emerald-400" />
          ) : (
            <VolumeX className="w-4 h-4 text-slate-500" />
          )}
        </button>

        {/* Settings Button */}
        <button
          onClick={() => {
            soundManager.playKey();
            onOpenSettings();
          }}
          className="w-8 h-8 rounded-xl bg-[#0a1324]/90 border border-slate-700/80 border-b-2 border-b-slate-950 flex items-center justify-center text-slate-300 hover:text-white active:translate-y-0.5 transition shadow-md cursor-pointer"
          title="Ayarlar"
        >
          <Settings className="w-4 h-4 text-slate-300" />
        </button>
      </div>
    </header>
  );
}
