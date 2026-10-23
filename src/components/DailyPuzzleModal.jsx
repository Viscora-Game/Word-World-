import React from 'react';
import { X, Sparkles, Star, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';
import { soundManager } from '../utils/audio';
import GameIcon from './GameIcon';

export default function DailyPuzzleModal({
  isOpen,
  onClose,
  onPlayDaily,
  dailyCompleted = false,
  t
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/85 backdrop-blur-md animate-in fade-in duration-150 select-none">
      <div className="relative w-full max-w-sm rounded-3xl bg-slate-900 border border-purple-500/50 border-b-8 border-b-slate-950 p-5 shadow-2xl overflow-hidden flex flex-col items-center text-center">
        
        {/* Glow backdrop */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-purple-500/25 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={() => {
            soundManager.playKey();
            onClose();
          }}
          className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-slate-800 border border-slate-700 text-slate-400 hover:text-white flex items-center justify-center active:scale-90 transition cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* 3D Icon */}
        <div className="w-16 h-16 rounded-2xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center mb-2 shadow-lg">
          <GameIcon name="rocket" size="w-10 h-10" />
        </div>

        {/* Title */}
        <div className="flex items-center gap-1.5 mb-1">
          <Calendar className="w-3.5 h-3.5 text-purple-400" />
          <span className="text-[10px] font-black uppercase tracking-wider text-purple-300">
            {t?.everydayNewWord || 'HER GÜN YENİ BİR DÜNYA KELİMESİ'}
          </span>
        </div>

        <h3 className="text-xl font-black text-white tracking-tight mb-1">
          {t?.dailyQuest || 'Günün Meydan Okuması'}
        </h3>

        <p className="text-xs text-slate-300 mb-4 px-2">
          {t?.dailyDesc || 'Bugünün özel gizemli kelimesini çöz ve ekstra +5 Altın Yıldız kazan!'}
        </p>

        {/* Reward Card */}
        <div className="w-full bg-slate-950/70 rounded-2xl p-3 border border-slate-800 flex items-center justify-around mb-4 shadow-inner">
          <div className="flex flex-col items-center">
            <span className="text-[10px] font-bold text-slate-400">{t?.reward || 'Ödül'}</span>
            <div className="flex items-center gap-1 mt-0.5">
              <GameIcon name="star" size="w-5 h-5" />
              <span className="text-sm font-black text-amber-300">+5 ⭐</span>
            </div>
          </div>

          <div className="w-px h-8 bg-slate-800" />

          <div className="flex flex-col items-center">
            <span className="text-[10px] font-bold text-slate-400">{t?.difficulty || 'Zorluk'}</span>
            <span className="text-xs font-black text-rose-400 mt-1 uppercase">
              {t?.mysterious || 'Gizemli'}
            </span>
          </div>

          <div className="w-px h-8 bg-slate-800" />

          <div className="flex flex-col items-center">
            <span className="text-[10px] font-bold text-slate-400">{t?.status || 'Durum'}</span>
            <span className="text-xs font-black text-emerald-400 mt-1">
              {dailyCompleted ? (t?.completed || 'Tamamlandı') : (t?.available || 'Açık')}
            </span>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={() => {
            soundManager.playKey();
            onClose();
            onPlayDaily();
          }}
          className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 hover:from-purple-500 hover:to-indigo-500 text-white font-black text-xs tracking-wider uppercase flex items-center justify-center gap-2 border-t border-purple-300/40 border-b-4 border-b-purple-950 active:border-b-2 active:translate-y-1 shadow-lg shadow-purple-950/50 transition-all cursor-pointer"
        >
          <span>{t?.solveDailyWord || 'GÜNÜN KELİMESİNİ ÇÖZ'}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
