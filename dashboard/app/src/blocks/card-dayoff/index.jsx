"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Calendar } from "@/components/ui/calendar";

export function DayOff() {
  // Estado
  const [dayOffs, setDayOffs] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [reason, setReason] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);

  const barberId = "22340069-b8be-405a-8e7a-d6674c333473";

  const fetchDayOffs = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `http://localhost:3334/timeoff?barber_id=${barberId}`
      );
      const data = await res.json();
      setDayOffs(data);
    } catch (error) {
      console.error("Erro ao carregar folgas:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDayOffs();
  }, []);

  const handleSubmit = async (e, closeModal) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3334/timeoff", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          barber_id: barberId,
          date: selectedDate.toISOString().split("T")[0],
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || "Erro ao cadastrar folga");
        return;
      }

      // Atualiza lista
      fetchDayOffs();
      setSelectedDate(new Date());
      setReason("");
      closeModal();
    } catch (error) {
      console.error("Erro ao cadastrar folga:", error);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Tem certeza que deseja remover esta folga?")) return;

    try {
      const res = await fetch(`http://localhost:3334/timeoff/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || "Erro ao remover folga");
        return;
      }

      fetchDayOffs();
    } catch (error) {
      console.error("Erro ao excluir folga:", error);
    }
  };

  return (
    <div className="flex flex-col gap-8 w-full max-w-5xl mx-auto py-8">
      <Card>
        <CardHeader className="flex justify-between items-center">
          <CardTitle>Folgas Cadastradas</CardTitle>

          <Dialog>
            <DialogTrigger asChild>
              <Button>Adicionar Folga</Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>Adicionar Folga</DialogTitle>
              </DialogHeader>

              <form
                className="flex flex-col gap-4"
                onSubmit={(e) =>
                  handleSubmit(e, () => document.activeElement.blur())
                }
              >
                <div className="flex flex-col gap-1">
                  <Label>Data da Folga</Label>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <Label htmlFor="reason">Motivo (opcional)</Label>
                  <Input
                    id="reason"
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    placeholder="Ex: Descanso, Evento, etc."
                  />
                </div>

                <DialogFooter>
                  <Button type="submit" className="w-full">
                    Adicionar Folga
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </CardHeader>

        <CardContent>
          {loading ? (
            <p>Carregando folgas...</p>
          ) : dayOffs.length === 0 ? (
            <p>Nenhuma folga cadastrada.</p>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Data</TableHead>
                  <TableHead>Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {dayOffs.map((day) => (
                  <TableRow key={day.id}>
                    <TableCell>
                      {new Date(day.date).toLocaleDateString("pt-BR")}
                    </TableCell>
                    <TableCell>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => handleDelete(day.id)}
                      >
                        Remover
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
