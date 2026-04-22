import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@/contexts/ThemeContext';

/**
 * "Under construction" page — blueprint compass animation.
 * Inherits language from the ThemeContext automatically.
 */
const EmConstrucao: React.FC = () => {
  const { t } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#fafaf9] flex flex-col">
      <header className="border-b border-neutral-200">
        <div className="max-w-[1100px] mx-auto px-6 md:px-10 h-[60px] flex items-center justify-between">
          <Link
            to="/"
            className="font-serif-editorial text-[17px] tracking-tight text-neutral-900"
            style={{ fontWeight: 500 }}
          >
            Antonino Junior<span className="text-neutral-400">.</span>
          </Link>
          <Link
            to="/"
            className="text-[12px] text-neutral-500 hover:text-neutral-900 transition-colors tracking-wide inline-flex items-center gap-2"
          >
            <span>←</span>
            {t('underConstruction.back')}
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-6 py-20">
        <div
          className={`text-center max-w-xl transition-all duration-1000 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {/* Blueprint / compass animation */}
          <div className="relative w-[220px] h-[220px] mx-auto mb-12">
            <div className="absolute inset-0 blueprint-spin">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <circle
                  cx="100"
                  cy="100"
                  r="96"
                  fill="none"
                  stroke="#171717"
                  strokeWidth="0.5"
                  strokeDasharray="2 4"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="70"
                  fill="none"
                  stroke="#171717"
                  strokeWidth="0.5"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="44"
                  fill="none"
                  stroke="#171717"
                  strokeWidth="0.5"
                  strokeDasharray="1 3"
                />
                <line x1="100" y1="4" x2="100" y2="196" stroke="#171717" strokeWidth="0.5" />
                <line x1="4" y1="100" x2="196" y2="100" stroke="#171717" strokeWidth="0.5" />
                <line x1="30" y1="30" x2="170" y2="170" stroke="#171717" strokeWidth="0.3" />
                <line x1="170" y1="30" x2="30" y2="170" stroke="#171717" strokeWidth="0.3" />
              </svg>
            </div>
            <div className="absolute inset-0 overflow-hidden">
              <div className="blueprint-scan absolute inset-x-0 h-[2px] bg-neutral-900/30" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-neutral-900" />
            </div>
          </div>

          <div className="text-[11px] font-mono-editorial tracking-[0.2em] uppercase text-neutral-500 mb-6">
            · · ·
          </div>
          <h1
            className="font-serif-editorial text-[44px] md:text-[56px] leading-[1.05] tracking-[-0.02em] text-neutral-900 mb-6"
            style={{ fontWeight: 400 }}
          >
            {t('underConstruction.title')}
          </h1>
          <p className="text-[15px] text-neutral-600 leading-[1.6] mb-10">
            {t('underConstruction.subtitle')}
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-3 px-5 py-3 text-[13px] border border-neutral-900 bg-neutral-900 text-white hover:bg-white hover:text-neutral-900 transition-colors"
          >
            <span>←</span>
            {t('underConstruction.back')}
          </Link>
        </div>
      </main>

      <footer className="border-t border-neutral-200 py-6">
        <div className="max-w-[1100px] mx-auto px-6 md:px-10 text-[11px] text-neutral-400 tracking-wide text-center">
          {t('footer.rights')}
        </div>
      </footer>
    </div>
  );
};

export default EmConstrucao;
