function Card({ titulo, descripcion, imagen, precio = 0, children }) {
  return (
    <div className="card">
      <img 
        src={imagen} 
        alt={titulo} 
        style={{ width: '100%', height: '180px', objectFit: 'cover' }}
      />
      <h2 style={{ color: '#333' }}>{titulo}</h2>
      <p>{descripcion}</p>
      <p><strong>${precio}</strong></p>
      {children}
    </div>
  )
}

export default Card