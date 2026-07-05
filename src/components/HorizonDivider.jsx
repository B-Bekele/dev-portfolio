// Full-bleed horizon hairline between sections. cool=true for the night zone.
export default function HorizonDivider({ cool = false, className = '' }) {
  return (
    <div className={`w-full ${className}`} aria-hidden="true">
      <div className={cool ? 'horizon-line-cool' : 'horizon-line-full'} />
    </div>
  )
}
