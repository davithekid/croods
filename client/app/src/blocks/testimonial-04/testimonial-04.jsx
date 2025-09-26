import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Marquee } from "@/components/ui/marquee";
import Link from "next/link";
import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Lucas Ferreira",
    designation: "Cliente fiel",
    company: "Barbearia Croods",
    testimonial:
      "O atendimento é impecável e o corte sempre sai perfeito. Saio daqui me sentindo renovado!",
    avatar: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    id: 2,
    name: "Mariana Souza",
    designation: "Cliente assídua",
    company: "Barbearia Croods",
    testimonial:
      "Adoro o ambiente e o cuidado que eles têm com cada detalhe. Super recomendo!",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    id: 3,
    name: "Thiago Alves",
    designation: "Barba e cabelo",
    company: "Barbearia Croods",
    testimonial:
      "Nunca achei um lugar tão dedicado. Atendimento rápido e cortesia incrível!",
    avatar: "https://randomuser.me/api/portraits/men/13.jpg",
  },
  {
    id: 4,
    name: "Fernanda Lima",
    designation: "Cliente VIP",
    company: "Barbearia Croods",
    testimonial:
      "Os profissionais são super atenciosos e sempre me dão dicas de estilo que combinam comigo.",
    avatar: "https://randomuser.me/api/portraits/women/14.jpg",
  },
  {
    id: 5,
    name: "Carlos Eduardo",
    designation: "Cliente regular",
    company: "Barbearia Croods",
    testimonial:
      "Experiência premium! Atendimento personalizado e ambiente muito agradável.",
    avatar: "https://randomuser.me/api/portraits/men/15.jpg",
  },
  {
    id: 6,
    name: "Juliana Martins",
    designation: "Cliente satisfeita",
    company: "Barbearia Croods",
    testimonial:
      "O corte e a barba saem sempre impecáveis. Atendimento rápido e divertido!",
    avatar: "https://randomuser.me/api/portraits/women/16.jpg",
  },
];

const Testimonial04 = () => (
  <div className="min-h-screen flex justify-center items-center py-12">
    <div className="h-full w-full">
      <h2 className="text-5xl font-semibold text-center tracking-[-0.03em] px-6 text-pretty">
        Depoimentos de quem já nos visitou
      </h2>
      <p className="mt-3 text-center text-muted-foreground text-xl">
        Clientes reais que confiam na nossa barbearia e compartilham suas experiências.
      </p>
      <div className="mt-14 relative">
        <div className="z-10 absolute left-0 inset-y-0 w-[15%] bg-linear-to-r from-background to-transparent" />
        <div className="z-10 absolute right-0 inset-y-0 w-[15%] bg-linear-to-l from-background to-transparent" />
        <Marquee pauseOnHover className="[--duration:20s]">
          <TestimonialList />
        </Marquee>
        <Marquee pauseOnHover reverse className="mt-0 [--duration:20s]">
          <TestimonialList />
        </Marquee>
      </div>
    </div>
  </div>
);

const TestimonialList = () =>
  testimonials.map((testimonial) => (
    <div key={testimonial.id} className="min-w-96 max-w-sm bg-accent rounded-xl p-6 transition-transform hover:scale-105 hover:shadow-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar>
            <img src={testimonial.avatar} alt={testimonial.name} />
            <AvatarFallback className="text-xl font-medium bg-primary text-primary-foreground">
              {testimonial.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-lg font-semibold">{testimonial.name}</p>
            <p className="text-sm text-muted-foreground">{testimonial.designation}</p>
          </div>
        </div>
        <Button variant="ghost" size="icon" asChild>
          <Link href="#" target="_blank">
            <TwitterLogo className="w-4 h-4" />
          </Link>
        </Button>
      </div>
      <p className="mt-5 text-[17px]">{testimonial.testimonial}</p>
    </div>
  ));

const TwitterLogo = (props) => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>X</title>
    <path
      fill="currentColor"
      d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
    />
  </svg>
);

export default Testimonial04;
