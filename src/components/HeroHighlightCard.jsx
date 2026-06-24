import { motion } from 'framer-motion';
import { getActiveVariant } from '../config/portfolioVariant';
import { Briefcase, CalendarRange, Layers, MapPin } from 'lucide-react';

const rowMeta = [
  { label: 'Alternance', key: 'alternance', icon: Briefcase, iconBg: '#EDEBFF', iconColor: '#6D5DFB' },
  { label: 'Localisation', key: 'location', icon: MapPin, iconBg: '#E6F7F4', iconColor: '#2CB7A4' },
  { label: 'Domaines', key: 'domains', icon: Layers, iconBg: '#EAF3FF', iconColor: '#2563EB' },
  { label: 'Rythme', key: 'rhythm', icon: CalendarRange, iconBg: '#FFF4EC', iconColor: '#D97706' },
];

export default function HeroHighlightCard() {
  const variant = getActiveVariant();
  const values = {
    alternance: 'Septembre 2026',
    location: 'Sophia Antipolis / Côte d\'Azur',
    domains: variant.domains,
    rhythm: '1 semaine en entreprise / 1 semaine en formation',
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.18, duration: 0.45 }}
      className="card-surface w-full max-w-[19.5rem] border-border/80 p-5 shadow-[0_4px_24px_rgba(109,93,251,0.06)] lg:max-w-[20rem]"
    >
      <p className="font-mono-label text-[10px] font-semibold uppercase tracking-wider text-primary">
        Profil
      </p>

      <dl className="mt-3.5 space-y-2.5">
        {rowMeta.map((row) => {
          const Icon = row.icon;
          return (
            <div key={row.label} className="border-b border-border/60 pb-2.5 last:border-b-0 last:pb-0">
              <dt className="flex items-center gap-2 text-xs font-medium text-text-muted">
                <span
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md"
                  style={{ backgroundColor: row.iconBg }}
                >
                  <Icon size={12} style={{ color: row.iconColor }} strokeWidth={2.25} />
                </span>
                {row.label}
              </dt>
              <dd className="mt-0.5 pl-8 text-[13px] font-semibold leading-snug text-text">
                {values[row.key]}
              </dd>
            </div>
          );
        })}
      </dl>
    </motion.div>
  );
}
