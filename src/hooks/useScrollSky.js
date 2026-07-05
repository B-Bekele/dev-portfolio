import { useEffect } from 'react'

// Drives the page-wide dusk→night transition by writing a single --sky
// custom property (0 = dusk, 1 = night) on <html> once per animation frame.
// All sky layers derive from it in pure CSS (transform/opacity only).
//
// pinned: pass a number (e.g. 0.45 on project pages) to freeze the sky
// instead of tracking scroll. Under prefers-reduced-motion the hook no-ops
// entirely and the CSS media query pins --sky at a static dusk.
export default function useScrollSky(pinned = null) {
  useEffect(() => {
    const root = document.documentElement
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    if (pinned !== null) {
      root.style.setProperty('--sky', String(pinned))
      return () => root.style.removeProperty('--sky')
    }

    let raf = 0
    let max = 1
    const measure = () => {
      max = Math.max(root.scrollHeight - window.innerHeight, 1)
    }
    const update = () => {
      raf = 0
      const progress = Math.min(Math.max(window.scrollY / max, 0), 1)
      // Slight ease so dusk lingers through the hero and night lands by contact
      root.style.setProperty('--sky', String(Math.pow(progress, 0.9)))
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    const onResize = () => {
      measure()
      onScroll()
    }

    measure()
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)
    // Page height changes as images load / routes render
    const ro = new ResizeObserver(onResize)
    ro.observe(document.body)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      ro.disconnect()
      if (raf) cancelAnimationFrame(raf)
      root.style.removeProperty('--sky')
    }
  }, [pinned])
}
