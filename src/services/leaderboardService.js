/**
 * Word & World - Global Leaderboard & 5-Tier Hunter League Service
 *
 * Features:
 * 1. Live MongoDB Atlas synchronization via REST / Serverless API.
 * 2. Instant zero-latency local merge & competitive rival pacing for static hosts (GitHub Pages).
 * 3. Distinct Weekly ("Bu Hafta") & All-Time ("Tüm Zamanlar") standings.
 * 4. 5-Tier Hunter League progression & live weekly season countdown.
 */

const API_BASE_URL = import.meta.env.VITE_API_URL || '';

export const LEAGUE_TIERS = [
  {
    id: 'bronze',
    tr: 'Bronz Gezgin',
    en: 'Bronze Explorer',
    minStars: 0,
    nextStars: 25,
    pillClass: 'bg-amber-700/25 text-amber-300 border-amber-600/40',
    accentText: 'text-amber-300',
    barGradient: 'from-amber-500 to-orange-500'
  },
  {
    id: 'silver',
    tr: 'Gümüş Kaşif',
    en: 'Silver Pathfinder',
    minStars: 25,
    nextStars: 75,
    pillClass: 'bg-slate-400/20 text-slate-200 border-slate-400/40',
    accentText: 'text-slate-200',
    barGradient: 'from-slate-300 to-cyan-300'
  },
  {
    id: 'gold',
    tr: 'Altın Uzman',
    en: 'Gold Specialist',
    minStars: 75,
    nextStars: 175,
    pillClass: 'bg-yellow-500/20 text-yellow-300 border-yellow-400/50',
    accentText: 'text-yellow-300',
    barGradient: 'from-yellow-400 to-amber-500'
  },
  {
    id: 'diamond',
    tr: 'Elmas Usta',
    en: 'Diamond Master',
    minStars: 175,
    nextStars: 350,
    pillClass: 'bg-cyan-500/20 text-cyan-300 border-cyan-400/50',
    accentText: 'text-cyan-300',
    barGradient: 'from-cyan-400 to-blue-500'
  },
  {
    id: 'legend',
    tr: 'Efsanevi Avcı',
    en: 'Mythic Hunter',
    minStars: 350,
    nextStars: null,
    pillClass: 'bg-fuchsia-500/25 text-fuchsia-300 border-fuchsia-400/50',
    accentText: 'text-fuchsia-300',
    barGradient: 'from-fuchsia-400 via-purple-400 to-amber-400'
  }
];

export function getLeagueForStars(stars = 0, lang = 'tr') {
  let current = LEAGUE_TIERS[0];
  let idx = 0;
  for (let i = 0; i < LEAGUE_TIERS.length; i++) {
    if (stars >= LEAGUE_TIERS[i].minStars) {
      current = LEAGUE_TIERS[i];
      idx = i;
    }
  }

  const nextTier = LEAGUE_TIERS[idx + 1] || null;
  const name = lang === 'en' ? current.en : current.tr;
  const nextName = nextTier ? (lang === 'en' ? nextTier.en : nextTier.tr) : null;

  let progressPct = 100;
  let starsNeeded = 0;
  if (nextTier) {
    const span = nextTier.minStars - current.minStars;
    const gained = Math.max(0, stars - current.minStars);
    progressPct = Math.min(100, Math.round((gained / span) * 100));
    starsNeeded = Math.max(1, nextTier.minStars - stars);
  }

  return {
    ...current,
    tierIndex: idx + 1,
    name,
    nextName,
    progressPct,
    starsNeeded
  };
}

// Weekly Season Rivals (Paced smoothly from 2 stars to 185 stars so every win climbs ranks!)
const WEEKLY_RIVALS = [
  { id: 'w1', name: 'Efsane_Avci', stars: 185, completed: 64 },
  { id: 'w2', name: 'Selin_Word', stars: 162, completed: 56 },
  { id: 'w3', name: 'Kerem_Pro', stars: 144, completed: 50 },
  { id: 'w4', name: 'KozmikGezgin', stars: 128, completed: 44 },
  { id: 'w5', name: 'Atlas_TR', stars: 112, completed: 39 },
  { id: 'w6', name: 'GizemliHarf', stars: 96, completed: 34 },
  { id: 'w7', name: 'Bora_06', stars: 84, completed: 30 },
  { id: 'w8', name: 'DenizYildizi', stars: 72, completed: 26 },
  { id: 'w9', name: 'NovaPusula', stars: 61, completed: 22 },
  { id: 'w10', name: 'Ege_Kaptan', stars: 52, completed: 19 },
  { id: 'w11', name: 'Zeynep_34', stars: 44, completed: 16 },
  { id: 'w12', name: 'Taktik Deha', stars: 37, completed: 14 },
  { id: 'w13', name: 'KuzeyYildizi', stars: 31, completed: 12 },
  { id: 'w14', name: 'Arda_10', stars: 26, completed: 10 },
  { id: 'w15', name: 'Mert_Avci', stars: 21, completed: 8 },
  { id: 'w16', name: 'Elif_Kelime', stars: 17, completed: 7 },
  { id: 'w17', name: 'Poyraz_35', stars: 14, completed: 6 },
  { id: 'w18', name: 'Defne_Su', stars: 11, completed: 5 },
  { id: 'w19', name: 'Caner_99', stars: 8, completed: 3 },
  { id: 'w20', name: 'Bilge_Kagan', stars: 5, completed: 2 },
  { id: 'w21', name: 'YeniGezgin', stars: 2, completed: 1 }
];

// All-Time Hall of Fame Rivals (Up to 640 stars across the 280+ levels)
const ALL_TIME_RIVALS = [
  { id: 'a1', name: 'Kuzey_Efsanesi', stars: 640, completed: 224 },
  { id: 'a2', name: 'Efsane_Avci', stars: 585, completed: 205 },
  { id: 'a3', name: 'Tarih_Profesoru', stars: 520, completed: 184 },
  { id: 'a4', name: 'Selin_Word', stars: 465, completed: 165 },
  { id: 'a5', name: 'Kerem_Pro', stars: 410, completed: 146 },
  { id: 'a6', name: 'Anka_Kusu', stars: 360, completed: 128 },
  { id: 'a7', name: 'KozmikGezgin', stars: 315, completed: 112 },
  { id: 'a8', name: 'Atlas_TR', stars: 270, completed: 96 },
  { id: 'a9', name: 'Ilk11_Uzmani', stars: 230, completed: 82 },
  { id: 'a10', name: 'GizemliHarf', stars: 192, completed: 69 },
  { id: 'a11', name: 'Bora_06', stars: 158, completed: 57 },
  { id: 'a12', name: 'DenizYildizi', stars: 128, completed: 46 },
  { id: 'a13', name: 'Sinema_Gurusu', stars: 102, completed: 37 },
  { id: 'a14', name: 'NovaPusula', stars: 80, completed: 29 },
  { id: 'a15', name: 'Ege_Kaptan', stars: 62, completed: 23 },
  { id: 'a16', name: 'Zeynep_34', stars: 46, completed: 17 },
  { id: 'a17', name: 'Taktik_Deha', stars: 33, completed: 12 },
  { id: 'a18', name: 'Arda_10', stars: 22, completed: 8 },
  { id: 'a19', name: 'Mert_Avci', stars: 14, completed: 5 },
  { id: 'a20', name: 'Elif_Kelime', stars: 8, completed: 3 },
  { id: 'a21', name: 'Poyraz_35', stars: 3, completed: 1 }
];

function mergeAndSortStandings(basePool, currentPlayer, lang = 'tr') {
  const filtered = basePool.filter(
    (p) =>
      p.id !== currentPlayer.id &&
      p.name.toLowerCase() !== currentPlayer.name.toLowerCase()
  );

  const combined = [...filtered, currentPlayer];

  combined.sort((a, b) => {
    if (b.stars !== a.stars) return b.stars - a.stars;
    if (a.isCurrentUser) return -1;
    if (b.isCurrentUser) return 1;
    return 0;
  });

  return combined.map((entry, idx) => {
    const lvlNum = entry.levelNum || Math.min(Math.floor((entry.completed || 0) / 6) + 1, 99);
    const leagueObj = getLeagueForStars(entry.stars || 0, lang);
    return {
      ...entry,
      rank: idx + 1,
      level: `Lv.${lvlNum}`,
      league: leagueObj.name,
      leaguePillClass: leagueObj.pillClass,
      isTop3: idx < 3
    };
  });
}

export function getWeeklySeasonCountdown(lang = 'tr') {
  const now = new Date();
  const dayOfWeek = now.getDay(); // 0 = Sunday, 1 = Monday ...
  const daysUntilSunday = dayOfWeek === 0 ? 0 : 7 - dayOfWeek;

  const endOfSeason = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + daysUntilSunday,
    23,
    59,
    59
  );

  const diffMs = Math.max(0, endOfSeason.getTime() - now.getTime());
  const d = Math.floor(diffMs / 86400000);
  const h = Math.floor((diffMs % 86400000) / 3600000);
  const m = Math.floor((diffMs % 3600000) / 60000);

  if (lang === 'en') {
    return `${d}D ${h}H ${m}M`;
  }
  return `${d}G ${h}S ${m}D`;
}

export const leaderboardService = {
  getPlayerId() {
    let id = localStorage.getItem('wordhunt_player_id');
    if (!id) {
      id = 'user_' + Math.random().toString(36).substring(2, 9) + Date.now().toString(36);
      localStorage.setItem('wordhunt_player_id', id);
    }
    return id;
  },

  getPlayerName() {
    return localStorage.getItem('wordhunt_player_name') || 'Usta Avcı';
  },

  setPlayerName(name) {
    const cleanName = (name || '').trim().substring(0, 16) || 'Usta Avcı';
    localStorage.setItem('wordhunt_player_name', cleanName);
    return cleanName;
  },

  getQuickRank(stars = 0, completedLevels = 0, lang = 'tr') {
    const playerEntry = {
      id: this.getPlayerId(),
      name: this.getPlayerName(),
      stars,
      completed: completedLevels,
      levelNum: Math.min(Math.floor(completedLevels / 6) + 1, 99),
      isCurrentUser: true
    };
    const standings = mergeAndSortStandings(WEEKLY_RIVALS, playerEntry, lang);
    const found = standings.find((p) => p.isCurrentUser);
    return found ? found.rank : standings.length;
  },

  async getLeaderboard(timeframe = 'weekly', currentStars = 0, completedLevels = 0, lang = 'tr') {
    const playerId = this.getPlayerId();
    const playerName = this.getPlayerName();
    const playerEntry = {
      id: playerId,
      name: playerName,
      stars: currentStars,
      completed: completedLevels,
      levelNum: Math.min(Math.floor(completedLevels / 6) + 1, 99),
      isCurrentUser: true
    };

    const endpoint = API_BASE_URL ? `${API_BASE_URL}/api/leaderboard` : '';

    if (endpoint) {
      try {
        const res = await fetch(`${endpoint}?timeframe=${timeframe}`, {
          headers: { Accept: 'application/json' },
          signal: AbortSignal.timeout(3500)
        });
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data.players) && data.players.length > 0) {
            const normalizedRemote = data.players.map((p) => ({
              id: p.playerId || p.id,
              name: p.name,
              stars: p.stars || 0,
              completed: p.completed || 0,
              levelNum: typeof p.level === 'number' ? p.level : undefined,
              isCurrentUser: (p.playerId || p.id) === playerId
            }));
            const merged = mergeAndSortStandings(normalizedRemote, playerEntry, lang);
            return {
              isLive: Boolean(data.isLive !== false),
              players: merged,
              totalCount: Math.max(merged.length, data.totalCount || 0)
            };
          }
        }
      } catch (err) {
        // Seamless fallback to responsive local league
      }
    }

    const basePool = timeframe === 'allTime' ? ALL_TIME_RIVALS : WEEKLY_RIVALS;
    const merged = mergeAndSortStandings(basePool, playerEntry, lang);

    return {
      isLive: false,
      players: merged,
      totalCount: merged.length
    };
  },

  async submitScore(stars, completedLevels) {
    const playerId = this.getPlayerId();
    const name = this.getPlayerName();
    const level = Math.min(Math.floor(completedLevels / 6) + 1, 99);

    if (API_BASE_URL) {
      try {
        const res = await fetch(`${API_BASE_URL}/api/leaderboard/score`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            playerId,
            name,
            stars,
            level,
            completed: completedLevels
          }),
          signal: AbortSignal.timeout(3500)
        });
        if (res.ok) {
          return await res.json();
        }
      } catch (e) {
        // Keep smooth offline-first UX
      }
    }

    return { success: true, localOnly: true };
  }
};
