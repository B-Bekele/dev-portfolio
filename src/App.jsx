import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import SkyStage from './components/SkyStage'
import Grain from './components/Grain'
import RailNav from './components/RailNav'
import Home from './pages/Home'
import ProjectPage from './pages/ProjectPage'
import useScrollSky from './hooks/useScrollSky'

// Scrolls to top (or to the #hash target) on route change
function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView()
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export default function App() {
  const { pathname } = useLocation()
  // Project pages are short — pin the sky at mid-dusk instead of tracking scroll
  useScrollSky(pathname.startsWith('/projects/') ? 0.45 : null)

  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <SkyStage />
      <Grain />
      <ScrollManager />
      <RailNav />
      <main id="main" className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:slug" element={<ProjectPage />} />
        </Routes>
      </main>
    </>
  )
}
