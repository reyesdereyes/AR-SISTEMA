// components/JuegosPCGrid.jsx
import { useJuegosPorPlataforma } from '../hooks/useJuegosPorPlataforma';
import Card from './Card';

const JuegosPCGrid = () => {
  const { juegos, loading } = useJuegosPorPlataforma('PC');

  if (loading) return <p className="text-center py-4">Cargando juegos de PC…</p>;

  if (juegos.length === 0) {
    return <p className="text-center py-4">No hay juegos disponibles para PC.</p>;
  }

  return (
    <div className="container py-4">
      {/* <h4 className="mb-4 text-center">Juegos Disponibles para PC</h4> */}
      <div className="row g-3">
        {juegos.map((juego) => (
          <div key={juego.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <Card
              image={juego.imagen_url}
              titulo={juego.titulo}
              lanzamiento={juego.lanzamiento}
              precio={juego.precio}
              onComprar={() => alert(`Comprar: ${juego.titulo} por $${juego.precio}`)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default JuegosPCGrid;