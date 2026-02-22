import { Card } from "../ui/Card";
import { HighlightText } from "../ui/HighlightText";

const features = [
  {
    title: "Système d'enchères en temps réel",
    description:
      "Publiez votre expédition et recevez des offres instantanément. Les transporteurs à proximité enchérissent, vous choisissez la meilleure offre.",
    icon: (
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="64" height="64" rx="16" fill="#C1F11D" fillOpacity="0.2" />
        <path
          d="M32 16V48M24 24L32 16L40 24M24 40L32 48L40 40"
          stroke="#141414"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="32" cy="32" r="8" stroke="#C1F11D" strokeWidth="3" />
      </svg>
    ),
  },
  {
    title: "Suivi GPS en direct",
    description:
      "Suivez votre colis en temps réel sur la carte. Notifications automatiques à chaque étape : enlèvement, en route, livraison.",
    icon: (
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="64" height="64" rx="16" fill="#C1F11D" fillOpacity="0.2" />
        <circle cx="32" cy="28" r="12" stroke="#141414" strokeWidth="3" />
        <circle cx="32" cy="28" r="4" fill="#C1F11D" />
        <path
          d="M32 40V48M24 44H40"
          stroke="#141414"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Transporteurs vérifiés",
    description:
      "Tous nos transporteurs sont vérifiés : identité, permis, assurance. Consultez les notes et avis avant de choisir.",
    icon: (
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="64" height="64" rx="16" fill="#C1F11D" fillOpacity="0.2" />
        <path
          d="M32 20L35.5 27L43 28L37.5 33.5L39 41L32 37L25 41L26.5 33.5L21 28L28.5 27L32 20Z"
          stroke="#141414"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <circle cx="32" cy="32" r="16" stroke="#C1F11D" strokeWidth="2" />
      </svg>
    ),
  },
];

export function WhyChoose() {
  return (
    <section className="py-20 bg-[#E4FFF2]">
      <div className="max-w-[1152px] mx-auto px-6">
        <h2 className="text-3xl md:text-4xl lg:text-[64px] font-bold text-center mb-16 leading-tight">
          Pourquoi choisir{" "}
          <HighlightText>YITE</HighlightText> ?
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} hover className="text-center p-8">
              <div className="flex justify-center mb-6">{feature.icon}</div>
              <h3 className="text-xl font-bold text-[#141414] mb-4">
                {feature.title}
              </h3>
              <p className="text-[rgba(20,20,20,0.7)]">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
