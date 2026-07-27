import { useRef, type CSSProperties, type JSX, type ReactNode } from 'react';
import { useAutoplayVideo } from '../hooks/useAutoplayVideo';

/** Anatomia da capa (`.pcover`) reaproveitada por Projetos e Conquistas:
 * mídia normal (vídeo ou imagem) ou capa vertical `.pcover-portrait`, que
 * duplica a mídia em uma cópia `.pcover-bg` desfocada (fundo) e uma
 * `.pcover-fg` contida (frente). */
export type ProjectCardMedia =
  | { kind: 'video'; src: string; ariaLabel: string }
  | { kind: 'video-portrait'; src: string; ariaLabel: string }
  | { kind: 'img'; src: string; alt: string; style?: CSSProperties }
  | { kind: 'img-portrait'; src: string; alt: string };

export type ProjectCardDescription = { text: ReactNode } | { html: { __html: string } };

export interface ProjectCardProps {
  media: ProjectCardMedia;
  chipLabel: string;
  title: ReactNode;
  description: ProjectCardDescription;
  /** `.ptech` — string fixa de tecnologias, quando o card tiver essa linha. */
  tech?: string;
  /** Conteúdo de `.pmeta` — badges (`.badge`) e links (`.link`), na ordem do protótipo. */
  pmeta: ReactNode;
}

export function ProjectCard({ media, chipLabel, title, description, tech, pmeta }: ProjectCardProps): JSX.Element {
  // Sempre declarados, ainda que o card use imagens: os hooks internamente
  // não fazem nada quando o ref não aponta para um <video>.
  const fgVideoRef = useRef<HTMLVideoElement>(null);
  const bgVideoRef = useRef<HTMLVideoElement>(null);
  useAutoplayVideo(fgVideoRef);
  useAutoplayVideo(bgVideoRef);

  const isPortrait = media.kind === 'video-portrait' || media.kind === 'img-portrait';

  return (
    <article className="pcard">
      <div className={isPortrait ? 'pcover pcover-portrait' : 'pcover'}>
        {media.kind === 'video' && (
          <video
            ref={fgVideoRef}
            src={media.src}
            muted
            loop
            playsInline
            autoPlay
            preload="metadata"
            aria-label={media.ariaLabel}
          />
        )}

        {media.kind === 'video-portrait' && (
          <>
            <video
              ref={bgVideoRef}
              className="pcover-bg"
              src={media.src}
              muted
              loop
              playsInline
              autoPlay
              preload="metadata"
              aria-hidden="true"
            />
            <video
              ref={fgVideoRef}
              className="pcover-fg"
              src={media.src}
              muted
              loop
              playsInline
              autoPlay
              preload="metadata"
              aria-label={media.ariaLabel}
            />
          </>
        )}

        {media.kind === 'img' && <img src={media.src} alt={media.alt} style={media.style} />}

        {media.kind === 'img-portrait' && (
          <>
            <img className="pcover-bg" src={media.src} alt="" aria-hidden="true" />
            <img className="pcover-fg" src={media.src} alt={media.alt} />
          </>
        )}

        <span className="pcover-chip">
          <span className="badge-dot" aria-hidden="true"></span>
          {chipLabel}
        </span>
      </div>
      <div className="pbody">
        <h3>{title}</h3>
        {'html' in description ? (
          <p className="desc" dangerouslySetInnerHTML={description.html} />
        ) : (
          <p className="desc">{description.text}</p>
        )}
        {tech && <p className="ptech">{tech}</p>}
        <div className="pmeta">{pmeta}</div>
      </div>
    </article>
  );
}
