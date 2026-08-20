import Hero from '../components/Hero'
import About from '../components/About'
import Work from '../components/Work'
import Contact from '../components/Contact'
import HorizonDivider from '../components/HorizonDivider'
import { SITE } from '../data/site'
import usePageMeta from '../hooks/usePageMeta'

export default function Home() {
  usePageMeta({ title: `${SITE.name} — Portfolio`, canonicalPath: '/' })

  return (
    <>
      <Hero />
      <About />
      <HorizonDivider />
      <Work />
      <HorizonDivider cool />
      <Contact />
      {/* Closing rule — punctuation rather than a footer, so the page ends
          deliberately instead of just running out. */}
      <HorizonDivider cool className="pb-28 md:pb-40" />
    </>
  )
}
