
import React from 'react';
import { Award, Users, Globe, ExternalLink, TrendingUp, Store, UsersRound, Clock, Mic } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const Highlights = () => {
  const { t } = useTheme();

  const metrics = [
    {
      value: '6+',
      label: t('highlights.metrics.years'),
      color: 'text-blue-600',
      icon: Clock,
    },
    {
      value: 'R$10M+',
      label: t('highlights.metrics.transactions'),
      color: 'text-green-600',
      icon: TrendingUp,
    },
    {
      value: '15K+',
      label: t('highlights.metrics.salons'),
      color: 'text-purple-600',
      icon: Store,
    },
    {
      value: '28K+',
      label: t('highlights.metrics.clients'),
      color: 'text-orange-600',
      icon: UsersRound,
    },
  ];

  const highlights = [
    {
      icon: Users,
      title: t('highlights.teaching.title'),
      description: t('highlights.teaching.description'),
      color: 'text-blue-600',
      link: 'https://ejurr.tjrr.jus.br/?p=17570'
    },
    {
      icon: Globe,
      title: t('highlights.lisbon.title'),
      description: t('highlights.lisbon.description'),
      color: 'text-green-600',
      link: 'https://www.instagram.com/p/Cs_a7LHsaqn/'
    },
    {
      icon: Mic,
      title: t('highlights.podcast.title'),
      description: t('highlights.podcast.description'),
      color: 'text-orange-600',
      link: 'https://www.linkedin.com/in/antoninopraxedes/overlay/1768709827834/single-media-viewer/?profileId=ACoAABtzYkkBLm13FZFaMVdu_4Po91_wEJaFd5Q'
    },
    {
      icon: Award,
      title: t('highlights.awards.title'),
      description: t('highlights.awards.description'),
      color: 'text-purple-600',
      link: 'https://www.tjrr.jus.br/index.php/noticias/17272-semana-de-inovacao-palestras-rodas-de-conversas-e-premiacoes-marcam-cerimonia-de-abertura'
    }
  ];

  return (
    <section id="destaques" className="py-16 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">
          {t('highlights.title')}
        </h2>

        {/* Impact Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-14">
          {metrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <div key={index} className="text-center p-6 bg-slate-50 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="mx-auto mb-3 w-10 h-10 flex items-center justify-center">
                  <IconComponent size={28} className={metric.color} />
                </div>
                <div className={`text-3xl md:text-4xl font-bold ${metric.color} mb-1`}>
                  {metric.value}
                </div>
                <p className="text-slate-600 text-xs md:text-sm">{metric.label}</p>
              </div>
            );
          })}
        </div>

        {/* Highlight Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 group">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4">
                    <IconComponent size={48} className={highlight.color} />
                  </div>
                  <CardTitle className="text-xl">{highlight.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-center leading-relaxed mb-4">
                    {highlight.description}
                  </p>
                  <div className="text-center">
                    <a
                      href={highlight.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors duration-200 font-medium"
                    >
                      {t('highlights.view article')}
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
