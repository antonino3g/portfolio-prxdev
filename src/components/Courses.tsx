import React from 'react';
import Section from './Section';
import { useTheme } from '@/contexts/ThemeContext';

interface Course {
  title: string;
  company: string;
  logo: string;
  credential: string;
  bg: string;
}

const COURSES: Course[] = [
  {
    title: 'Orchestrator for RPA Developers',
    company: 'UiPath',
    logo: 'https://media.licdn.com/dms/image/v2/D4D0BAQEoLEGmmZUTsg/company-logo_100_100/B4DZfP43PmHMAU-/0/1751539479900/uipath_logo?e=1778716800&v=beta&t=S_OERkLElc0R3380joOvBQBGpfP15pd3_0X0AtnpX9I',
    credential: 'https://drive.google.com/file/d/1osYSnGg7Hq5ZYKkGy3Zf2OAFc2WBQqFL/view',
    bg: '#FA4616',
  },
  {
    title: 'SQL Completo',
    company: 'Softblue Cursos Online',
    logo: 'https://media.licdn.com/dms/image/v2/C560BAQH2SCLWHoKbGA/company-logo_100_100/company-logo_100_100/0/1631356886281?e=1778716800&v=beta&t=FxMOZN5ZlYHwV62tUlYRWIIIwmuX3CzWbvLXmSGXTPs',
    credential: 'https://drive.google.com/file/d/1kHr9AtvtHIvDep6EAzrv_FVtNFDeQbC2/view',
    bg: '#ffffff',
  },
  {
    title: 'NDG Linux Unhatched',
    company: 'Cisco Networking Academy',
    logo: 'https://media.licdn.com/dms/image/v2/D4D0BAQEkiQ8pB1hYow/company-logo_100_100/B4DZcSgOD1HMAU-/0/1748362125886/cisco_networking_academy1_logo?e=1778716800&v=beta&t=7THyINlHEA1YdhNfHZWXlfMXEOwBfgYmBeaVjJqbi-A',
    credential: 'https://drive.google.com/file/d/1C4dl_6RIOsHGwaNMFXU_fEUisJcFHV_x/view',
    bg: '#1B2433',
  },
  {
    title: 'Quality Assurance: plano de testes e gestão de bugs',
    company: 'Alura Para Empresas',
    logo: 'https://media.licdn.com/dms/image/v2/D4D0BAQF7AtCyAR1YQA/company-logo_100_100/company-logo_100_100/0/1692726688927/alura_para_empresas_logo?e=1778716800&v=beta&t=CzVeVWdYEIm3FuGFBuXVcXF9_xWpv66CAUsQqBJYXAg',
    credential: 'https://cursos.alura.com.br/certificate/antonino-fernandes/quality-assurance-plano-testes-gestao-bugs?lang=pt_BR',
    bg: '#2E2F4B',
  },
  {
    title: 'Git e Github: estratégias de ramificação, conflitos e Pull Requests',
    company: 'Alura',
    logo: 'https://media.licdn.com/dms/image/v2/D4D0BAQEN_LdkNNYsIg/company-logo_100_100/B4DZrX2SOqGgAQ-/0/1764557923720/aluracursos_logo?e=1778716800&v=beta&t=A98GuypG2_W6d-fOYAG9Efjsu0FlxBtAoOzjdcCru2g',
    credential: 'https://cursos.alura.com.br/certificate/f10563ff-78aa-462f-a960-93ee3f831b4a',
    bg: '#0F1626',
  },
  {
    title: 'MasterClass Flutter',
    company: 'Flutterando',
    logo: 'https://media.licdn.com/dms/image/v2/D4D0BAQFp2yFbUqsx8A/company-logo_100_100/company-logo_100_100/0/1719255379725/theflutterando_logo?e=1778716800&v=beta&t=4K_WopGXXLAHWvoEQclaZT8-vr_DRvY-V4XckE8uhvc',
    credential: 'https://drive.google.com/file/d/1Jpx_5w_cfwQb2DUuveAd48XJbGD6hJzX/view',
    bg: '#02569B',
  },
  {
    title: 'Flutter Essencial',
    company: 'Udemy',
    logo: 'https://media.licdn.com/dms/image/v2/D560BAQEf_NHzN2yVQg/company-logo_100_100/company-logo_100_100/0/1723593046388/udemy_logo?e=1778716800&v=beta&t=Wte4_HQVb9n3d0NvpAdipMfVj75b3cIec66JWC1aK24',
    credential: 'https://www.udemy.com/certificate/UC-8dd132ef-ed53-4afe-9723-f9c82b017ba3/',
    bg: '#A435F0',
  },
];

const Courses: React.FC = () => {
  const { t } = useTheme();
  return (
    <Section id="courses" num="07" title={t('courses.title')}>
      <div data-reveal className="reveal text-[13px] text-neutral-500 mb-8 -mt-6 max-w-md">
        {t('courses.kicker')}
      </div>
      <div className="divide-y divide-neutral-200 border-t border-neutral-200">
        {COURSES.map((c, i) => (
          <div
            key={i}
            data-reveal
            className="reveal grid md:grid-cols-[64px_1fr_auto] gap-4 md:gap-6 py-6 items-center"
          >
            <div
              className="w-14 h-14 rounded-md overflow-hidden border border-neutral-200 flex items-center justify-center shrink-0"
              style={{ background: c.bg }}
            >
              <img
                src={c.logo}
                alt={c.company}
                loading="lazy"
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
            <div className="min-w-0">
              <div
                className="font-serif-editorial text-[18px] md:text-[19px] leading-[1.25] text-neutral-900 mb-0.5"
                style={{ fontWeight: 500 }}
              >
                {c.title}
              </div>
              <div className="text-[13px] text-neutral-500">{c.company}</div>
            </div>
            <a
              href={c.credential}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-[12px] text-neutral-900 px-4 py-2 border border-neutral-300 rounded-full hover:border-neutral-900 hover:bg-neutral-900 hover:text-white transition-all duration-300 shrink-0"
            >
              {t('courses.view')}
              <span>↗</span>
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Courses;
