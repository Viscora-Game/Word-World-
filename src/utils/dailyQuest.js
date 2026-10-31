// Deterministic Daily Quest ("Günün Kelimesi"), Live Streak & Share Formatter

const DAILY_STORAGE_KEY = 'wordhunt_daily_v2';
const STREAK_STORAGE_KEY = 'wordhunt_streak_v2';
export const DAILY_BONUS_STARS = 15;
export const PUBLIC_GAME_URL = 'https://viscora-game.github.io/Word-World-/';

export function getLocalDateKey(date = new Date()) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

export function getYesterdayDateKey() {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return getLocalDateKey(d);
}

// Deterministic FNV-1a string hash
function hashString(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export function getDailyEditionNumber(date = new Date()) {
  const epoch = new Date(2026, 0, 1).getTime();
  const current = new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
  const diffDays = Math.max(1, Math.floor((current - epoch) / 86400000) + 1);
  return diffDays;
}

export function getDailyChallenge(categories = []) {
  const dateKey = getLocalDateKey();
  const edition = getDailyEditionNumber();

  const pool = [];
  categories.forEach((cat) => {
    (cat.subcategories || []).forEach((sub) => {
      (sub.levels || []).forEach((lvl) => {
        const cleanLen = (lvl.word || '').replace(/\s+/g, '').length;
        if (cleanLen >= 5 && cleanLen <= 9) {
          pool.push({
            categoryId: cat.id,
            categoryName: cat.name,
            subcategoryId: sub.id,
            subcategoryName: sub.name,
            iconKey: sub.iconKey || cat.iconKey || 'compass',
            level: lvl,
            wordLength: cleanLen
          });
        }
      });
    });
  });

  if (pool.length === 0) {
    return null;
  }

  const idx = hashString(`word_world_daily_${dateKey}`) % pool.length;
  return {
    dateKey,
    edition,
    bonusStars: DAILY_BONUS_STARS,
    ...pool[idx]
  };
}

export function getDailyState() {
  try {
    const raw = localStorage.getItem(DAILY_STORAGE_KEY);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (e) {}
  return {
    completedDates: {},
    totalBonusStars: 0
  };
}

export function isDailyCompletedToday() {
  const state = getDailyState();
  const today = getLocalDateKey();
  return Boolean(state.completedDates && state.completedDates[today]);
}

export function getTodayDailyRecord() {
  const state = getDailyState();
  const today = getLocalDateKey();
  return state.completedDates?.[today] || null;
}

export function markDailyCompleted({ attemptsCount, maxAttempts }) {
  const today = getLocalDateKey();
  const state = getDailyState();
  if (state.completedDates?.[today]) {
    return { alreadyCompleted: true, bonusAwarded: 0, state };
  }

  const nextCompleted = {
    ...(state.completedDates || {}),
    [today]: {
      attemptsCount,
      maxAttempts,
      completedAt: Date.now()
    }
  };

  const nextState = {
    completedDates: nextCompleted,
    totalBonusStars: (state.totalBonusStars || 0) + DAILY_BONUS_STARS
  };

  try {
    localStorage.setItem(DAILY_STORAGE_KEY, JSON.stringify(nextState));
  } catch (e) {}

  registerDailyActivity();
  return { alreadyCompleted: false, bonusAwarded: DAILY_BONUS_STARS, state: nextState };
}

export function getStreakInfo() {
  const today = getLocalDateKey();
  const yesterday = getYesterdayDateKey();

  try {
    const raw = localStorage.getItem(STREAK_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed.lastActiveDate === today) {
        return { streak: Math.max(1, parsed.streak || 1), activeToday: true };
      }
      if (parsed.lastActiveDate === yesterday) {
        return { streak: Math.max(1, parsed.streak || 1), activeToday: false };
      }
    }
  } catch (e) {}

  return { streak: 1, activeToday: false };
}

export function registerDailyActivity() {
  const today = getLocalDateKey();
  const yesterday = getYesterdayDateKey();

  let streak = 1;
  try {
    const raw = localStorage.getItem(STREAK_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed.lastActiveDate === today) {
        return Math.max(1, parsed.streak || 1);
      }
      if (parsed.lastActiveDate === yesterday) {
        streak = (parsed.streak || 1) + 1;
      }
    }
  } catch (e) {}

  try {
    localStorage.setItem(
      STREAK_STORAGE_KEY,
      JSON.stringify({ streak, lastActiveDate: today })
    );
  } catch (e) {}

  return streak;
}

export function getCountdownToMidnight() {
  const now = new Date();
  const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);
  const diffMs = Math.max(0, midnight.getTime() - now.getTime());

  const hours = String(Math.floor(diffMs / 3600000)).padStart(2, '0');
  const minutes = String(Math.floor((diffMs % 3600000) / 60000)).padStart(2, '0');
  const seconds = String(Math.floor((diffMs % 60000) / 1000)).padStart(2, '0');

  return `${hours}:${minutes}:${seconds}`;
}

export function buildShareText({
  isDaily = false,
  dailyEdition = 1,
  subcategoryName = '',
  levelId = 1,
  guesses = [],
  targetWord = '',
  maxAttempts = 6,
  isWon = true,
  lang = 'tr',
  evaluateGuessFn
}) {
  const header = isDaily
    ? `Word & World • Günün Kelimesi #${dailyEdition}`
    : `Word & World • ${subcategoryName} #${levelId}`;

  const scoreStr = isWon ? `${guesses.length}/${maxAttempts}` : `X/${maxAttempts}`;

  const gridLines = guesses.map((g) => {
    const evals = evaluateGuessFn(g, targetWord, lang);
    return evals
      .map((s) => (s === 'correct' ? '🟩' : s === 'present' ? '🟨' : '⬛'))
      .join('');
  });

  const cta = lang === 'tr' ? 'Sen kaç denemede bulacaksın?' : 'Can you beat my score?';
  return `${header} (${scoreStr})\n\n${gridLines.join('\n')}\n\n${cta}\n${PUBLIC_GAME_URL}`;
}
