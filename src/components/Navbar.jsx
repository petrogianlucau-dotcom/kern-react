import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

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
        <span className="nav-logo-mark">◢◣</span>
        KERN
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