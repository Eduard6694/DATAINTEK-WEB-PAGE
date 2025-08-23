// src/components/StatsCounter.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import './StatsCounter.css';

const StatItem = ({ value, label, icon }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // La animación solo se ejecuta una vez
    threshold: 0.5, // Se activa cuando el 50% del elemento es visible
  });

  return (
    <Col md={3} sm={6} className="text-center mb-4">
      <div ref={ref}>
        <i className={`bi ${icon} stat-icon`}></i>
        <h2 className="stat-number">
          {inView ? <CountUp end={value} duration={2.5} /> : '0'}+
        </h2>
        <p className="stat-label">{label}</p>
      </div>
    </Col>
  );
};

const StatsCounter = () => {
  return (
    <div className="stats-section bg-light py-5">
      <Container>
        <Row>
          <StatItem value={25} label="Proyectos Completados" icon="bi-check-circle-fill" />
          <StatItem value={5} label="Años de Experiencia" icon="bi-calendar-event-fill" />
          <StatItem value={15} label="Clientes Satisfechos" icon="bi-emoji-smile-fill" />
          <StatItem value={10} label="Soluciones con IA" icon="bi-robot" />
        </Row>
      </Container>
    </div>
  );
};

export default StatsCounter;