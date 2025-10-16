import { NavLink } from 'react-router-dom'

export default function Navbar() {
  const Item = ({to, children}) => (
    <a href={to} className="hover:text-neutral-100">{children}</a>
  )
  return (
    <header className="sticky top-0 z-50 bg-neutral-950/85 backdrop-blur border-b border-neutral-800/80">
      <div className="container flex items-center justify-between py-4">
        <NavLink to="/" className="font-semibold tracking-wide text-lg text-neutral-200">
          BB
        </NavLink>
        <nav className="flex gap-5 text-sm md:text-base text-neutral-300">
          <Item to="/#about">About</Item>
          <Item to="/#projects">Projects</Item>
          <Item to="/#contact">Get in Touch</Item>
        </nav>
      </div>
    </header>
  )
}
