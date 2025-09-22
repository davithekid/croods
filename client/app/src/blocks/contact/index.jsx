import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MailIcon, MapPinIcon, MessageCircle, PhoneIcon } from "lucide-react";
import Link from "next/link";

const Contact02Page = () => (
  <div className="min-h-screen flex items-center justify-center py-16">
    <div className="w-full max-w-(--breakpoint-xl) mx-auto px-6 xl:px-0">
      <b className="text-muted-foreground uppercase font-semibold text-sm">
        Fale Conosco
      </b>
      <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
        Converse com nossa equipe!
      </h2>
      <p className="mt-3 text-base sm:text-lg text-muted-foreground">
        Queremos ouvir você! Preencha o formulário abaixo ou nos envie um e-mail.
      </p>

      <div className="mt-24 grid lg:grid-cols-2 gap-16 md:gap-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 items-center">

          <div>
            <div className="h-12 w-12 flex items-center justify-center bg-primary/5 dark:bg-primary/10 text-primary rounded-full">
              <MapPinIcon />
            </div>
            <h3 className="mt-6 font-semibold text-xl">Nossa Barbearia</h3>
            <p className="my-2.5 text-muted-foreground">
              Venha nos visitar e aproveite um atendimento personalizado.
            </p>
            <Link
              className="font-medium text-primary"
              href="https://map.google.com"
              target="_blank">
              Rua Exemplo, 123 <br /> Bairro Central, Sua Cidade
            </Link>
          </div>
          <div>
            <div className="h-12 w-12 flex items-center justify-center bg-primary/5 dark:bg-primary/10 text-primary rounded-full">
              <MessageCircle />
            </div>
            <h3 className="mt-6 font-semibold text-xl">Chat Online</h3>
            <p className="my-2.5 text-muted-foreground">
              Converse com a gente agora e tire suas dúvidas!
            </p>
          </div>


        </div>

        {/* Form */}
        <Card className="bg-accent shadow-none py-0">
          <CardContent className="p-6 md:p-8">
            <form>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                <div className="col-span-2 sm:col-span-2">
                  <Label htmlFor="firstName">Nome</Label>
                  <Input
                    placeholder="Insira o seu nome"
                    id="firstName"
                    className="mt-2 bg-white h-10 shadow-none" />
                </div>

                <div className="col-span-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    type="email"
                    placeholder="Email"
                    id="email"
                    className="mt-2 bg-white h-10 shadow-none" />
                </div>
                <div className="col-span-2">
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea
                    id="message"
                    placeholder="Digite sua mensagem"
                    className="mt-2 bg-white shadow-none"
                    rows={6} />
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
