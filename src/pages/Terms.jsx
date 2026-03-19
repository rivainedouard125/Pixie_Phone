import React from 'react';
import './Pages.css';

const Terms = () => {
  return (
    <div className="page-container container animate-fade">
      <header className="page-header">
        <h1>Conditions Générales de <span className="text-gradient">Service</span></h1>
        <p>Expertise Pixie Phone • Cadre de confiance pour nos prestations de réparation</p>
      </header>

      <div className="glass terms-container">
        <div className="terms-header">
          <div>
            <h2 className="text-gradient">Pixie Phone</h2>
            <p style={{ opacity: 0.7 }}>Services de réparation et diagnostic</p>
            <p style={{ opacity: 0.7 }}>Chemin des Pinchinades • 13170 Les Pennes Mirabeau</p>
          </div>
          <div className="terms-contact">
            <p style={{ fontWeight: '800', fontSize: '1.2rem', color: 'var(--color-primary)' }}>06.15.32.16.82</p>
            <p style={{ opacity: 0.8 }}>pixiephone@free.fr</p>
          </div>
        </div>

        <section className="terms-section">
          <h2>1. Objet des Services</h2>
          <p>Les présentes conditions définissent les modalités d'intervention pour la réparation d'appareils mobiles confiés par le Client à Pixie Phone. Elles s'appliquent exclusivement aux prestations de main-d'œuvre et de diagnostic.</p>
        </section>

        <section className="terms-section">
          <h2>2. Entrée en vigueur / Durée</h2>
          <p>Les présentes conditions générales entrent en vigueur à compter de leur acceptation par le Client sur le Site, et restent en vigueur jusqu'à extinction des droits et obligations à la charge de l'une ou l'autre des parties.</p>
        </section>

        <section className="terms-section">
          <h2>3. Propriété de l'Appareil</h2>
          <p>Le Client garantit être propriétaire de l'appareil qu'il confie en réparation (ci-après dénommé « l'Appareil »). Le Client garantit par ailleurs avoir acquis l'Appareil de façon régulière, et notamment que l'Appareil n'est pas un objet volé ou acquis frauduleusement.</p>
          <p>Le Client reconnaît que l'intervention de Pixie Phone sur son Appareil peut entraîner une rupture de la garantie constructeur.</p>
        </section>

        <section className="terms-section">
          <h2>4. Sauvegarde des données</h2>
          <p>Avant de déposer un Appareil en vue d'une réparation, le Client s'engage à avoir procédé à une sauvegarde complète de ses données. Pixie Phone ne saura être tenu responsable en cas de perte accidentelle de données durant l'intervention.</p>
        </section>

        <section className="terms-section">
          <h2>5. Délai de réparation</h2>
          <p>Le délai de réparation dépend de la complexité de l'intervention et de la disponibilité des pièces. Les pièces remplacées deviennent la propriété de Pixie Phone pour recyclage, sauf demande expresse du client lors du dépôt.</p>
        </section>

        <section className="terms-section">
          <h2>6. Non réparation</h2>
          <p>Si Pixie Phone ne parvient pas à réparer l'Appareil, il sera restitué en l'état sans frais de diagnostic (Diagnostic Gratuit).</p>
        </section>

        <section className="terms-section">
          <h2>7. Garanties</h2>
          <h3>7.1 Garanties Légales</h3>
          <p>Pixie Phone est tenu des défauts de conformité des pièces détachées utilisées selon les dispositions du Code de la Consommation.</p>

          <h3>7.2 Garantie Pixie Phone</h3>
          <p>Pixie Phone garantit ses réparations pendant une durée de <strong>3 mois</strong> à compter de la date de restitution. Cette garantie ne couvre pas la casse accidentelle, l'oxydation ou les problèmes logiciels ultérieurs.</p>
        </section>

        <section className="terms-section">
          <h2>8. Prix et Paiement</h2>
          <p>Les prix sont exprimés en euros. Le paiement est dû au moment de la reprise de l'appareil. TVA non applicable, art. 293B du CGI.</p>
        </section>
      </div>
    </div>
  );
};

export default Terms;
