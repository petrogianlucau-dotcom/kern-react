import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function KernLogo() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="18" cy="18" r="16" stroke="#f97316" strokeWidth="1" opacity="0.18" fill="none" className="kern-ring kern-ring-3"/>
      <circle cx="18" cy="18" r="10.5" stroke="#f97316" strokeWidth="1.3" opacity="0.45" fill="none" className="kern-ring kern-ring-2"/>
      <circle cx="18" cy="18" r="4.5" fill="#f97316" className="kern-nucleus"/>
    </svg>
  )
}

function Navbar() {
  const [oscuro, setOscuro] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setOscuro(window.scrollY > window.innerHeight * 0.8)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar ${oscuro ? 'navbar-oscuro' : ''}`}>
      <Link to="/" className="nav-logo">
        <KernLogo />
        <span className="nav-logo-text">kern</span>
      </Link>
      <div className="nav-links">
        <Link to="/servicios">Servicios</Link>
        <Link to="/casos">Casos</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/contacto">Contacto</Link>
      </div>
      <Link to="/contacto" className="nav-cta">Hablemos</Link>
    </nav>
  )
}

export default Navbar