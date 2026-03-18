import React, { useState } from 'react';
import './Pages.css';

const Service = () => {
  const [step, setStep] = useState('selection'); // 'selection', 'form', 'success'
  const [formData, setFormData] = useState({
    nom: '',
    adresse: '',
    cpVille: '',
    tel: '',
    email: '',
    typeProduit: '', // Will be set by selection
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
    setStep('form');
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.acceptTerms) {
      alert("Veuillez accepter les conditions générales.");
      return;
    }
    console.log('Form submitted:', formData);
    setStep('success');
    window.scrollTo(0, 0);
  };

  if (step === 'success') {
    return (
      <div className="page-container container animate-fade">
        <div className="glass" style={{ padding: '80px', textAlign: 'center', borderRadius: '40px', maxWidth: '800px', margin: '0 auto' }}>
          <span style={{ fontSize: '4rem', marginBottom: '24px', display: 'block' }}>✅</span>
          <h2>Demande enregistrée !</h2>
          <p style={{ margin: '24px 0', fontSize: '1.2rem', color: 'var(--color-text-dim)' }}>
            Votre fiche de prise en charge a été transmise avec succès. 
            Un technicien Pixie Phone vous contactera sous peu au <strong>{formData.tel}</strong>.
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

        <div className="reassurance-bar">
          <div className="reassurance-item">
            <div className="reassurance-icon">🕒</div>
            <div className="reassurance-info">
              <h3>Réparation rapide</h3>
              <p>La plupart des réparations en moins de 30 minutes</p>
            </div>
          </div>

          <div className="reassurance-item">
            <div className="reassurance-icon">🛡️</div>
            <div className="reassurance-info">
              <h3>Garantie 6 mois</h3>
              <p>Toutes nos réparations sont garanties</p>
            </div>
          </div>

          <div className="reassurance-item">
            <div className="reassurance-icon">⚡</div>
            <div className="reassurance-info">
              <h3>Diagnostic gratuit</h3>
              <p>Estimation sans engagement</p>
            </div>
          </div>
        </div>

        <div className="service-selection-grid">
          <div className="service-card glass animate-slide-up" onClick={() => selectCategory('Téléphonie')}>
            <span className="service-icon">📱</span>
            <h2>Téléphonie</h2>
            <p>iPhone, Samsung, Xiaomi, etc. <br/>Écrans, Vitres arrières & Batteries.</p>
            <button className="btn-primary">Réparer mon téléphone</button>
          </div>

          <div className="service-card glass animate-slide-up" style={{ animationDelay: '0.1s' }} onClick={() => selectCategory('Informatique')}>
            <span className="service-icon">💻</span>
            <h2>Informatique & Tablettes</h2>
            <p>MacBook, PC Portables, iPad & Tablettes. <br/>Micro-soudure & Nettoyage.</p>
            <button className="btn-primary">Réparer mon appareil</button>
          </div>

          <div className="service-card glass animate-slide-up" style={{ animationDelay: '0.2s' }} onClick={() => selectCategory('Console')}>
            <span className="service-icon">🎮</span>
            <h2>Console & Watch</h2>
            <p>PS5, Nintendo Switch, Xbox, Apple Watch. <br/>Joysticks & Connectique.</p>
            <button className="btn-primary">Réparer ma console</button>
          </div>

          <div className="service-card glass animate-slide-up" style={{ animationDelay: '0.3s' }} onClick={() => selectCategory('Drones & High-Tech')}>
            <span className="service-icon">🚁</span>
            <h2>Drones & High-Tech</h2>
            <p>NEW : Réparation de drones. <br/>Micro-soudure complexe & IoT.</p>
            <button className="btn-primary">Réparer mon drone</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container container animate-fade">
      <header className="page-header">
        <button className="btn-secondary small" onClick={() => setStep('selection')} style={{ marginBottom: '24px' }}>← Retour</button>
        <h1>Fiche de <span className="text-gradient">Prise en Charge</span></h1>
        <p>Catégorie : <strong>{formData.typeProduit}</strong> • Diagnostic gratuit et sans engagement.</p>
      </header>

      <form onSubmit={handleSubmit} className="intake-form-layout">
        <div className="form-grid">
          {/* Information Client */}
          <section className="glass form-section">
            <h2 className="section-title">Information Client</h2>
            <div className="input-group">
              <label>Nom Complet</label>
              <input type="text" name="nom" required onInvalid={handleInvalid} onInput={handleInput} value={formData.nom} onChange={handleChange} placeholder="Jean Dupont" />
            </div>
            <div className="input-group">
              <label>Adresse</label>
              <input type="text" name="adresse" required onInvalid={handleInvalid} onInput={handleInput} value={formData.adresse} onChange={handleChange} placeholder="123 Rue de la Paix" />
            </div>
            <div className="row">
              <div className="input-group">
                <label>Code Postal & Ville</label>
                <input type="text" name="cpVille" required onInvalid={handleInvalid} onInput={handleInput} value={formData.cpVille} onChange={handleChange} placeholder="13170 Les Pennes-Mirabeau" />
              </div>
            </div>
            <div className="row">
              <div className="input-group">
                <label>Téléphone</label>
                <input type="tel" name="tel" required onInvalid={handleInvalid} onInput={handleInput} value={formData.tel} onChange={handleChange} placeholder="06 12 34 56 78" />
              </div>
              <div className="input-group">
                <label>Email</label>
                <input type="email" name="email" required onInvalid={handleInvalid} onInput={handleInput} value={formData.email} onChange={handleChange} placeholder="jean@email.com" />
              </div>
            </div>
          </section>

          {/* Produit en panne */}
          <section className="glass form-section">
            <h2 className="section-title">Produit en Panne</h2>
            <div className="row">
              <div className="input-group">
                <label>Produit</label>
                <input type="text" name="produit" required onInvalid={handleInvalid} onInput={handleInput} value={formData.produit} onChange={handleChange} placeholder="ex: iPhone" />
              </div>
              <div className="input-group">
                <label>Marque</label>
                <input type="text" name="marque" required onInvalid={handleInvalid} onInput={handleInput} value={formData.marque} onChange={handleChange} placeholder="ex: Apple" />
              </div>
            </div>

            <div className="row">
              <div className="input-group">
                <label>Modèle</label>
                <input type="text" name="modele" required onInvalid={handleInvalid} onInput={handleInput} value={formData.modele} onChange={handleChange} placeholder="ex: 13 Pro" />
              </div>
              <div className="input-group">
                <label>IMEI / N° Série</label>
                <input type="text" name="imei" value={formData.imei} onChange={handleChange} placeholder="Optionnel" />
              </div>
            </div>

            <div className="input-group">
              <label>État du Matériel</label>
              <input type="text" name="etat" value={formData.etat} onChange={handleChange} placeholder="ex: Écran cassé, coque rayée..." />
            </div>

            <div className="input-group">
              <label>Diagnostic / Nature de la Panne</label>
              <textarea name="panne" required onInvalid={handleInvalid} onInput={handleInput} value={formData.panne} onChange={handleChange} placeholder="Décrivez le problème en quelques mots..."></textarea>
            </div>
          </section>
        </div>

        <div className="form-footer animate-fade">
          <label className="terms-checkbox">
            <input 
              type="checkbox" 
              name="acceptTerms" 
              checked={formData.acceptTerms} 
              onChange={handleChange} 
              required
            />
            <span>
              J'accepte les <a href="/terms" target="_blank" rel="noopener noreferrer">conditions générales de vente</a> et je reconnais avoir effectué une sauvegarde de mes données.
            </span>
          </label>
          <button type="submit" className="btn-primary lg">Envoyer la Fiche de Prise en Charge</button>
          <p className="form-note">TVA non applicable, article 293B du CGI</p>
        </div>
      </form>
    </div>
  );
};

export default Service;
