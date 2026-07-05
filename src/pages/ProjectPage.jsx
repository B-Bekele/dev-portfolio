import { Link, useParams } from 'react-router-dom'
import { projects } from '../data/projects'

export default function ProjectPage() {
  const { slug } = useParams()
  const index = projects.findIndex((p) => p.slug === slug)
  const project = projects[index]

  if (!project) {
    return (
      <section className="ed-grid min-h-[70svh] pt-32 md:pt-40">
        <div className="col-span-4 md:col-start-2 md:col-span-8">
          <p className="section-number">404</p>
          <h1 className="font-display font-semibold text-4xl md:text-5xl text-ink mt-4">
            Project not found
          </h1>
          <div className="horizon-line mt-6" aria-hidden="true" />
          <p className="mt-8">
            <Link to="/#work" className="link font-medium">← Selected Work</Link>
          </p>
        </div>
      </section>
    )
  }

  const num = String(index + 1).padStart(2, '0')

  return (
    <article className="overflow-x-clip pt-28 md:pt-36 pb-24">
      <header className="ed-grid">
        <div className="col-span-4 md:col-start-2 md:col-span-9">
          <p className="mb-10">
            <Link to="/#work" className="link font-medium text-sm">← Selected Work</Link>
          </p>
          <p className="font-mono text-xs tracking-[0.3em] text-sunset-amber uppercase">№ {num}</p>
          <h1
            className="font-display font-semibold text-ink mt-4 leading-tight"
            style={{ fontSize: 'clamp(2.4rem, 6vw, 4.5rem)' }}
          >
            {project.title}
          </h1>
          <div className="horizon-line mt-6" aria-hidden="true" />
        </div>

        <p className="col-span-4 md:col-start-2 md:col-span-8 mt-10 font-display text-2xl md:text-[1.7rem] leading-relaxed text-ink">
          {project.pageSummary}
        </p>
        <p className="col-span-4 md:col-start-2 md:col-span-8 mt-6 text-lg text-ink-soft leading-relaxed">
          {project.pageSummary2}
        </p>

        <p className="col-span-4 md:col-start-2 md:col-span-9 kicker text-ink-muted mt-10 !tracking-[0.2em]">
          {project.stack.join(' · ')}
        </p>

        <div className="col-span-4 md:col-start-2 md:col-span-9 mt-8 flex flex-wrap gap-x-8 gap-y-3">
          {project.links.demo && (
            <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="link font-medium">
              Live demo ↗
            </a>
          )}
          {project.links.code && (
            <a href={project.links.code} target="_blank" rel="noopener noreferrer" className="link font-medium">
              Code ↗
            </a>
          )}
        </div>
      </header>

      <div className="ed-grid mt-16 md:mt-24 gap-y-16 md:gap-y-24">
        {project.screenshots.map((src, i) => (
          <figure
            key={src}
            className={`col-span-4 md:col-span-9 ${i % 2 === 0 ? 'md:col-start-2 md:rotate-[0.5deg]' : 'md:col-start-3 md:-rotate-[0.5deg]'}`}
          >
            <img
              src={src}
              alt={`${project.title} screenshot ${i + 1}`}
              loading="lazy"
              decoding="async"
              className="w-full border border-ink/10 shadow-lift rounded-lg"
            />
            <figcaption className="font-mono text-[10px] tracking-[0.3em] uppercase text-ink-muted mt-4">
              Fig. {String(i + 1).padStart(2, '0')} — {project.title}
            </figcaption>
          </figure>
        ))}
      </div>
    </article>
  )
}
