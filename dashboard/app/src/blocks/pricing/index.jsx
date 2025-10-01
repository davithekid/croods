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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";

export function PricingTable() {
  const [services, setServices] = useState([
    { id: 1, name: "Plano Basico", price: "45.00", type: "cortes", extra: null },
    { id: 2, name: "Plano Premium", price: "35.00", type: "barba", extra: "Toalha Quente" },
    { id: 3, name: "Plano Completo", price: "60.00", type: "especiais", extra: "Hidratação" },
  ]);

  const [editingId, setEditingId] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [extra, setExtra] = useState("");

  const mockExtras = [
    { id: 1, name: "Toalha Quente" },
    { id: 2, name: "Máscara Capilar" },
    { id: 3, name: "Hidratação" },
  ];

  const handleSubmit = (e, closeModal) => {
    e.preventDefault();
    const serviceData = {
      id: editingId || services.length + 1,
      name,
      price,
      type,
      extra: extra ? mockExtras.find((ex) => ex.id === parseInt(extra)).name : null,
    };

    if (editingId) {
      setServices((prev) =>
        prev.map((s) => (s.id === editingId ? serviceData : s))
      );
      setEditingId(null);
    } else {
      setServices((prev) => [...prev, serviceData]);
    }

    setName("");
    setPrice("");
    setType("");
    setExtra("");

    closeModal();
  };

  const handleEdit = (service, openModal) => {
    setEditingId(service.id);
    setName(service.name);
    setPrice(service.price);
    setType(service.type);
    setExtra(service.extra ? mockExtras.find((ex) => ex.name === service.extra).id.toString() : "");
    openModal();
  };

  const handleDelete = (id) => {
    setServices((prev) => prev.filter((s) => s.id !== id));
  };

  return (
    <div className="flex flex-col gap-8 w-full max-w-5xl mx-auto py-8">
      <Card>
        <CardHeader className="flex justify-between items-center">
          <CardTitle>Planos Cadastrados</CardTitle>

          <Dialog>
            <DialogTrigger asChild>
              <Button>Modificar Plano</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>{editingId ? "Editar Serviço" : "Adicionar Serviço"}</DialogTitle>
              </DialogHeader>

              <form
                className="flex flex-col gap-4"
                onSubmit={(e) => handleSubmit(e, () => document.activeElement.blur())}
              >
                <div className="flex flex-col gap-1">
                  <Label htmlFor="name">Nome do Serviço</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex: Corte Tradicional"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <Label htmlFor="price">Preço</Label>
                  <Input
                    id="price"
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Ex: 45.00"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <Label htmlFor="type">Tipo</Label>
                  <Select value={type} onValueChange={setType}>
                    <SelectTrigger id="type">
                      <SelectValue placeholder="Selecione o tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cortes">Cortes</SelectItem>
                      <SelectItem value="barba">Barba</SelectItem>
                      <SelectItem value="especiais">Especiais</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex flex-col gap-1">
                  <Label htmlFor="extra">Serviço Extra</Label>
                  <Select value={extra} onValueChange={setExtra}>
                    <SelectTrigger id="extra">
                      <SelectValue placeholder="Selecione um extra (opcional)" />
                    </SelectTrigger>
                    <SelectContent>
                      {mockExtras.map((item) => (
                        <SelectItem key={item.id} value={String(item.id)}>
                          {item.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <DialogFooter>
                  <Button type="submit" className="w-full">
                    {editingId ? "Salvar Alterações" : "Adicionar Serviço"}
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </CardHeader>

        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Preço</TableHead>
                <TableHead>Qtd Corte</TableHead>
                <TableHead>Extra</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {services.map((service) => (
                <TableRow key={service.id}>
                  <TableCell>{service.name}</TableCell>
                  <TableCell>R$ {service.price}</TableCell>
                  <TableCell>{service.type}</TableCell>
                  <TableCell>{service.extra || "-"}</TableCell>
                  <TableCell className="flex gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          size="sm"
                          variant="outline"
                        >
                          Editar
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[500px]">
                        <DialogHeader>
                          <DialogTitle>Editar Serviço</DialogTitle>
                        </DialogHeader>
                        <form
                          className="flex flex-col gap-4"
                          onSubmit={(e) => handleSubmit(e, () => document.activeElement.blur())}
                        >
                          <div className="flex flex-col gap-1">
                            <Label htmlFor="name">Nome do Serviço</Label>
                            <Input
                              id="name"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                            />
                          </div>
                          <div className="flex flex-col gap-1">
                            <Label htmlFor="price">Preço</Label>
                            <Input
                              id="price"
                              type="number"
                              value={price}
                              onChange={(e) => setPrice(e.target.value)}
                            />
                          </div>
                          <div className="flex flex-col gap-1">
                            <Label htmlFor="type">Tipo</Label>
                            <Select value={type} onValueChange={setType}>
                              <SelectTrigger id="type">
                                <SelectValue placeholder="Selecione o tipo" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="cortes">Cortes</SelectItem>
                                <SelectItem value="barba">Barba</SelectItem>
                                <SelectItem value="especiais">Especiais</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="flex flex-col gap-1">
                            <Label htmlFor="extra">Serviço Extra</Label>
                            <Select value={extra} onValueChange={setExtra}>
                              <SelectTrigger id="extra">
                                <SelectValue placeholder="Selecione um extra (opcional)" />
                              </SelectTrigger>
                              <SelectContent>
                                {mockExtras.map((item) => (
                                  <SelectItem key={item.id} value={String(item.id)}>
                                    {item.name}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
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
                      onClick={() => handleDelete(service.id)}
                    >
                      Remover
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
