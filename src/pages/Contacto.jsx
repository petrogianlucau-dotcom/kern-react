import { useState } from 'react'

function Contacto() {
  const [form, setForm] = useState({
    nombre: '',
    empresa: '',
    email: '',
    whatsapp: '',
    mensaje: '',
    web: ''
  })
  const [estado, setEstado] = useState('idle') // idle | enviando | ok | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
if (form.web) {
  setEstado('ok')
    setForm({ nombre: '', empresa: '', email: '', whatsapp: '', mensaje: '', web: '' })
      return
}
    setEstado('enviando')
    try {
      const res = await fetch('https://gianpetrocelli.app.n8n.cloud/webhook/kern-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (res.ok) {
        setEstado('ok')
        setForm({ nombre: '', empresa: '', email: '', whatsapp: '', mensaje: '', web: '' })
      } else {
        setEstado('error')
      }
    } catch {
      setEstado('error')
    }
  }

  return (
    <div className="contacto-page">
      <div className="contacto-wrap">
        {/* HEADER */}
        <div className="contacto-header">
          <p className="section-tag">Contacto</p>
          <h2 className="contacto-title">¿Qué proceso<br/>te está costando tiempo?</h2>
          <p className="contacto-desc">Contanos qué hace tu equipo a mano todos los días. En 48 horas te decimos si lo podemos automatizar y cuánto costaría.</p>
        </div>

        {/* GRID: info + form */}
        <div className="contacto-grid">
          {/* INFO */}
          <div className="contacto-info">
            <div className="contacto-card">
              <div className="contacto-card-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <div>
                <p className="contacto-card-label">Respuesta en</p>
                <p className="contacto-card-value">menos de 48 horas</p>
              </div>
            </div>
            <div className="contacto-card">
              <div className="contacto-card-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <div>
                <p className="contacto-card-label">Primera consulta</p>
                <p className="contacto-card-value">sin costo</p>
              </div>
            </div>
            <div className="contacto-card">
              <div className="contacto-card-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
              </div>
              <div>
                <p className="contacto-card-label">Diagnóstico</p>
                <p className="contacto-card-value">a medida de tu negocio</p>
              </div>
            </div>
          </div>

          {/* FORM */}
          {estado === 'ok' ? (
            <div className="contacto-success">
              <div className="contacto-success-icon">✓</div>
              <h3>¡Consulta recibida!</h3>
              <p>En menos de 48 horas te respondemos con un diagnóstico personalizado. Revisá tu mail.</p>
            </div>
          ) : (
            <form className="contacto-form" onSubmit={handleSubmit}>
              <input type="text" name="web" value={form.web} onChange={handleChange} style={{ position: 'absolute', left: '-9999px' }} tabIndex="-1" autoComplete="off" aria-hidden="true" />
              <div className="form-row">
                <div className="form-field">
                  <label>Nombre</label>
                  <input
                    type="text"
                    name="nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    placeholder="Juan García"
                    required
                  />
                </div>
                <div className="form-field">
                  <label>Empresa</label>
                  <input
                    type="text"
                    name="empresa"
                    value={form.empresa}
                    onChange={handleChange}
                    placeholder="Mi Empresa SA"
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-field">
                  <label>Mail</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="juan@empresa.com"
                    required
                  />
                </div>
                <div className="form-field">
                  <label>WhatsApp <span className="form-optional">(opcional)</span></label>
                  <input
                    type="text"
                    name="whatsapp"
                    value={form.whatsapp}
                    onChange={handleChange}
                    placeholder="+54 9 11 0000 0000"
                  />
                </div>
              </div>
              <div className="form-field">
                <label>¿Qué proceso querés automatizar?</label>
                <textarea
                  name="mensaje"
                  value={form.mensaje}
                  onChange={handleChange}
                  placeholder="Contanos cómo lo hacen hoy. Por ejemplo: 'Cada vez que entra un mail con una factura, alguien la carga a mano en una planilla...'"
                  required
                />
              </div>
              {estado === 'error' && (
                <p className="contacto-error">Algo salió mal. Intentá de nuevo o escribinos por WhatsApp.</p>
              )}
              <button
                type="submit"
                className="contacto-submit"
                disabled={estado === 'enviando'}
              >
                {estado === 'enviando' ? 'Enviando...' : 'Enviar consulta →'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default Contacto
