import React from 'react';
import './Pages.css';

const About = () => {
  return (
    <div className="page-container container animate-fade">
      <header className="page-header">
        <h1>À propos de <span className="text-gradient">Pixie Phone</span></h1>
        <p>Votre partenaire de confiance pour la réparation high-tech depuis plus de 10 ans.</p>
      </header>

      {/* Nos Valeurs Section */}
      <section className="about-values">
        <div className="values-header">
          <span className="philosophy-label">Notre Philosophie</span>
          <h2 className="values-title">Des valeurs qui nous <span className="text-gradient">définissent</span></h2>
        </div>
        
        <div className="values-grid">
          <div className="value-card glass animate-slide-up">
            <div className="value-icon">🌱</div>
            <div className="value-info">
              <h3>Engagement Éco</h3>
              <p>Réparer plutôt que jeter. Nous luttons activement contre l'obsolescence programmée.</p>
            </div>
          </div>

          <div className="value-card glass animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="value-icon">💎</div>
            <div className="value-info">
              <h3>Qualité Premium</h3>
              <p>Sélection rigoureuse des meilleurs composants pour une durabilité maximale.</p>
            </div>
          </div>

          <div className="value-card glass animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="value-icon">🤝</div>
            <div className="value-info">
              <h3>Savoir-Faire</h3>
              <p>Une expertise technique reconnue et certifiée au service de vos appareils.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-content">
        <div className="about-text">
          <h2 className="text-gradient">Expertise & Passion</h2>
          <p>
            Fondé sur une passion pour l'électronique et un engagement envers la durabilité, 
            <strong> Pixie Phone</strong> est devenu une référence locale pour la réparation de smartphones, 
            ordinateurs et tablettes.
          </p>
          <p>
            Situés au cœur des Pennes-Mirabeau, nous combinons expertise technique avancée (micro-soudure, 
            reconstruction de circuits) et service client personnalisé. Notre objectif est simple : 
            redonner vie à vos appareils tout en réduisant l'impact environnemental.
          </p>
          <p>
            Nous utilisons uniquement des pièces de haute qualité pour garantir la longévité de nos 
            interventions. Chaque appareil confié est traité avec le plus grand soin, comme s'il 
            s'agissait du nôtre.
          </p>
        </div>
        <div className="about-image">
          <img src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800" alt="Atelier de réparation" />
        </div>
      </section>

      <section className="cta-section animate-slide-up">
        <div className="cta-box glass">
          <div className="cta-info">
            <span className="location-label">Nous trouver</span>
            <h2>Visitez Notre <span className="text-gradient">Atelier</span></h2>
            <p>Un espace dédié à la précision et au soin de vos appareils aux Pennes-Mirabeau.</p>
            
            <div className="cta-detail-item">
              <span className="icon">📍</span>
              <span>Chemin des Pinchinades, 13170 Les Pennes-Mirabeau</span>
            </div>
            
            <div className="cta-buttons">
              <button className="btn-primary" onClick={() => window.open('https://www.google.com/maps/search/Chemin+des+Pinchinades+13170+Les+Pennes-Mirabeau')}>Ouvrir Maps</button>
              <button className="btn-secondary" onClick={() => window.location.href = 'mailto:pixiephone@free.fr'}>Contactez-nous</button>
            </div>
          </div>
          
          <div className="cta-map glass">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2903.784564228399!2d5.314207!3d43.411624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c98d6fb2478f65%3A0xe5a6d5945899dd5a!2sChemin%20des%20Pinchinades%2C%2013170%20Les%20Pennes-Mirabeau!5e0!3m2!1sfr!2sfr!4v1710500000000!5m2!1sfr!2sfr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation Pixie Phone"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
