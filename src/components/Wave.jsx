import { useEffect, useRef, useState } from 'react'

function Wave() {
  const sectionRef = useRef(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current
      if (!el) return
      const rect = el.getBoundingClientContext()
      const vh = window.innerHeight
      // Scroll tracking mejorado para efecto más fluido
      const raw = (vh - rect.top) / (vh + rect.height * 1.5)
      setProgress(Math.min(Math.max(raw, 0), 1))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  // Rango de movimiento aumentado para animación más pronunciada
  const translateY = (1 - progress) * 150

  return (
    <div className="wave-section" ref={sectionRef}>
      <div className="wave-mover" style={{ transform: `translateY(${translateY}%)` }}>
        <svg className="wave-svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <defs>
            {/* Gradiente NARANJA (Kern) - centrado y suave */}
            <linearGradient id="wave-glow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f97316" stopOpacity="0.9" />
              <stop offset="14%" stopColor="#f97316" stopOpacity="0.35" />
              <stop offset="40%" stopColor="#000000" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* Path centrado con curva simétrica */}
          <path 
            d="M0,120 Q 360,30 720,30 Q 1080,30 1440,120 L1440,320 L0,320 Z" 
            fill="#000000" 
          />
          {/* Path con gradiente para efecto glow suave */}
          <path 
            d="M0,120 Q 360,30 720,30 Q 1080,30 1440,120 L1440,320 L0,320 Z" 
            fill="url(#wave-glow)" 
          />
        </svg>
      </div>
    </div>
  )
}

export default Wave
