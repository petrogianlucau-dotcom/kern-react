import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
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

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function AnimatedRoutes() {
  const { pathname } = useLocation()
  return (
    <main key={pathname} className="page-fade">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/casos" element={<Casos />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </main>
  )
}

function App() {
  useScrollReveal()

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Cursor />
      <Navbar />
      <AnimatedRoutes />
      <Footer />
      <WhatsApp />
    </BrowserRouter>
  )
}

export default App
