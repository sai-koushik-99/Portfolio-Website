import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';

// Attach slide-in animations to every section on mount
function useSectionAnimations() {
  useEffect(() => {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    sections.forEach((section) => {
      section.classList.add('section-hidden');
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);
}

function SectionWrapper({ children }) {
  return <>{children}</>;
}

export default function App() {
  useSectionAnimations();

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Certifications />
      </main>
      <Footer />

      <style>{`
        .section-hidden {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.75s cubic-bezier(0.22,1,0.36,1), transform 0.75s cubic-bezier(0.22,1,0.36,1);
        }
        /* Hero is always visible — no hide */
        #hero.section-hidden {
          opacity: 1 !important;
          transform: none !important;
        }
        .section-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </>
  );
}
