import { SITE } from '../data/site'
import SectionLabel from './SectionLabel'
import useReveal from '../hooks/useReveal'

const SKILL_GROUPS = [
  { label: 'Languages', items: ['Python', 'C/C++', 'SQL', 'Java'] },
  { label: 'Data & ML', items: ['Pandas', 'scikit-learn', 'XGBoost', 'PyTorch'] },
  // NBSP inside the parenthetical keeps "(AWS, GCP)" intact when the narrow
  // sidebar wraps it at the lg breakpoint; the break lands after "Deployment".
  { label: 'Backend & Infra', items: ['REST APIs', 'PostgreSQL', 'Docker', 'Cloud Deployment (AWS, GCP)', 'CI/CD'] },
]

export default function About() {
  const ref = useReveal()
  const [standfirst, rest] = SITE.aboutLong.split('\n\n')

  return (
    <section
      id="about"
      aria-labelledby="about-label"
      className="relative overflow-x-clip py-28 md:py-40"
    >
      {/* Giant ghost numeral bleeding off the left edge */}
      <span className="ghost-numeral top-8 -left-10 md:-left-16" aria-hidden="true">
        01
      </span>

      <div ref={ref} className="ed-grid relative reveal">
        <div className="col-span-4 md:col-start-2 md:col-span-10">
          <SectionLabel number="01" title="About" id="about-label" />
        </div>

        <p className="col-span-4 md:col-start-2 md:col-span-7 font-display text-xl md:text-2xl leading-relaxed text-ink">
          {standfirst}
        </p>
        <p className="col-span-4 md:col-start-2 md:col-span-7 mt-6 text-lg text-ink-soft leading-relaxed">
          {rest}
        </p>

        {/* Skills as marginalia, grouped by discipline */}
        <aside className="col-span-4 md:col-start-10 md:col-span-3 mt-12 md:mt-0 md:row-start-2 md:row-span-2">
          <h3 className="kicker text-ink-muted mb-6">Core Skills</h3>
          <div className="space-y-6">
            {SKILL_GROUPS.map((group) => (
              <div key={group.label}>
                <h4 className="font-mono text-[10px] tracking-[0.3em] uppercase text-sunset-amber">
                  {group.label}
                </h4>
                <ul className="mt-2 space-y-1">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm text-ink-soft leading-snug">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  )
}
