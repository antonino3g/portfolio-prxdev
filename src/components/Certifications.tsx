import { Smartphone, ShieldCheck, GitBranch } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Certifications = () => {
  const { t } = useTheme();

  const certifications = [
    {
      name: t('certifications.flutter.name'),
      icon: Smartphone,
    },
    {
      name: t('certifications.qa.name'),
      icon: ShieldCheck,
    },
    {
      name: t('certifications.git.name'),
      icon: GitBranch,
    },
  ];

  return (
    <section id="certificacoes" className="py-16 px-6 bg-slate-50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">
          {t('certifications.title')}
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="text-blue-600" size={24} />
                </div>
                <h3 className="text-sm font-semibold text-slate-800 leading-relaxed">{cert.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
