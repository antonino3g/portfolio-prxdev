import type { Lang } from './types';

const CV_PT = 'Antonino%20Junior%20-%20CV%20BR.pdf';
const CV_INTL = 'Antonino%20Junior%20-%20RESUME.pdf';

/**
 * Nome do arquivo de currículo (percent-encoded), conforme o idioma.
 * pt-BR baixa o CV em português; en e es baixam o RESUME.
 * Quem consome concatena com a base do Vite via `src/lib/asset.ts`.
 */
export function cvFileName(lang: Lang): string {
  return lang === 'pt' ? CV_PT : CV_INTL;
}
