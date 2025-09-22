import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import Link from "next/link";
import React from "react";

const Hero01 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-3xl">

        <h1
          className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl md:leading-[1.2] font-semibold tracking-tighter">
           Croods Barbearia 
        </h1>
        <p className="mt-6 md:text-lg">
          Agende seu corte, escolha planos exclusivos e cuide do seu visual com quem entende de estilo. A Croods é mais que barbearia — é atitude.
        </p>

        <div className="mt-12 flex items-center justify-center gap-4">
          <Button size="lg" className="rounded-full text-base">
            Agendamento <ArrowUpRight className="size-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full text-base shadow-none">
            <CirclePlay className="size-5" /> Ver planos
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero01;
