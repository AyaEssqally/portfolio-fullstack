import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { experiences } from '../data/experiences';
import SectionHeader from './SectionHeader';

export default function Experience() {
  const goToProject = (projectId) => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    window.dispatchEvent(new CustomEvent('open-project', { detail: projectId }));
  };

  return (
    <section id="experience" className="section-block section-alt">
      <div className="section-container">
        <SectionHeader
          label="Expériences"
          title="Parcours professionnel"
        />

        <div className="relative mt-12 space-y-0 border-l-2 border-primary/20 pl-6 md:pl-8">
          {experiences.map((exp, i) => (
            <motion.article
              key={exp.id}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative pb-8 last:pb-0"
            >
              <span className="absolute -left-[31px] top-5 h-3 w-3 rounded-full border-2 border-primary bg-card md:-left-[39px]" />

              <div className="card-surface card-hover p-5 md:p-6">
                <div className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between sm:gap-3">
                  <p className="font-mono-label text-xs text-primary">{exp.periode}</p>
                  <p className="text-sm font-medium text-accent">{exp.domaine}</p>
                </div>

                <h3 className="mt-2 font-display text-base font-bold md:text-lg">
                  {exp.poste}
                  <span className="font-normal text-text-muted"> · </span>
                  {exp.entreprise}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-text-muted">{exp.resume}</p>

                {exp.linkedProject && (
                  <button
                    type="button"
                    onClick={() => goToProject(exp.linkedProject)}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary transition hover:gap-2"
                  >
                    Voir le projet lié
                    <ArrowRight size={14} />
                  </button>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
