// src/pages/ContactPage.js

import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, FloatingLabel, Spinner, Alert, Accordion, Card } from 'react-bootstrap';
import SEOMetadata from '../components/SEOMetadata';
import './ContactPage.css';

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz-DrlrfZpBKxJ2z5r6mxokPadi449NUMgY2nMxvNEwwUm1sLGwyo4tQcu4AAeOe7mR_Q/exec"; // ¡NO OLVIDES PONER TU URL REAL!

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    const formBody = new FormData(e.target);

    fetch(SCRIPT_URL, { method: 'POST', body: formBody })
      .then(response => response.json())
      .then(data => {
        if (data.result === 'success') {
          setSubmitStatus('success');
          setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        } else { throw new Error(data.message || 'Error desconocido del servidor.'); }
      })
      .catch(error => {
        console.error('Error al enviar el formulario:', error);
        setSubmitStatus('error');
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <>
      <SEOMetadata 
        title="Contacto"
        description="Ponte en contacto con DATAINTEK. Envíanos un mensaje a través de nuestro formulario o encuéntranos en Quito, Ecuador. Iniciemos tu próximo proyecto."
        url="/contacto"
      />
      <div className="contact-page-wrapper" style={{ paddingTop: '80px', paddingBottom: '0' }}>
        <Container className="py-5">
          <Row className="justify-content-center text-center mb-5">
            <Col md={8}><h1 className="display-4" style={{ fontWeight: 700 }}>Iniciemos una Conversación</h1><p className="lead text-muted">Estamos listos para escuchar tus ideas. Completa el formulario o contáctanos directamente. Tu próximo gran proyecto comienza aquí.</p></Col>
          </Row>

          {/* Envolvemos la sección principal en una Card para un mejor impacto visual */}
          <Card className="contact-card border-0 shadow-lg mb-5">
            <Card.Body className="p-4 p-md-5">
              <Row className="g-5">
                <Col lg={4}>
                  <h3 className="mb-4">Hablemos Directamente</h3>
                  <div className="contact-info-blocks">
                    <div className="contact-info-item"><i className="bi bi-geo-alt-fill contact-icon"></i><div><strong>Dirección:</strong><br />Carcelen, Quito, Ecuador</div></div>
                    <div className="contact-info-item"><i className="bi bi-telephone-fill contact-icon"></i><div><strong>Teléfono:</strong><br /><a href="tel:+593979127751">+593 0979 127 751</a></div></div>
                    <div className="contact-info-item"><i className="bi bi-envelope-fill contact-icon"></i><div><strong>Email:</strong><br /><a href="mailto:info@dataintek.com">info@dataintek.com</a></div></div>
                    <div className="contact-info-item"><i className="bi bi-clock-fill contact-icon"></i><div><strong>Horario:</strong><br />Lunes - Viernes: 9:00 AM - 6:00 PM</div></div>
                  </div>
                </Col>
                <Col lg={8}>
                  <h3 className="mb-4">Envíanos un Mensaje</h3>
                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col md={6}><FloatingLabel controlId="formName" label="Nombre Completo" className="mb-3"><Form.Control type="text" name="name" placeholder="Nombre Completo" required value={formData.name} onChange={handleChange} disabled={isSubmitting} /></FloatingLabel></Col>
                      <Col md={6}><FloatingLabel controlId="formEmail" label="Correo Electrónico" className="mb-3"><Form.Control type="email" name="email" placeholder="Correo Electrónico" required value={formData.email} onChange={handleChange} disabled={isSubmitting} /></FloatingLabel></Col>
                    </Row>
                    <Row>
                      <Col md={6}><FloatingLabel controlId="formPhone" label="Teléfono (Opcional)" className="mb-3"><Form.Control type="tel" name="phone" placeholder="Teléfono (Opcional)" value={formData.phone} onChange={handleChange} disabled={isSubmitting} /></FloatingLabel></Col>
                      <Col md={6}><FloatingLabel controlId="formSubject" label="Asunto" className="mb-3"><Form.Control type="text" name="subject" placeholder="Asunto" required value={formData.subject} onChange={handleChange} disabled={isSubmitting} /></FloatingLabel></Col>
                    </Row>
                    <FloatingLabel controlId="formMessage" label="Tu Mensaje" className="mb-3"><Form.Control as="textarea" name="message" placeholder="Tu Mensaje" style={{ height: '150px' }} required value={formData.message} onChange={handleChange} disabled={isSubmitting} /></FloatingLabel>
                    <div className="d-flex align-items-center"><Button type="submit" variant="primary" size="lg" className="cta-button-contact" disabled={isSubmitting}>{isSubmitting ? <><Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" /> Enviando...</> : 'Enviar Mensaje'}</Button></div>
                    {submitStatus === 'success' && <Alert variant="success" className="mt-3">¡Mensaje enviado con éxito! Gracias por contactarnos.</Alert>}
                    {submitStatus === 'error' && <Alert variant="danger" className="mt-3">Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo o contáctanos por email.</Alert>}
                  </Form>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Container>
      
        <div className="what-to-expect-section py-5">
          <Container>
            <Row className="justify-content-center text-center mb-5"><Col md={8}><h2 className="section-title">Nuestro Proceso de Contacto</h2></Col></Row>
            <Row className="text-center process-flow">
              <Col md={4} className="mb-4"><div className="process-step"><div className="process-icon-contact"><span>1</span></div><h5>Envío y Confirmación</h5><p>Recibimos tu mensaje y te enviaremos una confirmación automática a tu correo.</p></div></Col>
              <Col md={4} className="mb-4"><div className="process-step"><div className="process-icon-contact"><span>2</span></div><h5>Análisis del Equipo</h5><p>Nuestro equipo de expertos revisa tus requerimientos para entender tus necesidades.</p></div></Col>
              <Col md={4} className="mb-4"><div className="process-step"><div className="process-icon-contact"><span>3</span></div><h5>Respuesta en 24h</h5><p>Nos pondremos en contacto contigo en menos de 24 horas hábiles para agendar una reunión.</p></div></Col>
            </Row>
          </Container>
        </div>

        <Container className="my-5 py-5">
          <Row className="justify-content-center text-center mb-5"><Col md={8}><h2 className="section-title">Preguntas Frecuentes</h2></Col></Row>
          <Row className="justify-content-center">
            <Col md={9} lg={8}>
              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0"><Accordion.Header>¿Cuánto tiempo toma desarrollar un proyecto de software a medida?</Accordion.Header><Accordion.Body>La duración varía según la complejidad. Un proyecto pequeño puede tomar de 4 a 6 semanas, mientras que soluciones más complejas pueden requerir varios meses. Siempre comenzamos con una fase de análisis para darte una estimación precisa.</Accordion.Body></Accordion.Item>
                <Accordion.Item eventKey="1"><Accordion.Header>¿Ofrecen soporte y mantenimiento después de lanzar el proyecto?</Accordion.Header><Accordion.Body>¡Sí! Creemos en las relaciones a largo plazo. Ofrecemos planes de soporte y mantenimiento flexibles para asegurar que tu software siempre funcione de manera óptima y se mantenga actualizado con las últimas tecnologías.</Accordion.Body></Accordion.Item>
                <Accordion.Item eventKey="2"><Accordion.Header>¿Cómo se involucra mi empresa durante el proceso de desarrollo?</Accordion.Header><Accordion.Body>Tu participación es clave. Trabajamos con metodologías ágiles que incluyen reuniones periódicas (sprints), demostraciones de avances y canales de comunicación directos para asegurar que el producto final esté perfectamente alineado con tu visión.</Accordion.Body></Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
        
        <div className="map-container">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.8141719820737!2d-78.47812429999999!3d-0.08262270000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d585ebdee7f01f%3A0xd41c94245b379619!2sDATAINTEK%20CIA%20LTDA%20desarrollo%20de%20software!5e0!3m2!1ses-419!2sec!4v1755114522934!5m2!1ses-419!2sec" width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Ubicación de DATAINTEK"></iframe>
        </div>
      </div>
    </>
  );
};

export default ContactPage;