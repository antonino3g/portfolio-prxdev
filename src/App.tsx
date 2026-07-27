import { LanguageProvider } from './i18n';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Stack } from './components/Stack';
import { Work } from './components/Work';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <LanguageProvider>
      <Header />
      <main id="topo">
        <Hero />
        <Stack />
        <Work />
        <Experience />
        <Education />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
