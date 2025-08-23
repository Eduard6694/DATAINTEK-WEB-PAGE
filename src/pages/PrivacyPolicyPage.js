// src/pages/PrivacyPolicyPage.js

import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import SEOMetadata from '../components/SEOMetadata';
import './PrivacyPolicyPage.css';

const PrivacyPolicyPage = () => {
  return (
    <>
      <SEOMetadata 
        title="Política de Privacidad y Tratamiento de Datos"
        description="Conozca cómo DATAINTEK CIA. LTDA. recopila, utiliza y protege sus datos a través de todos nuestros productos, software y servicios."
        url="/politica-de-privacidad"
      />
      <div className="privacy-policy-wrapper" style={{ paddingTop: '80px' }}>
        <Container className="py-5">
          <Row>
            {/* Columna de Navegación Lateral (Actualizada a 11 artículos) */}
            <Col lg={3} className="d-none d-lg-block">
              <Nav className="flex-column sticky-top privacy-nav">
                <Nav.Link href="#articulo1">Art. 1: Introducción</Nav.Link>
                <Nav.Link href="#articulo2">Art. 2: Rol como Procesador</Nav.Link>
                <Nav.Link href="#articulo3">Art. 3: Información Procesada</Nav.Link>
                <Nav.Link href="#articulo4">Art. 4: Finalidad</Nav.Link>
                <Nav.Link href="#articulo5">Art. 5: Divulgación de Datos</Nav.Link>
                <Nav.Link href="#articulo6">Art. 6: Seguridad</Nav.Link>
                <Nav.Link href="#articulo7">Art. 7: Retención de Datos</Nav.Link>
                <Nav.Link href="#articulo8">Art. 8: Transferencias</Nav.Link>
                <Nav.Link href="#articulo9">Art. 9: Derechos del Titular</Nav.Link>
                <Nav.Link href="#articulo10">Art. 10: Modificaciones</Nav.Link>
                <Nav.Link href="#articulo11">Art. 11: Contacto</Nav.Link>
              </Nav>
            </Col>

            {/* Columna Principal del Contenido */}
            <Col lg={9}>
              <header className="policy-header">
                <h1>Política de Privacidad y Tratamiento de Datos</h1>
                <p className="text-muted"><strong>Entidad Responsable:</strong> DATAINTEK CIA. LTDA.</p>
                <p className="text-muted"><strong>RUC:</strong> 1793082874001</p>
                <p className="text-muted"><strong>Dirección:</strong> Juan Campuzano y N87B, Carcelén, Quito, Ecuador.</p>
                <p className="text-muted"><strong>Fecha de Entrada en Vigor:</strong> 21 de agosto de 2025</p>
              </header>

              <section id="articulo1" className="policy-section">
                <h2>Artículo 1: Introducción y Ámbito de Aplicación</h2>
                <p>DATAINTEK CIA. LTDA. ("Nosotros", "la Compañía", "DATAINTEK") se compromete a proteger la privacidad y la seguridad de la información de nuestros clientes y de los usuarios de nuestros servicios.</p>
                <p>Esta Política de Privacidad describe nuestras prácticas en relación con la recopilación, uso, almacenamiento, divulgación y protección de los datos. Se aplica a todos los productos, software, aplicaciones móviles y de escritorio, y plataformas web (colectivamente, los "Servicios") desarrollados, operados y comercializados por DATAINTEK.</p>
                <p>Al contratar o utilizar nuestros Servicios, la entidad contratante ("el Cliente") y sus empleados o personal autorizado ("los Usuarios Finales") aceptan las prácticas descritas en este documento. Esta política constituye un marco de referencia para el acuerdo de procesamiento de datos entre DATAINTEK y nuestros Clientes.</p>
              </section>

              <section id="articulo2" className="policy-section">
                <h2>Artículo 2: El Rol de DATAINTEK como Procesador de Datos</h2>
                <p>En la prestación de nuestros Servicios a Clientes empresariales, DATAINTEK actúa principalmente como un "Procesador de Datos". El Cliente, que determina los fines y los medios del tratamiento de los datos de sus Usuarios Finales, actúa como el "Controlador de Datos". Nuestro procesamiento de datos se realiza en nombre y bajo las instrucciones documentadas de nuestros Clientes, tal como se estipula en los contratos de servicio.</p>
              </section>

              <section id="articulo3" className="policy-section">
                <h2>Artículo 3: Información que Procesamos</h2>
                <p>Procesamos diferentes categorías de datos, los cuales son indispensables para el correcto funcionamiento y la seguridad de nuestros Servicios.</p>
                <h4>3.1. Información Proporcionada por Nuestros Clientes:</h4>
                <ul><li><strong>Datos de Configuración de Cuentas:</strong> Para configurar el servicio, el Cliente nos proporciona información para crear y administrar las cuentas de los Usuarios Finales, como identificadores de usuario (nombres de usuario, códigos), asignación de roles y permisos, y la estructura de grupos de comunicación.</li></ul>
                <h4>3.2. Información Recopilada a través del Uso de los Servicios:</h4>
                <ul>
                  <li><strong>Datos de Geolocalización:</strong> Para Servicios que incluyen funcionalidades de monitoreo, logística o seguridad, podemos recopilar datos de ubicación precisa (GPS) de los dispositivos de los Usuarios Finales.</li>
                  <li><strong>Comunicaciones:</strong> Dependiendo del Servicio, podemos procesar comunicaciones como Voz (PTT), Texto y Archivos (fotos, documentos).</li>
                  <li><strong>Contenido Generado por el Usuario:</strong> Cualquier otra información que los Usuarios Finales generen dentro de nuestros Servicios.</li>
                </ul>
                <h4>3.3. Información Recopilada Automáticamente:</h4>
                <ul>
                  <li><strong>Datos de Uso y Metadatos:</strong> Información sobre la interacción con nuestros Servicios (funciones usadas, duración de sesiones, logs).</li>
                  <li><strong>Datos del Dispositivo y la Conexión:</strong> Información sobre hardware, sistema operativo, identificadores únicos e informes de fallos.</li>
                  <li><strong>Cookies y Tecnologías Similares:</strong> Usamos cookies para autenticación, preferencias y análisis en nuestras plataformas web.</li>
                </ul>
              </section>
              
              <section id="articulo4" className="policy-section">
                <h2>Artículo 4: Finalidad del Procesamiento de Datos</h2>
                <ul>
                  <li><strong>Para Proveer, Mantener y Mejorar nuestros Servicios:</strong> Operar las funcionalidades contratadas y desarrollar nuevas características.</li>
                  <li><strong>Para Fines de Seguridad y Verificación:</strong> Proteger la integridad de nuestros Servicios y la seguridad de nuestros usuarios.</li>
                  <li><strong>Para la Administración de Cuentas y Soporte:</strong> Gestionar cuentas, procesar pagos y ofrecer soporte técnico.</li>
                  <li><strong>Para Cumplir con Obligaciones Legales:</strong> Cumplir con las leyes y regulaciones aplicables en la República del Ecuador.</li>
                  <li><strong>Para Fines Analíticos:</strong> Utilizar datos agregados y anonimizados para mejorar el rendimiento y la usabilidad.</li>
                </ul>
              </section>

              <section id="articulo5" className="policy-section">
                <h2>Artículo 5: Intercambio y Divulgación de Información</h2>
                <p>No vendemos ni alquilamos información a terceros. La divulgación se restringe a:</p>
                <ul>
                  <li><strong>Dentro de la Organización del Cliente:</strong> Los datos son accesibles por personal autorizado del Cliente.</li>
                  <li><strong>Proveedores de Servicios y Subprocesadores:</strong> Colaboramos con proveedores tecnológicos que están obligados contractualmente a mantener la confidencialidad.</li>
                  <li><strong>Requerimientos Legales:</strong> Si es requerida por ley o en respuesta a un proceso legal válido.</li>
                  <li><strong>Transacciones Corporativas:</strong> En caso de fusión, adquisición o venta de activos.</li>
                </ul>
              </section>

              <section id="articulo6" className="policy-section">
                <h2>Artículo 6: Seguridad de la Información</h2>
                <p>Implementamos medidas de seguridad robustas, diseñadas para proteger la información, incluyendo:</p>
                <ul>
                  <li><strong>Cifrado de Datos:</strong> Cifrado de datos en tránsito (TLS) y en reposo.</li>
                  <li><strong>Control de Acceso:</strong> Sistemas de control de acceso basados en roles.</li>
                  <li><strong>Infraestructura Segura:</strong> Alojamiento en centros de datos de alta seguridad.</li>
                  <li><strong>Monitoreo y Auditoría:</strong> Supervisión continua de nuestros sistemas.</li>
                </ul>
              </section>
              
              <section id="articulo7" className="policy-section">
                <h2>Artículo 7: Retención de Datos</h2>
                <p>Retenemos la información durante el tiempo estipulado en el contrato de servicio. Los períodos de retención de datos operativos son definidos por el Cliente. Al finalizar el período acordado, los datos se eliminan de forma segura. Los datos de la cuenta del Cliente se eliminan tras la terminación del contrato.</p>
              </section>
              
              <section id="articulo8" className="policy-section">
                <h2>Artículo 8: Transferencias Internacionales de Datos</h2>
                <p>Al utilizar proveedores de servicios globales, los datos pueden ser almacenados y procesados fuera de Ecuador. Nos aseguramos de que estos proveedores cumplan con altos estándares de protección de datos y ofrezcan garantías contractuales adecuadas.</p>
              </section>

              <section id="articulo9" className="policy-section">
                <h2>Artículo 9: Derechos de los Titulares de los Datos</h2>
                <p>Dado que actuamos como Procesadores de Datos, los Usuarios Finales que deseen ejercer sus derechos de acceso, rectificación, supresión, etc., deben dirigir su solicitud al Controlador de Datos, es decir, a su empleador (nuestro Cliente). DATAINTEK proporcionará la asistencia necesaria a nuestros Clientes para cumplir con estas solicitudes.</p>
              </section>

              <section id="articulo10" className="policy-section">
                <h2>Artículo 10: Modificaciones a esta Política</h2>
                <p>Nos reservamos el derecho de actualizar esta Política de Privacidad. Cualquier cambio material será comunicado a nuestros Clientes. La versión más reciente estará siempre disponible en nuestro sitio web oficial.</p>
              </section>
              
              <section id="articulo11" className="policy-section contact-section">
                <h2>Artículo 11: Contacto</h2>
                <p>Para cualquier pregunta o consulta relacionada con esta Política de Privacidad, por favor, contáctenos:</p>
                <ul>
                  <li><strong>DATAINTEK CIA. LTDA.</strong></li>
                  <li>Atención: Departamento de Privacidad de Datos</li>
                  <li>Dirección: Juan Campuzano y N87B, Carcelén, Quito, Ecuador.</li>
                  <li>Correo Electrónico: <a href="mailto:privacidad@dataintek.com">privacidad@dataintek.com</a></li>
                </ul>
              </section>

            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;