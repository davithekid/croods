"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Carlos Silva",
    designation: "Cliente Fiel",
    company: "São Paulo",
    testimonial:
      "Sempre saio satisfeito! O corte é impecável e o atendimento é excelente. Recomendo a todos os amigos.",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Ana Paula Mendes",
    designation: "Cliente Fiel",
    company: "São Paulo",
    testimonial:
      "Adoro o ambiente da barbearia e o cuidado com cada detalhe. Sempre me sinto bem atendida.",
    avatar: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    id: 3,
    name: "Ricardo Oliveira",
    designation: "Cliente Fiel",
    company: "São Paulo",
    testimonial:
      "Os barbeiros são super profissionais. Meu corte e minha barba ficam sempre impecáveis!",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "Fernanda Costa",
    designation: "Cliente Fiel",
    company: "São Paulo",
    testimonial:
      "O atendimento é muito acolhedor e o resultado final sempre supera minhas expectativas. Adoro a barbearia!",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    id: 5,
    name: "Marcos Andrade",
    designation: "Cliente Fiel",
    company: "São Paulo",
    testimonial:
      "Ambiente agradável e cortes de primeira qualidade. Sempre recomendo para quem procura um bom barbeiro.",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    id: 6,
    name: "Juliana Santos",
    designation: "Cliente Fiel",
    company: "São Paulo",
    testimonial:
      "Serviço excelente e muito atenção aos detalhes. Saio sempre satisfeito e voltarei sempre!",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
];


const Testimonial04 = () => {
  return (
    <div className="flex flex-col justify-center items-center  py-20 gap-12 relative">
      <h2 className="text-5xl font-semibold text-center tracking-[-0.03em] px-6 text-pretty">
        Feedback de nossos clientes
      </h2>

      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="marquee-track-left flex gap-6 min-w-max">
          <TestimonialList testimonials={testimonials} />
          <TestimonialList testimonials={testimonials} />
        </div>
      </div>
      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="marquee-track-right flex gap-6 min-w-max">
          <TestimonialList testimonials={testimonials} />
          <TestimonialList testimonials={testimonials} />
        </div>
      </div>

      <style jsx>{`
        .marquee-track-left, .marquee-track-right {
          flex-shrink: 0;
        }

        @keyframes marqueeLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes marqueeRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .marquee-track-left {
          animation: marqueeLeft 25s linear infinite;
        }
        .marquee-track-right {
          animation: marqueeRight 25s linear infinite;
        }

        .marquee-track-left > div, .marquee-track-right > div {
          /* border: 1px solid red; */
        }
      `}</style>
    </div>
  );
};

const TestimonialList = ({ testimonials }) =>
  testimonials.map((testimonial, idx) => (
    <div
      key={`${testimonial.id}-${idx}`}
      className="min-w-[20rem] max-w-sm bg-accent rounded-xl p-6 flex-shrink-0"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarFallback className="text-xl font-medium bg-primary text-primary-foreground">
              {testimonial.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-lg font-semibold">{testimonial.name}</p>
            <p className="text-sm text-gray-500">{testimonial.designation}</p>
          </div>
        </div>   
      </div>
      <p className="mt-5 text-[17px]">{testimonial.testimonial}</p>
    </div>
  ));

export default Testimonial04;