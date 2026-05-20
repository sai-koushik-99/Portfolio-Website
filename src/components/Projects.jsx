import { useState } from 'react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import ProjectDetail from './ProjectDetail';
import { useFadeIn } from '../hooks/useFadeIn';
import { useStagger } from '../hooks/useStagger';

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const headRef = useFadeIn();
  const gridRef = useStagger(0.1);

  return (
    <section id="projects" style={{ padding: '100px 40px', backgroundColor: 'var(--bg)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div ref={headRef} className="fade-in">
          <div className="section-label">WORK</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '56px' }}>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '36px',
              color: 'var(--text-primary)',
            }}>
              Selected Projects
            </h2>
            <p style={{
              fontFamily: 'var(--font-mono)', fontSize: '11px',
              color: 'var(--text-muted)', letterSpacing: '0.06em',
            }}>
              Click card for details →
            </p>
          </div>
        </div>

        <div ref={gridRef} style={{
          display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '20px',
        }}>
          {projects.map((project) => (
            <div key={project.id}>
              <ProjectCard project={project} onOpen={setActiveProject} />
            </div>
          ))}
        </div>
      </div>

      {activeProject && (
        <ProjectDetail project={activeProject} onClose={() => setActiveProject(null)} />
      )}

      <style>{`
        @media (max-width: 900px) {
          #projects > div > div:last-child { grid-template-columns: 1fr !important; }
          #projects { padding: 80px 20px !important; }
        }
      `}</style>
    </section>
  );
}
