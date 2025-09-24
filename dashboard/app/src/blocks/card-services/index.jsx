'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScissorsIcon } from "lucide-react";

// Dados de exemplo
const popularServices = [
  { name: "Corte de cabelo", count: 12 },
  { name: "Sobrancelha", count: 8 },
  { name: "Barba", count: 5 },
  { name: "Hidratação Capilar", count: 4 },
];

export default function CardServicosMais() {
  return (
    <Card className="w-full rounded-xl border border-muted-foreground/20 shadow-sm hover:shadow-md transition-shadow duration-200">
      <CardHeader className="flex items-center justify-between pb-2">
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <ScissorsIcon className="w-5 h-5 text-green-600" /> Serviços Mais Realizados
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {popularServices.length > 0 ? (
          popularServices.map((service, idx) => (
            <div
              key={idx}
              className="flex justify-between items-center bg-green-50 dark:bg-green-900/20 p-2 rounded"
            >
              <span className="font-medium">{service.name}</span>
              <span className="text-sm text-muted-foreground">{service.count}x</span>
            </div>
          ))
        ) : (
          <p className="text-sm text-muted-foreground text-center">
            Nenhum serviço realizado ainda
          </p>
        )}
      </CardContent>
    </Card>
  );
}
