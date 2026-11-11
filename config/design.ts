/* ─────────────────────────────────────────────────────────────────────
   DESIGN CONFIG — Visual settings for the website.
   Edit this file to change colors, layout, animations, and section
   labels. Personal content (name, projects, experience) lives in
   portfolio.ts.

   Fonts: change them in app/layout.tsx (search "Fonts — change them here").
   Next.js requires font names to be compile-time string literals, so they
   can't live here.
   ───────────────────────────────────────────────────────────────────── */

// ── Theme ─────────────────────────────────────────────────────────────
// Only set bg, primary, and accent — all other colors (surface, text,
// borders, pills) are derived automatically. A warning is printed at
// build time if any color combination has poor contrast.
export const THEME = {
  // Change to 'light' to default to light mode on first visit
  defaultMode: 'dark' as 'dark' | 'light',
  // Set to true to hide the theme toggle and lock the site to defaultMode
  disableToggle: false,
  // Browser-level zoom for the whole site (1 = default, 1.25 = 25% bigger)
  scale: 1.15,
  colors: {
    light: {
      bg: '#f6f7fb',
      primary: '#3b3bff',
      accent: '#e8366b',
    },
    dark: {
      bg: '#0a0c12',
      primary: '#22d3ee',
      accent: '#f472b6',
    },
  },
};

// ── Hero design ───────────────────────────────────────────────────────
export const HERO_DESIGN = {
  // showPhoto: false removes the hex frame entirely (no initials, no image)
  showPhoto: true,
  // Faint honeycomb pattern + glow behind the hero
  hexGrid: true,
  // Typing animation for the tagline.
  typing: {
    enabled: true,
    typeSpeed: 65,
    deleteSpeed: 35,
    pauseAfter: 1800,
  },
  // Floating hex particle animation in the hero background.
  particles: {
    enabled: true,
    direction: 'up' as 'up' | 'down' | 'left' | 'right',
  },
};

// ── Section visibility ────────────────────────────────────────────────
// Set any key to false to hide that section from the page and nav.
export const SECTIONS = {
  experience: true,
  projects: true,
  skills: true,
  contact: true,
  showEducation: true,   // show education block inside the Experience section
  educationFirst: true,  // show education above work experience
};

// ── Section labels ────────────────────────────────────────────────────
// `nav` = header nav text, `heading` = large section title on the page.
export const LABELS = {
  experience: {
    nav: 'Experience',
    heading: 'Experience & Leadership',
  },
  work: 'Work & Research',
  leadership: 'Leadership & Extracurriculars',
  education: 'Education',
  projects: {
    nav: 'Projects',
    heading: "Things I've built",
  },
  skills: {
    nav: 'Skills',
    heading: 'Toolkit',
  },
  contact: {
    nav: 'Contact',
    heading: "Let's talk",
  },
};
