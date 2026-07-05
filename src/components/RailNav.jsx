import { Link, useLocation } from 'react-router-dom'
import { FaLinkedin, FaEnvelope } from 'react-icons/fa6'
import { SITE } from '../data/site'
import useActiveSection from '../hooks/useActiveSection'

const SECTIONS = [
  { id: 'about', number: '01', label: 'About' },
  { id: 'work', number: '02', label: 'Work' },
  { id: 'contact', number: '03', label: 'Contact' },
]

export default function RailNav() {
  const { pathname } = useLocation()
  const onHome = pathname === '/'
  const active = useActiveSection(onHome ? SECTIONS.map((s) => s.id) : [])

  return (
    <>
      {/* Desktop: fixed left rail */}
      <nav
        aria-label="Sections"
        className="hidden lg:flex fixed left-0 top-0 bottom-0 w-20 z-50 flex-col items-center justify-between py-8 border-r border-ink/10"
      >
        <Link
          to="/"
          className="font-display italic text-2xl text-ink hover:text-sunset-gold transition-colors"
          aria-label="Bamlak Bekele — home"
          onClick={() => onHome && window.scrollTo({ top: 0 })}
        >
          BB
        </Link>

        <ul className="flex flex-col items-center gap-10">
          {SECTIONS.map((s) => {
            const isActive = onHome && active === s.id
            return (
              <li key={s.id}>
                <Link
                  to={`/#${s.id}`}
                  className={`group flex flex-col items-center gap-3 transition-opacity ${
                    isActive ? 'opacity-100' : 'opacity-50 hover:opacity-90'
                  }`}
                >
                  <span
                    className={`h-[2px] w-4 rounded-full transition-colors ${
                      isActive ? 'bg-sunset-amber' : 'bg-ink/30 group-hover:bg-ink/60'
                    }`}
                    aria-hidden="true"
                  />
                  <span className="font-mono text-xs tracking-[0.3em] text-ink">{s.number}</span>
                  <span
                    className="font-mono text-[10px] tracking-[0.3em] uppercase text-ink-soft"
                    style={{ writingMode: 'vertical-rl' }}
                  >
                    {s.label}
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>

        <div className="flex flex-col items-center gap-5">
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-ink-soft hover:text-accent transition-colors"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href={`mailto:${SITE.email}`}
            aria-label="Email"
            className="text-ink-soft hover:text-accent transition-colors"
          >
            <FaEnvelope size={18} />
          </a>
        </div>
      </nav>

      {/* Mobile: minimal translucent top strip */}
      <nav
        aria-label="Sections"
        className="lg:hidden fixed top-0 inset-x-0 z-50 flex items-center justify-between px-5 py-3 bg-black/25 backdrop-blur-md border-b border-ink/10"
      >
        <Link to="/" className="font-display italic text-xl text-ink" aria-label="Bamlak Bekele — home">
          BB
        </Link>
        <ul className="flex items-center gap-6">
          {SECTIONS.map((s) => (
            <li key={s.id}>
              <Link
                to={`/#${s.id}`}
                className={`font-mono text-xs tracking-[0.25em] transition-opacity ${
                  onHome && active === s.id ? 'text-sunset-amber' : 'text-ink-soft'
                }`}
              >
                {s.number}
                <span className="sr-only"> {s.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
