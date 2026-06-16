import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ServiciosPage from './pages/Servicios'
import CasosPage from './pages/Casos'
import FAQ from './pages/FAQ'
import Contacto from './pages/Contacto'
import useScrollReveal from './components/useScrollReveal'

function App() {
  useScrollReveal()

  return (
    <BrowserRouter>
      <Cursor />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<ServiciosPage />} />
        <Route path="/casos" element={<CasosPage />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App