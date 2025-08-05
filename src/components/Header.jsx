import 'primeicons/primeicons.css';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#1D52F2', padding: '0 20px' }}>
      <div className="container-fluid px-0">
        <a className="navbar-brand text-white d-flex align-items-center" href="#" style={{ gap: '10px' }}>
          <img
            src="../gamer.png"
            alt="TuZonaMarket"
            width="48"
            height="48"
            style={{ objectFit: 'contain', marginRight: '8px', marginLeft: '2px' }}
            className="d-inline-block align-middle"
          />
          <span
            className="fw-bold"
            style={{
              fontSize: '2rem',
              letterSpacing: '-1px',
              fontFamily: "'Montserrat', 'Arial', sans-serif",
              textShadow: '1px 1px 2px #00000030'
            }}
          >
            GameNest
          </span>
        </a>
        {/* Botón hamburguesa para móviles */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarContent">
          <form className="d-flex mx-lg-4 my-2 my-lg-0" role="search" style={{ maxWidth: '800px', width: '100%' }}>
            <input className="form-control rounded-end-0" type="search" placeholder="Hoy estoy buscando..." aria-label="Search" />
            <button className="btn btn-light rounded-start-0" type="submit">
              <i className="pi pi-search" style={{ fontSize: '1.3rem' }}></i>
            </button>
          </form>
          <div className="d-flex flex-column flex-lg-row align-items-start align-items-lg-center text-white gap-2 gap-lg-3 mt-2 mt-lg-0">
            <a href="#" className="nav-link text-white d-flex align-items-center">
              <i className="pi pi-user me-1"></i>
              Registrarse
            </a>
            <a href="#" className="nav-link fw-bold text-white d-flex align-items-center">
              <i className="pi pi-user me-1"></i>
              Iniciar Sesión
            </a>
            <div className="dropdown">
              <a className="nav-link dropdown-toggle text-white d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="pi pi-map-marker me-1"></i>
                <span className="fw-bold">Zona</span>
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Carabobo</a></li>
                <li><a className="dropdown-item" href="#">Guanare</a></li>
                <li><a className="dropdown-item" href="#">Puerto Cabello</a></li>
                <li><a className="dropdown-item" href="#">Caracas</a></li>
                <li><a className="dropdown-item" href="#">Barcelona</a></li>
              </ul>
            </div>
            <div className="dropdown">
              <a className="nav-link dropdown-toggle text-white d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="pi pi-dollar me-1"></i>
                <span className="fw-bold">Moneda</span>
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Dólar</a></li>
                <li><a className="dropdown-item" href="#">Bolívar</a></li>
              </ul>
            </div>
            <a href="#" className="nav-link text-white d-flex align-items-center">
              <i className="pi pi-shopping-bag" style={{ fontSize: '1.7rem' }}></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header;
