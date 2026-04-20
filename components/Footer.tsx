import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0a0605] px-8 pt-16 pb-8">

      {/* Main grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-12 mb-12">

        {/* Brand */}
        <div className="flex flex-col gap-5">
          <Image
            src="/icone.webp"
            alt="élé - Ateliers Caféologie"
            width={80}
            height={80}
            className="object-contain"
          />
          <p className="font-sans text-[#F5E6D3]/50 text-sm leading-relaxed max-w-xs">
            Explorez, dégustez, apprenez. Des ateliers café pour ne plus jamais boire votre café comme avant.
          </p>
        </div>

        {/* Ateliers */}
        <div className="flex flex-col gap-4">
          <p className="font-sans text-[#F5E6D3]/90 text-xs tracking-[0.2em] uppercase mb-1">
            Ateliers
          </p>
          {[
            { label: "Atelier Initiation", href: "/#ateliers" },
            { label: "Atelier Dégustation", href: "/#ateliers" },
            { label: "Atelier Méthodes Douces", href: "/#ateliers" },
            { label: "Offre Entreprise", href: "/#contact" },
          ].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-sans text-[#F5E6D3]/50 text-sm hover:text-[#C89B3C] transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Suivez-nous */}
        <div className="flex flex-col gap-4">
          <p className="font-sans text-[#F5E6D3]/90 text-xs tracking-[0.2em] uppercase mb-1">
            Suivez-nous
          </p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-[#F5E6D3]/50 text-sm hover:text-[#C89B3C] transition-colors duration-200"
          >
            Instagram
          </a>
        </div>

      </div>

      {/* Separator */}
      <div className="max-w-7xl mx-auto border-t border-[#F5E6D3]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-sans text-[#F5E6D3]/30 text-xs">
          © 2026 élé – L&apos;Éléologue. Tous droits réservés.
        </p>
        <div className="flex items-center gap-3 flex-wrap justify-center">
          {[
            { label: "Mentions Légales", href: "/mentions-legales" },
            { label: "Politique de Confidentialité", href: "/confidentialite" },
            { label: "CGV", href: "/cgv" },
            { label: "Contact", href: "/contact" },
          ].map((link, i) => (
            <span key={link.label} className="flex items-center gap-3">
              {i > 0 && <span className="text-[#F5E6D3]/20 text-xs">·</span>}
              <Link
                href={link.href}
                className="font-sans text-[#F5E6D3]/30 text-xs hover:text-[#C89B3C] transition-colors duration-200"
              >
                {link.label}
              </Link>
            </span>
          ))}
        </div>
      </div>

    </footer>
  );
}
