import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay, Scissors, Star } from "lucide-react";
import Link from "next/link";
import React from "react";

const Hero01 = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6">
      <div className="relative text-center max-w-3xl z-10">
        <Badge
          variant="secondary"
          className="rounded-full py-2 px-4 border  backdrop-blur-sm"
          asChild
        >
          <Link href="/sobre">
            <Scissors className="size-4 mr-2" />
            <p></p>
            Desde 2016
          </Link>
        </Badge>

        <h1 className="mt-6 text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.2] font-serif">
          Barbearia <span className="text-amber-500">Croods</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl  max-w-xl mx-auto font-serif">
          Onde estilo encontra tradição. Corte de cabelo, barba e cuidados masculinos com excelência.
        </p>

        <div className="mt-12 flex items-center justify-center gap-4">
          <Button asChild size="lg" className="rounded-full text-base bg-amber-500 hover:bg-amber-600 shadow-lg">
            <Link href="/agendamento" className="flex items-center gap-1">
              Agendar horário
              <ArrowUpRight className="h-5 w-5" />
            </Link>
          </Button>
          <Button asChild
            variant="outline"
            size="lg"
            className="rounded-full text-base border-gray-500"
          >
            <Link href="/servicos" className="flex items-center gap-1">
              <CirclePlay className="size-5 mr-2" />
              Nossos Serviços
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero01;
