import { useState } from 'react'
import Card from './Card'

const productos = [
  { id: 1, nombre: 'Laptop Pro', precio: 1299.99, categoria: 'Electronica', enStock: true },
  { id: 2, nombre: 'Auriculares BT', precio: 89.99, categoria: 'Electronica', enStock: false },
  { id: 3, nombre: 'Remera Nike', precio: 29.99, categoria: 'Ropa', enStock: true },
  { id: 4, nombre: 'Pantalon Jeans', precio: 49.99, categoria: 'Ropa', enStock: true },
  { id: 5, nombre: 'Monitor 4K', precio: 549.00, categoria: 'Electronica', enStock: false },
  { id: 6, nombre: 'Zapatillas Adidas', precio: 99.99, categoria: 'Ropa', enStock: true },
]

function ProductList() {
  const [categoria, setCategoria] = useState('Todas')
  const [soloStock, setSoloStock] = useState(false)

  const filtrados = productos
    .filter(p => categoria === 'Todas' || p.categoria === categoria)
    .filter(p => !soloStock || p.enStock)

  return (
    <div>
      <h2>Productos</h2>

      <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
        <option>Todas</option>
        <option>Electronica</option>
        <option>Ropa</option>
      </select>

      <label>
        <input
          type="checkbox"
          checked={soloStock}
          onChange={(e) => setSoloStock(e.target.checked)}
        />
        Solo en stock
      </label>

      {filtrados.length === 0 ? (
        <p>No hay productos</p>
      ) : (
        filtrados.map(p => (
          <Card
            key={p.id}
            titulo={p.nombre}
            descripcion={p.enStock ? 'En stock ✅' : 'Sin stock ❌'}
            imagen={`https://placehold.co/300x180?text=${p.nombre}`}
            precio={p.precio}
          />
        ))
      )}
    </div>
  )
}

export default ProductList