import { useState } from 'react';
import 'primeicons/primeicons.css';

const Categorias = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const games = [
    'Grand Theft Auto V',
    'Minecraft',
    'Fortnite',
    'Valorant',
    'League of Legends',
    'Counter-Strike 2',
    'Call of Duty: MW III',
    'FIFA 24',
    'Cyberpunk 2077',
    'Elden Ring',
    'The Legend of Zelda',
    'Super Mario Bros Wonder',
    'Hogwarts Legacy',
    'Red Dead Redemption 2',
    'Apex Legends',
    'Among Us',
    'Fall Guys',
    'Rocket League',
    'Overwatch 2',
    'Genshin Impact',
    'Roblox',
    'Terraria',
    'Stardew Valley',
    'The Sims 4',
    'Forza Horizon 5',
  ];

  const items = [
    { icon: 'pi-desktop', label: 'PC' },
    { icon: 'pi-android', label: 'Android' },
    { icon: 'pi-playstation', label: 'PlayStation' },
    { icon: 'pi-xbox', label: 'Xbox' },
    { icon: 'pi-star', label: 'Top Juegos' },
    { icon: 'pi-list', label: 'Todos los Juegos' },
  ];

  return (
    <>
      {/* Barra horizontal */}
      <nav
        className="navbar navbar-dark w-100"
        style={{ backgroundColor: '#1D52F2', padding: '8px 0' }}
      >
        <div className="container-fluid px-2 px-lg-4 d-flex align-items-center flex-wrap">
          <button
            className="text-white fw-bold d-flex align-items-center me-3 border-0 bg-transparent"
            style={{
              fontSize: '1rem',
              fontFamily: "'Montserrat', 'Arial', sans-serif",
              textShadow: '1px 1px 2px #00000030',
              whiteSpace: 'nowrap',
              gap: '8px',
              cursor: 'pointer',
              padding: '5px 0',
            }}
            onClick={() => setShowSidebar(true)}
          >
            <i className="pi pi-th-large me-2"></i>
            Explora Videojuegos
          </button>

          <div
            className="d-flex overflow-x-auto overflow-lg-visible w-100 justify-content-lg-center"
            style={{
              gap: '8px',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            <style>{`
              div::-webkit-scrollbar {
                display: none;
              }
              @media (max-width: 991px) {
                .btn-categoria {
                  font-size: 0.85rem !important;
                  padding: 6px 10px !important;
                }
              }
              @media (min-width: 992px) {
                .btn-categoria {
                  font-size: 0.95rem !important;
                  padding: 8px 16px !important;
                }
              }
            `}</style>

            {items.map(({ icon, label }) => (
              <button
                key={label}
                className="btn btn-outline-light rounded-pill text-nowrap d-flex align-items-center btn-categoria"
                style={{
                  fontFamily: "'Montserrat', 'Arial', sans-serif",
                  fontWeight: 'bold',
                  textShadow: '1px 1px 2px #00000030',
                  gap: '8px',
                  border: '1px solid rgba(255,255,255,0.4)',
                  transition: 'all .2s ease',
                  color: '#fff',
                  backgroundColor: 'transparent',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = '#fff';
                  e.currentTarget.style.color = '#1D52F2';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#fff';
                }}
              >
                <i className={`pi ${icon}`}></i>
                {label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Sidebar de juegos */}
      {showSidebar && (
        <div
          className="position-fixed top-0 start-0 vw-100 vh-100"
          style={{ zIndex: 1050, background: 'rgba(0,0,0,0.5)' }}
          onClick={() => setShowSidebar(false)}
        >
          <aside
            className="bg-white h-100 shadow-lg"
            style={{
              width: '80vw',
              maxWidth: '320px',
              minWidth: '150px',
              position: 'absolute',
              left: 0,
              top: 0,
              borderTopRightRadius: '16px',
              borderBottomRightRadius: '16px',
              boxShadow: '0 0 24px #0002',
              display: 'flex',
              flexDirection: 'column',
              animation: 'slideInLeft .3s',
            }}
            onClick={e => e.stopPropagation()}
          >
            <div className="d-flex justify-content-between align-items-center p-3 border-bottom">
              <span
                className="fw-bold"
                style={{
                  fontSize: '1rem',
                  fontFamily: "'Montserrat', 'Arial', sans-serif",
                  textShadow: '1px 1px 2px #00000030',
                }}
              >
                <i className="pi pi-th-large me-2"></i>
                Todos los Juegos
              </span>
              <button
                className="btn-close"
                aria-label="Cerrar"
                style={{ fontSize: '1.1rem' }}
                onClick={() => setShowSidebar(false)}
              ></button>
            </div>
            <ul className="list-unstyled flex-grow-1 overflow-auto px-2 py-2 mb-0">
              {games.map((g) => (
                <li
                  key={g}
                  className="py-1 px-2 border-bottom"
                  style={{
                    fontFamily: "'Montserrat', 'Arial', sans-serif",
                    fontSize: '0.8rem', // más pequeño
                    color: '#1D52F2',
                    fontWeight: 500,
                    cursor: 'pointer',
                    borderRadius: '8px',
                    transition: 'background .2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = '#f0f4ff'}
                  onMouseLeave={e => e.currentTarget.style.background 
                    = 'transparent'}
                >
                  {g}
                </li>
              ))}
            </ul>
          </aside>
          <style>{`
            @keyframes slideInLeft {
              from { transform: translateX(-100%); opacity: 0; }
              to { transform: translateX(0); opacity: 1; }
            }
            @media (max-width: 600px) {
              aside {
                width: 95vw !important;
                max-width: 99vw !important;
                min-width: 120px !important;
              }
              .btn-close {
                font-size: 1.3rem !important;
              }
              .fw-bold {
                font-size: 0.8rem !important;
              }
              li {
                font-size: 0.7rem !important;
                padding-top: 4px !important;
                padding-bottom: 4px !important;
              }
            }
          `}</style>
        </div>
      )}
    </>
  );
};

export default Categorias;