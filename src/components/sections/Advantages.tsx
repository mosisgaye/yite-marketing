import Image from "next/image";
import { SectionTag } from "../ui/SectionTag";
import { Badge } from "../ui/Badge";

const advantages = [
  {
    title: "Négociez vos tarifs",
    description:
      "Fixez votre budget ou lancez une enchère. Les transporteurs proposent leurs offres, vous gardez le contrôle du prix final.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2V22M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6"
          stroke="#141414"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Tous types de cargaisons",
    description:
      "Général, fragile, périssable, volumineux... Choisissez le type de véhicule adapté : bâché, frigorifique, plateau ou camion.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M21 16V8C20.9996 7.64927 20.9071 7.3048 20.7315 7.00017C20.556 6.69555 20.3037 6.44136 20 6.264L13 2.264C12.696 2.08669 12.3511 1.99316 12 1.99316C11.6489 1.99316 11.304 2.08669 11 2.264L4 6.264C3.69626 6.44136 3.44398 6.69555 3.26846 7.00017C3.09294 7.3048 3.00036 7.64927 3 8V16C3.00036 16.3507 3.09294 16.6952 3.26846 16.9998C3.44398 17.3044 3.69626 17.5586 4 17.736L11 21.736C11.304 21.9133 11.6489 22.0068 12 22.0068C12.3511 22.0068 12.696 21.9133 13 21.736L20 17.736C20.3037 17.5586 20.556 17.3044 20.7315 16.9998C20.9071 16.6952 20.9996 16.3507 21 16Z"
          stroke="#141414"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.27 6.96L12 12.01L20.73 6.96M12 22.08V12"
          stroke="#141414"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Vérification par code PIN",
    description:
      "Un code PIN unique sécurise chaque livraison. Le transporteur le vérifie à l'enlèvement et à la remise du colis.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="11" width="18" height="11" rx="2" stroke="#141414" strokeWidth="2"/>
        <path d="M7 11V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V11" stroke="#141414" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="12" cy="16" r="1" fill="#141414"/>
      </svg>
    ),
  },
  {
    title: "Paiement sécurisé",
    description:
      "Portefeuille intégré en FCFA. Payez vos livraisons facilement et suivez toutes vos transactions en temps réel.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="5" width="20" height="14" rx="2" stroke="#141414" strokeWidth="2"/>
        <path d="M2 10H22" stroke="#141414" strokeWidth="2"/>
        <path d="M6 15H10" stroke="#141414" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export function Advantages() {
  return (
    <section id="avantages" className="py-20 bg-[#E4FFF2]">
      <div className="max-w-[1152px] mx-auto px-6">
        <SectionTag className="mb-6">Avantages</SectionTag>

        <h2 className="text-3xl md:text-4xl lg:text-[64px] font-bold mb-16 leading-tight max-w-3xl">
          Une solution complète pour vos expéditions
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative rounded-3xl overflow-hidden h-[400px] lg:h-[500px]">
            <Image
              src="/entreprise.png"
              alt="Équipe YITE - Collaboration entre logisticien et transporteur"
              fill
              className="object-cover"
              quality={85}
            />
          </div>

          {/* Advantages List */}
          <div className="space-y-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex gap-4">
                <Badge className="flex-shrink-0">{advantage.icon}</Badge>
                <div>
                  <h3 className="text-xl font-bold text-[#141414] mb-2">
                    {advantage.title}
                  </h3>
                  <p className="text-[rgba(20,20,20,0.7)]">
                    {advantage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
