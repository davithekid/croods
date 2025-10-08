"use client";

import { Scissors, Star, Tally1 } from "lucide-react";

const cards = [
  {
    title: "Tradição",
    description:
      "Mais de 8 anos de experiência no mercado, mantendo a qualidade e confiança que nossos clientes merecem.",
    icon: Tally1,
  },
  {
    title: "Serviços",
    description:
      "Oferecemos uma ampla variedade de serviços de barbearia, do clássico ao moderno, sempre com atenção aos detalhes.",
    icon: Scissors,
  },
  {
    title: "Experiência",
    description:
      "Mais do que cortes, proporcionamos momentos de relaxamento e cuidado. Atendimento personalizado em um ambiente sofisticado.",
    icon: Star,
  },
];

const FeatureAbout = () => {
  return (
    <section className="py-16 mx-auto container">
      <h2 className="text-3xl font-semibold md:text-4xl font-serif text-center mb-4">
        Nossos Valores
      </h2>
      <p className="text-muted-foreground mx-auto max-w-2xl text-lg md:text-xl text-center mb-12">
        Muito mais que cortes de cabelo, oferecemos uma experiência completa e memorável.
      </p>
      <div className="grid gap-8 lg:grid-cols-3 px-4">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.title}
              className="rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center"
            >
              <span className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-amber-500 shadow-md">
                <Icon className="w-7 h-7 text-white" />
              </span>
              <h3 className="mb-3 text-2xl font-semibold tracking-wide">{card.title}</h3>
              <p className="leading-relaxed">{card.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export { FeatureAbout };
