"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function CardDadosAgendamento({ service, barber, date, time }) {
  // Leitura simples e direta das props
  const serviceName = service?.name || 'Não Selecionado';
  const barberName = barber?.name || 'Não Selecionado';
  const selectedDate = date?.data || 'Não Selecionada'; 
  const selectedTime = time?.hour || 'Não Selecionado'; 

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
          <span className="font-semibold">{serviceName}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium text-muted-foreground">Barbeiro:</span>
          <span className="font-semibold">{barberName}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium text-muted-foreground">Data:</span>
          <span className="font-semibold">{selectedDate}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium text-muted-foreground">Horário:</span>
          <span className="font-semibold">{selectedTime}</span>
        </div>
      </CardContent>
    </Card>
  );
}