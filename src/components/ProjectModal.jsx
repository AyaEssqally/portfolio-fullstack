import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';
import { categoryStyles } from '../utils/techBadges';
import SmartHirePipeline from './AnimatedWorkflow';
import { GithubIcon } from './SocialIcons';
import TechBadge from './TechBadge';

function ModalSection({ title, children, compact = false }) {
  return (
    <section className={compact ? 'mt-4' : 'mt-6 first:mt-0'}>
      <h3 className="font-display text-sm font-semibold text-text">{title}</h3>
      <div className="mt-2">{children}</div>
    </section>
  );
}

function SmartHireModalContent({ project }) {
  const { structuredModal: detail } = project;
  const catStyle = categoryStyles[project.categorie];
  const stackItems = detail.stackModal || project.stack;

  return (
    <>
      <span
        className="inline-flex rounded-lg border px-2.5 py-0.5 font-mono-label text-[10px] font-semibold uppercase tracking-wider"
        style={{
          backgroundColor: catStyle.bg,
          color: catStyle.text,
          borderColor: catStyle.border,
        }}
      >
        {project.categorie}
      </span>

      <h2 className="mt-2.5 pr-8 font-display text-xl font-bold">{project.titre}</h2>
      {project.sousTitre && (
        <p className="mt-1 text-sm text-text-muted">{project.sousTitre}</p>
      )}

      <ModalSection title="Présentation" compact>
        <p className="text-sm leading-relaxed text-text-muted">{detail.presentation}</p>
      </ModalSection>

      <ModalSection title="Fonctionnalités" compact>
        <ul className="space-y-1.5">
          {detail.fonctionnalites.map((item) => (
            <li key={item} className="flex gap-2 text-sm text-text-muted">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </ModalSection>

      <ModalSection title="Workflow IA" compact>
        <SmartHirePipeline />
      </ModalSection>

      <ModalSection title="Stack technique" compact>
        <div className="flex flex-wrap gap-1.5">
          {stackItems.map((tech) => (
            <TechBadge key={tech} tech={tech} />
          ))}
        </div>
      </ModalSection>
    </>
  );
}

function DefaultModalContent({ project }) {
  const catStyle = categoryStyles[project.categorie] || categoryStyles['Full-Stack'];

  return (
    <>
      <span
        className="inline-flex rounded-lg border px-2.5 py-0.5 font-mono-label text-[10px] font-semibold uppercase tracking-wider"
        style={{
          backgroundColor: catStyle.bg,
          color: catStyle.text,
          borderColor: catStyle.border,
        }}
      >
        {project.categorie}
      </span>
      <h2 className="mt-3 pr-8 font-display text-xl font-bold">{project.titre}</h2>
      {project.sousTitre && (
        <p className="mt-1 text-sm font-medium text-primary">{project.sousTitre}</p>
      )}
      <p className="mt-2 text-sm text-text-muted">{project.pitch}</p>

      {project.details && (
        <ul className="mt-5 space-y-2 text-sm text-text-muted">
          {project.details.map((line) => (
            <li key={line.slice(0, 40)} className="flex gap-2">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
              <span className={line.startsWith('// TODO') ? 'font-mono-label text-xs' : ''}>
                {line}
              </span>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <TechBadge key={tech} tech={tech} />
        ))}
      </div>

      {project.lien_github && (
        <a
          href={project.lien_github}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary-soft"
        >
          <GithubIcon size={16} />
          Voir sur GitHub
          <ExternalLink size={14} />
        </a>
      )}
    </>
  );
}

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return undefined;

    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [project, onClose]);

  const isStructured = Boolean(project?.structuredModal);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end justify-center p-4 sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            className="absolute inset-0 bg-text/10 backdrop-blur-[2px]"
            onClick={onClose}
            aria-label="Fermer"
          />

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 28, stiffness: 320 }}
            className={`relative max-h-[90vh] w-full overflow-y-auto rounded-2xl border border-border bg-card p-5 shadow-xl sm:p-6 ${
              isStructured ? 'max-w-lg' : 'max-w-lg'
            }`}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 z-10 rounded-lg p-1 text-text-muted hover:bg-bg-soft hover:text-primary"
              aria-label="Fermer"
            >
              <X size={20} />
            </button>

            {isStructured ? (
              <SmartHireModalContent project={project} />
            ) : (
              <DefaultModalContent project={project} />
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
