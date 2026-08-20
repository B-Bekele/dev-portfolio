import { Link } from 'react-router-dom'
import { SITE } from '../data/site'
import usePageMeta from '../hooks/usePageMeta'

// Single 404 for both unknown routes and unknown project slugs. Deliberately
// has no canonical URL — these are soft 404s (Vercel rewrites every path to
// index.html and returns 200), so noindex is what keeps them out of search.
export default function NotFound() {
  usePageMeta({ title: `Page not found — ${SITE.name}`, noindex: true })

  return (
    <section className="ed-grid min-h-[70svh] pt-32 md:pt-40">
      <div className="col-span-4 md:col-start-2 md:col-span-8">
        <p className="section-number">404</p>
        <h1 className="font-display font-semibold text-4xl md:text-5xl text-ink mt-4">
          Page not found
        </h1>
        <div className="horizon-line mt-6" aria-hidden="true" />
        <p className="mt-8 text-lg text-ink-soft leading-relaxed">
          That page doesn’t exist, or it may have moved.
        </p>
        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
          <Link to="/" className="link font-medium">← Back home</Link>
          <Link to="/#work" className="link font-medium">Selected Work →</Link>
        </div>
      </div>
    </section>
  )
}
