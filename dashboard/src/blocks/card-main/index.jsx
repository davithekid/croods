import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  
  import {
    DollarSignIcon,
    UsersIcon,
    TrendingUpIcon,
    ActivityIcon,
  } from "lucide-react";
  
  export default function CardStats() {
    const metrics = [
      {
        id: 1,
        title: "Agendamentos Hoje",
        value: 12,
        icon: ActivityIcon,
        description: "Cortes agendados para hoje",
      },
      {
        id: 2,
        title: "Lucro do Mês",
        value: "R$ 8.450,00",
        icon: DollarSignIcon,
        description: "Lucro acumulado neste mês",
      },
      {
        id: 3,
        title: "Receita Total",
        value: "R$ 25.300,00",
        icon: TrendingUpIcon,
        description: "Receita total gerada até agora",
      },
      {
        id: 4,
        title: "Clientes Ativos",
        value: 58,
        icon: UsersIcon,
        description: "Clientes que utilizaram nossos serviços este mês",
      },
    ];
  
    return (
      <div className="w-full p-6 flex justify-center">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 w-full max-w-6xl">
          {metrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <Card key={metric.id}>
                <CardHeader className="flex items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
                  <Icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{metric.value}</div>
                  <p className="text-xs text-muted-foreground">{metric.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    );
  }
  