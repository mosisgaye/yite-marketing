import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de Confidentialité - YITE",
  description: "Politique de confidentialité et protection des données personnelles YITE",
};

export default function ConfidentialitePage() {
  return (
    <article className="prose prose-sm max-w-none">
      <h1 className="text-2xl md:text-3xl font-bold text-[#141414] mb-2">
        Politique de Confidentialité
      </h1>
      <p className="text-sm text-[#141414]/60 mb-8">
        Dernière mise à jour : Février 2026
      </p>

      <div className="bg-[#E4FFF2] rounded-xl p-4 mb-8">
        <p className="text-sm text-[#141414]/80 m-0">
          <strong>Cadre légal :</strong> Cette politique est établie conformément à la
          Loi n° 2008-12 du 25 janvier 2008 relative à la protection des données à
          caractère personnel au Sénégal et aux recommandations de la Commission de
          Protection des Données Personnelles (CDP).
        </p>
      </div>

      <section className="mb-8">
        <h2 className="text-lg font-bold text-[#141414] mb-3">1. Responsable du traitement</h2>
        <p className="text-sm text-[#141414]/80 mb-3">
          Le responsable du traitement des données est :
        </p>
        <p className="text-sm text-[#141414]/80">
          <strong>YITE SAS</strong><br />
          Siège social : Dakar, Sénégal<br />
          Email : dpo@yite.sn<br />
          Déclaration CDP : [Numéro à obtenir]
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-bold text-[#141414] mb-3">2. Données collectées</h2>

        <h3 className="text-base font-semibold text-[#141414] mb-2">2.1 Données d&apos;identification</h3>
        <ul className="text-sm text-[#141414]/80 space-y-1 list-disc pl-5 mb-3">
          <li>Nom et prénom</li>
          <li>Numéro de téléphone</li>
          <li>Adresse email</li>
          <li>Photo de profil (optionnelle)</li>
          <li>Pièce d&apos;identité (pour les transporteurs)</li>
        </ul>

        <h3 className="text-base font-semibold text-[#141414] mb-2">2.2 Données de transport (transporteurs)</h3>
        <ul className="text-sm text-[#141414]/80 space-y-1 list-disc pl-5 mb-3">
          <li>Permis de conduire</li>
          <li>Carte grise du véhicule</li>
          <li>Attestation d&apos;assurance</li>
          <li>Registre de commerce (le cas échéant)</li>
        </ul>

        <h3 className="text-base font-semibold text-[#141414] mb-2">2.3 Données de localisation</h3>
        <p className="text-sm text-[#141414]/80 mb-3">
          Position GPS en temps réel durant les courses (avec consentement explicite).
          Ces données permettent le suivi des expéditions et la mise en relation
          avec les transporteurs à proximité.
        </p>

        <h3 className="text-base font-semibold text-[#141414] mb-2">2.4 Données de transaction</h3>
        <ul className="text-sm text-[#141414]/80 space-y-1 list-disc pl-5 mb-3">
          <li>Historique des expéditions</li>
          <li>Montants des transactions</li>
          <li>Moyens de paiement utilisés</li>
          <li>Solde du portefeuille</li>
        </ul>

        <h3 className="text-base font-semibold text-[#141414] mb-2">2.5 Données techniques</h3>
        <ul className="text-sm text-[#141414]/80 space-y-1 list-disc pl-5">
          <li>Adresse IP</li>
          <li>Type d&apos;appareil et système d&apos;exploitation</li>
          <li>Identifiants de l&apos;application</li>
          <li>Journaux de connexion</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-bold text-[#141414] mb-3">3. Finalités du traitement</h2>
        <p className="text-sm text-[#141414]/80 mb-3">
          Conformément à l&apos;article 4 de la Loi n° 2008-12, vos données sont collectées pour :
        </p>
        <ul className="text-sm text-[#141414]/80 space-y-1 list-disc pl-5">
          <li>Création et gestion de votre compte utilisateur</li>
          <li>Mise en relation entre expéditeurs et transporteurs</li>
          <li>Traitement et suivi des expéditions</li>
          <li>Gestion des paiements et du portefeuille</li>
          <li>Vérification de l&apos;identité des transporteurs</li>
          <li>Support client et résolution des litiges</li>
          <li>Amélioration de nos services</li>
          <li>Obligations légales et réglementaires</li>
          <li>Prévention de la fraude</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-bold text-[#141414] mb-3">4. Base légale du traitement</h2>
        <p className="text-sm text-[#141414]/80 mb-3">
          Le traitement de vos données repose sur :
        </p>
        <ul className="text-sm text-[#141414]/80 space-y-1 list-disc pl-5">
          <li><strong>Exécution du contrat :</strong> pour la fourniture du service</li>
          <li><strong>Consentement :</strong> pour la géolocalisation et communications marketing</li>
          <li><strong>Obligation légale :</strong> pour la conservation des données de transaction</li>
          <li><strong>Intérêt légitime :</strong> pour la prévention de la fraude et l&apos;amélioration du service</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-bold text-[#141414] mb-3">5. Partage des données</h2>

        <h3 className="text-base font-semibold text-[#141414] mb-2">5.1 Entre utilisateurs</h3>
        <p className="text-sm text-[#141414]/80 mb-3">
          Pour permettre la mise en relation, certaines informations sont partagées :
          nom, photo de profil, note moyenne, numéro de téléphone (après acceptation d&apos;une offre).
        </p>

        <h3 className="text-base font-semibold text-[#141414] mb-2">5.2 Prestataires techniques</h3>
        <p className="text-sm text-[#141414]/80 mb-3">
          Nous faisons appel à des sous-traitants pour l&apos;hébergement, les paiements
          et l&apos;envoi de notifications, dans le respect de la réglementation.
        </p>

        <h3 className="text-base font-semibold text-[#141414] mb-2">5.3 Autorités</h3>
        <p className="text-sm text-[#141414]/80">
          Les données peuvent être communiquées aux autorités compétentes sur
          réquisition judiciaire ou dans le cadre d&apos;obligations légales.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-bold text-[#141414] mb-3">6. Transfert international</h2>
        <p className="text-sm text-[#141414]/80">
          Vos données sont hébergées sur des serveurs sécurisés. En cas de transfert
          hors du Sénégal, nous nous assurons que le pays destinataire offre un niveau
          de protection adéquat conformément aux exigences de la CDP.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-bold text-[#141414] mb-3">7. Durée de conservation</h2>
        <ul className="text-sm text-[#141414]/80 space-y-2 list-disc pl-5">
          <li><strong>Données de compte actif :</strong> pendant toute la durée d&apos;utilisation</li>
          <li><strong>Données de compte inactif :</strong> 3 ans après la dernière activité</li>
          <li><strong>Données de transaction :</strong> 10 ans (obligation comptable)</li>
          <li><strong>Données de géolocalisation :</strong> 1 an</li>
          <li><strong>Documents d&apos;identité :</strong> durée de la relation + 5 ans</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-bold text-[#141414] mb-3">8. Vos droits</h2>
        <p className="text-sm text-[#141414]/80 mb-3">
          Conformément à la Loi n° 2008-12, vous disposez des droits suivants :
        </p>
        <ul className="text-sm text-[#141414]/80 space-y-2 list-disc pl-5">
          <li><strong>Droit d&apos;accès :</strong> obtenir une copie de vos données</li>
          <li><strong>Droit de rectification :</strong> corriger vos données inexactes</li>
          <li><strong>Droit d&apos;opposition :</strong> vous opposer à certains traitements</li>
          <li><strong>Droit à l&apos;effacement :</strong> demander la suppression de vos données</li>
          <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
          <li><strong>Retrait du consentement :</strong> à tout moment pour les traitements basés sur le consentement</li>
        </ul>
        <p className="text-sm text-[#141414]/80 mt-3">
          Pour exercer ces droits : dpo@yite.sn
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-bold text-[#141414] mb-3">9. Sécurité des données</h2>
        <p className="text-sm text-[#141414]/80 mb-3">
          Nous mettons en œuvre des mesures techniques et organisationnelles appropriées :
        </p>
        <ul className="text-sm text-[#141414]/80 space-y-1 list-disc pl-5">
          <li>Chiffrement des données sensibles (SSL/TLS)</li>
          <li>Authentification sécurisée</li>
          <li>Contrôle d&apos;accès strict</li>
          <li>Surveillance et détection des intrusions</li>
          <li>Sauvegardes régulières</li>
          <li>Formation du personnel</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-bold text-[#141414] mb-3">10. Cookies et traceurs</h2>
        <p className="text-sm text-[#141414]/80">
          Notre site utilise des cookies techniques nécessaires au fonctionnement
          et des cookies d&apos;analyse (avec consentement). Vous pouvez gérer vos
          préférences via les paramètres de votre navigateur.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-bold text-[#141414] mb-3">11. Réclamation</h2>
        <p className="text-sm text-[#141414]/80">
          Si vous estimez que vos droits ne sont pas respectés, vous pouvez
          introduire une réclamation auprès de la Commission de Protection des
          Données Personnelles (CDP) :<br /><br />
          <strong>CDP - Commission de Protection des Données Personnelles</strong><br />
          Site web : <a href="https://www.cdp.sn" className="text-[#141414] underline">www.cdp.sn</a><br />
          Dakar, Sénégal
        </p>
      </section>

      <section>
        <h2 className="text-lg font-bold text-[#141414] mb-3">12. Modifications</h2>
        <p className="text-sm text-[#141414]/80">
          Cette politique peut être modifiée. En cas de changement substantiel,
          vous serez informé par notification dans l&apos;application ou par email.
          La date de dernière mise à jour est indiquée en haut de ce document.
        </p>
      </section>
    </article>
  );
}
