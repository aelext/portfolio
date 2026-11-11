import { Header }            from './components/Header';
import { HeroSection }       from './components/HeroSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection }   from './components/ProjectsSection';
import { SkillsSection }     from './components/SkillsSection';
import { ContactSection }    from './components/ContactSection';
import { Footer }            from './components/Footer';
import { SECTIONS } from '@/config/design';

export default function Home() {
  // Number visible sections in order (01, 02, …)
  const order = [
    SECTIONS.experience && 'experience',
    SECTIONS.projects && 'projects',
    SECTIONS.skills && 'skills',
    SECTIONS.contact && 'contact',
  ].filter(Boolean) as string[];
  const n = (key: string) => order.indexOf(key) + 1;

  return (
    <div id="top" className="page-wrapper">
      <Header />
      <HeroSection />
      <main className="main-content">
        <div className="content-container">
          {SECTIONS.experience && <ExperienceSection index={n('experience')} />}
          {SECTIONS.projects   && <ProjectsSection index={n('projects')} />}
          {SECTIONS.skills     && <SkillsSection index={n('skills')} />}
          {SECTIONS.contact    && <ContactSection index={n('contact')} />}
        </div>
      </main>
      <Footer />
    </div>
  );
}
