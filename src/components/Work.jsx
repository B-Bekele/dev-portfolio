import { projects } from '../data/projects'
import SectionLabel from './SectionLabel'
import HorizonDivider from './HorizonDivider'
import ProjectSpread from './ProjectSpread'

export default function Work() {
  return (
    <section
      id="work"
      aria-labelledby="work-label"
      className="relative overflow-x-clip py-28 md:py-40"
    >
      {/* Ghost numeral bleeding off the right edge this time */}
      <span className="ghost-numeral top-8 -right-10 md:-right-16" aria-hidden="true">
        02
      </span>

      <div className="ed-grid relative">
        <div className="col-span-4 md:col-start-2 md:col-span-10">
          <SectionLabel number="02" title="Selected Work" id="work-label" />
        </div>
      </div>

      {projects.map((project, i) => (
        <div key={project.slug}>
          {i > 0 && <HorizonDivider className="my-8 md:my-14" />}
          <ProjectSpread project={project} index={i} flip={i % 2 === 1} />
        </div>
      ))}
    </section>
  )
}
