// src/components/particles-config.js

const particlesConfig = {
    particles: {
      number: {
        value: 50, // Un poco más de partículas puede verse bien en fondos claros
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#555555" // Color gris oscuro para las partículas
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 0.4, // Opacidad sutil
        random: true
      },
      size: {
        value: 3,
        random: true
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#888888", // Color gris más claro para las líneas
        opacity: 0.3,
        width: 1
      },
      move: {
        enable: true,
        speed: 1.5, // Un poco más de velocidad para que se noten
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab" // El modo "grab" se ve muy bien en fondos claros
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 140,
          line_opacity: 0.5
        },
      }
    },
    retina_detect: true
  };
  
  export default particlesConfig;