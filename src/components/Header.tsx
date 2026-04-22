import React, { useEffect, useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

const NAV_LINKS = [
  { k: 'nav.about', href: 'about' },
  { k: 'nav.skills', href: 'skills' },
  { k: 'nav.highlights', href: 'highlights' },
  { k: 'nav.projects', href: 'projects' },
  { k: 'nav.experience', href: 'experience' },
  { k: 'nav.courses', href: 'courses' },
  { k: 'nav.contact', href: 'contact' },
];

const Header: React.FC = () => {
  const { t, language, toggleLanguage } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 48;
    window.scrollTo({ top: y, behavior: 'smooth' });
    window.setTimeout(() => {
      el.classList.remove('section-bloom');
      void el.offsetWidth;
      el.classList.add('section-bloom');
    }, 420);
  };

  const handleHome = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`topbar-glass fixed top-0 inset-x-0 z-40 border-b transition-colors ${
        scrolled ? 'border-neutral-200' : 'border-transparent'
      }`}
    >
      <div className="max-w-[1100px] mx-auto px-6 md:px-10 h-[60px] flex items-center justify-between">
        <a
          href="#top"
          onClick={handleHome}
          className="font-serif-editorial text-[17px] tracking-tight text-neutral-900"
          style={{ fontWeight: 500 }}
        >
          Antonino Junior<span className="text-neutral-400">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((l) => (
            <a
              key={l.k}
              href={`#${l.href}`}
              onClick={(e) => handleNav(e, l.href)}
              className="text-[12.5px] text-neutral-600 hover:text-neutral-900 transition-colors tracking-wide"
            >
              {t(l.k)}
            </a>
          ))}
        </nav>

        <button
          onClick={toggleLanguage}
          className="inline-flex items-center gap-2 text-[11px] font-mono-editorial tracking-[0.1em] uppercase text-neutral-500 hover:text-neutral-900 transition-colors px-3 py-1.5 border border-neutral-200 hover:border-neutral-900"
          aria-label="Toggle language"
        >
          <span className={language === 'pt-br' ? 'text-neutral-900' : ''}>
            PT
          </span>
          <span className="text-neutral-300">/</span>
          <span className={language === 'en-us' ? 'text-neutral-900' : ''}>
            EN
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
