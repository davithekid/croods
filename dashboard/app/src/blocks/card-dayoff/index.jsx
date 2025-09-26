"use client";

import { useState } from "react";
import { PlusCircle, Edit2, Trash2 } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Calendar } from "@/components/ui/calendar";

export default function CardFolgas() {
  const [folgas, setFolgas] = useState([
    { id: 1, date: new Date(), reason: "Consulta médica" },
    { id: 2, date: new Date(Date.now() + 86400000), reason: "Dia de descanso" },
  ]);
  const [editingId, setEditingId] = useState(null);
  const [date, setDate] = useState(null);
  const [reason, setReason] = useState("");

  const handleSubmit = (closeModal) => {
    if (!date || !reason.trim()) return;

    const folgaData = { id: editingId || Date.now(), date, reason };

    if (editingId) {
      setFolgas(prev => prev.map(f => (f.id === editingId ? folgaData : f)));
      setEditingId(null);
    } else {
      setFolgas(prev => [...prev, folgaData]);
    }

    setDate(null);
    setReason("");
    closeModal();
  };

  const handleEdit = (folga, openModal) => {
    setEditingId(folga.id);
    setDate(folga.date);
    setReason(folga.reason);
    openModal();
  };

  const handleDelete = (id) => {
    setFolgas(prev => prev.filter(f => f.id !== id));
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-8 flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Gerenciar Folgas</h2>

        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              <PlusCircle className="w-5 h-5" />
              Adicionar Folga
            </Button>
          </DialogTrigger>

          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>{editingId ? "Editar Folga" : "Adicionar Folga"}</DialogTitle>
            </DialogHeader>

            <div className="flex flex-col gap-4 mt-2">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                locale={ptBR}
              />
              <Input
                placeholder="Motivo da folga"
                value={reason}
                onChange={e => setReason(e.target.value)}
              />
            </div>

            <DialogFooter>
              <Button
                className="w-full mt-2"
                onClick={() => handleSubmit(() => document.activeElement.blur())}
              >
                {editingId ? "Salvar Alterações" : "Adicionar Folga"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Tabela de folgas */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Data</TableHead>
            <TableHead>Motivo</TableHead>
            <TableHead>Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {folgas.map(folga => (
            <TableRow key={folga.id}>
              <TableCell>{format(folga.date, "dd/MM/yyyy", { locale: ptBR })}</TableCell>
              <TableCell>{folga.reason}</TableCell>
              <TableCell className="flex gap-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="sm" variant="outline">
                      <Edit2 className="w-4 h-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Editar Folga</DialogTitle>
                    </DialogHeader>
                    <div className="flex flex-col gap-4 mt-2">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        locale={ptBR}
                      />
                      <Input
                        placeholder="Motivo da folga"
                        value={reason}
                        onChange={e => setReason(e.target.value)}
                      />
                    </div>
                    <DialogFooter>
                      <Button
                        className="w-full mt-2"
                        onClick={() => handleSubmit(() => document.activeElement.blur())}
                      >
                        Salvar Alterações
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>

                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => handleDelete(folga.id)}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
