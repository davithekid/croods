"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

// Função para gerar horários entre start e end
const generateTimes = (startTime, endTime, interval = 60) => {
  const times = [];
  const start = new Date(`1970-01-01T${startTime}`);
  const end = new Date(`1970-01-01T${endTime}`);

  let id = 1;
  while (start < end) {
    const hour = start.toTimeString().slice(0, 5);
    times.push({ id: id++, hour });
    start.setMinutes(start.getMinutes() + interval);
  }
  return times;
};

export default function TimeCard({ selectedDate, selectedBarber, onConfirm }) {
  const [selectedTime, setSelectedTime] = useState(null);
  const [times, setTimes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!selectedDate || !selectedBarber?.id || !selectedDate.start_time || !selectedDate.end_time) return;

    setLoading(true);

    // Converte a data para YYYY-MM-DD para o back
    const [day, month, year] = selectedDate.data.split("/");
    const formattedDate = `${year}-${month}-${day}`;

    fetch(`http://127.0.0.1:3333/appointments/barber/${selectedBarber.id}/date/${formattedDate}`)
      .then(res => res.json())
      .then((bookedTimes) => {
        // Gera todos os horários possíveis do dia
        const allSlots = generateTimes(
          selectedDate.start_time,
          selectedDate.end_time
        );

        // Filtra horários já ocupados
        const availableSlots = allSlots.filter(slot =>
          !bookedTimes.some(booked => booked.hour === slot.hour)
        );

        setTimes(availableSlots);
        setLoading(false);
      })
      .catch(err => {
        console.error("Erro ao buscar horários ocupados:", err);
        setTimes([]);
        setLoading(false);
      });

  }, [selectedDate, selectedBarber]);

  const handleSelect = (time) => setSelectedTime(time);

  return (
    <>
      <div className="text-center space-y-2">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight font-serif">
          Escolha seu horário
        </h1>
        <p className="text-muted-foreground">
          Selecione o melhor horário para {selectedDate?.diaSemana} — {selectedDate?.data}
        </p>
      </div>

      {loading ? (
        <p className="text-center mt-6 text-gray-500">Carregando horários disponíveis...</p>
      ) : (
        <div className="mx-auto container flex gap-6 justify-center py-8 flex-wrap">
          {times.length > 0 ? (
            times.map((time) => (
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
                  <CardTitle className="text-2xl font-semibold text-center">{time.hour}</CardTitle>
                </CardHeader>
                {selectedTime?.id === time.id && (
                  <CheckCircle2 className="absolute top-3 right-3 text-primary h-5 w-5" />
                )}
              </Card>
            ))
          ) : (
            <p className="text-center w-full text-gray-500">Nenhum horário disponível neste dia.</p>
          )}
        </div>
      )}

      {selectedTime && (
        <div className="flex justify-center mt-6">
          <Button size="lg" className="px-8" onClick={() => onConfirm(selectedTime)}>
            Confirmar {selectedTime.hour}
          </Button>
        </div>
      )}
    </>
  );
}
