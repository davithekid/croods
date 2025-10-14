"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSignIcon, UsersIcon, ActivityIcon, CalendarIcon } from "lucide-react";

export default function ReceitaCards() {
  const metrics = [
    {
      id: 1,
      title: "Receita Última Semana",
      value: "R$ 1.250,00",
      icon: ActivityIcon,
      color: "bg-blue-100 text-blue-600",
      description: "Total de receitas geradas pelos serviços concluídos hoje",
    },
    {
      id: 2,
      title: "Receita Último Mês",
      value: "R$ 8.450,00",
      icon: DollarSignIcon,
      color: "bg-green-100 text-green-600",
      description: "Receita acumulada nos últimos 30 dias",
    },
    {
      id: 3,
      title: "Receita Últimos 6 Meses",
      value: "R$ 45.200,00",
      icon: UsersIcon,
      color: "bg-purple-100 text-purple-600",
      description: "Total de receitas acumuladas nos últimos 6 meses",
    },
    {
      id: 4,
      title: "Receita Ano",
      value: "R$ 92.800,00",
      icon: CalendarIcon,
      color: "bg-yellow-100 text-yellow-600",
      description: "Receita acumulada desde o início do ano",
    },
  ];

  return (
    <div className="w-full flex justify-center">
      <div className="grid gap-6 w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <Card
              key={metric.id}
              className="w-full hover:shadow-lg transition-shadow duration-200 rounded-xl border border-muted-foreground/20"
            >
              <CardHeader className="flex items-center justify-between pb-2">
                <CardTitle className="text-sm font-semibold">{metric.title}</CardTitle>
                <div className={`p-2 rounded-full ${metric.color}`}>
                  <Icon className="h-5 w-5" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mt-2 mb-1">{metric.value}</div>
                <p className="text-xs text-muted-foreground">{metric.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
