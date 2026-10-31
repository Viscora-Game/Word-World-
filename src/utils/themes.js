// Star-Unlockable Board & Keyboard Cosmetic Themes for Word & World
const THEME_STORAGE_KEY = 'wordhunt_themes_v1';

export const GAME_THEMES = [
  {
    id: 'emerald',
    cost: 0,
    iconKey: 'crown',
    name: {
      tr: 'Klasik Zümrüt',
      en: 'Classic Emerald'
    },
    desc: {
      tr: 'Gece mavisi keşif arenası ve klasik zümrüt-indigo taşlar',
      en: 'Midnight expedition arena with classic emerald & indigo tiles'
    },
    swatches: ['#10b981', '#6366f1', '#1e293b'],
    previewPill: 'from-emerald-500/25 to-indigo-500/20 border-emerald-400/50 text-emerald-200',
    questionCard:
      'from-slate-900/95 via-slate-850/95 to-slate-900/95 border-slate-700/80 border-b-slate-950',
    arenaFrame:
      'from-slate-900/65 via-slate-950/85 to-slate-900/65 border-slate-700/50 shadow-indigo-950/30',
    arenaGlow: 'from-indigo-500/5 via-cyan-500/5 to-amber-500/5',
    activeRowRing: 'ring-cyan-400/30 bg-cyan-500/5',
    typingTile:
      'bg-gradient-to-b from-indigo-500 via-indigo-600 to-purple-600 border-t-2 border-indigo-200/80 border-b-indigo-950 text-white shadow-lg shadow-indigo-500/30',
    currentEmptyTile:
      'bg-slate-900/70 border border-slate-700/60 border-b-2 border-b-slate-950 text-slate-500',
    futureEmptyTile: 'border border-slate-800/80 bg-slate-950/40 text-slate-700',
    emptyDot: 'bg-slate-700/70',
    absentTile:
      'bg-gradient-to-b from-slate-800 to-slate-850 border-t border-slate-700/60 border-b-slate-950 text-slate-400 shadow-sm',
    keyboardDock: 'bg-slate-950/90 border-slate-800/90',
    unusedKey:
      'bg-gradient-to-b from-slate-700 via-slate-750 to-slate-800 text-white border-t border-slate-500/60 border-b-[4px] border-b-slate-950 shadow-md active:border-b-[2px] active:translate-y-0.5 active:bg-slate-700',
    enterKey:
      'bg-gradient-to-b from-emerald-500 via-emerald-600 to-teal-700 hover:from-emerald-400 hover:to-teal-600 text-white border-t-2 border-emerald-300/80 border-b-[4px] border-b-emerald-950 shadow-lg shadow-emerald-950/50 active:border-b-[2px] active:translate-y-0.5',
    backspaceKey:
      'bg-gradient-to-b from-slate-700 via-slate-750 to-slate-800 text-rose-300 border-t border-slate-600 border-b-[4px] border-b-slate-950 active:border-b-[2px] active:translate-y-0.5'
  },
  {
    id: 'sakura',
    cost: 15,
    iconKey: 'lotus',
    name: {
      tr: 'Sakura Çiçeği',
      en: 'Sakura Blossom'
    },
    desc: {
      tr: 'Kiraz çiçeği pembesi kadife tahta ve ışıltılı pembe tuşlar',
      en: 'Cherry blossom velvet board with radiant sakura keys'
    },
    swatches: ['#f472b6', '#ec4899', '#3b0d26'],
    previewPill: 'from-pink-500/25 to-rose-500/20 border-pink-400/50 text-pink-200',
    questionCard:
      'from-[#2c0c20]/95 via-[#220a1b]/95 to-[#1b0816]/95 border-pink-400/45 border-b-[#12040e]',
    arenaFrame:
      'from-[#2a0c21]/75 via-[#190714]/90 to-[#260b1d]/75 border-pink-400/45 shadow-pink-950/50',
    arenaGlow: 'from-pink-500/15 via-rose-400/10 to-fuchsia-500/10',
    activeRowRing: 'ring-pink-400/45 bg-pink-500/10',
    typingTile:
      'bg-gradient-to-b from-pink-400 via-rose-500 to-pink-600 border-t-2 border-pink-100/90 border-b-rose-950 text-white shadow-lg shadow-pink-500/40',
    currentEmptyTile:
      'bg-[#2b0f22]/80 border border-pink-400/40 border-b-2 border-b-[#140510] text-pink-300/60',
    futureEmptyTile: 'border border-pink-900/60 bg-[#1a0714]/55 text-pink-900',
    emptyDot: 'bg-pink-400/40',
    absentTile:
      'bg-gradient-to-b from-[#331328] to-[#220b1b] border-t border-pink-800/40 border-b-[#0f030b] text-pink-200/45 shadow-sm',
    keyboardDock: 'bg-[#170612]/95 border-pink-500/35',
    unusedKey:
      'bg-gradient-to-b from-[#4d1939] via-[#3d132d] to-[#2e0d22] text-pink-50 border-t border-pink-300/45 border-b-[4px] border-b-[#15040f] shadow-md active:border-b-[2px] active:translate-y-0.5',
    enterKey:
      'bg-gradient-to-b from-pink-400 via-rose-500 to-rose-600 hover:from-pink-300 hover:to-rose-500 text-white border-t-2 border-pink-100/90 border-b-[4px] border-b-rose-950 shadow-lg shadow-rose-950/60 active:border-b-[2px] active:translate-y-0.5',
    backspaceKey:
      'bg-gradient-to-b from-[#4d1939] via-[#3d132d] to-[#2e0d22] text-pink-200 border-t border-pink-300/40 border-b-[4px] border-b-[#15040f] active:border-b-[2px] active:translate-y-0.5'
  },
  {
    id: 'rosegold',
    cost: 30,
    iconKey: 'lipstick',
    name: {
      tr: 'Rose Gold Lüks',
      en: 'Rose Gold Luxe'
    },
    desc: {
      tr: 'Şampanya ışıltılı rose gold kozmetik dokusu ve saten klavye',
      en: 'Champagne rose-gold cosmetic finish with satin 3D keys'
    },
    swatches: ['#fda4af', '#fb7185', '#3d1620'],
    previewPill: 'from-rose-400/25 to-amber-400/20 border-rose-300/50 text-rose-200',
    questionCard:
      'from-[#2d131b]/95 via-[#230f16]/95 to-[#1b0b11]/95 border-rose-300/45 border-b-[#12060a]',
    arenaFrame:
      'from-[#2c131b]/75 via-[#1a0a10]/90 to-[#281118]/75 border-rose-300/45 shadow-rose-950/50',
    arenaGlow: 'from-rose-400/15 via-amber-300/10 to-pink-400/10',
    activeRowRing: 'ring-rose-300/45 bg-rose-400/10',
    typingTile:
      'bg-gradient-to-b from-rose-300 via-rose-400 to-pink-600 border-t-2 border-amber-100/95 border-b-rose-950 text-slate-950 shadow-lg shadow-rose-400/35',
    currentEmptyTile:
      'bg-[#2b131a]/80 border border-rose-300/40 border-b-2 border-b-[#14070b] text-rose-200/60',
    futureEmptyTile: 'border border-rose-900/55 bg-[#1b0a10]/55 text-rose-900',
    emptyDot: 'bg-rose-300/40',
    absentTile:
      'bg-gradient-to-b from-[#361922] to-[#240f16] border-t border-rose-800/40 border-b-[#110509] text-rose-200/45 shadow-sm',
    keyboardDock: 'bg-[#19090e]/95 border-rose-400/35',
    unusedKey:
      'bg-gradient-to-b from-[#522331] via-[#411a26] to-[#31121c] text-amber-50 border-t border-rose-200/45 border-b-[4px] border-b-[#17060b] shadow-md active:border-b-[2px] active:translate-y-0.5',
    enterKey:
      'bg-gradient-to-b from-rose-300 via-rose-400 to-rose-600 hover:from-rose-200 hover:to-rose-500 text-slate-950 border-t-2 border-amber-100/90 border-b-[4px] border-b-rose-950 shadow-lg shadow-rose-950/60 active:border-b-[2px] active:translate-y-0.5',
    backspaceKey:
      'bg-gradient-to-b from-[#522331] via-[#411a26] to-[#31121c] text-rose-200 border-t border-rose-200/40 border-b-[4px] border-b-[#17060b] active:border-b-[2px] active:translate-y-0.5'
  },
  {
    id: 'lavender',
    cost: 45,
    iconKey: 'diamond',
    name: {
      tr: 'Lavanta & Ametist',
      en: 'Amethyst Dream'
    },
    desc: {
      tr: 'Büyülü leylak-ametist taş yansımaları ve mor kristal tuşlar',
      en: 'Enchanted lilac-amethyst facets with violet crystal keys'
    },
    swatches: ['#c084fc', '#a855f7', '#261042'],
    previewPill: 'from-purple-500/25 to-fuchsia-500/20 border-purple-400/50 text-purple-200',
    questionCard:
      'from-[#21103a]/95 via-[#190c2e]/95 to-[#130824]/95 border-purple-400/45 border-b-[#0a0414]',
    arenaFrame:
      'from-[#22103d]/75 via-[#140826]/90 to-[#1f0e38]/75 border-purple-400/45 shadow-purple-950/50',
    arenaGlow: 'from-purple-500/15 via-fuchsia-400/10 to-indigo-500/10',
    activeRowRing: 'ring-purple-400/45 bg-purple-500/10',
    typingTile:
      'bg-gradient-to-b from-purple-400 via-violet-500 to-purple-700 border-t-2 border-purple-100/90 border-b-purple-950 text-white shadow-lg shadow-purple-500/40',
    currentEmptyTile:
      'bg-[#23113f]/80 border border-purple-400/40 border-b-2 border-b-[#0f061d] text-purple-200/60',
    futureEmptyTile: 'border border-purple-900/60 bg-[#150928]/55 text-purple-900',
    emptyDot: 'bg-purple-400/40',
    absentTile:
      'bg-gradient-to-b from-[#2b1649] to-[#1c0d33] border-t border-purple-800/40 border-b-[#0c0418] text-purple-200/45 shadow-sm',
    keyboardDock: 'bg-[#120722]/95 border-purple-500/35',
    unusedKey:
      'bg-gradient-to-b from-[#3f1f69] via-[#321754] to-[#251040] text-purple-50 border-t border-purple-300/45 border-b-[4px] border-b-[#10051f] shadow-md active:border-b-[2px] active:translate-y-0.5',
    enterKey:
      'bg-gradient-to-b from-fuchsia-400 via-purple-500 to-violet-700 hover:from-fuchsia-300 hover:to-violet-600 text-white border-t-2 border-fuchsia-100/90 border-b-[4px] border-b-purple-950 shadow-lg shadow-purple-950/60 active:border-b-[2px] active:translate-y-0.5',
    backspaceKey:
      'bg-gradient-to-b from-[#3f1f69] via-[#321754] to-[#251040] text-purple-200 border-t border-purple-300/40 border-b-[4px] border-b-[#10051f] active:border-b-[2px] active:translate-y-0.5'
  },
  {
    id: 'crystal',
    cost: 65,
    iconKey: 'wand',
    name: {
      tr: 'Buz Kristali',
      en: 'Crystal Lagoon'
    },
    desc: {
      tr: 'Kuzey ışıkları ferahlığında buz mavisi cam tahta ve turkuaz tuşlar',
      en: 'Aurora ice-blue glass arena with glacier turquoise keys'
    },
    swatches: ['#38bdf8', '#06b6d4', '#082538'],
    previewPill: 'from-cyan-500/25 to-sky-500/20 border-cyan-400/50 text-cyan-200',
    questionCard:
      'from-[#092438]/95 via-[#071c2c]/95 to-[#051422]/95 border-cyan-400/45 border-b-[#030b14]',
    arenaFrame:
      'from-[#09263a]/75 via-[#061826]/90 to-[#082234]/75 border-cyan-400/45 shadow-cyan-950/50',
    arenaGlow: 'from-cyan-400/15 via-sky-400/10 to-teal-400/10',
    activeRowRing: 'ring-cyan-300/45 bg-cyan-400/10',
    typingTile:
      'bg-gradient-to-b from-cyan-300 via-sky-500 to-blue-600 border-t-2 border-cyan-100/95 border-b-sky-950 text-white shadow-lg shadow-cyan-500/40',
    currentEmptyTile:
      'bg-[#0b283d]/80 border border-cyan-400/40 border-b-2 border-b-[#04101a] text-cyan-200/60',
    futureEmptyTile: 'border border-cyan-900/60 bg-[#061724]/55 text-cyan-900',
    emptyDot: 'bg-cyan-400/40',
    absentTile:
      'bg-gradient-to-b from-[#102e44] to-[#0a1f30] border-t border-cyan-800/40 border-b-[#040d16] text-cyan-200/45 shadow-sm',
    keyboardDock: 'bg-[#05131f]/95 border-cyan-500/35',
    unusedKey:
      'bg-gradient-to-b from-[#133e5c] via-[#0e3048] to-[#0a2336] text-cyan-50 border-t border-cyan-300/45 border-b-[4px] border-b-[#030e17] shadow-md active:border-b-[2px] active:translate-y-0.5',
    enterKey:
      'bg-gradient-to-b from-cyan-400 via-sky-500 to-blue-600 hover:from-cyan-300 hover:to-blue-500 text-white border-t-2 border-cyan-100/90 border-b-[4px] border-b-sky-950 shadow-lg shadow-cyan-950/60 active:border-b-[2px] active:translate-y-0.5',
    backspaceKey:
      'bg-gradient-to-b from-[#133e5c] via-[#0e3048] to-[#0a2336] text-cyan-200 border-t border-cyan-300/40 border-b-[4px] border-b-[#030e17] active:border-b-[2px] active:translate-y-0.5'
  },
  {
    id: 'royalgold',
    cost: 90,
    iconKey: 'perfume',
    name: {
      tr: 'Haute Couture Altın',
      en: 'Couture Royal Gold'
    },
    desc: {
      tr: 'Obsidyen siyahı üzerine Paris podyumlarından altın varaklı tasarım',
      en: 'Obsidian runway finish accented with radiant haute couture gold'
    },
    swatches: ['#fbbf24', '#f59e0b', '#261a05'],
    previewPill: 'from-amber-500/25 to-yellow-500/20 border-amber-400/50 text-amber-200',
    questionCard:
      'from-[#281b06]/95 via-[#1e1405]/95 to-[#160f04]/95 border-amber-400/50 border-b-[#0c0802]',
    arenaFrame:
      'from-[#291c07]/75 via-[#171004]/90 to-[#241806]/75 border-amber-400/50 shadow-amber-950/50',
    arenaGlow: 'from-amber-400/15 via-yellow-300/10 to-orange-500/10',
    activeRowRing: 'ring-amber-300/45 bg-amber-400/10',
    typingTile:
      'bg-gradient-to-b from-amber-300 via-amber-400 to-yellow-600 border-t-2 border-yellow-100/95 border-b-amber-950 text-slate-950 shadow-lg shadow-amber-500/40',
    currentEmptyTile:
      'bg-[#281c08]/80 border border-amber-400/40 border-b-2 border-b-[#120c03] text-amber-200/60',
    futureEmptyTile: 'border border-amber-900/60 bg-[#171005]/55 text-amber-900',
    emptyDot: 'bg-amber-400/40',
    absentTile:
      'bg-gradient-to-b from-[#30220b] to-[#1f1607] border-t border-amber-800/40 border-b-[#0d0902] text-amber-200/45 shadow-sm',
    keyboardDock: 'bg-[#140e04]/95 border-amber-500/35',
    unusedKey:
      'bg-gradient-to-b from-[#45310f] via-[#36250b] to-[#261a07] text-amber-50 border-t border-amber-300/45 border-b-[4px] border-b-[#110b02] shadow-md active:border-b-[2px] active:translate-y-0.5',
    enterKey:
      'bg-gradient-to-b from-emerald-400 via-emerald-500 to-teal-700 hover:from-emerald-300 hover:to-teal-600 text-white border-t-2 border-amber-200/90 border-b-[4px] border-b-emerald-950 shadow-lg shadow-emerald-950/60 active:border-b-[2px] active:translate-y-0.5',
    backspaceKey:
      'bg-gradient-to-b from-[#45310f] via-[#36250b] to-[#261a07] text-amber-200 border-t border-amber-300/40 border-b-[4px] border-b-[#110b02] active:border-b-[2px] active:translate-y-0.5'
  }
];

export const getThemeById = (id) => {
  return GAME_THEMES.find((t) => t.id === id) || GAME_THEMES[0];
};

export const loadThemeState = () => {
  try {
    const raw = localStorage.getItem(THEME_STORAGE_KEY);
    if (!raw) {
      return {
        activeId: 'emerald',
        unlockedIds: ['emerald'],
        spentStars: 0
      };
    }
    const parsed = JSON.parse(raw);
    const unlocked = Array.isArray(parsed.unlockedIds)
      ? Array.from(new Set(['emerald', ...parsed.unlockedIds]))
      : ['emerald'];
    return {
      activeId: unlocked.includes(parsed.activeId) ? parsed.activeId : 'emerald',
      unlockedIds: unlocked,
      spentStars: typeof parsed.spentStars === 'number' ? parsed.spentStars : 0
    };
  } catch {
    return {
      activeId: 'emerald',
      unlockedIds: ['emerald'],
      spentStars: 0
    };
  }
};

export const saveThemeState = (state) => {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, JSON.stringify(state));
  } catch {
    // ignore storage quota errors
  }
};

export const clearThemeState = () => {
  try {
    localStorage.removeItem(THEME_STORAGE_KEY);
  } catch {
    // ignore
  }
};
