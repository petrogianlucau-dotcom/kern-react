import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Wave from '../components/Wave'
import Statement from '../components/Statement'
import Servicios from '../components/Servicios'
import Tecnologias from '../components/Tecnologias'
import Casos from '../components/Casos'

function CTAFinal() {
  return (
    <div className="cta-final-wrap">
      <p className="section-tag" style={{ textAlign: 'center' }}>¿Listo para empezar?</p>
      <h2 className="cta-final-title">Contanos qué proceso<br/>te está costando tiempo.</h2>
      <p className="cta-final-sub">En 48 horas te decimos si lo podemos automatizar y cuánto costaría.<br/>Primera consulta sin costo.</p>
      <Link to="/contacto" className="cta-final-btn">Hablemos →</Link>
    </div>
  )
}

function Home() {
  return (
    <>
      <Hero />
      <Wave />
      <div className="seccion-negra">
        <Statement />
        <Servicios />
        <Tecnologias />
        <Casos />
        <CTAFinal />
      </div>
    </>
  )
}

export default Home