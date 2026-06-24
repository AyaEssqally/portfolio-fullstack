import { motion } from 'framer-motion';
import {
  Brain,
  Cloud,
  Code2,
  Database,
  Layers,
  Server,
} from 'lucide-react';
import { competences } from '../data/competences';
import { skillCategoryStyles } from '../utils/techBadges';
import SectionHeader from './SectionHeader';
import TechBadge from './TechBadge';

const icons = {
  Langages: Code2,
  Frontend: Layers,
  Backend: Server,
  'Bases de données': Database,
  'Data & IA': Brain,
  'DevOps & outils': Cloud,
};

export default function Skills() {
  const entries = Object.entries(competences);

  return (
    <section id="skills" className="section-block">
      <div className="section-container">
        <SectionHeader
          label="Compétences"
          title="Stack & outils"
          subtitle="Technologies et environnements que j'utilise au quotidien sur mes projets full-stack, data et IA."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {entries.map(([category, items], i) => {
            const Icon = icons[category] || Code2;
            const styles = skillCategoryStyles[category] || skillCategoryStyles['DevOps & outils'];

            return (
              <motion.article
                key={category}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`card-surface card-hover flex h-full flex-col border border-border/80 p-5 ${styles.cardBg}`}
              >
                <div className="mb-4 flex items-center gap-2.5 border-b border-border/50 pb-3">
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-xl ${styles.iconBg} ${styles.iconText}`}
                  >
                    <Icon size={18} />
                  </span>
                  <h3 className="font-display text-sm font-semibold">{category}</h3>
                </div>
                <ul className="flex flex-wrap gap-1.5">
                  {items.map((skill) => (
                    <li key={skill}>
                      <TechBadge tech={skill} family={styles.family} />
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
