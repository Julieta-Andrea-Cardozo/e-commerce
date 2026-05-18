function Footer() {
  const anio = new Date().getFullYear()

  return (
    <footer>
      <p>© {anio} Mi App. Todos los derechos reservados.</p>
    </footer>
  )
}

export default Footer