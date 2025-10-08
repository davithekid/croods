import { Scissors, Star, Tally1 } from "lucide-react";

const cards = [
  {
    title: "Agendamento Rápido",
    description:
      "Escolha o serviço e o barbeiro em poucos cliques, sem complicação. Ganhe tempo e garanta seu horário rapidamente.",
    icon: Tally1,
  },
  {
    title: "Experiência",
    description:
      "Mais do que um serviço, oferecemos um momento de relaxamento e cuidado. Desfrute de um ambiente sofisticado e atendimento personalizado.",
    icon: Scissors,
  },
  {
    title: "Pagamento Flexível",
    description:
      "Oferecemos diversas opções de pagamento para que você tenha conforto e praticidade ao agendar seus serviços.",
    icon: Star,
  },
];

const Feature16 = () => {
  return (
    <section className="py-16 mx-auto container">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-3">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-primary"
              >
                <span className="mb-6 flex size-14 items-center justify-center rounded-full bg-amber-500 m-auto shadow-md">
                  <Icon className="size-7" />
                </span>
                <h3 className="mb-3 text-2xl font-semibold text-center tracking-wide">
                  {card.title}
                </h3>
                <p className="text-center leading-relaxed">{card.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export { Feature16 };
