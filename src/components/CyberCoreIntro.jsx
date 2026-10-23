import React, { useEffect, useState } from 'react';

export default function CyberCoreIntro({ onFinish }) {
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Attempt to play official CyberCore Hollywood Sound
    let audio = null;
    try {
      audio = new Audio('/assets/audio/cybercore_sound_2_hollywood.wav');
      audio.volume = 0.85;
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          // Browser prevented autoplay before interaction, continue smoothly
          console.log('CyberCore Audio Autoplay note:', err);
        });
      }
    } catch (e) {
      console.log('Audio init notice:', e);
    }

    // Auto transition to main menu
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 2000);

    const finishTimer = setTimeout(() => {
      onFinish();
    }, 2450);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(finishTimer);
      if (audio) {
        audio.pause();
        audio = null;
      }
    };
  }, [onFinish]);

  const handleSkip = () => {
    setIsFading(true);
    setTimeout(() => {
      onFinish();
    }, 150);
  };

  return (
    <div
      onClick={handleSkip}
      className={`fixed inset-0 z-50 w-full h-[100dvh] bg-[#03050a] flex items-center justify-center overflow-hidden select-none cursor-pointer transition-opacity duration-400 ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{
        background: 'radial-gradient(circle at center, #0a1428 0%, #03050a 100%)'
      }}
    >
      {/* Cyber Grid Background */}
      <div className="cybercore-intro-grid pointer-events-none" />

      {/* Central Glowing Neon Aura */}
      <div className="cybercore-glow-aura pointer-events-none" />

      {/* Centered Logo & Brand Box */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-4 animate-cyber-snap">
        
        {/* Official CyberCore "CI" Cyber Metal / Neon Vector Emblem */}
        <svg
          className="w-32 h-32 sm:w-36 sm:h-36 drop-shadow-[0_0_25px_rgba(0,242,254,0.8)] animate-cyber-pulse"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Metallic Chrome Gradient */}
            <linearGradient id="metalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="30%" stopColor="#cbd5e1" />
              <stop offset="70%" stopColor="#64748b" />
              <stop offset="100%" stopColor="#334155" />
            </linearGradient>

            {/* Neon Cyan Gradient */}
            <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#00f2fe" />
            </linearGradient>

            {/* Neon Blue Outer Glow Filter */}
            <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#00f2fe" floodOpacity="0.9" />
            </filter>
          </defs>

          {/* 1. Outer Metallic Arc (C Harfi Ana Gövdesi) */}
          <path
            d="M 125 35 A 72 72 0 1 0 90 172 L 90 148 A 48 48 0 1 1 112 56 Z"
            fill="url(#metalGrad)"
            stroke="#00f2fe"
            strokeWidth="1.5"
            filter="url(#neonGlow)"
          />

          {/* 2. Top-Right Notch Block (C Harfi Üst Çentiği) */}
          <path
            d="M 134 26 L 160 48 L 144 65 L 122 46 Z"
            fill="url(#metalGrad)"
            stroke="#00f2fe"
            strokeWidth="1.5"
            filter="url(#neonGlow)"
          />

          {/* 3. Inner "i" Letter Vertical Stem */}
          <rect
            x="94"
            y="78"
            width="22"
            height="66"
            rx="2"
            fill="url(#metalGrad)"
            stroke="#00f2fe"
            strokeWidth="1.5"
            filter="url(#neonGlow)"
          />

          {/* 4. Inner "i" Letter Neon Cyan Square Dot */}
          <rect
            x="94"
            y="50"
            width="22"
            height="20"
            rx="2"
            fill="url(#cyanGrad)"
            stroke="#ffffff"
            strokeWidth="1"
            filter="drop-shadow(0 0 10px #00f2fe)"
          />
        </svg>

        {/* Brand Typography */}
        <div className="flex flex-col items-center">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-[6px] sm:tracking-[7px] text-transparent bg-clip-text relative overflow-hidden leading-tight"
            style={{
              fontFamily: "'Orbitron', sans-serif",
              backgroundImage: 'linear-gradient(135deg, #ffffff 20%, #00f2fe 70%, #38bdf8 100%)',
              textShadow: '0 0 35px rgba(0, 242, 254, 0.55)'
            }}
          >
            CYBERCORE
            {/* Elegant Light Sheen Sweep across the letters */}
            <div className="absolute top-0 left-[-100%] w-3/5 h-full bg-gradient-to-r from-transparent via-white/80 to-transparent -skew-x-[25deg] animate-cyber-sweep pointer-events-none" />
          </h1>

          <span
            className="text-[10px] sm:text-xs font-bold text-slate-400 tracking-[12px] sm:tracking-[15px] uppercase mt-1 mr-[-12px] sm:mr-[-15px] opacity-95"
            style={{
              fontFamily: "'Orbitron', sans-serif"
            }}
          >
            INTERACTIVE
          </span>
        </div>
      </div>

      {/* Subtle Skip Hint at bottom */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-slate-500 uppercase tracking-widest opacity-60">
        Geçmek için dokun • Tap to skip
      </div>
    </div>
  );
}
