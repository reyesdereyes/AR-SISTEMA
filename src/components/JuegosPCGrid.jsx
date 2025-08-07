import { useJuegosPorFiltro } from '../hooks/useJuegosPorPlataforma';
import Card from './Card';

const JuegosGrid = ({ plataforma, categoria }) => {
  const { juegos, loading } = useJuegosPorFiltro(plataforma, categoria);

  if (loading) return <p className="text-center py-4">Cargando juegos de {plataforma}…</p>;

  if (juegos.length === 0) {
    return (
      <p className="text-center py-4">
        No hay juegos disponibles para {plataforma}
        {categoria ? ` en la categoría ${categoria}` : ''}.
      </p>
    );
  }

  return (
    <div className="container py-4">
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

export default JuegosGrid;
