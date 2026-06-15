function Casos() {
  const casos = [
    { num: "01", titulo: "Consultas de clientes por WhatsApp", texto: "Entra un mensaje → la IA lo clasifica → responde lo básico → avisa al vendedor si necesita atención humana. Tiempo de respuesta: segundos.", tag: "Comercio / Servicios" },
    { num: "02", titulo: "Carga de facturas sin intervención", texto: "Llega el mail con la factura → la IA extrae monto, fecha, proveedor → lo carga en la planilla → archiva el PDF. Cero tipeo manual.", tag: "Administración" },
    { num: "03", titulo: "Reporte semanal automático", texto: "El sistema junta datos de ventas, stock y consultas → la IA arma el resumen → se manda por mail cada lunes a las 9am.", tag: "Gerencia / Dirección" },
    { num: "04", titulo: "Seguimiento de leads sin CRM caro", texto: "El formulario de contacto alimenta una planilla de Google Sheets automáticamente. Con estado, fecha y notas. Sin pagar Salesforce.", tag: "Ventas" },
  ]

  return (
    <div className="section-wrap">
      <p className="section-tag">Casos de uso</p>
      <h2 className="section-title">Procesos reales que ya automatizamos</h2>
      <p className="section-sub">Ejemplos concretos de lo que se puede construir en menos de dos semanas.</p>
      <div className="casos-lista">
        {casos.map((c, i) => (
          <div className="caso-row" key={i}>
            <span className="caso-big-num">{c.num}</span>
            <div className="caso-content">
              <h3>{c.titulo}</h3>
              <p>{c.texto}</p>
              <span className="caso-tag">{c.tag}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Casos