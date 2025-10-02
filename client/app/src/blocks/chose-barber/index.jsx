"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { User } from "lucide-react";

export default function PricingCard({ onSelect }) {
  const barbers = [
    { id: 1, name: "Renan Souza", description: "Barbeiro Especialista" },
    { id: 2, name: "Josué", description: "Barbeiro Especialista" },
  ];

  return (
    <div className="flex flex-col">
      <h1 className="text-4xl sm:text-5xl font-semibold text-center tracking-tighter font-serif">
        Escolha seu barbeiro
      </h1>

      <div className="flex gap-6 justify-center flex-wrap py-6">
        {barbers.map((barber) => (
          <Card
            key={barber.id}
            className="max-w-xs w-full transition-shadow hover:shadow-md"
          >
            <CardHeader className="flex flex-col items-center gap-2">
              <div className="bg-muted rounded-full p-4 flex items-center justify-center">
                <User className="h-12 w-12 text-muted-foreground" />
              </div>

              <CardTitle className="text-xl font-bold text-center">
                {barber.name}
              </CardTitle>
              <CardDescription className="text-center text-sm text-muted-foreground">
                {barber.description}
              </CardDescription>
            </CardHeader>

            <CardFooter className="mt-2 flex justify-center">
              <Button
                size="lg"
                className="w-full cursor-pointer"
                onClick={() => onSelect(barber)}
              >
                Selecionar Barbeiro
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
    