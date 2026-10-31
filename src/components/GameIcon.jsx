import React from 'react';
import {
  GiTrophyCup,
  GiSoccerBall,
  GiBasketballBall,
  GiF1Car,
  GiSoccerField,
  GiClapperboard,
  GiTv,
  GiCrystalGrowth,
  GiSpikedDragonHead,
  GiPopcorn,
  GiEarthAfricaEurope,
  GiEarthAmerica,
  GiCompass,
  GiCrown,
  GiTwoCoins,
  GiCutDiamond,
  GiGreekTemple,
  GiAtom,
  GiRingedPlanet,
  GiBrain,
  GiDna2,
  GiMicroscope,
  GiRocket,
  GiSparkles,
  GiStarMedal,
  GiRoundStar,
  GiSmallFire,
  GiMusicalNotes,
  GiChefToque
} from 'react-icons/gi';

// Powered by open-source Game-Icons repository (https://github.com/game-icons/icons)
const GAME_ICON_THEMES = {
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
  coin: {
    Icon: GiTwoCoins,
    color: 'text-yellow-300',
    glow: 'drop-shadow-[0_2px_6px_rgba(250,204,21,0.6)]'
  },
  fire: {
    Icon: GiSmallFire,
    color: 'text-orange-400',
    glow: 'drop-shadow-[0_2px_8px_rgba(249,115,22,0.7)]'
  },
  sparkles: {
    Icon: GiSparkles,
    color: 'text-amber-300',
    glow: 'drop-shadow-[0_2px_6px_rgba(251,191,36,0.65)]'
  },
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
  clapper: {
    Icon: GiClapperboard,
    color: 'text-purple-300',
    glow: 'drop-shadow-[0_2px_7px_rgba(168,85,247,0.6)]'
  },
  tv: {
    Icon: GiTv,
    color: 'text-indigo-300',
    glow: 'drop-shadow-[0_2px_7px_rgba(99,102,241,0.6)]'
  },
  popcorn: {
    Icon: GiPopcorn,
    color: 'text-rose-300',
    glow: 'drop-shadow-[0_2px_7px_rgba(244,63,94,0.6)]'
  },
  crystal: {
    Icon: GiCrystalGrowth,
    color: 'text-cyan-300',
    glow: 'drop-shadow-[0_2px_8px_rgba(34,211,238,0.65)]'
  },
  gem: {
    Icon: GiCutDiamond,
    color: 'text-fuchsia-300',
    glow: 'drop-shadow-[0_2px_8px_rgba(217,70,239,0.65)]'
  },
  dragon: {
    Icon: GiSpikedDragonHead,
    color: 'text-amber-300',
    glow: 'drop-shadow-[0_2px_8px_rgba(245,158,11,0.65)]'
  },
  globe: {
    Icon: GiEarthAfricaEurope,
    color: 'text-cyan-300',
    glow: 'drop-shadow-[0_2px_7px_rgba(6,182,212,0.6)]'
  },
  earth_europe: {
    Icon: GiEarthAfricaEurope,
    color: 'text-sky-300',
    glow: 'drop-shadow-[0_2px_7px_rgba(56,189,248,0.6)]'
  },
  earth_americas: {
    Icon: GiEarthAmerica,
    color: 'text-teal-300',
    glow: 'drop-shadow-[0_2px_7px_rgba(20,184,166,0.6)]'
  },
  compass: {
    Icon: GiCompass,
    color: 'text-amber-300',
    glow: 'drop-shadow-[0_2px_7px_rgba(245,158,11,0.6)]'
  },
  map: {
    Icon: GiCompass,
    color: 'text-cyan-300',
    glow: 'drop-shadow-[0_2px_7px_rgba(6,182,212,0.6)]'
  },
  temple: {
    Icon: GiGreekTemple,
    color: 'text-amber-200',
    glow: 'drop-shadow-[0_2px_7px_rgba(245,158,11,0.6)]'
  },
  atom: {
    Icon: GiAtom,
    color: 'text-cyan-300',
    glow: 'drop-shadow-[0_2px_8px_rgba(34,211,238,0.7)]'
  },
  planet: {
    Icon: GiRingedPlanet,
    color: 'text-indigo-300',
    glow: 'drop-shadow-[0_2px_8px_rgba(129,140,248,0.7)]'
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
  microscope: {
    Icon: GiMicroscope,
    color: 'text-sky-300',
    glow: 'drop-shadow-[0_2px_7px_rgba(56,189,248,0.6)]'
  },
  rocket: {
    Icon: GiRocket,
    color: 'text-purple-300',
    glow: 'drop-shadow-[0_2px_8px_rgba(192,132,252,0.7)]'
  },
  music: {
    Icon: GiMusicalNotes,
    color: 'text-fuchsia-300',
    glow: 'drop-shadow-[0_2px_7px_rgba(232,121,249,0.65)]'
  },
  chef: {
    Icon: GiChefToque,
    color: 'text-orange-300',
    glow: 'drop-shadow-[0_2px_7px_rgba(251,146,60,0.65)]'
  }
};

export default function GameIcon({
  name = 'trophy',
  size = 'w-10 h-10',
  className = ''
}) {
  const key = (name || 'trophy').toLowerCase();
  const cfg = GAME_ICON_THEMES[key] || GAME_ICON_THEMES.trophy;
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
