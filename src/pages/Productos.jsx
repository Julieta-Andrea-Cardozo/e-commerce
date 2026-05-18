import Card from '../Componentes/Card'

function Productos() {
  return (
    <main>
      <h2>Productos</h2>

      <Card
        titulo="Laptop Pro"
        descripcion="Laptop de alta gama para profesionales."
        imagen="https://placehold.co/300x180?text=Laptop"
        precio={1299.99}
      />
      <Card
        titulo="Auriculares BT"
        descripcion="Sonido envolvente sin cables."
        imagen="https://placehold.co/300x180?text=Auriculares"
        precio={89.99}
      />
      <Card
        titulo="Monitor 4K"
        descripcion="Pantalla ultra HD para diseñadores."
        imagen="https://placehold.co/300x180?text=Monitor"
        precio={549.00}
      />
      <Card
        titulo="Mouse Ergonómico"
        descripcion="Comodidad para largas jornadas."
        imagen="https://placehold.co/300x180?text=Mouse"
        precio={45.00}
      >
        <p>¡Oferta del día!</p>
      </Card>

    </main>
  )
}

export default Productos