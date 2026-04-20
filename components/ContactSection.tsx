"use client";

import { useState } from "react";
import Link from "next/link";

type FormData = {
  nom: string;
  email: string;
  atelier: string;
  message: string;
};

const ATELIERS = [
  "Découverte des méthodes douces",
  "Le nez du café et du cupping",
  "Les coulisses de la torréfaction",
  "Animation en entreprise",
  "Petit-déjeuner professionnel",
  "Autre demande",
];

const inputClass =
  "w-full border border-[#E2D9CE] rounded-lg px-4 py-3 font-sans text-sm text-[#4B2E2B] placeholder:text-[#4B2E2B]/35 focus:outline-none focus:border-[#C89B3C] transition-colors duration-200 bg-white";

const labelClass = "block font-sans text-sm text-[#4B2E2B] mb-2";

function Stepper({ step }: { step: number }) {
  return (
    <div className="flex items-center mb-8">
      {[1, 2, 3].map((s, i) => (
        <div key={s} className="flex items-center flex-1 last:flex-none">
          <div
            className={`w-3 h-3 rounded-full flex-shrink-0 transition-colors duration-300 ${
              step >= s ? "bg-[#C89B3C]" : "bg-[#E2D9CE]"
            }`}
          />
          {i < 2 && (
            <div
              className={`flex-1 h-px transition-colors duration-300 ${
                step > s ? "bg-[#C89B3C]" : "bg-[#E2D9CE]"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default function ContactSection() {
  const [step, setStep] = useState(1);
  const [sent, setSent] = useState(false);
  const [data, setData] = useState<FormData>({
    nom: "",
    email: "",
    atelier: "",
    message: "",
  });

  const set = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setData((d) => ({ ...d, [field]: e.target.value }));

  const handleSend = () => setSent(true);

  return (
    <section id="contact" className="bg-[#F6F1EB] py-24 px-6">
      <div className="max-w-2xl mx-auto">

        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-[#4B2E2B] text-4xl md:text-5xl font-medium mb-3">
            Une question ou une demande spécifique&nbsp;?
          </h2>
          <p className="font-sans text-[#4B2E2B]/50 text-base">
            Nous vous répondons rapidement.
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-md px-8 py-10">

          {sent ? (
            /* ── Success ── */
            <div className="flex flex-col items-center text-center gap-6">
              <div className="w-16 h-16 rounded-full bg-[#C89B3C] flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M6 14l6 6 10-12" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <h3 className="font-serif text-[#4B2E2B] text-4xl font-medium mb-3">
                  Message Envoyé&nbsp;!
                </h3>
                <p className="font-sans text-[#4B2E2B]/60 text-sm leading-relaxed max-w-sm mx-auto">
                  Merci pour votre intérêt. Nous vous répondrons dans les 24 heures avec toutes les informations nécessaires pour votre atelier.
                </p>
              </div>
              <div className="w-full bg-[#F6F1EB] rounded-xl px-6 py-5 flex flex-col items-center gap-2">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <rect x="2" y="5" width="18" height="13" rx="2" stroke="#C89B3C" strokeWidth="1.5" />
                  <path d="M2 8l9 6 9-6" stroke="#C89B3C" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <p className="font-sans text-[#4B2E2B]/60 text-sm">
                  Un email de confirmation a été envoyé à
                </p>
                <p className="font-sans text-[#4B2E2B] text-sm font-semibold">
                  {data.email}
                </p>
              </div>
              <div className="w-full flex flex-col gap-3 mt-2">
                <Link
                  href="/"
                  className="w-full text-center bg-[#C89B3C] text-white py-3 rounded-lg font-sans text-sm font-semibold hover:bg-[#4B2E2B] transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  Retour à l&apos;accueil <span>→</span>
                </Link>
                <Link
                  href="/ateliers"
                  className="w-full text-center border border-[#E2D9CE] text-[#4B2E2B] py-3 rounded-lg font-sans text-sm hover:border-[#C89B3C] transition-colors duration-300"
                >
                  Voir nos ateliers
                </Link>
              </div>
            </div>
          ) : (
            <>
              <Stepper step={step} />

              {/* ── Step 1 ── */}
              {step === 1 && (
                <div className="flex flex-col gap-6">
                  <div>
                    <p className="font-sans text-[#C89B3C] text-xs tracking-[0.2em] uppercase mb-2">
                      Étape 1 sur 3
                    </p>
                    <h3 className="font-serif text-[#4B2E2B] text-4xl font-medium mb-1">
                      Votre Identité
                    </h3>
                    <p className="font-sans text-[#4B2E2B]/50 text-sm">
                      Commençons par faire connaissance.
                    </p>
                  </div>
                  <div>
                    <label className={labelClass}>Nom complet</label>
                    <input
                      type="text"
                      placeholder="Votre nom et prénom"
                      value={data.nom}
                      onChange={set("nom")}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Adresse email</label>
                    <input
                      type="email"
                      placeholder="votre@email.com"
                      value={data.email}
                      onChange={set("email")}
                      className={inputClass}
                    />
                  </div>
                  <div className="flex justify-end mt-2">
                    <button
                      onClick={() => setStep(2)}
                      className="bg-[#C89B3C] text-white px-7 py-3 rounded-lg font-sans text-sm font-semibold hover:bg-[#4B2E2B] transition-colors duration-300 flex items-center gap-2"
                    >
                      Suivant <span>→</span>
                    </button>
                  </div>
                </div>
              )}

              {/* ── Step 2 ── */}
              {step === 2 && (
                <div className="flex flex-col gap-6">
                  <div>
                    <p className="font-sans text-[#C89B3C] text-xs tracking-[0.2em] uppercase mb-2">
                      Étape 2 sur 3
                    </p>
                    <h3 className="font-serif text-[#4B2E2B] text-4xl font-medium mb-1">
                      Votre Demande
                    </h3>
                    <p className="font-sans text-[#4B2E2B]/50 text-sm">
                      Décrivez-nous votre projet ou votre question.
                    </p>
                  </div>
                  <div>
                    <label className={labelClass}>Atelier souhaité</label>
                    <div className="relative">
                      <select
                        value={data.atelier}
                        onChange={set("atelier")}
                        className={`${inputClass} appearance-none pr-10`}
                      >
                        <option value="" disabled>Sélectionner un atelier</option>
                        {ATELIERS.map((a) => (
                          <option key={a} value={a}>{a}</option>
                        ))}
                      </select>
                      <svg className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M3 5l4 4 4-4" stroke="#4B2E2B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <label className={labelClass}>Votre message</label>
                    <textarea
                      rows={5}
                      placeholder="Décrivez votre demande, le nombre de participants, la date souhaitée..."
                      value={data.message}
                      onChange={set("message")}
                      className={`${inputClass} resize-none`}
                    />
                  </div>
                  <div className="flex justify-between mt-2">
                    <button
                      onClick={() => setStep(1)}
                      className="border border-[#E2D9CE] text-[#4B2E2B] px-6 py-3 rounded-lg font-sans text-sm hover:border-[#C89B3C] transition-colors duration-300 flex items-center gap-2"
                    >
                      <span>←</span> Retour
                    </button>
                    <button
                      onClick={() => setStep(3)}
                      className="bg-[#C89B3C] text-white px-7 py-3 rounded-lg font-sans text-sm font-semibold hover:bg-[#4B2E2B] transition-colors duration-300 flex items-center gap-2"
                    >
                      Suivant <span>→</span>
                    </button>
                  </div>
                </div>
              )}

              {/* ── Step 3 ── */}
              {step === 3 && (
                <div className="flex flex-col gap-6">
                  <div>
                    <p className="font-sans text-[#C89B3C] text-xs tracking-[0.2em] uppercase mb-2">
                      Étape 3 sur 3
                    </p>
                    <h3 className="font-serif text-[#4B2E2B] text-4xl font-medium mb-1">
                      Confirmation
                    </h3>
                    <p className="font-sans text-[#4B2E2B]/50 text-sm">
                      Vérifiez vos informations avant d&apos;envoyer.
                    </p>
                  </div>
                  <div className="border border-[#E2D9CE] rounded-xl overflow-hidden">
                    {[
                      { label: "Nom", value: data.nom },
                      { label: "Email", value: data.email },
                      { label: "Atelier", value: data.atelier },
                    ].map((row, i) => (
                      <div
                        key={row.label}
                        className={`flex justify-between items-center px-5 py-4 ${
                          i < 2 ? "border-b border-[#E2D9CE]" : "border-b border-[#E2D9CE]"
                        }`}
                      >
                        <span className="font-sans text-[#4B2E2B]/50 text-sm">{row.label}</span>
                        <span className="font-sans text-[#4B2E2B] text-sm font-medium">{row.value}</span>
                      </div>
                    ))}
                    <div className="px-5 py-4">
                      <p className="font-sans text-[#4B2E2B]/50 text-sm mb-2">Message</p>
                      <p className="font-sans text-[#4B2E2B] text-sm leading-relaxed">{data.message}</p>
                    </div>
                  </div>
                  <div className="flex justify-between mt-2">
                    <button
                      onClick={() => setStep(2)}
                      className="border border-[#E2D9CE] text-[#4B2E2B] px-6 py-3 rounded-lg font-sans text-sm hover:border-[#C89B3C] transition-colors duration-300 flex items-center gap-2"
                    >
                      <span>←</span> Retour
                    </button>
                    <button
                      onClick={handleSend}
                      className="bg-[#C89B3C] text-white px-7 py-3 rounded-lg font-sans text-sm font-semibold hover:bg-[#4B2E2B] transition-colors duration-300 flex items-center gap-2"
                    >
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M1 1l12 6-12 6V8.5l8-1.5-8-1.5V1z" fill="white" />
                      </svg>
                      Envoyer
                    </button>
                  </div>
                  <p className="font-sans text-[#4B2E2B]/40 text-xs text-center">
                    En envoyant ce formulaire, vous acceptez notre politique de confidentialité.
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
