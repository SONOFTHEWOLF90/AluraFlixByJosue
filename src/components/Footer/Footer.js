import React from 'react';
import './Footer.css';
import logo from '../../assets/logo.png'; // Asegúrate de que la ruta sea correcta

const Footer = () => {
  return (
    <footer className="footer">
      <img src={logo} alt="Logo de Aluraflix" className="footer-logo" />
      <p>© 2025 Josue Valdes. Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;
