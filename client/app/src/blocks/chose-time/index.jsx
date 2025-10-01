"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const times = [
  { id: 1, hour: "09:00" },
  { id: 2, hour: "10:00" },
  { id: 3, hour: "11:00" },
  { id: 4, hour: "13:00" },
  { id: 5, hour: "14:00" },
  { id: 6, hour: "15:00" },
  { id: 7, hour: "16:00" },
  { id: 8, hour: "17:00" },
];

export default function TimeCard({ onConfirm }) {
  const [selectedTime, setSelectedTime] = useState(null);

  const handleSelect = (time) => {
    setSelectedTime(time);
  };

  return (
    <>
      <div className="text-center space-y-2">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          Escolha seu horário
        </h1>
        <p className="text-muted-foreground">
          Selecione o melhor horário para seu atendimento
        </p>
      </div>

      <div className="mx-auto container flex gap-6 justify-center py-8 flex-wrap">
        {times.map((time) => (
          <Card
            key={time.id}
            className={`relative max-w-md w-40 cursor-pointer transition-all rounded-xl ${
              selectedTime?.id === time.id
                ? "border-2 border-primary shadow-lg scale-105"
                : "border border-border hover:shadow-md hover:scale-105"
            }`}
            onClick={() => handleSelect(time)}
          >
            <CardHeader className="flex flex-col items-center gap-2 py-6">
              <CardTitle className="text-2xl font-semibold text-center">
                {time.hour}
              </CardTitle>
            </CardHeader>

            {/* Ícone de seleção */}
            {selectedTime?.id === time.id && (
              <CheckCircle2 className="absolute top-3 right-3 text-primary h-5 w-5" />
            )}
          </Card>
        ))}
      </div>

      {selectedTime && (
        <div className="flex justify-center mt-6">
          <Button
            size="lg"
            className="px-8"
            onClick={() => onConfirm && onConfirm(selectedTime)}
          >
            Confirmar {selectedTime.hour}
          </Button>
        </div>
      )}
    </>
  );
}
