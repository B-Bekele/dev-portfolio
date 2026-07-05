import Hero from '../components/Hero'
import About from '../components/About'
import Work from '../components/Work'
import Contact from '../components/Contact'
import HorizonDivider from '../components/HorizonDivider'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <HorizonDivider />
      <Work />
      <HorizonDivider cool />
      <Contact />
    </>
  )
}
