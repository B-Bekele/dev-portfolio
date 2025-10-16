import { SITE } from '../data/site'
import profile from '../assets/profile.jpg'

export default function Hero() {
  return (
    <section id="hero" className="section fade-in">
      <div className="container grid md:grid-cols-2 items-center gap-6 md:gap-10">
        <div className="order-2 md:order-1">
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight whitespace-nowrap">
            <span className="text-neutral-400">Hi, I’m </span>
            <span className="gradient-text">{SITE.name}</span>.
          </h1>
          <h2 className="mt-3 text-lg md:text-xl font-medium text-accent/90">
            Software Engineer&nbsp;|&nbsp;Computer Science @ Virginia Tech
          </h2>
          <p className="mt-5 text-neutral-300 text-lg md:text-xl max-w-xl">{SITE.heroIntro}</p>
          <div className="flex flex-wrap gap-3 pt-6">
            <a className="btn btn-primary" href="#about">About</a>
            <a className="btn text-lg hover:shadow-glow" href="#projects">Projects</a>
            <a className="btn text-lg hover:shadow-glow" href="#contact">Get in Touch</a>
          </div>
        </div>
        <div className="flex justify-center md:justify-end order-1 md:order-2">
          <div className="relative">
            <img
              src={profile}
              alt="Bamlak Bekele"
              className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-2 border-neutral-800"
            />
            <span
              className="absolute -inset-1 rounded-full border-2 border-neon pulse-ring -z-10"
              style={{ transform: 'translate(14px, 14px)' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
