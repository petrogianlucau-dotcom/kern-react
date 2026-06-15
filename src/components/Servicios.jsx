function Servicios() {
  const servicios = [
    { icon: "⚡", titulo: "Gestión de leads", texto: "Cada consulta que entra se clasifica, responde y registra sola. Sin que nadie mueva un dedo." },
    { icon: "📄", titulo: "Procesamiento de documentos", texto: "Facturas, contratos, formularios. La IA los lee, extrae los datos y los carga donde corresponde." },
    { icon: "📊", titulo: "Reportes automáticos", texto: "Cada lunes a las 9am tu equipo recibe el resumen del negocio. Sin que nadie lo arme." },
    { icon: "💬", titulo: "Atención al cliente", texto: "Un agente que conoce tu negocio responde las preguntas frecuentes y escala solo lo importante." },
    { icon: "🔄", titulo: "Onboarding de clientes", texto: "Cada cliente nuevo entra con el mismo proceso prolijo y automatizado. Sin que te ocupes." },
    { icon: "🔗", titulo: "Integraciones a medida", texto: "Conectamos las herramientas que ya usás para que se pasen datos solas y dejen de funcionar en silos." },
  ]

  return (
    <div className="section-wrap">
      <p className="section-tag">Servicios</p>
      <h2 className="section-title">Lo que automatizamos</h2>
      <p className="section-sub">Flujos a medida para que tu equipo deje de hacer lo que una máquina puede hacer mejor.</p>
      <div className="grid-3">
        {servicios.map((s, i) => (
          <div className="card" key={i}>
            <div className="card-icon">{s.icon}</div>
            <h3>{s.titulo}</h3>
            <p>{s.texto}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Servicios