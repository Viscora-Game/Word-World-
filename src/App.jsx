import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { CATEGORIES_DATA, UI_STRINGS } from './data/categories';
import { soundManager } from './utils/audio';
import { normalizeLetter, toUpperTR, toAsciiUpper } from './utils/turkishUpper';
import { evaluateGuess } from './utils/evaluator';
import {
  getDailyChallenge,
  getDailyState,
  isDailyCompletedToday,
  getTodayDailyRecord,
  markDailyCompleted,
  getStreakInfo,
  registerDailyActivity
} from './utils/dailyQuest';
import Header from './components/Header';
import MainMenu from './components/MainMenu';
import CyberCoreIntro from './components/CyberCoreIntro';
import DailyPuzzleModal from './components/DailyPuzzleModal';
import CategorySelect from './components/CategorySelect';
import SubcategorySelect from './components/SubcategorySelect';
import LevelSelect from './components/LevelSelect';
import GameBoard from './components/GameBoard';
import Keyboard from './components/Keyboard';
import WinModal from './components/WinModal';
import HintModal from './components/HintModal';
import SettingsModal from './components/SettingsModal';
import ThemeModal from './components/ThemeModal';
import FootballPitchModal from './components/FootballPitchModal';
import BottomNavBar from './components/BottomNavBar';
import GameIcon from './components/GameIcon';
import { getAssetUrl } from './utils/assetUrl';
import {
  getThemeById,
  loadThemeState,
  saveThemeState,
  clearThemeState
} from './utils/themes';
import { PiLightbulbFilamentDuotone, PiInfoDuotone } from 'react-icons/pi';
import { GiSoccerField } from 'react-icons/gi';

const ALPHABET_POOL = {
  tr: 'ABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZ'.split(''),
  en: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
};

export default function App() {
  // Persistence states
  const [lang, setLang] = useState(() => localStorage.getItem('wordhunt_lang') || 'tr');
  const [soundEnabled, setSoundEnabled] = useState(() => {
    const s = localStorage.getItem('wordhunt_sound');
    return s !== null ? JSON.parse(s) : true;
  });
  const [vibrationEnabled, setVibrationEnabled] = useState(() => {
    const v = localStorage.getItem('wordhunt_vibe');
    return v !== null ? JSON.parse(v) : true;
  });
  const [levelProgress, setLevelProgress] = useState(() => {
    const saved = localStorage.getItem('wordhunt_progress');
    return saved ? JSON.parse(saved) : {};
  });
  const [themeState, setThemeState] = useState(() => loadThemeState());

  // Daily Quest & Streak states
  const [dailyBonusStars, setDailyBonusStars] = useState(
    () => getDailyState().totalBonusStars || 0
  );
  const [dailyCompleted, setDailyCompleted] = useState(() => isDailyCompletedToday());
  const [dailyRecord, setDailyRecord] = useState(() => getTodayDailyRecord());
  const [streak, setStreak] = useState(() => getStreakInfo().streak);

  // CyberCore Studio Intro & Navigation
  const [showIntro, setShowIntro] = useState(true);
  const [view, setView] = useState('main');
  const [selectedCategoryId, setSelectedCategoryId] = useState('spor');
  const [selectedSubcategoryId, setSelectedSubcategoryId] = useState('ilk-11-takim');
  const [selectedLevelId, setSelectedLevelId] = useState(1);
  const [isDailyMode, setIsDailyMode] = useState(false);
  const [dailyBonusAwarded, setDailyBonusAwarded] = useState(0);

  // Background warmup of all primary graphic assets during initial load & intro
  useEffect(() => {
    const criticalAssets = [
      getAssetUrl('/assets/art/main_menu_clean_bg.webp'),
      getAssetUrl('/assets/icons/game_logo_transparent.webp'),
      getAssetUrl('/assets/art/categories_bg.webp'),
      getAssetUrl('/assets/art/discover_worlds_banner.webp'),
      getAssetUrl('/assets/art/cat_card_spor.webp'),
      getAssetUrl('/assets/art/cat_card_dizi-film.webp'),
      getAssetUrl('/assets/art/cat_card_kozmetik.webp'),
      getAssetUrl('/assets/art/cat_card_genel-kultur.webp'),
      getAssetUrl('/assets/art/cat_card_bilim.webp'),
      getAssetUrl('/assets/art/cat_card_cografya.webp'),
      getAssetUrl('/assets/art/cat_card_doga.webp'),
      getAssetUrl('/assets/art/cat_card_muzik.webp'),
      getAssetUrl('/assets/art/cat_card_mutfak.webp')
    ];
    criticalAssets.forEach((url) => {
      const img = new Image();
      img.src = url;
    });
  }, []);

  // In-Game state
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState('');
  const [isShaking, setIsShaking] = useState(false);
  const [isWon, setIsWon] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const [lettersRevealed, setLettersRevealed] = useState(0);
  const [revealedPositions, setRevealedPositions] = useState({});
  const [eliminatedKeys, setEliminatedKeys] = useState([]);
  const [radarUsed, setRadarUsed] = useState(false);

  // Modals
  const [isDailyModalOpen, setIsDailyModalOpen] = useState(false);
  const [isThemeModalOpen, setIsThemeModalOpen] = useState(false);
  const [isWinModalOpen, setIsWinModalOpen] = useState(false);
  const [isHintModalOpen, setIsHintModalOpen] = useState(false);
  const [isPitchModalOpen, setIsPitchModalOpen] = useState(false);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [settingsTab, setSettingsTab] = useState('settings');

  // Translations & Data
  const t = UI_STRINGS[lang] || UI_STRINGS.tr;
  const categories = CATEGORIES_DATA[lang] || CATEGORIES_DATA.tr;

  // Deterministic Daily Challenge for Today
  const dailyChallenge = useMemo(() => getDailyChallenge(categories), [categories]);

  // Active Category & Subcategory & Level
  const currentCategory = useMemo(() => {
    return categories.find((c) => c.id === selectedCategoryId) || categories[0] || {};
  }, [categories, selectedCategoryId]);

  const currentSubcategory = useMemo(() => {
    const subs = currentCategory?.subcategories || [];
    return subs.find((s) => s.id === selectedSubcategoryId) || subs[0] || { levels: [] };
  }, [currentCategory, selectedSubcategoryId]);

  const currentLevel = useMemo(() => {
    const levels = currentSubcategory?.levels || [];
    return levels.find((l) => l.id === selectedLevelId) || levels[0] || { word: 'KELİME', hint: '' };
  }, [currentSubcategory, selectedLevelId]);

  const targetWord = useMemo(() => {
    const raw = (currentLevel?.word || 'KELİME').replace(/\s+/g, '');
    return lang === 'tr' ? toUpperTR(raw) : toAsciiUpper(raw);
  }, [currentLevel, lang]);

  const maxAttempts = 6;

  // Sound and Vibration sync
  useEffect(() => {
    soundManager.enabled = soundEnabled;
    localStorage.setItem('wordhunt_sound', JSON.stringify(soundEnabled));
  }, [soundEnabled]);

  useEffect(() => {
    soundManager.vibrationEnabled = vibrationEnabled;
    localStorage.setItem('wordhunt_vibe', JSON.stringify(vibrationEnabled));
  }, [vibrationEnabled]);

  useEffect(() => {
    localStorage.setItem('wordhunt_lang', lang);
  }, [lang]);

  useEffect(() => {
    localStorage.setItem('wordhunt_progress', JSON.stringify(levelProgress));
  }, [levelProgress]);

  useEffect(() => {
    saveThemeState(themeState);
  }, [themeState]);

  // Compute category progress across all subcategories
  const categoryProgress = useMemo(() => {
    const res = {};
    categories.forEach((cat) => {
      let stars = 0;
      let completedLevels = 0;
      let totalLevels = 0;

      (cat.subcategories || []).forEach((sub) => {
        const subLevels = sub.levels || [];
        totalLevels += subLevels.length;
        const subMap = levelProgress[sub.id] || {};
        Object.keys(subMap).forEach((lvlId) => {
          if (subMap[lvlId]?.completed) {
            completedLevels++;
            stars += subMap[lvlId].stars || 0;
          }
        });
      });

      res[cat.id] = { stars, completedLevels, totalLevels };
    });
    return res;
  }, [categories, levelProgress]);

  // Total stars (Level Mastery Stars + Daily Quest Bonus Stars)
  const levelStars = useMemo(() => {
    return Object.values(categoryProgress).reduce((acc, curr) => acc + curr.stars, 0);
  }, [categoryProgress]);

  const totalStars = levelStars + dailyBonusStars;
  const availableStars = Math.max(0, totalStars - (themeState.spentStars || 0));
  const activeTheme = useMemo(
    () => getThemeById(themeState.activeId),
    [themeState.activeId]
  );

  // Toast Notification Helper
  const showToast = useCallback((msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2600);
  }, []);

  // Theme selection & star unlock handlers
  const handleSelectTheme = useCallback(
    (themeId) => {
      setThemeState((prev) => ({
        ...prev,
        activeId: themeId
      }));
      const picked = getThemeById(themeId);
      const label = lang === 'en' ? picked.name.en : picked.name.tr;
      showToast(lang === 'en' ? `${label} theme equipped!` : `${label} teması etkinleştirildi!`);
    },
    [lang, showToast]
  );

  const handleUnlockTheme = useCallback(
    (theme) => {
      if (availableStars < theme.cost) {
        const diff = theme.cost - availableStars;
        showToast(
          lang === 'en'
            ? `Need ${diff} more stars to unlock!`
            : `Bu tema için ${diff} yıldız daha gerekli!`
        );
        return;
      }
      setThemeState((prev) => {
        if (prev.unlockedIds.includes(theme.id)) return prev;
        return {
          activeId: theme.id,
          unlockedIds: [...prev.unlockedIds, theme.id],
          spentStars: (prev.spentStars || 0) + theme.cost
        };
      });
      const label = lang === 'en' ? theme.name.en : theme.name.tr;
      showToast(
        lang === 'en'
          ? `${label} unlocked & equipped!`
          : `${label} teması açıldı ve kuşanıldı!`
      );
    },
    [availableStars, lang, showToast]
  );

  // Start / Reset Level
  const initLevel = useCallback((lvlId, daily = false) => {
    setSelectedLevelId(lvlId);
    setIsDailyMode(daily);
    setDailyBonusAwarded(0);
    setGuesses([]);
    setCurrentGuess('');
    setIsWon(false);
    setIsGameOver(false);
    setIsWinModalOpen(false);
    setIsShaking(false);
    setLettersRevealed(0);
    setRevealedPositions({});
    setEliminatedKeys([]);
    setRadarUsed(false);
  }, []);

  const handleSelectCategory = (catId) => {
    setIsDailyMode(false);
    setSelectedCategoryId(catId);
    const cat = categories.find((c) => c.id === catId);
    if (cat?.subcategories?.length > 0) {
      setSelectedSubcategoryId(cat.subcategories[0].id);
      setView('subcategories');
    } else {
      setView('levels');
    }
  };

  const handleSelectSubcategory = (subId) => {
    setIsDailyMode(false);
    setSelectedSubcategoryId(subId);
    setView('levels');
  };

  const handleSelectLevel = (lvlId) => {
    initLevel(lvlId, false);
    const lvl = currentSubcategory.levels?.find((l) => l.id === lvlId);
    if (lvl?.lineup) {
      setIsPitchModalOpen(true);
    }
    setView('game');
  };

  const handleBack = () => {
    if (view === 'game') {
      if (isDailyMode) {
        setIsDailyMode(false);
        setView('main');
      } else {
        setView('levels');
      }
    } else if (view === 'levels') {
      setView('subcategories');
    } else if (view === 'subcategories') {
      setView('categories');
    } else if (view === 'categories') {
      setView('main');
    }
  };

  const handlePlayDaily = () => {
    if (!dailyChallenge) return;
    setSelectedCategoryId(dailyChallenge.categoryId);
    setSelectedSubcategoryId(dailyChallenge.subcategoryId);
    initLevel(dailyChallenge.level.id, true);
    if (dailyChallenge.level?.lineup) {
      setIsPitchModalOpen(true);
    }
    setView('game');
    showToast(t?.dailyStarted || 'Günün Meydan Okuması Başladı!');
  };

  // Keyboard actions
  const handleChar = useCallback(
    (char) => {
      if (isWon || isGameOver) return;
      if (currentGuess.length < targetWord.length) {
        setCurrentGuess((prev) => prev + normalizeLetter(char, lang));
      }
    },
    [isWon, isGameOver, currentGuess, targetWord, lang]
  );

  const handleDelete = useCallback(() => {
    if (isWon || isGameOver) return;
    setCurrentGuess((prev) => prev.slice(0, -1));
  }, [isWon, isGameOver]);

  const handleEnter = useCallback(() => {
    if (isWon || isGameOver) return;

    if (currentGuess.length < targetWord.length) {
      soundManager.playError();
      setIsShaking(true);
      showToast(t.notEnoughLetters);
      setTimeout(() => setIsShaking(false), 450);
      return;
    }

    const newGuesses = [...guesses, currentGuess];
    setGuesses(newGuesses);
    setCurrentGuess('');

    const evals = evaluateGuess(currentGuess, targetWord, lang);
    const isAllCorrect = evals.length === targetWord.length && evals.every((s) => s === 'correct');

    if (isAllCorrect || currentGuess === targetWord) {
      setIsWon(true);
      setIsGameOver(true);
      soundManager.playWin();

      const attemptsCount = newGuesses.length;
      let stars = 1;
      if (attemptsCount <= 2) stars = 3;
      else if (attemptsCount <= 4) stars = 2;

      const updatedStreak = registerDailyActivity();
      setStreak(updatedStreak);

      let extraDailyStars = 0;
      if (isDailyMode) {
        const res = markDailyCompleted({ attemptsCount, maxAttempts });
        if (!res.alreadyCompleted) {
          extraDailyStars = res.bonusAwarded;
          setDailyBonusAwarded(extraDailyStars);
          setDailyBonusStars(res.state.totalBonusStars);
          setDailyCompleted(true);
          setDailyRecord(getTodayDailyRecord());
        }
      }

      setLevelProgress((prev) => {
        const subMap = { ...(prev[selectedSubcategoryId] || {}) };
        const oldStars = subMap[selectedLevelId]?.stars || 0;
        const newBestStars = Math.max(oldStars, stars);

        subMap[selectedLevelId] = {
          completed: true,
          stars: newBestStars,
          attempts: attemptsCount
        };

        return {
          ...prev,
          [selectedSubcategoryId]: subMap
        };
      });

      setTimeout(() => {
        setIsWinModalOpen(true);
      }, targetWord.length * 130 + 550);
      return;
    }

    // Check Loss
    if (newGuesses.length >= maxAttempts) {
      setIsGameOver(true);
      soundManager.playError();
      setTimeout(() => {
        setIsWinModalOpen(true);
      }, targetWord.length * 130 + 550);
    }
  }, [
    isWon,
    isGameOver,
    currentGuess,
    targetWord,
    guesses,
    maxAttempts,
    lang,
    t,
    isDailyMode,
    selectedSubcategoryId,
    selectedLevelId,
    showToast
  ]);

  // JOKER 1: Reveal & Pin Letter directly onto the GameBoard
  const handleRevealLetter = () => {
    if (lettersRevealed >= 2) return;

    const knownIndices = new Set(Object.keys(revealedPositions).map(Number));
    guesses.forEach((g) => {
      const evals = evaluateGuess(g, targetWord, lang);
      evals.forEach((status, i) => {
        if (status === 'correct') knownIndices.add(i);
      });
    });

    const unrevealed = [];
    for (let i = 0; i < targetWord.length; i++) {
      if (!knownIndices.has(i)) {
        unrevealed.push(i);
      }
    }

    if (unrevealed.length > 0) {
      const targetIdx = unrevealed[Math.floor(Math.random() * unrevealed.length)];
      const revealedChar = targetWord[targetIdx];
      setRevealedPositions((prev) => ({ ...prev, [targetIdx]: revealedChar }));
      setLettersRevealed((prev) => prev + 1);
      showToast(
        `${targetIdx + 1}. ${t?.letterHintToast || 'Harf Sabitlendi'}: "${revealedChar}"`
      );
    } else {
      showToast(t?.allLettersRevealed || 'Tüm harfler zaten biliniyor!');
    }
  };

  // JOKER 2: Radar Scan - Eliminate 3 Wrong Keys on Keyboard
  const handleEliminateLetters = () => {
    if (radarUsed) return;

    const targetChars = new Set(
      targetWord.split('').map((c) => normalizeLetter(c, lang))
    );
    if (lang === 'tr') {
      if (targetChars.has('İ')) targetChars.add('I');
      if (targetChars.has('I')) targetChars.add('İ');
    }

    const alreadyTried = new Set(eliminatedKeys);
    guesses.forEach((g) => {
      g.split('').forEach((c) => alreadyTried.add(normalizeLetter(c, lang)));
    });

    const pool = (ALPHABET_POOL[lang] || ALPHABET_POOL.tr).filter(
      (ch) => !targetChars.has(ch) && !alreadyTried.has(ch)
    );

    if (pool.length === 0) {
      showToast(lang === 'tr' ? 'Elenecek yanlış harf kalmadı!' : 'No wrong keys left!');
      return;
    }

    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    const picked = shuffled.slice(0, 3);
    setEliminatedKeys((prev) => [...prev, ...picked]);
    setRadarUsed(true);
    showToast(
      lang === 'tr'
        ? `Klavyeden 3 yanlış harf elendi: ${picked.join(', ')}`
        : `3 wrong keys eliminated: ${picked.join(', ')}`
    );
  };

  const handleNextLevel = () => {
    const nextId = selectedLevelId + 1;
    const nextLvl = currentSubcategory.levels.find((l) => l.id === nextId);
    if (nextLvl) {
      initLevel(nextId, false);
      if (nextLvl.lineup) {
        setIsPitchModalOpen(true);
      }
    } else {
      showToast(t.allLevelsCompleted || t.allCategoriesCompleted);
      setView('levels');
      setIsWinModalOpen(false);
    }
  };

  const handleResetProgress = () => {
    setLevelProgress({});
    setDailyBonusStars(0);
    setDailyCompleted(false);
    setDailyRecord(null);
    setThemeState({ activeId: 'emerald', unlockedIds: ['emerald'], spentStars: 0 });
    localStorage.removeItem('wordhunt_progress');
    localStorage.removeItem('wordhunt_daily_v2');
    clearThemeState();
    setIsSettingsModalOpen(false);
    showToast(t?.resetSuccess || 'Tüm ilerleme sıfırlandı!');
  };

  const getHeaderSubtitle = () => {
    if (view === 'subcategories') return currentCategory.name;
    if (view === 'levels') return currentSubcategory.name;
    if (view === 'game') {
      if (isDailyMode) {
        return lang === 'tr'
          ? `Günün Kelimesi #${dailyChallenge?.edition || 1}`
          : `Daily Word #${dailyChallenge?.edition || 1}`;
      }
      return `${currentSubcategory.name} • ${t?.level || 'Bölüm'} ${selectedLevelId}`;
    }
    return '';
  };

  const starsEarned = useMemo(() => {
    if (!isWon) return 0;
    const count = guesses.length;
    if (count <= 2) return 3;
    if (count <= 4) return 2;
    return 1;
  }, [isWon, guesses.length]);

  const hasNextLevel = (currentSubcategory.levels || []).some(
    (l) => l.id === selectedLevelId + 1
  );

  return (
    <div className="fixed inset-0 w-full h-[100dvh] bg-[#070a12] text-slate-100 flex items-center justify-center sm:p-4 select-none overflow-hidden">
      {/* Ambient background glow for desktop showcase */}
      <div className="hidden sm:block absolute w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Mobile Frame Container: 100dvh on mobile, sleek phone frame on desktop */}
      <div className="w-full sm:max-w-[430px] h-[100dvh] sm:h-[94vh] sm:max-h-[880px] bg-[#0d121f] sm:rounded-[44px] sm:border-[6px] sm:border-slate-800 shadow-2xl flex flex-col relative overflow-hidden">
        
        {/* Floating Toast Notification (Clean Vector Icon, Zero Emojis) */}
        {toastMessage && (
          <div className="absolute top-14 left-1/2 -translate-x-1/2 z-50 max-w-[92%] bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 border border-indigo-300/50 text-white font-black text-xs py-2 px-3.5 rounded-full shadow-2xl backdrop-blur-md animate-in fade-in slide-in-from-top-2 duration-150 flex items-center gap-1.5">
            <PiInfoDuotone className="w-4 h-4 text-cyan-200 shrink-0" />
            <span className="truncate">{toastMessage}</span>
          </div>
        )}

        {/* Top Header (Visible except on Main Menu) */}
        {view !== 'main' && (
          <Header
            view={view}
            onBack={handleBack}
            totalStars={totalStars}
            availableStars={availableStars}
            onOpenThemes={() => setIsThemeModalOpen(true)}
            soundEnabled={soundEnabled}
            onToggleSound={() => setSoundEnabled((prev) => !prev)}
            onOpenSettings={() => {
              setSettingsTab('settings');
              setIsSettingsModalOpen(true);
            }}
            onOpenHelp={() => {
              setSettingsTab('rules');
              setIsSettingsModalOpen(true);
            }}
            title={t.gameTitle}
            subtitle={getHeaderSubtitle()}
          />
        )}

        {/* Screen: Main Menu (Word & World Centerpiece - Locked Layout) */}
        {view === 'main' && (
          <MainMenu
            onPlay={() => setView('categories')}
            onOpenCategories={(catId) => {
              if (catId) {
                handleSelectCategory(catId);
              } else {
                setView('categories');
              }
            }}
            onOpenDaily={() => setIsDailyModalOpen(true)}
            onOpenThemes={() => setIsThemeModalOpen(true)}
            onOpenSettings={() => {
              setSettingsTab('settings');
              setIsSettingsModalOpen(true);
            }}
            soundEnabled={soundEnabled}
            onToggleSound={() => setSoundEnabled((prev) => !prev)}
            totalStars={totalStars}
            availableStars={availableStars}
            streak={streak}
            dailyCompleted={dailyCompleted}
            levelProgress={levelProgress}
            categories={categories}
            lang={lang}
            t={t}
          />
        )}

        {/* Screen: Main Categories */}
        {view === 'categories' && (
          <CategorySelect
            categories={categories}
            categoryProgress={categoryProgress}
            onSelectCategory={handleSelectCategory}
            lang={lang}
            t={t}
          />
        )}

        {/* Screen: Subcategories Selection */}
        {view === 'subcategories' && (
          <SubcategorySelect
            category={currentCategory}
            levelProgress={levelProgress}
            onSelectSubcategory={handleSelectSubcategory}
            t={t}
          />
        )}

        {/* Screen: Level Roadmap */}
        {view === 'levels' && (
          <LevelSelect
            subcategory={currentSubcategory}
            categoryColor={currentCategory.color}
            levelProgress={levelProgress}
            onSelectLevel={handleSelectLevel}
            t={t}
          />
        )}

        {/* Screen: In-Game */}
        {view === 'game' && (
          <div className="flex-1 min-h-0 flex flex-col justify-between overflow-hidden relative bg-[#070d1e]">
            {/* Ambient Celestial Backdrop (WebP instant cached) */}
            <img
              src={getAssetUrl('/assets/art/categories_bg.webp')}
              alt=""
              className="absolute inset-0 w-full h-full object-cover object-top opacity-15 pointer-events-none select-none z-0"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#070d1e]/60 to-[#040812]/95 pointer-events-none z-0" />
            
            {/* DEDICATED QUESTION / MISSION CARD */}
            <div className="w-full px-3 pt-1.5 pb-0.5 shrink-0 relative z-10">
              <div
                className={`w-full rounded-3xl bg-gradient-to-r ${activeTheme.questionCard} border border-b-[4px] px-3.5 py-2.5 shadow-xl backdrop-blur-md flex flex-col gap-1 transition-colors duration-300`}
              >
                
                {/* Mode header + utility buttons */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 min-w-0">
                    <GameIcon name={currentSubcategory.iconKey} size="w-4 h-4" />
                    <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-wide text-amber-300 truncate">
                      {isDailyMode
                        ? lang === 'tr'
                          ? `Günün Kelimesi • ${currentSubcategory.name}`
                          : `Daily Word • ${currentSubcategory.name}`
                        : currentSubcategory.name}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      onClick={() => {
                        soundManager.playKey();
                        setIsHintModalOpen(true);
                      }}
                      className="flex items-center gap-1 bg-gradient-to-r from-amber-500/25 to-yellow-500/15 border border-amber-500/40 text-amber-300 px-2.5 py-1 rounded-full text-[10px] font-black active:scale-95 transition shadow-sm cursor-pointer"
                    >
                      <PiLightbulbFilamentDuotone className="w-3.5 h-3.5 text-amber-300" />
                      <span>{t.hint}</span>
                    </button>

                    <span className="bg-slate-800/90 border border-slate-700/80 px-2.5 py-1 rounded-full text-[10px] font-black text-slate-300">
                      {maxAttempts - guesses.length} {t?.remainingAttempts || 'Hak'}
                    </span>
                  </div>
                </div>

                {/* Full Question Text */}
                <p className="text-xs sm:text-[12.5px] font-bold text-slate-100 leading-snug text-left select-text">
                  "{currentLevel.hint}"
                </p>

                {/* Interactive Starting 11 Pitch Button (Zero Emojis) */}
                {currentLevel.lineup && (
                  <button
                    onClick={() => {
                      soundManager.playKey();
                      setIsPitchModalOpen(true);
                    }}
                    className="mt-1 w-full py-2 px-3 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-500 hover:to-teal-500 text-white font-black text-[11px] sm:text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 border border-emerald-400/50 border-b-[3px] border-b-emerald-950 shadow-md active:translate-y-0.5 transition cursor-pointer"
                  >
                    <GiSoccerField className="w-4 h-4 text-emerald-200 shrink-0" />
                    <span>
                      {t?.viewPitch || 'SAHADAKİ İLK 11 DİZİLİŞİNİ GÖR'} ({currentLevel.lineup.formation})
                    </span>
                  </button>
                )}
              </div>
            </div>

            {/* Adaptive Zero-Scroll Game Board */}
            <GameBoard
              guesses={guesses}
              currentGuess={currentGuess}
              targetWord={targetWord}
              maxAttempts={maxAttempts}
              isShaking={isShaking}
              isWon={isWon}
              revealedPositions={revealedPositions}
              theme={activeTheme}
              lang={lang}
            />

            {/* Tactile 3D Virtual Keyboard */}
            <Keyboard
              guesses={guesses}
              targetWord={targetWord}
              onChar={handleChar}
              onEnter={handleEnter}
              onDelete={handleDelete}
              eliminatedKeys={eliminatedKeys}
              theme={activeTheme}
              lang={lang}
              disabled={isWon || isGameOver}
            />
          </div>
        )}

        {/* Floating Bottom Navigation Bar (Shown on Categories view, excluded from Main Home) */}
        {view === 'categories' && (
          <BottomNavBar
            activeTab="categories"
            dailyCompleted={dailyCompleted}
            onSelectTab={(tabId) => {
              if (tabId === 'home') setView('main');
              else if (tabId === 'categories') setView('categories');
              else if (tabId === 'quests') setIsDailyModalOpen(true);
              else if (tabId === 'themes') setIsThemeModalOpen(true);
              else if (tabId === 'rules') {
                setSettingsTab('rules');
                setIsSettingsModalOpen(true);
              }
            }}
            t={t}
          />
        )}

        {/* Win / Loss Modal */}
        <WinModal
          isOpen={isWinModalOpen}
          isWon={isWon}
          starsEarned={starsEarned}
          dailyBonusAwarded={dailyBonusAwarded}
          isDailyMode={isDailyMode}
          dailyEdition={dailyChallenge?.edition || 1}
          subcategoryName={currentSubcategory.name}
          levelId={selectedLevelId}
          guesses={guesses}
          attemptsCount={guesses.length}
          maxAttempts={maxAttempts}
          targetWord={targetWord}
          hint={currentLevel.hint}
          lang={lang}
          onNextLevel={handleNextLevel}
          onReplay={() => initLevel(selectedLevelId, isDailyMode)}
          onBackToLevels={() => {
            setIsWinModalOpen(false);
            if (isDailyMode) {
              setIsDailyMode(false);
              setView('main');
            } else {
              setView('levels');
            }
          }}
          hasNextLevel={hasNextLevel}
          t={t}
        />

        {/* Football Lineup Pitch Modal */}
        <FootballPitchModal
          isOpen={isPitchModalOpen}
          onClose={() => setIsPitchModalOpen(false)}
          lineup={currentLevel.lineup}
          teamWordLength={targetWord.length}
          t={t}
        />

        {/* Daily Puzzle Modal */}
        <DailyPuzzleModal
          isOpen={isDailyModalOpen}
          onClose={() => setIsDailyModalOpen(false)}
          onPlayDaily={handlePlayDaily}
          dailyChallenge={dailyChallenge}
          dailyCompleted={dailyCompleted}
          dailyRecord={dailyRecord}
          streak={streak}
          lang={lang}
          t={t}
        />

        {/* Hint & Tactical Boosters Modal */}
        <HintModal
          isOpen={isHintModalOpen}
          onClose={() => setIsHintModalOpen(false)}
          hint={currentLevel.hint}
          categoryName={currentSubcategory.name}
          onRevealLetter={handleRevealLetter}
          lettersRevealed={lettersRevealed}
          maxLetterReveals={2}
          revealedPositions={revealedPositions}
          onEliminateLetters={handleEliminateLetters}
          radarUsed={radarUsed}
          lang={lang}
          t={t}
        />

        {/* CyberCore Studio Intro */}
        {showIntro && (
          <CyberCoreIntro onFinish={() => setShowIntro(false)} />
        )}

        {/* Theme & Cosmetics Studio Modal */}
        <ThemeModal
          isOpen={isThemeModalOpen}
          onClose={() => setIsThemeModalOpen(false)}
          activeThemeId={themeState.activeId}
          unlockedThemeIds={themeState.unlockedIds}
          availableStars={availableStars}
          totalStars={totalStars}
          onSelectTheme={handleSelectTheme}
          onUnlockTheme={handleUnlockTheme}
          lang={lang}
        />

        {/* Settings / Rules Modal */}
        <SettingsModal
          isOpen={isSettingsModalOpen}
          onClose={() => setIsSettingsModalOpen(false)}
          soundEnabled={soundEnabled}
          onToggleSound={() => setSoundEnabled((prev) => !prev)}
          vibrationEnabled={vibrationEnabled}
          onToggleVibration={() => setVibrationEnabled((prev) => !prev)}
          lang={lang}
          onChangeLanguage={(newLang) => setLang(newLang)}
          onResetProgress={handleResetProgress}
          initialTab={settingsTab}
          t={t}
        />
      </div>
    </div>
  );
}
