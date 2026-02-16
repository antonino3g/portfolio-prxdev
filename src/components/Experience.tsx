
import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Experience = () => {
  const { t } = useTheme();

  const experiences = [
    {
      position: t('experience.gloss.position'),
      company: t('experience.gloss.company'),
      location: t('experience.gloss.location'),
      period: t('experience.gloss.period'),
      description: t('experience.gloss.description'),
      achievements: [
        t('experience.gloss.achievements.1'),
        t('experience.gloss.achievements.2'),
        t('experience.gloss.achievements.3'),
        t('experience.gloss.achievements.4'),
      ]
    },
    {
      position: t('experience.mid.position'),
      company: t('experience.mid.company'),
      location: t('experience.mid.location'),
      period: t('experience.mid.period'),
      description: t('experience.mid.description'),
      achievements: [
        t('experience.mid.achievements.1'),
        t('experience.mid.achievements.2'),
        t('experience.mid.achievements.3'),
      ]
    },
    {
      position: t('experience.java.position'),
      company: t('experience.java.company'),
      location: t('experience.java.location'),
      period: t('experience.java.period'),
      description: t('experience.java.description'),
      achievements: [
        t('experience.java.achievements.1'),
        t('experience.java.achievements.2'),
      ]
    },
    {
      position: t('experience.sondaManager.position'),
      company: t('experience.sondaManager.company'),
      location: t('experience.sondaManager.location'),
      period: t('experience.sondaManager.period'),
      description: t('experience.sondaManager.description'),
      achievements: [
        t('experience.sondaManager.achievements.1'),
        t('experience.sondaManager.achievements.2'),
        t('experience.sondaManager.achievements.3'),
      ]
    },
    {
      position: t('experience.sondaDev.position'),
      company: t('experience.sondaDev.company'),
      location: t('experience.sondaDev.location'),
      period: t('experience.sondaDev.period'),
      description: t('experience.sondaDev.description'),
      achievements: [
        t('experience.sondaDev.achievements.1'),
        t('experience.sondaDev.achievements.2'),
        t('experience.sondaDev.achievements.3'),
      ]
    },
    {
      position: t('experience.flutterPr.position'),
      company: t('experience.flutterPr.company'),
      location: t('experience.flutterPr.location'),
      period: t('experience.flutterPr.period'),
      description: t('experience.flutterPr.description'),
      achievements: [
        t('experience.flutterPr.achievements.1'),
      ]
    },
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
                    <h5 className="font-semibold text-slate-800 mb-2">{t('experience.achievements')}</h5>
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
