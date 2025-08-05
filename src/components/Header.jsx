import 'primeicons/primeicons.css';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#1D52F2', padding: '0 16px' }}>
      <div className="container-fluid px-0">
        <a className="navbar-brand text-white d-flex align-items-center" href="#" style={{ gap: '8px' }}>
          <img
            src="../gamer.png"
            alt="GameNest"
            width="36"
            height="36"
            style={{ objectFit: 'contain' }}
            className="d-inline-block align-middle"
          />
          <span
            className="fw-bold"
            style={{
              fontSize: '1.3rem',
              fontFamily: "'Montserrat', 'Arial', sans-serif",
              textShadow: '1px 1px 2px #00000030'
            }}
          >
            GameNest
          </span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <form className="d-flex flex-column flex-lg-row w-100 my-3 my-lg-0" role="search">
            <input
              className="form-control rounded-0 rounded-top"
              type="search"
              placeholder="Hoy estoy buscando..."
              aria-label="Search"
            />
            <button
              className="btn btn-light rounded-0 rounded-bottom"
              type="submit"
              style={{ borderTop: 'none' }}
            >
              <i className="pi pi-search"></i>
            </button>
          </form>

          <ul className="navbar-nav flex-column flex-lg-row align-items-start align-items-lg-center gap-2 gap-lg-3 text-white mt-3 mt-lg-0">
            <li className="nav-item">
              <a href="#" className="nav-link text-white d-flex align-items-center">
                <i className="pi pi-user me-1"></i> Registrarse
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link fw-bold text-white d-flex align-items-center">
                <i className="pi pi-user me-1"></i> Iniciar Sesión
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white d-flex align-items-center"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
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
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white d-flex align-items-center"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="pi pi-dollar me-1"></i>
                <span className="fw-bold">Moneda</span>
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Dólar</a></li>
                <li><a className="dropdown-item" href="#">Bolívar</a></li>
              </ul>
            </li>

            <li className="nav-item">
              <a href="#" className="nav-link text-white d-flex align-items-center">
                <i className="pi pi-shopping-bag" style={{ fontSize: '1.5rem' }}></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
