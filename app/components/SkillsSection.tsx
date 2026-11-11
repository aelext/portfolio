import { SKILLS } from '@/config/portfolio';
import { LABELS } from '@/config/design';
import { ScrollReveal } from './ScrollReveal';
import { SectionHeader } from './SectionHeader';

export function SkillsSection({ index = 3 }: { index?: number }) {
  return (
    <section id="skills" className="portfolio-section">
      <SectionHeader index={index} eyebrow={LABELS.skills.nav} title={LABELS.skills.heading} />
      <div className="skills-grid">
        {SKILLS.map((group, i) => (
          <ScrollReveal key={group.title} delay={i * 70}>
            <div className="skill-card">
              <p className="skill-title">{group.title}</p>
              <div className="tech-pill-row">
                {group.items.map((item) => (
                  <span key={item} className="tech-pill">{item}</span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
