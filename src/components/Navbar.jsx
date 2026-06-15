import { useState, useEffect } from 'react'

function Navbar() {
  const [oscuro, setOscuro] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      // cuando pasamos el 80% de la altura de pantalla, ya estamos en zona negra
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
        <a href="#contacto">Contacto</a>
      </div>
      <a href="#contacto" className="nav-cta">Hablemos</a>