import { SITE } from '../data/site'
import { FaLinkedin, FaEnvelope } from 'react-icons/fa6'

export default function Contact() {
  return (
    <section id="contact" className="section fade-in">
      <div className="container flex flex-col items-center text-center gap-5 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold">Get in Touch</h2>
        <p className="text-neutral-300">I'm always searching for opportunities to grow, don’t hesitate to reach out! The fastest way to reach me is email.</p>
        <div className="flex flex-wrap items-center justify-center gap-5 pt-2">
          <a className="btn btn-primary text-lg hover:shadow-glow" href={`mailto:${SITE.email}`}>
            <FaEnvelope size={22}/> {SITE.email}
          </a>
          <a className="btn text-lg hover:shadow-glow" href={SITE.linkedin} target="_blank" rel="noreferrer">
            <FaLinkedin size={22}/> LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
