import { Fragment } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const toneStyles = {
  violet: 'border-[#E4DFF8] bg-[#F3F0FF] text-[#5B4FD9]',
  teal: 'border-[#C8EDE6] bg-[#EAF8F5] text-[#1F9A88]',
  neutral: 'border-[#E5E7EB] bg-[#FAFAF8] text-[#4B5563]',
};

const portfolioSteps = [
  { id: 'cv', lines: ['CV / Données'], tone: 'neutral' },
  { id: 'search', lines: ['Recherche', 'sémantique'], tone: 'violet' },
  { id: 'agent', lines: ['Agent IA'], tone: 'violet' },
  { id: 'api', lines: ['API', 'FastAPI'], tone: 'neutral' },
  { id: 'ui', lines: ['Interface', 'React'], tone: 'teal' },
];

function PipelineConnector({ index, reduceMotion }) {
  return (
    <div className="relative flex w-2.5 shrink-0 items-center self-center sm:w-3" aria-hidden>
      <div className="relative h-px w-full">
        <div className="absolute inset-0 h-px bg-[#D4CBF5]/90" />
        {!reduceMotion && (
          <motion.span
            className="absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[#6D5DFB]"
            animate={{ left: ['0%', '100%'], opacity: [0.35, 1, 0.35] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: index * 0.3,
            }}
          />
        )}
      </div>
    </div>
  );
}

function PipelineBlock({ step }) {
  const styles = toneStyles[step.tone];

  return (
    <div
      className={`min-w-0 flex-1 rounded-lg border px-1 py-2 text-center ${styles}`}
    >
      {step.lines.map((line) => (
        <span
          key={line}
          className="font-mono-label block text-[8px] font-semibold leading-[1.2] sm:text-[9px]"
        >
          {line}
        </span>
      ))}
    </div>
  );
}

export default function SmartHirePipeline() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="rounded-xl border border-[#E8E4F3] bg-[#FFFDF9] p-3">
      <div className="flex w-full items-stretch">
        {portfolioSteps.map((step, i) => (
          <Fragment key={step.id}>
            <PipelineBlock step={step} />
            {i < portfolioSteps.length - 1 && (
              <PipelineConnector index={i} reduceMotion={reduceMotion} />
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
