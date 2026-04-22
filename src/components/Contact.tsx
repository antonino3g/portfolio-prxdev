import React from 'react';
import Section from './Section';
import { useTheme } from '@/contexts/ThemeContext';

const Contact: React.FC = () => {
  const { t } = useTheme();
  return (
    <Section id="contact" num="09" title={t('contact.title')}>
      <div
        data-reveal
        className="reveal grid md:grid-cols-2 gap-10 md:gap-16"
      >
        <div>
          <p
            className="font-serif-editorial text-[22px] md:text-[26px] leading-[1.4] text-neutral-800 mb-8"
            style={{ fontWeight: 400 }}
          >
            {t('contact.kicker')}
          </p>
          <a
            href={`mailto:${t('contact.emailValue')}`}
            className="inline-flex items-center gap-3 px-5 py-3 text-[13px] border border-neutral-900 bg-neutral-900 text-white hover:bg-white hover:text-neutral-900 transition-colors"
          >
            {t('contact.cta')}
            <span>→</span>
          </a>
        </div>
        <div className="space-y-6">
          <div>
            <div className="text-[11px] uppercase tracking-[0.15em] text-neutral-500 mb-2">
              {t('contact.email')}
            </div>
            <a
              href={`mailto:${t('contact.emailValue')}`}
              className="font-serif-editorial text-[20px] text-neutral-900 border-b border-neutral-200 hover:border-neutral-900 transition-colors"
              style={{ fontWeight: 400 }}
            >
              {t('contact.emailValue')}
            </a>
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-[0.15em] text-neutral-500 mb-2">
              {t('contact.location')}
            </div>
            <div
              className="font-serif-editorial text-[20px] text-neutral-900"
              style={{ fontWeight: 400 }}
            >
              {t('contact.locationValue')}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
