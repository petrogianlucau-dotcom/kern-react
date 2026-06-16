import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsApp from './components/WhatsApp'
import Home from './pages/Home'
import Servicios from './pages/Servicios'
import Casos from './pages/Casos'
import FAQ from './pages/FAQ'
import Contacto from './pages/Contacto'
import useScrollReveal from './components/useScrollReveal'
import './App.css'

function App() {
  useScrollReveal()

  return (
    <BrowserRouter>
      <Cursor />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/casos" element={<Casos />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
      <Footer />
      <WhatsApp />
    </BrowserRouter>
  )
}

export default App