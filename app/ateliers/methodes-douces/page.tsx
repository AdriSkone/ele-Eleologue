import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const programme = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="4" width="20" height="20" rx="3" stroke="#C89B3C" strokeWidth="1.6" />
        <path d="M9 10h10M9 14h10M9 18h6" stroke="#C89B3C" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    title: "Introduction",
    description: "Présentation des origines et des profils de café africain pour l'atelier.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M7 20c0-5 3-9 7-9s7 4 7 9" stroke="#C89B3C" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="14" cy="8" r="3" stroke="#C89B3C" strokeWidth="1.6" />
        <path d="M14 11v2" stroke="#C89B3C" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    title: "Démonstration",
    description: "Notre expert vous montre chaque méthode : V60, Chemex, Aeropress.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M6 22l4-4 4 4 4-4 4 4" stroke="#C89B3C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 6v10" stroke="#C89B3C" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="14" cy="6" r="2" stroke="#C89B3C" strokeWidth="1.6" />
      </svg>
    ),
    title: "Pratique",
    description: "C'est à votre tour ! Préparez votre café avec chaque méthode.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M8 20c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="#C89B3C" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="14" cy="10" r="4" stroke="#C89B3C" strokeWidth="1.6" />
        <path d="M10 22h8" stroke="#C89B3C" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    title: "Dégustation",
    description: "Comparez les résultats, identifiez vos préférences et révisez vos notes.",
  },
];

const infos = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="#C89B3C" strokeWidth="1.6" />
        <path d="M14 8v6l4 2" stroke="#C89B3C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: "Durée",
    value: "2 heures",
    sub: "De 9h à 11h, pause incluse",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="#C89B3C" strokeWidth="1.6" />
        <path d="M14 9v1m0 8v1m-4-5h1m6 0h1" stroke="#C89B3C" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M11 13a3 3 0 106 0" stroke="#C89B3C" strokeWidth="1.6" />
      </svg>
    ),
    label: "Tarif",
    value: "60€",
    sub: "Par personne, matériel fourni",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4l2.5 5 5.5.8-4 3.9.95 5.5L14 16.5l-4.95 2.7.95-5.5L6 9.8l5.5-.8L14 4z" stroke="#C89B3C" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    ),
    label: "Niveau",
    value: "Débutant",
    sub: "Aucun prérequis nécessaire",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="10" cy="10" r="4" stroke="#C89B3C" strokeWidth="1.6" />
        <circle cx="18" cy="10" r="4" stroke="#C89B3C" strokeWidth="1.6" />
        <path d="M4 22c0-3.314 2.686-5 6-5h8c3.314 0 6 1.686 6 5" stroke="#C89B3C" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    label: "Groupe",
    value: "6 max.",
    sub: "Atelier intime et personnalisé",
  },
];

const slots = [
  { day: "15", month: "MAR", title: "Samedi 15 Mars 2025", time: "Matin 10h00", spots: "8 places restantes", available: true },
  { day: "22", month: "MAR", title: "Samedi 22 Mars 2025", time: "Matin 10h00", spots: "3 places restantes", available: true },
  { day: "05", month: "AVR", title: "Samedi 5 Avril 2025", time: "Matin 10h00", spots: "6 places restantes", available: true },
  { day: "19", month: "AVR", title: "Samedi 19 Avril 2025", time: "Matin 10h00", spots: "Complet", available: false },
];

export default function MethodesDoucesPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/atelier-methodes-douces.webp" alt="" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-[#0a0605]/65" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-8 w-full">
          <p className="font-sans text-[#F5E6D3]/50 text-xs mb-4">
            caféologie &rsaquo; Ateliers &rsaquo; Méthodes Douces
          </p>
          <span className="inline-block font-sans text-[#C89B3C] text-xs tracking-[0.2em] uppercase border border-[#C89B3C]/40 px-3 py-1 rounded-full mb-5">
            Atelier Découverte
          </span>
          <h1 className="font-serif text-[#F5E6D3] font-medium leading-tight" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
            Découverte des Méthodes<br />Douces
          </h1>
          <p className="font-sans text-[#F5E6D3]/65 text-base mt-4 max-w-lg">
            Explorez les méthodes d'extraction douce : V60, Chemex et Aeropress.
          </p>
        </div>
      </section>

      {/* L'Atelier */}
      <section className="bg-[#F6F1EB] py-20 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="font-sans text-[#C89B3C] text-xs tracking-[0.25em] uppercase mb-4">L&apos;Atelier</p>
            <h2 className="font-serif text-[#4B2E2B] text-3xl md:text-4xl font-medium mb-6">
              Découverte des méthodes douces
            </h2>
            <p className="font-sans text-[#4B2E2B]/70 text-base leading-relaxed mb-4">
              Préparez un café en variant différentes méthodes d'extraction pour apprendre, comparer et partager les résultats. V60, Chemex, Aeropress, Piston... Apprenez à découvrir le spectre aromatique du café et à l'adapter à votre palais.
            </p>
            <p className="font-sans text-[#4B2E2B]/70 text-base leading-relaxed">
              Deux heures pour vous permettre de devenir un amateur éclairé et analyser les différents cafés avec vous déguster, identifier et comprendre les caractéristiques spécifiques aux profils de saveurs. Élaborez vos sens et exprimez l'art du boire du café.
            </p>
          </div>
          <div className="relative h-72 md:h-[420px] rounded-xl overflow-hidden">
            <Image src="/chemex-home.webp" alt="Atelier méthodes douces" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Programme */}
      <section className="bg-white py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="font-sans text-[#C89B3C] text-xs tracking-[0.25em] uppercase mb-4">Le Programme</p>
            <h2 className="font-serif text-[#4B2E2B] text-3xl md:text-4xl font-medium">Ce Qui Vous Attend</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {programme.map((item) => (
              <div key={item.title} className="bg-[#F6F1EB] rounded-xl p-6 flex flex-col gap-4">
                <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center shadow-sm">
                  {item.icon}
                </div>
                <h3 className="font-serif text-[#4B2E2B] text-lg font-medium">{item.title}</h3>
                <p className="font-sans text-[#4B2E2B]/60 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infos pratiques */}
      <section className="bg-[#F6F1EB] py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="font-sans text-[#C89B3C] text-xs tracking-[0.25em] uppercase mb-4">Informations Pratiques</p>
            <h2 className="font-serif text-[#4B2E2B] text-3xl md:text-4xl font-medium">Tout Ce Qu&apos;il Faut Savoir</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {infos.map((info) => (
              <div key={info.label} className="bg-white rounded-xl p-6 flex flex-col items-center text-center gap-3 shadow-sm">
                {info.icon}
                <p className="font-serif text-[#4B2E2B] text-2xl font-medium">{info.value}</p>
                <p className="font-sans text-[#4B2E2B] text-sm font-semibold">{info.label}</p>
                <p className="font-sans text-[#4B2E2B]/50 text-xs leading-relaxed">{info.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Réservation */}
      <section className="bg-white py-20 px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-4">
            <p className="font-sans text-[#C89B3C] text-xs tracking-[0.25em] uppercase mb-4">Réservation</p>
            <h2 className="font-serif text-[#4B2E2B] text-3xl md:text-4xl font-medium mb-3">Choisissez Votre Date</h2>
            <p className="font-sans text-[#4B2E2B]/50 text-sm">
              Sélectionnez un créneau disponible pour participer à cet atelier.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-3">
            {slots.map((slot) => (
              <div
                key={slot.title}
                className={`flex items-center gap-4 border rounded-xl px-5 py-4 ${
                  slot.available ? "border-[#E2D9CE] bg-white" : "border-[#E2D9CE] bg-[#F6F1EB] opacity-60"
                }`}
              >
                {/* Date badge */}
                <div className={`flex flex-col items-center justify-center w-12 h-12 rounded-lg flex-shrink-0 ${
                  slot.available ? "bg-[#C89B3C]" : "bg-[#4B2E2B]/20"
                }`}>
                  <span className="font-sans text-white text-base font-bold leading-none">{slot.day}</span>
                  <span className="font-sans text-white text-[10px] uppercase tracking-wide">{slot.month}</span>
                </div>

                {/* Info */}
                <div className="flex-1">
                  <p className="font-sans text-[#4B2E2B] text-sm font-semibold">{slot.title}</p>
                  <p className="font-sans text-[#4B2E2B]/50 text-xs mt-0.5">{slot.time} · {slot.spots}</p>
                </div>

                {/* Button */}
                {slot.available ? (
                  <Link
                    href="/contact"
                    className="flex-shrink-0 bg-[#4B2E2B] text-[#F5E6D3] px-5 py-2 rounded-lg font-sans text-xs font-semibold hover:bg-[#C89B3C] transition-colors duration-300"
                  >
                    Réserver
                  </Link>
                ) : (
                  <span className="flex-shrink-0 border border-[#4B2E2B]/20 text-[#4B2E2B]/30 px-5 py-2 rounded-lg font-sans text-xs">
                    Complet
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-10 text-center">
            <p className="font-sans text-[#4B2E2B]/50 text-sm mb-4">
              Aucune date ne vous convient ? Contactez-nous pour organiser un atelier privé.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 font-sans text-sm text-[#4B2E2B] border border-[#4B2E2B]/20 px-6 py-3 rounded-lg hover:border-[#C89B3C] hover:text-[#C89B3C] transition-colors duration-300"
            >
              Nous contacter →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
