import React from 'react';
import { Link } from 'react-router-dom';
import Section from './Section';
import { useTheme } from '@/contexts/ThemeContext';

type GlyphKind = 'map' | 'card' | 'grid' | 'bot';

interface Project {
  titleKey: string;
  descKey: string;
  company: string;
  year: string;
  stack: string[];
  tint: string;
  accent: string;
  glyph: GlyphKind;
  href: string;
}

const PROJECTS: Project[] = [
  {
    titleKey: 'projects.mapa.title',
    descKey: 'projects.mapa.desc',
    company: 'Gloss Express',
    year: '2025',
    stack: ['Next.js', 'Node.js', 'PostgreSQL', 'AWS'],
    tint: '#1c1917',
    accent: '#ec4899',
    glyph: 'map',
    href: '/em-construcao',
  },
  {
    titleKey: 'projects.checkout.title',
    descKey: 'projects.checkout.desc',
    company: 'Gloss Express',
    year: '2025',
    stack: ['Node.js', 'React', 'PostgreSQL', 'Redis'],
    tint: '#0c4a6e',
    accent: '#38bdf8',
    glyph: 'card',
    href: '/em-construcao',
  },
  {
    titleKey: 'projects.sig.title',
    descKey: 'projects.sig.desc',
    company: 'Gloss Express',
    year: '2025',
    stack: ['Node.js', 'React', 'PostgreSQL'],
    tint: '#312e81',
    accent: '#a78bfa',
    glyph: 'grid',
    href: '/em-construcao',
  },
  {
    titleKey: 'projects.rpa.title',
    descKey: 'projects.rpa.desc',
    company: 'SONDA',
    year: '2023',
    stack: ['Java', 'UiPath', 'PostgreSQL'],
    tint: '#134e4a',
    accent: '#5eead4',
    glyph: 'bot',
    href: '/em-construcao',
  },
];

const ProjectGlyph: React.FC<{ kind: GlyphKind }> = ({ kind }) => {
  const common = {
    width: 44,
    height: 44,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.2,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };
  switch (kind) {
    case 'map':
      return (
        <svg {...common}>
          <path d="M3 6l6-3 6 3 6-3v15l-6 3-6-3-6 3z" />
          <path d="M9 3v15M15 6v15" />
        </svg>
      );
    case 'card':
      return (
        <svg {...common}>
          <rect x="3" y="6" width="18" height="12" rx="2" />
          <path d="M3 10h18M7 15h3" />
        </svg>
      );
    case 'grid':
      return (
        <svg {...common}>
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
        </svg>
      );
    case 'bot':
      return (
        <svg {...common}>
          <rect x="4" y="8" width="16" height="12" rx="2" />
          <path d="M12 4v4M9 14h.01M15 14h.01M8 20v1M16 20v1" />
        </svg>
      );
  }
};

const Projects: React.FC = () => {
  const { t } = useTheme();
  return (
    <Section id="projects" num="04" title={t('projects.title')}>
      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        {PROJECTS.map((p, i) => (
          <Link
            key={i}
            to={p.href}
            data-reveal
            className="reveal group block border border-neutral-200 bg-white hover:border-neutral-900 transition-colors duration-500"
          >
            <div
              className="relative aspect-[16/9] overflow-hidden"
              style={{ background: p.tint }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background: `radial-gradient(circle at 25% 30%, ${p.accent}33, transparent 55%), radial-gradient(circle at 80% 80%, rgba(0,0,0,0.4), transparent 60%)`,
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center text-white/80 transition-transform duration-700 group-hover:scale-110">
                <ProjectGlyph kind={p.glyph} />
              </div>
              <div className="absolute bottom-3 left-3 text-[10px] font-mono-editorial text-white/70 tracking-[0.15em] uppercase">
                {p.company} · {p.year}
              </div>
              <div className="absolute bottom-3 right-3 text-[10px] font-mono-editorial text-white/70">
                #{String(i + 1).padStart(2, '0')}
              </div>
            </div>

            <div className="p-6 md:p-7">
              <h3
                className="font-serif-editorial text-[22px] md:text-[24px] leading-[1.2] text-neutral-900 mb-3"
                style={{ fontWeight: 400 }}
              >
                {t(p.titleKey)}
              </h3>
              <p className="text-[13.5px] leading-[1.65] text-neutral-600 mb-5 min-h-[60px]">
                {t(p.descKey)}
              </p>
              <div className="flex items-center justify-between pt-5 border-t border-neutral-100">
                <div className="flex flex-wrap gap-x-3 gap-y-1">
                  {p.stack.map((s, j) => (
                    <span
                      key={j}
                      className="text-[10.5px] font-mono-editorial text-neutral-500 uppercase tracking-wider"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <span className="text-neutral-300 group-hover:text-neutral-900 group-hover:translate-x-1 transition-all duration-300 text-lg">
                  →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
