import React from 'react';
import Section from './Section';
import { useTheme } from '@/contexts/ThemeContext';

interface SkillGroup {
  labelKey: string;
  items: string[];
}

const SKILLS_GROUPS: SkillGroup[] = [
  {
    labelKey: 'skills.backend',
    items: ['Java', 'Spring Boot', 'Jakarta EE', 'Hibernate', 'Node.js', 'Express', 'Python'],
  },
  {
    labelKey: 'skills.frontend',
    items: ['React', 'Next.js', 'Angular', 'TypeScript', 'Tailwind CSS', 'Flutter'],
  },
  {
    labelKey: 'skills.data',
    items: ['PostgreSQL', 'MySQL', 'Redis', 'RabbitMQ'],
  },
  {
    labelKey: 'skills.infra',
    items: ['AWS (EC2, Lambda, RDS, Amplify)', 'Linux', 'Docker', 'GitHub Actions', 'WildFly/JBoss'],
  },
  {
    labelKey: 'skills.practices',
    items: ['Clean Architecture', 'SOLID', 'DDD', 'TDD / JUnit', 'Scrum', 'Kanban'],
  },
];

const Skills: React.FC = () => {
  const { t } = useTheme();
  return (
    <Section id="skills" num="02" title={t('skills.title')}>
      <div className="divide-y divide-neutral-200">
        {SKILLS_GROUPS.map((g, i) => (
          <div
            key={i}
            data-reveal
            className="reveal grid md:grid-cols-[180px_1fr] gap-4 md:gap-10 py-6"
          >
            <div className="text-[13px] uppercase tracking-[0.15em] text-neutral-500 pt-[3px]">
              {t(g.labelKey)}
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {g.items.map((s, j) => (
                <span
                  key={j}
                  className="font-serif-editorial text-[18px] text-neutral-900"
                  style={{ fontWeight: 400 }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
