"use client";

import { Badge } from "@/components/ui/badge";
import { Building2, Calendar } from "lucide-react";

const evolution = [
  {
    title: "Fundação",
    period: "2010",
    description:
      "Nossa barbearia foi fundada com o objetivo de oferecer cortes de qualidade e um atendimento diferenciado na região.",
    highlights: ["Primeiros clientes fiéis", "Primeiro barbeiro contratado"],
  },
  {
    title: "Primeira Unidade Comercial",
    period: "2012",
    description:
      "Abrimos nossa primeira loja física em um ponto estratégico da cidade, aumentando nossa presença e visibilidade.",
    highlights: ["Localização central", "Equipe inicial expandida"],
  },
  {
    title: "Expansão e Novos Serviços",
    period: "2015",
    description:
      "Introduzimos novos serviços como barba, sobrancelha e tratamentos capilares, elevando a experiência do cliente.",
    highlights: ["Pacotes completos de cuidados", "Serviços premium"],
  },
  {
    title: "Unidade Atual & Experiência Premium",
    period: "2020",
    description:
      "Mudamos para nossa unidade atual, maior e mais confortável, com atendimento personalizado e ambiente premium.",
    highlights: ["Espaço moderno", "Equipe altamente treinada", "Atendimento personalizado"],
  },
];

export default function Timeline() {
  return (
    <div className="max-w-4xl mx-auto py-12 md:py-12 px-6">
      <div className="relative ml-3">
        {/* Linha do tempo */}
        <div className="absolute left-0 top-4 bottom-0 border-l-2 border-muted-foreground" />

        {evolution.map(({ title, description, period, highlights }, index) => (
          <div key={index} className="relative pl-8 pb-12 last:pb-0">
            {/* Ponto da timeline */}
            <div
              className="absolute h-3 w-3 -translate-x-1/2 left-px top-3 rounded-full border-2 border-primary bg-background ring-8 ring-background"
            />

            {/* Conteúdo */}
            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="shrink-0 h-9 w-9 bg-accent rounded-full flex items-center justify-center">
                  <Building2 className="h-5 w-5 text-muted-foreground" />
                </div>
                <span className="text-base font-medium">{title}</span>
              </div>
              <div>
                <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{period}</span>
                </div>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground">
                {description}
              </p>
              <div className="flex flex-wrap gap-2">
                {highlights.map((item) => (
                  <Badge key={item} variant="secondary" className="rounded-full">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
