/** Resolve um caminho de `public/` respeitando a base do Vite (GitHub Pages). */
export function asset(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
}
