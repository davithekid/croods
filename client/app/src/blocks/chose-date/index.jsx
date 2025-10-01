"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const datas = [
  { id: 1, data: "22/09", diaSemana: "Segunda-feira" },
  { id: 2, data: "23/09", diaSemana: "Terça-feira" },
  { id: 3, data: "24/09", diaSemana: "Quarta-feira" },
  { id: 4, data: "25/09", diaSemana: "Quinta-feira" },
  { id: 5, data: "26/09", diaSemana: "Sexta-feira" },
  { id: 6, data: "27/09", diaSemana: "Sábado" },
  { id: 7, data: "28/09", diaSemana: "Domingo" },
];

export default function DateCard({
  barber = "Renan Souza",
  service = "Corte de cabelo",
  onConfirm,
}) {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleSelect = (date) => {
    setSelectedDate(date);
  };

  return (
    <>
      <div className="text-center space-y-2">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          Escolha sua data e horário
        </h1>
        <p className="text-muted-foreground">Barbeiro: <span className="font-semibold">{barber}</span></p>
        <p className="text-muted-foreground">{service}</p>
      </div>

      {/* Cards de datas */}
      <div className="mx-auto container flex gap-6 justify-center py-8 flex-wrap">
        {datas.map((date) => (
          <Card
            key={date.id}
            className={`relative max-w-md w-72 cursor-pointer transition-all rounded-xl ${
              selectedDate?.id === date.id
                ? "border-2 border-primary shadow-lg scale-105"
                : "border border-border hover:shadow-md hover:scale-105"
            }`}
            onClick={() => handleSelect(date)}
          >
            <CardHeader className="flex flex-col items-center gap-2">
              <CardTitle className="text-2xl font-bold text-center">
                {date.data}
              </CardTitle>
              <CardDescription className="text-center text-base">
                {date.diaSemana}
              </CardDescription>
            </CardHeader>

            {/* Ícone de seleção */}
            {selectedDate?.id === date.id && (
              <CheckCircle2 className="absolute top-3 right-3 text-primary h-6 w-6" />
            )}
          </Card>
        ))}
      </div>

      {/* Botão de confirmar */}
      {selectedDate && (
        <div className="flex justify-center mt-6">
          <Button
            onClick={() => onConfirm && onConfirm(selectedDate)}
            size="lg"
            className="px-8"
          >
            Confirmar {selectedDate.data}
          </Button>
        </div>
      )}
    </>
  );
}
