"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter,
} from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Edit, Trash2, PlusCircle } from "lucide-react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";

const initialAppointments = [
  {
    id: 1,
    client: "João Silva",
    service: "Corte de cabelo",
    date: "2025-09-25 10:00",
    status: "Confirmado",
    value: "R$ 50,00",
  },
  {
    id: 2,
    client: "Maria Souza",
    service: "Barba + Corte",
    date: "2025-09-25 11:30",
    status: "Agendado",
    value: "R$ 70,00",
  },
  {
    id: 3,
    client: "Pedro Lima",
    service: "Hidratação Capilar",
    date: "2025-09-26 14:00",
    status: "Concluído",
    value: "R$ 40,00",
  },
  {
    id: 4,
    client: "Ana Costa",
    service: "Pacote Premium",
    date: "2025-09-26 16:00",
    status: "Cancelado",
    value: "R$ 120,00",
  },
];

const tabOptions = ["Todos", "Confirmado", "Agendado", "Concluído", "Cancelado"];

const statusColors = {
  Confirmado: "bg-green-500/15 text-green-600 border border-green-500/30",
  Agendado: "bg-blue-500/15 text-blue-600 border border-blue-500/30",
  Concluído: "bg-emerald-500/15 text-emerald-600 border border-emerald-500/30",
  Cancelado: "bg-red-500/15 text-red-600 border border-red-500/30",
};

export default function TableScheduling() {
  const [appointments, setAppointments] = useState(initialAppointments);
  const [activeTab, setActiveTab] = useState("Todos");

  const filteredAppointments =
    activeTab === "Todos"
      ? appointments
      : appointments.filter((a) => a.status === activeTab);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }) + " " + date.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
  };

  const handleDelete = (id) => {
    setAppointments(appointments.filter((a) => a.id !== id));
    toast.success("Agendamento removido com sucesso!");
  };

  const handleEdit = (id) => {
    toast.info(`Editar agendamento #${id}`);
  };

  const handleAdd = () => {
    const newAppointment = {
      id: Date.now(),
      client: "Novo Cliente",
      service: "Novo Serviço",
      date: new Date().toISOString(),
      status: "Agendado",
      value: "R$ 0,00",
    };
    setAppointments([...appointments, newAppointment]);
    toast.success("Novo agendamento adicionado!");
  };

  return (
    <div className="w-full space-y-6">
      <div className="flex justify-between items-center">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full max-w-lg">
          <TabsList className="bg-background p-1 rounded-md flex flex-wrap gap-2">
            {tabOptions.map((tab) => (
              <TabsTrigger
                key={tab}
                value={tab}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-sm font-medium px-3 py-1 rounded-md"
              >
                {tab}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        <Button onClick={handleAdd} className="flex items-center gap-2">
          <PlusCircle className="w-4 h-4" />
          Adicionar
        </Button>
      </div>

      <div className="overflow-x-auto w-full">
        <Table className="min-w-[900px]">
          <TableHeader>
            <TableRow>
              <TableHead>Cliente</TableHead>
              <TableHead>Serviço</TableHead>
              <TableHead>Data/Hora</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Valor</TableHead>
              <TableHead className="text-center">Ações</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {filteredAppointments.map((app) => (
              <TableRow key={app.id} className="hover:bg-muted/10 transition-colors">
                <TableCell>{app.client}</TableCell>
                <TableCell>{app.service}</TableCell>
                <TableCell>{formatDate(app.date)}</TableCell>
                <TableCell>
                  <Badge className={statusColors[app.status]}>
                    {app.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">{app.value}</TableCell>
                <TableCell className="text-center flex justify-center gap-2">
                  <Button size="sm" variant="outline" onClick={() => handleEdit(app.id)}>
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="destructive" onClick={() => handleDelete(app.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>

          <TableFooter>
            <TableRow>
              <TableCell colSpan={5} className="font-bold">
                Total
              </TableCell>
              <TableCell className="text-right font-bold">
                R${" "}
                {filteredAppointments
                  .reduce((acc, curr) => {
                    const val = Number(
                      curr.value.replace("R$ ", "").replace(",", ".")
                    );
                    return acc + val;
                  }, 0)
                  .toFixed(2)}
              </TableCell>
              <TableCell />
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
}
