import { SITE } from '../data/site'
import SectionLabel from './SectionLabel'
import useReveal from '../hooks/useReveal'

export default function Contact() {
  const ref = useReveal()

  return (
    <section
      id="contact"
      aria-labelledby="contact-label"
      className="relative overflow-x-clip pt-28 md:pt-40 pb-36 md:pb-48 min-h-[95svh] flex flex-col justify-center"
    >
      <span className="ghost-numeral top-8 -left-10 md:-left-16" aria-hidden="true">
        03
      </span>

      <div ref={ref} className="ed-grid relative reveal">
        <div className="col-span-4 md:col-start-2 md:col-span-10">
          <SectionLabel number="03" title="Contact" id="contact-label" />
        </div>

        <h3
          className="col-span-4 md:col-start-2 md:col-span-10 font-display font-semibold text-ink leading-tight"
          style={{ fontSize: 'clamp(2.6rem, 7vw, 6rem)' }}
        >
          Let's build something.
        </h3>

        <p className="col-span-4 md:col-start-2 md:col-span-7 mt-8 text-lg text-ink-soft leading-relaxed">
          I'm always searching for opportunities to grow, don't hesitate to reach out! The
          fastest way to reach me is email.
        </p>

        <div className="col-span-4 md:col-start-2 md:col-span-10 mt-12">
          <a
            href={`mailto:${SITE.email}`}
            className="horizon-underline font-display italic text-2xl sm:text-4xl md:text-5xl text-ink break-all"
          >
            {SITE.email}
          </a>
        </div>
        <p className="col-span-4 md:col-start-2 md:col-span-10 mt-8">
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="link font-medium text-base"
          >
            LinkedIn ↗
          </a>
        </p>
      </div>
    </section>
  )
}
