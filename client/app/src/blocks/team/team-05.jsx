"use client";

import { Button } from "@/components/ui/button";

const teamMembers = [
  {
    name: "Josué",
    title: "Barbeiro Principal",
    bio: "Especialista em cortes clássicos e modernos, sempre buscando deixar cada cliente com o melhor estilo.",
    imageUrl:
      "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Renan",
    title: "Barbeiro Assistente",
    bio: "Apaixonado por detalhes e acabamento perfeito, garante uma experiência incrível em cada atendimento.",
    imageUrl:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];


const Team05Page = () => {
  return (
    <div className="flex flex-col justify-center py-8 sm:py-12 px-6 lg:px-8 max-w-screen-xl mx-auto gap-16">
      <div className="text-center max-w-2xl mx-auto">
        <b className="text-center text-muted-foreground text-sm font-semibold uppercase font-serif">
          Sobre Nós
        </b>
        <h2 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tighter">
          Conheça a nossa barbearia
        </h2>
        <p className="mt-4 text-base sm:text-lg text-muted-foreground">
          Cortes e cuidados feitos com carinho, em um lugar para você relaxar, se sentir à vontade e sair com estilo.
        </p>



        <div className="mt-8 flex flex-col sm:flex-row-reverse sm:justify-center gap-3">
          <Button size="lg">Linha do tempo</Button>
          <Button size="lg">Unidade</Button>
          <Button size="lg" variant="outline">
            Barbeiros
          </Button>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-12">
        {teamMembers.map((member) => (
          <div
            key={member.name}
            className="flex flex-col items-center text-center max-w-xs"
          >
            <div className="w-48 h-48 flex justify-center rounded-lg overflow-hidden bg-secondary">
              <img
                src={member.imageUrl}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
            <p className="text-muted-foreground text-sm">{member.title}</p>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Team05Page;
