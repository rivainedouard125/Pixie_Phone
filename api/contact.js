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
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
            <h1 style="color: #00c3ff;">Nouvelle Fiche de Réparation</h1>
            <p><strong>Cree le:</strong> ${new Date().toLocaleString('fr-FR')}</p>
            <hr />
            
            <h2>Informations Client</h2>
            <p><strong>Nom:</strong> ${nom}</p>
            <p><strong>Téléphone:</strong> ${tel}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Adresse:</strong> ${adresse}, ${cpVille}</p>
            <hr />

            <h2>Détails Appareil</h2>
            <p><strong>Catégorie:</strong> ${typeProduit}</p>
            <p><strong>Appareil:</strong> ${produit}</p>
            <p><strong>Marque / Modèle:</strong> ${marque} ${modele}</p>
            <p><strong>Série/IMEI:</strong> ${imei || 'Non fourni'}</p>
            <p><strong>État Visuel:</strong> ${etat || 'Non précisé'}</p>
            
            <h2>Description de la Panne</h2>
            <div style="background: #f4f4f4; padding: 15px; border-radius: 8px;">
              <p style="margin: 0; white-space: pre-wrap;">${panne}</p>
            </div>
            
            <p style="margin-top: 30px; font-size: 12px; color: #888;">
              Cet e-mail a été envoyé automatiquement depuis le formulaire Pixie Phone.
            </p>
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
