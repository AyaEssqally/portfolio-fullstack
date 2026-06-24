import { motion } from 'framer-motion';
import { Download, Mail, MapPin } from 'lucide-react';
import { profile } from '../data/formation';
import { getCvUrl } from '../config/portfolioVariant';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import SectionHeader from './SectionHeader';

export default function Contact() {
  const cvUrl = getCvUrl();

  return (
    <section id="contact" className="section-block section-alt">
      <div className="section-container">
        <SectionHeader label="Contact" title="Me contacter" />

        <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8">
          <div className="space-y-3">
            <div className="card-surface flex items-center gap-4 p-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
                <Mail size={18} />
              </div>
              <div className="min-w-0">
                <p className="font-mono-label text-[10px] uppercase tracking-wider text-text-muted">Email</p>
                <a
                  href={`mailto:${profile.email}`}
                  className="mt-0.5 block truncate text-sm font-medium text-primary hover:underline"
                >
                  {profile.email}
                </a>
              </div>
            </div>

            <div className="card-surface flex items-center gap-4 p-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                <MapPin size={18} />
              </div>
              <div>
                <p className="font-mono-label text-[10px] uppercase tracking-wider text-text-muted">Localisation</p>
                <p className="mt-0.5 text-sm font-medium">{profile.location}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-1">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="card-surface card-hover flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-text-muted hover:text-primary"
              >
                <LinkedinIcon size={16} />
                LinkedIn
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="card-surface card-hover flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-text-muted hover:text-primary"
              >
                <GithubIcon size={16} />
                GitHub
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-center rounded-2xl bg-gradient-to-br from-primary to-primary/85 p-8 text-white shadow-md md:p-10">
            <p className="font-mono-label text-[10px] uppercase tracking-widest text-white/70">
              Alternance · Septembre 2026
            </p>
            <h3 className="mt-2 font-display text-xl font-bold md:text-2xl">Master 2 — MIAGE NUMRES</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/90">
              Disponible dans le développement full-stack, l&apos;IA appliquée ou la data.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-bold text-primary transition hover:shadow-md"
              >
                <Mail size={16} />
                Me contacter
              </a>
              <a
                href={cvUrl}
                download
                className="inline-flex items-center gap-2 rounded-xl border border-white/40 px-5 py-2.5 text-sm font-semibold transition hover:bg-white/10"
              >
                <Download size={16} />
                Télécharger mon CV
              </a>
            </div>
          </div>
        </div>

        <footer className="mt-16 border-t border-border pt-8 text-center">
          <p className="font-mono-label text-xs text-text-muted">
            © {new Date().getFullYear()} {profile.name}
          </p>
        </footer>
      </div>
    </section>
  );
}
