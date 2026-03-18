import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <div className="home-page animate-fade">
      <section className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Une <span className="text-gradient">Seconde Vie</span> <br />pour vos appareils.</h1>
            <h2 className="hero-subtitle">Réparation toutes marques • Diagnostic et devis gratuit <br />Prêt de téléphone • Déplacement possible</h2>
            <div className="hero-btns">
              <button className="btn-primary" onClick={() => navigate('/services')}>Réserver une Réparation</button>
              <button className="btn-secondary" onClick={() => navigate('/store')}>Voir la Boutique</button>
            </div>
          </div>
          <div className="hero-image">
            <div className="mascot-wrapper pro-mascot">
              <img src="/assets/mascot_pro.jpg" alt="Mascotte Pixie" className="mascot-img" />
            </div>
          </div>
        </div>
      </section>

      <section className="features container">
        <div className="section-title text-center">
          <span className="badge">Pourquoi nous choisir ?</span>
          <h2>L'expertise au <span className="text-gradient">bout des doigts</span></h2>
          <p>Une technologie au service de votre sérénité numérique.</p>
        </div>
        <div className="features-grid">
          <div className="feature-card glass">
            <div className="feature-icon">🛠️</div>
            <h3>Réparation Experte</h3>
            <p>Techniciens certifiés avec des années d'expérience en micro-soudure et réparation matérielle.</p>
          </div>
          <div className="feature-card glass">
            <div className="feature-icon">📦</div>
            <h3>Pièces de Qualité</h3>
            <p>Nous utilisons et vendons uniquement des pièces de haute qualité, testées pour toutes les grandes marques.</p>
          </div>
          <div className="feature-card glass">
            <div className="feature-icon">⚡</div>
            <h3>Service Rapide</h3>
            <p>La plupart des réparations sont terminées sous 24-48h. Retrouvez votre vie numérique rapidement.</p>
          </div>
          <div className="feature-card glass">
            <div className="feature-icon">🛡️</div>
            <h3>Réparateur Labellisé</h3>
            <p>Certification nationale garantissant la qualité de nos interventions et l'accès au bonus réparation.</p>
          </div>
        </div>
      </section>

      <section className="process-comparison-section container animate-fade">
        <div className="section-title text-center">
          <span className="badge">Processus de Transformation</span>
          <h2>Une <span className="text-gradient">Résurrection</span> Maîtrisée</h2>
        </div>

        <div className="comparison-slider-container glass">
          <div className="comparison-images">
            {/* Base layer: Broken Phone (The "Before") */}
            <div className="comparison-img broken">
              <img src="/assets/phone_broken.jpg" alt="Écran brisé" />
              <div 
                className="stage-label broken" 
                style={{ opacity: Math.min(1, Math.max(0, (sliderPos - 10) / 20)) }}
              >
                L'Avant
              </div>
            </div>

            {/* Top layer: Fixed Phone (The "After") - revealed by the slider */}
            <div 
              className="comparison-img fixed" 
              style={{ clipPath: `inset(0 0 0 ${sliderPos}%)` }}
            >
              <img src="/assets/phone_fixed.jpg" alt="Téléphone réparé" />
              <div 
                className="stage-label fixed" 
                style={{ opacity: Math.min(1, Math.max(0, (90 - sliderPos) / 20)) }}
              >
                La Renaissance
              </div>
            </div>
          </div>

          <div className="slider-controls">
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={sliderPos} 
              onChange={(e) => setSliderPos(e.target.value)} 
              className="slider-input"
            />
            <div className="slider-handle" style={{ left: `${sliderPos}%` }}>
              <div className="handle-line"></div>
              <div className="handle-circle">↔</div>
            </div>
          </div>
        </div>
      </section>

      <section className="highlights container" style={{ paddingBottom: '120px' }}>
        <div className="cta-box glass">
          <div className="cta-content">
            <h2>Prêt à redonner vie à <span className="text-gradient">votre appareil ?</span></h2>
            <p>
              Que ce soit pour un écran brisé, une batterie fatiguée ou un problème complexe, notre équipe est là pour vous aider avec précision et rapidité.
            </p>
            <div className="cta-btns">
              <button className="btn-primary" onClick={() => navigate('/services')}>Prendre Rendez-vous</button>
              <button className="btn-secondary" onClick={() => navigate('/about')}>En savoir plus</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
