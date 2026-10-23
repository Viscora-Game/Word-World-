import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { CATEGORIES_DATA, UI_STRINGS } from './data/categories';
import { soundManager } from './utils/audio';
import { normalizeLetter, toUpperTR } from './utils/turkishUpper';
import { evaluateGuess } from './utils/evaluator';
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
import FootballPitchModal from './components/FootballPitchModal';
import LeaderboardModal from './components/LeaderboardModal';
import BottomNavBar from './components/BottomNavBar';
import GameIcon from './components/GameIcon';
import { getAssetUrl } from './utils/assetUrl';
import { Lightbulb, Sparkles } from 'lucide-react';

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

  // CyberCore Studio Intro & Navigation
  const [showIntro, setShowIntro] = useState(true);
  const [view, setView] = useState('main');
  const [selectedCategoryId, setSelectedCategoryId] = useState('spor');
  const [selectedSubcategoryId, setSelectedSubcategoryId] = useState('ilk-11-takim');

  // Background warmup of all primary graphic assets during initial load & intro
  useEffect(() => {
    const criticalAssets = [
      getAssetUrl('/assets/art/main_menu_clean_bg.webp'),
      getAssetUrl('/assets/icons/game_logo_transparent.webp'),
      getAssetUrl('/assets/art/categories_bg.webp'),
      getAssetUrl('/assets/art/discover_worlds_banner.webp'),
      getAssetUrl('/assets/art/cat_card_spor.webp'),
      getAssetUrl('/assets/art/cat_card_dizi-film.webp'),
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
  const [selectedLevelId, setSelectedLevelId] = useState(1);

  // In-Game state
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState('');
  const [isShaking, setIsShaking] = useState(false);
  const [isWon, setIsWon] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const [lettersRevealed, setLettersRevealed] = useState(0);

  // Modals
  const [isDailyModalOpen, setIsDailyModalOpen] = useState(false);
  const [isLeaderboardModalOpen, setIsLeaderboardModalOpen] = useState(false);
  const [isWinModalOpen, setIsWinModalOpen] = useState(false);
  const [isHintModalOpen, setIsHintModalOpen] = useState(false);
  const [isPitchModalOpen, setIsPitchModalOpen] = useState(false);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [settingsTab, setSettingsTab] = useState('settings');

  // Translations
  const t = UI_STRINGS[lang] || UI_STRINGS.tr;
  const categories = CATEGORIES_DATA[lang] || CATEGORIES_DATA.tr;

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
    return lang === 'tr' ? toUpperTR(raw) : raw.toUpperCase();
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

  // Total stars
  const totalStars = useMemo(() => {
    return Object.values(categoryProgress).reduce((acc, curr) => acc + curr.stars, 0);
  }, [categoryProgress]);

  // Toast Notification Helper
  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  // Start / Reset Level
  const initLevel = useCallback((lvlId) => {
    setSelectedLevelId(lvlId);
    setGuesses([]);
    setCurrentGuess('');
    setIsWon(false);
    setIsGameOver(false);
    setIsWinModalOpen(false);
    setIsShaking(false);
    setLettersRevealed(0);
  }, []);

  const handleSelectCategory = (catId) => {
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
    setSelectedSubcategoryId(subId);
    setView('levels');
  };

  const handleSelectLevel = (lvlId) => {
    initLevel(lvlId);
    const lvl = currentSubcategory.levels?.find((l) => l.id === lvlId);
    if (lvl?.lineup) {
      setIsPitchModalOpen(true);
    }
    setView('game');
  };

  const handleBack = () => {
    if (view === 'game') {
      setView('levels');
    } else if (view === 'levels') {
      setView('subcategories');
    } else if (view === 'subcategories') {
      setView('categories');
    } else if (view === 'categories') {
      setView('main');
    }
  };

  const handlePlayDaily = () => {
    setSelectedCategoryId('spor');
    setSelectedSubcategoryId('ilk-11-takim');
    initLevel(1);
    setIsPitchModalOpen(true);
    setView('game');
    showToast(t?.dailyStarted || '📅 Günün Meydan Okuması Başladı!');
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

    // Check Win (evaluates all letters including forgiving Turkish I/İ)
    const evals = evaluateGuess(currentGuess, targetWord, lang);
    const isAllCorrect = evals.length === targetWord.length && evals.every((s) => s === 'correct');

    if (isAllCorrect || currentGuess === targetWord) {
      setIsWon(true);
      setIsGameOver(true);
      soundManager.playWin();

      // 1-2 guesses = 3 stars, 3-4 = 2 stars, 5-6 = 1 star
      const attemptsCount = newGuesses.length;
      let stars = 1;
      if (attemptsCount <= 2) stars = 3;
      else if (attemptsCount <= 4) stars = 2;

      setLevelProgress((prev) => {
        const subMap = { ...(prev[selectedSubcategoryId] || {}) };
        const oldStars = subMap[selectedLevelId]?.stars || 0;
        subMap[selectedLevelId] = {
          completed: true,
          stars: Math.max(oldStars, stars),
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
    t,
    selectedSubcategoryId,
    selectedLevelId
  ]);

  // Reveal Letter power-up
  const handleRevealLetter = () => {
    if (lettersRevealed >= 2) return;

    const correctIndices = new Set();
    guesses.forEach((g) => {
      for (let i = 0; i < g.length; i++) {
        if (g[i] === targetWord[i]) correctIndices.add(i);
      }
    });

    const unrevealed = [];
    for (let i = 0; i < targetWord.length; i++) {
      if (!correctIndices.has(i)) {
        unrevealed.push(i);
      }
    }

    if (unrevealed.length > 0) {
      const targetIdx = unrevealed[Math.floor(Math.random() * unrevealed.length)];
      const revealedChar = targetWord[targetIdx];
      setLettersRevealed((prev) => prev + 1);
      showToast(`💡 ${targetIdx + 1}. ${t?.letterHintToast || 'Harf'}: "${revealedChar}"`);
    } else {
      showToast(t?.allLettersRevealed || 'Tüm harfler zaten biliniyor!');
    }
  };

  const handleNextLevel = () => {
    const nextId = selectedLevelId + 1;
    const exists = currentSubcategory.levels.some((l) => l.id === nextId);
    if (exists) {
      initLevel(nextId);
    } else {
      showToast(t.allLevelsCompleted);
      setView('levels');
      setIsWinModalOpen(false);
    }
  };

  const handleResetProgress = () => {
    setLevelProgress({});
    localStorage.removeItem('wordhunt_progress');
    setIsSettingsModalOpen(false);
    showToast(t?.progressResetSuccess || 'İlerleme başarıyla sıfırlandı.');
  };

  const getHeaderSubtitle = () => {
    if (view === 'subcategories') return currentCategory.name;
    if (view === 'levels') return currentSubcategory.name;
    if (view === 'game') return `${currentSubcategory.name} • ${t.level} ${selectedLevelId}`;
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
        
        {/* Floating Toast Notification */}
        {toastMessage && (
          <div className="absolute top-14 left-1/2 -translate-x-1/2 z-50 bg-gradient-to-r from-indigo-600 to-purple-600 border border-indigo-300/40 text-white font-black text-xs py-2 px-4 rounded-full shadow-xl backdrop-blur-md animate-in fade-in slide-in-from-top-2 duration-150 whitespace-nowrap">
            {toastMessage}
          </div>
        )}

        {/* Top Header (Visible except on Main Menu) */}
        {view !== 'main' && (
          <Header
            view={view}
            onBack={handleBack}
            totalStars={totalStars}
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

        {/* Screen: Main Menu (Word & World Centerpiece) */}
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
            onOpenLeaderboard={() => setIsLeaderboardModalOpen(true)}
            onOpenSettings={() => {
              setSettingsTab('settings');
              setIsSettingsModalOpen(true);
            }}
            onOpenHelp={() => {
              setSettingsTab('rules');
              setIsSettingsModalOpen(true);
            }}
            soundEnabled={soundEnabled}
            onToggleSound={() => setSoundEnabled((prev) => !prev)}
            totalStars={totalStars}
            levelProgress={levelProgress}
            categories={categories}
            t={t}
          />
        )}

        {/* Screen: Main Categories */}
        {view === 'categories' && (
          <CategorySelect
            categories={categories}
            categoryProgress={categoryProgress}
            onSelectCategory={handleSelectCategory}
            t={t}
          />
        )}

        {/* Screen: Subcategories Selection (e.g. Spor -> Futbol, Basketbol, F1) */}
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
            {/* Ambient Celestial Backdrop */}
            <img
              src={getAssetUrl('/assets/art/categories_bg.jpg')}
              alt=""
              className="absolute inset-0 w-full h-full object-cover object-top opacity-15 pointer-events-none select-none z-0"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#070d1e]/60 to-[#040812]/95 pointer-events-none z-0" />
            
            {/* DEDICATED QUESTION / MISSION CARD (NEVER TRUNCATED!) */}
            <div className="w-full px-3 pt-1.5 pb-0.5 shrink-0 relative z-10">
              <div className="w-full rounded-3xl bg-gradient-to-r from-slate-900/95 via-slate-850/95 to-slate-900/95 border border-slate-700/80 border-b-[4px] border-b-slate-950 px-3.5 py-2.5 shadow-xl backdrop-blur-md flex flex-col gap-1">
                
                {/* Mode header + utility buttons */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 min-w-0">
                    <GameIcon name={currentSubcategory.iconKey} size="w-4 h-4" />
                    <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-wide text-amber-300 truncate">
                      {currentSubcategory.name}
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
                      <Lightbulb className="w-3 h-3 text-amber-400" />
                      <span>{t.hint}</span>
                    </button>

                    <span className="bg-slate-800/90 border border-slate-700/80 px-2.5 py-1 rounded-full text-[10px] font-black text-slate-300">
                      {maxAttempts - guesses.length} {t.remainingAttempts}
                    </span>
                  </div>
                </div>

                {/* Full Question Text (100% visible, multi-line, readable) */}
                <p className="text-xs sm:text-[12.5px] font-bold text-slate-100 leading-snug text-left select-text">
                  "{currentLevel.hint}"
                </p>

                {/* Interactive Starting 11 Pitch Button (Only if lineup exists) */}
                {currentLevel.lineup && (
                  <button
                    onClick={() => {
                      soundManager.playKey();
                      setIsPitchModalOpen(true);
                    }}
                    className="mt-1 w-full py-2 px-3 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-500 hover:to-teal-500 text-white font-black text-[11px] sm:text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 border border-emerald-400/50 border-b-[3px] border-b-emerald-950 shadow-md active:translate-y-0.5 transition cursor-pointer"
                  >
                    <span>🏟️ {t?.viewPitch || 'SAHADAKİ İLK 11\'İ GÖRÜNTÜLE'} ({currentLevel.lineup.formation})</span>
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
              lang={lang}
            />

            {/* Tactile 3D Virtual Keyboard */}
            <Keyboard
              guesses={guesses}
              targetWord={targetWord}
              onChar={handleChar}
              onEnter={handleEnter}
              onDelete={handleDelete}
              lang={lang}
              disabled={isWon || isGameOver}
            />
          </div>
        )}

        {/* Floating Bottom Navigation Bar (Shown on Categories view, excluded from Main Home) */}
        {view === 'categories' && (
          <BottomNavBar
            activeTab="categories"
            onSelectTab={(tabId) => {
              if (tabId === 'home') setView('main');
              else if (tabId === 'categories') setView('categories');
              else if (tabId === 'quests') setIsDailyModalOpen(true);
              else if (tabId === 'leaderboard') setIsLeaderboardModalOpen(true);
            }}
            t={t}
          />
        )}

        {/* Win / Loss Modal */}
        <WinModal
          isOpen={isWinModalOpen}
          isWon={isWon}
          starsEarned={starsEarned}
          attemptsCount={guesses.length}
          maxAttempts={maxAttempts}
          targetWord={targetWord}
          hint={currentLevel.hint}
          onNextLevel={handleNextLevel}
          onReplay={() => initLevel(selectedLevelId)}
          onBackToLevels={() => {
            setIsWinModalOpen(false);
            setView('levels');
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
          t={t}
        />

        {/* Leaderboard Modal (Image 2 & 3: Liderlik Tablosu) */}
        <LeaderboardModal
          isOpen={isLeaderboardModalOpen}
          onClose={() => setIsLeaderboardModalOpen(false)}
          totalStars={totalStars}
          totalCompleted={totalCompleted}
          playerRankTitle={t?.masterHunter || 'Usta Avcı'}
          t={t}
        />

        {/* Hint Modal */}
        <HintModal
          isOpen={isHintModalOpen}
          onClose={() => setIsHintModalOpen(false)}
          hint={currentLevel.hint}
          categoryName={currentSubcategory.name}
          onRevealLetter={handleRevealLetter}
          lettersRevealed={lettersRevealed}
          maxLetterReveals={2}
          t={t}
        />

        {/* CyberCore Studio Intro (Opens on game startup, exact to prototype) */}
        {showIntro && (
          <CyberCoreIntro onFinish={() => setShowIntro(false)} />
        )}

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
