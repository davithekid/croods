"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CircleCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const planos = [
  // Planos Josue
  {
    barber: "Josue",
    name: "Básico",
    price: 40,
    cortes: "1 corte por mês",
    description: "Ideal para quem só quer manter o cabelo na régua todo mês.",
    features: [
      { title: "1 corte de cabelo personalizado" },
      { title: "Máquina ou tesoura" },
      { title: "Degradê ou corte social" },
    ],
  },
  {
    barber: "Josue",
    name: "Premium",
    price: 70,
    cortes: "2 cortes + 1 barba por mês",
    description:
      "Pacote perfeito para quem gosta de manter cabelo e barba sempre alinhados.",
    features: [
      { title: "2 cortes de cabelo no mês" },
      { title: "1 barba aparada e modelada" },
      { title: "Finalização profissional" },
      { title: "Hidratação leve opcional" },
    ],
    isPopular: true,
  },
  {
    barber: "Josue",
    name: "Super Premium",
    price: 120,
    cortes: "4 cortes + barba + sobrancelha por mês",
    description:
      "Plano completo para quem quer estar sempre impecável com benefícios exclusivos.",
    features: [
      { title: "4 cortes de cabelo no mês" },
      { title: "Barba ilimitada no mês" },
      { title: "Sobrancelha definida" },
      { title: "Hidratação capilar" },
      { title: "Toalha quente e experiência premium" },
    ],
  },
  // Planos Renan (apenas 2 para exemplo)
  {
    barber: "Renan",
    name: "Básico",
    price: 50,
    cortes: "1 corte por mês",
    description: "Corte simples, rápido e estiloso.",
    features: [
      { title: "1 corte de cabelo" },
      { title: "Degradê ou social" },
    ],
  },
  {
    barber: "Renan",
    name: "Premium",
    price: 90,
    cortes: "2 cortes + 1 barba por mês",
    description: "Para manter cabelo e barba sempre alinhados.",
    features: [
      { title: "2 cortes de cabelo" },
      { title: "1 barba aparada" },
      { title: "Hidratação leve opcional" },
    ],
    isPopular: true,
  },
];

const barbers = ["Josue", "Renan"];

const Pricing03 = () => {
  const [selectedBarber, setSelectedBarber] = useState(barbers[0]);
  const planosFiltrados = planos.filter((plano) => plano.barber === selectedBarber);
  const planosCompletos = [...planosFiltrados];
  while (planosCompletos.length < 3) planosCompletos.push(null);

  const handleContact = (barber) => {
    const phone = barber === "Josue" ? "5511999999999" : "5511888888888";
    const message = `Olá ${barber}, quero mais informações sobre os planos.`;
    window.open(`https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-6">
      <h1 className="text-5xl sm:text-6xl font-semibold text-center tracking-tighter font-serif">
        Planos
      </h1>

      <Tabs
        value={selectedBarber}
        onValueChange={setSelectedBarber}
        className="mt-8 w-full max-w-lg"
      >
        <TabsList className="h-11 rounded-full m-auto">
          {barbers.map((barber) => (
            <TabsTrigger
              key={barber}
              value={barber}
              className="rounded-full data-[state=active]:shadow-none px-4"
            >
              {barber}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <div className="mt-12 max-w-(--breakpoint-lg) mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 justify-items-center">
        {planosCompletos.map((plano, index) =>
          plano ? (
            <div
              key={plano.name}
              className={cn("relative border rounded-xl p-6 w-full lg:w-80", {
                "border-2 border-primary py-10": plano.isPopular,
              })}
            >
              {plano.isPopular && (
                <Badge className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2">
                  Mais Popular
                </Badge>
              )}

              <h3 className="text-lg font-medium">{plano.name}</h3>
              <p className="text-sm text-muted-foreground">{plano.cortes}</p>

              <p className="mt-2 text-4xl font-bold">
                R$ {plano.price}
                <span className="ml-1.5 text-sm text-muted-foreground font-normal">
                  /mês
                </span>
              </p>

              <p className="mt-4 font-medium text-muted-foreground">
                {plano.description}
              </p>

              <Button
                variant={plano.isPopular ? "default" : "outline"}
                size="lg"
                className="w-full mt-6 cursor-pointer"
                onClick={() => handleContact(selectedBarber)}
              >
                Entre em contato
              </Button>

              <Separator className="my-8" />

              <ul className="space-y-2">
                {plano.features.map((feature) => (
                  <li key={feature.title} className="flex items-start gap-1.5">
                    <CircleCheck className="h-4 w-4 mt-1 text-green-600" />
                    {feature.title}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div key={index} className="w-full lg:w-80"></div>
          )
        )}
      </div>
    </div>
  );
};

export default Pricing03;
