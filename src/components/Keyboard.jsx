import React, { useEffect, useCallback } from 'react';
import { PiBackspaceDuotone } from 'react-icons/pi';
import { soundManager } from '../utils/audio';
import { normalizeLetter } from '../utils/turkishUpper';
import { evaluateGuess } from '../utils/evaluator';
import { GAME_THEMES } from '../utils/themes';

const KEYBOARD_LAYOUTS = {
  tr: [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'Ğ', 'Ü'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ş', 'İ'],
    ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Ö', 'Ç', 'BACKSPACE']
  ],
  en: [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'BACKSPACE']
  ]
};

export default function Keyboard({
  guesses,
  targetWord,
  onChar,
  onEnter,
  onDelete,
  eliminatedKeys = [],
  theme,
  lang = 'tr',
  disabled = false
}) {
  const activeTheme = theme || GAME_THEMES[0];
  // Determine key statuses from previous guesses & radar eliminations
  const keyStatus = {};

  eliminatedKeys.forEach((k) => {
    keyStatus[normalizeLetter(k, lang)] = 'absent';
  });

  guesses.forEach((guess) => {
    const evals = evaluateGuess(guess, targetWord, lang);
    for (let i = 0; i < guess.length; i++) {
      const char = normalizeLetter(guess[i], lang);
      const status = evals[i];

      if (status === 'correct') {
        keyStatus[char] = 'correct';
        if (lang === 'tr') {
          if (char === 'I' && targetWord.includes('İ')) keyStatus['İ'] = 'correct';
          if (char === 'İ' && targetWord.includes('I')) keyStatus['I'] = 'correct';
        }
      } else if (status === 'present' && keyStatus[char] !== 'correct') {
        keyStatus[char] = 'present';
        if (lang === 'tr') {
          if (char === 'I' && targetWord.includes('İ') && keyStatus['İ'] !== 'correct') keyStatus['İ'] = 'present';
          if (char === 'İ' && targetWord.includes('I') && keyStatus['I'] !== 'correct') keyStatus['I'] = 'present';
        }
      } else if (status === 'absent' && !keyStatus[char]) {
        keyStatus[char] = 'absent';
      }
    }
  });

  const handleKeyPress = useCallback(
    (key) => {
      if (disabled) return;
      if (key === 'ENTER') {
        onEnter();
      } else if (key === 'BACKSPACE') {
        onDelete();
      } else {
        onChar(key);
      }
    },
    [disabled, onEnter, onDelete, onChar]
  );

  // Physical keyboard listener for desktop testing
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (disabled) return;
      if (e.ctrlKey || e.altKey || e.metaKey) return;

      if (e.key === 'Enter') {
        e.preventDefault();
        onEnter();
      } else if (e.key === 'Backspace') {
        e.preventDefault();
        onDelete();
      } else {
        const char = normalizeLetter(e.key, lang);
        if (/^[a-zA-ZçğıöşüÇĞİÖŞÜ]$/iu.test(e.key)) {
          e.preventDefault();
          onChar(char);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [disabled, lang, onEnter, onDelete, onChar]);

  const layout = KEYBOARD_LAYOUTS[lang] || KEYBOARD_LAYOUTS.tr;

  const getKeyAppearance = (key) => {
    const status = keyStatus[key];
    if (status === 'correct') {
      return 'bg-gradient-to-b from-emerald-400 via-emerald-500 to-teal-600 text-white border-t-2 border-emerald-200/90 border-b-[4px] border-b-emerald-950 shadow-md shadow-emerald-950/60 active:border-b-[2px] active:translate-y-0.5';
    }
    if (status === 'present') {
      return 'bg-gradient-to-b from-amber-300 via-amber-400 to-amber-500 text-slate-950 border-t-2 border-amber-100/90 border-b-[4px] border-b-amber-950 shadow-md shadow-amber-950/60 active:border-b-[2px] active:translate-y-0.5';
    }
    if (status === 'absent') {
      return 'bg-slate-850/80 text-slate-500 border-t border-slate-700/40 border-b-[3px] border-b-slate-950 opacity-40 active:border-b-[1px] active:translate-y-0.5';
    }
    // Default unused key - themed 3D rounded candy key
    return activeTheme.unusedKey;
  };

  return (
    <div
      className={`w-full max-w-md mx-auto px-1 sm:px-2 pt-1 pb-2 sm:pb-3 flex flex-col gap-1 sm:gap-1.5 select-none ${activeTheme.keyboardDock} backdrop-blur-md border-t shrink-0 transition-colors duration-300`}
    >
      {layout.map((row, rowIndex) => (
        <div key={rowIndex} className="flex gap-0.5 sm:gap-1 justify-center w-full">
          {row.map((key) => {
            const isEnter = key === 'ENTER';
            const isBackspace = key === 'BACKSPACE';
            const isSpecial = isEnter || isBackspace;

            let specialClass = '';
            if (isEnter) {
              specialClass = `flex-[1.55] min-w-0 px-1 text-[10px] sm:text-xs tracking-tight sm:tracking-wide ${activeTheme.enterKey}`;
            } else if (isBackspace) {
              specialClass = `flex-[1.3] min-w-0 px-1 text-xs ${activeTheme.backspaceKey}`;
            }

            return (
              <button
                key={key}
                type="button"
                disabled={disabled}
                onClick={() => {
                  soundManager.playKey();
                  handleKeyPress(key);
                }}
                className={`h-[42px] sm:h-[48px] rounded-lg sm:rounded-xl flex items-center justify-center font-black transition-all cursor-pointer overflow-hidden ${
                  isSpecial
                    ? specialClass
                    : `flex-1 min-w-0 px-0.5 text-xs sm:text-base ${getKeyAppearance(key)}`
                }`}
                style={{
                  touchAction: 'manipulation'
                }}
              >
                {isBackspace ? (
                  <PiBackspaceDuotone className="w-5 h-5 sm:w-6 sm:h-6 text-slate-200 drop-shadow shrink-0" />
                ) : isEnter ? (
                  <span className="font-black leading-none">
                    {lang === 'tr' ? 'ONAY' : 'ENTER'}
                  </span>
                ) : (
                  key
                )}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
}
