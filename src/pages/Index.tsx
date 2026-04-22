import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Highlights from '../components/Highlights';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Courses from '../components/Courses';
import Certifications from '../components/Certifications';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { useReveal } from '../components/useReveal';

const Index: React.FC = () => {
  useReveal();

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Highlights />
        <Projects />
        <Experience />
        <Education />
        <Courses />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
