import { profile as baseProfile } from '../data/formation';

export const portfolioVariants = {
  fullstack: {
    id: 'fullstack',
    label: 'IA & Full-Stack',
    cvFile: 'cv-fullstack.pdf',
    domains: 'IA appliquée, Full-Stack',
    tagline:
      'Je conçois des applications intelligentes et des solutions full-stack utiles, structurées et orientées métier.',
    bio: [
      'Étudiante en M2 MIAGE à l\'Université Côte d\'Azur, je m\'intéresse au développement d\'applications full-stack et aux solutions d\'intelligence artificielle appliquées aux besoins métiers.',
      'J\'aime concevoir des projets structurés en reliant la partie technique à une vraie problématique utilisateur : automatisation, agents IA, interfaces web et traitement de documents.',
      'Actuellement, je recherche une alternance à partir de septembre 2026 en développement full-stack ou IA appliquée.',
    ],
    documentTitle: 'Aya Essqally — IA & Full-Stack',
  },
  data: {
    id: 'data',
    label: 'Data',
    cvFile: 'cv-data.pdf',
    domains: 'Data Science, Statistiques, BI',
    tagline:
      'J\'analyse et valorise les données pour produire des insights clairs, rigoureux et utiles aux décisions métier.',
    bio: [
      'Étudiante en M2 MIAGE à l\'Université Côte d\'Azur, je m\'intéresse à l\'analyse de données, à la statistique et à la visualisation pour répondre à des problématiques concrètes.',
      'J\'aime mener des projets data de bout en bout : exploration, tests statistiques, modélisation et restitution via des tableaux de bord ou des rapports clairs.',
      'Actuellement, je recherche une alternance à partir de septembre 2026 en data science ou analyse de données.',
    ],
    documentTitle: 'Aya Essqally — Data Science',
  },
};

export function getActiveVariant() {
  const key = import.meta.env.VITE_PORTFOLIO_VARIANT || 'fullstack';
  return portfolioVariants[key] ?? portfolioVariants.fullstack;
}

export function getProfile() {
  const variant = getActiveVariant();
  return {
    ...baseProfile,
    tagline: variant.tagline,
    bio: variant.bio,
  };
}

export function getCvUrl() {
  return `${import.meta.env.BASE_URL}${getActiveVariant().cvFile}`;
}
