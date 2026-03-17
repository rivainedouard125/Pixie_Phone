import React from 'react';
import './Pages.css';

const Terms = () => {
  return (
    <div className="page-container container animate-fade">
      <header className="page-header">
        <h1>Conditions Générales de <span className="text-gradient">Vente</span></h1>
        <p>Pixie Phone • Information légale et modalités de service</p>
      </header>

      <div className="glass terms-container">
        <div className="terms-header">
          <div>
            <h2 className="text-gradient" style={{ fontSize: '1.8rem', marginBottom: '8px' }}>Pixie Phone</h2>
            <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>Siret : 883 130 254 00013</p>
            <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>Chemin des Pinchinades</p>
            <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>13170 Les Pennes Mirabeau</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p style={{ fontWeight: '700', fontSize: '1.1rem' }}>06.15.32.16.82</p>
            <p style={{ opacity: 0.8 }}>pixiephone@free.fr</p>
          </div>
        </div>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '1.4rem', marginBottom: '16px', color: 'white' }}>1. Objet</h2>
          <p>Les présentes conditions générales ont pour objet de définir les conditions et modalités de réparation de l'appareil du Client.</p>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '1.4rem', marginBottom: '16px', color: 'white' }}>2. Entrée en vigueur / Durée</h2>
          <p>Les présentes conditions générales entrent en vigueur à compter de son acceptation par le Client sur le Site, et restent en vigueur jusqu'à extinction des droits et obligations à la charge de l'une ou l'autre des parties.</p>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '1.4rem', marginBottom: '16px', color: 'white' }}>3. Propriété de l'Appareil</h2>
          <p>Le Client garantit être propriétaire de l'appareil qu'il envoie en réparation (ci-après dénommé « l'Appareil »). Le Client garantit par ailleurs avoir acquis l'Appareil de façon régulière, et notamment que l'Appareil ne soit pas un objet volé ou acquis frauduleusement.</p>
          <p>Le Client reconnaît et accepte que l'appareil qu'il souhaite faire réparer est peut-être encore sous garantie fabricant ou vendeur et pourrait être réparé gratuitement par ces derniers, alors que la réparation effectuée par Pixie Phone est payante.</p>
          <p>Le Client reconnaît et accepte que l'intervention de Pixie Phone sur son Appareil entraînera une rupture de garantie du fabricant et/ou du vendeur de l'Appareil.</p>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '1.4rem', marginBottom: '16px', color: 'white' }}>4. Sauvegarde des données par le Client</h2>
          <p>Avant de déposer un Appareil en vue d'une réparation, le Client s'engage à avoir procédé à une sauvegarde de l'ensemble de données stockées dans son Appareil, pour pouvoir les récupérer en cas de perte accidentelle ou une destruction accidentelle dans l'Appareil du Client.</p>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '1.4rem', marginBottom: '16px', color: 'white' }}>5. Délai de réparation</h2>
          <p>Le délai de réparation de l'Appareil dépend de la disponibilité de la pièce à changer et de la disponibilité des réparateurs. Le Client cède la propriété des pièces remplacées à Pixie Phone qui les conservera pour une durée de 1 mois. Au-delà de cette durée, Pixie Phone pourra les recycler ou faire toute utilisation notamment commerciale des pièces remplacées. Le Client ne pourra pas prétendre récupérer les pièces remplacées.</p>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '1.4rem', marginBottom: '16px', color: 'white' }}>6. Non réparation</h2>
          <p>Dans l'hypothèse où Pixie Phone ne parviendrait pas à réparer l'Appareil du Client, il s'engage à le lui restituer en l'état. Le Client ne payera pas, le diagnostic étant gratuit.</p>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '1.4rem', marginBottom: '16px', color: 'white' }}>7. Nouveau diagnostic</h2>
          <p>Dans l'hypothèse où le (ou les) disfonctionnement(s) apparents initialement, objet de la réparation à effectuer, s'avèrerait différents de ceux visés dans le devis initial, Pixie Phone établira un nouveau devis et transmettra l'information au Client par téléphone, mail ou sms.</p>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '1.4rem', marginBottom: '16px', color: 'white' }}>8. Garanties</h2>
          <p>Le Client reconnaît et accepte que l'intervention de Pixie Phone sur son Appareil entraînera une rupture de garantie du constructeur et/ou du vendeur de l'Appareil. Pixie Phone ne saurait en aucun cas en tenu pour responsable. Il est rappelé que l'octroi des garanties suppose que le Client utilise son Appareil de façon normale, c'est-à-dire conformément à la notice d'emploi et d'entretien des pièces, ne le fasse pas tomber, et qu'aucun tiers non agréé par Pixie Phone n'intervienne pour effectuer une réparation sur les pièces remplacées par Pixie Phone.</p>
          
          <h3 style={{ fontSize: '1.2rem', marginTop: '24px', marginBottom: '12px', color: 'var(--color-accent)' }}>8.1 Garantie légales</h3>
          <p>Pixie Phone est tenu des défauts de conformité des pièces détachées utilisées par ses soins pour réparer l'Appareil dans les conditions de l'article L. 211-4 et suivants du code de la consommation et des défauts cachés de la chose vendue dans les conditions prévues aux articles 1641 et suivants du code civil.</p>

          <h3 style={{ fontSize: '1.2rem', marginTop: '24px', marginBottom: '12px', color: 'var(--color-accent)' }}>8.2 Garantie des réparations effectuées</h3>
          <p>Pixie Phone garantit les réparations effectuées par ses soins pendant une période de 3 mois à compter de la date de la réparation de l'Appareil, sauf fait du Client ou d'un tiers. La présente garantie ne couvre pas : les problèmes logiciels ; les accidents ou choc (Casse) ; les dégâts causés par l'eau (oxydation) ; les pièces consommables.</p>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '1.4rem', marginBottom: '16px', color: 'white' }}>9. Prix et conditions de paiement</h2>
          <p>Le prix de la prestation de réparation est exprimé en euros TTC. Le paiement devra être effectué concomitamment à la reprise de l'appareil. TVA non applicable, art. 293B du CGI.</p>
        </section>
      </div>
    </div>
  );
};

export default Terms;
