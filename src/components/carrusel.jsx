import 'primeicons/primeicons.css';

const Carrusel = () => {
  const image = './publicidad 2.png';

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        width: '100%',
        maxWidth: '100vw',
        height: 'clamp(90px, 24vw, 180px)',
        borderRadius: '20px',
        overflow: 'hidden',
        background: 'linear-gradient(90deg, #f8fafc 0%, #e3e8ee 100%)',
        margin: '0 auto',
        boxShadow: '0 4px 24px 0 #0002',
        border: '1px solid #e3e8ee',
        transition: 'box-shadow .3s',
      }}
    >
      <img
        src={image}
        alt="Banner"
        loading="lazy"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          borderRadius: '20px',
          transition: 'transform .3s',
        }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
      />
    </div>
  );
};

export default Carrusel;