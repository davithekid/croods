"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const dates = [
  { id: 1, date: "22/09", dayOfweek: "Monday" },
  { id: 2, date: "23/09", dayOfweek: "Tuesday" },
  { id: 3, date: "24/09", dayOfweek: "Wednesday" },
  { id: 4, date: "25/09", dayOfweek: "Thursday" },
  { id: 5, date: "26/09", dayOfweek: "Friday" },
  { id: 6, date: "27/09", dayOfweek: "Saturday" },
  { id: 7, date: "28/09", dayOfweek: "Sunday" },
];

export default function DateCard({ barber = "Renan Souza", service = "Corte selecionado", onConfirm }) {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleSelect = (date) => {
    setSelectedDate(date);
    if (onConfirm) onConfirm(date);
  };

  return (
    <>
      <div>
        <h1 className="text-5xl sm:text-6xl font-semibold text-center tracking-tighter">
          Selecione data e horário
        </h1>
        <p className="flex justify-center">Barbeiro: {barber}</p>
        <p className="flex justify-center">{service}</p>
      </div>

      <div className="mx-auto container flex gap-6 justify-center py-6 flex-wrap">
        {dates.map((date) => (
          <Card
            key={date.id}
            className={`max-w-md w-72 cursor-pointer transition-shadow ${
              selectedDate?.id === date.id
                ? "border-2 border-primary shadow-lg"
                : "border border-border hover:shadow-md"
            }`}
            onClick={() => handleSelect(date)}
          >
            <CardHeader className="flex flex-col items-center gap-2">
              <CardTitle className="text-xl font-bold text-center">
                {date.date}
              </CardTitle>
              <CardDescription className="text-center text-sm text-muted-foreground">
                {date.dayOfweek}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      {selectedDate && onConfirm && (
        <div className="flex justify-center mt-6">
          <Button onClick={() => onConfirm(selectedDate)} size="lg">
            Confirmar Data
          </Button>
        </div>
      )}
    </>
  );
}
