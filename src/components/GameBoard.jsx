import React, { useEffect, useState } from 'react';
import { evaluateGuess } from '../utils/evaluator';
import { normalizeLetter } from '../utils/turkishUpper';
import { soundManager } from '../utils/audio';
import { Sparkles } from 'lucide-react';

export default function GameBoard({
  guesses,
  currentGuess,
  targetWord,
  maxAttempts = 6,
  isShaking,
  isWon,
  lang = 'tr'
}) {
  const wordLength = targetWord.length;
  const [animatingRow, setAnimatingRow] = useState(-1);

  // Play tile sound and track animating row on new guess
  useEffect(() => {
    if (guesses.length > 0) {
      const lastIndex = guesses.length - 1;
      setAnimatingRow(lastIndex);

      const evals = evaluateGuess(guesses[lastIndex], targetWord, lang);
      evals.forEach((status, idx) => {
        setTimeout(() => {
          soundManager.playTileReveal(idx, status);
        }, idx * 120 + 50);
      });

      const timer = setTimeout(() => {
        setAnimatingRow(-1);
      }, wordLength * 120 + 350);

      return () => clearTimeout(timer);
    }
  }, [guesses.length, targetWord, lang, wordLength]);

  const rows = [];
  for (let i = 0; i < maxAttempts; i++) {
    if (i < guesses.length) {
      rows.push({
        type: 'submitted',
        text: guesses[i],
        evaluations: evaluateGuess(guesses[i], targetWord, lang),
        isWinningRow: isWon && i === guesses.length - 1,
        isAnimating: animatingRow === i
      });
    } else if (i === guesses.length) {
      rows.push({
        type: 'current',
        text: currentGuess,
        isShaking: isShaking
      });
    } else {
      rows.push({
        type: 'empty',
        text: ''
      });
    }
  }

  // Adaptive Tile Dimensioning:
  // Strictly capped to 27vh total board height so even 9-10 letter words
  // leave comfortable 40px+ clearance above the virtual keyboard!
  const getTileSizeStyle = () => {
    const maxDimensionVh = 27 / maxAttempts; // ~4.5vh per row = 27vh max total
    const maxDimensionVw = 82 / wordLength;

    return {
      width: `min(${maxDimensionVh}vh, ${maxDimensionVw}vw, 44px)`,
      height: `min(${maxDimensionVh}vh, ${maxDimensionVw}vw, 46px)`,
      maxWidth: '44px',
      maxHeight: '46px'
    };
  };

  const getFontSize = () => {
    if (wordLength <= 4) return 'text-xl sm:text-2xl';
    if (wordLength <= 6) return 'text-lg sm:text-xl';
    if (wordLength <= 8) return 'text-base sm:text-lg';
    return 'text-sm sm:text-base';
  };

  const tileStyle = getTileSizeStyle();
  const fontClass = getFontSize();

  // Dynamic gap based on word length
  const rowGapClass = wordLength >= 8 ? 'gap-1' : 'gap-1 sm:gap-1.5';

  return (
    <div className="w-full flex-1 min-h-0 flex items-center justify-center px-2 py-1 select-none overflow-hidden my-auto relative">
      
      {/* Cheerful Arena Backing: Turns boring grid into a cozy, vibrant game board */}
      <div className="p-2 sm:p-3 rounded-[28px] bg-gradient-to-b from-slate-900/60 via-slate-950/80 to-slate-900/60 border border-slate-700/50 shadow-2xl shadow-indigo-950/30 backdrop-blur-xs flex flex-col justify-center items-center relative">
        
        {/* Soft atmospheric ambient glow */}
        <div className="absolute inset-0 rounded-[28px] bg-gradient-to-tr from-indigo-500/5 via-cyan-500/5 to-amber-500/5 pointer-events-none" />

        <div className={`flex flex-col ${rowGapClass} justify-center items-center max-h-full relative z-10`}>
          {rows.map((row, rowIndex) => {
            const isCurrentRow = row.type === 'current';

            return (
              <div
                key={rowIndex}
                className={`flex ${rowGapClass} justify-center items-center perspective-1000 p-0.5 rounded-2xl transition-all ${
                  isCurrentRow
                    ? 'ring-1 ring-cyan-400/30 bg-cyan-500/5 shadow-sm'
                    : ''
                } ${row.isShaking ? 'animate-row-shake' : ''}`}
              >
                {Array.from({ length: wordLength }).map((_, colIndex) => {
                  const letter = row.text[colIndex] ? normalizeLetter(row.text[colIndex], lang) : '';

                  // 1. SUBMITTED ROWS (REVEALED TACTILE 3D TILES)
                  if (row.type === 'submitted') {
                    const status = row.evaluations[colIndex];
                    
                    // Absent (Soft frosted glass)
                    let tileTheme =
                      'bg-gradient-to-b from-slate-800 to-slate-850 border-t border-slate-700/60 border-b-[4px] border-b-slate-950 text-slate-400 shadow-sm';

                    // Correct (Juicy 3D Emerald Candy)
                    if (status === 'correct') {
                      tileTheme =
                        'bg-gradient-to-b from-emerald-400 via-emerald-500 to-teal-600 border-t-2 border-emerald-200/90 border-b-[4px] border-b-emerald-950 text-white shadow-lg shadow-emerald-950/60';
                    } 
                    // Present (Radiant 3D Sunshine Honey)
                    else if (status === 'present') {
                      tileTheme =
                        'bg-gradient-to-b from-amber-300 via-amber-400 to-amber-600 border-t-2 border-amber-100/90 border-b-[4px] border-b-amber-950 text-slate-950 shadow-lg shadow-amber-950/60';
                    }

                    return (
                      <div
                        key={`${rowIndex}-${colIndex}`}
                        style={{
                          ...tileStyle,
                          animationDelay: row.isAnimating
                            ? `${colIndex * 120}ms`
                            : row.isWinningRow
                            ? `${colIndex * 80}ms`
                            : '0ms'
                        }}
                        className={`rounded-2xl flex items-center justify-center font-black uppercase transition-all ${fontClass} ${
                          row.isAnimating ? 'animate-tile-flip' : ''
                        } ${row.isWinningRow ? 'animate-win-wave' : ''} ${tileTheme}`}
                      >
                        <span className="drop-shadow-[0_2px_3px_rgba(0,0,0,0.4)]">
                          {letter}
                        </span>
                      </div>
                    );
                  }

                  // 2. CURRENT ACTIVE INPUT ROW
                  if (row.type === 'current') {
                    const hasChar = Boolean(letter);
                    return (
                      <div
                        key={`curr-${colIndex}`}
                        style={tileStyle}
                        className={`rounded-2xl flex items-center justify-center font-black uppercase transition-all duration-100 ${fontClass} ${
                          hasChar
                            ? 'bg-gradient-to-b from-indigo-500 via-indigo-600 to-purple-600 border-t-2 border-indigo-200/80 border-b-[4px] border-b-indigo-950 text-white shadow-lg shadow-indigo-500/30 animate-tile-pop'
                            : 'bg-slate-900/70 border border-slate-700/60 border-b-2 border-b-slate-950 text-slate-500 shadow-inner'
                        }`}
                      >
                        {hasChar ? (
                          <span className="drop-shadow-sm">{letter}</span>
                        ) : (
                          /* Cheerful subtle placeholder dot */
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-700/70" />
                        )}
                      </div>
                    );
                  }

                  // 3. EMPTY FUTURE ROWS
                  return (
                    <div
                      key={`empty-${colIndex}`}
                      style={tileStyle}
                      className="rounded-2xl border border-slate-800/80 bg-slate-950/40 text-slate-700 flex items-center justify-center shadow-inner"
                    >
                      <span className="w-1 h-1 rounded-full bg-slate-800/60" />
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
