function Visual({ tipo }) {
  if (tipo === 'chat') {
    return (
      <div className="viz viz-chat">
        <div className="vbubble in">Hola, ¿precios?</div>
        <div className="vbubble out">¡Hola! Te paso la info</div>
        <div className="vbubble in">Genial, gracias</div>
      </div>
    )
  }
  if (tipo === 'doc') {
    return (
      <div className="viz viz-doc">
        <div className="vrow"></div>
        <div className="vrow short"></div>
        <div className="vrow accent"></div>
        <div className="vrow"></div>
        <div className="vrow short"></div>
      </div>
    )
  }
  if (tipo === 'bars') {
    return (
      <div className="viz viz-bars">
        <span style={{ height: '40%' }}></span>
        <span style={{ height: '70%' }}></span>
        <span style={{ height: '50%' }}></span>
        <span style={{ height: '90%' }}></span>
        <span style={{ height: '65%' }}></span>
      </div>
    )
  }
  if (tipo === 'agente') {
    return (
      <div className="viz viz-chat">
        <div className="vbubble in">¿Tienen stock?</div>
        <div className="vbubble out typing"><i></i><i></i><i></i></div>
      </div>
    )
  }
  if (tipo === 'check') {
    return (
      <div className="viz viz-check">
        <div className="vcheck done"><span>✓</span> Datos cargados</div>
        <div className="vcheck done"><span>✓</span> Bienvenida enviada</div>
        <div className="vcheck"><span></span> Seguimiento</div>
      </div>
    )
  }
  if (tipo === 'nodos') {
    return (
      <div className="viz viz-nodos">
        <span className="node"></span>
        <span className="line"></span>
        <span className="node mid"></span>
        <span className="line"></span>
        <span className="node"></span>
      </div>
    )
  }
  return null
}

function Servicios() {
  const servicios = [
    { tipo: 'chat', titulo: "Gestión de leads", texto: "Cada consulta que entra se clasifica, responde y registra sola. Sin que nadie mueva un dedo." },
    { tipo: 'doc', titulo: "Procesamiento de documentos", texto: "Facturas, contratos, formularios. La IA los lee, extrae los datos y los carga donde corresponde." },
    { tipo: 'bars', titulo: "Reportes automáticos", texto: "Cada lunes a las 9am tu equipo recibe el resumen del negocio. Sin que nadie lo arme." },
    { tipo: 'agente', titulo: "Atención al cliente", texto: "Un agente que conoce tu negocio responde las preguntas frecuentes y escala solo lo importante." },
    { tipo: 'check', titulo: "Onboarding de clientes", texto: "Cada cliente nuevo entra con el mismo proceso prolijo y automatizado. Sin que te ocupes." },
    { tipo: 'nodos', titulo: "Integraciones a medida", texto: "Conectamos las herramientas que ya usás para que se pasen datos solas y dejen de funcionar en silos." },
  ]

  return (
    <div className="section-wrap">
      <p className="section-tag">Servicios</p>
      <h2 className="section-title">Lo que automatizamos</h2>
      <p className="section-sub">Flujos a medida para que tu equipo deje de hacer lo que una máquina puede hacer mejor.</p>
      <div className="grid-3">
        {servicios.map((s, i) => (
          <div className="card-viz" key={i}>
            <div className="card-viz-top">
              <Visual tipo={s.tipo} />
            </div>
            <div className="card-viz-body">
              <h3>{s.titulo}</h3>
              <p>{s.texto}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Servicios