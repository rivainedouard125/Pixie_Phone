import React from 'react';
import './Pages.css';

const Store = () => {
  return (
    <div className="page-container container animate-fade" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh', padding: '120px 1rem 4rem' }}>
      <div className="glass coming-soon-card" style={{ 
        display: 'flex', 
        alignItems: 'stretch', 
        borderRadius: '24px', 
        maxWidth: '1000px', 
        width: '100%', 
        position: 'relative', 
        overflow: 'hidden',
        padding: 0
      }}>
        
        {/* Subtle decorative glow */}
        <div style={{ position: 'absolute', top: '-50%', left: '-20%', width: '150%', height: '150%', background: 'radial-gradient(ellipse at center, rgba(0, 195, 255, 0.08) 0%, transparent 60%)', zIndex: 0, pointerEvents: 'none' }}></div>
        
        {/* Text Content Block */}
        <div className="coming-soon-text" style={{ position: 'relative', zIndex: 1, flex: '1 1 50%', padding: '4rem 3rem' }}>

          
          <h1 style={{ fontSize: '2.8rem', marginBottom: '1rem', fontWeight: 700, letterSpacing: '-0.5px', lineHeight: '1.1' }}>
            La Boutique<br/>
            <span className="text-gradient">Pixie Phone</span>
          </h1>
          
          <p style={{ fontSize: '1.15rem', color: 'rgba(255, 255, 255, 0.7)', marginBottom: '2rem', lineHeight: '1.6' }}>
            L'excellence des pièces pour tous les créateurs de magie. Nous finalisons un partenariat exclusif avec les meilleurs fournisseurs européens.
          </p>
          
          <div style={{ padding: '1.5rem 0', borderTop: '1px solid rgba(255, 255, 255, 0.05)', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', marginBottom: '2rem' }}>
            <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '1rem' }}>Plus de 30 000 Reférences</h4>
            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
              <span className="part-tag">Écrans Premium</span>
              <span className="part-tag">Batteries Originales</span>
              <span className="part-tag">Micro-soudure</span>
              <span className="part-tag">Outils Pro</span>
            </div>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div className="pulse-dot"></div>
            <p style={{ fontSize: '1rem', color: '#00c3ff', margin: 0, fontWeight: 500, letterSpacing: '0.5px' }}>
              Ouverture imminente...
            </p>
          </div>
        </div>

        {/* Image / Graphic Block */}
        <div className="coming-soon-visuals" style={{ 
          position: 'relative', 
          flex: '1 1 50%', 
          background: 'radial-gradient(circle at right, rgba(255, 255, 255, 0.03) 0%, transparent 70%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden'
        }}>
          
          {/* Decorative glowing orb in the back */}
          <div style={{
            position: 'absolute',
            width: '200px',
            height: '200px',
            background: 'rgba(0, 195, 255, 0.1)',
            filter: 'blur(80px)',
            borderRadius: '50%',
            zIndex: 0
          }}></div>

          <div className="parts-container">
            {/* Tertiary background part */}
            <img 
              src="/images/products/camera-module.png" 
              alt="Module Caméra" 
              className="float-part part-back"
            />
            {/* Secondary part overlapping */}
            <img 
              src="/images/products/phone-battery.png" 
              alt="Batterie" 
              className="float-part part-mid"
            />
            {/* Main big floating part */}
            <img 
              src="/images/products/iphone15-screen.png" 
              alt="Écran Premium" 
              className="float-part part-front"
            />
          </div>
        </div>
      </div>
      
      <style>{`
        .coming-soon-card {
          flex-direction: row;
        }

        .part-tag {
          font-size: 0.85rem;
          padding: 0.4rem 0.9rem;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: rgba(255, 255, 255, 0.8);
          font-weight: 500;
          backdrop-filter: blur(5px);
          transition: background 0.3s ease;
        }

        .part-tag:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .pulse-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #00c3ff;
          box-shadow: 0 0 10px #00c3ff;
          animation: pulse-glow 2s infinite;
        }

        @keyframes pulse-glow {
          0% { box-shadow: 0 0 0 0 rgba(0, 195, 255, 0.4); }
          70% { box-shadow: 0 0 0 10px rgba(0, 195, 255, 0); }
          100% { box-shadow: 0 0 0 0 rgba(0, 195, 255, 0); }
        }

        .parts-container {
          position: relative;
          width: 100%;
          height: 100%;
          min-height: 450px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .float-part {
          position: absolute;
          filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.5));
          transition: transform 0.3s ease;
        }

        .part-front {
          width: 65%;
          right: 5%;
          top: 15%;
          transform: rotate(12deg);
          z-index: 3;
          animation: float-slow 6s ease-in-out infinite;
        }

        .part-mid {
          width: 45%;
          left: 10%;
          bottom: 20%;
          transform: rotate(-10deg);
          z-index: 2;
          opacity: 0.9;
          animation: float-medium 7s ease-in-out infinite;
          animation-delay: 1s;
        }

        .part-back {
          width: 35%;
          right: 45%;
          top: 25%;
          transform: rotate(-20deg);
          z-index: 1;
          opacity: 0.7;
          animation: float-fast 5s ease-in-out infinite;
          animation-delay: 0.5s;
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) rotate(12deg); }
          50% { transform: translateY(-15px) rotate(14deg); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0) rotate(-10deg); }
          50% { transform: translateY(-10px) rotate(-12deg); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0) rotate(-20deg); }
          50% { transform: translateY(-8px) rotate(-18deg); }
        }
        
        @media (max-width: 900px) {
          .coming-soon-card {
            flex-direction: column-reverse;
          }
          .coming-soon-visuals {
            padding: 2rem 0;
            border-bottom: 1px solid rgba(255,255,255,0.05);
          }
          .parts-container {
            min-height: 350px;
          }
          .part-front { top: 10%; right: 15%; width: 55%; }
          .part-mid { left: 15%; bottom: 10%; width: 40%; }
          .part-back { top: 15%; right: 50%; width: 30%; }
        }

        @media (max-width: 600px) {
          .coming-soon-text {
            padding: 3rem 2rem !important;
          }
          .parts-container {
            min-height: 280px;
          }
          .coming-soon-text h1 {
            font-size: 2.2rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Store;
