import React, { useEffect, useState } from 'react';
import { evaluateGuess } from '../utils/evaluator';
import { normalizeLetter } from '../utils/turkishUpper';
import { soundManager } from '../utils/audio';
import { GAME_THEMES } from '../utils/themes';

export default function GameBoard({
  guesses,
  currentGuess,
  targetWord,
  maxAttempts = 6,
  isShaking,
  isWon,
  revealedPositions = {},
  theme,
  lang = 'tr'
}) {
  const activeTheme = theme || GAME_THEMES[0];
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

  // Container-Query Adaptive Tile Sizing:
  // Uses exact GameBoard container width (100cqw) and height (100cqh) rather than viewport vw,
  // guaranteeing zero horizontal or vertical overflow for 3-to-14+ letter words on both mobile and desktop frames.
  const isLongWord = wordLength >= 9;
  const colGapPx = wordLength >= 10 ? 3 : wordLength >= 8 ? 4 : 6;
  const rowGapPx = 5;
  const horizOverhead = (isLongWord ? 36 : 52) + (wordLength - 1) * colGapPx;
  const vertOverhead = 84;

  const availW = `calc((100cqw - ${horizOverhead}px) / ${wordLength})`;
  const availH = `calc((100cqh - ${vertOverhead}px) / ${maxAttempts})`;

  const tileStyle = {
    width: `min(${availW}, ${availH}, 46px)`,
    height: `min(${availH}, calc(${availW} * 1.16), 48px)`
  };

  const getFontClass = () => {
    if (wordLength <= 5) return 'text-xl sm:text-2xl';
    if (wordLength <= 7) return 'text-lg sm:text-xl';
    if (wordLength <= 9) return 'text-sm sm:text-base';
    return 'text-xs sm:text-sm';
  };

  const getRadiusClass = () => {
    if (wordLength <= 6) return 'rounded-2xl';
    if (wordLength <= 9) return 'rounded-xl';
    return 'rounded-lg';
  };

  const fontClass = getFontClass();
  const radiusClass = getRadiusClass();
  const lipClass = isLongWord ? 'border-b-[3px]' : 'border-b-[4px]';

  return (
    <div
      className={`w-full flex-1 min-h-0 flex items-center justify-center ${
        isLongWord ? 'px-1.5' : 'px-2.5'
      } py-1 select-none overflow-hidden relative`}
      style={{ containerType: 'size' }}
    >
      {/* Arena Backing */}
      <div
        className={`${
          isLongWord ? 'px-1.5 py-2 rounded-2xl' : 'p-2.5 rounded-[26px]'
        } max-w-full bg-gradient-to-b ${activeTheme.arenaFrame} border shadow-2xl backdrop-blur-xs flex flex-col justify-center items-center relative transition-colors duration-300`}
      >
        <div
          className={`absolute inset-0 rounded-inherit bg-gradient-to-tr ${activeTheme.arenaGlow} pointer-events-none`}
        />

        <div
          className="flex flex-col justify-center items-center max-w-full relative z-10"
          style={{ gap: `${rowGapPx}px` }}
        >
          {rows.map((row, rowIndex) => {
            const isCurrentRow = row.type === 'current';

            return (
              <div
                key={rowIndex}
                style={{ gap: `${colGapPx}px` }}
                className={`flex justify-center items-center max-w-full perspective-1000 p-0.5 rounded-xl transition-all ${
                  isCurrentRow
                    ? `ring-1 ${activeTheme.activeRowRing} shadow-sm`
                    : ''
                } ${row.isShaking ? 'animate-row-shake' : ''}`}
              >
                {Array.from({ length: wordLength }).map((_, colIndex) => {
                  const letter = row.text[colIndex]
                    ? normalizeLetter(row.text[colIndex], lang)
                    : '';

                  // 1. SUBMITTED ROWS (REVEALED TACTILE 3D TILES)
                  if (row.type === 'submitted') {
                    const status = row.evaluations[colIndex];

                    let tileTheme = `${activeTheme.absentTile} ${lipClass}`;

                    if (status === 'correct') {
                      tileTheme = `bg-gradient-to-b from-emerald-400 via-emerald-500 to-teal-600 border-t-2 border-emerald-200/90 ${lipClass} border-b-emerald-950 text-white shadow-lg shadow-emerald-950/60`;
                    } else if (status === 'present') {
                      tileTheme = `bg-gradient-to-b from-amber-300 via-amber-400 to-amber-600 border-t-2 border-amber-100/90 ${lipClass} border-b-amber-950 text-slate-950 shadow-lg shadow-amber-950/60`;
                    }

                    return (
                      <div
                        key={`${rowIndex}-${colIndex}`}
                        style={{
                          ...tileStyle,
                          animationDelay: row.isAnimating
                            ? `${colIndex * 110}ms`
                            : row.isWinningRow
                            ? `${colIndex * 75}ms`
                            : '0ms'
                        }}
                        className={`${radiusClass} shrink-0 flex items-center justify-center font-black uppercase leading-none transition-all ${fontClass} ${
                          row.isAnimating ? 'animate-tile-flip' : ''
                        } ${row.isWinningRow ? 'animate-win-wave' : ''} ${tileTheme}`}
                      >
                        <span className="drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]">
                          {letter}
                        </span>
                      </div>
                    );
                  }

                  // 2. CURRENT ACTIVE INPUT ROW
                  if (row.type === 'current') {
                    const hasChar = Boolean(letter);
                    const ghostHintChar = !hasChar ? revealedPositions[colIndex] : null;
                    return (
                      <div
                        key={`curr-${colIndex}`}
                        style={tileStyle}
                        className={`${radiusClass} shrink-0 flex items-center justify-center font-black uppercase leading-none transition-all duration-100 ${fontClass} ${
                          hasChar
                            ? `${activeTheme.typingTile} ${lipClass} animate-tile-pop`
                            : ghostHintChar
                            ? 'bg-cyan-950/55 border border-cyan-400/55 border-b-2 border-b-cyan-950 text-cyan-300/65 shadow-inner ring-1 ring-cyan-400/20'
                            : `${activeTheme.currentEmptyTile} shadow-inner`
                        }`}
                      >
                        {hasChar ? (
                          <span className="drop-shadow-sm">{letter}</span>
                        ) : ghostHintChar ? (
                          <span className="drop-shadow-[0_0_6px_rgba(34,211,238,0.5)]">
                            {ghostHintChar}
                          </span>
                        ) : (
                          <span className={`w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full ${activeTheme.emptyDot}`} />
                        )}
                      </div>
                    );
                  }

                  // 3. EMPTY FUTURE ROWS
                  return (
                    <div
                      key={`empty-${colIndex}`}
                      style={tileStyle}
                      className={`${radiusClass} shrink-0 ${activeTheme.futureEmptyTile} flex items-center justify-center shadow-inner`}
                    >
                      <span className={`w-1 h-1 rounded-full ${activeTheme.emptyDot} opacity-60`} />
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
