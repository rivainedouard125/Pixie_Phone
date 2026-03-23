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
        // During the testing phase, Resend ONLY lets you send from onboarding@resend.dev TO the signup email.
        from: 'Pixie Phone System <onboarding@resend.dev>', 
        to: ['kollana.team@gmail.com'], // Testing email!
        subject: `[NVL RÉPARATION] ${marque} ${modele} - ${nom}`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0c; color: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #1a1a24; padding: 0;">
            
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #00c3ff 0%, #0055ff 100%); padding: 30px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 800; letter-spacing: 1px; text-transform: uppercase;">Pixie Phone</h1>
              <p style="margin: 10px 0 0; color: rgba(255,255,255,0.9); font-size: 14px;">Nouvelle Fiche de Réparation</p>
            </div>
            
            <!-- Content -->
            <div style="padding: 30px;">
              <p style="color: #888; font-size: 12px; text-align: right; margin-top: 0;">Reçu le : ${new Date().toLocaleString('fr-FR')}</p>
              
              <h2 style="color: #00c3ff; font-size: 16px; border-bottom: 1px solid #1a1a24; padding-bottom: 10px; margin-top: 30px;">👤 Informations Client</h2>
              <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
                <tr><td style="padding: 8px 0; color: #888; width: 35%;">Nom</td><td style="padding: 8px 0; font-weight: 600;">${nom}</td></tr>
                <tr><td style="padding: 8px 0; color: #888;">Téléphone</td><td style="padding: 8px 0; font-weight: 600;">${tel}</td></tr>
                <tr><td style="padding: 8px 0; color: #888;">Email</td><td style="padding: 8px 0; font-weight: 600;">${email}</td></tr>
                <tr><td style="padding: 8px 0; color: #888;">Adresse</td><td style="padding: 8px 0; font-weight: 600;">${adresse},<br/>${cpVille}</td></tr>
              </table>

              <h2 style="color: #00c3ff; font-size: 16px; border-bottom: 1px solid #1a1a24; padding-bottom: 10px; margin-top: 30px;">📱 Détails de l'Appareil</h2>
              <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
                <tr><td style="padding: 8px 0; color: #888; width: 35%;">Catégorie</td><td style="padding: 8px 0; font-weight: 600;">${typeProduit}</td></tr>
                <tr><td style="padding: 8px 0; color: #888;">Appareil</td><td style="padding: 8px 0; font-weight: 600;">${produit}</td></tr>
                <tr><td style="padding: 8px 0; color: #888;">Marque</td><td style="padding: 8px 0; font-weight: 600;">${marque}</td></tr>
                <tr><td style="padding: 8px 0; color: #888;">Modèle</td><td style="padding: 8px 0; font-weight: 600;">${modele}</td></tr>
                <tr><td style="padding: 8px 0; color: #888;">État Visuel</td><td style="padding: 8px 0; font-weight: 600;">${etat || 'Non précisé'}</td></tr>
              </table>
              
              <h2 style="color: #00c3ff; font-size: 16px; border-bottom: 1px solid #1a1a24; padding-bottom: 10px; margin-top: 30px;">🛠 Description de la Panne</h2>
              <div style="background: rgba(255, 255, 255, 0.05); border: 1px solid #1a1a24; padding: 20px; border-radius: 12px; margin-top: 15px;">
                <p style="margin: 0; white-space: pre-wrap; line-height: 1.6;">${panne}</p>
              </div>
            </div>
            
            <!-- Footer -->
            <div style="background: #050508; padding: 20px; text-align: center; border-top: 1px solid #1a1a24;">
              <p style="margin: 0; font-size: 12px; color: #666;">
                Cet e-mail a été envoyé automatiquement depuis le système Pixie Phone.<br/>
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
