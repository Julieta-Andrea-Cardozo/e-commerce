function Card({ titulo, descripcion, imagen, precio = 0, children }) {
  return (
    <div className="card">
      <img src={imagen} alt={titulo} />
      <h2>{titulo}</h2>
      <p>{descripcion}</p>
      <p><strong>${precio}</strong></p>
      {children}
    </div>
  )
}

export default Card