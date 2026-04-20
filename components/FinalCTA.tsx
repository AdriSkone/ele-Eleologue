import Image from "next/image";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">

      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/cafes-specialite_big.webp"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0a0605]/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <p className="font-sans text-[#C89B3C] text-xs tracking-[0.25em] uppercase mb-6">
          Pour Aller Plus Loin
        </p>
        <h2 className="font-serif text-[#F5E6D3] text-4xl md:text-6xl font-medium leading-tight mb-6">
          Vous Ne Boirez Plus Jamais Votre Café Comme Avant
        </h2>
        <p className="font-sans text-[#F5E6D3]/65 text-base leading-relaxed max-w-xl mx-auto mb-10">
          Rejoignez nos ateliers caféologie et découvrez un monde de saveurs, d'arômes et de techniques qui transformeront votre rapport au café.
        </p>
        <Link
          href="/ateliers"
          className="inline-flex items-center gap-2 border border-[#F5E6D3] text-[#F5E6D3] px-10 py-4 text-xs tracking-[0.2em] uppercase font-sans font-medium hover:bg-[#F5E6D3] hover:text-[#4B2E2B] transition-all duration-300"
        >
          Réserver un Atelier
          <span aria-hidden>→</span>
        </Link>
      </div>

    </section>
  );
}
