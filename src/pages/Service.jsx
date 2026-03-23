import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

const Service = () => {
  const [step, setStep] = useState('selection'); // 'selection', 'form-client', 'form-device', 'success'
  const [formData, setFormData] = useState({
    nom: '',
    adresse: '',
    cpVille: '',
    tel: '',
    email: '',
    typeProduit: '',
    produit: '',
    marque: '',
    modele: '',
    imei: '',
    etat: '',
    panne: '',
    acceptTerms: false
  });

  const selectCategory = (category) => {
    setFormData(prev => ({ ...prev, typeProduit: category }));
    setStep('form-client');
    window.scrollTo(0, 0);
  };

  const handleInvalid = (e) => {
    e.target.setCustomValidity('Veuillez remplir ce champ.');
  };

  const handleInput = (e) => {
    e.target.setCustomValidity('');
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const nextStep = (e) => {
    e.preventDefault();
    setStep('form-device');
    window.scrollTo(0, 0);
  };

  const prevStep = () => {
    setStep('form-client');
    window.scrollTo(0, 0);
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.acceptTerms) {
      alert("Veuillez accepter les conditions générales.");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // POST form data to our new Vercel serverless function
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      const result = await response.json();
      
      if (response.ok) {
        setStep('success');
        window.scrollTo(0, 0);
      } else {
        alert("Une erreur est survenue lors de l'envoi. Veuillez réessayer. Erreur: " + result.error);
      }
    } catch (error) {
      console.error("Send error:", error);
      alert("Erreur de connexion serveur.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (step === 'success') {
    return (
      <div className="page-container container animate-fade">
        <div className="glass" style={{ padding: '100px 40px', textAlign: 'center', borderRadius: '40px', maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ fontSize: '4rem', marginBottom: '24px' }}>✨</div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '16px' }}>Demande Envoyée !</h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--color-text-dim)', marginBottom: '40px', lineHeight: '1.6' }}>
            Merci <strong>{formData.nom}</strong>. Votre fiche de prise en charge pour votre <strong>{formData.marque} {formData.modele}</strong> a bien été enregistrée. 
            Nous vous recontacterons au <strong>{formData.tel}</strong> sous peu.
          </p>
          <button className="btn-primary" onClick={() => { setStep('selection'); setFormData(prev => ({ ...prev, acceptTerms: false })); }}>Nouvelle demande</button>
        </div>
      </div>
    );
  }

  if (step === 'selection') {
    return (
      <div className="page-container container animate-fade">
        <header className="page-header service-header">
          <h1>Nos <span className="text-gradient">Services</span></h1>
          <p>Choisissez votre catégorie d'appareil pour commencer votre demande de réparation.</p>
        </header>

        <div className="reassurance-bar-sleek glass">
          <div className="reassurance-item-sleek">
            <span className="reassurance-icon-mini">🕒</span>
            <div className="reassurance-info-mini">
              <h3>Service Express</h3>
              <p>Moins de 24h</p>
            </div>
          </div>
          <div className="reassurance-divider-mini"></div>
          <div className="reassurance-item-sleek">
            <span className="reassurance-icon-mini">🛡️</span>
            <div className="reassurance-info-mini">
              <h3>Garantie Pixie</h3>
              <p>Pièces & Main-d'œuvre</p>
            </div>
          </div>
          <div className="reassurance-divider-mini"></div>
          <div className="reassurance-item-sleek">
            <span className="reassurance-icon-mini">⚡</span>
            <div className="reassurance-info-mini">
              <h3>Diagnostic Pro</h3>
              <p>Estimation précise</p>
            </div>
          </div>
        </div>

        <div className="service-selection-grid">
          <div className="service-card glass animate-slide-up" onClick={() => selectCategory('Téléphonie')}>
            <span className="service-icon">📱</span>
            <h2>Téléphonie</h2>
            <p>iPhone, Samsung, Xiaomi... <br/>Écrans & Batteries haut de gamme.</p>
            <button className="btn-primary">Sélectionner</button>
          </div>
          <div className="service-card glass animate-slide-up" style={{ animationDelay: '0.1s' }} onClick={() => selectCategory('Informatique')}>
            <span className="service-icon">💻</span>
            <h2>Ordinateurs & Tablettes</h2>
            <p>MacBook, iPad, PC Portables. <br/>Dépannage & Micro-soudure.</p>
            <button className="btn-primary">Sélectionner</button>
          </div>
          <div className="service-card glass animate-slide-up" style={{ animationDelay: '0.2s' }} onClick={() => selectCategory('Console')}>
            <span className="service-icon">🎮</span>
            <h2>Consoles & Watch</h2>
            <p>PS5, Switch, Apple Watch. <br/>Connectique & Accessoires.</p>
            <button className="btn-primary">Sélectionner</button>
          </div>
          <div className="service-card glass animate-slide-up" style={{ animationDelay: '0.3s' }} onClick={() => selectCategory('Drones & High-Tech')}>
            <span className="service-icon">🚁</span>
            <h2>Drones & High-Tech</h2>
            <p>DJI, FPV, IoT complexes. <br/>Expertise électronique de pointe.</p>
            <button className="btn-primary">Sélectionner</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container container animate-fade">
      <header className="page-header">
        <button className="btn-secondary small" onClick={() => setStep('selection')} style={{ marginBottom: '24px' }}>← Retour aux catégories</button>
        <h1>Fiche de <span className="text-gradient">Prise en Charge</span></h1>
        <p>Catégorie : <strong>{formData.typeProduit}</strong> • Étape {step === 'form-client' ? '1' : '2'} sur 2</p>
      </header>

      <div className="form-steps-indicator">
        <div className={`step-dot ${step === 'form-client' ? 'active' : 'completed'}`}>1</div>
        <div className={`step-dot ${step === 'form-device' ? 'active' : ''}`}>2</div>
      </div>

      <div className="intake-form-layout" style={{ maxWidth: '800px', margin: '0 auto' }}>
        {step === 'form-client' ? (
          <form onSubmit={nextStep} className="animate-fade">
            <section className="glass form-section" style={{ padding: '48px', borderRadius: '32px' }}>
              <h2 className="section-title">Vos Coordonnées</h2>
              <div className="input-group">
                <label>Nom complet</label>
                <input type="text" name="nom" required onInvalid={handleInvalid} onInput={handleInput} value={formData.nom} onChange={handleChange} placeholder="Jean Dupont" />
              </div>
              <div className="input-group">
                <label>Adresse postale</label>
                <input type="text" name="adresse" required onInvalid={handleInvalid} onInput={handleInput} value={formData.adresse} onChange={handleChange} placeholder="123 Rue de la Paix" />
              </div>
              <div className="input-group">
                <label>Code Postal & Ville</label>
                <input type="text" name="cpVille" required onInvalid={handleInvalid} onInput={handleInput} value={formData.cpVille} onChange={handleChange} placeholder="13170 Les Pennes-Mirabeau" />
              </div>
              <div className="row">
                <div className="input-group">
                  <label>Téléphone</label>
                  <input type="tel" name="tel" required onInvalid={handleInvalid} onInput={handleInput} value={formData.tel} onChange={handleChange} placeholder="06 12 34 56 78" />
                </div>
                <div className="input-group">
                  <label>E-mail</label>
                  <input type="email" name="email" required onInvalid={handleInvalid} onInput={handleInput} value={formData.email} onChange={handleChange} placeholder="jean@email.com" />
                </div>
              </div>
              <div style={{ marginTop: '40px' }}>
                <button type="submit" className="btn-primary lg" style={{ width: '100%' }}>Continuer vers les détails de l'appareil</button>
              </div>
            </section>
          </form>
        ) : (
          <form onSubmit={handleSubmit} className="animate-fade">
            <section className="glass form-section" style={{ padding: '48px', borderRadius: '32px' }}>
              <h2 className="section-title">Détails de l'Appareil</h2>
              <div className="row">
                <div className="input-group">
                  <label>Appareil</label>
                  <input type="text" name="produit" required onInvalid={handleInvalid} onInput={handleInput} value={formData.produit} onChange={handleChange} placeholder="ex: iPhone, MacBook..." />
                </div>
                <div className="input-group">
                  <label>Marque</label>
                  <input type="text" name="marque" required onInvalid={handleInvalid} onInput={handleInput} value={formData.marque} onChange={handleChange} placeholder="ex: Apple, Samsung..." />
                </div>
              </div>
              <div className="row">
                <div className="input-group">
                  <label>Modèle précis</label>
                  <input type="text" name="modele" required onInvalid={handleInvalid} onInput={handleInput} value={formData.modele} onChange={handleChange} placeholder="ex: 15 Pro, M2 Air..." />
                </div>
                <div className="input-group">
                  <label>N° Série / IMEI (Optionnel)</label>
                  <input type="text" name="imei" value={formData.imei} onChange={handleChange} placeholder="Pour un meilleur suivi" />
                </div>
              </div>
              <div className="input-group">
                <label>État visuel</label>
                <input type="text" name="etat" value={formData.etat} onChange={handleChange} placeholder="ex: Écran intact, micro-rayures..." />
              </div>
              <div className="input-group">
                <label>Description de la panne</label>
                <textarea name="panne" required onInvalid={handleInvalid} onInput={handleInput} value={formData.panne} onChange={handleChange} placeholder="Décrivez le problème rencontré..."></textarea>
              </div>

              <div className="form-footer" style={{ marginTop: '32px', alignItems: 'flex-start' }}>
                <label className="terms-checkbox">
                  <input type="checkbox" name="acceptTerms" checked={formData.acceptTerms} onChange={handleChange} required />
                  <span>
                    J'accepte les <Link to="/terms" target="_blank">CGV</Link> et je confirme avoir sauvegardé mes données.
                  </span>
                </label>
                <div className="form-nav-btns">
                  <button type="button" className="btn-secondary" onClick={prevStep}>Retour</button>
                  <button type="submit" className="btn-primary" disabled={isSubmitting}>
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer la fiche'}
                  </button>
                </div>
                <p className="form-note">TVA non applicable, art. 293B du CGI</p>
              </div>
            </section>
          </form>
        )}
      </div>
    </div>
  );
};

export default Service;
