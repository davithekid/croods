"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CalendarIcon, ClipboardList, Coffee, Trash2 } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function CardFolgas() {
  const [folgas, setFolgas] = useState([
    {
      id: 1,
      tipo: "Folga semanal",
      data: "2025-09-28",
      motivo: "Descanso programado",
      icon: Coffee,
      color: "bg-blue-100 text-blue-600",
    },
    {
      id: 2,
      tipo: "Folga extra",
      data: "2025-10-05",
      motivo: "Compromisso pessoal",
      icon: CalendarIcon,
      color: "bg-green-100 text-green-600",
    },
  ]);

  const [novaFolga, setNovaFolga] = useState({
    tipo: "",
    data: "",
    motivo: "",
  });

  const handleAddFolga = () => {
    if (!novaFolga.tipo || !novaFolga.data || !novaFolga.motivo) return;

    const icons = {
      "Folga semanal": Coffee,
      "Folga extra": CalendarIcon,
      "Atestado": ClipboardList,
    };

    const colors = {
      "Folga semanal": "bg-blue-100 text-blue-600",
      "Folga extra": "bg-green-100 text-green-600",
      "Atestado": "bg-red-100 text-red-600",
    };

    setFolgas([
      ...folgas,
      {
        id: folgas.length + 1,
        ...novaFolga,
        icon: icons[novaFolga.tipo] || Coffee,
        color: colors[novaFolga.tipo] || "bg-gray-100 text-gray-600",
      },
    ]);

    setNovaFolga({ tipo: "", data: "", motivo: "" });
  };

  const handleRemoveFolga = (id) => {
    setFolgas(folgas.filter((f) => f.id !== id));
  };

  return (
    <div className="w-full p-6 flex flex-col items-center gap-8">
      {/* Formulário */}
      <Card className="w-full max-w-3xl border border-muted-foreground/20 shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Cadastrar Nova Folga</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <Label>Tipo de Folga</Label>
              <Select
                value={novaFolga.tipo}
                onValueChange={(val) => setNovaFolga({ ...novaFolga, tipo: val })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Folga semanal">Folga semanal</SelectItem>
                  <SelectItem value="Folga extra">Folga extra</SelectItem>
                  <SelectItem value="Atestado">Atestado</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Data</Label>
              <Input
                type="date"
                value={novaFolga.data}
                onChange={(e) => setNovaFolga({ ...novaFolga, data: e.target.value })}
              />
            </div>
            <div>
              <Label>Motivo</Label>
              <Input
                placeholder="Digite o motivo"
                value={novaFolga.motivo}
                onChange={(e) => setNovaFolga({ ...novaFolga, motivo: e.target.value })}
              />
            </div>
          </div>
          <Button onClick={handleAddFolga} className="w-full mt-2">
            Adicionar Folga
          </Button>
        </CardContent>
      </Card>

      {/* Lista de folgas */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
        {folgas.map((folga) => {
          const Icon = folga.icon;
          return (
            <Card
              key={folga.id}
              className="hover:shadow-lg transition-shadow duration-200 rounded-xl border border-muted-foreground/20 relative"
            >
              <CardHeader className="flex items-center justify-between pb-2">
                <CardTitle className="text-sm font-semibold">{folga.tipo}</CardTitle>
                <div className={`p-2 rounded-full ${folga.color}`}>
                  <Icon className="h-5 w-5" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium">📅 {folga.data}</p>
                <p className="text-xs text-muted-foreground mt-2">{folga.motivo}</p>
                <Button
                  variant="destructive"
                  size="icon"
                  className="absolute top-3 right-3"
                  onClick={() => handleRemoveFolga(folga.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
