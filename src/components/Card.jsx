import 'primeicons/primeicons.css';

const Card = ({ 
  image = './juego.jpg', 
  titulo = 'Nombre del Juego', 
  lanzamiento = '2025-08-05', 
  onComprar 
}) => {
  return (
    <div
      className="card shadow-sm"
      style={{
        width: '100%',
        maxWidth: '320px',
        borderRadius: '18px',
        overflow: 'hidden',
        background: '#fff',
        margin: '0 auto',
        boxShadow: '0 4px 16px #0001',
        border: '1px solid #e3e8ee',
        transition: 'box-shadow .3s',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <img
        src={image}
        alt={titulo}
        style={{
          width: '100%',
          height: '180px',
          objectFit: 'cover',
          borderTopLeftRadius: '18px',
          borderTopRightRadius: '18px'
        }}
      />
      <div style={{ padding: '16px' }}>
        <h5
          className="fw-bold mb-2"
          style={{
            fontSize: '1.1rem',
            fontFamily: "'Montserrat', 'Arial', sans-serif",
            color: '#1D52F2',
            marginBottom: '8px'
          }}
        >
          {titulo}
        </h5>
        <div
          style={{
            fontSize: '0.95rem',
            color: '#555',
            marginBottom: '16px'
          }}
        >
          <i className="pi pi-calendar" style={{ marginRight: '6px', color: '#1D52F2' }}></i>
          Lanzamiento: <span style={{ fontWeight: 500 }}>{lanzamiento}</span>
        </div>
        <button
          className="btn btn-primary w-100 d-flex align-items-center justify-content-center"
          style={{
            borderRadius: '10px',
            fontWeight: 'bold',
            fontSize: '1rem',
            background: 'linear-gradient(90deg, #1D52F2 60%, #3a7afe 100%)',
            border: 'none',
            boxShadow: '0 2px 8px #1D52F220',
            transition: 'background .2s'
          }}
          onClick={onComprar}
        >
          <i className="pi pi-shopping-cart me-2"></i> Comprar
        </button>
      </div>
    </div>
  );
};

export default Card;