import type { JSX } from 'react';
import { useI18n } from '../i18n';

export function Footer(): JSX.Element {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="wrap">
      <div className="foot">
        <span>
          © <span id="ano">{year}</span> Antonino Junior
        </span>
        <a href="#topo">{t('foot.topo')}</a>
      </div>
    </footer>
  );
}
