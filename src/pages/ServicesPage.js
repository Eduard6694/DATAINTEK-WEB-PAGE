// src/pages/ServicesPage.js

import React from 'react';
import SEOMetadata from '../components/SEOMetadata';
import Services from '../components/Services';
import CustomSoftware from '../components/CustomSoftware';

const OtherCapabilities = () => {
    return (
        <div className="other-capabilities-section bg-light py-5">
            <div className="container">
                <div className="row justify-content-center text-center mb-5">
                    <div className="col-md-8">
                        <h2 className="section-title">Capacidades Tecnológicas Integrales</h2>
                        <p className="lead text-muted">
                            Además de nuestras soluciones de software, ofrecemos servicios esenciales para construir y mantener tu infraestructura tecnológica.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="capability-card">
                            <i className="bi bi-diagram-3-fill capability-icon"></i>
                            <h5>Cableado Estructurado</h5>
                            <p>Diseñamos e implementamos sistemas de cableado de red de alto rendimiento que son la columna vertebral de tu comunicación digital.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="capability-card">
                            <i className="bi bi-hdd-stack-fill capability-icon"></i>
                            <h5>Venta de Equipos Tecnológicos</h5>
                            <p>Te asesoramos y proveemos con los servidores, computadoras y equipos de red que tu empresa necesita para operar eficientemente.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="capability-card">
                            <i className="bi bi-shield-check capability-icon"></i>
                            <h5>Consultoría de Ciberseguridad</h5>
                            <p>Protegemos tus activos digitales con auditorías de seguridad, planificación de defensa y estrategias de recuperación ante desastres.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ServicesPage = () => {
  return (
    <>
      <SEOMetadata 
        title="Nuestros Servicios"
        description="Descubre nuestras soluciones de software: Plataforma de Facturación Electrónica, Aplicación PTT Táctica, Desarrollo a Medida y consultoría en IA."
        url="/servicios"
      />
      <div style={{ paddingTop: '80px' }}> 
        <Services />
        <hr className="my-0" /> 
        <CustomSoftware />
        <hr className="my-0" />
        <OtherCapabilities />
      </div>
    </>
  );
};

export default ServicesPage;