import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="divider" />
      <About />
      <div className="divider" />
      <Projects />
      <div className="divider" />
      <Contact />
    </div>
  )
}
