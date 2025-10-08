import { Scissors, Star, Tally1 } from "lucide-react";

const cards = [
    {
        title: "Economia",
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
];

const FeaturePricing = () => {
    return (
        <section className="py-16 mx-auto container">
            <h2 className="text-3xl font-semibold md:text-4xl font-serif text-center">Vantagens de nossos planos</h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg md:text-xl text-center">
                Muito mais que economia, oferecemos uma experiência completa.
            </p>
            <div className="container">
                <div className="grid gap-8 lg:grid-cols-2 py-4">
                    {cards.map((card) => {
                        const Icon = card.icon;
                        return (
                            <div
                                key={card.title}
                                className="rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
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

export { FeaturePricing };
