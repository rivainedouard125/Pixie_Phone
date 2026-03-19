import React from 'react';
import './Pages.css';

const SalesTerms = () => {
  return (
    <div className="page-container container animate-fade">
      <header className="page-header">
        <h1>CGV <span className="text-gradient">Vente de Pièces</span></h1>
        <p>Expertise Pixie Phone • Conditions générales de vente de composants détachés</p>
      </header>

      <div className="glass terms-container">
        <div className="terms-header">
          <div>
            <h2 className="text-gradient">Pixie Phone</h2>
            <p style={{ opacity: 0.7 }}>Vente de composants et pièces détachées</p>
            <p style={{ opacity: 0.7 }}>Chemin des Pinchinades • 13170 Les Pennes Mirabeau</p>
          </div>
          <div className="terms-contact">
            <p style={{ fontWeight: '800', fontSize: '1.2rem', color: 'var(--color-primary)' }}>06.15.32.16.82</p>
            <p style={{ opacity: 0.8 }}>pixiephone@free.fr</p>
          </div>
        </div>

        <section className="terms-section">
          <h2>1. Objet des Ventes</h2>
          <p>Les présentes conditions s'appliquent à l'achat de pièces détachées et composants électroniques via notre boutique en ligne. Ces pièces sont destinées à la réparation d'appareils mobiles par l'acheteur ou un professionnel tiers.</p>
        </section>

        <section className="terms-section">
          <h2>2. Prix et Paiement</h2>
          <p>Les prix indiqués sont en Euros TTC. La TVA est non applicable (Art. 293B du CGI). Le paiement est exigible à la commande. Pixie Phone se réserve le droit de suspendre toute expédition en cas de non-paiement ou litige bancaire.</p>
        </section>

        <section className="terms-section">
          <h2>3. Expédition et Livraison</h2>
          <p>Les pièces sont expédiées sous 24h à 48h ouvrées. Les frais de livraison sont calculés lors de l'étape finale du paiement, en fonction de l'adresse de destination et du mode d'envoi choisi.</p>
          <p>Le transfert des risques intervient dès la remise du colis au transporteur. Pixie Phone ne saura être tenu responsable des retards liés aux services postaux.</p>
        </section>

        <section className="terms-section">
          <h2>4. Garantie des Pièces</h2>
          <h3>4.1 Garantie DOA (Défaut à l'arrivée)</h3>
          <p>Chaque pièce est testée avant envoi. En cas de défaut constaté au déballage, le client doit nous contacter sous 48h. Une photo ou vidéo du défaut peut être demandée.</p>
          <h3>4.2 Garantie 3 mois</h3>
          <p>Nos pièces (écrans, batteries, nappes) sont garanties 3 mois contre tout défaut de fabrication. Cette garantie est strictement conditionnée par une installation conforme. Tout dommage lié à une mauvaise manipulation lors du montage (nappe déchirée, écran fissuré à l'installation) annule la garantie.</p>
        </section>

        <section className="terms-section">
          <h2>5. Droit de Rétractation</h2>
          <p>Conformément à la législation européenne, vous disposez de 14 jours pour changer d'avis. La pièce doit nous être retournée dans son emballage d'origine, avec ses films de protection intacts et non installée. Les frais de retour sont à la charge de l'acheteur.</p>
        </section>

        <section className="terms-section">
          <h2>6. Responsabilité</h2>
          <p>Pixie Phone vend des composants techniques. L'acheteur assume l'entière responsabilité du diagnostic de sa panne et de la réussite de sa propre réparation. Nous conseillons de faire appel à un technicien certifié pour toute manipulation interne.</p>
        </section>
      </div>
    </div>
  );
};

export default SalesTerms;
