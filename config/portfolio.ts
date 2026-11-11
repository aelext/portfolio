/* Personal content for Alex Tang's portfolio. */
import { SECTIONS, LABELS } from './design';

export const ME = {
  firstName: 'Alex',
  lastName: 'Tang',
  role: 'Mathematics of Computation Student at UCLA',
  email: 'yalext08@ucla.edu',
  phone: '925-596-5967',
  github: 'aelext',
  linkedin: 'yalext',
  resumePath: '/resume.pdf',
};

const GITHUB_URL = ME.github ? `https://github.com/${ME.github}` : '';
const LINKEDIN_URL = ME.linkedin ? `https://www.linkedin.com/in/${ME.linkedin}/` : '';
const EMAIL_HREF = `mailto:${ME.email}`;
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000');

export const PERSON = {
  firstName: ME.firstName,
  lastName: ME.lastName,
  fullName: `${ME.firstName} ${ME.lastName}`,
  role: ME.role,
};

export const SITE = {
  url: SITE_URL,
  title: `${PERSON.fullName} | ${PERSON.role}`,
  titleSuffix: `| ${PERSON.fullName}`,
  description:
    'Alex Tang is a UCLA Mathematics of Computation student working on optimization, mathematical modeling, embedded ML, and competitive programming.',
};

export const NAV_LINKS = [
  SECTIONS.experience && { label: LABELS.experience.nav, href: '#experience' },
  SECTIONS.projects && { label: LABELS.projects.nav, href: '#projects' },
  SECTIONS.skills && { label: LABELS.skills.nav, href: '#skills' },
  SECTIONS.contact && { label: LABELS.contact.nav, href: '#contact' },
].filter(Boolean) as { label: string; href: string }[];

export const HERO = {
  greeting: "Hi, I'm",
  taglines: [
    'Mathematics of Computation @ UCLA',
    'Optimization & Modeling',
    'Codeforces Expert · 1726',
    'Embedded ML Tinkerer',
  ] as string[],
  bio: 'I’m a Mathematics of Computation student at UCLA who likes turning math into working systems — from integer programs that route park rangers to a TinyML step counter streaming over Bluetooth.',
  photo: '/portrait.png',
  status: 'Seeking Summer 2027 SWE / research internships',
  ctas: [
    { label: 'Explore my work →', href: '#projects', primary: true },
    { label: 'Download résumé', href: ME.resumePath, primary: false },
  ],
  // Small highlight tiles under the hero text. Set to [] to hide.
  stats: [
    { value: '1726', label: 'Codeforces · Expert' },
    { value: 'Gold', label: 'USACO division' },
    { value: '1 / 641', label: 'Valedictorian' },
    { value: '$6K+', label: 'Raised for music ed' },
  ],
};

export interface EducationEntry {
  school: string;
  degree: string;
  minor?: string;
  gpa?: string;
  graduation: string;
  courses: string[];
}

export const EDUCATION: EducationEntry[] = [
  {
    school: 'University of California, Los Angeles',
    degree: 'B.S. Mathematics of Computation',
    graduation: 'Expected Jun 2029',
    courses: ['Introduction to Computer Science', 'Introduction to Discrete Structures'],
  },
  {
    school: 'Amador Valley High School',
    degree: 'Valedictorian · 1 of 641',
    gpa: '4.70 W / 3.98 UW',
    graduation: 'Aug 2022 – Jun 2026',
    courses: [],
  },
];

export interface ExperienceEntry {
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  bullets: string[];
  tech: string[];
  // 'work' = Work & Research, 'leadership' = Leadership & Extracurriculars
  group: 'work' | 'leadership';
}

export const EXPERIENCE: ExperienceEntry[] = [
  // ── Work & Research ────────────────────────────────────────────────
  {
    company: 'Kumon',
    role: 'English / Mathematics Tutor',
    location: '',
    start: 'Jul 2026',
    end: 'Sep 2026',
    bullets: ['Tutored 50+ students in advanced mathematics curricula up to calculus.'],
    tech: ['Mathematics', 'Calculus', 'Teaching'],
    group: 'work',
  },
  {
    company: 'SRA, UC Santa Barbara',
    role: 'Complex Systems Research',
    location: 'Santa Barbara, CA',
    start: 'Jun 2025',
    end: 'Jul 2025',
    bullets: [
      'Modeled the physical effects of network delay and packet loss on 3-DOF robotic arm operational accuracy.',
      'Co-authored a research paper detailing the degradation thresholds of network latency.',
    ],
    tech: ['MATLAB', 'Simulink', 'Control Systems'],
    group: 'work',
  },
  {
    company: 'COSMOS, UC Davis',
    role: 'Mathematical Modeling of Biological Systems',
    location: 'Davis, CA',
    start: 'Jul 2024',
    end: 'Jul 2024',
    bullets: [
      'Created ODE models to simulate real-world phenomena in epidemiology, ecology, and physiology.',
      'Developed a mathematical model simulating biomass diffusion across channel-like landscapes.',
    ],
    tech: ['R', 'ODEs', 'Mathematical Modeling'],
    group: 'work',
  },
  {
    company: 'Afficient Academy',
    role: 'English / Mathematics Tutor',
    location: '',
    start: 'Apr 2024',
    end: 'Jun 2024',
    bullets: ['Tutored 20+ students in advanced mathematics curricula up to calculus.'],
    tech: ['Mathematics', 'Calculus', 'Teaching'],
    group: 'work',
  },

  // ── Leadership & Extracurriculars ──────────────────────────────────
  {
    company: 'Bruin Software Engineers (BSE)',
    role: 'Funding Lead',
    location: 'UCLA',
    start: 'Nov 2026',
    end: 'Present',
    bullets: [
      'Research and apply for UCLA and SOLE grants and manage corporate sponsor relationships.',
      'Maintain the sponsorship packet and member resume book distributed to industry partners.',
    ],
    tech: ['Fundraising', 'Sponsorships', 'Operations'],
    group: 'leadership',
  },
  {
    company: 'Music4America (M4A)',
    role: 'Co-President · Member 2019 – 2026',
    location: 'Pleasanton, CA',
    start: '2024',
    end: '2025',
    bullets: [
      'Scaled non-profit operations, nearly doubling membership from 127 to 244 members.',
      'Coordinated and performed in 30+ musical recitals at local senior centers and VA hospitals.',
      'Directed community events and math camps, raising over $6,000 for local school music programs.',
    ],
    tech: ['Nonprofit Leadership', 'Cello', 'Community'],
    group: 'leadership',
  },
  {
    company: 'Codeforces & USACO',
    role: 'Competitive Programmer',
    location: 'Online',
    start: '2024',
    end: 'Present',
    bullets: [
      'Achieved a Codeforces rating of 1726 (Expert tier); promoted to USACO Gold division (2025).',
      'American Invitational Mathematics Exam (AIME) qualifier — 121.5 on AMC 10A (top 5%).',
    ],
    tech: ['C++', 'Java', 'Algorithms'],
    group: 'leadership',
  },
];

export const CONTACT_BLURB =
  'I’m looking for Summer 2027 internships and research opportunities in software, optimization, and applied math. If you’re working on something interesting, I’d love to hear about it.';

export interface ProjectEntry {
  name: string;
  org?: string;      // shown as a small label above the name
  period?: string;   // e.g. '2026 – Present'
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  featured: boolean;
  inProgress?: boolean;
}

export const PROJECTS: ProjectEntry[] = [
  {
    name: 'BLE Wearable Step Counter',
    org: 'Bruin Software Engineers',
    period: '2026 – Present',
    description:
      'A wearable step counter in Arduino C++ that streams live step counts to a phone over a custom BLE service. Steps are detected with accelerometer thresholds and a 300 ms debounce, gated by an on-device TinyML model.',
    tech: ['C++', 'Arduino', 'Edge Impulse', 'BLE'],
    featured: true,
    inProgress: true,
  },
  {
    name: 'E-Sports Predictive Analytics',
    org: 'DataRes',
    period: '2026 – Present',
    description:
      'EDA on multiplayer match data to quantify the impact of spatial advantages and resources, then training ML models on how early-game momentum and player distributions predict final outcomes.',
    tech: ['Python', 'R', 'Machine Learning'],
    featured: true,
    inProgress: true,
  },
  {
    name: 'Local RAG System',
    org: 'Independent Project',
    period: '2026',
    description:
      'A local Retrieval-Augmented Generation system with document embedding and querying, running open-source LLMs like Qwen3 for local data processing without relying on external APIs.',
    tech: ['Python', 'ChromaDB', 'Ollama', 'Jupyter'],
    featured: false,
  },
  {
    name: 'Anti-Poaching Ranger Routing',
    org: 'Independent Research',
    period: '2023 – 2026',
    description:
      'Applied linear and integer programming to route park rangers through poaching hotspots in Hell’s Gate National Park, backed by a MySQL database that stores and queries the model’s constraint data.',
    tech: ['Python', 'OR-Tools', 'Gurobi', 'MySQL'],
    featured: false,
  },
  {
    name: 'NeuroPass: Precision Therapy for MS',
    org: 'Toshiba ExploraVision · Honorable Mention',
    period: '2025',
    description:
      'Co-authored an AI- and ultrasound-guided quantum-dot drug delivery concept for Multiple Sclerosis, earning an Honorable Mention (top 10% of 15,000 entries).',
    tech: ['AI', 'Ultrasound', 'Biomedical'],
    featured: false,
  },
];

export interface SkillGroup {
  title: string;
  items: string[];
}

export const SKILLS: SkillGroup[] = [
  { title: 'Languages', items: ['Java', 'Python', 'C++', 'R', 'MATLAB'] },
  { title: 'Optimization & Data', items: ['OR-Tools', 'Gurobi', 'MySQL', 'Jupyter'] },
  { title: 'AI / ML', items: ['ChromaDB', 'Ollama', 'Edge Impulse (TinyML)'] },
  { title: 'Hardware & Simulation', items: ['Arduino', 'Bluetooth LE', 'Simulink'] },
];

export const SOCIAL_LINKS = [
  { label: 'GitHub', href: GITHUB_URL },
  { label: 'LinkedIn', href: LINKEDIN_URL },
  { label: 'Email', href: EMAIL_HREF },
].filter((link) => link.href);

export const CONTACT = {
  email: ME.email,
  blurb: CONTACT_BLURB,
  links: [
    { label: 'Email', href: EMAIL_HREF, display: ME.email },
    { label: 'GitHub', href: GITHUB_URL, display: `github.com/${ME.github}` },
    { label: 'LinkedIn', href: LINKEDIN_URL, display: `linkedin.com/in/${ME.linkedin}` },
    { label: 'Phone', href: `tel:${ME.phone.replaceAll('-', '')}`, display: ME.phone },
    { label: 'Resume', href: ME.resumePath, display: 'Download PDF' },
  ],
};

export const FOOTER = {
  tagline: 'Turning math into working systems — optimization, modeling, and embedded ML.',
  columns: [
    {
      heading: 'Portfolio',
      links: NAV_LINKS,
    },
    {
      heading: 'Connect',
      links: [
        GITHUB_URL && { label: 'GitHub', href: GITHUB_URL },
        LINKEDIN_URL && { label: 'LinkedIn', href: LINKEDIN_URL },
        { label: 'Email', href: EMAIL_HREF },
        { label: 'Resume', href: ME.resumePath },
      ].filter(Boolean) as { label: string; href: string }[],
    },
  ],
};
