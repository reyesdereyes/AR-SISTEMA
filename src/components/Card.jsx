// components/Card.jsx
import 'primeicons/primeicons.css';
import { useState } from 'react';

const Card = ({
  image = './juego.jpg',
  titulo = 'Nombre del Juego',
  lanzamiento = '2025-08-05',
  precio = 0,
  descuento = 0, // Porcentaje de descuento (ej: 20)
  onComprar,
}) => {
  const [isFav, setIsFav] = useState(false);

  // Calcular precio con descuento
  const finalPrice = descuento
    ? (precio * (100 - descuento) / 100).toFixed(2)
    : precio.toFixed(2);

  return (
    <div
      className="position-relative overflow-hidden h-100"
      style={{
        width: '100%',
        maxWidth: '340px', // Un poco más ancho para pantallas grandes
        borderRadius: '16px', // Menos redondeado en móviles
        background: '#ffffff',
        boxShadow: '0 6px 24px rgba(0, 0, 0, 0.12)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'pointer',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-6px)';
        e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 6px 24px rgba(0, 0, 0, 0.12)';
      }}
    >
      {/* Imagen del juego */}
      <div className="position-relative">
        <img
          src={image}
          alt={titulo}
          style={{
            width: '100%',
            height: '180px', // Ajustado para móviles
            objectFit: 'cover',
            borderTopLeftRadius: '16px',
            borderTopRightRadius: '16px',
          }}
          loading="lazy" // Mejora performance
        />
        {/* Overlay gradiente */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background: 'linear-gradient(180deg, transparent 40%, rgba(0, 0, 0, 0.7))',
            borderTopLeftRadius: '16px',
            borderTopRightRadius: '16px',
          }}
        />
      </div>

      {/* Badge de descuento */}
      {descuento > 0 && (
        <div
          className="position-absolute top-2 start-2 badge bg-danger"
          style={{
            fontSize: '0.75rem',
            padding: '6px 10px',
            borderRadius: '12px',
            fontWeight: 'bold',
          }}
        >
          -{descuento}%
        </div>
      )}

      {/* Botón de favorito */}
      <button
        className="btn btn-sm position-absolute top-2 end-2 d-flex align-items-center justify-content-center"
        style={{
          width: '36px',
          height: '36px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.25)',
          backdropFilter: 'blur(6px)',
          border: 'none',
          color: isFav ? '#ff3b5c' : '#fff',
          transition: 'all 0.2s ease',
          boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
        }}
        onClick={(e) => {
          e.stopPropagation();
          setIsFav(!isFav);
        }}
        aria-label={isFav ? 'Eliminar de favoritos' : 'Agregar a favoritos'}
      >
        <i className={`pi ${isFav ? 'pi-heart-fill' : 'pi-heart'}`} style={{ fontSize: '1rem' }}></i>
      </button>

      {/* Contenido */}
      <div
        className="p-3"
        style={{
          minHeight: '140px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        {/* Título */}
        <h6
          className="fw-bold mb-1 text-truncate"
          style={{
            fontSize: '1.05rem',
            fontFamily: "'Montserrat', sans-serif",
            color: '#1D52F2',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
          title={titulo}
        >
          {titulo}
        </h6>

        {/* Fecha de lanzamiento */}
        <small className="text-muted mb-2 d-flex align-items-center">
          <i className="pi pi-calendar me-1"></i>
          {new Date(lanzamiento).toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'short',
          })}
        </small>

        {/* Precio */}
        <div className="d-flex align-items-center mb-2">
          {descuento > 0 && (
            <small className="text-decoration-line-through text-muted me-2">
              ${precio.toFixed(2)}
            </small>
          )}
          <span
            className="fw-bold text-success"
            style={{
              fontSize: '1.25rem',
            }}
          >
            ${finalPrice}
          </span>
        </div>

        {/* Botón de compra */}
        <button
          className="btn w-100 d-flex align-items-center justify-content-center py-2"
          style={{
            borderRadius: '12px',
            fontWeight: '600',
            fontSize: '0.95rem',
            background: 'linear-gradient(90deg, #1D52F2 0%, #3a7afe 100%)',
            color: '#fff',
            border: 'none',
            boxShadow: '0 3px 10px rgba(29, 82, 242, 0.4)',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-1px)';
            e.target.style.boxShadow = '0 5px 16px rgba(29, 82, 242, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 3px 10px rgba(29, 82, 242, 0.4)';
          }}
          onClick={(e) => {
            e.stopPropagation();
            onComprar?.();
          }}
        >
          <i className="pi pi-shopping-cart me-2"></i>
          Comprar
        </button>
      </div>
    </div>
  );
};

export default Card;