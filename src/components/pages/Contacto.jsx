import React, { useState } from 'react';
import './Contacto.css';

const Contacto = () => {
  // Estados del Formulario.
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Funcion para ir guardando lo completado.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Funcion para enviar el form.
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logica para mandar el Form.
    // Volver a cero el Form.
    // console.log(formData);
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contacto</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Mensaje:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="contact-button">Enviar</button>
      </form>
    </div>
  );
};

export default Contacto;
