import type { JSX } from 'react';
import { asset } from '../lib/asset';
import { useI18n } from '../i18n';

/** Cursos são fixos, iguais nos 3 idiomas (protótipo, linhas 1091–1098). */
const COURSES = [
  { title: 'Building with the Claude API', by: 'Anthropic' },
  { title: 'Claude Code', by: 'Anthropic' },
  { title: 'AI Fluency: Framework & Foundations', by: 'Anthropic' },
  { title: 'Java Full Stack Developer', by: 'Sonda' },
  { title: 'Flutter MasterClass', by: 'Flutterando' },
  { title: 'Quality Assurance: Test Plan e Bug Management', by: 'Alura' },
  { title: 'Git e GitHub: Branching, Conflitos e Pull Requests', by: 'Alura' },
  { title: 'Linux Unhatched', by: 'Cisco Networking Academy' },
] as const;

export function Education(): JSX.Element {
  const { t } = useI18n();

  return (
    <section className="sec" id="formacao">
      <div className="wrap">
        <div className="sec-head">
          <span className="sec-num">04</span>
          <h2>{t('sec.formacao')}</h2>
        </div>

        <div className="three">
          <div>
            <p className="mini-head">{t('form.academica')}</p>
            <div className="lines">
              <div className="line">
                <span className="t">{t('form.pos')}</span>
                <span className="by">Instituto Brasileiro de Formação — IBF</span>
              </div>
              <div className="line">
                <span className="t">{t('form.grad')}</span>
                <span className="by">Instituto Federal de Roraima — IFRR</span>
              </div>
            </div>
          </div>

          <div>
            <p className="mini-head">{t('form.certificacoes')}</p>
            <div className="lines">
              <a
                className="line cert"
                href="https://catalog-education.oracle.com/ords/certview/sharebadge?id=0A145D9EBD79DFCB643A36DF9132BE6D2A51D09F70A91E1B5716A6C89CEB2CBE"
                target="_blank"
                rel="noopener"
              >
                <img className="cert-badge" src={asset('assets/oracle-oci-architect-associate.png')} alt={t('cert.arch.alt')} />
                <span>
                  <span className="t">Oracle Cloud Infrastructure Certified Architect Associate</span>
                  <span className="by">
                    Oracle Certified <span aria-hidden="true">↗</span>
                  </span>
                </span>
              </a>
              <a
                className="line cert"
                href="https://catalog-education.oracle.com/ords/certview/sharebadge?id=D1A9D0E6D1BEC5ED670BCB4EEC9981D922657D1843343D7D750B4384E12310B5"
                target="_blank"
                rel="noopener"
              >
                <img className="cert-badge" src={asset('assets/oracle-oci-foundations-associate.png')} alt={t('cert.found.alt')} />
                <span>
                  <span className="t">Oracle Cloud Infrastructure Certified Foundations Associate</span>
                  <span className="by">
                    Oracle Certified <span aria-hidden="true">↗</span>
                  </span>
                </span>
              </a>
            </div>
          </div>

          <div>
            <p className="mini-head">{t('form.cursos')}</p>
            <div className="lines">
              {COURSES.map((course) => (
                <div className="line" key={course.title}>
                  <span className="t">{course.title}</span>
                  <span className="by">{course.by}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
