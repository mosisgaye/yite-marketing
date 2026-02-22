import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions Légales - YITE",
  description: "Mentions légales et informations sur l'éditeur du site YITE",
};

export default function MentionsLegalesPage() {
  return (
    <article className="prose prose-sm max-w-none">
      <h1 className="text-2xl md:text-3xl font-bold text-[#141414] mb-2">
        Mentions Légales
      </h1>
      <p className="text-sm text-[#141414]/60 mb-8">
        Dernière mise à jour : Février 2026
      </p>

      <section className="mb-8">
        <h2 className="text-lg font-bold text-[#141414] mb-3">1. Éditeur du site</h2>
        <p className="text-sm text-[#141414]/80">
          <strong>YITE SAS</strong><br />
          Société par Actions Simplifiée<br />
          Capital social : [À compléter] FCFA<br />
          NINEA : [À compléter]<br />
          Registre du Commerce : [À compléter]<br />
          Siège social : Dakar, Sénégal<br />
          Téléphone : [À compléter]<br />
          Email : contact@yite.sn
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-bold text-[#141414] mb-3">2. Directeur de la publication</h2>
        <p className="text-sm text-[#141414]/80">
          [Nom du Directeur Général]<br />
          En qualité de Directeur Général de YITE SAS
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-bold text-[#141414] mb-3">3. Hébergement</h2>
        <p className="text-sm text-[#141414]/80">
          Le site et l&apos;application YITE sont hébergés par :<br /><br />
          <strong>[Nom de l&apos;hébergeur]</strong><br />
          Adresse : [Adresse de l&apos;hébergeur]<br />
          Téléphone : [Téléphone]
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-bold text-[#141414] mb-3">4. Activité réglementée</h2>

        <h3 className="text-base font-semibold text-[#141414] mb-2">4.1 Plateforme d&apos;intermédiation</h3>
        <p className="text-sm text-[#141414]/80 mb-3">
          YITE opère en tant que plateforme d&apos;intermédiation numérique dans le secteur
          du transport de marchandises conformément au Décret n° 2024-847 portant
          réglementation des plateformes numériques au Sénégal.
        </p>

        <h3 className="text-base font-semibold text-[#141414] mb-2">4.2 Agrément</h3>
        <p className="text-sm text-[#141414]/80 mb-3">
          Licence d&apos;exploitation délivrée par la Direction Générale des Transports
          Terrestres (DGTT) : [Numéro à compléter]<br />
          Date de délivrance : [Date]<br />
          Validité : 5 ans
        </p>

        <h3 className="text-base font-semibold text-[#141414] mb-2">4.3 Cadre juridique applicable</h3>
        <ul className="text-sm text-[#141414]/80 space-y-1 list-disc pl-5">
          <li>Décret n° 2024-847 sur les plateformes numériques de transport</li>
          <li>Acte uniforme OHADA relatif aux contrats de transport de marchandises par route</li>
          <li>Loi n° 2008-12 relative à la protection des données personnelles</li>
          <li>Code de l&apos;Environnement du Sénégal (Article 115 pour les matières dangereuses)</li>
          <li>Loi n° 2022-05 du 15 avril 2022 portant création du CETUD</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-bold text-[#141414] mb-3">5. Protection des données personnelles</h2>
        <p className="text-sm text-[#141414]/80 mb-3">
          Conformément à la Loi n° 2008-12 du 25 janvier 2008 relative à la protection
          des données à caractère personnel, YITE a procédé à une déclaration auprès
          de la Commission de Protection des Données Personnelles (CDP).
        </p>
        <p className="text-sm text-[#141414]/80 mb-3">
          <strong>Numéro de déclaration CDP :</strong> [À compléter]<br />
          <strong>Délégué à la Protection des Données :</strong> dpo@yite.sn
        </p>
        <p className="text-sm text-[#141414]/80">
          Pour plus d&apos;informations, consultez notre{" "}
          <a href="/legal/confidentialite" className="text-[#141414] underline">
            Politique de Confidentialité
          </a>.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-bold text-[#141414] mb-3">6. Propriété intellectuelle</h2>
        <p className="text-sm text-[#141414]/80 mb-3">
          L&apos;ensemble du contenu du site et de l&apos;application YITE (textes, images,
          graphismes, logo, icônes, sons, logiciels, etc.) est la propriété exclusive
          de YITE SAS ou de ses partenaires, et est protégé par les lois sénégalaises
          et internationales relatives à la propriété intellectuelle.
        </p>
        <p className="text-sm text-[#141414]/80">
          Toute reproduction, représentation, modification, publication ou adaptation
          de tout ou partie des éléments du site, quel que soit le moyen ou le procédé
          utilisé, est interdite sans autorisation écrite préalable de YITE SAS.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-bold text-[#141414] mb-3">7. Marques</h2>
        <p className="text-sm text-[#141414]/80">
          YITE et le logo YITE sont des marques déposées de YITE SAS.
          Toute utilisation non autorisée de ces marques est strictement interdite.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-bold text-[#141414] mb-3">8. Limitation de responsabilité</h2>
        <p className="text-sm text-[#141414]/80 mb-3">
          YITE s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des informations
          diffusées sur ce site. Toutefois, YITE ne peut garantir l&apos;exactitude,
          la précision ou l&apos;exhaustivité des informations mises à disposition.
        </p>
        <p className="text-sm text-[#141414]/80">
          YITE agit en qualité d&apos;intermédiaire technique et ne saurait être tenue
          responsable des dommages directs ou indirects résultant de l&apos;utilisation
          du site ou de l&apos;impossibilité d&apos;y accéder, ni des relations contractuelles
          établies entre les utilisateurs.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-bold text-[#141414] mb-3">9. Liens hypertextes</h2>
        <p className="text-sm text-[#141414]/80">
          Le site peut contenir des liens vers des sites tiers. YITE n&apos;exerce aucun
          contrôle sur ces sites et décline toute responsabilité quant à leur contenu
          et aux services qu&apos;ils proposent.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-bold text-[#141414] mb-3">10. Droit applicable et juridiction</h2>
        <p className="text-sm text-[#141414]/80">
          Les présentes mentions légales sont régies par le droit sénégalais.
          En cas de litige, et à défaut de résolution amiable, les tribunaux
          de Dakar seront seuls compétents.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-bold text-[#141414] mb-3">11. Accessibilité</h2>
        <p className="text-sm text-[#141414]/80">
          YITE s&apos;engage à rendre son site et son application accessibles conformément
          aux bonnes pratiques en matière d&apos;accessibilité numérique. Si vous rencontrez
          des difficultés d&apos;accès, merci de nous contacter à : accessibilite@yite.sn
        </p>
      </section>

      <section>
        <h2 className="text-lg font-bold text-[#141414] mb-3">12. Contact</h2>
        <p className="text-sm text-[#141414]/80">
          Pour toute question concernant ces mentions légales :<br /><br />
          <strong>YITE SAS</strong><br />
          Email : contact@yite.sn<br />
          Adresse : Dakar, Sénégal<br />
          Site web : www.yite.sn
        </p>
      </section>
    </article>
  );
}
