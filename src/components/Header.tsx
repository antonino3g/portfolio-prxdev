import { useEffect, useState, type JSX } from 'react';
import { useI18n } from '../i18n';
import { LangSwitcher } from './LangSwitcher';

const SECTION_IDS = ['stack', 'projetos', 'experiencias', 'formacao'] as const;

export function Header(): JSX.Element {
  const { t } = useI18n();
  const [current, setCurrent] = useState<string | null>(null);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      return;
    }

    const visible: Record<string, boolean> = {};

    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visible[entry.target.id] = entry.isIntersecting;
        });
        let next: string | null = null;
        SECTION_IDS.forEach((id) => {
          if (visible[id] && !next) {
            next = id;
          }
        });
        setCurrent(next);
      },
      { rootMargin: '-72px 0px -58% 0px', threshold: 0 },
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        spy.observe(el);
      }
    });

    return () => {
      spy.disconnect();
    };
  }, []);

  return (
    <header className="top">
      <div className="wrap top-in">
        <a className="mark" href="#topo">
          Antonino Junior
        </a>
        <LangSwitcher />
        <nav aria-label="Seções">
          <ul>
            <li>
              <a
                className="navlink"
                href="#stack"
                aria-current={current === 'stack' ? 'true' : undefined}
              >
                {t('nav.stack')}
              </a>
            </li>
            <li>
              <a
                className="navlink"
                href="#projetos"
                aria-current={current === 'projetos' ? 'true' : undefined}
              >
                {t('nav.projetos')}
              </a>
            </li>
            <li>
              <a
                className="navlink"
                href="#experiencias"
                aria-current={current === 'experiencias' ? 'true' : undefined}
              >
                {t('nav.experiencias')}
              </a>
            </li>
            <li>
              <a
                className="navlink"
                href="#formacao"
                aria-current={current === 'formacao' ? 'true' : undefined}
              >
                {t('nav.formacao')}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
