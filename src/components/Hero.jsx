import { motion } from 'framer-motion';
import { ArrowDown, Download } from 'lucide-react';
import { getProfile, getCvUrl } from '../config/portfolioVariant';
import HeroHighlightCard from './HeroHighlightCard';

const fade = {
  hidden: { opacity: 0, y: 16 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.42 },
  }),
};

function HeroBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#EDEBFF]/40 via-bg to-[#E6F7F4]/35" />
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#EAF3FF]/25 to-transparent" />

      <motion.div
        animate={{ y: [0, -12, 0], x: [0, 6, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -right-28 top-8 h-72 w-72 rounded-full bg-primary/12 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 10, 0], x: [0, -8, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -left-20 top-1/3 h-56 w-56 rounded-full bg-[#93C5FD]/15 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-4 right-1/3 h-44 w-44 rounded-full bg-accent/10 blur-3xl"
      />

      <svg
        className="absolute -right-4 top-20 h-40 w-72"
        viewBox="0 0 320 160"
        fill="none"
      >
        <motion.path
          animate={{ opacity: [0.12, 0.2, 0.12] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          d="M0 80 Q 80 40, 160 80 T 320 80"
          stroke="#6D5DFB"
          strokeWidth="1.25"
          strokeLinecap="round"
        />
        <motion.path
          animate={{ opacity: [0.08, 0.14, 0.08] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          d="M0 110 Q 100 70, 200 110 T 320 110"
          stroke="#2CB7A4"
          strokeWidth="0.75"
          strokeLinecap="round"
        />
      </svg>

      <svg
        className="absolute bottom-12 left-4 h-28 w-56"
        viewBox="0 0 240 112"
        fill="none"
      >
        <motion.path
          animate={{ opacity: [0.1, 0.16, 0.1] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
          d="M0 56 Q 60 24, 120 56 T 240 56"
          stroke="#2563EB"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export default function Hero() {
  const profile = getProfile();
  const cvUrl = getCvUrl();
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative scroll-mt-[60px] overflow-hidden pt-14 pb-5 sm:pt-[4.25rem] sm:pb-6"
    >
      <HeroBackground />

      <div className="section-container relative z-10">
        <div className="grid items-center gap-7 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-10">
          <div className="max-w-xl lg:max-w-none">
            <motion.p
              variants={fade}
              initial="hidden"
              animate="visible"
              custom={0}
              className="font-mono-label text-[11px] font-medium tracking-wide text-text-muted/80"
            >
              Recherche alternance · Septembre 2026
            </motion.p>

            <motion.h1
              variants={fade}
              initial="hidden"
              animate="visible"
              custom={1}
              className="mt-2 font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.15rem]"
            >
              {profile.name}
            </motion.h1>

            <motion.p
              variants={fade}
              initial="hidden"
              animate="visible"
              custom={2}
              className="mt-2.5 font-display text-base font-semibold text-primary sm:text-lg"
            >
              {profile.title}
            </motion.p>

            <motion.p
              variants={fade}
              initial="hidden"
              animate="visible"
              custom={3}
              className="mt-3.5 max-w-lg text-base leading-relaxed text-text-muted"
            >
              {profile.tagline}
            </motion.p>

            <motion.div
              variants={fade}
              initial="hidden"
              animate="visible"
              custom={4}
              className="mt-6 flex flex-wrap gap-3"
            >
              <button
                type="button"
                onClick={scrollToProjects}
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-primary/90 hover:shadow-md"
              >
                <ArrowDown size={16} />
                Voir mes projets
              </button>
              <a
                href={cvUrl}
                download
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3 text-sm font-semibold text-text shadow-sm transition hover:border-primary/30 hover:text-primary"
              >
                <Download size={16} />
                Télécharger mon CV
              </a>
            </motion.div>
          </div>

          <div className="flex w-full min-w-0 items-center justify-center lg:justify-end">
            <HeroHighlightCard />
          </div>
        </div>
      </div>
    </section>
  );
}
