import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section
      id="projects"
      className="section fade-in bg-transparent relative z-10"
    >
      <div className="container">
        {/* Section Header */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center md:text-left">
          Featured Projects
        </h2>

        {/* Responsive Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="card glass relative flex flex-col justify-between overflow-hidden transition-transform hover:scale-[1.015] min-h-[320px] sm:min-h-[380px]"
            >
              {/* Project Info */}
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-neutral-300 text-sm sm:text-base line-clamp-4">
                  {project.summary}
                </p>

                {/* Tech Stack Pills */}
                <ul className="flex flex-wrap gap-2 mt-2">
                  {project.stack.map((tech, index) => (
                    <li key={index} className="pill">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              {/* View Details Button (centered) */}
              <div className="flex justify-center mt-6 mb-2 sm:mb-4">
                <Link
                  to={`/projects/${project.slug}`}
                  className="btn btn-primary px-6 py-2 sm:px-8 sm:py-3"
                >
                  View Details
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
