import { SectionTag } from "../ui/SectionTag";
import { Accordion, AccordionItem } from "../ui/Accordion";

const faqs = [
  {
    question: "Comment fonctionne le système d'enchères ?",
    answer:
      "Lorsque vous publiez une expédition, les transporteurs à proximité reçoivent une notification. Ils peuvent alors vous soumettre une offre avec leur prix et leur temps d'arrivée estimé. Vous voyez toutes les offres en temps réel et choisissez celle qui vous convient le mieux en fonction du prix, de la note du transporteur et du délai proposé.",
  },
  {
    question: "Quels types de cargaisons puis-je expédier ?",
    answer:
      "YITE accepte tous types de cargaisons légales : marchandises générales, produits fragiles, denrées périssables (avec véhicule frigorifique), matériaux de construction, meubles, produits volumineux, etc. Lors de la création de votre expédition, précisez le type de cargaison pour que les transporteurs équipés puissent répondre.",
  },
  {
    question: "Comment sont vérifiés les transporteurs ?",
    answer:
      "Tous les transporteurs passent par un processus de vérification : contrôle d'identité, permis de conduire valide, assurance du véhicule à jour. Chaque transporteur a un profil avec sa note moyenne, son taux de ponctualité et le nombre de livraisons effectuées. Vous pouvez consulter ces informations avant d'accepter une offre.",
  },
  {
    question: "Comment fonctionne le code PIN de livraison ?",
    answer:
      "Un code PIN unique est généré pour chaque expédition. Le transporteur doit vérifier ce code à l'enlèvement et à la livraison du colis. Ce système garantit que seule la bonne personne reçoit le colis et protège contre les fraudes. Le code peut être régénéré jusqu'à 3 fois si nécessaire.",
  },
  {
    question: "Comment sont gérés les paiements ?",
    answer:
      "YITE utilise un système de portefeuille intégré en FCFA. Les expéditeurs créditent leur portefeuille avant d'expédier. À la livraison confirmée, le montant est transféré au transporteur (moins la commission YITE). Les transporteurs peuvent retirer leurs gains à tout moment vers leur compte bancaire ou mobile money.",
  },
  {
    question: "Que faire en cas de problème avec une livraison ?",
    answer:
      "En cas de litige (colis endommagé, non livré, etc.), vous pouvez ouvrir une réclamation directement dans l'application. Notre équipe de médiation intervient pour trouver une solution équitable. Toutes les livraisons bénéficient d'une couverture en cas de problème avéré.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 bg-[#E4FFF2]">
      <div className="max-w-[1152px] mx-auto px-6">
        <div className="text-center">
          <SectionTag className="mb-6">FAQ</SectionTag>
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-[64px] font-bold mb-12 leading-tight text-center">
          Questions fréquentes
        </h2>

        <div className="max-w-3xl mx-auto">
          <Accordion>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} title={faq.question}>
                <p>{faq.answer}</p>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
