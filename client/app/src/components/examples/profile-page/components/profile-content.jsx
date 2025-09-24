import { CalendarDays, History, Clock, CheckCircle2 } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function ProfileContent() {
  return (
    <Tabs defaultValue="upcoming" className="space-y-6">
      <TabsList className="grid w-full grid-cols-2 md:grid-cols-2">
        <TabsTrigger value="upcoming">Próximos Agendamentos</TabsTrigger>
        <TabsTrigger value="history">Histórico</TabsTrigger>
      </TabsList>

      <TabsContent value="upcoming" className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Próximos Agendamentos</CardTitle>
            <CardDescription>Acompanhe seus horários confirmados</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { id: 1, servico: "Corte de cabelo", data: "25/09/2025", hora: "15:00", status: "Confirmado" },
              { id: 2, servico: "Barba", data: "30/09/2025", hora: "10:30", status: "Pendente" },
            ].map((ag) => (
              <div key={ag.id} className="flex items-center justify-between rounded-lg border p-4">
                <div>
                  <p className="font-medium">{ag.servico}</p>
                  <p className="text-sm text-muted-foreground flex items-center gap-1">
                    <CalendarDays className="h-4 w-4" /> {ag.data} às {ag.hora}
                  </p>
                </div>
                <Badge
                  variant={ag.status === "Confirmado" ? "default" : "outline"}
                  className={ag.status === "Confirmado" ? "bg-green-500 text-white" : ""}
                >
                  {ag.status}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="history" className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Histórico</CardTitle>
            <CardDescription>Veja os serviços que você já realizou</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { id: 1, servico: "Corte + Barba", data: "10/09/2025", hora: "14:00", status: "Concluído" },
              { id: 2, servico: "Corte de cabelo", data: "02/09/2025", hora: "09:00", status: "Concluído" },
            ].map((hist) => (
              <div key={hist.id} className="flex items-center justify-between rounded-lg border p-4">
                <div>
                  <p className="font-medium">{hist.servico}</p>
                  <p className="text-sm text-muted-foreground flex items-center gap-1">
                    <Clock className="h-4 w-4" /> {hist.data} às {hist.hora}
                  </p>
                </div>
                <Badge className="bg-blue-500 text-white flex items-center gap-1">
                  <CheckCircle2 className="h-4 w-4" /> {hist.status}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </TabsContent>

    </Tabs>
  );
}
