import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSignIcon, UsersIcon, TrendingUpIcon, ActivityIcon } from "lucide-react";

export default function CardIncome() {
  const metrics = [
    {
      id: 1,
      title: "Receita Total",
      value: 12,
      icon: ActivityIcon,
      color: "bg-blue-100 text-blue-600",
      description: "Cortes agendados para hoje",
    },
    {
      id: 2,
      title: "Este mes",
      value: "R$ 8.450,00",
      icon: DollarSignIcon,
      color: "bg-green-100 text-green-600",
      description: "Lucro acumulado neste mês",
    },
    {
      id: 3,
      title: "Crescimento Mensal",
      value: "R$ 25.300,00",
      icon: TrendingUpIcon,
      color: "bg-yellow-100 text-yellow-600",
      description: "Receita total gerada até agora",
    },
  ];

  return (
    <div className="w-full p-6 flex justify-center">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 w-full max-w-6xl">
        {metrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <Card
              key={metric.id}
              className="hover:shadow-lg transition-shadow duration-200 rounded-xl border border-muted-foreground/20"
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
