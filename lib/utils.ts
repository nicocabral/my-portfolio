/**
 * Get the correct asset path for both development and production (GitHub Pages)
 */
export function getAssetPath(path: string): string {
  const basePath = process.env.NODE_ENV === 'production' ? '/my-portfolio' : '';
  return `${basePath}${path}`;
}

/**
 * Get the base URL for the site
 */
export function getBaseUrl(): string {
  return process.env.NODE_ENV === 'production' 
    ? 'https://nicocabral.github.io/my-portfolio'
    : 'http://localhost:3000';
}
