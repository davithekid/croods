"use client";

import { useState } from "react";
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

export function ScheduleBlock() {
  const [blocks, setBlocks] = useState([]); // lista de dias com horários bloqueados
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");
  const [reason, setReason] = useState("");
  const [editingId, setEditingId] = useState(null);

  const handleSubmit = (e, closeModal) => {
    e.preventDefault();

    if (!selectedTime) return alert("Escolha um horário!");

    const newBlock = {
      id: editingId || blocks.length + 1,
      date: selectedDate,
      time: selectedTime,
      reason,
    };

    if (editingId) {
      setBlocks((prev) =>
        prev.map((b) => (b.id === editingId ? newBlock : b))
      );
      setEditingId(null);
    } else {
      setBlocks((prev) => [...prev, newBlock]);
    }

    setSelectedDate(new Date());
    setSelectedTime("");
    setReason("");

    closeModal();
  };

  const handleEdit = (block, openModal) => {
    setEditingId(block.id);
    setSelectedDate(block.date);
    setSelectedTime(block.time);
    setReason(block.reason);
    openModal();
  };

  const handleDelete = (id) => {
    setBlocks((prev) => prev.filter((b) => b.id !== id));
  };

  return (
    <div className="flex flex-col gap-8 w-full max-w-5xl mx-auto py-8">
      <Card>
        <CardHeader className="flex justify-between items-center">
          <CardTitle>Horários Bloqueados</CardTitle>

          <Dialog>
            <DialogTrigger asChild>
              <Button>Adicionar Bloqueio</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>
                  {editingId ? "Editar Bloqueio" : "Adicionar Bloqueio"}
                </DialogTitle>
              </DialogHeader>

              <form
                className="flex flex-col gap-4"
                onSubmit={(e) =>
                  handleSubmit(e, () => document.activeElement.blur())
                }
              >
                <div className="flex flex-col gap-1">
                  <Label>Data</Label>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <Label htmlFor="time">Horário (HH:MM)</Label>
                  <Input
                    id="time"
                    type="time"
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <Label htmlFor="reason">Motivo (opcional)</Label>
                  <Input
                    id="reason"
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    placeholder="Ex: Reunião, Evento"
                  />
                </div>

                <DialogFooter>
                  <Button type="submit" className="w-full">
                    {editingId ? "Salvar Alterações" : "Adicionar Bloqueio"}
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </CardHeader>

        <CardContent>
          {blocks.length === 0 ? (
            <p>Nenhum horário bloqueado.</p>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Data</TableHead>
                  <TableHead>Horário</TableHead>
                  <TableHead>Motivo</TableHead>
                  <TableHead>Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {blocks.map((block) => (
                  <TableRow key={block.id}>
                    <TableCell>
                      {block.date.toLocaleDateString("pt-BR")}
                    </TableCell>
                    <TableCell>{block.time}</TableCell>
                    <TableCell>{block.reason || "-"}</TableCell>
                    <TableCell className="flex gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button size="sm" variant="outline">
                            Editar
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[500px]">
                          <DialogHeader>
                            <DialogTitle>Editar Bloqueio</DialogTitle>
                          </DialogHeader>
                          <form
                            className="flex flex-col gap-4"
                            onSubmit={(e) =>
                              handleSubmit(e, () =>
                                document.activeElement.blur()
                              )
                            }
                          >
                            <div className="flex flex-col gap-1">
                              <Label>Data</Label>
                              <Calendar
                                mode="single"
                                selected={selectedDate}
                                onSelect={setSelectedDate}
                              />
                            </div>
                            <div className="flex flex-col gap-1">
                              <Label htmlFor="time">Horário (HH:MM)</Label>
                              <Input
                                id="time"
                                type="time"
                                value={selectedTime}
                                onChange={(e) => setSelectedTime(e.target.value)}
                              />
                            </div>
                            <div className="flex flex-col gap-1">
                              <Label htmlFor="reason">Motivo (opcional)</Label>
                              <Input
                                id="reason"
                                value={reason}
                                onChange={(e) => setReason(e.target.value)}
                              />
                            </div>
                            <DialogFooter>
                              <Button type="submit" className="w-full">
                                Salvar Alterações
                              </Button>
                            </DialogFooter>
                          </form>
                        </DialogContent>
                      </Dialog>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => handleDelete(block.id)}
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
