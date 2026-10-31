import React from 'react';
import {
  PiPaletteDuotone,
  PiStarFill,
  PiCheckCircleFill,
  PiLockKeyDuotone,
  PiSparkleFill,
  PiXBold
} from 'react-icons/pi';
import confetti from 'canvas-confetti';
import { soundManager } from '../utils/audio';
import { GAME_THEMES } from '../utils/themes';
import GameIcon from './GameIcon';

export default function ThemeModal({
  isOpen,
  onClose,
  activeThemeId,
  unlockedThemeIds = ['emerald'],
  availableStars = 0,
  totalStars = 0,
  onSelectTheme,
  onUnlockTheme,
  lang = 'tr'
}) {
  if (!isOpen) return null;

  const isTR = lang !== 'en';

  const handleThemeAction = (theme) => {
    const isUnlocked = unlockedThemeIds.includes(theme.id);
    const isActive = activeThemeId === theme.id;

    if (isActive) {
      soundManager.playKey();
      return;
    }

    if (isUnlocked) {
      soundManager.playKey();
      onSelectTheme(theme.id);
      return;
    }

    if (availableStars >= theme.cost) {
      soundManager.playWin();
      confetti({
        particleCount: 55,
        spread: 68,
        origin: { y: 0.6 },
        colors: theme.swatches
      });
      onUnlockTheme(theme);
    } else {
      soundManager.playError();
      onUnlockTheme(theme); // Parent displays helpful remaining-stars toast
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-150 select-none">
      <div className="relative w-full max-w-[395px] max-h-[88dvh] rounded-[32px] bg-gradient-to-b from-[#15122b] via-[#0d1124] to-[#080b18] border border-pink-400/35 border-b-[6px] border-b-slate-950 shadow-[0_24px_60px_rgba(0,0,0,0.9)] flex flex-col overflow-hidden">
        
        {/* Top Ambient Glow */}
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-72 h-32 bg-gradient-to-r from-pink-500/25 via-purple-500/25 to-amber-400/20 rounded-full blur-2xl pointer-events-none" />

        {/* Header */}
        <div className="relative z-10 px-4 pt-4 pb-3 border-b border-slate-800/80 flex items-center justify-between gap-2 shrink-0">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-pink-500 via-rose-500 to-purple-600 border border-pink-200/60 flex items-center justify-center shadow-lg shrink-0">
              <PiPaletteDuotone className="w-5 h-5 text-white drop-shadow" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1">
                <h2 className="text-sm sm:text-base font-black text-white tracking-wide truncate">
                  {isTR ? 'Tema & Kozmetik Atölyesi' : 'Theme & Style Studio'}
                </h2>
                <PiSparkleFill className="w-3.5 h-3.5 text-pink-300 shrink-0" />
              </div>
              <p className="text-[10px] font-bold text-slate-300/85 truncate">
                {isTR
                  ? 'Yıldızlarınla tahta ve klavye görünümünü özelleştir'
                  : 'Customize your board & keyboard using earned stars'}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              soundManager.playKey();
              onClose();
            }}
            className="w-8 h-8 rounded-xl bg-slate-900/90 border border-slate-700/80 border-b-2 border-b-slate-950 text-slate-300 hover:text-white flex items-center justify-center active:translate-y-0.5 transition cursor-pointer shrink-0"
            title={isTR ? 'Kapat' : 'Close'}
          >
            <PiXBold className="w-4 h-4" />
          </button>
        </div>

        {/* Wallet Balance Banner */}
        <div className="relative z-10 mx-4 mt-3 px-3.5 py-2 rounded-2xl bg-gradient-to-r from-amber-500/15 via-pink-500/10 to-purple-500/15 border border-amber-400/35 flex items-center justify-between gap-2 shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center shrink-0">
              <PiStarFill className="w-4 h-4 text-amber-300 drop-shadow" />
            </div>
            <div className="leading-tight">
              <span className="text-[9.5px] font-black uppercase tracking-wider text-amber-200/90 block">
                {isTR ? 'Kullanılabilir Yıldız' : 'Available Stars'}
              </span>
              <span className="text-[9.5px] font-bold text-slate-400">
                {isTR ? `Toplam Keşif: ${totalStars}` : `Total Earned: ${totalStars}`}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1 bg-slate-950/75 border border-amber-400/50 px-3 py-1 rounded-full shadow-inner">
            <PiStarFill className="w-3.5 h-3.5 text-amber-300" />
            <span className="text-sm font-black text-amber-300">{availableStars}</span>
          </div>
        </div>

        {/* Scrollable Theme Cards */}
        <div className="relative z-10 flex-1 overflow-y-auto px-4 py-3 space-y-2.5 min-h-0">
          {GAME_THEMES.map((theme) => {
            const isUnlocked = unlockedThemeIds.includes(theme.id);
            const isActive = activeThemeId === theme.id;
            const canAfford = availableStars >= theme.cost;

            return (
              <div
                key={theme.id}
                onClick={() => handleThemeAction(theme)}
                className={`group relative rounded-2xl p-3 bg-gradient-to-r ${theme.arenaFrame} border ${
                  isActive
                    ? 'border-emerald-400 ring-1 ring-emerald-400/50'
                    : 'border-white/15 hover:border-white/30'
                } border-b-[4px] border-b-slate-950 transition-all cursor-pointer overflow-hidden`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-tr ${theme.arenaGlow} pointer-events-none`}
                />

                <div className="relative z-10 flex items-center justify-between gap-2.5">
                  {/* Left: Icon + Name + Desc */}
                  <div className="flex items-center gap-2.5 min-w-0 flex-1">
                    <div className="w-10 h-10 rounded-2xl bg-slate-950/70 border border-white/15 flex items-center justify-center shrink-0 shadow-md">
                      <GameIcon name={theme.iconKey} size="w-6 h-6" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1.5">
                        <h3 className="text-xs sm:text-sm font-black text-white truncate">
                          {isTR ? theme.name.tr : theme.name.en}
                        </h3>
                        {theme.cost === 0 && (
                          <span className="text-[8px] font-black uppercase px-1.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700 shrink-0">
                            {isTR ? 'Standart' : 'Default'}
                          </span>
                        )}
                      </div>
                      <p className="text-[10px] font-bold text-slate-300/85 line-clamp-1 mt-0.5">
                        {isTR ? theme.desc.tr : theme.desc.en}
                      </p>
                    </div>
                  </div>

                  {/* Right: Action Pill */}
                  <div className="shrink-0">
                    {isActive ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-emerald-500/25 border border-emerald-400/60 text-emerald-200 text-[10px] font-black uppercase tracking-wide">
                        <PiCheckCircleFill className="w-3.5 h-3.5 text-emerald-300" />
                        <span>{isTR ? 'Aktif' : 'Active'}</span>
                      </span>
                    ) : isUnlocked ? (
                      <button
                        type="button"
                        className="px-3 py-1.5 rounded-xl bg-gradient-to-b from-slate-100 to-slate-300 text-slate-950 text-[10px] font-black uppercase tracking-wide border-b-[3px] border-b-slate-500 active:translate-y-0.5 cursor-pointer shadow-sm"
                      >
                        {isTR ? 'Kullan' : 'Equip'}
                      </button>
                    ) : (
                      <button
                        type="button"
                        className={`inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-[10.5px] font-black border-b-[3px] transition cursor-pointer ${
                          canAfford
                            ? 'bg-gradient-to-b from-amber-300 via-amber-400 to-amber-500 text-slate-950 border-t border-amber-100 border-b-amber-900 shadow-md shadow-amber-950/50 active:translate-y-0.5'
                            : 'bg-slate-900/85 text-slate-400 border border-slate-700/80 border-b-slate-950'
                        }`}
                      >
                        {canAfford ? (
                          <PiStarFill className="w-3.5 h-3.5 text-slate-950" />
                        ) : (
                          <PiLockKeyDuotone className="w-3.5 h-3.5 text-slate-400" />
                        )}
                        <span>{theme.cost}</span>
                        {!canAfford && <PiStarFill className="w-2.5 h-2.5 text-amber-400/80" />}
                      </button>
                    )}
                  </div>
                </div>

                {/* Live Tactile 3D Tile & Keyboard Mini-Preview Strip */}
                <div className="relative z-10 mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5">
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center text-[11px] font-black border-b-[3px] ${theme.typingTile}`}
                    >
                      W
                    </div>
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center text-[11px] font-black bg-gradient-to-b from-emerald-400 via-emerald-500 to-teal-600 border-t border-emerald-200/90 border-b-[3px] border-b-emerald-950 text-white shadow-sm">
                      O
                    </div>
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center text-[11px] font-black ${theme.currentEmptyTile}`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${theme.emptyDot}`} />
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    <div
                      className={`h-6 px-2 rounded-md flex items-center justify-center text-[9.5px] font-black ${theme.unusedKey}`}
                    >
                      A
                    </div>
                    <div
                      className={`h-6 px-2 rounded-md flex items-center justify-center text-[9.5px] font-black ${theme.unusedKey}`}
                    >
                      S
                    </div>
                    <div
                      className={`h-6 px-2.5 rounded-md flex items-center justify-center text-[8.5px] font-black ${theme.enterKey}`}
                    >
                      {isTR ? 'ONAY' : 'ENTER'}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
