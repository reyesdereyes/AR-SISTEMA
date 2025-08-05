import { useJuegosPC } from '../hooks/useJuegosPC';
import Card from './Card';

const JuegosPCGrid = () => {
  const { juegos, loading } = useJuegosPC();

  if (loading) return <p className="text-center py-4">Cargando juegos…</p>;

  return (
    <div className="container py-4">
      <div className="row g-3">
        {juegos.map((juego) => (
          <div key={juego.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <Card
              image={juego.imagen_url}
              titulo={juego.titulo}
              lanzamiento={juego.lanzamiento}
              onComprar={() => alert(`Comprar: ${juego.titulo}`)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default JuegosPCGrid;