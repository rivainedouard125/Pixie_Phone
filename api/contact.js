export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { nom, email, tel, adresse, cpVille, typeProduit, produit, marque, modele, imei, etat, panne } = req.body;

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`
      },
      body: JSON.stringify({
        // Now that the domain is verified, we can send from the official domain!
        from: 'Pixie Phone <equipe@pixiephone.fr>', 
        to: ['kollana.team@gmail.com'], // Testing email!
        subject: `NOUVELLE FICHE DE RÉPARATION - ${nom.toUpperCase()}`,
        html: `
          <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #1c1c24; color: #f0f0f5; border-radius: 20px; overflow: hidden; border: 1px solid rgba(255,255,255,0.08); padding: 0; box-shadow: 0 20px 40px rgba(0,0,0,0.5);">
            
            <!-- Header -->
            <div style="background: rgba(255,255,255,0.02); padding: 40px 30px; text-align: center; border-bottom: 1px solid rgba(255,255,255,0.05);">
              <img src="https://www.pixiephone.fr/assets/logo.png" alt="Pixie Phone" width="220" style="display: block; margin: 0 auto; max-width: 100%; height: auto;" />
              <p style="margin: 20px 0 0; color: #9494a5; font-size: 13px; text-transform: uppercase; letter-spacing: 2px; font-weight: 600;">Nouvelle Fiche de Réparation</p>
            </div>
            
            <!-- Content -->
            <div style="padding: 40px 30px;">
              <p style="color: #9494a5; font-size: 12px; text-align: right; margin: 0 0 30px 0;">Reçu le : ${new Date().toLocaleString('fr-FR')}</p>
              
              <h2 style="color: #B91A24; font-size: 16px; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 10px; margin: 0 0 20px 0; text-transform: uppercase; letter-spacing: 1px;">Informations Client</h2>
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 40px;">
                <tr><td style="padding: 10px 0; color: #9494a5; width: 35%;">Nom</td><td style="padding: 10px 0; font-weight: 600; color: #ffffff;">${nom}</td></tr>
                <tr><td style="padding: 10px 0; color: #9494a5;">Téléphone</td><td style="padding: 10px 0; font-weight: 600; color: #ffffff;">${tel}</td></tr>
                <tr><td style="padding: 10px 0; color: #9494a5;">Email</td><td style="padding: 10px 0; font-weight: 600;"><a href="mailto:${email}" style="color: #ff4b5c; text-decoration: none;">${email}</a></td></tr>
                <tr><td style="padding: 10px 0; color: #9494a5; vertical-align: top;">Adresse</td><td style="padding: 10px 0; font-weight: 600; color: #ffffff; line-height: 1.4;">${adresse}<br/>${cpVille}</td></tr>
              </table>

              <h2 style="color: #B91A24; font-size: 16px; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 10px; margin: 0 0 20px 0; text-transform: uppercase; letter-spacing: 1px;">Détails de l'Appareil</h2>
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 40px;">
                <tr><td style="padding: 10px 0; color: #9494a5; width: 35%;">Catégorie</td><td style="padding: 10px 0; font-weight: 600; color: #ffffff;">${typeProduit}</td></tr>
                <tr><td style="padding: 10px 0; color: #9494a5;">Type</td><td style="padding: 10px 0; font-weight: 600; color: #ffffff;">${produit}</td></tr>
                <tr><td style="padding: 10px 0; color: #9494a5;">Marque</td><td style="padding: 10px 0; font-weight: 600; color: #ffffff;">${marque}</td></tr>
                <tr><td style="padding: 10px 0; color: #9494a5;">Modèle exact</td><td style="padding: 10px 0; font-weight: 600; color: #ffffff;">${modele}</td></tr>
                <tr><td style="padding: 10px 0; color: #9494a5;">État Visuel</td><td style="padding: 10px 0; font-weight: 600; color: #ffffff;">${etat || 'Non précisé'}</td></tr>
              </table>
              
              <h2 style="color: #B91A24; font-size: 16px; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 10px; margin: 0 0 20px 0; text-transform: uppercase; letter-spacing: 1px;">Synthèse de la Panne</h2>
              <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08); padding: 24px; border-radius: 16px; margin-top: 15px;">
                <p style="margin: 0; white-space: pre-wrap; line-height: 1.6; color: #f0f0f5; font-size: 15px;">${panne}</p>
              </div>
            </div>
            
            <!-- Footer -->
            <div style="background: rgba(0, 0, 0, 0.3); padding: 24px; text-align: center; border-top: 1px solid rgba(255,255,255,0.05);">
              <p style="margin: 0; font-size: 12px; color: #9494a5; line-height: 1.5;">
                Cet e-mail a été généré automatiquement par le système Pixie Phone.<br/>
                Ouvrez votre CRM pour donner suite à cette demande.
              </p>
            </div>
          </div>
        `
      })
    });

    const data = await response.json();

    if (response.ok) {
      return res.status(200).json({ success: true, data });
    } else {
      console.error("Resend API Error:", data);
      return res.status(400).json({ error: data.message });
    }
  } catch (error) {
    console.error("Vercel Function Error:", error);
    return res.status(500).json({ error: error.message });
  }
}
