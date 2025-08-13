// src/pages/ContactPage.js

import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, FloatingLabel } from 'react-bootstrap';
import './ContactPage.css';

const ContactPage = () => {
  // Estado para manejar los datos del formulario
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  // Función para manejar los cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario a un backend o servicio de email
    // Por ahora, solo mostraremos los datos en la consola y un mensaje de éxito.
    console.log('Formulario enviado:', formData);
    alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
    // Limpiar el formulario
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div style={{ paddingTop: '80px', paddingBottom: '50px' }}>
      <Container>
        {/* --- Título de la Página --- */}
        <Row className="justify-content-center text-center my-5">
          <Col md={8}>
            <h1 className="display-4" style={{ fontWeight: 700 }}>Ponte en Contacto</h1>
            <p className="lead text-muted">
              ¿Tienes una pregunta, una idea para un proyecto o simplemente quieres saber más sobre nosotros? Estamos aquí para ayudarte.
            </p>
          </Col>
        </Row>

        {/* --- Sección Principal: Info y Formulario --- */}
        <Row className="g-5">
          {/* Columna Izquierda: Información de Contacto */}
          <Col lg={4}>
            <h3 className="mb-4">Información de Contacto</h3>
            <ul className="list-unstyled contact-info-list">
              <li className="d-flex align-items-start mb-3">
                <i className="bi bi-geo-alt-fill contact-icon"></i>
                <div>
                  <strong>Dirección:</strong><br />
                  Tu Dirección, Ciudad, País
                </div>
              </li>
              <li className="d-flex align-items-start mb-3">
                <i className="bi bi-telephone-fill contact-icon"></i>
                <div>
                  <strong>Teléfono:</strong><br />
                  <a href="tel:+1234567890">+1 234 567 890</a>
                </div>
              </li>
              <li className="d-flex align-items-start mb-3">
                <i className="bi bi-envelope-fill contact-icon"></i>
                <div>
                  <strong>Email:</strong><br />
                  <a href="mailto:contacto@dataintek.com">contacto@dataintek.com</a>
                </div>
              </li>
              <li className="d-flex align-items-start mb-3">
                <i className="bi bi-clock-fill contact-icon"></i>
                <div>
                  <strong>Horario:</strong><br />
                  Lunes - Viernes: 9:00 AM - 6:00 PM
                </div>
              </li>
            </ul>
          </Col>

          {/* Columna Derecha: Formulario de Contacto */}
          <Col lg={8}>
            <h3 className="mb-4">Envíanos un Mensaje</h3>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={6}>
                  <FloatingLabel controlId="formName" label="Nombre Completo" className="mb-3">
                    <Form.Control type="text" name="name" placeholder="Nombre Completo" required value={formData.name} onChange={handleChange} />
                  </FloatingLabel>
                </Col>
                <Col md={6}>
                  <FloatingLabel controlId="formEmail" label="Correo Electrónico" className="mb-3">
                    <Form.Control type="email" name="email" placeholder="Correo Electrónico" required value={formData.email} onChange={handleChange} />
                  </FloatingLabel>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <FloatingLabel controlId="formPhone" label="Teléfono (Opcional)" className="mb-3">
                    <Form.Control type="tel" name="phone" placeholder="Teléfono (Opcional)" value={formData.phone} onChange={handleChange} />
                  </FloatingLabel>
                </Col>
                <Col md={6}>
                  <FloatingLabel controlId="formSubject" label="Asunto" className="mb-3">
                    <Form.Control type="text" name="subject" placeholder="Asunto" required value={formData.subject} onChange={handleChange} />
                  </FloatingLabel>
                </Col>
              </Row>
              <FloatingLabel controlId="formMessage" label="Tu Mensaje" className="mb-3">
                <Form.Control as="textarea" name="message" placeholder="Tu Mensaje" style={{ height: '150px' }} required value={formData.message} onChange={handleChange} />
              </FloatingLabel>
              <Button type="submit" variant="primary" size="lg" className="cta-button-contact">
                Enviar Mensaje
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      
      {/* --- Sección del Mapa --- */}
      <div className="map-container mt-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.8141719820737!2d-78.47812429999999!3d-0.08262270000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d585ebdee7f01f%3A0xd41c94245b379619!2sDATAINTEK%20CIA%20LTDA%20desarrollo%20de%20software!5e0!3m2!1ses-419!2sec!4v1755114522934!5m2!1ses-419!2sec" allowfullscreen="" referrerpolicy="no-referrer-when-downgrade"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;