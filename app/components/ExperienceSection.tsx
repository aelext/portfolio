import { EXPERIENCE, EDUCATION, type ExperienceEntry } from '@/config/portfolio';
import { LABELS, SECTIONS } from '@/config/design';
import { ScrollReveal } from './ScrollReveal';
import { SectionHeader } from './SectionHeader';

function dateRange(start: string, end: string) {
  return start === end ? start : `${start} – ${end}`;
}

function Timeline({ label, entries }: { label: string; entries: ExperienceEntry[] }) {
  if (entries.length === 0) return null;
  return (
    <div>
      <p className="exp-sub-label">{label}</p>
      <ol className="timeline">
        {entries.map((entry, i) => (
          <li key={`${entry.company}-${entry.role}`} className="timeline-item">
            <span className="timeline-node" aria-hidden="true" />
            <ScrollReveal delay={i * 70}>
              <div className="exp-card">
                <div className="exp-meta">
                  <div className="exp-meta-left">
                    <p className="exp-role">{entry.role}</p>
                    <p className="exp-company">
                      {entry.company}
                      {entry.location && <span className="exp-location"> · {entry.location}</span>}
                    </p>
                  </div>
                  <span className="exp-dates">{dateRange(entry.start, entry.end)}</span>
                </div>
                {entry.bullets.length > 0 && (
                  <ul className="exp-bullets">
                    {entry.bullets.map((bullet, j) => (
                      <li key={j}>{bullet}</li>
                    ))}
                  </ul>
                )}
                {entry.tech.length > 0 && (
                  <div className="tech-pill-row">
                    {entry.tech.map((t) => (
                      <span key={t} className="tech-pill">{t}</span>
                    ))}
                  </div>
                )}
              </div>
            </ScrollReveal>
          </li>
        ))}
      </ol>
    </div>
  );
}

function EducationBlock() {
  return (
    <div>
      <p className="exp-sub-label">{LABELS.education}</p>
      <div className="edu-grid">
        {EDUCATION.map((entry, i) => (
          <ScrollReveal key={entry.school} delay={i * 80}>
            <div className="exp-card edu-card">
              <span className="exp-dates">{entry.graduation}</span>
              <p className="exp-role">{entry.school}</p>
              <p className="exp-company">
                {entry.degree}
                {entry.minor && ` · Minor in ${entry.minor}`}
              </p>
              {entry.gpa && <p className="edu-gpa">GPA {entry.gpa}</p>}
              {entry.courses.length > 0 && (
                <div className="tech-pill-row">
                  {entry.courses.map((c) => (
                    <span key={c} className="tech-pill">{c}</span>
                  ))}
                </div>
              )}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}

export function ExperienceSection({ index = 1 }: { index?: number }) {
  const work = EXPERIENCE.filter((e) => e.group === 'work');
  const leadership = EXPERIENCE.filter((e) => e.group === 'leadership');
  const edu = SECTIONS.showEducation ? <EducationBlock /> : null;

  return (
    <section id="experience" className="portfolio-section">
      <SectionHeader index={index} eyebrow={LABELS.experience.nav} title={LABELS.experience.heading} />
      <div className="exp-blocks">
        {SECTIONS.educationFirst && edu}
        <Timeline label={LABELS.work} entries={work} />
        <Timeline label={LABELS.leadership} entries={leadership} />
        {!SECTIONS.educationFirst && edu}
      </div>
    </section>
  );
}
