import React, { useEffect, useCallback } from 'react';
import { Delete, CornerDownLeft } from 'lucide-react';
import { soundManager } from '../utils/audio';
import { normalizeLetter } from '../utils/turkishUpper';
import { evaluateGuess } from '../utils/evaluator';

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
  lang = 'tr',
  disabled = false
}) {
  // Determine key statuses from previous guesses
  const keyStatus = {};

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
    // Default unused key - modern 3D rounded candy key
    return 'bg-gradient-to-b from-slate-700 via-slate-750 to-slate-800 text-white border-t border-slate-500/60 border-b-[4px] border-b-slate-950 shadow-md active:border-b-[2px] active:translate-y-0.5 active:bg-slate-700';
  };

  return (
    <div className="w-full max-w-md mx-auto px-1 sm:px-2 pt-1 pb-2 sm:pb-3 flex flex-col gap-1 sm:gap-1.5 select-none bg-slate-950/90 backdrop-blur-md border-t border-slate-800/90 shrink-0">
      {layout.map((row, rowIndex) => (
        <div key={rowIndex} className="flex gap-0.5 sm:gap-1 justify-center w-full">
          {row.map((key) => {
            const isEnter = key === 'ENTER';
            const isBackspace = key === 'BACKSPACE';
            const isSpecial = isEnter || isBackspace;

            let specialClass = '';
            if (isEnter) {
              specialClass =
                'flex-[1.5] text-[11px] sm:text-xs tracking-wider bg-gradient-to-b from-emerald-500 via-emerald-600 to-teal-700 hover:from-emerald-400 hover:to-teal-600 text-white border-t-2 border-emerald-300/80 border-b-[4px] border-b-emerald-950 shadow-lg shadow-emerald-950/50 active:border-b-[2px] active:translate-y-0.5';
            } else if (isBackspace) {
              specialClass =
                'flex-[1.3] text-xs bg-gradient-to-b from-slate-700 via-slate-750 to-slate-800 text-rose-300 border-t border-slate-600 border-b-[4px] border-b-slate-950 active:border-b-[2px] active:translate-y-0.5';
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
                className={`h-[42px] sm:h-[48px] rounded-xl sm:rounded-2xl flex items-center justify-center font-black transition-all cursor-pointer ${
                  isSpecial ? specialClass : `flex-1 text-xs sm:text-base ${getKeyAppearance(key)}`
                }`}
                style={{
                  touchAction: 'manipulation'
                }}
              >
                {isBackspace ? (
                  <Delete className="w-4 h-4 sm:w-5 sm:h-5 text-slate-200 drop-shadow" />
                ) : isEnter ? (
                  <span className="flex items-center gap-1 font-black">
                    {lang === 'tr' ? 'ONAY' : 'ENTER'}
                    <CornerDownLeft className="w-3 h-3 opacity-90" />
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
