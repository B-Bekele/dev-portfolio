import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal'

// One full-width editorial project spread. flip=false: text left / images
// bleeding off the right edge. flip=true: mirrored.
export default function ProjectSpread({ project, index, flip = false }) {
  const ref = useReveal()
  const num = String(index + 1).padStart(2, '0')

  const text = (
    <div className={`col-span-4 md:col-span-5 ${flip ? 'md:col-start-8' : 'md:col-start-2'} flex flex-col justify-center`}>
      <p className="font-mono text-xs tracking-[0.3em] text-sunset-amber uppercase">№ {num}</p>
      <h3
        className="font-display font-semibold text-ink mt-3 leading-tight"
        style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}
      >
        {project.title}
      </h3>
      <div className="horizon-line mt-4" aria-hidden="true" />
      <p className="mt-4 text-base text-ink-soft leading-relaxed">{project.summary}</p>
      <p className="kicker text-ink-muted mt-4 !tracking-[0.2em]">
        {project.stack.join(' · ')}
      </p>
      <div className="mt-5 flex flex-wrap gap-x-8 gap-y-3 text-base">
        <Link to={`/projects/${project.slug}`} className="link font-medium">
          Case study →
        </Link>
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
    </div>
  )

  const images = (
    <div className={`col-span-4 md:col-span-6 ${flip ? 'md:col-start-1' : 'md:col-start-7'} relative mt-10 md:mt-0`}>
      <Link
        to={`/projects/${project.slug}`}
        aria-label={`${project.title} — case study`}
        className={`block relative transition-transform duration-300 hover:-translate-y-1 ${
          flip ? 'md:-ml-8 lg:-ml-12' : 'md:-mr-8 lg:-mr-12'
        }`}
      >
        <img
          src={project.screenshots[0]}
          alt={`${project.title} screenshot 1`}
          loading="lazy"
          decoding="async"
          className={`w-[92%] ${flip ? 'mr-auto -rotate-1' : 'ml-auto rotate-1'} border border-ink/10 shadow-lift rounded-lg`}
        />
        <img
          src={project.screenshots[1]}
          alt={`${project.title} screenshot 2`}
          loading="lazy"
          decoding="async"
          className={`absolute w-[58%] -bottom-6 ${
            flip ? '-right-2 rotate-[1.5deg]' : '-left-2 -rotate-[1.5deg]'
          } border border-ink/10 shadow-lift rounded-lg`}
        />
      </Link>
    </div>
  )

  return (
    <article ref={ref} className="ed-grid reveal py-14 md:py-20 items-center">
      {flip ? (
        <>
          {images}
          {text}
        </>
      ) : (
        <>
          {text}
          {images}
        </>
      )}
    </article>
  )
}
