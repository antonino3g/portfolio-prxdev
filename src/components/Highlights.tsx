import React, { useEffect, useRef, useState } from 'react';
import Section from './Section';
import { useTheme } from '@/contexts/ThemeContext';

type GlyphKind = 'award' | 'globe' | 'book' | 'mic';

interface Highlight {
  id: string;
  titleKey: string;
  descKey: string;
  tagKey: string;
  year: string;
  url: string;
  tint: string;
  glyph: GlyphKind;
}

const HIGHLIGHTS: Highlight[] = [
  {
    id: 'awards',
    titleKey: 'highlights.awards.title',
    descKey: 'highlights.awards.description',
    tagKey: 'highlights.awards.tag',
    year: '2023',
    url: '#',
    tint: '#1e3a8a',
    glyph: 'award',
  },
  {
    id: 'lisbon',
    titleKey: 'highlights.lisbon.title',
    descKey: 'highlights.lisbon.description',
    tagKey: 'highlights.lisbon.tag',
    year: '2023',
    url: '#',
    tint: '#7c2d12',
    glyph: 'globe',
  },
  {
    id: 'teaching',
    titleKey: 'highlights.teaching.title',
    descKey: 'highlights.teaching.description',
    tagKey: 'highlights.teaching.tag',
    year: '2024',
    url: '#',
    tint: '#065f46',
    glyph: 'book',
  },
  {
    id: 'podcast',
    titleKey: 'highlights.podcast.title',
    descKey: 'highlights.podcast.description',
    tagKey: 'highlights.podcast.tag',
    year: '2025',
    url: '#',
    tint: '#713f12',
    glyph: 'mic',
  },
];

const HighlightGlyph: React.FC<{ kind: GlyphKind }> = ({ kind }) => {
  const common = {
    width: 56,
    height: 56,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.2,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };
  switch (kind) {
    case 'award':
      return (
        <svg {...common}>
          <circle cx="12" cy="9" r="5" />
          <path d="M8.5 13.5L7 21l5-3 5 3-1.5-7.5" />
        </svg>
      );
    case 'globe':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18" />
        </svg>
      );
    case 'book':
      return (
        <svg {...common}>
          <path d="M4 5a2 2 0 012-2h12v16H6a2 2 0 00-2 2V5z" />
          <path d="M4 5v14" />
        </svg>
      );
    case 'mic':
      return (
        <svg {...common}>
          <rect x="9" y="3" width="6" height="12" rx="3" />
          <path d="M5 11a7 7 0 0014 0M12 18v3M8 21h8" />
        </svg>
      );
  }
};

const Highlights: React.FC = () => {
  const { t } = useTheme();
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [idx, setIdx] = useState(0);

  const scrollToCard = (i: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.children[i] as HTMLElement | undefined;
    if (!card) return;
    el.scrollTo({ left: card.offsetLeft - 16, behavior: 'smooth' });
    setIdx(i);
  };

  const next = () => scrollToCard(Math.min(idx + 1, HIGHLIGHTS.length - 1));
  const prev = () => scrollToCard(Math.max(idx - 1, 0));

  // Drag to scroll
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    let isDown = false;
    let startX = 0;
    let startScroll = 0;
    let moved = false;

    const onDown = (e: MouseEvent) => {
      isDown = true;
      moved = false;
      startX = e.pageX;
      startScroll = el.scrollLeft;
      el.style.cursor = 'grabbing';
    };
    const onMove = (e: MouseEvent) => {
      if (!isDown) return;
      const dx = e.pageX - startX;
      if (Math.abs(dx) > 3) moved = true;
      el.scrollLeft = startScroll - dx;
    };
    const onUp = () => {
      isDown = false;
      el.style.cursor = 'grab';
    };
    const onClick = (e: MouseEvent) => {
      if (moved) {
        e.preventDefault();
        e.stopPropagation();
      }
    };
    el.addEventListener('mousedown', onDown);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    el.addEventListener('click', onClick, true);
    return () => {
      el.removeEventListener('mousedown', onDown);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
      el.removeEventListener('click', onClick, true);
    };
  }, []);

  // Sync active index with scroll
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    let raf: number | null = null;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = null;
        const children = Array.from(el.children) as HTMLElement[];
        const center = el.scrollLeft + el.clientWidth / 2;
        let best = 0;
        let bestDist = Infinity;
        children.forEach((c, i) => {
          const mid = c.offsetLeft + c.clientWidth / 2;
          const d = Math.abs(mid - center);
          if (d < bestDist) {
            bestDist = d;
            best = i;
          }
        });
        setIdx(best);
      });
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Section id="highlights" num="03" title={t('highlights.title')}>
      <div
        data-reveal
        className="reveal flex items-end justify-between mb-10 -mt-6 gap-6"
      >
        <p className="text-[13px] text-neutral-500 max-w-md">
          {t('highlights.kicker')}
        </p>
        <div className="hidden md:flex items-center gap-2 shrink-0">
          <button
            onClick={prev}
            aria-label={t('highlights.prev')}
            disabled={idx === 0}
            className="w-10 h-10 border border-neutral-300 hover:border-neutral-900 text-neutral-900 disabled:opacity-30 disabled:hover:border-neutral-300 transition-all duration-300"
          >
            ←
          </button>
          <button
            onClick={next}
            aria-label={t('highlights.next')}
            disabled={idx === HIGHLIGHTS.length - 1}
            className="w-10 h-10 border border-neutral-300 hover:border-neutral-900 text-neutral-900 disabled:opacity-30 disabled:hover:border-neutral-300 transition-all duration-300"
          >
            →
          </button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 -mx-6 md:-mx-10 px-6 md:px-10 hl-scroller"
        style={{ cursor: 'grab', scrollbarWidth: 'thin', scrollBehavior: 'smooth' }}
      >
        {HIGHLIGHTS.map((h, i) => {
          const active = i === idx;
          return (
            <article
              key={h.id}
              data-reveal
              className="reveal snap-start shrink-0 w-[86%] md:w-[520px] group transition-all duration-700"
              style={{
                opacity: active ? 1 : 0.55,
                transform: `scale(${active ? 1 : 0.97})`,
                transformOrigin: 'center bottom',
              }}
            >
              <div
                className="relative aspect-[4/3] overflow-hidden"
                style={{ background: h.tint }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.18), transparent 55%), radial-gradient(circle at 80% 85%, rgba(0,0,0,0.35), transparent 60%)`,
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center text-white/85">
                  <HighlightGlyph kind={h.glyph} />
                </div>
                <span className="absolute top-3 left-3 text-[11px] font-mono-editorial text-white/80">
                  {h.year}
                </span>
                <span className="absolute top-3 right-3 text-[10px] font-mono-editorial text-white/80 tracking-[0.15em] uppercase">
                  {t(h.tagKey)}
                </span>
                <span className="absolute bottom-3 left-3 text-[10px] font-mono-editorial text-white/60 tracking-[0.15em] uppercase">
                  Plate {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              <div className="pt-6">
                <h3
                  className="font-serif-editorial text-[24px] md:text-[28px] leading-[1.2] text-neutral-900 mb-3"
                  style={{ fontWeight: 400 }}
                >
                  {t(h.titleKey)}
                </h3>
                <p className="text-[14px] leading-[1.65] text-neutral-600 mb-5">
                  {t(h.descKey)}
                </p>
                <a
                  href={h.url}
                  className="inline-flex items-center gap-2 text-[12px] text-neutral-900 border-b border-neutral-900 pb-0.5 hover:gap-3 transition-all"
                >
                  {t('highlights.readMore')}
                  <span>↗</span>
                </a>
              </div>
            </article>
          );
        })}
      </div>

      <div className="flex items-center gap-2 mt-2">
        {HIGHLIGHTS.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToCard(i)}
            className={`h-px transition-all duration-500 ${
              i === idx
                ? 'w-10 bg-neutral-900'
                : 'w-6 bg-neutral-300 hover:bg-neutral-500'
            }`}
            aria-label={`Go to ${i + 1}`}
          />
        ))}
      </div>
    </Section>
  );
};

export default Highlights;
