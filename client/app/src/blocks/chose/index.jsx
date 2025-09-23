"use client";

import { Scissors, User, Sparkles, Crown, PlusCircle } from "lucide-react";
import { useState } from "react";

export default function Chose({ onSelect }) {
  const [selectedService, setSelectedService] = useState(null);
  const [extras, setExtras] = useState([]);

  const services = [
    {
      icon: <Scissors className="h-5 w-5" />,
      title: "Corte de Cabelo",
      description: "Corte clássico ou moderno, feito sob medida para o seu estilo.",
      price: 40,
    },
    {
      icon: <User className="h-5 w-5" />,
      title: "Corte + Barba",
      description: "Um visual completo, com corte de cabelo alinhado e barba bem desenhada.",
      price: 70,
    },
    {
      icon: <Sparkles className="h-5 w-5" />,
      title: "Cabelo + Barba + Sobrancelha",
      description: "Pacote completo para quem quer sair impecável da barbearia.",
      price: 85,
    },
    {
      icon: <Crown className="h-5 w-5" />,
      title: "Pacote Premium",
      description: "Experiência completa com cuidados extras para cabelo, barba e pele.",
      price: 120,
    },
  ];

  const extraOptions = [
    { name: "Sobrancelha", price: 15 },
    { name: "Hidratação Capilar", price: 30 },
    { name: "Luzes", price: 120 },
    { name: "Progressiva", price: 150 },
    { name: "Toalha Quente", price: 10 },
  ];

  const toggleExtra = (extra) => {
    setExtras((prev) =>
      prev.includes(extra) ? prev.filter((e) => e !== extra) : [...prev, extra]
    );
  };

  const handleConfirm = () => {
    onSelect({
      service: selectedService,
      extras,
    });
  };

  return (
    <section className="py-5">
      <div className="container mx-auto max-w-5xl space-y-10">
        <div className="space-y-2 text-center">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Escolha seu serviço
          </h2>
          <p className="text-muted-foreground text-sm">
            Primeiro selecione um serviço principal. Depois, adicione extras se quiser.
          </p>
        </div>

        {/* Serviços principais */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => setSelectedService(service)}
              className={`border-border space-y-4 rounded-lg border p-5 transition cursor-pointer hover:shadow-lg hover:border-primary/40 ${
                selectedService?.title === service.title ? "border-primary" : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-muted rounded-full p-2">{service.icon}</div>
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                </div>
                <span className="text-base font-bold text-primary">
                  R$ {service.price},00
                </span>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Extras aparecem só depois que o usuário escolhe um serviço */}
        {selectedService && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <PlusCircle className="h-5 w-5 text-primary" />
              Adicionais
            </h3>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {extraOptions.map((extra, i) => (
                <div
                  key={i}
                  onClick={() => toggleExtra(extra.name)}
                  className={`flex items-center justify-between border rounded-lg p-4 cursor-pointer transition hover:shadow-md ${
                    extras.includes(extra.name) ? "border-primary bg-primary/10" : "border-border"
                  }`}
                >
                  <span className="text-sm font-medium">{extra.name}</span>
                  <span className="text-sm font-bold text-primary">
                    + R$ {extra.price}
                  </span>
                </div>
              ))}
            </div>

            <button
              onClick={handleConfirm}
              className="mt-4 w-full rounded-lg cursor-pointer dark:bg-zinc-900 px-4 py-2 duration-200 font-medium hover:bg-zinc-700/60 transition"
            >
              Confirmar Pedido
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
