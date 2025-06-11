import { useTheme } from '@/contexts/ThemeContext';
import { Code, Coffee, Lightbulb } from 'lucide-react';


const About = () => {
  const { t } = useTheme();
  return (
    <section id="" className="py-16 px-6 bg-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">
          {t('hero.about')}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://github-production-user-asset-6210df.s3.amazonaws.com/19830645/452128439-e608ad01-0ea5-4988-9966-a6e666b518fc.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250606%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250606T020517Z&X-Amz-Expires=300&X-Amz-Signature=9d813040dc3cceadd0a27f70c5ae919432faece6a8445c389c9648f8afaac921&X-Amz-SignedHeaders=host"
              alt="Antonino Dev"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          
          <div>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Sou desenvolvedor Java Full Stack com mais de 4 anos de experiência, atuando no backend com Java e Spring Boot, 
              e no frontend com Angular e ReactJS.
            </p>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Tenho domínio em microserviços, APIs RESTful, bancos relacionais, DevOps com Docker e CI/CD, além de aplicar padrões como MVC, SOLID e Clean Code.              
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Code className="text-blue-600" size={24} />
                </div>
                <h3 className="font-semibold text-slate-800">{t('hero.featurecc')}</h3>
                <p className="text-sm text-slate-600">{t('hero.featurecc.ph')}</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Lightbulb className="text-blue-600" size={24} />
                </div>
                <h3 className="font-semibold text-slate-800">{t('hero.featureino')}</h3>
                <p className="text-sm text-slate-600">{t('hero.featureino.ph')}</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Coffee className="text-blue-600" size={24} />
                </div>
                <h3 className="font-semibold text-slate-800">{t('hero.featureded')}</h3>
                <p className="text-sm text-slate-600">{t('hero.featureded.ph')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
