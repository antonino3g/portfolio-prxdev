import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import profileImg from '@/assets/profile_about.jpg';

const Hero: React.FC = () => {
  const { t } = useTheme();

  return (
    <section id="top" className="pt-24 md:pt-32 pb-24 md:pb-32">
      <div className="max-w-[1100px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-[1.4fr_1fr] gap-10 md:gap-20 items-start">
          {/* LEFT — editorial */}
          <div>
            <div data-reveal className="reveal">
              <div className="text-[11px] tracking-[0.2em] uppercase text-neutral-500 mb-8">
                {t('hero.kicker')}
              </div>
            </div>

            <h1
              data-reveal
              className="reveal font-serif-editorial leading-[0.95] tracking-[-0.025em] mb-8 text-[56px] md:text-[88px] text-neutral-900"
              style={{ fontWeight: 400 }}
            >
              {t('hero.name')}
            </h1>

            <div data-reveal className="reveal">
              <div className="h-px w-16 bg-neutral-900 mb-7" />
              <p
                className="font-serif-editorial text-[22px] md:text-[26px] leading-[1.35] text-neutral-800 mb-3"
                style={{ fontWeight: 400 }}
              >
                {t('hero.title')}
              </p>
              <p className="text-[14px] text-neutral-500 tracking-wide mb-10">
                {t('hero.subtitle')}
              </p>
              <p className="text-[13px] text-neutral-500 mb-10 flex items-center gap-2">
                <span className="inline-block w-1 h-1 rounded-full bg-neutral-400" />
                {t('hero.location')}
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href={t('hero.cv-url')}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 px-5 py-3 text-[13px] border border-neutral-900 bg-neutral-900 text-white hover:bg-white hover:text-neutral-900 transition-colors"
                >
                  {t('hero.download-cv')}
                  <span>→</span>
                </a>
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById('projects');
                    if (!el) return;
                    const y =
                      el.getBoundingClientRect().top + window.scrollY - 48;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-3 px-5 py-3 text-[13px] border border-neutral-300 text-neutral-900 hover:border-neutral-900 transition-colors"
                >
                  {t('hero.view-projects')}
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT — portrait */}
          <div data-reveal className="reveal md:pt-6">
            <figure className="relative">
              <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100">
                <img
                  src={profileImg}
                  alt="Antonino Junior"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ objectPosition: '28% 75%' }}
                />
              </div>
              <figcaption className="mt-3 flex items-center justify-between text-[11px] text-neutral-400">
                <span>Antonino Junior</span>
                <span>Plate I</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
