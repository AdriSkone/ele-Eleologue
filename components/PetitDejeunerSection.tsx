import Image from "next/image";
import Link from "next/link";

export default function PetitDejeunerSection() {
  return (
    <section className="bg-[#F5E6D3] py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-12 items-center">

        {/* Text */}
        <div className="flex flex-col justify-center order-2 md:order-1">
          <p className="font-sans text-[#C89B3C] text-xs tracking-[0.25em] uppercase mb-5">
            Animation Petit-Déjeuner
          </p>
          <h2 className="font-serif text-[#4B2E2B] text-4xl md:text-5xl font-medium leading-tight mb-8">
            Petits-Déjeuners en Région Nantaise
          </h2>
          <p className="font-sans text-[#4B2E2B]/70 text-base leading-relaxed mb-4">
            Nous animons vos petits-déjeuners d'affaires et collaborateurs en construisant une carte sur mesure et en proposant différentes méthodes d'extraction.
          </p>
          <p className="font-sans text-[#4B2E2B]/70 text-base leading-relaxed mb-10">
            Nous nous déplaçons pour votre événement — pensez-les exclusivement pour ces animations de petits-déjeuners qui allient culture, découverte et qualité.
          </p>
          <div>
            <Link
              href="/contact"
              className="inline-block bg-[#4B2E2B] text-[#F5E6D3] px-8 py-3 text-xs tracking-[0.2em] uppercase font-sans font-semibold rounded-lg hover:bg-[#C89B3C] transition-all duration-300"
            >
              Contactez-nous
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="relative h-80 md:h-[480px] rounded-xl overflow-hidden order-1 md:order-2">
          <Image
            src="/petit-dej.webp"
            alt="Animation petits-déjeuners en région nantaise"
            fill
            className="object-cover"
          />
        </div>

      </div>
    </section>
  );
}
