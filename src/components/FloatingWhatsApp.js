import React from 'react';
import { Button } from 'react-bootstrap';
import './FloatingWhatsApp.css';

const FloatingWhatsApp = () => {
  // --- CONFIGURACIÓN ---
  const phoneNumber = "593979127751"; // Tu número de teléfono, sin '+' ni espacios
  const message = "Hola, he visitado su sitio web y me gustaría obtener más información.";
  
  // Codifica el mensaje para la URL
  const encodedMessage = encodeURIComponent(message);
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <Button 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="floating-whatsapp-button"
      title="Contactar por WhatsApp"
    >
      <i className="bi bi-whatsapp"></i>
    </Button>
  );
};
export default FloatingWhatsApp