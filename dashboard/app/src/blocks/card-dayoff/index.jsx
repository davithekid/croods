"use client";

import { useState } from "react";
import { PlusCircle, Edit2, Trash2 } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export default function CardFolgas() {
  const [folgas, setFolgas] = useState([]);
  const [date, setDate] = useState(null);
  const [reason, setReason] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleAddFolga = () => {
    if (!date || !reason.trim()) return;
    const newFolga = { id: Date.now(), date, reason };
    setFolgas([...folgas, newFolga]);
    setDate(null);
    setReason("");
    setShowForm(false);
  };

  const handleDelete = (id) => {
    setFolgas(folgas.filter((f) => f.id !== id));
  };

  const handleEdit = (id) => {
    const folga = folgas.find((f) => f.id === id);
    if (!folga) return;
    setDate(folga.date);
    setReason(folga.reason);
    setShowForm(true);
    handleDelete(id);
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-6">
      <div className="p-6 rounded-2xl shadow-md border">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">Gerenciar Folgas</h2>
          <Button
            variant="outline"
            onClick={() => setShowForm(!showForm)}
            className="flex items-center gap-2"
          >
            <PlusCircle className="w-5 h-5" />
            {showForm ? "Cancelar" : "Adicionar"}
          </Button>
        </div>

        {showForm && (
          <div className="mt-4 flex flex-col sm:flex-row gap-4">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="flex-1 justify-start text-left font-normal"
                >
                  {date ? format(date, "dd/MM/yyyy", { locale: ptBR }) : "Selecione a data"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  locale={ptBR}
                />
              </PopoverContent>
            </Popover>

            <Input
              type="text"
              placeholder="Motivo da folga"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="flex-1"
            />

            <Button onClick={handleAddFolga} className="flex items-center gap-2">
              <PlusCircle className="w-5 h-5" />
              Salvar
            </Button>
          </div>
        )}
      </div>

      <div className="grid gap-4">
        {folgas.map((folga) => (
          <div
            key={folga.id}
            className="p-4 rounded-xl border shadow-sm hover:shadow-md transition flex justify-between items-center"
          >
            <div>
              <p className="font-semibold">
                {format(folga.date, "dd/MM/yyyy", { locale: ptBR })}
              </p>
              <p className="text-sm text-muted-foreground">{folga.reason}</p>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleEdit(folga.id)}
              >
                <Edit2 className="w-4 h-4" />
              </Button>
              <Button
                variant="destructive"
                size="icon"
                onClick={() => handleDelete(folga.id)}
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
