
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Backend',
      skills: [
        { name: 'Java', level: 95 },
        { name: 'Spring Boot', level: 90 },
        { name: 'JPA/Hibernate', level: 94 },
        { name: 'Maven/Gradle', level: 91 },
        { name: 'Node.js', level: 85 },
      ]
    },
    {
      title: 'Frontend',
      skills: [
        { name: 'Angular', level: 92 },
        { name: 'ReactJS', level: 88 },
        { name: 'TypeScript', level: 85 },
        { name: 'Angular Material', level: 90 },
        { name: 'HTML/CSS', level: 95 }
      ]
    },
    {
      title: 'Database & Tools',
      skills: [
        { name: 'PostgreSQL', level: 93 },
        { name: 'MySQL', level: 89 },
        { name: 'Docker', level: 83 },
        { name: 'IntelliJ IDEA', level: 93 },
        { name: 'Git', level: 95 }
      ]
    },
  ];

  return (
    <section id="habilidades" className="py-16 px-6 bg-slate-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">
          Habilidades Técnicas
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-slate-800 mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-700 font-medium">{skill.name}</span>
                      <span className="text-blue-600 font-medium">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
