"use client";

import { useState } from "react";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const aboutUs = [
    {
        id: 1,
        title: "Tradição & Estilo",
        image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
        description:
            "Nossa barbearia une tradição e modernidade, oferecendo cortes clássicos e estilos atuais para todos os gostos.",
    },
    {
        id: 2,
        title: "Profissionais Experientes",
        image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
        description:
            "Contamos com barbeiros qualificados e apaixonados pelo que fazem, sempre prontos para entregar o melhor resultado.",
    },
    {
        id: 3,
        title: "Ambiente Confortável",
        image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg",
        description:
            "Mais do que uma barbearia, oferecemos um espaço para relaxar, conversar e viver uma experiência diferenciada.",
    },
    {
        id: 4,
        title: "Atendimento Personalizado",
        image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg",
        description:
            "Cada cliente é único. Nosso atendimento é pensado para entender seu estilo e valorizar sua identidade.",
    },
    {
        id: 5,
        title: "Qualidade Garantida",
        image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-5.svg",
        description:
            "Usamos produtos de alta qualidade e técnicas modernas para garantir um resultado impecável em cada visita.",
    },
];


const Feature197 = ({ features = aboutUs }) => {
    const [activeTabId, setActiveTabId] = useState();
    const [activeImage, setActiveImage] = useState();

    return (
        <section className="py-16">
            <div className="container mx-auto">
                <h1
                    className="text-5xl sm:text-6xl font-semibold text-center tracking-tighter">
                    Informações 
                </h1>
                <div className="mb-10 mt-12 flex w-full items-start justify-between gap-12">
                    <div className="w-full md:w-1/2">
                        <Accordion type="single" className="w-full" defaultValue="item-1">
                            {features.map((tab) => (
                                <AccordionItem key={tab.id} value={`item-${tab.id}`}>
                                    <AccordionTrigger
                                        onClick={() => {
                                            setActiveImage(tab.image);
                                            setActiveTabId(tab.id);
                                        }}
                                        className="cursor-pointer py-5 no-underline! transition"
                                    >
                                        <h6
                                            className={`text-xl font-semibold ${tab.id === activeTabId ? "text-foreground" : "text-muted-foreground"}`}
                                        >
                                            {tab.title}
                                        </h6>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <p className="mt-3 text-muted-foreground">
                                            {tab.description}
                                        </p>
                                        <div className="mt-4 md:hidden">
                                            <img
                                                src={tab.image}
                                                alt={tab.title}
                                                className="h-full max-h-80 w-full rounded-md object-cover"
                                            />
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                    <div className="relative m-auto hidden w-1/2 overflow-hidden rounded-xl bg-muted md:block">
                        <img
                            src={activeImage}
                            alt="Feature preview"
                            className="aspect-4/3 rounded-md object-cover pl-4"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export { Feature197 };
