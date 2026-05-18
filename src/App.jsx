import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Componentes/Header'
import Footer from './Componentes/Footer'
import Inicio from './pages/Inicio'
import Productos from './pages/ProductList'
import Contacto from './pages/Contacto'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
