import { SKILLS, HIGHLIGHTS } from '@/config/portfolio';
import { LABELS } from '@/config/design';
import { ScrollReveal } from './ScrollReveal';
import { SectionHeader } from './SectionHeader';

export function SkillsSection({ index = 3 }: { index?: number }) {
  return (
    <section id="skills" className="portfolio-section">
      <SectionHeader index={index} eyebrow={LABELS.skills.nav} title={LABELS.skills.heading} />

      <div className="exp-blocks">
        {HIGHLIGHTS.length > 0 && (
          <div>
            <p className="exp-sub-label">{LABELS.highlights}</p>
            <div className="highlights-grid">
              {HIGHLIGHTS.map((h, i) => (
                <ScrollReveal key={h.label} delay={i * 90}>
                  <div className="highlight-card">
                    <p className="highlight-value">{h.value}</p>
                    <p className="highlight-label">{h.label}</p>
                    <p className="highlight-detail">{h.detail}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        )}

        <div>
          <p className="exp-sub-label">{LABELS.toolkit}</p>
          <div className="skills-grid">
            {SKILLS.map((group, i) => (
              <ScrollReveal key={group.title} delay={i * 90}>
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
        </div>
      </div>
    </section>
  );
}
