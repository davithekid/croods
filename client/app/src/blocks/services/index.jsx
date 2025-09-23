"use client";

import TabsShadowDemo from "@/components/tabs-11";
import { Scissors, Sparkles, Brush, Droplets, Razor, Sun, Flame, Stars } from "lucide-react";

const Services = () => {
    const services = [
        {
            icon: <Scissors className="h-6 w-6" />,
            title: "Corte Completo",
            description: "Corte moderno e bem finalizado, no estilo que você preferir.",
            items: ["Tesoura ou máquina", "Acabamento detalhado", "Finalização com pomada"],
            price: "R$ 50,00",
        },
        {
            icon: <Sun className="h-6 w-6" />,
            title: "Barba Completa",
            description: "Barba alinhada, com toalha quente e acabamento perfeito.",
            items: ["Modelagem da barba", "Toalha quente", "Hidratação"],
            price: "R$ 35,00",
        },
        {
            icon: <Sparkles className="h-6 w-6" />,
            title: "Luzes Masculinas",
            description: "Transforme seu visual com luzes bem trabalhadas e naturais.",
            items: ["Descoloração", "Matização", "Tratamento pós-química"],
            price: "R$ 120,00",
        },
        {
            icon: <Brush className="h-6 w-6" />,
            title: "Sobrancelha",
            description: "Design de sobrancelha masculino, discreto e natural.",
            items: ["Limpeza com pinça", "Correção de falhas", "Acabamento preciso"],
            price: "R$ 20,00",
        },
        {
            icon: <Droplets className="h-6 w-6" />,
            title: "Hidratação Capilar",
            description: "Tratamento profundo para fios mais fortes e saudáveis.",
            items: ["Máscara nutritiva", "Massagem capilar", "Finalização"],
            price: "R$ 40,00",
        },
        {
            icon: <Sun className="h-6 w-6" />,
            title: "Platinado",
            description: "Platinado completo para um visual ousado e estiloso.",
            items: ["Descoloração total", "Matização", "Tratamento pós-química"],
            price: "R$ 150,00",
        },
        {
            icon: <Flame className="h-6 w-6" />,
            title: "Progressiva",
            description: "Cabelos alinhados e lisos por muito mais tempo.",
            items: ["Aplicação do produto", "Escova", "Prancha para fixação"],
            price: "R$ 100,00",
        },
        {
            icon: <Stars className="h-6 w-6" />,
            title: "Pacote Premium",
            description: "Corte + Barba + Sobrancelha + Hidratação em um só combo.",
            items: ["Corte completo", "Barba modelada", "Sobrancelha", "Hidratação"],
            price: "R$ 120,00",
        },
    ];

    return (
        <section className="py-12">
            <div className="container">
                <div className="mx-auto max-w-6xl space-y-12">
                    <div className="space-y-4 text-center">
                        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                            Nossos Serviços
                        </h2>
                        <p className="text-muted-foreground mx-auto max-w-2xl text-lg tracking-tight md:text-xl">
                            Escolha o serviço que mais combina com você e agende seu horário.
                        </p>
                        <div className="flex justify-center ">

                        <TabsShadowDemo/>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="border-border space-y-6 rounded-lg border p-8 transition-shadow hover:shadow-md"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-muted rounded-full p-3">
                                            {service.icon}
                                        </div>
                                        <h3 className="text-xl font-semibold">{service.title}</h3>
                                    </div>
                                    <span className="text-primary font-bold">{service.price}</span>
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

export { Services };
