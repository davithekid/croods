'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSignIcon, UsersIcon, ActivityIcon, CalendarIcon } from "lucide-react";
import { getReceitaMetrics } from "@/lib/receitas";
import { useEffect, useState } from "react";

export default function ReceitaCards() {
  const [metrics, setMetrics] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getReceitaMetrics();
      setMetrics([
        {
          id: 1,
          title: "Receita Última Semana",
          value: `R$ ${data.semana.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`,
          icon: ActivityIcon,
          color: "bg-blue-100 text-blue-600",
          description: "Total de receitas geradas pelos serviços concluídos esta semana",
        },
        {
          id: 2,
          title: "Receita Último Mês",
          value: `R$ ${data.mes.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`,
          icon: DollarSignIcon,
          color: "bg-green-100 text-green-600",
          description: "Receita acumulada nos últimos 30 dias",
        },
        {
          id: 3,
          title: "Receita Últimos 6 Meses",
          value: `R$ ${data.seisMeses.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`,
          icon: UsersIcon,
          color: "bg-purple-100 text-purple-600",
          description: "Total de receitas acumuladas nos últimos 6 meses",
        },
        {
          id: 4,
          title: "Receita Ano",
          value: `R$ ${data.ano.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`,
          icon: CalendarIcon,
          color: "bg-yellow-100 text-yellow-600",
          description: "Receita acumulada desde o início do ano",
        },
      ]);
    }

    fetchData();
  }, []);

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
