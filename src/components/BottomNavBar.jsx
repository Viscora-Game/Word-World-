import React from 'react';
import { Home, Compass, ClipboardList, Trophy } from 'lucide-react';
import { soundManager } from '../utils/audio';

export default function BottomNavBar({
  activeTab = 'home', // 'home' | 'categories' | 'quests' | 'leaderboard'
  onSelectTab,
  t
}) {
  const tabs = [
    {
      id: 'home',
      label: t?.home || 'Ana Sayfa',
      icon: Home
    },
    {
      id: 'categories',
      label: t?.map || 'Harita',
      icon: Compass
    },
    {
      id: 'quests',
      label: t?.quests || 'Görevler',
      icon: ClipboardList,
      hasBadge: true
    },
    {
      id: 'leaderboard',
      label: t?.leaderboard || 'Liderlik',
      icon: Trophy
    }
  ];

  return (
    <div className="w-full max-w-md mx-auto px-4 pb-2 pt-1 shrink-0 z-20 select-none">
      <div className="w-full h-14 rounded-2xl bg-[#0c1427]/95 border border-slate-700/70 border-b-2 border-b-slate-950 shadow-2xl backdrop-blur-md px-3 flex items-center justify-around">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => {
                soundManager.playKey();
                onSelectTab(tab.id);
              }}
              className={`relative flex flex-col items-center justify-center gap-0.5 py-1 px-3 rounded-xl transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'text-amber-400 font-black scale-105'
                  : 'text-slate-400 hover:text-slate-200 font-bold'
              }`}
            >
              {/* Active Tab Glow */}
              {isActive && (
                <div className="absolute inset-0 bg-amber-400/15 rounded-xl blur-sm pointer-events-none" />
              )}

              {/* Notification Badge */}
              {tab.hasBadge && (
                <span className="absolute top-1 right-2.5 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-[#0c1427] animate-pulse" />
              )}

              <Icon
                className={`w-5 h-5 transition-transform ${
                  isActive ? 'text-amber-300 stroke-[2.5] drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]' : 'text-slate-400'
                }`}
              />

              <span
                className={`text-[9px] sm:text-[9.5px] font-black uppercase tracking-wider leading-none mt-0.5 ${
                  isActive ? 'text-amber-300 drop-shadow-sm' : 'text-slate-400'
                }`}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
