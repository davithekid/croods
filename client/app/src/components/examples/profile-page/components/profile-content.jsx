'use client';
import { useEffect, useState } from "react";
import { CalendarDays, Clock, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

export default function ProfileContent() {
  const [user, setUser] = useState(null);
  const [upcomingAppointments, setUpcomingAppointments] = useState([]);
  const [historyAppointments, setHistoryAppointments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resUser = await fetch("http://localhost:3333/auth/me", {
          credentials: "include",
          cache: "no-store",
        });
        if (!resUser.ok) return;
        const { user } = await resUser.json();
        if (!user) return;

        setUser(user);

        const resAppointments = await fetch(`http://localhost:3333/appointments/user/${user.id}`, {
          credentials: "include",
          cache: "no-store",
        });
        if (!resAppointments.ok) return;
        const data = await resAppointments.json();

        const now = new Date();
        const upcoming = [];
        const history = [];

        const appointmentsArray = Array.isArray(data) ? data : data.appointments || [];

        appointmentsArray.forEach((ag) => {
          const agDate = new Date(ag.scheduled_at);

          let statusLabel = "";
          if (ag.status === "agendado") statusLabel = "Agendado";
          else if (ag.status === "cancelado") statusLabel = "Cancelado";
          else if (ag.status === "concluido") statusLabel = "Concluído";

          const formatted = {
            id: ag.id,
            servico: ag.service?.name || `Serviço #${ag.service_id}`,
            data: agDate.toLocaleDateString("pt-BR"),
            hora: agDate.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }),
            status: statusLabel,
          };

          if (agDate >= now && ag.status !== "cancelado") upcoming.push(formatted);
          else history.push(formatted);
        });

        setUpcomingAppointments(upcoming);
        setHistoryAppointments(history);

      } catch (err) {
        console.error("Erro ao buscar dados do usuário ou agendamentos:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <Tabs defaultValue="upcoming" className="space-y-6">
      <TabsList className="grid w-full grid-cols-2 md:grid-cols-2">
        <TabsTrigger className={'cursor-pointer'} value="upcoming">Próximos Agendamentos</TabsTrigger>
        <TabsTrigger className={'cursor-pointer'} value="history">Histórico</TabsTrigger>
      </TabsList>

      <TabsContent value="upcoming" className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Próximos Agendamentos</CardTitle>
            <CardDescription>Acompanhe seus horários agendados</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingAppointments.length === 0 && (
              <p className="text-muted-foreground">Nenhum agendamento futuro.</p>
            )}
            {upcomingAppointments.map((ag) => (
              <div key={ag.id} className="flex items-center justify-between rounded-lg border p-4">
                <div>
                  <p className="font-medium">{ag.servico}</p>
                  <p className="text-sm text-muted-foreground flex items-center gap-1">
                    <CalendarDays className="h-4 w-4" /> {ag.data} às {ag.hora}
                  </p>
                </div>
                <Badge
                  variant={ag.status === "Agendado" ? "outline" : "default"}
                  className={ag.status === "Agendado" ? "" : "bg-green-500 text-white"}
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
            {historyAppointments.length === 0 && (
              <p className="text-muted-foreground">Nenhum agendamento concluído.</p>
            )}
            {historyAppointments.map((hist) => (
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
