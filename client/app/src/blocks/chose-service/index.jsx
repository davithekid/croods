"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Scissors, PlusCircle } from "lucide-react";

export default function Chose({ barberId, onSelect }) {
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const [extras, setExtras] = useState([]);

  useEffect(() => {
    console.log("barberId:", barberId);
    if (!barberId) return;
    const fetchServices = async () => {
      const res = await fetch(`http://localhost:3333/barbers/${barberId}/services`);
      const data = await res.json();
      console.log("services:", data);
      setServices(data);
    };
    fetchServices();
  }, [barberId]);

  const toggleExtra = (extra) => {
    setExtras((prev) =>
      prev.includes(extra) ? prev.filter((e) => e !== extra) : [...prev, extra]
    );
  };

  const handleConfirm = () => {
    onSelect(selectedService); 
  };

  return (
    <section className="py-5">
      <div className="container mx-auto max-w-5xl space-y-10">
        <div className="space-y-2 text-center">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl font-serif">
            Escolha seu serviço
          </h2>
        </div>

        <div className="flex flex-col justify-center gap-4">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => setSelectedService(service)}
              className={`bg-white dark:bg-muted border space-y-4 rounded-lg p-5 cursor-pointer ${selectedService?.id === service.id ? "border-primary" : ""
                }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-lg">{service.name}</h3>
                <span className="font-bold text-primary text-lg">R$ {service.price}</span>
              </div>
            </div>
          ))}
        </div>

        {selectedService && (
          <>
            {/* <h3 className="text-xl font-semibold flex items-center gap-2">
              <PlusCircle className="h-5 w-5 text-primary" />
              Adicionais <span className="text-red-500">*opcional</span>
            </h3> */}

            <Button onClick={handleConfirm} className="mt-4 w-full rounded-lg cursor-pointer">
              Confirmar Seleção
            </Button>
          </>
        )}
      </div>
    </section>
  );
}