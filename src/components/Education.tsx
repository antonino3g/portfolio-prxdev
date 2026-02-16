import { GraduationCap } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Education = () => {
  const { t } = useTheme();

  const educationItems = [
    {
      institution: t('education.ibf.institution'),
      degree: t('education.ibf.degree'),
      field: t('education.ibf.field'),
      period: t('education.ibf.period'),
    },
    {
      institution: t('education.ifrr.institution'),
      degree: t('education.ifrr.degree'),
      field: t('education.ifrr.field'),
      period: t('education.ifrr.period'),
    },
  ];

  return (
    <section id="formacao" className="py-16 px-6 bg-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">
          {t('education.title')}
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {educationItems.map((edu, index) => (
            <div key={index} className="bg-slate-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-1">{edu.institution}</h3>
                  <p className="text-blue-600 font-semibold mb-1">{edu.degree}</p>
                  <p className="text-slate-600 text-sm mb-2">{edu.field}</p>
                  <p className="text-slate-500 text-sm">{edu.period}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
