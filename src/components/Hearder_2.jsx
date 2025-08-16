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
  navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#1D52F2', // barra azul profesional
    padding: '15px 32px',
    borderBottom: '3px solid #1648c9',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)', // sutil sombra para profundidad
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  navbarLogo: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
  },
  logoImage: {
    height: 48,
    width: 'auto',
    verticalAlign: 'middle',
    filter: 'drop-shadow(1px 1px 1px rgba(0,0,0,0.2))', // sombra sutil para logo
  },
  logoText: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 700,
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    letterSpacing: '1px',
    userSelect: 'none',
  },
  storeButton: {
    display: 'inline-block',
    border: '2px solid #fff',
    background: 'none',
    color: '#fff',
    fontSize: 18,
    borderRadius: 25,
    padding: '8px 28px',
    cursor: 'pointer',
    fontWeight: 'bold',
    textDecoration: 'none',
    transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: '0 0 0 rgba(255,255,255,0)',
    position: 'relative',
    overflow: 'hidden',
  },
  storeButtonHover: {
    backgroundColor: '#fff',
    color: '#1D52F2',
    boxShadow: '0 6px 20px rgba(255,255,255,0.6)',
  },
};

export default Hearder_2;
