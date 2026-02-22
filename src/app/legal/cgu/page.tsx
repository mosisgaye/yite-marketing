import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions Générales d'Utilisation - YITE",
  description: "Conditions générales d'utilisation de la plateforme YITE",
};

export default function CGUPage() {
  return (
    <article className="prose prose-sm max-w-none">
      <h1 className="text-2xl md:text-3xl font-bold text-[#141414] mb-2">
        Conditions Générales d&apos;Utilisation
      </h1>
      <p className="text-sm text-[#141414]/60 mb-8">
        Dernière mise à jour : Février 2026
      </p>

      <section className="mb-8">
        <h2 className="text-lg font-bold text-[#141414] mb-3">1. Objet</h2>
        <p className="text-sm text-[#141414]/80 mb-3">
          Les présentes Conditions Générales d&apos;Utilisation (CGU) régissent l&apos;accès et l&apos;utilisation
          de la plateforme YITE, application mobile et site web de mise en relation entre expéditeurs
          et transporteurs pour le transport de marchandises.
        </p>
        <p className="text-sm text-[#141414]/80">
          YITE opère en tant que plateforme d&apos;intermédiation numérique conformément au
          Décret n° 2024-847 portant réglementation des plateformes numériques au Sénégal.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-bold text-[#141414] mb-3">2. Définitions</h2>
        <ul className="text-sm text-[#141414]/80 space-y-2 list-disc pl-5">
          <li><strong>Plateforme :</strong> L&apos;application mobile et le site web YITE</li>
          <li><strong>Expéditeur :</strong> Toute personne physique ou morale souhaitant faire transporter des marchandises</li>
          <li><strong>Transporteur :</strong> Tout professionnel du transport inscrit sur la plateforme</li>
          <li><strong>Expédition :</strong> Demande de transport publiée par un expéditeur</li>
          <li><strong>Offre :</strong> Proposition tarifaire soumise par un transporteur</li>
          <li><strong>Code PIN :</strong> Code de sécurité unique pour la validation des livraisons</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-bold text-[#141414] mb-3">3. Inscription et compte utilisateur</h2>

        <h3 className="text-base font-semibold text-[#141414] mb-2">3.1 Conditions d&apos;inscription</h3>
        <p className="text-sm text-[#141414]/80 mb-3">
          L&apos;inscription est ouverte à toute personne physique majeure (18 ans révolus) ou morale
          disposant de la capacité juridique. L&apos;utilisateur s&apos;engage à fournir des informations
          exactes et à jour.
        </p>

        <h3 className="text-base font-semibold text-[#141414] mb-2">3.2 Vérification des transporteurs</h3>
        <p className="text-sm text-[#141414]/80 mb-3">
          Conformément à la réglementation sénégalaise, les transporteurs doivent fournir :
        </p>
        <ul className="text-sm text-[#141414]/80 space-y-1 list-disc pl-5 mb-3">
          <li>Pièce d&apos;identité nationale valide</li>
          <li>Permis de conduire valide (catégorie appropriée)</li>
          <li>Carte grise du véhicule</li>
          <li>Attestation d&apos;assurance en cours de validité</li>
          <li>Registre de commerce (pour les professionnels)</li>
        </ul>

        <h3 className="text-base font-semibold text-[#141414] mb-2">3.3 Sécurité du compte</h3>
        <p className="text-sm text-[#141414]/80">
          L&apos;utilisateur est responsable de la confidentialité de ses identifiants.
          Toute activité sur le compte est réputée effectuée par le titulaire.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-bold text-[#141414] mb-3">4. Fonctionnement de la plateforme</h2>

        <h3 className="text-base font-semibold text-[#141414] mb-2">4.1 Publication d&apos;expéditions</h3>
        <p className="text-sm text-[#141414]/80 mb-3">
          L&apos;expéditeur publie une demande en précisant : adresses d&apos;enlèvement et de livraison,
          nature de la marchandise, dimensions/poids, budget proposé et délai souhaité.
        </p>

        <h3 className="text-base font-semibold text-[#141414] mb-2">4.2 Système d&apos;enchères</h3>
        <p className="text-sm text-[#141414]/80 mb-3">
          Les transporteurs consultent les expéditions disponibles et soumettent leurs offres.
          L&apos;expéditeur choisit librement l&apos;offre qui lui convient selon le prix, la note
          du transporteur et le délai proposé.
        </p>

        <h3 className="text-base font-semibold text-[#141414] mb-2">4.3 Validation par Code PIN</h3>
        <p className="text-sm text-[#141414]/80">
          Un code PIN unique est généré pour chaque expédition. Le transporteur doit le vérifier
          à l&apos;enlèvement et à la livraison. Ce système garantit la sécurité des transactions
          conformément aux bonnes pratiques du secteur.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-bold text-[#141414] mb-3">5. Marchandises autorisées et interdites</h2>

        <h3 className="text-base font-semibold text-[#141414] mb-2">5.1 Marchandises autorisées</h3>
        <p className="text-sm text-[#141414]/80 mb-3">
          Marchandises générales, produits alimentaires (avec véhicule adapté),
          matériaux de construction, meubles, équipements, colis divers.
        </p>

        <h3 className="text-base font-semibold text-[#141414] mb-2">5.2 Marchandises interdites</h3>
        <p className="text-sm text-[#141414]/80 mb-3">
          Sont strictement interdits conformément à l&apos;Article 115 du Code de l&apos;Environnement
          et à la réglementation en vigueur :
        </p>
        <ul className="text-sm text-[#141414]/80 space-y-1 list-disc pl-5">
          <li>Produits illicites ou de contrebande</li>
          <li>Matières dangereuses sans autorisation spéciale</li>
          <li>Armes et munitions</li>
          <li>Produits contrefaits</li>
          <li>Espèces protégées</li>
          <li>Tout objet dont le transport est interdit par la loi</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-bold text-[#141414] mb-3">6. Paiements</h2>

        <h3 className="text-base font-semibold text-[#141414] mb-2">6.1 Portefeuille YITE</h3>
        <p className="text-sm text-[#141414]/80 mb-3">
          Les transactions s&apos;effectuent via le portefeuille intégré en Francs CFA (FCFA).
          L&apos;expéditeur crédite son portefeuille avant de confirmer une expédition.
        </p>

        <h3 className="text-base font-semibold text-[#141414] mb-2">6.2 Commission YITE</h3>
        <p className="text-sm text-[#141414]/80 mb-3">
          YITE prélève une commission sur chaque transaction réussie. Le taux de commission
          est communiqué avant validation de l&apos;expédition.
        </p>

        <h3 className="text-base font-semibold text-[#141414] mb-2">6.3 Retrait des gains</h3>
        <p className="text-sm text-[#141414]/80">
          Les transporteurs peuvent retirer leurs gains vers leur compte bancaire ou
          mobile money (Orange Money, Wave, Free Money) selon les modalités en vigueur.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-bold text-[#141414] mb-3">7. Responsabilités</h2>

        <h3 className="text-base font-semibold text-[#141414] mb-2">7.1 Rôle de YITE</h3>
        <p className="text-sm text-[#141414]/80 mb-3">
          YITE agit en qualité d&apos;intermédiaire technique mettant en relation expéditeurs
          et transporteurs. YITE n&apos;est pas partie au contrat de transport conclu entre eux
          conformément à l&apos;Acte uniforme OHADA relatif aux contrats de transport de marchandises par route.
        </p>

        <h3 className="text-base font-semibold text-[#141414] mb-2">7.2 Responsabilité du transporteur</h3>
        <p className="text-sm text-[#141414]/80 mb-3">
          Le transporteur est responsable des marchandises de la prise en charge jusqu&apos;à
          la livraison. Il doit disposer d&apos;une assurance couvrant sa responsabilité professionnelle.
        </p>

        <h3 className="text-base font-semibold text-[#141414] mb-2">7.3 Responsabilité de l&apos;expéditeur</h3>
        <p className="text-sm text-[#141414]/80">
          L&apos;expéditeur garantit la licéité des marchandises et l&apos;exactitude des
          informations fournies (poids, dimensions, nature).
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-bold text-[#141414] mb-3">8. Litiges et réclamations</h2>
        <p className="text-sm text-[#141414]/80 mb-3">
          En cas de litige (colis endommagé, non livré, retard significatif), l&apos;utilisateur
          peut ouvrir une réclamation via l&apos;application dans un délai de 48 heures suivant
          la livraison prévue.
        </p>
        <p className="text-sm text-[#141414]/80">
          YITE s&apos;engage à traiter les réclamations dans un délai de 7 jours ouvrés et
          peut intervenir en médiation entre les parties.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-bold text-[#141414] mb-3">9. Sanctions et suspension</h2>
        <p className="text-sm text-[#141414]/80 mb-3">
          YITE se réserve le droit de suspendre ou résilier tout compte en cas de :
        </p>
        <ul className="text-sm text-[#141414]/80 space-y-1 list-disc pl-5">
          <li>Violation des présentes CGU</li>
          <li>Fraude ou tentative de fraude</li>
          <li>Comportement inapproprié ou dangereux</li>
          <li>Fausses informations</li>
          <li>Non-respect de la réglementation en vigueur</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-bold text-[#141414] mb-3">10. Propriété intellectuelle</h2>
        <p className="text-sm text-[#141414]/80">
          La marque YITE, le logo, l&apos;application et tous les contenus associés sont
          protégés par le droit de la propriété intellectuelle. Toute reproduction non
          autorisée est interdite.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-bold text-[#141414] mb-3">11. Droit applicable et juridiction</h2>
        <p className="text-sm text-[#141414]/80">
          Les présentes CGU sont régies par le droit sénégalais. En cas de litige non
          résolu à l&apos;amiable, les tribunaux de Dakar seront seuls compétents.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-bold text-[#141414] mb-3">12. Contact</h2>
        <p className="text-sm text-[#141414]/80">
          Pour toute question relative aux présentes CGU :<br />
          Email : contact@yite.sn<br />
          Adresse : Dakar, Sénégal
        </p>
      </section>
    </article>
  );
}
