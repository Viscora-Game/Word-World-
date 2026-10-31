// Turkish-aware uppercase, lowercase, ASCII folding, and letter comparison utilities

export const toUpperTR = (str = '') => {
  if (!str) return '';
  return str
    .replace(/i/g, 'İ')
    .replace(/ı/g, 'I')
    .toLocaleUpperCase('tr-TR');
};

export const toLowerTR = (str = '') => {
  if (!str) return '';
  return str
    .replace(/İ/g, 'i')
    .replace(/I/g, 'ı')
    .toLocaleLowerCase('tr-TR');
};

const TR_TO_ASCII_MAP = {
  Ç: 'C',
  ç: 'C',
  Ğ: 'G',
  ğ: 'G',
  İ: 'I',
  ı: 'I',
  Ö: 'O',
  ö: 'O',
  Ş: 'S',
  ş: 'S',
  Ü: 'U',
  ü: 'U'
};

export const toAsciiUpper = (str = '') => {
  if (!str) return '';
  return str
    .split('')
    .map((ch) => TR_TO_ASCII_MAP[ch] || ch)
    .join('')
    .toUpperCase();
};

export const normalizeLetter = (letter = '', lang = 'tr') => {
  if (!letter) return '';
  if (lang === 'tr') {
    return toUpperTR(letter);
  }
  return toAsciiUpper(letter);
};

/**
 * Checks if two letters match in Turkish or international context.
 * In Turkish mode, treats exact matches as true, and provides forgiving
 * match between 'I' and 'İ' so desktop/mobile keyboard quirks never block players.
 */
export const areLettersEquivalent = (charA = '', charB = '', lang = 'tr') => {
  if (!charA || !charB) return false;
  if (charA === charB) return true;
  if (lang === 'tr') {
    if ((charA === 'İ' && charB === 'I') || (charA === 'I' && charB === 'İ')) {
      return true;
    }
  }
  return false;
};
