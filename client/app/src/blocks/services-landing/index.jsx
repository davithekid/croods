"use client";

import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Scissors, Sun, Sparkles, Brush, Droplets, Flame, Stars } from "lucide-react";
import Link from "next/link";

const ServicosIndex = () => {
    const barbers = [
        {
            name: "Josue",
            services: [
                {
                    title: "Corte Completo",
                    price: "R$ 35,00",
                    icon: <Scissors className="h-6 w-6" />,
                    description: "Corte moderno e bem finalizado.",
                    items: ["Tesoura ou máquina", "Acabamento detalhado"]
                },
                {
                    title: "Barba Completa",
                    price: "R$ 50,00",
                    icon: <Sun className="h-6 w-6" />,
                    description: "Barba alinhada e estilosa.",
                    items: ["Modelagem da barba", "Toalha quente"]
                },
                {
                    title: "Combo Premium",
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
                    title: "Corte",
                    price: "R$40,00",
                    icon: <Sparkles className="h-6 w-6" />,
                    description: "Transforme seu visual com luzes.",
                    items: ["Descoloração", "Matização"]
                },
                {
                    title: "Sobrancelha",
                    price: "R$5,00",
                    icon: <Brush className="h-6 w-6" />,
                    description: "Design de sobrancelha discreto.",
                    items: ["Limpeza com pinça", "Correção de falhas"]
                },
                {
                    title: "Luzes",
                    price: "R$ 80,00",
                    icon: <Brush className="h-6 w-6" />,
                    description: "Design de sobrancelha discreto.",
                    items: ["Limpeza com pinça", "Correção de falhas"]
                },
            ],
        },
    ];

    return (
        <section className="mt-10 py-7">
            <div className="container mx-auto max-w-6xl ">
                <div className="text-center">
                    <h2 className="text-3xl font-semibold md:text-4xl">Nossos Serviços</h2>
                </div>

                <Tabs defaultValue={barbers[0].name}>
                    <TabsList className="justify-center m-auto mt-2 mb-2">
                        {barbers.map((barber) => (
                            <TabsTrigger key={barber.name} value={barber.name} className={'cursor-pointer hover:bg-zinc-200 dark:hover:bg-amber-500 dark:hover:text-zinc-700'}>
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
                                        className="border-primary rounded-lg border p-8  hover:shadow-md hover:scale-102 duration-200" 
                                    >
                                        <div className="flex items-center justify-between">
                                            <div className="flex flex-col m-auto items-center gap-4">
                                                <div className="bg-muted rounded-full p-3">{service.icon}</div>
                                                <h3 className="text-xl font-semibold">{service.title}</h3>
                                                <span className="text-primary font-bold">{service.price}</span>
                                            </div>
                                        </div>
                                        <p className="text-muted-foreground leading-relaxed flex justify-center">{service.description}</p>
                                        <div className="space-y-2">
                                            {service.items.map((item, itemIndex) => (
                                                <div key={itemIndex} className="flex items-center gap-2 justify-center">
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
                    <Button className={'mx-auto mt-5'}>
                        <Link href='/servicos'>
                            Ver todos os serviços
                        </Link>
                    </Button>
                </Tabs>
            </div>
        </section>
    );
};

export { ServicosIndex };
