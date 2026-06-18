import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function KernLogo() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <circle cx="18" cy="18" r="16" stroke="#f97316" strokeWidth="1" opacity="0.18" fill="none" className="kern-ring kern-ring-3"/>
      <circle cx="18" cy="18" r="10.5" stroke="#f97316" strokeWidth="1.3" opacity="0.45" fill="none" className="kern-ring kern-ring-2"/>
      <circle cx="18" cy="18" r="4.5" fill="#f97316" className="kern-nucleus"/>
    </svg>
  )
}

function Navbar() {
  const [oscuro, setOscuro] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setOscuro(window.scrollY > window.innerHeight * 0.8)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Cerrar menu al navegar
  const closeMenu = () => setMenuOpen(false)

  // Bloquear scroll cuando el menu está abierto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <nav className={`navbar ${oscuro ? 'navbar-oscuro' : ''}`}>
        <Link to="/" className="nav-logo" onClick={closeMenu}>
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
        <button
          className={`nav-hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <div className={`nav-mobile-menu ${menuOpen ? 'open' : ''}`}>
        <Link to="/servicios" onClick={closeMenu}>Servicios</Link>
        <Link to="/casos" onClick={closeMenu}>Casos</Link>
        <Link to="/faq" onClick={closeMenu}>FAQ</Link>
        <Link to="/contacto" className="nav-mobile-cta" onClick={closeMenu}>Hablemos</Link>
      </div>
    </>
  )
}

export default Navbar