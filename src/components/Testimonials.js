// src/components/Testimonials.js

import React from 'react';
import { Container, Row, Col, Carousel, Card } from 'react-bootstrap';
import './Testimonials.css';

// Aquí puedes añadir o modificar los testimonios que quieres mostrar.
const testimonialsData = [
  {
    quote: "La plataforma de facturación que DATAINTEK desarrolló para nosotros ha sido un cambio radical. Es rápida, intuitiva y nos ha ahorrado incontables horas de trabajo manual.",
    author: "Ana García",
    company: "CEO de InnovaTech"
  },
  {
    quote: "El profesionalismo y el conocimiento técnico del equipo son excepcionales. Entendieron nuestras necesidades de IA a la perfección y entregaron un producto que superó nuestras expectativas.",
    author: "Carlos Rodríguez",
    company: "Gerente de Operaciones, Logística Global"
  },
  {
    quote: "Desde el primer contacto hasta el soporte post-lanzamiento, la comunicación fue fluida y transparente. Recomiendo totalmente a DATAINTEK para cualquier proyecto de software complejo.",
    author: "Laura Martínez",
    company: "Directora de TI, Soluciones Médicas"
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <Container>
        <Row className="justify-content-center text-center mb-5">
          <Col md={8}>
            <h2 className="section-title text-white">La Confianza de Nuestros Clientes</h2>
            <p className="lead text-white-50">
              Historias reales de empresas que han transformado su negocio con nosotros.
            </p>
          </Col>
        </Row>
        <Carousel indicators={true} controls={false}>
          {testimonialsData.map((testimonial, index) => (
            <Carousel.Item key={index} className="testimonial-carousel-item">
              <Row className="justify-content-center">
                <Col md={9} lg={8}>
                  <Card className="testimonial-card">
                    <Card.Body>
                      <blockquote className="blockquote mb-0">
                        <p>"{testimonial.quote}"</p>
                        <footer className="blockquote-footer">
                          {testimonial.author}, <cite title="Source Title">{testimonial.company}</cite>
                        </footer>
                      </blockquote>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
};

export default Testimonials;