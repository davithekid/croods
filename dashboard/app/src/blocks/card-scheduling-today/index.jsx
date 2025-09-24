'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarIcon } from "lucide-react";

// Dados de exemplo
const todaysAppointments = [
  { time: "10:00", client: "João Silva", service: "Corte de cabelo" },
  { time: "11:30", client: "Maria Souza", service: "Barba + Corte" },
  { time: "14:00", client: "Pedro Lima", service: "Hidratação Capilar" },
];

export default function CardAgendamentosHoje() {
  return (
    <Card className="w-full rounded-xl border border-muted-foreground/20 shadow-sm hover:shadow-md transition-shadow duration-200">
      <CardHeader className="flex items-center justify-between pb-2">
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <CalendarIcon className="w-5 h-5 text-blue-600" /> Agendamentos Hoje
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {todaysAppointments.length > 0 ? (
          todaysAppointments.map((appt, idx) => (
            <div
              key={idx}
              className="flex justify-between items-center bg-blue-50 dark:bg-blue-900/20 p-2 rounded"
            >
              <span className="font-medium">{appt.client}</span>
              <span className="text-sm text-muted-foreground">{appt.service}</span>
              <span className="text-xs text-gray-500">{appt.time}</span>
            </div>
          ))
        ) : (
          <p className="text-sm text-muted-foreground text-center">
            Nenhum agendamento para hoje
          </p>
        )}
      </CardContent>
    </Card>
  );
}
