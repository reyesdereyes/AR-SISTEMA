import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Categorias from './components/Categorias'
import Carrusel from './components/carrusel'
import JuegosPCGrid from './components/JuegosPCGrid'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div className="mb-1"></div> {/* Espacio pequeño */}
      <Categorias />
       <div className="mb-1"></div> {/* Espacio pequeño */}
      <Carrusel />
      <JuegosPCGrid />
      
    </>
  )
}

export default App
