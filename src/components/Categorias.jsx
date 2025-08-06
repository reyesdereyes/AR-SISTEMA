import { useState } from 'react';

const categorias = [
  'AAA Modernos',
  'Indie destacados',
  'Clásicos y remasterizados',
  'Estrategia',
  'Mundo abierto',
  'Móviles populares',
  'Multijugador online',
  'Retro / Emulación',
  'Misc / Otros'
];

const plataformas = [
  'PC',
  'PlayStation',
  'Xbox',
  'Android',
  'iOS',
  'Nintendo Switch'
];

const Categorias = ({ onPlataformaSeleccionada, onCategoriaSeleccionada }) => {
  const [plataformaActiva, setPlataformaActiva] = useState(null);
  const [categoriaActiva, setCategoriaActiva] = useState(null);
  const [showCategorias, setShowCategorias] = useState(false);

  const handlePlataformaClick = (nombre) => {
    setPlataformaActiva(nombre);
    if (onPlataformaSeleccionada) onPlataformaSeleccionada(nombre);
  };

  const handleCategoriaClick = (nombre) => {
    setCategoriaActiva(nombre);
    if (onCategoriaSeleccionada) onCategoriaSeleccionada(nombre);
    setShowCategorias(false);
  };

  return (
    <>
      {/* Barra de navegación mejorada */}
      <nav
        className="navbar navbar-dark w-100"
        style={{
          backgroundColor: '#1D52F2',
          padding: '12px 0',
          borderBottom: '1px solid #1a48db',
        }}
      >
        <div className="container-fluid px-2 px-lg-4 d-flex flex-column align-items-start">
          {/* Botón "Categorías" + Plataformas en fila horizontal con scroll */}
          <div
            className="d-flex align-items-center gap-2 w-100"
            style={{
              overflowX: 'auto',
              paddingBottom: '6px',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              padding: '0 8px',
            }}
          >
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
              .btn-plataforma {
                font-family: 'Montserrat', sans-serif;
                font-weight: 600;
                font-size: 0.9rem;
                padding: 8px 16px;
                border-radius: 50px;
                border: 2px solid rgba(255, 255, 255, 0.3);
                background: rgba(255, 255, 255, 0.15);
                color: white;
                cursor: pointer;
                transition: all 0.3s ease;
                white-space: nowrap;
                box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
              }
              .btn-plataforma:hover {
                background: rgba(255, 255, 255, 0.25);
                transform: translateY(-2px);
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
              }
              .btn-plataforma.active {
                background: #fff;
                color: #1D52F2;
                font-weight: 700;
                border-color: #fff;
                box-shadow: 0 4px 14px rgba(255, 255, 255, 0.3);
              }
              .btn-categoria-principal {
                font-family: 'Montserrat', sans-serif;
                font-weight: 700;
                font-size: 0.95rem;
                padding: 9px 18px;
                border-radius: 50px;
                background: linear-gradient(90deg, #4a7bff, #1d52f2);
                color: white;
                border: none;
                cursor: pointer;
                transition: all 0.3s ease;
                white-space: nowrap;
                box-shadow: 0 3px 10px rgba(74, 123, 255, 0.4);
              }
              .btn-categoria-principal:hover {
                background: linear-gradient(90deg, #1d52f2, #0c3ed9);
                transform: translateY(-1px);
                box-shadow: 0 5px 16px rgba(74, 123, 255, 0.5);
              }
              @media (max-width: 600px) {
                .btn-plataforma,
                .btn-categoria-principal {
                  font-size: 0.85rem;
                  padding: 7px 14px;
                }
              }
            `}</style>

            {/* Botón Categorías (más elegante y compacto) */}
            <button
              className="btn-categoria-principal"
              onClick={() => setShowCategorias(true)}
              aria-label="Abrir categorías"
            >
              📂 Categorías
            </button>

            {/* Botones de plataformas */}
            {plataformas.map((plataforma) => (
              <button
                key={plataforma}
                className={`btn-plataforma${plataformaActiva === plataforma ? ' active' : ''}`}
                onClick={() => handlePlataformaClick(plataforma)}
                aria-pressed={plataformaActiva === plataforma}
              >
                {plataforma}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Panel lateral de categorías (diseño moderno) */}
      {showCategorias && (
        <div
          className="position-fixed top-0 start-0 vh-100 d-flex flex-column"
          style={{
            width: '80vw',
            maxWidth: '300px',
            backgroundColor: '#f8f9fa',
            boxShadow: '4px 0 20px rgba(0, 0, 0, 0.15)',
            zIndex: 2000,
            animation: 'slideInLeft 0.3s ease-out',
            borderTopRightRadius: '16px',
            borderBottomRightRadius: '16px',
            padding: '24px 16px',
          }}
        >
          {/* Encabezado */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h5
              style={{
                margin: 0,
                fontWeight: 'bold',
                color: '#1D52F2',
                fontSize: '1.2rem',
              }}
            >
              📂 Categorías
            </h5>
            <button
              className="btn-close"
              style={{ fontSize: '1.2rem', color: '#555' }}
              onClick={() => setShowCategorias(false)}
              aria-label="Cerrar panel"
            ></button>
          </div>

          {/* Lista de categorías */}
          <div className="d-flex flex-column" style={{ gap: '10px' }}>
            {categorias.map((cat) => (
              <button
                key={cat}
                className="btn"
                style={{
                  textAlign: 'left',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  fontWeight: categoriaActiva === cat ? 'bold' : 'normal',
                  backgroundColor: categoriaActiva === cat ? '#1D52F2' : '#e9ecef',
                  color: categoriaActiva === cat ? '#fff' : '#333',
                  border: 'none',
                  transition: 'all 0.25s ease',
                  fontSize: '0.95rem',
                  boxShadow: categoriaActiva === cat
                    ? '0 4px 12px rgba(29, 82, 242, 0.3)'
                    : '0 1px 6px rgba(0,0,0,0.08)',
                }}
                onClick={() => handleCategoriaClick(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Animación */}
          <style jsx>{`
            @keyframes slideInLeft {
              from {
                transform: translateX(-100%);
                opacity: 0;
              }
              to {
                transform: translateX(0);
                opacity: 1;
              }
            }
            .btn-close:hover {
              background-color: #e9ecef;
              border-radius: 50%;
            }
            @media (max-width: 600px) {
              .position-fixed {
                width: '90vw';
                padding: '20px 12px';
              }
              h5 {
                font-size: 1.1rem;
              }
            }
          `}</style>
        </div>
      )}

      {/* Overlay oscuro al abrir el panel */}
      {showCategorias && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            zIndex: 1999,
            animation: 'fadeIn 0.3s',
          }}
          onClick={() => setShowCategorias(false)}
        ></div>
      )}
    </>
  );
};

export default Categorias;