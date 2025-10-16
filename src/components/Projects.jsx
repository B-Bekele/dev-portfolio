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
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Featured Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="card glass aspect-[4/3] relative flex flex-col justify-between transition-transform hover:scale-[1.015]"
            >
              {/* Project Info */}
              <div>
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-2 text-neutral-300 line-clamp-4">
                  {project.summary}
                </p>

                <ul className="flex flex-wrap gap-2 mt-4">
                  {project.stack.map((tech, index) => (
                    <li key={index} className="pill">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              {/* View Details Button */}
              <div className="absolute left-1/2 bottom-1/4 -translate-x-1/2 transform">
                <Link
                  to={`/projects/${project.slug}`}
                  className="btn btn-primary"
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
