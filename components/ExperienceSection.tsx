const features = [
  {
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none" >
        <circle cx="16" cy="14" r="5" stroke="#C89B3C" strokeWidth="1.8" fill="none" />
        <circle cx="28" cy="14" r="5" stroke="#C89B3C" strokeWidth="1.8" fill="none" />
        <path d="M4 36c0-6.627 5.373-10 12-10" stroke="#C89B3C" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        <path d="M28 26c6.627 0 12 3.373 12 10" stroke="#C89B3C" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        <path d="M16 26c3.314 0 6 2.686 6 6s-2.686 6-6 6-6-2.686-6-6 2.686-6 6-6z" stroke="#C89B3C" strokeWidth="1.8" fill="none" />
      </svg>
    ),
    title: "Petits Groupes",
    description: "Maximum 6 participants par session pour un apprentissage personnalisé et convivial",
  },
  {
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none" >
        <circle cx="22" cy="18" r="10" stroke="#C89B3C" strokeWidth="1.8" fill="none" />
        <path d="M15 27l-3 11 10-6 10 6-3-11" stroke="#C89B3C" strokeWidth="1.8" strokeLinejoin="round" fill="none" />
      </svg>
    ),
    title: "Torréfacteur Expert",
    description: "Guidé par notre torréfacteur certifié, passionné et pédagogue",
  },
  {
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none" >
        <path d="M22 8l4 8h8l-6.5 5.5 2.5 8.5L22 25l-8 5 2.5-8.5L10 16h8z" stroke="#C89B3C" strokeWidth="1.8" strokeLinejoin="round" fill="none" />
        <path d="M14 16L22 8l8 8" stroke="#C89B3C" strokeWidth="1.8" strokeLinejoin="round" fill="none" />
        <line x1="14" y1="16" x2="30" y2="16" stroke="#C89B3C" strokeWidth="1.8" />
      </svg>
    ),
    title: "Cafés de Spécialité",
    description: "Travaillez avec des cafés de spécialité fraîchement torréfiés dans notre atelier",
  },
];

export default function ExperienceSection() {
  return (
    <section id="experiences" className="bg-[#F5E6D3] py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Overline */}
        <p className="font-sans text-[#C89B3C] text-xs tracking-[0.25em] uppercase mb-5">
          L&apos;Expérience Caféologie
        </p>

        {/* Title */}
        <h2 className="font-serif text-[#4B2E2B] text-4xl md:text-5xl font-medium mb-20">
          Une Expérience Unique
        </h2>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col items-center gap-5">
              <div className="flex items-center justify-center w-16 h-16">
                {feature.icon}
              </div>
              <h3 className="font-serif text-[#4B2E2B] text-2xl font-medium">
                {feature.title}
              </h3>
              <p className="font-sans text-[#4B2E2B]/70 text-base leading-relaxed max-w-xs">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
