import { Pill } from "../ui/Pill";

const clients = [
  { label: "E-commerce", icon: "🛒" },
  { label: "Restaurants", icon: "🍽️" },
  { label: "Grossistes", icon: "📦" },
  { label: "Pharmacies", icon: "💊" },
  { label: "Agriculteurs", icon: "🌾" },
  { label: "Artisans", icon: "🔨" },
  { label: "Boutiques", icon: "👕" },
  { label: "Industriels", icon: "🏭" },
  { label: "Importateurs", icon: "🚢" },
  { label: "Particuliers", icon: "👤" },
  { label: "et plus", icon: "✨" },
];

export function Clients() {
  return (
    <section className="py-20 bg-[#E4FFF2]">
      <div className="max-w-[1152px] mx-auto px-6">
        <h2 className="text-3xl md:text-4xl lg:text-[64px] font-bold text-center mb-12 leading-tight italic">
          Qui utilise YITE ?
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {clients.map((client, index) => (
            <Pill
              key={index}
              icon={<span className="text-2xl">{client.icon}</span>}
              className="hover:bg-[#F4F3D8] transition-colors cursor-default"
            >
              {client.label}
            </Pill>
          ))}
        </div>

        <p className="text-center text-[rgba(20,20,20,0.6)] mt-8 max-w-2xl mx-auto">
          Que vous soyez une entreprise ou un particulier, YITE s&apos;adapte à vos besoins
          de livraison en Afrique de l&apos;Ouest.
        </p>
      </div>
    </section>
  );
}
