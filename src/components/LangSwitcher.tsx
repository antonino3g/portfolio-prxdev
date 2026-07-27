import type { JSX } from 'react';
import { useI18n } from '../i18n';
import type { Lang } from '../i18n';

interface LangOption {
  code: Lang;
  label: string;
}

const OPTIONS: LangOption[] = [
  { code: 'pt', label: 'Português (Brasil)' },
  { code: 'en', label: 'English (United States)' },
  { code: 'es', label: 'Español (España)' },
];

function Flag({ code }: { code: Lang }): JSX.Element {
  if (code === 'pt') {
    return (
      <svg className="flag" viewBox="0 0 28 20" aria-hidden="true">
        <rect width="28" height="20" fill="#009c3b" />
        <path d="M14 3.2 24.4 10 14 16.8 3.6 10Z" fill="#ffdf00" />
        <circle cx="14" cy="10" r="3.7" fill="#002776" />
      </svg>
    );
  }
  if (code === 'en') {
    return (
      <svg className="flag" viewBox="0 0 28 20" aria-hidden="true">
        <rect width="28" height="20" fill="#fff" />
        <g fill="#b22234">
          <rect width="28" height="1.54" />
          <rect y="3.08" width="28" height="1.54" />
          <rect y="6.15" width="28" height="1.54" />
          <rect y="9.23" width="28" height="1.54" />
          <rect y="12.31" width="28" height="1.54" />
          <rect y="15.38" width="28" height="1.54" />
          <rect y="18.46" width="28" height="1.54" />
        </g>
        <rect width="11.2" height="10.77" fill="#3c3b6e" />
      </svg>
    );
  }
  return (
    <svg className="flag" viewBox="0 0 28 20" aria-hidden="true">
      <rect width="28" height="20" fill="#c60b1e" />
      <rect y="5" width="28" height="10" fill="#ffc400" />
    </svg>
  );
}

export function LangSwitcher(): JSX.Element {
  const { lang, setLang } = useI18n();

  return (
    <div className="lang" role="group" aria-label="Idioma">
      {OPTIONS.map((option) => (
        <button
          key={option.code}
          type="button"
          data-lang={option.code}
          aria-pressed={option.code === lang ? 'true' : 'false'}
          aria-label={option.label}
          onClick={() => setLang(option.code)}
        >
          <Flag code={option.code} />
          <span>{option.code.toUpperCase()}</span>
        </button>
      ))}
    </div>
  );
}
