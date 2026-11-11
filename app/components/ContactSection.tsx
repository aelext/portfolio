import { CONTACT } from '@/config/portfolio';
import { LABELS } from '@/config/design';
import { ScrollReveal } from './ScrollReveal';
import { SectionHeader } from './SectionHeader';

export function ContactSection({ index = 4 }: { index?: number }) {
  return (
    <section id="contact" className="portfolio-section portfolio-section--last">
      <SectionHeader index={index} eyebrow={LABELS.contact.nav} title={LABELS.contact.heading} />
      <ScrollReveal delay={80}>
        <div className="contact-panel">
          <div>
            <p className="contact-blurb">{CONTACT.blurb}</p>
            <a href={`mailto:${CONTACT.email}`} className="btn-primary">
              Send a message →
            </a>
          </div>
          <div className="contact-links">
            {CONTACT.links.map((link) => {
              const internal = link.href.startsWith('mailto') || link.href.startsWith('tel');
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="contact-link"
                  target={internal ? undefined : '_blank'}
                  rel={internal ? undefined : 'noopener noreferrer'}
                >
                  <span className="contact-link-label">{link.label}</span>
                  <span className="contact-link-value">{link.display}</span>
                  <span className="contact-link-arrow" aria-hidden="true">↗</span>
                </a>
              );
            })}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
