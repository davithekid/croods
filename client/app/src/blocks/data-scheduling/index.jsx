"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function CardDadosAgendamento() {
  return (
    <Card className="w-[380px] bg-secondary/40 shadow-md rounded-2xl border border-muted">
      <CardHeader className="space-y-3 text-center">
        <CardTitle className="text-2xl font-bold">Seus Dados</CardTitle>
        <CardDescription className="text-base font-medium">
          Confira as informações do agendamento
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-2">
        <div className="flex justify-between">
          <span className="font-medium text-muted-foreground">Serviço:</span>
          <span className="font-semibold">Corte de cabelo</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium text-muted-foreground">Barbeiro:</span>
          <span className="font-semibold">Renan Souza</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium text-muted-foreground">Data:</span>
          <span className="font-semibold">22/09</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium text-muted-foreground">Horário:</span>
          <span className="font-semibold">14:00</span>
        </div>
      </CardContent>

    </Card>
  );
}
