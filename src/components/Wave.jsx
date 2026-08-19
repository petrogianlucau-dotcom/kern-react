import { useEffect, useRef, useState } from 'react'

function Wave() {
  const sectionRef = useRef(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
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
            {/* Gradiente verde (como Marz) en lugar de naranja */}
            <linearGradient id="wave-glow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#22c55e" stopOpacity="0.8" />
              <stop offset="14%" stopColor="#16a34a" stopOpacity="0.4" />
              <stop offset="40%" stopColor="#000000" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* Path con curva más suave y natural */}
          <path 
            d="M0,80 C 200,40 1240,40 1440,120 L1440,320 L0,320 Z" 
            fill="#000000" 
          />
          {/* Path con gradiente para efecto glow suave */}
          <path 
            d="M0,80 C 200,40 1240,40 1440,120 L1440,320 L0,320 Z" 
            fill="url(#wave-glow)" 
          />
        </svg>
      </div>
    </div>
  )
}

export default Wave
