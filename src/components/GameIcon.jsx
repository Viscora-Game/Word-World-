import React from 'react';

const ICON_MAP = {
  trophy: '/assets/icons/trophy.png',
  soccer: '/assets/icons/soccer.png',
  basketball: '/assets/icons/basketball.png',
  f1: '/assets/icons/f1.png',
  stadium: '/assets/icons/stadium.png',
  clapper: '/assets/icons/clapper.png',
  tv: '/assets/icons/tv.png',
  crystal: '/assets/icons/crystal.png',
  dragon: '/assets/icons/dragon.png',
  popcorn: '/assets/icons/popcorn.png',
  globe: '/assets/icons/earth_globe_europe.png',
  earth_europe: '/assets/icons/earth_globe_europe.png',
  earth_americas: '/assets/icons/earth_globe_americas.png',
  compass: '/assets/icons/compass_3d.png',
  crown: '/assets/icons/crown_3d.png',
  coin: '/assets/icons/coin_3d.png',
  gem: '/assets/icons/gem_3d.png',
  map: '/assets/icons/compass_3d.png',
  temple: '/assets/icons/temple.png',
  atom: '/assets/icons/atom.png',
  planet: '/assets/icons/planet.png',
  brain: '/assets/icons/brain.png',
  dna: '/assets/icons/dna.png',
  microscope: '/assets/icons/microscope.png',
  rocket: '/assets/icons/rocket.png',
  sparkles: '/assets/icons/sparkles.png',
  medal: '/assets/icons/medal.png',
  star: '/assets/icons/star.png',
  fire: '/assets/icons/fire.png'
};

export default function GameIcon({
  name = 'trophy',
  size = 'w-10 h-10',
  className = '',
  alt = 'Icon'
}) {
  const src = ICON_MAP[name.toLowerCase()] || ICON_MAP.trophy;

  return (
    <div
      className={`relative flex items-center justify-center shrink-0 ${size} ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-contain drop-shadow-[0_4px_8px_rgba(0,0,0,0.4)] pointer-events-none transition-transform duration-200 group-hover:scale-110"
        loading="eager"
      />
    </div>
  );
}
