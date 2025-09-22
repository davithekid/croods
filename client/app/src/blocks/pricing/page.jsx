"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { CircleCheck, CircleHelp } from "lucide-react";
import { useState } from "react";

const tooltipContent = {
  styles: "Choose from a variety of styles to suit your preferences.",
  filters: "Choose from a variety of filters to enhance your portraits.",
  credits: "Use these credits to retouch your portraits.",
};

const YEARLY_DISCOUNT = 20;
const plans = [
  {
    name: "Básico",
    price: 40,
    description:
      "Corte de cabelo simples, rápido e estiloso, perfeito para o dia a dia.",
    features: [
      { title: "Corte de cabelo personalizado" },
      { title: "Uso de máquina ou tesoura" },
      { title: "Degradê ou corte social" },
      { title: "Atendimento rápido" },
    ],
    buttonText: "Agendar Corte",
  },
  {
    name: "Premium",
    price: 70,
    isRecommended: true,
    description:
      "Pacote completo com corte de cabelo e barba, garantindo um visual alinhado.",
    features: [
      { title: "Corte de cabelo completo" },
      { title: "Barba aparada e modelada" },
      { title: "Finalização profissional" },
      { title: "Hidratação leve opcional" },
    ],
    buttonText: "Agendar Corte + Barba",
    isPopular: true,
  },
  {
    name: "Super Premium",
    price: 85,
    description:
      "Cabelo, barba e sobrancelha perfeitos para quem quer sair impecável da barbearia.",
    features: [
      { title: "Corte de cabelo + Barba" },
      { title: "Sobrancelha definida" },
      { title: "Hidratação capilar" },
      { title: "Toalha quente e experiência premium" },
    ],
    buttonText: "Agendar Pacote Completo",
  },
];


const Pricing03 = () => {
  const [selectedBillingPeriod, setSelectedBillingPeriod] = useState("monthly");

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center py-12 px-6">
      <h1
        className="text-5xl sm:text-6xl font-semibold text-center tracking-tighter">
        Planos
      </h1>
      <Tabs
        value={selectedBillingPeriod}
        onValueChange={setSelectedBillingPeriod}
        className="mt-8">
        <TabsList className="h-11 rounded-full">
          <TabsTrigger
            value="monthly"
            className="rounded-full data-[state=active]:shadow-none px-4">
            Mensal
          </TabsTrigger>
          <TabsTrigger
            value="yearly"
            className="rounded-full data-[state=active]:shadow-none px-4">
            Anual (Save {YEARLY_DISCOUNT}%)
          </TabsTrigger>
        </TabsList>
      </Tabs>
      <div
        className="mt-12 max-w-(--breakpoint-lg) mx-auto grid grid-cols-1 lg:grid-cols-3 items-center gap-8">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={cn("relative border rounded-xl p-6", {
              "border-2 border-primary py-10": plan.isPopular,
            })}>
            {plan.isPopular && (
              <Badge className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2">
                Most Popular
              </Badge>
            )}
            <h3 className="text-lg font-medium">{plan.name}</h3>
            <p className="mt-2 text-4xl font-bold">
              $
              {selectedBillingPeriod === "monthly"
                ? plan.price
                : plan.price * ((100 - YEARLY_DISCOUNT) / 100)}
              <span className="ml-1.5 text-sm text-muted-foreground font-normal">
                /month
              </span>
            </p>
            <p className="mt-4 font-medium text-muted-foreground">
              {plan.description}
            </p>

            <Button
              variant={plan.isPopular ? "default" : "outline"}
              size="lg"
              className="w-full mt-6">
              {plan.buttonText}
            </Button>
            <Separator className="my-8" />
            <ul className="space-y-2">
              {plan.features.map((feature) => (
                <li key={feature.title} className="flex items-start gap-1.5">
                  <CircleCheck className="h-4 w-4 mt-1 text-green-600" />
                  {feature.title}
                  {feature.tooltip && (
                    <Tooltip>
                      <TooltipTrigger className="cursor-help">
                        <CircleHelp className="h-4 w-4 mt-1 text-gray-500" />
                      </TooltipTrigger>
                      <TooltipContent>{feature.tooltip}</TooltipContent>
                    </Tooltip>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing03;
