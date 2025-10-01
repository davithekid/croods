import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay, Scissors } from "lucide-react"; 
import Link from "next/link";
import React from "react";

const Hero01 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-3xl">
        <Badge
          variant="secondary"
          className="rounded-full py-1 border-border"
          asChild
        >
          <Link href="#">
          --
            <Scissors className="size-4" /> 
            --
          </Link>
        </Badge>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl md:leading-[1.2] font-semibold tracking-tighter">
          Barbearia Croods
        </h1>
        <p className="mt-6 md:text-lg">
          Tradição, estilo e excelência em cada detalhe. Experiência premium de barbearia.
        </p>
        <div className="mt-12 flex items-center justify-center gap-4">
          <Button size="lg" className="rounded-full text-base">
            Agendar um horário <ArrowUpRight className="size-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full text-base shadow-none"
          >
            <CirclePlay className="size-5" /> Nossos Serviços
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero01;