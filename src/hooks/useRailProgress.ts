import { useEffect, type RefObject } from 'react';
import { useReducedMotion } from './useReducedMotion';

/** Porta fiel do roadmap de Experiências (linhas 1380–1412 do protótipo): a
 * linha do trilho preenche ao rolar e os dots acendem. Manipula o DOM direto
 * dentro do `requestAnimationFrame` — nada disso vira estado React, pois
 * re-renderizar a 60fps seria desperdício. */
export function useRailProgress(
  railRef: RefObject<HTMLDivElement | null>,
  fillRef: RefObject<HTMLSpanElement | null>,
): void {
  const reduce = useReducedMotion();

  useEffect(() => {
    const railEl = railRef.current;
    if (!railEl) {
      return undefined;
    }
    const fill = fillRef.current;
    const stops = Array.prototype.slice.call(railEl.querySelectorAll('.stop')) as HTMLElement[];

    if (reduce) {
      if (fill) {
        fill.style.height = '100%';
      }
      stops.forEach((stop) => stop.classList.add('is-active'));
      return undefined;
    }

    let ticking = false;

    const update = (): void => {
      ticking = false;
      const rect = railEl.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      let progress = (vh * 0.82 - rect.top) / rect.height;
      progress = Math.max(0, Math.min(1, progress));
      if (fill) {
        fill.style.height = `${(progress * 100).toFixed(2)}%`;
      }
      const fillY = rect.top + progress * rect.height;
      stops.forEach((stop) => {
        const dot = stop.querySelector('.stop-dot');
        if (!dot) {
          return;
        }
        const d = dot.getBoundingClientRect();
        stop.classList.toggle('is-active', d.top + d.height / 2 <= fillY + 2);
      });
    };

    const onScroll = (): void => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    update();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [railRef, fillRef, reduce]);
}
