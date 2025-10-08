'use client';

import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { User } from "lucide-react";
import { get } from '@/lib/api';

export default function PricingCard({ onSelect }) {
  const [barbers, setBarbers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchBarbers() {
      try {
        const data = await get('users/barbers');
        setBarbers(data);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchBarbers();
  }, []);

  if (loading) return <p className="text-center py-10">Carregando barbeiros...</p>;
  if (error) return <p className="text-center py-10 text-red-500">{error}</p>;

  return (
    <div className="flex flex-col">
      <h1 className="text-4xl sm:text-5xl font-semibold text-center tracking-tighter font-serif">
        Escolha seu barbeiro
      </h1>

      <div className="flex gap-6 justify-center flex-wrap py-6">
        {barbers.map((barber, index) => (
          <Card
            key={`${barber.id}-${index}`} 
            className="max-w-xs w-full hover:shadow-md hover:border-primary duration-200 hover:scale-102"
          >
            <CardHeader className="flex flex-col items-center gap-2">
              <div className="bg-muted rounded-full p-4 flex items-center justify-center">
                <User className="h-12 w-12 text-muted-foreground" />
              </div>

              <CardTitle className="text-xl font-bold text-center">
                {barber.name}
              </CardTitle>
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
