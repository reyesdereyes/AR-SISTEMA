import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Categorias from './components/Categorias';
import Carrusel from './components/carrusel';
import JuegosGrid from './components/JuegosPCGrid'; // componente que filtra por plataforma y categoría
import Footer from './components/footer';

function App() {
  // Estado para plataforma y categoría seleccionada
  const [plataformaSeleccionada, setPlataformaSeleccionada] = useState('PC');
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);

  return (
    <>
      <Header />
      <div className="mb-1"></div>
      <Categorias
        onPlataformaSeleccionada={setPlataformaSeleccionada}
        onCategoriaSeleccionada={setCategoriaSeleccionada}
      />
      <div className="mb-1"></div>
      <Carrusel />
      <JuegosGrid
        plataforma={plataformaSeleccionada}
        categoria={categoriaSeleccionada}
      />

      <Footer />
    </>
  );
}

export default App;
