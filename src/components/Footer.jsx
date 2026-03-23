import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-info">
          <img src="/assets/logo.png" alt="Pixie Phone Logo" className="footer-logo" />
          <p>Expert en réparation de téléphones et ordinateurs situé en France. Pièces premium et service professionnel.</p>
        </div>
        <div className="footer-links">
          <h3>Liens Rapides</h3>
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/store">Boutique</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">À propos</Link></li>
            <li><Link to="/terms">CGV Réparation</Link></li>

          </ul>
        </div>
        <div className="footer-contact">
          <h3>Contactez-nous</h3>
          <p>📍 Chemin des Pinchinades, 13170 Les Pennes-Mirabeau</p>
          <p>📞 06.15.32.16.82</p>
          <p>✉️ pixiephone@free.fr</p>
        </div>
        <div className="footer-hours">
          <h3>Horaires</h3>
          <p>Lun - Ven: 09:00 - 20:00</p>
          <p>Sam - Dim: 09:00 - 17:00</p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; 2024 Pixie Phone. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
