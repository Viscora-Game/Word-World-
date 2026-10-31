import React from 'react';
import {
  GiTrophyCup,
  GiSoccerBall,
  GiBasketballBall,
  GiF1Car,
  GiSoccerField,
  GiClapperboard,
  GiFilmProjector,
  GiTv,
  GiDirectorChair,
  GiStarMedal,
  GiGreekTemple,
  GiEgyptianPyramids,
  GiCrown,
  GiCrossedSwords,
  GiScrollUnfurled,
  GiAtom,
  GiMicroscope,
  GiDna2,
  GiRingedPlanet,
  GiErlenmeyer,
  GiBrain,
  GiEarthAfricaEurope,
  GiCompass,
  GiMountains,
  GiBigWave,
  GiCapitol,
  GiPawPrint,
  GiLion,
  GiDolphin,
  GiHummingbird,
  GiPineTree,
  GiMusicalNotes,
  GiMicrophone,
  GiGuitar,
  GiHeadphones,
  GiGrandPiano,
  GiChefToque,
  GiHotMeal,
  GiCroissant,
  GiForkKnifeSpoon,
  GiCupcake,
  GiRoundStar,
  GiSmallFire
} from 'react-icons/gi';

// Powered by open-source Game-Icons repository (https://github.com/game-icons/icons)
// Every category & subcategory maps strictly to its real-world subject icon.
const GAME_ICON_THEMES = {
  // General & Rewards
  star: {
    Icon: GiRoundStar,
    color: 'text-amber-300',
    glow: 'drop-shadow-[0_2px_6px_rgba(251,191,36,0.7)]'
  },
  trophy: {
    Icon: GiTrophyCup,
    color: 'text-amber-300',
    glow: 'drop-shadow-[0_2px_8px_rgba(245,158,11,0.65)]'
  },
  crown: {
    Icon: GiCrown,
    color: 'text-amber-300',
    glow: 'drop-shadow-[0_2px_8px_rgba(251,191,36,0.65)]'
  },
  medal: {
    Icon: GiStarMedal,
    color: 'text-amber-300',
    glow: 'drop-shadow-[0_2px_6px_rgba(245,158,11,0.6)]'
  },
  fire: {
    Icon: GiSmallFire,
    color: 'text-orange-400',
    glow: 'drop-shadow-[0_2px_8px_rgba(249,115,22,0.7)]'
  },

  // 1. Sports World (Spor Dünyası)
  stadium: {
    Icon: GiSoccerField,
    color: 'text-emerald-300',
    glow: 'drop-shadow-[0_2px_7px_rgba(16,185,129,0.6)]'
  },
  soccer: {
    Icon: GiSoccerBall,
    color: 'text-emerald-200',
    glow: 'drop-shadow-[0_2px_7px_rgba(16,185,129,0.6)]'
  },
  basketball: {
    Icon: GiBasketballBall,
    color: 'text-orange-400',
    glow: 'drop-shadow-[0_2px_7px_rgba(249,115,22,0.65)]'
  },
  f1: {
    Icon: GiF1Car,
    color: 'text-rose-400',
    glow: 'drop-shadow-[0_2px_7px_rgba(244,63,94,0.65)]'
  },

  // 2. Cinema & TV (Dizi & Sinema)
  clapper: {
    Icon: GiClapperboard,
    color: 'text-purple-300',
    glow: 'drop-shadow-[0_2px_7px_rgba(168,85,247,0.6)]'
  },
  film: {
    Icon: GiFilmProjector,
    color: 'text-amber-200',
    glow: 'drop-shadow-[0_2px_7px_rgba(251,191,36,0.6)]'
  },
  tv: {
    Icon: GiTv,
    color: 'text-indigo-300',
    glow: 'drop-shadow-[0_2px_7px_rgba(99,102,241,0.6)]'
  },
  director: {
    Icon: GiDirectorChair,
    color: 'text-fuchsia-300',
    glow: 'drop-shadow-[0_2px_7px_rgba(217,70,239,0.6)]'
  },

  // 3. History & General Knowledge (Genel Kültür & Tarih)
  temple: {
    Icon: GiGreekTemple,
    color: 'text-amber-200',
    glow: 'drop-shadow-[0_2px_7px_rgba(245,158,11,0.6)]'
  },
  pyramid: {
    Icon: GiEgyptianPyramids,
    color: 'text-amber-300',
    glow: 'drop-shadow-[0_2px_7px_rgba(245,158,11,0.65)]'
  },
  swords: {
    Icon: GiCrossedSwords,
    color: 'text-slate-200',
    glow: 'drop-shadow-[0_2px_7px_rgba(148,163,184,0.65)]'
  },
  scroll: {
    Icon: GiScrollUnfurled,
    color: 'text-amber-200',
    glow: 'drop-shadow-[0_2px_7px_rgba(251,191,36,0.6)]'
  },

  // 4. Science & Universe (Bilim & Evren)
  atom: {
    Icon: GiAtom,
    color: 'text-cyan-300',
    glow: 'drop-shadow-[0_2px_8px_rgba(34,211,238,0.7)]'
  },
  microscope: {
    Icon: GiMicroscope,
    color: 'text-sky-300',
    glow: 'drop-shadow-[0_2px_7px_rgba(56,189,248,0.6)]'
  },
  brain: {
    Icon: GiBrain,
    color: 'text-pink-300',
    glow: 'drop-shadow-[0_2px_7px_rgba(244,114,182,0.6)]'
  },
  dna: {
    Icon: GiDna2,
    color: 'text-teal-300',
    glow: 'drop-shadow-[0_2px_7px_rgba(45,212,191,0.65)]'
  },
  planet: {
    Icon: GiRingedPlanet,
    color: 'text-indigo-300',
    glow: 'drop-shadow-[0_2px_8px_rgba(129,140,248,0.7)]'
  },
  flask: {
    Icon: GiErlenmeyer,
    color: 'text-emerald-300',
    glow: 'drop-shadow-[0_2px_7px_rgba(52,211,153,0.65)]'
  },

  // 5. Geography & World (Coğrafya & Dünya)
  globe: {
    Icon: GiEarthAfricaEurope,
    color: 'text-cyan-300',
    glow: 'drop-shadow-[0_2px_7px_rgba(6,182,212,0.6)]'
  },
  compass: {
    Icon: GiCompass,
    color: 'text-amber-300',
    glow: 'drop-shadow-[0_2px_7px_rgba(245,158,11,0.6)]'
  },
  landmark: {
    Icon: GiCapitol,
    color: 'text-sky-200',
    glow: 'drop-shadow-[0_2px_7px_rgba(125,211,252,0.6)]'
  },
  mountain: {
    Icon: GiMountains,
    color: 'text-emerald-200',
    glow: 'drop-shadow-[0_2px_7px_rgba(110,231,183,0.6)]'
  },
  waves: {
    Icon: GiBigWave,
    color: 'text-sky-300',
    glow: 'drop-shadow-[0_2px_7px_rgba(56,189,248,0.7)]'
  },

  // 6. Animals & Nature (Hayvanlar & Doğa)
  paw: {
    Icon: GiPawPrint,
    color: 'text-emerald-300',
    glow: 'drop-shadow-[0_2px_7px_rgba(52,211,153,0.65)]'
  },
  lion: {
    Icon: GiLion,
    color: 'text-amber-300',
    glow: 'drop-shadow-[0_2px_7px_rgba(251,191,36,0.65)]'
  },
  dolphin: {
    Icon: GiDolphin,
    color: 'text-cyan-300',
    glow: 'drop-shadow-[0_2px_7px_rgba(34,211,238,0.65)]'
  },
  bird: {
    Icon: GiHummingbird,
    color: 'text-teal-300',
    glow: 'drop-shadow-[0_2px_7px_rgba(45,212,191,0.65)]'
  },
  tree: {
    Icon: GiPineTree,
    color: 'text-emerald-400',
    glow: 'drop-shadow-[0_2px_7px_rgba(16,185,129,0.65)]'
  },

  // 7. Music World (Müzik Dünyası)
  music: {
    Icon: GiMusicalNotes,
    color: 'text-fuchsia-300',
    glow: 'drop-shadow-[0_2px_7px_rgba(232,121,249,0.65)]'
  },
  microphone: {
    Icon: GiMicrophone,
    color: 'text-pink-300',
    glow: 'drop-shadow-[0_2px_7px_rgba(244,114,182,0.65)]'
  },
  guitar: {
    Icon: GiGuitar,
    color: 'text-rose-300',
    glow: 'drop-shadow-[0_2px_7px_rgba(251,113,133,0.65)]'
  },
  headphones: {
    Icon: GiHeadphones,
    color: 'text-purple-300',
    glow: 'drop-shadow-[0_2px_7px_rgba(192,132,252,0.65)]'
  },
  piano: {
    Icon: GiGrandPiano,
    color: 'text-indigo-200',
    glow: 'drop-shadow-[0_2px_7px_rgba(165,180,252,0.65)]'
  },

  // 8. World Cuisine (Dünya Mutfağı)
  chef: {
    Icon: GiChefToque,
    color: 'text-amber-200',
    glow: 'drop-shadow-[0_2px_7px_rgba(251,191,36,0.65)]'
  },
  meal: {
    Icon: GiHotMeal,
    color: 'text-orange-300',
    glow: 'drop-shadow-[0_2px_7px_rgba(251,146,60,0.65)]'
  },
  croissant: {
    Icon: GiCroissant,
    color: 'text-amber-300',
    glow: 'drop-shadow-[0_2px_7px_rgba(245,158,11,0.65)]'
  },
  cutlery: {
    Icon: GiForkKnifeSpoon,
    color: 'text-orange-200',
    glow: 'drop-shadow-[0_2px_7px_rgba(253,186,116,0.6)]'
  },
  cake: {
    Icon: GiCupcake,
    color: 'text-pink-300',
    glow: 'drop-shadow-[0_2px_7px_rgba(244,114,182,0.65)]'
  }
};

export default function GameIcon({
  name = 'compass',
  size = 'w-10 h-10',
  className = ''
}) {
  const key = (name || 'compass').toLowerCase();
  const cfg = GAME_ICON_THEMES[key] || GAME_ICON_THEMES.compass;
  const IconComponent = cfg.Icon;

  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 ${size} ${className}`}
    >
      <IconComponent
        className={`w-full h-full ${cfg.color} ${cfg.glow} pointer-events-none transition-transform duration-200 group-hover:scale-110`}
      />
    </div>
  );
}
