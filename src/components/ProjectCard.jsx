import { ExternalLink } from 'lucide-react';
import { categoryStyles } from '../utils/techBadges';
import { GithubIcon } from './SocialIcons';
import TechBadge from './TechBadge';

export default function ProjectCard({ project, onOpen }) {
  const catStyle = categoryStyles[project.categorie] || categoryStyles['Full-Stack'];

  return (
    <article
      role="button"
      tabIndex={0}
      onClick={() => onOpen(project)}
      onKeyDown={(e) => e.key === 'Enter' && onOpen(project)}
      className="card-surface card-hover relative flex h-full cursor-pointer flex-col p-5"
    >
      <span
        className="inline-flex w-fit rounded-lg border px-2.5 py-0.5 font-mono-label text-[10px] font-semibold uppercase tracking-wider"
        style={{
          backgroundColor: catStyle.bg,
          color: catStyle.text,
          borderColor: catStyle.border,
        }}
      >
        {project.categorie}
      </span>

      <h3 className="mt-2 font-display text-base font-bold leading-snug">{project.titre}</h3>

      {project.sousTitre && (
        <p className="mt-1 text-xs font-medium text-primary/80 sm:text-sm">{project.sousTitre}</p>
      )}

      <p className="mt-2 flex-1 text-sm leading-relaxed text-text-muted">{project.pitch}</p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.stack.slice(0, 5).map((tech) => (
          <TechBadge key={tech} tech={tech} />
        ))}
        {project.stack.length > 5 && (
          <span className="self-center font-mono-label text-[10px] text-text-muted">
            +{project.stack.length - 5}
          </span>
        )}
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-border pt-4">
        <span className="text-sm font-semibold text-primary">Voir le détail →</span>
        {project.lien_github && (
          <a
            href={project.lien_github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1 text-sm font-medium text-text-muted transition hover:text-primary"
          >
            <GithubIcon size={14} />
            GitHub
            <ExternalLink size={12} />
          </a>
        )}
      </div>
    </article>
  );
}
