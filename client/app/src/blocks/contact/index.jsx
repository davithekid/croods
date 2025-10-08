"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPinIcon, MessageCircle, PhoneIcon, MailIcon } from "lucide-react";
import Link from "next/link";

const Contact02Page = () => (
  <div className="min-h-screen flex items-center justify-center py-16 ">
    <div className="w-full max-w-7xl mx-auto px-6 xl:px-0">
      <b className="text-muted-foreground uppercase font-semibold text-sm">
        Fale Conosco
      </b>
      <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
        Converse com nossa equipe!
      </h2>
      <p className="mt-3 text-base sm:text-lg text-muted-foreground">
        Queremos ouvir você! Preencha o formulário abaixo ou entre em contato diretamente.
      </p>

      <div className="mt-24 grid lg:grid-cols-2 gap-16 md:gap-10">
        {/* Contato */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Localização */}
          <div className="flex flex-col items-start">
            <div className="h-12 w-12 flex items-center justify-center bg-primary/5 dark:bg-primary/10 text-primary rounded-full mb-4">
              <MapPinIcon className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-xl mb-2">Nossa Barbearia</h3>
            <p className="text-muted-foreground mb-2">
              Venha nos visitar e aproveite um atendimento personalizado.
            </p>
            <Link
              href="https://www.google.com/maps/dir/?api=1&destination=Rua+Juquiá+1188+Vila+Eldizia+Santo+André"
              target="_blank"
              className="font-medium text-primary"
            >
              Rua Juquiá, 1188 <br /> Vila Eldizia, Santo André
            </Link>
          </div>

          {/* Chat Online */}
          <div className="flex flex-col items-start">
            <div className="h-12 w-12 flex items-center justify-center bg-primary/5 dark:bg-primary/10 text-primary rounded-full mb-4">
              <MessageCircle className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-xl mb-2">Chat Online</h3>
            <p className="text-muted-foreground">
              Converse com a gente agora e tire suas dúvidas!
            </p>
          </div>

          {/* Telefone */}
          <div className="flex flex-col items-start">
            <div className="h-12 w-12 flex items-center justify-center bg-primary/5 dark:bg-primary/10 text-primary rounded-full mb-4">
              <PhoneIcon className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-xl mb-2">Telefone</h3>
            <p className="text-muted-foreground">(11) 98765-4321</p>
          </div>

          {/* Email */}
          <div className="flex flex-col items-start">
            <div className="h-12 w-12 flex items-center justify-center bg-primary/5 dark:bg-primary/10 text-primary rounded-full mb-4">
              <MailIcon className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-xl mb-2">E-mail</h3>
            <p className="text-muted-foreground">contato@barbeariacroods.com.br</p>
          </div>
        </div>

        {/* Formulário */}
        <Card className="bg-muted shadow-none py-0">
          <CardContent className="p-6 md:p-8">
            <form>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                <div className="col-span-2 sm:col-span-2">
                  <Label htmlFor="firstName">Nome</Label>
                  <Input
                    placeholder="Insira o seu nome"
                    id="firstName"
                    className="mt-2 bg-white h-10 shadow-none"
                  />
                </div>

                <div className="col-span-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    type="email"
                    placeholder="Email"
                    id="email"
                    className="mt-2 bg-white h-10 shadow-none"
                  />
                </div>

                <div className="col-span-2">
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea
                    id="message"
                    placeholder="Digite sua mensagem"
                    className="mt-2 bg-white shadow-none"
                    rows={6}
                  />
                </div>
              </div>
              <Button className="mt-6 w-full" size="lg">
                Enviar
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
);

export default Contact02Page;
