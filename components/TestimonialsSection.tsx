const testimonials = [
  {
    quote:
      "J'ai découvert un monde de saveurs que je ne soupçonnais pas. L'atelier initiation m'a donné toutes les clés pour préparer un vrai bon café chez moi. Une expérience inoubliable.",
    name: "Caroline M.",
    atelier: "Atelier Initiation",
    initials: "C",
  },
  {
    quote:
      "En tant que restaurateur, je cherchais à améliorer ma carte. La session dégustation m'a permis de comprendre les terroirs et de sélectionner les meilleurs crus pour mes clients.",
    name: "Jean-Pierre D.",
    atelier: "Atelier Dégustation",
    initials: "J",
  },
  {
    quote:
      "L'atelier méthodes douces a changé mon rituel matinal. La V60 est devenue ma meilleure amie. L'équipe est passionnée et l'ambiance chaleureuse, on se sent comme à la maison.",
    name: "Émilie R.",
    atelier: "Atelier Méthodes Douces",
    initials: "É",
  },
];

function Stars() {
  return (
    <div className="flex gap-1 mb-6">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path
            d="M9 1.5l2.06 4.17 4.6.67-3.33 3.25.79 4.58L9 11.77l-4.12 2.4.79-4.58L2.34 6.34l4.6-.67L9 1.5z"
            stroke="#C89B3C"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="temoignages" className="bg-[#F6F1EB] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-sans text-[#C89B3C] text-xs tracking-[0.25em] uppercase mb-5">
            Ils en parlent
          </p>
          <h2 className="font-serif text-[#4B2E2B] text-4xl md:text-5xl font-medium">
            Les Avis de Nos Participants
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-xl shadow-md p-8 flex flex-col gap-6"
            >
              <Stars />

              <p className="font-serif italic text-[#4B2E2B] text-base leading-relaxed flex-1">
                &laquo;&nbsp;{t.quote}&nbsp;&raquo;
              </p>

              <div className="flex items-center gap-3 pt-2 border-t border-[#F6F1EB]">
                <div className="w-10 h-10 rounded-full bg-[#4B2E2B] flex items-center justify-center flex-shrink-0">
                  <span className="font-sans text-[#F5E6D3] text-sm font-medium">
                    {t.initials}
                  </span>
                </div>
                <div>
                  <p className="font-sans text-[#4B2E2B] text-sm font-semibold leading-none mb-1">
                    {t.name}
                  </p>
                  <p className="font-sans text-[#4B2E2B]/50 text-xs">
                    {t.atelier}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
