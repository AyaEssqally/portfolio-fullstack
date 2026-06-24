import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { projectSections, projectTabs, projetsById } from '../data/projets';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import SectionHeader from './SectionHeader';

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const handler = (e) => {
      const project = projetsById[e.detail];
      if (project) setSelected(project);
    };
    window.addEventListener('open-project', handler);
    return () => window.removeEventListener('open-project', handler);
  }, []);

  const visibleSections = useMemo(() => {
    if (filter === 'all') return projectSections;
    return projectSections.filter((s) => s.id === filter);
  }, [filter]);

  return (
    <section id="projects" className="section-block">
      <div className="section-container">
        <SectionHeader
          label="Projets"
          title="Réalisations"
        />

        <div className="mt-10 flex flex-wrap gap-2 rounded-2xl border border-border bg-card p-2 shadow-sm">
          {projectTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setFilter(tab.id)}
              className={`rounded-xl px-4 py-2.5 font-mono-label text-xs font-medium transition-all duration-300 ${
                filter === tab.id
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-text-muted hover:bg-bg-soft hover:text-primary'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="mt-12 space-y-14"
          >
            {visibleSections.map((section) => {
              const sectionProjects = section.projectIds
                .map((id) => projetsById[id])
                .filter(Boolean);

              return (
                <div key={section.id}>
                  <div className="mb-5 flex items-center gap-3 border-b border-border pb-3">
                    <span className="h-6 w-1 rounded-full bg-primary" />
                    <h3 className="font-display text-lg font-bold">{section.label}</h3>
                    <span className="rounded-full bg-primary-soft px-2.5 py-0.5 font-mono-label text-[10px] font-medium text-primary">
                      {sectionProjects.length} projet{sectionProjects.length > 1 ? 's' : ''}
                    </span>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {sectionProjects.map((project, i) => (
                      <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.06, duration: 0.35 }}
                      >
                        <ProjectCard project={project} onOpen={setSelected} />
                      </motion.div>
                    ))}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
