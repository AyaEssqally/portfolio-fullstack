export const projectTabs = [
  { id: 'all', label: 'Tous' },
  { id: 'ia', label: 'IA & Agents' },
  { id: 'fs', label: 'Full-Stack' },
  { id: 'data', label: 'Data Science' },
  { id: 'cloud', label: 'Cloud & IoT' },
];

export const categoryLabels = {
  ia: 'IA & Agents',
  fs: 'Full-Stack',
  data: 'Data Science',
  cloud: 'Cloud & IoT',
};

export const projets = [
  {
    id: 'smart-hire',
    section: 'ia',
    titre: 'Smart-Hire',
    sousTitre: 'Assistant IA de recrutement — Hackathon GenAI 2025',
    categorie: 'IA & Agents',
    pitch:
      'Assistant IA de hackathon pour analyser des CV, rechercher des profils et automatiser certaines étapes du recrutement.',
    stack: [
      'LangGraph',
      'FastAPI',
      'React',
      'TypeScript',
      'FAISS',
      'PostgreSQL',
      'Docker',
      'Ollama',
    ],
    lien_github: null,
    structuredModal: {
      presentation:
        'Smart-Hire est un assistant IA réalisé lors d\'un hackathon. Le projet aide les recruteurs à analyser des CV, rechercher des profils pertinents et automatiser certaines étapes du recrutement depuis une interface web.',
      fonctionnalites: [
        'Analyse de CV PDF/DOCX et extraction des informations clés',
        'Recherche sémantique et classement multicritère des candidats',
        'Envoi d\'invitations aux candidats',
        'Planification d\'entretiens',
        'Génération de documents RH',
        'Interface conversationnelle pour suivre le processus de recrutement',
        'Génération d\'offres d\'emploi avec Ollama',
      ],
      stackModal: [
        'LangGraph',
        'FAISS',
        'SentenceTransformers',
        'FastAPI',
        'React',
        'TypeScript',
        'WebSocket',
        'PostgreSQL',
        'Docker',
        'Nginx',
        'pdfplumber',
        'spaCy',
        'Ollama',
      ],
    },
  },
  {
    id: 'rag-documentaire',
    section: 'ia',
    titre: 'Assistant de recherche documentaire interne',
    categorie: 'IA & Agents',
    pitch:
      'Pipeline RAG multisource pour rechercher, résumer et exploiter des documents PDF et des données structurées.',
    stack: ['Python', 'LangGraph', 'FAISS', 'Sentence Transformers', 'FastAPI', 'React', 'Docker'],
    lien_github: null,
    details: [
      'Extraction, nettoyage et découpage de documents PDF.',
      'Génération d\'embeddings avec Sentence Transformers.',
      'Indexation FAISS et recherche sémantique.',
      'Connexion à une API FastAPI et une interface React.',
    ],
  },
  {
    id: 'ticket-management',
    section: 'fs',
    titre: 'Plateforme de gestion de tickets temps réel',
    categorie: 'Full-Stack',
    pitch:
      'Application web de suivi des tickets, incidents et pièces jointes avec notifications temps réel.',
    stack: ['Spring Boot', 'Angular', 'WebSocket', 'PostgreSQL', 'Docker'],
    lien_github: 'https://github.com/AyaEssqally/ticket-management_pfe',
    details: [
      'Développement d\'API REST sécurisées avec Spring Boot.',
      'Dashboard d\'administration en Angular et Tailwind CSS.',
      'Notifications temps réel via WebSocket.',
      'Gestion des données avec PostgreSQL.',
    ],
  },
  {
    id: 'supplychain-ai',
    section: 'fs',
    titre: 'SupplyChain AI Platform',
    categorie: 'Full-Stack',
    pitch:
      'Plateforme de gestion de chaîne logistique avec architecture full-stack moderne et brique IA.',
    stack: ['Spring Boot', 'Java 21', 'React', 'TypeScript', 'PostgreSQL', 'Docker', 'Kubernetes'],
    lien_github: null,
    details: [
      'Architecture backend Spring Boot et frontend React/TypeScript.',
      'Gestion des données avec PostgreSQL.',
      'Conteneurisation avec Docker.',
    ],
  },
  {
    id: 'iot-monitoring',
    section: 'cloud',
    titre: 'Plateforme Cloud Native de Monitoring IoT',
    categorie: 'Cloud & IoT',
    pitch:
      'Architecture microservices pour collecter, traiter et visualiser des données IoT en temps réel.',
    stack: ['FastAPI', 'PostgreSQL', 'Redis', 'MongoDB', 'RabbitMQ', 'Docker', 'Kubernetes', 'MQTT'],
    lien_github: null,
    details: [
      'Architecture microservices.',
      'Collecte et visualisation de données IoT.',
      'Communication temps réel.',
      'Déploiement conteneurisé.',
    ],
  },
  {
    id: 'neural-style-transfer',
    section: 'data',
    titre: 'Transfert de style neural',
    categorie: 'Data Science',
    pitch:
      'Projet Deep Learning basé sur VGG19 pour générer une image combinant le contenu d\'une photo et le style d\'une œuvre d\'art.',
    stack: ['Python', 'PyTorch', 'VGG19', 'Computer Vision'],
    lien_github: null,
    details: [
      'Utilisation de VGG19 comme extracteur de caractéristiques.',
      'Calcul de pertes de contenu et de style.',
      'Comparaison des optimiseurs Adam et LBFGS.',
      'Analyse de la qualité visuelle des résultats.',
    ],
  },
  {
    id: 'netflix-analysis',
    section: 'data',
    titre: 'Analyse statistique du catalogue Netflix',
    categorie: 'Data Science',
    pitch: 'Étude statistique de l\'évolution du catalogue Netflix avec tests d\'hypothèses.',
    stack: ['Python', 'Statistiques', 'Tests d\'hypothèses', 'Power BI'],
    lien_github: null,
    details: [
      'Analyse de l\'évolution du catalogue.',
      'Tests statistiques sur les délais de sortie.',
      'Étude de la proportion films/séries.',
    ],
  },
  {
    id: 'fraude-bancaire',
    section: 'data',
    titre: 'Détection de fraude bancaire',
    categorie: 'Data Science',
    pitch:
      'Projet de Data Mining pour identifier automatiquement des transactions bancaires frauduleuses.',
    stack: ['Python', 'Random Forest', 'Isolation Forest', 'Détection d\'anomalies'],
    lien_github: null,
    details: [
      'Exploration de données bancaires.',
      'Gestion du déséquilibre des classes.',
      'Application de modèles de classification.',
      'Évaluation avec recall, precision et F1-score.',
    ],
  },
];

export const projetsById = Object.fromEntries(projets.map((p) => [p.id, p]));

export const projectSections = [
  { id: 'ia', label: 'IA & Agents', projectIds: ['smart-hire', 'rag-documentaire'] },
  { id: 'fs', label: 'Full-Stack', projectIds: ['ticket-management', 'supplychain-ai'] },
  { id: 'data', label: 'Data Science', projectIds: ['neural-style-transfer', 'netflix-analysis', 'fraude-bancaire'] },
  { id: 'cloud', label: 'Cloud & IoT', projectIds: ['iot-monitoring'] },
];
