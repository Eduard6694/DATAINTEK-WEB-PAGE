// src/components/FinalCTA.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './FinalCTA.css';

const FinalCTA = () => {
    return(
        <section className="final-cta-section text-center py-5">
            <Container>
                <Row className="justify-content-center">
                    <Col md={8}>
                        <h2>¿Listo para transformar tu negocio?</h2>
                        <p className="lead my-4">No dejes que tus ideas se queden en el papel. Hablemos sobre cómo podemos construir juntos la solución tecnológica que necesitas.</p>
                        <Button as={Link} to="/contacto" variant="primary" size="lg" className="cta-button-final">
                            Empieza tu Proyecto Ahora
                        </Button>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default FinalCTA;