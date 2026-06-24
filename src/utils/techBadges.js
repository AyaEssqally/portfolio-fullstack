export const techFamilies = {
  ia: { bg: '#EDEBFF', text: '#6D5DFB', border: '#DDD6FE' },
  backend: { bg: '#EAF3FF', text: '#2563EB', border: '#BFDBFE' },
  frontend: { bg: '#FFF1EA', text: '#E76F51', border: '#FDE8DC' },
  database: { bg: '#E6F7F4', text: '#2CB7A4', border: '#B8EBE3' },
  devops: { bg: '#EEF2F7', text: '#475569', border: '#E2E8F0' },
};

const techToFamily = {
  Python: 'ia',
  SQL: 'database',
  JavaScript: 'frontend',
  Gemini: 'ia',
  Ollama: 'ia',
  pdfplumber: 'ia',
  spaCy: 'ia',
  SentenceTransformers: 'ia',
  Vite: 'frontend',
  Nginx: 'devops',
  TypeScript: 'frontend',
  Java: 'backend',
  React: 'frontend',
  Angular: 'frontend',
  HTML: 'frontend',
  CSS: 'frontend',
  'Tailwind CSS': 'frontend',
  FastAPI: 'backend',
  'Spring Boot': 'backend',
  'REST API': 'backend',
  WebSocket: 'backend',
  PostgreSQL: 'database',
  MongoDB: 'database',
  Redis: 'database',
  'Machine Learning': 'ia',
  'Deep Learning': 'ia',
  NLP: 'ia',
  LLM: 'ia',
  RAG: 'ia',
  LangChain: 'ia',
  LangGraph: 'ia',
  FAISS: 'ia',
  'Sentence Transformers': 'ia',
  'Power BI': 'ia',
  Git: 'devops',
  Docker: 'devops',
  Kubernetes: 'devops',
  'CI/CD': 'devops',
  Jira: 'devops',
  'Agile Scrum': 'devops',
  PyTorch: 'ia',
  VGG19: 'ia',
  'Computer Vision': 'ia',
  Statistiques: 'ia',
  "Tests d'hypothèses": 'ia',
  'Random Forest': 'ia',
  'Isolation Forest': 'ia',
  "Détection d'anomalies": 'ia',
  RabbitMQ: 'devops',
  MQTT: 'devops',
  'Java 21': 'backend',
};

export const categoryStyles = {
  'IA & Agents': { bg: '#EDEBFF', text: '#6D5DFB', border: '#DDD6FE' },
  'Full-Stack': { bg: '#EAF3FF', text: '#2563EB', border: '#BFDBFE' },
  'Data Science': { bg: '#F3E8FF', text: '#7C3AED', border: '#E9D5FF' },
  'Cloud & IoT': { bg: '#EEF2F7', text: '#475569', border: '#E2E8F0' },
};

export const skillCategoryStyles = {
  Langages: { family: 'backend', cardBg: 'bg-[#EAF3FF]/40', iconBg: 'bg-[#EAF3FF]', iconText: 'text-[#2563EB]' },
  Frontend: { family: 'frontend', cardBg: 'bg-[#FFF1EA]/40', iconBg: 'bg-[#FFF1EA]', iconText: 'text-[#E76F51]' },
  Backend: { family: 'backend', cardBg: 'bg-[#EAF3FF]/40', iconBg: 'bg-[#EAF3FF]', iconText: 'text-[#2563EB]' },
  'Bases de données': { family: 'database', cardBg: 'bg-[#E6F7F4]/40', iconBg: 'bg-[#E6F7F4]', iconText: 'text-[#2CB7A4]' },
  'Data & IA': { family: 'ia', cardBg: 'bg-[#EDEBFF]/40', iconBg: 'bg-[#EDEBFF]', iconText: 'text-[#6D5DFB]' },
  'DevOps & outils': { family: 'devops', cardBg: 'bg-[#EEF2F7]/60', iconBg: 'bg-[#EEF2F7]', iconText: 'text-[#475569]' },
};

function inferFamily(tech) {
  const key = tech.trim();
  if (techToFamily[key]) return techToFamily[key];

  const lower = key.toLowerCase();
  if (/react|angular|vue|html|css|tailwind|typescript|javascript|frontend|interface/.test(lower)) {
    return 'frontend';
  }
  if (/fastapi|spring|java|api|websocket|backend|rest/.test(lower)) return 'backend';
  if (/postgres|mongo|redis|sql|database|faiss/.test(lower)) return 'database';
  if (/docker|kubernetes|git|ci\/cd|mqtt|rabbit|devops|cloud/.test(lower)) return 'devops';
  if (/rag|lang|llm|ml|ai|pytorch|python|data|nlp|agent|vgg|forest|stat/.test(lower)) return 'ia';

  return 'devops';
}

export function getTechStyle(tech, fallbackFamily) {
  const family = fallbackFamily || inferFamily(tech);
  return techFamilies[family] || techFamilies.devops;
}
