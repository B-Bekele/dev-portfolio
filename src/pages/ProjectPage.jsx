import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/projects'

export default function ProjectPage() {
  const { slug } = useParams()
  const proj = projects.find(p => p.slug === slug)

  if (!proj) {
    return (
      <div className="container py-24">
        <p className="text-neutral-300">Project not found.</p>
        <Link className="btn mt-4" to="/#projects">← Back to projects</Link>
      </div>
    )
  }

  return (
    <div className="container py-16">
      <Link className="btn mb-6" to="/#projects">← Back</Link>
      <h1 className="text-3xl md:text-4xl font-semibold">{proj.title}</h1>
      <p className="text-neutral-300 mt-3">{proj.pageSummary}</p>
      <p className="text-neutral-400 mt-2">{proj.pageSummary2}</p>

      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {proj.screenshots.map((src, i) => (
          <img
            key={i}
            src={src}
            className="w-full rounded-xl border border-neutral-800"
            alt={`${proj.title} screenshot ${i + 1}`}
          />
        ))}
      </div>

      <div className="flex gap-3 mt-8">
        {proj.links.demo && (
          <a
            className="btn btn-primary"
            href={proj.links.demo}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>
        )}
        {proj.links.code && (
          <a
            className="btn"
            href={proj.links.code}
            target="_blank"
            rel="noopener noreferrer"
          >
            Code
          </a>
        )}
      </div>
    </div>
  )
}
