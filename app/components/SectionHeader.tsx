import { ScrollReveal } from './ScrollReveal';

interface Props {
  index: number;   // 1-based section number shown as "01"
  eyebrow: string; // small mono label
  title: string;   // large heading
}

export function SectionHeader({ index, eyebrow, title }: Props) {
  return (
    <ScrollReveal>
      <div className="section-header">
        <span className="section-label">
          <span className="section-num">{String(index).padStart(2, '0')}</span>
          {eyebrow}
        </span>
        <h2 className="section-title">{title}</h2>
      </div>
    </ScrollReveal>
  );
}
