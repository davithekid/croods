'use client'

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
import { Edit, Trash2 } from "lucide-react";

const initialAppointments = [
  { id: 1, client: "João Silva", service: "Corte de cabelo", barber: "Carlos", date: "2025-09-25 10:00", status: "Confirmado", value: "R$ 50,00" },
  { id: 2, client: "Maria Souza", service: "Barba + Corte", barber: "Lucas", date: "2025-09-25 11:30", status: "Agendado", value: "R$ 70,00" },
  { id: 3, client: "Pedro Lima", service: "Hidratação Capilar", barber: "Carlos", date: "2025-09-26 14:00", status: "Concluído", value: "R$ 40,00" },
  { id: 4, client: "Ana Costa", service: "Pacote Premium", barber: "Lucas", date: "2025-09-26 16:00", status: "Cancelado", value: "R$ 120,00" },
];

const tabOptions = ["Todos", "Confirmado", "Agendado", "Concluído", "Cancelado"];

export default function TableScheduling() {
  const [appointments, setAppointments] = useState(initialAppointments);
  const [activeTab, setActiveTab] = useState("Todos");

  const filteredAppointments =
    activeTab === "Todos"
      ? appointments
      : appointments.filter((a) => a.status === activeTab);

  const handleDelete = (id) => {
    setAppointments(appointments.filter((a) => a.id !== id));
  };

  return (
    <div className="w-full space-y-6">
      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
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

      {/* Table */}
      <div className="overflow-x-auto w-full">
        <Table className="min-w-[900px]">
          <TableHeader>
            <TableRow>
              <TableHead>Cliente</TableHead>
              <TableHead>Serviço</TableHead>
              <TableHead>Barbeiro</TableHead>
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
                <TableCell>{app.barber}</TableCell>
                <TableCell>{app.date}</TableCell>
                <TableCell>{app.status}</TableCell>
                <TableCell className="text-right">{app.value}</TableCell>
                <TableCell className="text-center flex justify-center gap-2">
                  <Button size="sm" variant="outline" onClick={() => alert("Editar")}>
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
              <TableCell colSpan={5} className="font-bold">Total</TableCell>
              <TableCell className="text-right font-bold">
                R$ {filteredAppointments.reduce((acc, curr) => {
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
