// Numbered editorial section kicker: "01 — ABOUT" + short horizon rule.
export default function SectionLabel({ number, title, id }) {
  return (
    <div className="mb-10 md:mb-14">
      <h2 id={id} className="section-number flex items-baseline gap-3">
        <span className="text-sunset-amber">{number}</span>
        <span className="text-ink-muted">—</span>
        <span className="text-ink tracking-[0.35em]">{title}</span>
      </h2>
      <div className="horizon-line mt-4" aria-hidden="true" />
    </div>
  )
}
