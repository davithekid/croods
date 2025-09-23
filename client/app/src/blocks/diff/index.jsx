"use client";

import { PhoneCall, Calendar, Star, CreditCard } from "lucide-react";

const Services4 = () => {

    const services = [
        {
            icon: <PhoneCall className="h-6 w-6" />,
            title: "Atendimento Fácil",
            description:
                "Entre em contato de forma rápida pelo WhatsApp, telefone ou redes sociais.",
            items: ["WhatsApp Direto", "Redes Sociais", "Atendimento Online"],
        },
        {
            icon: <Calendar className="h-6 w-6" />,
            title: "Agendamento Rápido",
            description:
                "Marque seu horário em poucos cliques, sem complicação.",
            items: ["Reserva Online", "Confirmação Instantânea", "Gestão de Horários"],
        },
        {
            icon: <Star className="h-6 w-6" />,
            title: "Experiência Premium",
            description:
                "Mais que um corte, um momento de relaxamento e cuidado pessoal.",
            items: ["Ambiente Confortável", "Bebida de Cortesia", "Atendimento Personalizado"],
        },
    
        {
            icon: <CreditCard className="h-6 w-6" />,
            title: "Pagamentos Flexíveis",
            description:
                "Escolha a forma de pagamento que preferir, sem dor de cabeça.",
            items: ["Pix", "Cartão de Crédito", "Dinheiro"],
        },
    ];

    return (
        <section className="py-5">
            <div className="container">
                <div className="mx-auto max-w-6xl space-y-12">
                    <div className="space-y-4 text-center">
                        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                            Nossos Diferenciais
                        </h2>
                        <p className="text-muted-foreground mx-auto max-w-2xl text-lg tracking-tight md:text-xl">
                            Mais do que cortes e barba, oferecemos uma experiência única, com conforto,
                            praticidade e estilo para o seu dia a dia.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="border-border space-y-6 rounded-lg border p-8 transition-shadow hover:shadow-sm"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="bg-muted rounded-full p-3">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold">{service.title}</h3>
                                </div>
                                <p className="text-muted-foreground leading-relaxed">
                                    {service.description}
                                </p>
                                <div className="space-y-2">
                                    {service.items.map((item, itemIndex) => (
                                        <div key={itemIndex} className="flex items-center gap-2">
                                            <div className="bg-foreground h-1.5 w-1.5 rounded-full" />
                                            <span className="text-sm font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export { Services4 };
