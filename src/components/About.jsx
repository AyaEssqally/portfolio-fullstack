import { motion } from 'framer-motion';
import { GraduationCap, MapPin } from 'lucide-react';
import { formation, profile } from '../data/formation';
import { getProfile } from '../config/portfolioVariant';
import SectionHeader from './SectionHeader';

function Reveal({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function FormationTimeline() {
  return (
    <div className="relative ml-1">
      <div
        aria-hidden
        className="absolute bottom-3 left-[7px] top-3 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-primary/10"
      />

      <ul className="space-y-5">
        {formation.map((item, index) => (
          <motion.li
            key={`${item.diplome}-${item.periode}`}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="relative pl-9"
          >
            <span
              aria-hidden
              className={`absolute left-0 top-[1.35rem] z-10 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 bg-card shadow-sm ${
                index === 0
                  ? 'border-primary bg-primary-soft shadow-primary/20'
                  : 'border-primary/50'
              }`}
            />

            <article className="rounded-xl border border-border/80 bg-gradient-to-br from-card to-bg-soft/80 p-4 shadow-sm transition-shadow duration-300 hover:shadow-md sm:p-5">
              <time className="font-mono-label text-xs font-medium tracking-wide text-primary">
                {item.periode}
              </time>
              <h4 className="mt-2 font-display text-base font-bold leading-snug text-text sm:text-[1.05rem]">
                {item.diplome}
              </h4>
              <p className="mt-1.5 text-sm leading-relaxed text-text-muted">{item.ecole}</p>
            </article>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

export default function About() {
  const { bio } = getProfile();
  return (
    <section id="about" className="section-block section-alt">
      <div className="section-container">
        <SectionHeader label="À propos" title="Profil" />

        <div className="mt-12 grid gap-8 lg:grid-cols-[240px_minmax(0,1fr)] lg:items-start">
          <Reveal delay={0.05} className="lg:sticky lg:top-24">
            <div className="card-surface mx-auto max-w-[280px] p-5 text-center lg:mx-0 lg:max-w-none">
              <img
                src={`${import.meta.env.BASE_URL}photo-aya.png`}
                alt="Aya Essqally"
                className="mx-auto aspect-[4/5] w-full max-w-[200px] rounded-xl border border-border object-cover object-top shadow-sm"
                loading="lazy"
              />
              <div className="mt-4 flex items-center justify-center gap-1.5 text-sm text-text-muted">
                <MapPin size={14} className="shrink-0 text-accent" />
                <span>{profile.location}</span>
              </div>
            </div>
          </Reveal>

          <div className="space-y-6">
            <Reveal delay={0.1}>
              <article className="card-surface p-6 md:p-8">
                <div className="space-y-4">
                  {bio.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)} className="leading-relaxed text-text-muted">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.2}>
              <article className="card-surface p-6 md:p-8">
                <div className="mb-6 flex items-center gap-2.5 border-b border-border/60 pb-4">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-soft text-primary">
                    <GraduationCap size={18} />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold">Formation</h3>
                    <p className="text-sm text-text-muted">Parcours académique</p>
                  </div>
                </div>

                <FormationTimeline />
              </article>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
