import { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa6'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <button
      onClick={scrollTop}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-50 p-3 rounded-full border-2 border-neon bg-neutral-950/80 shadow-glow transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none'
      } hover:shadow-glowSoft hover:scale-105`}
    >
      <FaArrowUp className="text-neon" size={20} />
    </button>
  )
}
