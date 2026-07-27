import type { JSX } from 'react';
import { useI18n } from '../i18n';

/** Valores técnicos são fixos e iguais nos 3 idiomas (protótipo, linhas 748–753). */
const ROWS = [
  { key: 'stack.k1', value: 'Java · TypeScript · Python · JavaScript · GoLang · Dart · SQL' },
  {
    key: 'stack.k2',
    value:
      'Spring Boot · Jakarta EE · Node.js · Nest.js · Express · Hibernate/JPA · REST APIs · Web Services · SOAP · RabbitMQ · BullMQ · WebSocket · OpenAPI',
  },
  { key: 'stack.k3', value: 'Angular · React · Flutter · Next.js · Ionic · React Native · Kotlin · JSP · JSF · PrimeFaces' },
  {
    key: 'stack.k4',
    value: 'PostgreSQL · AWS · Docker · MySQL · Redis · OCI · Nginx · Terraform · CI/CD · OpenTelemetry · Prometheus · Grafana',
  },
  {
    key: 'stack.k5',
    value: 'RAG · LLM Integration · UiPath · pgvector · Embeddings · Semantic Search · Vector Databases · Selenium · Pandas',
  },
  {
    key: 'stack.k6',
    value: 'Microservices · TDD · Technical Leadership · Event-Driven Architecture · Jest · Vitest · JUnit · Scrum · Kanban',
  },
] as const;

export function Stack(): JSX.Element {
  const { t } = useI18n();

  return (
    <section className="sec" id="stack">
      <div className="wrap">
        <div className="sec-head">
          <span className="sec-num">01</span>
          <h2>{t('sec.stack')}</h2>
        </div>

        <div className="about">
          <div className="panel">
            {ROWS.map((row) => (
              <div className="panel-row" key={row.key}>
                <span className="k">{t(row.key)}</span>
                <span className="v">{row.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
