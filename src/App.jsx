import './App.css'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Wave from './components/Wave'
import Statement from './components/Statement'
import Servicios from './components/Servicios'
import Casos from './components/Casos'
import Footer from './components/Footer'
import useScrollReveal from './components/useScrollReveal'

function App() {
  useScrollReveal()

  return (
    <div>
      <Cursor />
      <Navbar />
      <Hero />
      <Wave />
      <div className="seccion-negra">
        <Statement />
        <div className="divisor-oscuro"></div>
        <Servicios />
        <div className="divisor-oscuro"></div>
        <Casos />
      </div>
      <Footer />
    </div>
  )
}

export default App