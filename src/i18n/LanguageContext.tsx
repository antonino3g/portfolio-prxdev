import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type JSX,
  type ReactNode,
} from 'react';
import type { Dictionary, Lang, TranslationKey } from './types';
import { pt } from './pt';
import { en } from './en';
import { es } from './es';

const DICTS: Record<Lang, Dictionary> = { pt, en, es };

const LANG_TAG: Record<Lang, string> = { pt: 'pt-BR', en: 'en', es: 'es' };

const STORE_KEY = 'aj-lang';

const VALID_LANGS: readonly Lang[] = ['pt', 'en', 'es'];

function isValidLang(value: unknown): value is Lang {
  return typeof value === 'string' && (VALID_LANGS as readonly string[]).includes(value);
}

function readStoredLang(): Lang {
  try {
    const stored = window.localStorage.getItem(STORE_KEY);
    if (isValidLang(stored)) {
      return stored;
    }
  } catch {
    // localStorage pode lançar em modo privado — ignora e usa o padrão.
  }
  return 'pt';
}

interface I18nContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: TranslationKey) => string;
  html: (key: TranslationKey) => { __html: string };
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }): JSX.Element {
  const [lang, setLangState] = useState<Lang>(() => readStoredLang());

  useEffect(() => {
    document.documentElement.setAttribute('lang', LANG_TAG[lang] ?? LANG_TAG.pt);
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORE_KEY, next);
    } catch {
      // localStorage pode lançar em modo privado — a troca de idioma
      // segue funcionando em memória, só não persiste.
    }
  }, []);

  const t = useCallback(
    (key: TranslationKey): string => {
      const dict = DICTS[lang];
      return dict[key] ?? pt[key];
    },
    [lang],
  );

  const html = useCallback(
    (key: TranslationKey): { __html: string } => ({ __html: t(key) }),
    [t],
  );

  const value = useMemo<I18nContextValue>(
    () => ({ lang, setLang, t, html }),
    [lang, setLang, t, html],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error('useI18n deve ser usado dentro de um LanguageProvider');
  }
  return ctx;
}
