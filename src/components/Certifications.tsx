import React from 'react';
import Section from './Section';
import { useTheme } from '@/contexts/ThemeContext';

interface AwsCert {
  group: 'h1' | 'h2';
  name: string;
  badge: string;
}

const AWS_CERTS: AwsCert[] = [
  {
    group: 'h1',
    name: 'AWS Certified Cloud Practitioner',
    badge:
      'https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/certification/approved/images/certification-badges/450x520_lower.e350c871a65d19488fef315cfaca86f701109fa7.png',
  },
  {
    group: 'h1',
    name: 'AWS Certified AI Practitioner',
    badge:
      'https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/certification/approved/images/certification-badges/1268_AWS_Cert_Template_badges_AI-Practitioner.2e9f2b3a6265fb0a07584f3ac1359a436f9480ee.png',
  },
  {
    group: 'h2',
    name: 'AWS Certified Solutions Architect — Associate',
    badge:
      'https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/certification/approved/images/certification-badges/1268_AWS_Cert_Template_badges_Solutions-Architect-Associate.d7837980db184b2e2950bafc91527bb86af37aef.png',
  },
  {
    group: 'h2',
    name: 'AWS Certified Solutions Architect — Professional',
    badge:
      'https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/certification/approved/images/certification-badges/1268_AWS_Cert_Template_badges_Solutions-Architect-Professional.26daf33cfe042eb7fd9e4a763bcde2b81526541f.png',
  },
];

interface CertCardProps {
  name: string;
  badge: string;
  statusLabel: string;
}

const CertCard: React.FC<CertCardProps> = ({ name, badge, statusLabel }) => (
  <div
    data-reveal
    className="reveal group border border-neutral-200 bg-white p-6 md:p-7 relative overflow-hidden"
  >
    <div className="shimmer absolute top-0 inset-x-0 h-[2px]" />
    <div className="flex items-start gap-5">
      <div className="shrink-0 w-[72px] h-[84px] flex items-center justify-center">
        <img
          src={badge}
          alt={name}
          loading="lazy"
          className="w-full h-full object-contain"
          style={{ filter: 'grayscale(1) opacity(0.55)' }}
        />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-2">
          <span className="inline-flex items-center gap-1.5 text-[10px] font-mono-editorial uppercase tracking-[0.15em] text-neutral-500 border border-neutral-300 px-2 py-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
            {statusLabel}
          </span>
        </div>
        <div
          className="font-serif-editorial text-[17px] leading-[1.3] text-neutral-900 mb-3"
          style={{ fontWeight: 500 }}
        >
          {name}
        </div>
        <div className="h-px bg-neutral-200 overflow-hidden relative">
          <div className="shimmer h-full bg-neutral-300" style={{ width: '40%' }} />
        </div>
      </div>
    </div>
  </div>
);

const Certifications: React.FC = () => {
  const { t } = useTheme();
  const h1 = AWS_CERTS.filter((c) => c.group === 'h1');
  const h2 = AWS_CERTS.filter((c) => c.group === 'h2');

  return (
    <Section id="certifications" num="08" title={t('certs.title')}>
      <div
        data-reveal
        className="reveal text-[13px] text-neutral-500 mb-10 -mt-6 uppercase tracking-[0.15em] font-mono-editorial"
      >
        {t('certs.kicker')}
      </div>

      <div className="space-y-12">
        <div>
          <div
            data-reveal
            className="reveal font-serif-editorial text-[22px] italic text-neutral-500 mb-5"
            style={{ fontWeight: 300 }}
          >
            {t('certs.h1')}
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {h1.map((c, i) => (
              <CertCard
                key={i}
                name={c.name}
                badge={c.badge}
                statusLabel={t('certs.status')}
              />
            ))}
          </div>
        </div>

        <div>
          <div
            data-reveal
            className="reveal font-serif-editorial text-[22px] italic text-neutral-500 mb-5"
            style={{ fontWeight: 300 }}
          >
            {t('certs.h2')}
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {h2.map((c, i) => (
              <CertCard
                key={i}
                name={c.name}
                badge={c.badge}
                statusLabel={t('certs.status')}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Certifications;
