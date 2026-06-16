function Contacto() {
  return (
    <div className="seccion-negra" style={{ paddingTop: '8rem', minHeight: '100vh' }}>
      <div className="section-wrap">
        <p className="section-tag">Contacto</p>
        <h2 className="section-title">¿Qué proceso te está costando tiempo?</h2>
        <p className="section-sub">Contanos qué hace tu equipo a mano todos los días. En 48 horas te decimos si lo podemos automatizar y cuánto costaría.</p>
        <form className="form-contacto" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Nombre" />
          <input type="text" placeholder="Empresa" />
          <input type="email" placeholder="Mail" />
          <input type="text" placeholder="WhatsApp (opcional)" />
          <textarea placeholder="¿Qué proceso querés automatizar? Contanos cómo lo hacen hoy."></textarea>
          <button type="submit" className="btn-primary">Enviar</button>
        </form>
      </div>
    </div>
  )
}

export default Contacto