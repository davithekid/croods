"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
      <div>
        <h1 className="text-5xl sm:text-6xl font-semibold text-center tracking-tighter">
          Escolha um horário
        </h1>
      </div>

      <div className="mx-auto container flex gap-6 justify-center py-6 flex-wrap">
        {times.map((time) => (
          <Card
            key={time.id}
            className={`max-w-md w-72 cursor-pointer transition-shadow ${
              selectedTime?.id === time.id
                ? "border-2 border-primary shadow-lg"
                : "border border-border hover:shadow-md"
            }`}
            onClick={() => handleSelect(time)}
          >
            <CardHeader className="flex flex-col items-center gap-2">
              <CardTitle className="text-xl font-bold text-center">
                {time.hour}
              </CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>

      {selectedTime && onConfirm && (
        <div className="flex justify-center mt-6">
          <Button size="lg" onClick={() => onConfirm(selectedTime)}>
            Confirmar Horário
          </Button>
        </div>
      )}
    </>
  );
}
    