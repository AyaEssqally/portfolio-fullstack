import { getTechStyle } from '../utils/techBadges';

export default function TechBadge({ tech, family, className = '' }) {
  const style = getTechStyle(tech, family);

  return (
    <span
      className={`inline-flex rounded-lg border px-2.5 py-1 font-mono-label text-[10px] font-medium sm:text-[11px] ${className}`}
      style={{
        backgroundColor: style.bg,
        color: style.text,
        borderColor: style.border,
      }}
    >
      {tech}
    </span>
  );
}
