function FAQ() {
  const preguntas = [
    { q: "¿Cuánto tarda en implementarse una automatización?", a: "La mayoría de los flujos están funcionando en menos de dos semanas. Depende de la complejidad y de las herramientas que ya uses." },
    { q: "¿Necesito conocimientos técnicos?", a: "No. Nosotros armamos, configuramos y mantenemos todo. Vos solo nos contás qué proceso te está costando tiempo." },
    { q: "¿Con qué herramientas trabajan?", a: "n8n, Make, las APIs de Claude y OpenAI, Google Sheets, WhatsApp, Gmail y muchas más. Nos integramos con lo que ya usás." },
    { q: "¿Qué pasa si algo deja de funcionar?", a: "Hacemos seguimiento y mantenimiento de cada flujo. Si algo falla, lo resolvemos sin que tengas que preocuparte." },
    { q: "¿Cuánto cuesta?", a: "Depende del proceso. La primera consulta y el diagnóstico son sin costo: te decimos qué se puede automatizar y cuánto costaría antes de que decidas." },
  ]

  return (
    <div className="seccion-negra" style={{ paddingTop: '8rem', minHeight: '100vh' }}>
      <div className="section-wrap">
        <p className="section-tag">FAQ</p>
        <h2 className="section-title">Preguntas frecuentes</h2>
        <div className="faq-lista">
          {preguntas.map((p, i) => (
            <div className="faq-item" key={i}>
              <h3>{p.q}</h3>
              <p>{p.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FAQ