import { SITE } from '../data/site'
import SectionLabel from './SectionLabel'
import useReveal from '../hooks/useReveal'

const SKILLS = [
  'Python',
  'SQL',
  'Java',
  'Pandas',
  'NumPy',
  'AI / Machine Learning (scikit-learn, TensorFlow, PyTorch)',
  'Data Visualization (Matplotlib, Plotly)',
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

        {/* Skills as marginalia */}
        <aside className="col-span-4 md:col-start-10 md:col-span-3 mt-12 md:mt-0 md:row-start-2 md:row-span-2">
          <h3 className="kicker text-ink-muted mb-6">Core Skills</h3>
          <ul className="space-y-4">
            {SKILLS.map((skill, i) => (
              <li key={skill} className="flex items-baseline gap-3">
                <span className="font-mono text-xs text-sunset-amber shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="horizon-line !w-3 !h-px shrink-0 translate-y-[-3px]" aria-hidden="true" />
                <span className="text-sm text-ink-soft leading-snug">{skill}</span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  )
}
