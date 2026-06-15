function Navbar() {
  return (
    <nav className="navbar">
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
    </nav>
  )
}

export default Navbar