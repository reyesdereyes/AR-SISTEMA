import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Categorias from './components/Categorias'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div className="mb-1"></div> {/* Espacio pequeño */}
      <Categorias />
    </>
  )
}

export default App
