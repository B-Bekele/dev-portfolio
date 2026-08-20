import { SITE } from '../data/site'
import profile from '../assets/profile.jpg'

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-x-clip flex flex-col justify-center pt-20 pb-24 md:pt-0 md:pb-16">
      {/* Full-bleed horizon hairline through the title block's baseline zone */}
      <div className="absolute inset-x-0 bottom-16 md:bottom-[14%] horizon-line-full" aria-hidden="true" />

      <div className="ed-grid relative items-end gap-y-10">
        {/* Byline portrait — in the grid so it aligns with the title block */}
        <div className="col-span-4 md:col-start-9 md:col-span-4 md:row-start-1 md:justify-self-end self-end md:mb-4">
          <div className="relative w-40 sm:w-52 md:w-72">
            <div className="absolute -inset-10 sun-glow rounded-full" aria-hidden="true" />
            <img
              src={profile}
              alt="Bamlak Bekele"
              width="288"
              height="288"
              className="relative w-full aspect-square object-cover -rotate-2 border-2 border-sunset-gold/40 shadow-lift"
            />
          </div>
        </div>

        <div className="col-span-4 md:col-start-2 md:col-span-7 md:row-start-1">
          <p className="kicker text-sunset-amber flex items-center gap-3">
            <span className="horizon-line !w-10" aria-hidden="true" />
            Software Engineer — Computer Science @ Virginia Tech
          </p>
          <h1 className="mt-8">
            <span className="block font-display italic font-medium text-ink-soft text-3xl md:text-4xl mb-3">
              Hi, I'm
            </span>{' '}
            <span
              className="block font-display font-semibold text-ink leading-[1.02] whitespace-nowrap"
              style={{ fontSize: 'clamp(2.5rem, 6.5vw, 5.5rem)' }}
            >
              Bamlak <em className="gradient-text not-italic md:italic">Bekele</em>
            </span>
          </h1>
          <p className="mt-8 max-w-xl text-lg md:text-xl text-ink-soft leading-relaxed">
            {SITE.heroIntro}
          </p>
        </div>
      </div>
    </section>
  )
}
