import { useState } from 'react'

const preguntas = [
  {
    q: "¿Cuánto tarda en implementarse una automatización?",
    a: "La mayoría de los flujos están funcionando en menos de dos semanas. Depende de la complejidad y de las herramientas que ya uses."
  },
  {
    q: "¿Necesito conocimientos técnicos?",
    a: "No. Nosotros armamos, configuramos y mantenemos todo. Vos solo nos contás qué proceso te está costando tiempo."
  },
  {
    q: "¿Con qué herramientas trabajan?",
    a: "n8n, Make, las APIs de Claude y OpenAI, Google Sheets, WhatsApp, Gmail y muchas más. Nos integramos con lo que ya usás."
  },
  {
    q: "¿Qué pasa si algo deja de funcionar?",
    a: "Hacemos seguimiento y mantenimiento de cada flujo. Si algo falla, lo resolvemos sin que tengas que preocuparte."
  },
  {
    q: "¿Cuánto cuesta?",
    a: "Depende del proceso. La primera consulta y el diagnóstico son sin costo: te decimos qué se puede automatizar y cuánto costaría antes de que decidas."
  },
  {
    q: "¿Funciona con las herramientas que ya uso?",
    a: "Sí. Antes de proponer cualquier solución mapeamos lo que ya usás. No reemplazamos herramientas — las conectamos y hacemos que trabajen juntas."
  },
  {
    q: "¿Qué tipo de empresas pueden automatizar?",
    a: "Cualquier pyme que tenga procesos repetitivos: comercios, estudios contables, inmobiliarias, consultorios, agencias. Si tu equipo hace algo a mano todos los días, probablemente lo podemos automatizar."
  },
]

function FaqItem({ pregunta, respuesta, index }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className={`faq-item-v2 ${open ? 'open' : ''}`}
      onClick={() => setOpen(!open)}
    >
      <div className="faq-header">
        <div className="faq-num">0{index + 1}</div>
        <h3 className="faq-question">{pregunta}</h3>
        <div className="faq-icon">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <line
              x1="10" y1="4" x2="10" y2="16"
              stroke="#f97316"
              strokeWidth="1.5"
              strokeLinecap="round"
              className="faq-icon-v"
            />
            <line
              x1="4" y1="10" x2="16" y2="10"
              stroke="#f97316"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
      <div className="faq-body">
        <p>{respuesta}</p>
      </div>
    </div>
  )
}

function FAQ() {
  return (
    <div className="seccion-negra" style={{ paddingTop: '8rem', minHeight: '100vh' }}>
      <div className="section-wrap">
        <p className="section-tag">FAQ</p>
        <h2 className="section-title">Preguntas frecuentes</h2>
        <p className="section-sub">Si quedan dudas, hablemos.</p>
        <div className="faq-lista-v2">
          {preguntas.map((p, i) => (
            <FaqItem
              key={i}
              index={i}
              pregunta={p.q}
              respuesta={p.a}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default FAQ