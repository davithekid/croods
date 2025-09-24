"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSignIcon, CalendarIcon, ActivityIcon } from "lucide-react";

export default function CardsIncome() {
  const metrics = [
    {
      id: 1,
      title: "Receita Total",
      value: "R$ 8.450,00",
      icon: DollarSignIcon,
      color: "bg-green-100 text-green-600",
      description: "Este Mês",
    },
    {
      id: 2,
      title: "Receita Este mes",
      value: "R$ 8.450,00",
      icon: DollarSignIcon,
      color: "bg-green-100 text-green-600",
      description: "Este Mês",
    },
    {
      id: 3,
      title: "Crescimento Mensal",
      value: "+12%",
      icon: ActivityIcon,
      color: "bg-blue-100 text-blue-600",
      description: "Comparado ao mês anterior",
    },
  ];

  return (
    <div className="w-full flex justify-center">
      <div className="grid gap-6 w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
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
