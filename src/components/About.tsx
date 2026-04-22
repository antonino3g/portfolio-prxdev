import React from 'react';
import Section from './Section';
import { useTheme } from '@/contexts/ThemeContext';

const About: React.FC = () => {
  const { t } = useTheme();
  return (
    <Section id="about" num="01" title={t('about.title')}>
      <div
        data-reveal
        className="reveal font-serif-editorial text-[19px] md:text-[21px] leading-[1.65] text-neutral-800 max-w-[720px]"
        style={{ fontWeight: 400 }}
      >
        <p className="mb-6">{t('about.p1')}</p>
        <p className="text-neutral-600">{t('about.p2')}</p>
      </div>
    </Section>
  );
};

export default About;
