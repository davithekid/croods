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

const DESCONTO_ANUAL = 20;

const planos = [
  {
    name: "Básico",
    price: 40,
    cortes: "1 corte por mês",
    description: "Ideal para quem só quer manter o cabelo na régua todo mês.",
    features: [
      { title: "1 corte de cabelo personalizado" },
      { title: "Máquina ou tesoura" },
      { title: "Degradê ou corte social" },
    ],
    buttonText: "Agendar Corte",
  },
  {
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
    buttonText: "Agendar Premium",
    isPopular: true,
  },
  {
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
    buttonText: "Agendar Super Premium",
  },
];

const Pricing03 = () => {
  const [selectedBillingPeriod, setSelectedBillingPeriod] = useState("mensal");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-6">
      <h1 className="text-5xl sm:text-6xl font-semibold text-center tracking-tighter">
        Planos
      </h1>

      <Tabs
        value={selectedBillingPeriod}
        onValueChange={setSelectedBillingPeriod}
        className="mt-8"
      >
        <TabsList className="h-11 rounded-full">
          <TabsTrigger
            value="mensal"
            className="rounded-full data-[state=active]:shadow-none px-4"
          >
            Mensal
          </TabsTrigger>
          <TabsTrigger
            value="anual"
            className="rounded-full data-[state=active]:shadow-none px-4"
          >
            Anual (Economize {DESCONTO_ANUAL}%)
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="mt-12 max-w-(--breakpoint-lg) mx-auto grid grid-cols-1 lg:grid-cols-3 items-center gap-8">
        {planos.map((plano) => (
          <div
            key={plano.name}
            className={cn("relative border rounded-xl p-6", {
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
              R$
              {selectedBillingPeriod === "mensal"
                ? plano.price
                : plano.price * ((100 - DESCONTO_ANUAL) / 100)}
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
              className="w-full mt-6"
            >
              {plano.buttonText}
            </Button>

            <Separator className="my-8" />

            <ul className="space-y-2">
              {plano.features.map((feature) => (
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
