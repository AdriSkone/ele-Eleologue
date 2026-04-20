import Image from "next/image";
import Link from "next/link";

const workshops = [
  {
    slug: "methodes-douces",
    title: "Découverte des méthodes douces",
    description:
      "Maîtrisez l'extraction et les gestes clés pour des cafés filtrés parfaits et révélez saveurs et arômes subtils par différentes méthodes (V60, Chemex…).",
    price: 65,
    duration: "2 heures",
    image: "/atelier-methodes-douces.webp",
  },
  {
    slug: "nez-du-cafe-cupping",
    title: "Le nez du café et du cupping",
    description:
      "Affinez votre sens olfactif avec le protocole de cupping professionnel. Découvrez comment analyser arômes et défauts pour évaluer le café comme un connaisseur.",
    price: 65,
    duration: "2 heures",
    image: "/ELE-charlotteDEFARGES-7109.webp",
  },
  {
    slug: "coulisses-torrefaction",
    title: "Les coulisses de la torréfaction",
    description:
      "Vivez l'expérience du torréfacteur. Décoffrez les courbes de cuisson, comprenez les réactions du grain, torréfiez votre propre échantillon et repartez avec votre café unique, torréfié par vos soins.",
    price: 65,
    duration: "3 heures",
    image: "/atelier-torrefaction.webp",
  },
];

export default function WorkshopsSection() {
  return (
    <section id="ateliers" className="bg-[#F6F1EB] py-24 px-6">

      {/* Header */}
      <div className="text-center mb-14">
        <p className="font-sans text-[#C89B3C] text-xs tracking-[0.3em] uppercase mb-4">
          Nos Ateliers
        </p>
        <h2 className="font-cormorant font-medium text-[#4B2E2B] text-4xl md:text-5xl">
          Nos Ateliers Caféologie
        </h2>
      </div>

      {/* Cards grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {workshops.map((w) => (
          <article key={w.slug} className="bg-white flex flex-col rounded-xl shadow-md overflow-hidden">

            {/* Image */}
            <div className="relative h-52 w-full">
              <Image
                src={w.image}
                alt={w.title}
                fill
                className="object-cover object-center"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-6 gap-4">
              <h3 className="font-cormorant font-medium text-[#1A1A1A] text-xl leading-snug">
                {w.title}
              </h3>
              <p className="font-sans text-[#1A1A1A]/65 text-sm leading-relaxed flex-1">
                {w.description}
              </p>
              <div className="font-sans text-[#4B2E2B] text-xs tracking-wide">
                {w.price}€ · {w.duration}
              </div>
              <Link
                href={`/ateliers/${w.slug}`}
                className="block text-center bg-[#4B2E2B] text-[#F5E6D3] text-xs tracking-[0.2em] uppercase py-3 font-semibold rounded-lg hover:bg-[#C89B3C] transition-colors duration-300"
              >
                Réserver
              </Link>
            </div>

          </article>
        ))}
      </div>

    </section>
  );
}
