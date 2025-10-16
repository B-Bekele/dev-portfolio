import { SITE } from '../data/site'

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800">
      <div className="container py-6 text-sm text-neutral-400 flex flex-wrap items-center justify-between">
        <span>© {new Date().getFullYear()} Bamlak Bekele</span>
        <span>Built with React & Tailwind</span>
      </div>
    </footer>
  )
}
