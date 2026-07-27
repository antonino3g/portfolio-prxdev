import { useEffect, type RefObject } from 'react';
import { useReducedMotion } from './useReducedMotion';

/** Porta do trecho de autoplay do protótipo (linhas 1120–1131): vídeo da capa
 * toca silenciosamente, mas quem pediu menos movimento recebe o vídeo
 * pausado no 1º quadro. Autoplay bloqueado pelo navegador não pode quebrar
 * a página — por isso o `.catch(() => {})`. */
export function useAutoplayVideo(ref: RefObject<HTMLVideoElement | null>): void {
  const reduce = useReducedMotion();

  useEffect(() => {
    const video = ref.current;
    if (!video) {
      return undefined;
    }

    if (reduce) {
      video.removeAttribute('autoplay');
      const pauseOnLoad = (): void => {
        try {
          video.pause();
        } catch {
          // Pausar pode falhar dependendo do estado do vídeo — sem impacto.
        }
      };
      video.addEventListener('loadeddata', pauseOnLoad);
      return () => video.removeEventListener('loadeddata', pauseOnLoad);
    }

    const playPromise = video.play();
    if (playPromise && typeof playPromise.catch === 'function') {
      playPromise.catch(() => {});
    }
    return undefined;
  }, [ref, reduce]);
}
