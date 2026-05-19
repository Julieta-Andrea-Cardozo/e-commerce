import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <h1>Mi Sitio de ventas</h1>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/productos">Productos</Link>
        <Link to="/contacto">Contacto</Link>
        <Link to="/tareas">Tareas</Link>
        
      </nav>
    </header>
  )
  
}

export default Header