'use client';

import { useState, useEffect } from "react";
import {
  Card, CardHeader, CardTitle, CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogTrigger,
} from "@/components/ui/dialog";

export function ServicesTablePage({ loggedBarberId }) {
  const [services, setServices] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [extra, setExtra] = useState("");

  const fetchServices = async () => {
    try {
      const res = await fetch(`http://localhost:3334/services?barber_id=${loggedBarberId}`, { cache: "no-store" });
      const data = await res.json();
      setServices(data);
    } catch (err) {
      console.error("Erro ao buscar serviços:", err);
    }
  };

  useEffect(() => {
    fetchServices();
  }, [loggedBarberId]);

  const handleSave = async () => {
    if (!name || !price || !type) return alert("Preencha todos os campos obrigatórios");

    const payload = { name, price, type, extra, barber_id: loggedBarberId };

    try {
      if (editingId) {
        await fetch(`http://localhost:3334/services/${editingId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } else {
        await fetch(`http://localhost:3334/services`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      }
      fetchServices();
      setEditingId(null);
      setName(""); setPrice(""); setType(""); setExtra("");
    } catch (err) {
      console.error("Erro ao salvar serviço:", err);
    }
  };

  const handleEdit = (service) => {
    setEditingId(service.id);
    setName(service.name);
    setPrice(service.price);
    setType(service.type);
    setExtra(service.extra || "");
  };

  // Deletar serviço
  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:3334/services/${id}`, { method: "DELETE" });
      setServices(prev => prev.filter(s => s.id !== id));
    } catch (err) {
      console.error("Erro ao deletar serviço:", err);
    }
  };

  return (
    <div className="flex flex-col gap-8 w-full max-w-5xl mx-auto py-8">
      <Card>
        <CardHeader className="flex justify-between items-center">
          <CardTitle>Serviços Cadastrados</CardTitle>

          <Dialog>
            <DialogTrigger asChild>
              <Button>{editingId ? "Editar Serviço" : "Adicionar Serviço"}</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>{editingId ? "Editar Serviço" : "Adicionar Serviço"}</DialogTitle>
              </DialogHeader>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <Label htmlFor="name">Nome</Label>
                  <Input id="name" value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div className="flex flex-col gap-1">
                  <Label htmlFor="price">Preço</Label>
                  <Input id="price" type="number" value={price} onChange={e => setPrice(e.target.value)} />
                </div>
                <div className="flex flex-col gap-1">
                  <Label htmlFor="type">Tipo</Label>
                  <Select value={type} onValueChange={setType}>
                    <SelectTrigger id="type"><SelectValue placeholder="Selecione o tipo" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cortes">Cortes</SelectItem>
                      <SelectItem value="barba">Barba</SelectItem>
                      <SelectItem value="especiais">Especiais</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col gap-1">
                  <Label htmlFor="extra">Extra</Label>
                  <Input id="extra" value={extra} onChange={e => setExtra(e.target.value)} placeholder="Opcional" />
                </div>
                <DialogFooter>
                  <Button onClick={handleSave} className="w-full">{editingId ? "Salvar" : "Adicionar"}</Button>
                </DialogFooter>
              </div>
            </DialogContent>
          </Dialog>
        </CardHeader>

        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Preço</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Extra</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {services.map(service => (
                <TableRow key={service.id}>
                  <TableCell>{service.name}</TableCell>
                  <TableCell>R$ {service.price}</TableCell>
                  <TableCell>{service.type}</TableCell>
                  <TableCell>{service.extra || "-"}</TableCell>
                  <TableCell className="flex gap-2">
                    <Button size="sm" variant="outline" onClick={() => handleEdit(service)}>Editar</Button>
                    <Button size="sm" variant="destructive" onClick={() => handleDelete(service.id)}>Remover</Button>
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
