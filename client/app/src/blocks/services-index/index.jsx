"use client";

import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Scissors, Sun, Sparkles, Brush, Droplets, Flame, Stars } from "lucide-react";

const ServicosIndex = () => {
    const barbers = [
        {
            name: "Josue",
            services: [
                {
                    title: "Corte Completo",
                    price: "R$ 50,00",
                    icon: <Scissors className="h-6 w-6" />,
                    description: "Corte moderno e bem finalizado.",
                    items: ["Tesoura ou máquina", "Acabamento detalhado"]
                },
                {
                    title: "Barba Completa",
                    price: "R$ 35,00",
                    icon: <Sun className="h-6 w-6" />,
                    description: "Barba alinhada e estilosa.",
                    items: ["Modelagem da barba", "Toalha quente"]
                },
                {
                    title: "Barba Completa",
                    price: "R$ 35,00",
                    icon: <Sun className="h-6 w-6" />,
                    description: "Barba alinhada e estilosa.",
                    items: ["Modelagem da barba", "Toalha quente"]
                },
            ],
        },
        {
            name: "Renan",
            services: [
                {
                    title: "Luzes Masculinas",
                    price: "R$ 120,00",
                    icon: <Sparkles className="h-6 w-6" />,
                    description: "Transforme seu visual com luzes.",
                    items: ["Descoloração", "Matização"]
                },
                {
                    title: "Sobrancelha",
                    price: "R$ 20,00",
                    icon: <Brush className="h-6 w-6" />,
                    description: "Design de sobrancelha discreto.",
                    items: ["Limpeza com pinça", "Correção de falhas"]
                },
            ],
        },
    ];

    return (
        <section className="py-20">
            <div className="container mx-auto max-w-6xl space-y-12">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl font-semibold md:text-4xl">Nossos Serviços</h2>
                    <p className="text-muted-foreground mx-auto max-w-2xl text-lg md:text-xl">
                        Escolha seu barbeiro e descubra os serviços que ele oferece.
                    </p>
                </div>

                <Tabs defaultValue={barbers[0].name}>
                    <TabsList className="justify-center m-auto mb-8">
                        {barbers.map((barber) => (
                            <TabsTrigger key={barber.name} value={barber.name}>
                                {barber.name}
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    {barbers.map((barber) => (
                        <TabsContent key={barber.name} value={barber.name}>
                            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                                {barber.services.map((service, index) => (
                                    <div
                                        key={index}
                                        className="border-border space-y-6 rounded-lg border p-8 transition-shadow hover:shadow-md"
                                    >
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-4">
                                                <div className="bg-muted rounded-full p-3">{service.icon}</div>
                                                <h3 className="text-xl font-semibold">{service.title}</h3>
                                            </div>
                                            <span className="text-primary font-bold">{service.price}</span>
                                        </div>
                                        <p className="text-muted-foreground leading-relaxed">{service.description}</p>
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
                        </TabsContent>
                    ))}
                    <Button className={'m-auto'}>
                        Ver todos os serviços
                    </Button>
                </Tabs>
            </div>
        </section>
    );
};

export { ServicosIndex };
