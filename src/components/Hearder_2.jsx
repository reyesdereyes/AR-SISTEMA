import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Hearder_2 = () => {
  const [hover, setHover] = useState(false);

  return (
    <nav style={styles.navbar}>
      <div style={styles.navbarLogo}>
        <img src="../gamer.png" alt="Logo" style={styles.logoImage} />
        <span style={styles.logoText}>GameNest</span>
      </div>

      <Link
        to="/"
        style={{
          ...styles.storeButton,
          ...(hover ? styles.storeButtonHover : {}),
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        Ir a la tienda
      </Link>
    </nav>
  );
};

const styles = {
  // Contenedor principal
  navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',            // permite que salte línea si no cabe
    backgroundColor: '#1D52F2',
    padding: '12px 20px',
    borderBottom: '3px solid #1648c9',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    width: '100%',
    boxSizing: 'border-box',     // evita que el padding sume al ancho total
  },

  // Logo + texto
  navbarLogo: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    flexShrink: 0,               // evita que el logo se encoja
  },
  logoImage: {
    height: 40,
    width: 'auto',
    maxWidth: '100%',
    verticalAlign: 'middle',
    filter: 'drop-shadow(1px 1px 1px rgba(0,0,0,0.2))',
  },
  logoText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 700,
    letterSpacing: '1px',
    userSelect: 'none',
    whiteSpace: 'nowrap',        // evita que el texto se parta en dos líneas
  },

  // Botón
  storeButton: {
    display: 'inline-block',
    border: '2px solid #fff',
    background: 'none',
    color: '#fff',
    fontSize: 16,
    borderRadius: 25,
    padding: '8px 20px',
    cursor: 'pointer',
    fontWeight: 'bold',
    textDecoration: 'none',
    transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: '0 0 0 rgba(255,255,255,0)',
    marginTop: 8,                // separación cuando salta línea
  },
  storeButtonHover: {
    backgroundColor: '#fff',
    color: '#1D52F2',
    boxShadow: '0 6px 20px rgba(255,255,255,0.6)',
  },

  /* ---------- MEDIA QUERIES ---------- */
  '@media (min-width: 600px)': {
    navbar: {
      padding: '15px 32px',
    },
    logoImage: {
      height: 48,
    },
    logoText: {
      fontSize: 28,
    },
    storeButton: {
      fontSize: 18,
      padding: '8px 28px',
      marginTop: 0,              // sin margen extra en pantallas grandes
    },
  },
};

export default Hearder_2;