function Footer() {
  return (
    <footer className="footer-negro">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-logo">KERN</span>
          <p>El motor que automatiza los procesos repetitivos de tu pyme con inteligencia artificial.</p>
        </div>
        <div className="footer-col">
          <h4>Navegación</h4>
          <ul>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#casos">Casos de uso</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Contacto</h4>
          <ul>
            <li><a href="#contacto">Agendar una llamada</a></li>
            <li><a href="#contacto">Diagnóstico gratuito</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Kern. Automatización con IA para pymes.</p>
        <p>Buenos Aires, Argentina</p>
      </div>
    </footer>
  )
}

export default Footer