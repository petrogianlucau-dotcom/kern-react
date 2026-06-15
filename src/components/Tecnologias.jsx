function Tecnologias() {
  const techs = [
    { slug: "n8n", nombre: "n8n" },
    { slug: "make", nombre: "Make" },
    { slug: "openai", nombre: "OpenAI" },
    { slug: "anthropic", nombre: "Claude" },
    { slug: "googlesheets", nombre: "Google Sheets" },
    { slug: "whatsapp", nombre: "WhatsApp" },
    { slug: "gmail", nombre: "Gmail" },
    { slug: "notion", nombre: "Notion" },
    { slug: "airtable", nombre: "Airtable" },
    { slug: "slack", nombre: "Slack" },
    { slug: "telegram", nombre: "Telegram" },
    { slug: "zapier", nombre: "Zapier" },
  ]

  const loop = [...techs, ...techs]

  return (
    <div className="tech-section">
      <p className="section-tag" style={{ textAlign: 'center' }}>Stack</p>
      <h2 className="tech-title">Las herramientas con las que automatizamos</h2>
      <div className="tech-marquee">
        <div className="tech-track">
          {loop.map((t, i) => (
            <div className="tech-pill" key={i}>
              <img
                src={`https://cdn.simpleicons.org/${t.slug}/a1a1aa`}
                alt={t.nombre}
                className="tech-logo"
              />
              <span>{t.nombre}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Tecnologias