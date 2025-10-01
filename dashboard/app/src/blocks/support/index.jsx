"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

export default function MessageTable() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      cliente: "João da Silva",
      email: "joao.silva@email.com",
      mensagem: "Olá, preciso de ajuda com meu agendamento.",
      data: "24/09/2025 14:30",
      respondida: false,
    },
    {
      id: 2,
      cliente: "Maria Oliveira",
      email: "maria.oliveira@email.com",
      mensagem: "Quero alterar o horário do meu serviço.",
      data: "23/09/2025 10:15",
      respondida: false,
    },
  ]);

  const markAsRespondida = (id) => {
    setMessages((prev) =>
      prev.map((msg) =>
        msg.id === id ? { ...msg, respondida: true } : msg
      )
    );
  };

  const deleteMessage = (id) => {
    setMessages((prev) => prev.filter((msg) => msg.id !== id));
  };

  return (
    <div className="overflow-x-auto rounded-lg border bg-white dark:bg-zinc-800">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Cliente</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Mensagem</TableHead>
            <TableHead>Data</TableHead>
            <TableHead>Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {messages.map((msg) => (
            <TableRow
              key={msg.id}
              className={msg.respondida ? "opacity-60" : ""}
            >
              <TableCell>{msg.cliente}</TableCell>
              <TableCell>{msg.email}</TableCell>
              <TableCell>{msg.mensagem}</TableCell>
              <TableCell>{msg.data}</TableCell>
              <TableCell className="flex gap-2">
                <Button
                  size="sm"
                  variant={msg.respondida ? "outline" : "default"}
                  onClick={() => markAsRespondida(msg.id)}
                  disabled={msg.respondida}
                >
                  {msg.respondida ? "Respondida" : "Marcar como respondida"}
                </Button>
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => deleteMessage(msg.id)}
                >
                  Deletar
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {messages.length === 0 && (
        <p className="p-4 text-center text-gray-500 dark:text-gray-400">
          Nenhuma mensagem encontrada.
        </p>
      )}
    </div>
  );
}
