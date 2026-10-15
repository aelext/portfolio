/* Personal content for Alex Tang's portfolio. */
import { SECTIONS, LABELS } from './design';

export const ME = {
  firstName: 'Alex',
  lastName: 'Tang',
  role: 'Computational Mathematics Student at UCLA',
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
  description: 'Alex Tang is a UCLA Computational Mathematics student interested in optimization, AI, and mathematical modeling.',
};

export const NAV_LINKS = [
  SECTIONS.experience && { label: LABELS.experience.nav, href: '#experience' },
  SECTIONS.projects && { label: LABELS.projects.nav, href: '#projects' },
  SECTIONS.contact && { label: LABELS.contact.nav, href: '#contact' },
].filter(Boolean) as { label: string; href: string }[];

export const HERO = {
  greeting: "Hi, I'm",
  taglines: ['UCLA Computational Mathematics Student', 'Optimization & Modeling Researcher', 'Hobbyist Developer'] as string[],
  bio: 'I’m a Computational Mathematics student at UCLA exploring optimization, AI, and mathematical models, with work spanning conservation, robotics, and biology.',
  photo: undefined as string | undefined,
  ctas: [
    { label: 'Explore my work →', href: '#projects', primary: true },
    { label: 'Get in touch', href: '#contact', primary: false },
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
    degree: 'B.S. Computational Mathematics',
    graduation: '2026 – Present',
    courses: ['Introduction to Computer Science', 'Introduction to Discrete Structures', 'Linear Algebra'],
  },
  {
    school: 'Amador Valley High School',
    degree: 'Valedictorian · 1 of 646',
    gpa: 'Unweighted 3.98 · Weighted 4.70',
    graduation: '2022 – 2026',
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
}

export const EXPERIENCE: ExperienceEntry[] = [
  {
    company: 'Bruin Software Engineers (BSE)',
    role: 'Health Tech in Hardware Track',
    location: 'UCLA',
    start: '2026',
    end: 'Present',
    bullets: [
      'Collaborating on hardware-integrated health technology solutions within a student engineering team.',
      'Bridging physical sensors and hardware components with software-driven data processing pipelines.',
    ],
    tech: ['Hardware', 'Health Technology', 'Software'],
  },
  {
    company: 'Kumon & Afficient Academy',
    role: 'Mathematics Tutor',
    location: '',
    start: '2024',
    end: '2026',
    bullets: ['Tutored more than 70 students in advanced mathematics curricula through calculus.'],
    tech: ['Mathematics', 'Calculus'],
  },
  {
    company: 'Music4America (M4A)',
    role: 'Co-President · Member since 2019',
    location: 'Pleasanton, CA',
    start: '2024',
    end: '2025',
    bullets: [
      'Organized community events that raised more than $5,000 for local school district music programs.',
      'Helped scale the nonprofit, nearly doubling membership from 127 to 244.',
      'Coordinated and performed in more than 30 biweekly recitals at local senior centers and VA hospitals.',
      'Taught fee-based math camps for middle school students, generating more than $1,000 in fundraising revenue.',
    ],
    tech: ['Community Leadership', 'Music', 'Mathematics'],
  },
  {
    company: 'Codeforces & USACO',
    role: 'Competitive Programmer',
    location: 'Online',
    start: '2024',
    end: 'Present',
    bullets: [
      'Reached Codeforces Expert tier with a rating of 1726.',
      'Promoted to USACO Gold division in 2025.',
      'Qualified for the American Invitational Mathematics Examination (AIME) with a 121.5 on AMC 10A (top 5%).',
    ],
    tech: ['C++', 'Java', 'Algorithms'],
  },
];

export const CONTACT_BLURB = 'I’m interested in research and collaborations at the intersection of computation, optimization, and real-world systems. Feel free to reach out.';

export interface ProjectEntry {
  name: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  featured: boolean;
}

export const PROJECTS: ProjectEntry[] = [
  {
    name: 'Local RAG System',
    description: 'Built a local Retrieval-Augmented Generation system with document embedding and querying. Used open-source LLMs such as Qwen3 to process data locally without external APIs.',
    tech: ['Python', 'ChromaDB', 'Ollama', 'Jupyter'],
    featured: true,
  },
  {
    name: 'Anti-Poaching Model',
    description: 'Applied linear and integer programming to route park rangers through hotspots in Hell’s Gate National Park, Kenya. Built a MySQL database to query and store mathematical model constraints.',
    tech: ['Python', 'OR-Tools', 'Gurobi', 'MySQL'],
    featured: true,
  },
  {
    name: 'Complex Systems Research · SRA, UC Santa Barbara',
    description: 'Used dynamical systems, control theory, and optimization to study complex biological and engineered systems. Modeled the effects of network delay and packet loss on a 3-DOF robotic arm and co-authored a paper on latency degradation thresholds.',
    tech: ['MATLAB', 'Simulink', 'Control Theory', 'Optimization'],
    featured: true,
  },
  {
    name: 'NeuroPass · Toshiba ExploraVision Honorable Mention',
    description: 'Co-authored an AI- and ultrasound-guided quantum-dot drug delivery concept for multiple sclerosis treatment. Recognized with an Honorable Mention, placing in the top 10% of 15,000 entries.',
    tech: ['AI', 'Ultrasound', 'Drug Delivery'],
    featured: false,
  },
  {
    name: 'Mathematical Modeling of Biological Systems · COSMOS, UC Davis',
    description: 'Created ODE models across probability, game theory, network theory, epidemiology, ecology, and physiology, including a model of biomass diffusion across a channel-like landscape.',
    tech: ['R', 'ODEs', 'Mathematical Modeling'],
    featured: false,
  },
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
  tagline: 'Exploring optimization, AI, and mathematical modeling.',
  columns: [
    {
      heading: 'Portfolio',
      links: [
        SECTIONS.experience && { label: LABELS.experience.nav, href: '#experience' },
        SECTIONS.projects && { label: LABELS.projects.nav, href: '#projects' },
        SECTIONS.contact && { label: LABELS.contact.nav, href: '#contact' },
      ].filter(Boolean) as { label: string; href: string }[],
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
