
import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Experience = () => {
  const { t } = useTheme();

  const experiences = [
    {
      position: t('experience.senior.position'),
      company: t('experience.senior.company'),
      location: t('experience.senior.location'),
      period: t('experience.senior.period'),
      description: t('experience.senior.description'),
      achievements: [
        'Reduziu tempo de build em 40% implementando CI/CD com Docker',
        'Liderou equipe de 5 desenvolvedores em projeto crítico',
        'Implementou testes automatizados aumentando cobertura para 90%'
      ]
    },
    {
      position: 'Desenvolvedor Java Full Stack',
      company: 'Inovação Digital',
      location: 'Rio de Janeiro, RJ',
      period: '2020 - 2022',
      description: 'Desenvolvimento de aplicações web complexas utilizando Java 11+, Spring Boot, Angular e PostgreSQL. Participação ativa em code reviews e definição de arquitetura.',
      achievements: [
        'Desenvolveu API que processa 10k+ requisições por minuto',
        'Otimizou queries SQL reduzindo tempo de resposta em 60%',
        'Implementou sistema de cache com Redis'
      ]
    },
    {
      position: 'Desenvolvedor Java Júnior',
      company: 'StartupTech',
      location: 'Belo Horizonte, MG',
      period: '2019 - 2020',
      description: 'Desenvolvimento de funcionalidades backend em Java com Spring Framework e frontend com Angular. Aprendizado contínuo de boas práticas e padrões de desenvolvimento.',
      achievements: [
        'Desenvolveu 15+ APIs RESTful',
        'Participou de refatoração de sistema legado',
        'Contribuiu com documentação técnica'
      ]
    }
  ];

  return (
    <section id="experiencia" className="py-16 px-6 bg-slate-50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">
          {t('experience.title')}
        </h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow"></div>
                
                <div className="ml-16 bg-white p-6 rounded-lg shadow-lg w-full">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 mb-1">
                        {exp.position}
                      </h3>
                      <h4 className="text-lg text-blue-600 font-semibold mb-2">
                        {exp.company}
                      </h4>
                    </div>
                    
                    <div className="flex flex-col md:text-right text-sm text-slate-500">
                      <div className="flex items-center gap-1 mb-1">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div>
                    <h5 className="font-semibold text-slate-800 mb-2">Principais conquistas:</h5>
                    <ul className="list-disc list-inside text-slate-600 space-y-1">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="text-sm">
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
