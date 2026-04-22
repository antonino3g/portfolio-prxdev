import React from 'react';
import Section from './Section';
import { useTheme } from '@/contexts/ThemeContext';

const EXP = [
  { prefix: 'experience.gloss', achievements: 4 },
  { prefix: 'experience.mid', achievements: 3 },
  { prefix: 'experience.java', achievements: 2 },
  { prefix: 'experience.sondaManager', achievements: 3 },
  { prefix: 'experience.sondaDev', achievements: 3 },
  { prefix: 'experience.flutterPr', achievements: 1 },
];

const Experience: React.FC = () => {
  const { t } = useTheme();
  return (
    <Section id="experience" num="05" title={t('experience.title')}>
      <div className="divide-y divide-neutral-200 border-t border-neutral-200">
        {EXP.map((e, i) => (
          <article
            key={i}
            data-reveal
            className="reveal grid md:grid-cols-[180px_1fr] gap-4 md:gap-10 py-10"
          >
            <div>
              <div className="text-[12px] font-mono-editorial text-neutral-400 tracking-[0.15em] uppercase">
                {t(`${e.prefix}.period`)}
              </div>
              <div className="text-[12px] text-neutral-500 mt-2">
                {t(`${e.prefix}.location`)}
              </div>
            </div>
            <div>
              <h3
                className="font-serif-editorial text-[24px] md:text-[28px] leading-[1.2] text-neutral-900 mb-1"
                style={{ fontWeight: 400 }}
              >
                {t(`${e.prefix}.position`)}
              </h3>
              <div className="font-serif-editorial text-[17px] italic text-neutral-500 mb-5">
                {t(`${e.prefix}.company`)}
              </div>
              <p className="text-[14px] leading-[1.65] text-neutral-600 mb-6 max-w-[680px]">
                {t(`${e.prefix}.description`)}
              </p>
              <div className="text-[11px] uppercase tracking-[0.15em] text-neutral-500 mb-3">
                {t('experience.achievements')}
              </div>
              <ul className="space-y-2 max-w-[680px]">
                {Array.from({ length: e.achievements }).map((_, j) => (
                  <li
                    key={j}
                    className="text-[14px] leading-[1.6] text-neutral-700 flex gap-3"
                  >
                    <span className="text-neutral-400 shrink-0">—</span>
                    <span>{t(`${e.prefix}.a${j + 1}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
