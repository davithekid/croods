"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export default function DateCard({ barber, service, onConfirm }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [dates, setDates] = useState([]);

  useEffect(() => {
    console.log("Barber recebido:", barber);
    if (!barber?.id) return;


    fetch(`http://127.0.0.1:3333/work-schedules/barber/${barber.id}`)
      .then(res => res.json())
      .then((data) => {
        const schedules = Array.isArray(data) ? data : data.workSchedules || [];

        const hoje = new Date();
        const dias = [];

        for (let i = 0; i < 7; i++) {
          const d = new Date(hoje);
          d.setDate(hoje.getDate() + i);

          const nomeDia = d
            .toLocaleDateString("pt-BR", { weekday: "long" })
            .toLowerCase()
            .replace("-feira", "")
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");

          const diaTrabalhado = schedules.find((s) => s.day_of_week === nomeDia);

          if (diaTrabalhado) {
            dias.push({
              id: i + 1,
              data: d.toLocaleDateString("pt-BR"),
              diaSemana: nomeDia.charAt(0).toUpperCase() + nomeDia.slice(1),
              start_time: diaTrabalhado.start_time, // manter para TimeCard
              end_time: diaTrabalhado.end_time,     // manter para TimeCard
            });
          }
        }

        setDates(dias);
      })
      .catch(err => console.error("Erro ao buscar work schedules:", err));
  }, [barber]);

  const handleSelect = (date) => {
    setSelectedDate(date);
  };

  return (
    <>
      <div className="text-center space-y-2">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight font-serif">
          Escolha sua data
        </h1>
        <p className="text-muted-foreground">
          Barbeiro: <span className="font-semibold">{barber?.name}</span>
        </p>
        <p className="text-muted-foreground">{service?.name}</p>
      </div>

      <div className="mx-auto container flex gap-6 justify-center py-8 flex-wrap">
        {dates.map((date) => (
          <Card
            key={date.id}
            className={`relative max-w-md w-72 cursor-pointer transition-all rounded-xl ${selectedDate?.id === date.id
                ? "border-2 border-primary shadow-lg scale-105"
                : "border border-border hover:shadow-md hover:scale-105"
              }`}
            onClick={() => handleSelect(date)}
          >
            <CardHeader className="flex flex-col items-center gap-2">
              <CardTitle className="text-2xl font-bold text-center">{date.data}</CardTitle>
              <CardDescription className="text-center text-base">
                {date.diaSemana}
              </CardDescription>
            </CardHeader>
            {selectedDate?.id === date.id && (
              <CheckCircle2 className="absolute top-3 right-3 text-primary h-6 w-6" />
            )}
          </Card>
        ))}
      </div>

      {selectedDate && (
        <div className="flex justify-center mt-6">
          <Button onClick={() => onConfirm(selectedDate)} size="lg" className="px-8 cursor-pointer">
            Confirmar {selectedDate.data}
          </Button>
        </div>
      )}
    </>
  );
}
