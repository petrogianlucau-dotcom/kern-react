import Hero from '../components/Hero'
import Wave from '../components/Wave'
import Statement from '../components/Statement'
import Servicios from '../components/Servicios'
import Tecnologias from '../components/Tecnologias'
import Casos from '../components/Casos'

function Home() {
  return (
    <>
      <Hero />
      <Wave />
      <div className="seccion-negra">
        <Statement />
        <div className="divisor-oscuro"></div>
        <Servicios />
        <Tecnologias />
        <div className="divisor-oscuro"></div>
        <Casos />
      </div>
    </>
  )
}

export default Home