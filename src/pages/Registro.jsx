import React, { useState } from 'react';
import Hearder_2 from '../components/Hearder_2';

const Registro = () => {
  const [form, setForm] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    contrasena: '',
    repetirContrasena: '',
    zona: '',
    terminos: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Registro enviado');
  };

  return (
    <>
      <Hearder_2 />
      <div style={styles.container}>
        <form style={styles.form} onSubmit={handleSubmit}>
          <h2 style={styles.title}>Registro de Usuario</h2>
          <input
            style={styles.input}
            type="text"
            placeholder="Nombre y Apellido"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            required
          />
          <input
            style={styles.input}
            type="email"
            placeholder="Correo"
            name="correo"
            value={form.correo}
            onChange={handleChange}
            required
          />
          <input
            style={styles.input}
            type="tel"
            placeholder="Teléfono"
            name="telefono"
            value={form.telefono}
            onChange={handleChange}
            required
          />
          <input
            style={styles.input}
            type="password"
            placeholder="Contraseña"
            name="contrasena"
            value={form.contrasena}
            onChange={handleChange}
            required
          />
          <input
            style={styles.input}
            type="password"
            placeholder="Repetir Contraseña"
            name="repetirContrasena"
            value={form.repetirContrasena}
            onChange={handleChange}
            required
          />
          <label style={styles.labelZona}>
            Zona preferencial
            <select
              style={styles.select}
              name="zona"
              value={form.zona}
              onChange={handleChange}
              required
            >
              <option value="">Seleccionar</option>
              <option value="norte">Norte</option>
              <option value="sur">Sur</option>
              <option value="centro">Centro</option>
            </select>
          </label>
          <div style={styles.terminosRow}>
            <input
              type="checkbox"
              id="terminos"
              name="terminos"
              checked={form.terminos}
              onChange={handleChange}
              required
            />
            <label htmlFor="terminos" style={styles.terminosLabel}>
              Acepto los términos y condiciones.&nbsp;
              <a href="#" style={styles.link}>Leer Términos y Condiciones</a>
            </label>
          </div>
          <div style={styles.loginLink}>
            <a href="#" style={styles.link}>
              ¿Ya tienes una cuenta? Inicia sesión desde aquí.
            </a>
          </div>
          <button style={styles.registerButton} type="submit">Registrar</button>
        </form>
      </div>
    </>
  );
};


const styles = {
  container: {
    background: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    minHeight: '80vh',
    paddingTop: '30px',
    paddingLeft: 10,
    paddingRight: 10,
  },
  form: {
    width: '100%',
    maxWidth: 520,
    display: 'flex',
    flexDirection: 'column',
    gap: '18px',
    background: '#fff',
    borderRadius: '10px',
    boxShadow: '0 2px 16px 0 #eeeeee',
    background: '#f9f9f9',
    padding: '30px 32px 32px 32px',
    boxSizing: 'border-box',
  },
  title: {
    textAlign: 'center',
    marginBottom: '14px',
    color: '#1D52F2', // azul dominante
    fontWeight: 700,
    fontSize: '1.5em',
  },
  input: {
    fontSize: '1em',
    padding: '14px 16px',
    borderRadius: '10px',
    border: '1.5px solid #1D52F2', // borde azul
    outline: 'none',
    width: '100%',
    boxSizing: 'border-box',
  },
  labelZona: {
    fontWeight: 'bold',
    color: '#1D52F2',
    fontSize: '17px',
    marginBottom: '6px',
    display: 'flex',
    flexDirection: 'column',
  },
  select: {
    marginTop: '6px',
    fontSize: '1em',
    padding: '12px 16px',
    borderRadius: '10px',
    border: '1.5px solid #1D52F2',
    outline: 'none',
    width: '100%',
    boxSizing: 'border-box',
    color: '#343434',
  },
  terminosRow: {
    display: 'flex',
    alignItems: 'center',
  },
  terminosLabel: {
    fontSize: '15px',
    color: '#7b7b7b',
    marginLeft: '8px',
  },
  link: {
    color: '#1D52F2',
    textDecoration: 'underline',
    cursor: 'pointer',
  },
  loginLink: {
    fontSize: '15px',
    color: '#1D52F2',
    marginBottom: '-12px',
    marginTop: '-10px',
  },
  registerButton: {
    background: '#1D52F2',
    color: '#fff',
    fontWeight: 'bold',
    borderRadius: '30px',
    fontSize: '1.25em',
    padding: '12px',
    border: 'none',
    cursor: 'pointer',
    marginTop: '8px',
    transition: 'background 0.3s ease',
  },
};

export default Registro;
