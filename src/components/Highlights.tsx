
import React from 'react';
import { Award, Users, Globe, ExternalLink } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const Highlights = () => {
  const { t } = useTheme();

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
        
        <div className="grid md:grid-cols-3 gap-8">
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
