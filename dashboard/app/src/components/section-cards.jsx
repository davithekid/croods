"use client";

import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function SectionCards() {
  const cards = [
    {
      title: "Faturamento Total",
      value: "R$ 12.500,00",
      trend: "+15%",
      trendIcon: IconTrendingUp,
      trendColor: "bg-green-100 text-green-700",
      footerText: "Crescimento este mês",
      footerDesc: "Comparado com os últimos 6 meses",
    },
    {
      title: "Novos Clientes",
      value: 87,
      trend: "+8%",
      trendIcon: IconTrendingUp,
      trendColor: "bg-green-100 text-green-700",
      footerText: "Mais clientes neste período",
      footerDesc: "Captação de clientes ativa",
    },
    {
      title: "Agendamentos Ativos",
      value: 120,
      trend: "+10%",
      trendIcon: IconTrendingUp,
      trendColor: "bg-green-100 text-green-700",
      footerText: "Crescimento de reservas",
      footerDesc: "Mantendo ocupação saudável",
    },
    {
      title: "Taxa de Crescimento",
      value: "12%",
      trend: "+12%",
      trendIcon: IconTrendingUp,
      trendColor: "bg-green-100 text-green-700",
      footerText: "Crescimento consistente",
      footerDesc: "Alcançando metas do salão",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 px-4 lg:grid-cols-2 xl:grid-cols-4">
      {cards.map((card, index) => {
        const TrendIcon = card.trendIcon;
        return (
          <Card
            key={index}
            className="@container/card bg-gradient-to-t from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 hover:scale-[1.02] hover:shadow-2xl transition-all duration-300"
          >
            <CardHeader className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
              <div>
                <CardDescription>{card.title}</CardDescription>
                <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                  {card.value}
                </CardTitle>
              </div>
              <CardAction>
                <Badge
                  variant="outline"
                  className={`flex items-center gap-1 ${card.trendColor}`}
                >
                  <TrendIcon className="w-4 h-4" />
                  {card.trend}
                </Badge>
              </CardAction>
            </CardHeader>
            <CardFooter className="flex-col items-start gap-1.5 text-sm mt-2">
              <div className="line-clamp-1 flex items-center gap-2 font-medium">
                {card.footerText} <TrendIcon className="w-4 h-4" />
              </div>
              <div className="text-muted-foreground">{card.footerDesc}</div>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}
