// Fixed, page-wide sky behind all content. Every layer derives from --sky
// in index.css; this component is pure decoration.
export default function SkyStage() {
  return (
    <div className="sky-stage" aria-hidden="true">
      <div className="sky-dusk" />
      <div className="sky-night" />
      <div className="sky-sun">
        <div className="sky-sun-halo" />
        <div className="sky-sun-core" />
      </div>
      <div className="sky-horizon" />
      <div className="sky-afterglow" />
      <div className="sky-stars" />
      <div className="sky-moon">
        <div className="sky-moon-glow" />
        <div className="sky-moon-disc" />
      </div>
    </div>
  )
}
