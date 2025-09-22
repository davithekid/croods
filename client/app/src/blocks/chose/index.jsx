"use client";

import { Scissors, User, Sparkles, Crown } from "lucide-react";

export default function Chose() {
  const services = [
    {
      icon: <Scissors className="h-5 w-5" />,
      title: "Corte de Cabelo",
      description:
        "Corte clássico ou moderno, feito sob medida para o seu estilo.",
      items: ["Máquina", "Tesoura", "Degradê", "Social"],
      price: "R$ 40,00",
    },
    {
      icon: <User className="h-5 w-5" />,
      title: "Corte de Cabelo + Barba",
      description:
        "Um visual completo, com corte de cabelo alinhado e barba bem desenhada.",
      items: ["Corte Personalizado", "Aparar/Modelar Barba", "Finalização Profissional"],
      price: "R$ 70,00",
    },
    {
      icon: <Sparkles className="h-5 w-5" />,
      title: "Cabelo + Barba + Sobrancelha",
      description:
        "Pacote completo para quem quer sair impecável da barbearia.",
      items: ["Corte de Cabelo", "Barba Modelada", "Sobrancelha Definida"],
      price: "R$ 85,00",
    },
    {
      icon: <Crown className="h-5 w-5" />,
      title: "Pacote Premium",
      description:
        "Experiência completa com cuidados extras para cabelo, barba e pele.",
      items: ["Corte + Barba + Sobrancelha", "Hidratação Capilar", "Toalha Quente"],
      price: "R$ 120,00",
    },
  ];

  return (
    <section className="py-5">
      <div className="container">
        <div className="mx-auto max-w-5xl space-y-10">
          <div className="space-y-2 text-center">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Escolha seu serviço
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {services.map((service, index) => (
              <div
                key={index}
                className="border-border space-y-4 rounded-lg border p-5 transition-shadow hover:shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-muted rounded-full p-2">
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-semibold">{service.title}</h3>
                  </div>
                  <span className="text-base font-bold text-primary">
                    {service.price}
                  </span>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-1">
                  {service.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex items-center gap-2 text-sm"
                    >
                      <div className="bg-foreground h-1.5 w-1.5 rounded-full" />
                      <span className="text-xs font-medium">{item}</span>
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
}
