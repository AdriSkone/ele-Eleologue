import Image from "next/image";
import Link from "next/link";

export default function ProfessionnelsSection() {
  return (
    <section className="bg-[#F6F1EB] py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Image */}
        <div className="relative h-80 md:h-[480px] rounded-xl overflow-hidden">
          <Image
            src="/pros-home.webp"
            alt="Atelier professionnel en entreprise"
            fill
            className="object-cover"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col justify-center">
          <p className="font-sans text-[#C89B3C] text-xs tracking-[0.25em] uppercase mb-5">
            Pour Entreprises
          </p>
          <h2 className="font-serif text-[#4B2E2B] text-4xl md:text-5xl font-medium leading-tight mb-8">
            Les Professionnels Aussi
          </h2>
          <p className="font-sans text-[#4B2E2B]/70 text-base leading-relaxed mb-4">
            Nos ateliers sont conçus pour les particuliers et les professionnels. Vous êtes une entreprise et souhaitez proposer à vos collaborateurs un atelier caféologie original et fédérateur ?
          </p>
          <p className="font-sans text-[#4B2E2B]/70 text-base leading-relaxed mb-10">
            Nous nous déplaçons chez vous pour animer nos ateliers. Vos collaborateurs deviendront des amateurs éclairés et apprécieront ça.
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

      </div>
    </section>
  );
}
