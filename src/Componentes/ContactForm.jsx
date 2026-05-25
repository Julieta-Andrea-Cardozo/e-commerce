import { useState } from 'react'

function ContactForm() {
  const [nombre, setNombre] = useState('')
  const [telefono, setTelefono] = useState('')
  const [email, setEmail] = useState('')
  const [consulta, setConsulta] = useState('')
  const [enviado, setEnviado] = useState(false)
  const [errores, setErrores] = useState({})

  const validar = () => {
    const nuevosErrores = {}

    if (nombre.trim().length < 3) {
      nuevosErrores.nombre = 'El nombre debe tener al menos 3 letras'
    }

    if (!/^\d{7,15}$/.test(telefono)) {
      nuevosErrores.telefono = 'El teléfono debe tener entre 7 y 15 números'
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nuevosErrores.email = 'El email no es válido (debe tener @ y dominio)'
    }

    if (consulta.trim().length < 10) {
      nuevosErrores.consulta = 'La consulta debe tener al menos 10 caracteres'
    }

    return nuevosErrores
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const erroresEncontrados = validar()
    if (Object.keys(erroresEncontrados).length > 0) {
      setErrores(erroresEncontrados)
      return
    }
    setErrores({})
    setEnviado(true)
  }

  if (enviado) {
    return (
      <div>
        <h3>✅ ¡Mensaje enviado!</h3>
        <p>Gracias <strong>{nombre}</strong>, te contactamos pronto.</p>
        <button onClick={() => setEnviado(false)}>Enviar otro mensaje</button>
      </div>
    )
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Tu nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      {errores.nombre && <p style={{ color: 'red' }}>{errores.nombre}</p>}

      <input
        type="tel"
        placeholder="Tu teléfono (solo números)"
        value={telefono}
        onChange={(e) => setTelefono(e.target.value)}
      />
      {errores.telefono && <p style={{ color: 'red' }}>{errores.telefono}</p>}

      <input
        type="email"
        placeholder="Tu email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {errores.email && <p style={{ color: 'red' }}>{errores.email}</p>}

      <textarea
        placeholder="Escribí tu consulta acá..."
        rows={5}
        value={consulta}
        onChange={(e) => setConsulta(e.target.value)}
      />
      {errores.consulta && <p style={{ color: 'red' }}>{errores.consulta}</p>}

      <button onClick={handleSubmit}>
        Enviar consulta
      </button>
    </div>
  )
}

export default ContactForm