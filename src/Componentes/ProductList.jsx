import { useState } from 'react'
import Card from './Card'

const productos = [
  { id: 1, nombre: 'Laptop Pro', precio: 1299.99, categoria: 'Electronica', enStock: true, imagen: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=180&fit=crop' },
  { id: 2, nombre: 'Auriculares BT', precio: 89.99, categoria: 'Electronica', enStock: false, imagen: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=180&fit=crop' },
  { id: 3, nombre: 'Remera Nike', precio: 29.99, categoria: 'Ropa', enStock: true, imagen: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=180&fit=crop' },
  { id: 4, nombre: 'Pantalon Jeans', precio: 49.99, categoria: 'Ropa', enStock: true, imagen: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&h=180&fit=crop' },
  { id: 5, nombre: 'Monitor 4K', precio: 549.00, categoria: 'Electronica', enStock: false, imagen: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=300&h=180&fit=crop' },
  { id: 6, nombre: 'Zapatillas Adidas', precio: 99.99, categoria: 'Ropa', enStock: true, imagen: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=180&fit=crop' },
  { id: 7, nombre: 'Mancuernas', precio: 35.99, categoria: 'Gimnasio', enStock: true, imagen: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=300&h=180&fit=crop' },
  { id: 8, nombre: 'Colchoneta', precio: 25.99, categoria: 'Gimnasio', enStock: true, imagen: 'https://monterosport.com.ar/wp-content/uploads/2020/03/colchoneta-gym-american.jpg' },
  { id: 9, nombre: 'Bicicleta', precio: 12.99, categoria: 'Gimnasio', enStock: false, imagen: 'https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=300&h=180&fit=crop' },
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
        <option>Gimnasio</option>
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
            imagen={p.imagen}
            precio={p.precio}
          />
        ))
      )}
    </div>
  )
}

export default ProductList