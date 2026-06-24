import { motion } from 'framer-motion';

export default function SectionHeader({ label, title, subtitle, align = 'left' }) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45 }}
      className={`section-header ${align === 'center' ? 'mx-auto text-center' : ''}`}
    >
      <p className={`section-label ${align === 'center' ? 'justify-center' : ''}`}>{label}</p>
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </motion.header>
  );
}
