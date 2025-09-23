'use client';
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Edit, Trash2 } from "lucide-react";

const initialAppointments = [
  { id: "AG-001", client: "João Silva", service: "Corte de cabelo", date: "2025-09-25 10:00", status: "Confirmado", value: "R$ 50,00" },
  { id: "AG-002", client: "Maria Souza", service: "Barba + Corte", date: "2025-09-25 11:30", status: "Agendado", value: "R$ 70,00" },
  { id: "AG-003", client: "Pedro Lima", service: "Hidratação Capilar", date: "2025-09-26 14:00", status: "Concluído", value: "R$ 40,00" },
  { id: "AG-004", client: "Ana Costa", service: "Pacote Premium", date: "2025-09-26 16:00", status: "Cancelado", value: "R$ 120,00" },
];

const tabs = [
  { name: "Todos", value: "todos" },
  { name: "Confirmado", value: "confirmado" },
  { name: "Agendado", value: "agendado" },
  { name: "Concluído", value: "concluido" },
  { name: "Cancelado", value: "cancelado" },
];

export default function TableScheduling() {
  const [appointments, setAppointments] = useState(initialAppointments);

  const handleDelete = (id) => {
    setAppointments(appointments.filter(app => app.id !== id));
  };

  const handleChangeStatus = (id, newStatus) => {
    setAppointments(
      appointments.map(app => app.id === id ? { ...app, status: newStatus } : app)
    );
  };

  return (
    <div className="w-full space-y-6">
      <Tabs defaultValue="todos" className="w-full">
        <div className="flex justify-center">
          <TabsList className="bg-background p-1 rounded-md border flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-sm font-medium px-3 py-1 rounded-md"
              >
                {tab.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
      </Tabs>

      <div className="overflow-x-auto w-full">
        <Table className="min-w-[900px]">
          <TableCaption className="text-left">Lista completa dos agendamentos</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Cliente</TableHead>
              <TableHead>Serviço</TableHead>
              <TableHead>Data/Hora</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Valor</TableHead>
              <TableHead className="text-center">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {appointments.map((app) => (
              <TableRow key={app.id} className="hover:bg-muted/20 transition-colors">
                <TableCell className="font-medium">{app.id}</TableCell>
                <TableCell>{app.client}</TableCell>
                <TableCell>{app.service}</TableCell>
                <TableCell>{app.date}</TableCell>
                <TableCell>{app.status}</TableCell>
                <TableCell className="text-right">{app.value}</TableCell>
                <TableCell className="text-center flex justify-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleChangeStatus(app.id, "Confirmado")}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDelete(app.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={5} className="font-bold">Total</TableCell>
              <TableCell className="text-right font-bold">
                R$ {appointments.reduce((acc, curr) => {
                  const val = Number(curr.value.replace("R$ ", "").replace(",", "."));
                  return acc + val;
                }, 0).toFixed(2)}
              </TableCell>
              <TableCell />
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
}
