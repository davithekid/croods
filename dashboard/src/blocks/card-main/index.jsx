"use client";

import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";

export default function AdminDashboard() {
    const metrics = [
        {
            id: 1,
            title: "Agendamentos Hoje",
            value: 12,
            description: "Número de cortes agendados para hoje",
        },
        {
            id: 2,
            title: "Lucro do Mês",
            value: "R$ 8.450,00",
            description: "Total de lucro acumulado neste mês",
        },
        {
            id: 3,
            title: "Receita Total",
            value: "R$ 25.300,00",
            description: "Receita total gerada até agora",
        },
        {
            id: 4,
            title: "Clientes Ativos",
            value: 58,
            description: "Clientes que realizaram algum serviço neste mês",
        },
    ];

    return (
        <div className="w-full py-6">
            <h1 className="text-2xl font-bold mb-6 text-center">Painel Administrativo</h1>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {metrics.map((metric) => (
                    <Card key={metric.id} className="p-4 hover:shadow-lg transition-shadow min-w-[250px]">
                        <CardHeader>
                            <CardTitle className="text-lg font-semibold">{metric.title}</CardTitle>
                            <CardDescription className="text-2xl font-bold mt-2">{metric.value}</CardDescription>
                            <CardDescription className="mt-1 text-sm text-muted-foreground">
                                {metric.description}
                            </CardDescription>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </div>
    );
}
