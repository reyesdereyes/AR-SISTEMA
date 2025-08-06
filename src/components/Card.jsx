// components/Card.jsx
import 'primeicons/primeicons.css';
import { useState } from 'react';

const Card = ({
  image = './juego.jpg',
  titulo = 'Nombre del Juego',
  lanzamiento = '2025-08-05',
  precio = 0,
  descuento = 0, // en porcentaje, ej: 20 para 20%
  onComprar
}) => {
  const [isFav, setIsFav] = useState(false);

  // Calcular precio con descuento
  const finalPrice = descuento
    ? (precio * (100 - descuento) / 100).toFixed(2)
    : precio.toFixed(2);

  return (
    <div
      className="position-relative overflow-hidden"
      style={{
        width: '100%',
        maxWidth: '320px',
        borderRadius: '20px',
        background: '#ffffff',
        boxShadow: '0 8px 32px #00000015',
        transition: 'transform .25s, box-shadow .25s',
        cursor: 'pointer'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 12px 48px #00000025';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 8px 32px #00000015';
      }}
    >
      {/* Imagen con overlay */}
      <div className="position-relative">
        <img
          src={image}
          alt={titulo}
          style={{
            width: '100%',
            height: '190px',
            objectFit: 'cover',
            borderTopLeftRadius: '20px',
            borderTopRightRadius: '20px'
          }}
        />
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background: 'linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.6) 100%)',
            borderTopLeftRadius: '20px',
            borderTopRightRadius: '20px'
          }}
        />
      </div>

      {/* Badge descuento */}
      {descuento > 0 && (
        <div
          className="position-absolute top-2 start-2 badge bg-danger"
          style={{ fontSize: '0.75rem', padding: '6px 10px', borderRadius: '12px' }}
        >
          -{descuento}%
        </div>
      )}

      {/* Botón favorito */}
      <button
        className="btn btn-sm position-absolute top-2 end-2"
        style={{
          width: '34px',
          height: '34px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,.25)',
          backdropFilter: 'blur(6px)',
          color: isFav ? '#ff3b5c' : '#fff',
          border: 'none',
          transition: 'color .2s'
        }}
        onClick={(e) => {
          e.stopPropagation();
          setIsFav(!isFav);
        }}
      >
        <i className={`pi ${isFav ? 'pi-heart-fill' : 'pi-heart'}`}></i>
      </button>

      {/* Contenido */}
      <div className="p-3" style={{ minHeight: '130px', display: 'flex', flexDirection: 'column' }}>
        <h6
          className="fw-bold mb-1"
          style={{
            fontSize: '1.05rem',
            fontFamily: "'Montserrat', 'Arial', sans-serif",
            color: '#1D52F2',
            lineHeight: 1.2
          }}
        >
          {titulo}
        </h6>

        <small className="text-muted mb-2">
          <i className="pi pi-calendar me-1"></i>
          {new Date(lanzamiento).toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'short'
          })}
        </small>

        {/* Precio */}
        <div className="mt-auto">
          {descuento > 0 && (
            <small className="text-decoration-line-through text-muted me-1">
              ${precio.toFixed(2)}
            </small>
          )}
          <span className="fw-bold text-success" style={{ fontSize: '1.2rem' }}>
            ${finalPrice}
          </span>
        </div>

        <button
          className="btn btn-primary w-100 d-flex align-items-center justify-content-center mt-2"
          style={{
            borderRadius: '12px',
            fontWeight: 'bold',
            fontSize: '0.95rem',
            background: 'linear-gradient(90deg,#1D52F2 0%, #3a7afe 100%)',
            border: 'none',
            boxShadow: '0 2px 8px #1D52F250',
            transition: 'filter .2s'
          }}
          onMouseEnter={(e) => (e.target.style.filter = 'brightness(1.1)')}
          onMouseLeave={(e) => (e.target.style.filter = 'brightness(1)')}
          onClick={(e) => {
            e.stopPropagation();
            onComprar?.();
          }}
        >
          <i className="pi pi-shopping-cart me-2"></i>
          Comprar ahora
        </button>
      </div>
    </div>
  );
};

export default Card;