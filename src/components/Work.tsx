import { useCallback, useRef, useState, type JSX, type KeyboardEvent } from 'react';
import { asset } from '../lib/asset';
import { useI18n } from '../i18n';
import { ProjectCard } from './ProjectCard';

type TabId = 'projetos' | 'conquistas';

const TAB_ORDER: readonly TabId[] = ['projetos', 'conquistas'];

export function Work(): JSX.Element {
  const { t, html } = useI18n();
  const [active, setActive] = useState<TabId>('projetos');
  const tabRefs = useRef<Record<TabId, HTMLButtonElement | null>>({ projetos: null, conquistas: null });

  const selectTab = useCallback((id: TabId, focus: boolean) => {
    setActive(id);
    if (focus) {
      tabRefs.current[id]?.focus();
    }
  }, []);

  const onTabKeyDown = useCallback(
    (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
      const { key } = event;
      if (key !== 'ArrowRight' && key !== 'ArrowLeft' && key !== 'Home' && key !== 'End') {
        return;
      }
      event.preventDefault();
      const next =
        key === 'Home'
          ? 0
          : key === 'End'
            ? TAB_ORDER.length - 1
            : key === 'ArrowRight'
              ? (index + 1) % TAB_ORDER.length
              : (index - 1 + TAB_ORDER.length) % TAB_ORDER.length;
      selectTab(TAB_ORDER[next], true);
    },
    [selectTab],
  );

  return (
    <section className="sec" id="projetos">
      <div className="wrap">
        <div className="sec-head has-tabs">
          <span className="sec-num">02</span>
          <h2>{t('sec.trabalho')}</h2>
        </div>

        <div className="tabs" role="tablist" aria-label="Projetos e conquistas">
          <button
            className="tab"
            role="tab"
            id="tab-projetos"
            aria-controls="panel-projetos"
            aria-selected={active === 'projetos'}
            tabIndex={active === 'projetos' ? 0 : -1}
            ref={(el) => {
              tabRefs.current.projetos = el;
            }}
            onClick={() => selectTab('projetos', false)}
            onKeyDown={(event) => onTabKeyDown(event, 0)}
          >
            {t('tab.projetos')}
          </button>
          <button
            className="tab"
            role="tab"
            id="tab-conquistas"
            aria-controls="panel-conquistas"
            aria-selected={active === 'conquistas'}
            tabIndex={active === 'conquistas' ? 0 : -1}
            ref={(el) => {
              tabRefs.current.conquistas = el;
            }}
            onClick={() => selectTab('conquistas', false)}
            onKeyDown={(event) => onTabKeyDown(event, 1)}
          >
            {t('tab.conquistas')}
          </button>
        </div>

        <div
          className="tabpanel"
          id="panel-projetos"
          role="tabpanel"
          aria-labelledby="tab-projetos"
          hidden={active !== 'projetos'}
        >
          <div className="proj-grid">
            <ProjectCard
              media={{
                kind: 'video',
                src: asset('assets/mapa-de-saloes.mp4'),
                ariaLabel: 'Demonstração da plataforma Mapa de Salões',
              }}
              chipLabel="Gloss Express"
              title="Mapa de Salões"
              description={{ text: t('proj.mapa') }}
              tech="Node.js · PostgreSQL · ReactJS/Next.js · AWS"
              pmeta={
                <>
                  <span className="badge badge-success">
                    <span className="badge-dot" aria-hidden="true"></span>
                    <span>{t('badge.live')}</span>
                  </span>
                  <a className="link" href="https://www.mapadesaloes.com.br" target="_blank" rel="noopener">
                    mapadesaloes.com.br ↗
                  </a>
                </>
              }
            />

            <ProjectCard
              media={{
                kind: 'video',
                src: asset('assets/checkout.mp4'),
                ariaLabel: 'Demonstração do checkout proprietário',
              }}
              chipLabel="Gloss Express"
              title={t('proj.checkout.t')}
              description={{ text: t('proj.checkout') }}
              tech="Node.js · PostgreSQL · Next.js/React · AWS · Redis · BullMQ · REST API · Webhooks · Gateway de pagamento · Pix/Cartão"
              pmeta={
                <>
                  <span className="badge badge-success">
                    <span className="badge-dot" aria-hidden="true"></span>
                    <span>{t('badge.live')}</span>
                  </span>
                  <span className="badge">
                    <span className="badge-dot" aria-hidden="true"></span>
                    <span>{t('badge.internal')}</span>
                  </span>
                </>
              }
            />

            <ProjectCard
              media={{
                kind: 'video',
                src: asset('assets/portal-postal.mp4'),
                ariaLabel: 'Demonstração do sistema Portal Postal',
              }}
              chipLabel="SCC4"
              title="Portal Postal"
              description={{ text: t('proj.postal') }}
              tech="Java · JUnit · MySQL · Hibernate · Angular 4 · Angular 19 · Angular Material · Jest · AWS"
              pmeta={
                <>
                  <span className="badge badge-success">
                    <span className="badge-dot" aria-hidden="true"></span>
                    <span>{t('badge.live')}</span>
                  </span>
                  <span className="badge">
                    <span className="badge-dot" aria-hidden="true"></span>
                    <span>{t('badge.internal')}</span>
                  </span>
                </>
              }
            />

            <ProjectCard
              media={{
                kind: 'video-portrait',
                src: asset('assets/site-fotografia.mp4'),
                ariaLabel: 'Demonstração do site de fotografia',
              }}
              chipLabel="Freelancer"
              title={t('proj.foto.t')}
              description={{ text: t('proj.foto') }}
              tech="ReactJS/Vite · TypeScript · Vitest · CSS · S3 · Vercel"
              pmeta={
                <>
                  <span className="badge badge-success">
                    <span className="badge-dot" aria-hidden="true"></span>
                    <span>{t('badge.live')}</span>
                  </span>
                  <a className="link" href="https://www.danieoliveira.com.br/" target="_blank" rel="noopener">
                    danieoliveira.com.br ↗
                  </a>
                </>
              }
            />

            <ProjectCard
              media={{
                kind: 'img-portrait',
                src: asset('assets/portal-coletas-app.png'),
                alt: t('proj.coletas.alt'),
              }}
              chipLabel="SCC4"
              title="Portal Postal Coletas App"
              description={{ text: t('proj.coletas') }}
              pmeta={
                <>
                  <span className="badge badge-success">
                    <span className="badge-dot" aria-hidden="true"></span>
                    <span>{t('badge.store')}</span>
                  </span>
                  <a
                    className="link"
                    href="https://play.google.com/store/apps/details?id=com.portalpostal.coletas&hl=pt-BR"
                    target="_blank"
                    rel="noopener"
                  >
                    Google Play ↗
                  </a>
                </>
              }
            />

            <ProjectCard
              media={{
                kind: 'img-portrait',
                src: asset('assets/portal-postal-app.png'),
                alt: t('proj.postalapp.alt'),
              }}
              chipLabel="SCC4"
              title="Portal Postal App"
              description={{ html: html('proj.postalapp') }}
              tech="Ionic 4 · Angular 7 · Cordova · Android"
              pmeta={
                <>
                  <span className="badge badge-success">
                    <span className="badge-dot" aria-hidden="true"></span>
                    <span>{t('badge.store')}</span>
                  </span>
                  <a
                    className="link"
                    href="https://play.google.com/store/apps/details?id=br.com.scc4.newest.portalpostalcliente&hl=pt-BR"
                    target="_blank"
                    rel="noopener"
                  >
                    Google Play ↗
                  </a>
                </>
              }
            />
          </div>
        </div>

        <div
          className="tabpanel"
          id="panel-conquistas"
          role="tabpanel"
          aria-labelledby="tab-conquistas"
          hidden={active !== 'conquistas'}
        >
          <div className="proj-grid">
            <ProjectCard
              media={{
                kind: 'img',
                src: asset('assets/podcast-gloss.png'),
                alt: t('conq.podcast.alt'),
              }}
              chipLabel="Gloss Express"
              title={t('conq.podcast.t')}
              description={{ text: t('conq.podcast') }}
              pmeta={
                <a className="link" href="https://www.youtube.com/watch?v=4Yn7mH7Zv6I" target="_blank" rel="noopener">
                  <span>{t('conq.podcast.link')}</span> ↗
                </a>
              }
            />

            <ProjectCard
              media={{
                kind: 'img-portrait',
                src: asset('assets/instrutor-sonda.png'),
                alt: t('conq.instrutor.alt'),
              }}
              chipLabel="Sonda"
              title={t('conq.instrutor.t')}
              description={{ text: t('conq.instrutor') }}
              pmeta={
                <span className="badge">
                  <span className="badge-dot" aria-hidden="true"></span>
                  <span>{t('conq.instrutor.badge')}</span>
                </span>
              }
            />

            <ProjectCard
              media={{
                kind: 'img',
                src: asset('assets/premio-inovacao.png'),
                alt: t('conq.premio.alt'),
                style: { objectPosition: 'center 38%' },
              }}
              chipLabel="Sonda"
              title={t('conq.premio.t')}
              description={{ text: t('conq.premio') }}
              pmeta={
                <>
                  <span className="badge badge-accent">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="9" r="6" />
                      <path d="m8.5 14-1.5 7 5-3 5 3-1.5-7" />
                    </svg>
                    <span>{t('conq.premio.badge')}</span>
                  </span>
                  <a
                    className="link"
                    href="https://npi.tjrr.jus.br/index.php/premio-inovacao/2023-2-edicao"
                    target="_blank"
                    rel="noopener"
                  >
                    <span>{t('conq.premio.link')}</span> ↗
                  </a>
                </>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}
