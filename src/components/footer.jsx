import React from 'react';

const Footer = () => {
  return (
    <footer className="py-5 bg-primary text-white">
      <div className="container">
        <div className="row gy-4">
          {/* Sección 1 */}
          <div className="col-12 col-sm-6 col-md-2">
            <h5 className="text-uppercase fw-bold">Sección</h5>
            <ul className="nav flex-column">
              {['Inicio', 'Características', 'Precios', 'FAQs', 'Acerca de'].map(item => (
                <li key={item} className="nav-item mb-2">
                  <a
                    href="#"
                    className="nav-link p-0 text-white link-opacity-75-hover"
                    style={{ transition: 'color 0.3s' }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Sección 2 */}
          <div className="col-12 col-sm-6 col-md-2">
            <h5 className="text-uppercase fw-bold">Sección</h5>
            <ul className="nav flex-column">
              {['Blog', 'Soporte', 'Política', 'Términos', 'Contacto'].map(item => (
                <li key={item} className="nav-item mb-2">
                  <a
                    href="#"
                    className="nav-link p-0 text-white link-opacity-75-hover"
                    style={{ transition: 'color 0.3s' }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Sección 3 */}
          <div className="col-12 col-sm-6 col-md-2">
            <h5 className="text-uppercase fw-bold">Redes</h5>
            <ul className="nav flex-column">
              {['Instagram', 'Facebook', 'Twitter', 'LinkedIn'].map(item => (
                <li key={item} className="nav-item mb-2">
                  <a
                    href="#"
                    className="nav-link p-0 text-white link-opacity-75-hover"
                    style={{ transition: 'color 0.3s' }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-12 col-sm-6 col-md-5 offset-md-1">
            <form onSubmit={e => e.preventDefault()}>
              <h5 className="text-uppercase fw-bold">Suscríbete a nuestro boletín</h5>
              <p className="mb-3">Recibe novedades y promociones mensuales.</p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label htmlFor="newsletter1" className="visually-hidden">Correo electrónico</label>
                <input
                  id="newsletter1"
                  type="email"
                  className="form-control"
                  placeholder="Correo electrónico"
                  required
                  aria-label="Correo electrónico"
                  style={{
                    borderRadius: '0.375rem',
                    border: 'none',
                    padding: '10px 15px',
                    fontSize: '1rem',
                  }}
                />
                <button
                  type="submit"
                  className="btn btn-light text-primary fw-semibold"
                  style={{
                    borderRadius: '0.375rem',
                    minWidth: '120px',
                    boxShadow: '0 4px 12px rgba(255, 255, 255, 0.3)',
                    transition: 'background-color 0.3s, color 0.3s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.backgroundColor = '#1D52F2';
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.backgroundColor = 'white';
                    e.currentTarget.style.color = '#1D52F2';
                  }}
                >
                  Suscribirse
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center py-4 my-4 border-top border-light border-opacity-25">
          <p className="mb-0 small opacity-75">© 2025 Company, Inc. Todos los derechos reservados.</p>
          <ul className="list-unstyled d-flex gap-3 mb-0">
            {/* Usar iconos SVG o Bootstrap Icons si tienes */}
            <li>
              <a href="#" className="text-white opacity-75-hover" aria-label="Instagram" style={{ fontSize: '1.25rem' }}>
                <i className="bi bi-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#" className="text-white opacity-75-hover" aria-label="Facebook" style={{ fontSize: '1.25rem' }}>
                <i className="bi bi-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#" className="text-white opacity-75-hover" aria-label="Twitter" style={{ fontSize: '1.25rem' }}>
                <i className="bi bi-twitter"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <style jsx>{`
        a.link-opacity-75-hover:hover {
          opacity: 1 !important;
          color: #ffd43b !important; /* amarillo brillante para hover */
          text-decoration: none;
        }
        a.opacity-75-hover:hover {
          opacity: 1 !important;
          color: #ffd43b !important;
          text-decoration: none;
        }
        .btn-light:hover {
          background-color: #1D52F2 !important;
          color: white !important;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
