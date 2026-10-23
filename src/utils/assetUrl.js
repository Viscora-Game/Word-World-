/**
 * Resolves static assets correctly across different environments
 * (local dev, Vite relative base './', GitHub Pages subpath '/Word-World-/').
 */
export const getAssetUrl = (path) => {
  if (!path) return '';
  // If it's already an absolute external URL or data URI, return as-is
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  const clean = path.startsWith('/') ? path.slice(1) : path;
  const base = import.meta.env.BASE_URL || './';
  const prefix = base.endsWith('/') ? base : `${base}/`;
  return `${prefix}${clean}`;
};
