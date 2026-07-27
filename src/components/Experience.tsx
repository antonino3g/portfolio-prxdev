import { useRef, type JSX } from 'react';
import { useI18n, type TranslationKey } from '../i18n';
import { useRailProgress } from '../hooks/useRailProgress';

type LocalizedField = { key: TranslationKey } | { text: string };

interface Stop {
  id: string;
  isNow?: boolean;
  periodKey: TranslationKey;
  role: string;
  org: LocalizedField;
  descKey: TranslationKey;
  stack: LocalizedField;
}

/** Paradas do roadmap (protótipo, linhas 947–1033), na ordem original. */
const STOPS: readonly Stop[] = [
  {
    id: 'xp-gloss-express',
    isNow: true,
    periodKey: 'xp.gloss.p',
    role: 'Senior Software Engineer',
    org: { text: 'Gloss Express · Florianópolis, SC' },
    descKey: 'xp.gloss.d',
    stack: {
      text: 'Node.js (Express.js, Nest.js) · ReactJS/Next.js · BullMQ · AWS (ECS, Lambda, Amplify, SES, S3, RDS) · OCI · Docker · Nginx · Komodo · Terraform · CI/CD (GitHub Actions, Vercel) · Observability (OpenTelemetry, Prometheus, Grafana)',
    },
  },
  {
    id: 'xp-scc4',
    periodKey: 'xp.scc4.p',
    role: 'Mid-Level Java Full Stack Developer',
    org: { text: 'SCC4 · Florianópolis, SC' },
    descKey: 'xp.scc4.d',
    stack: { text: 'Java · Java Swing · Spring Boot · Hibernate · MySQL · Angular · JSP · Flutter · Ionic · Android · JasperReports' },
  },
  {
    id: 'xp-toolsdata',
    periodKey: 'xp.tools.p',
    role: 'Mid-Level Java Backend Developer',
    org: { key: 'xp.tools.org' },
    descKey: 'xp.tools.d',
    stack: { text: 'Java 17 · Jakarta EE · Hibernate · RabbitMQ · Redis · JUnit · OpenAPI' },
  },
  {
    id: 'xp-sonda-rpa',
    periodKey: 'xp.sondarpa.p',
    role: 'RPA Projects and Implementations Manager',
    org: { text: 'Sonda · Boa Vista, RR' },
    descKey: 'xp.sondarpa.d',
    stack: { key: 'xp.sondarpa.stack' },
  },
  {
    id: 'xp-sonda-fullstack',
    periodKey: 'xp.sondajava.p',
    role: 'Java Full Stack Developer',
    org: { text: 'Sonda · Boa Vista, RR' },
    descKey: 'xp.sondajava.d',
    stack: { text: 'Java · JPA · Hibernate · JSP · JSF · PrimeFaces · PostgreSQL · Maven · Node.js/Express · UiPath' },
  },
  {
    id: 'xp-brain-xcode',
    periodKey: 'xp.brain.p',
    role: 'Flutter Developer',
    org: { key: 'xp.brain.org' },
    descKey: 'xp.brain.d',
    stack: { text: 'Flutter · Dart · Clean Architecture · SOLID · Mockito · Bloc/Cubit' },
  },
  {
    id: 'xp-suporte',
    periodKey: 'xp.suporte.p',
    role: 'IT Support Analyst',
    org: { text: 'Sonda · Boa Vista, RR' },
    descKey: 'xp.suporte.d',
    stack: { key: 'xp.suporte.stack' },
  },
  {
    id: 'xp-prefeitura',
    periodKey: 'xp.pref.p',
    role: 'Systems Analyst',
    org: { key: 'xp.pref.org' },
    descKey: 'xp.pref.d',
    stack: { key: 'xp.pref.stack' },
  },
];

export function Experience(): JSX.Element {
  const { t } = useI18n();
  const railRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLSpanElement>(null);
  useRailProgress(railRef, fillRef);

  return (
    <section className="sec" id="experiencias">
      <div className="wrap">
        <div className="sec-head">
          <span className="sec-num">03</span>
          <h2>{t('sec.experiencias')}</h2>
        </div>

        <div className="rail" ref={railRef}>
          <div className="rail-track" aria-hidden="true">
            <span className="rail-fill" ref={fillRef}></span>
          </div>

          {STOPS.map((stop) => (
            <article className={stop.isNow ? 'stop xp-now' : 'stop'} key={stop.id}>
              <span className="stop-dot" aria-hidden="true"></span>
              <div className="stop-head">
                <p className="stop-period">{t(stop.periodKey)}</p>
                <h3 className="stop-role">{stop.role}</h3>
                <p className="stop-org">{'key' in stop.org ? t(stop.org.key) : stop.org.text}</p>
              </div>
              <p className="stop-desc">{t(stop.descKey)}</p>
              <p className="stop-stack">{'key' in stop.stack ? t(stop.stack.key) : stop.stack.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
