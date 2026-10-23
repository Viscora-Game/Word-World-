import { normalizeLetter, areLettersEquivalent } from './turkishUpper';

export function evaluateGuess(guess, targetWord, lang = 'tr') {
  const guessLetters = guess.split('').map((c) => normalizeLetter(c, lang));
  const targetLetters = targetWord.split('').map((c) => normalizeLetter(c, lang));
  const length = targetLetters.length;

  const result = new Array(length).fill('absent');
  const targetCounts = {};

  // Count available letters in target
  for (let i = 0; i < length; i++) {
    const char = targetLetters[i];
    targetCounts[char] = (targetCounts[char] || 0) + 1;
  }

  // Pass 1: Mark exact matches ('correct')
  for (let i = 0; i < length; i++) {
    if (guessLetters[i] === targetLetters[i]) {
      result[i] = 'correct';
      targetCounts[guessLetters[i]]--;
    }
  }

  // Pass 1.5: Tolerant match for Turkish 'I' vs 'İ' (physical keyboard CapsLock / layout differences)
  if (lang === 'tr') {
    for (let i = 0; i < length; i++) {
      if (result[i] === 'correct') continue;
      const g = guessLetters[i];
      const t = targetLetters[i];
      if (areLettersEquivalent(g, t, 'tr')) {
        if (targetCounts[t] && targetCounts[t] > 0) {
          result[i] = 'correct';
          targetCounts[t]--;
        }
      }
    }
  }

  // Pass 2: Mark misplaced letters ('present')
  for (let i = 0; i < length; i++) {
    if (result[i] === 'correct') continue;
    const char = guessLetters[i];
    if (targetCounts[char] && targetCounts[char] > 0) {
      result[i] = 'present';
      targetCounts[char]--;
    } else if (lang === 'tr') {
      const altChar = char === 'İ' ? 'I' : char === 'I' ? 'İ' : null;
      if (altChar && targetCounts[altChar] && targetCounts[altChar] > 0) {
        result[i] = 'present';
        targetCounts[altChar]--;
      }
    }
  }

  return result;
}
