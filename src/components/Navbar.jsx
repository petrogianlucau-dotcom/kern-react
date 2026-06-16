import { useState, useEffect } from 'react'

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
      <a href="#" className="nav-logo">
        <span className="nav-logo-mark">◢◣</span>
        KERN
      </a>
      <div className="nav-links">
        <a href="#servicios">Servicios</a>
        <a href="#casos">Casos</a>
        <a href="#faq">FAQ</a>
        <a href="#contacto">Contacto</a>
      </div>
      <a href="#contacto" className="nav-cta">Hablemos</a>
    </nav>
  )
}

export default Navbar