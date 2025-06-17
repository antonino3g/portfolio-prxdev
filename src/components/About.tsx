import { useTheme } from '@/contexts/ThemeContext';
import { Code, Coffee, Lightbulb } from 'lucide-react';
import profileImage from "@/assets/profile_about.jpg";

const About = () => {
  const { t } = useTheme();
  return (
    <section id="sobre" className="py-16 px-6 bg-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">
          {t('hero.about')}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <img
              src={profileImage}
              alt="Antonino Dev"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          
          <div className="flex flex-col justify-between h-full">
            <div>
              <p className="text-base text-slate-600 mb-4 leading-relaxed">
                {t('about.text.p1')}
              </p>
              
              <p className="text-base text-slate-600 mb-8 leading-relaxed">
              {t('about.text.p2')}{' '}
                <a 
                  href="https://antoninopraxedes.wordpress.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-medium underline"
                >
                  blog
                </a>
                {' '}  {t('about.text.p3')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Code className="text-blue-600" size={20} />
                </div>
                <h3 className="font-semibold text-slate-800 text-sm">{t('hero.featurecc')}</h3>
                <p className="text-xs text-slate-600">{t('hero.featurecc.ph')}</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Lightbulb className="text-blue-600" size={20} />
                </div>
                <h3 className="font-semibold text-slate-800 text-sm">{t('hero.featureino')}</h3>
                <p className="text-xs text-slate-600">{t('hero.featureino.ph')}</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Coffee className="text-blue-600" size={20} />
                </div>
                <h3 className="font-semibold text-slate-800 text-sm">{t('hero.featureded')}</h3>
                <p className="text-xs text-slate-600">{t('hero.featureded.ph')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;