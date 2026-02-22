import { SectionTag } from "../ui/SectionTag";
import { Card } from "../ui/Card";

const services = [
  {
    title: "Livraison légère",
    description: "Colis jusqu'à 20 kg",
    details: "Idéal pour les petits colis, documents et livraisons urbaines rapides.",
    tags: ["Moto", "Voiture"],
    icon: (
      <svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="120" height="120" rx="24" fill="#C1F11D" fillOpacity="0.1" />
        <circle cx="35" cy="80" r="15" stroke="#141414" strokeWidth="3" />
        <circle cx="85" cy="80" r="15" stroke="#141414" strokeWidth="3" />
        <path
          d="M50 80H70M25 60L35 40H60L80 60L95 55V70"
          stroke="#141414"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="40" y="35" width="30" height="20" rx="4" stroke="#C1F11D" strokeWidth="3" />
      </svg>
    ),
  },
  {
    title: "Transport de fret",
    description: "Cargaisons de plus de 20 kg",
    details: "Pour le transport de marchandises, matériaux et cargaisons volumineuses.",
    tags: ["Bâché", "Frigorifique", "Plateau", "Camion"],
    icon: (
      <svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="120" height="120" rx="24" fill="#C1F11D" fillOpacity="0.1" />
        <circle cx="35" cy="85" r="12" stroke="#141414" strokeWidth="3" />
        <circle cx="85" cy="85" r="12" stroke="#141414" strokeWidth="3" />
        <path
          d="M20 70V45C20 42.2386 22.2386 40 25 40H70V70H20Z"
          stroke="#141414"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <path
          d="M70 50H90C92.7614 50 95 52.2386 95 55V70H70V50Z"
          stroke="#141414"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <rect x="35" y="50" width="25" height="15" rx="2" stroke="#C1F11D" strokeWidth="2" />
      </svg>
    ),
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background decorative shape */}
      <div className="absolute inset-0 bg-[#E4FFF2]" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] opacity-30"
        style={{
          background: `radial-gradient(ellipse at center, #C1F11D 0%, transparent 70%)`,
        }}
      />

      <div className="relative max-w-[1152px] mx-auto px-6">
        <SectionTag className="mb-6">Services</SectionTag>

        <h2 className="text-3xl md:text-4xl lg:text-[64px] font-bold mb-6 leading-tight max-w-2xl">
          Deux solutions selon vos besoins
        </h2>

        <p className="text-[rgba(20,20,20,0.7)] mb-12 max-w-xl">
          Du petit colis au transport de marchandises, YITE propose le véhicule adapté à chaque type de cargaison.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} hover className="p-8">
              <div className="flex justify-center mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold text-[#141414] text-center mb-2">
                {service.title}
              </h3>
              <p className="text-[#C1F11D] font-semibold text-center mb-2">
                {service.description}
              </p>
              <p className="text-[rgba(20,20,20,0.7)] text-center mb-6">
                {service.details}
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {service.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-4 py-2 border border-[rgba(0,0,0,0.1)] rounded-full text-sm font-medium text-[#141414]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
