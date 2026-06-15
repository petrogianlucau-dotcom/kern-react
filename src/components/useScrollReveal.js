import { useEffect } from 'react'

function useScrollReveal() {
  useEffect(() => {
    const elementos = document.querySelectorAll('.card, .caso-row, .section-title, .section-tag, .section-sub')

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.1 })

    elementos.forEach((el) => {
      el.classList.add('reveal')
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])
}

export default useScrollReveal