import React from 'react';
import Section from './Section';
import { useTheme } from '@/contexts/ThemeContext';

const Education: React.FC = () => {
  const { t } = useTheme();
  const items = [{ prefix: 'education.ifrr' }, { prefix: 'education.ibf' }];
  return (
    <Section id="education" num="06" title={t('education.title')}>
      <div className="divide-y divide-neutral-200 border-t border-neutral-200">
        {items.map((e, i) => (
          <div
            key={i}
            data-reveal
            className="reveal grid md:grid-cols-[180px_1fr] gap-4 md:gap-10 py-8"
          >
            <div className="text-[12px] font-mono-editorial text-neutral-400 tracking-[0.15em]">
              {t(`${e.prefix}.period`)}
            </div>
            <div>
              <div
                className="font-serif-editorial text-[22px] text-neutral-900 mb-1"
                style={{ fontWeight: 400 }}
              >
                {t(`${e.prefix}.institution`)}
              </div>
              <div className="text-[14px] text-neutral-600 mb-0.5">
                {t(`${e.prefix}.degree`)}
              </div>
              <div className="text-[13px] italic font-serif-editorial text-neutral-500">
                {t(`${e.prefix}.field`)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Education;
