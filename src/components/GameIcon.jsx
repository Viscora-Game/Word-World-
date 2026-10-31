import React from 'react';
import {
  Trophy,
  Star,
  Flame,
  Crown,
  Medal,
  Sparkles,
  Rocket,
  Globe,
  Compass,
  Landmark,
  Atom,
  Orbit,
  Brain,
  Dna,
  Microscope,
  Clapperboard,
  Tv,
  Gem,
  Shield,
  Coins,
  Flag,
  Target,
  Zap,
  Award,
  Film,
  Music,
  Utensils
} from 'lucide-react';

const VECTOR_THEMES = {
  star: {
    Icon: Star,
    color: 'text-amber-300',
    fill: 'fill-amber-400',
    glow: 'drop-shadow-[0_2px_6px_rgba(251,191,36,0.65)]'
  },
  trophy: {
    Icon: Trophy,
    color: 'text-amber-300',
    fill: 'fill-amber-400/35',
    glow: 'drop-shadow-[0_2px_8px_rgba(245,158,11,0.6)]'
  },
  crown: {
    Icon: Crown,
    color: 'text-amber-300',
    fill: 'fill-amber-400/40',
    glow: 'drop-shadow-[0_2px_8px_rgba(251,191,36,0.65)]'
  },
  medal: {
    Icon: Medal,
    color: 'text-amber-300',
    fill: 'fill-amber-400/30',
    glow: 'drop-shadow-[0_2px_6px_rgba(245,158,11,0.55)]'
  },
  coin: {
    Icon: Coins,
    color: 'text-yellow-300',
    fill: 'fill-yellow-400/30',
    glow: 'drop-shadow-[0_2px_6px_rgba(250,204,21,0.55)]'
  },
  fire: {
    Icon: Flame,
    color: 'text-orange-400',
    fill: 'fill-orange-500/45',
    glow: 'drop-shadow-[0_2px_8px_rgba(249,115,22,0.65)]'
  },
  sparkles: {
    Icon: Sparkles,
    color: 'text-amber-300',
    fill: 'fill-amber-300/35',
    glow: 'drop-shadow-[0_2px_6px_rgba(251,191,36,0.6)]'
  },
  stadium: {
    Icon: Shield,
    color: 'text-emerald-300',
    fill: 'fill-emerald-400/30',
    glow: 'drop-shadow-[0_2px_7px_rgba(16,185,129,0.55)]'
  },
  soccer: {
    Icon: Target,
    color: 'text-emerald-300',
    fill: 'fill-emerald-400/25',
    glow: 'drop-shadow-[0_2px_7px_rgba(16,185,129,0.55)]'
  },
  basketball: {
    Icon: Award,
    color: 'text-orange-300',
    fill: 'fill-orange-400/30',
    glow: 'drop-shadow-[0_2px_7px_rgba(249,115,22,0.55)]'
  },
  f1: {
    Icon: Flag,
    color: 'text-rose-300',
    fill: 'fill-rose-500/35',
    glow: 'drop-shadow-[0_2px_7px_rgba(244,63,94,0.55)]'
  },
  clapper: {
    Icon: Clapperboard,
    color: 'text-purple-300',
    fill: 'fill-purple-400/30',
    glow: 'drop-shadow-[0_2px_7px_rgba(168,85,247,0.55)]'
  },
  tv: {
    Icon: Tv,
    color: 'text-indigo-300',
    fill: 'fill-indigo-400/25',
    glow: 'drop-shadow-[0_2px_7px_rgba(99,102,241,0.55)]'
  },
  popcorn: {
    Icon: Film,
    color: 'text-rose-300',
    fill: 'fill-rose-400/25',
    glow: 'drop-shadow-[0_2px_7px_rgba(244,63,94,0.55)]'
  },
  crystal: {
    Icon: Gem,
    color: 'text-cyan-300',
    fill: 'fill-cyan-400/35',
    glow: 'drop-shadow-[0_2px_8px_rgba(34,211,238,0.6)]'
  },
  gem: {
    Icon: Gem,
    color: 'text-fuchsia-300',
    fill: 'fill-fuchsia-400/35',
    glow: 'drop-shadow-[0_2px_8px_rgba(217,70,239,0.6)]'
  },
  dragon: {
    Icon: Zap,
    color: 'text-amber-300',
    fill: 'fill-amber-400/35',
    glow: 'drop-shadow-[0_2px_7px_rgba(245,158,11,0.55)]'
  },
  globe: {
    Icon: Globe,
    color: 'text-cyan-300',
    fill: 'fill-cyan-400/20',
    glow: 'drop-shadow-[0_2px_7px_rgba(6,182,212,0.55)]'
  },
  earth_europe: {
    Icon: Globe,
    color: 'text-sky-300',
    fill: 'fill-sky-400/20',
    glow: 'drop-shadow-[0_2px_7px_rgba(56,189,248,0.55)]'
  },
  earth_americas: {
    Icon: Globe,
    color: 'text-teal-300',
    fill: 'fill-teal-400/20',
    glow: 'drop-shadow-[0_2px_7px_rgba(20,184,166,0.55)]'
  },
  compass: {
    Icon: Compass,
    color: 'text-amber-300',
    fill: 'fill-amber-400/25',
    glow: 'drop-shadow-[0_2px_7px_rgba(245,158,11,0.55)]'
  },
  map: {
    Icon: Compass,
    color: 'text-cyan-300',
    fill: 'fill-cyan-400/25',
    glow: 'drop-shadow-[0_2px_7px_rgba(6,182,212,0.55)]'
  },
  temple: {
    Icon: Landmark,
    color: 'text-amber-200',
    fill: 'fill-amber-400/30',
    glow: 'drop-shadow-[0_2px_7px_rgba(245,158,11,0.55)]'
  },
  atom: {
    Icon: Atom,
    color: 'text-cyan-300',
    fill: '',
    glow: 'drop-shadow-[0_2px_8px_rgba(34,211,238,0.65)]'
  },
  planet: {
    Icon: Orbit,
    color: 'text-indigo-300',
    fill: '',
    glow: 'drop-shadow-[0_2px_8px_rgba(129,140,248,0.65)]'
  },
  brain: {
    Icon: Brain,
    color: 'text-pink-300',
    fill: 'fill-pink-400/25',
    glow: 'drop-shadow-[0_2px_7px_rgba(244,114,182,0.55)]'
  },
  dna: {
    Icon: Dna,
    color: 'text-teal-300',
    fill: '',
    glow: 'drop-shadow-[0_2px_7px_rgba(45,212,191,0.6)]'
  },
  microscope: {
    Icon: Microscope,
    color: 'text-sky-300',
    fill: 'fill-sky-400/20',
    glow: 'drop-shadow-[0_2px_7px_rgba(56,189,248,0.55)]'
  },
  rocket: {
    Icon: Rocket,
    color: 'text-purple-300',
    fill: 'fill-purple-400/35',
    glow: 'drop-shadow-[0_2px_8px_rgba(192,132,252,0.65)]'
  },
  music: {
    Icon: Music,
    color: 'text-fuchsia-300',
    fill: '',
    glow: 'drop-shadow-[0_2px_7px_rgba(232,121,249,0.6)]'
  },
  chef: {
    Icon: Utensils,
    color: 'text-orange-300',
    fill: '',
    glow: 'drop-shadow-[0_2px_7px_rgba(251,146,60,0.6)]'
  }
};

export default function GameIcon({
  name = 'trophy',
  size = 'w-10 h-10',
  className = ''
}) {
  const key = (name || 'trophy').toLowerCase();
  const cfg = VECTOR_THEMES[key] || VECTOR_THEMES.trophy;
  const IconComponent = cfg.Icon;

  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 ${size} ${className}`}
    >
      <IconComponent
        strokeWidth={2.35}
        className={`w-full h-full ${cfg.color} ${cfg.fill} ${cfg.glow} pointer-events-none transition-transform duration-200 group-hover:scale-110`}
      />
    </div>
  );
}
