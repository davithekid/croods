"use client";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Confirm } from "@/components/alert-dialog/confirm-sheduling";

export default function CardConfirmaAgendamento({
    service,
    barber,
    date,
    time,
    onConfirm
}) {
    return (
        <Card className="w-[380px] bg-secondary/40 shadow-md rounded-2xl border border-muted">
            <CardHeader className="text-center space-y-2">
                <CardTitle className="text-2xl font-bold">Confirmação</CardTitle>
                <CardDescription>
                    Preencha seus dados para finalizar o agendamento
                </CardDescription>
            </CardHeader>

            <CardContent>
                <form className="space-y-4">
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="name">Nome Completo</Label>
                        <Input id="name" placeholder="Insira o seu nome completo" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="whatsapp">WhatsApp</Label>
                        <Input id="whatsapp" placeholder="(11) 99999-9999" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="name">Email</Label>
                        <Input id="name" placeholder="Insira o seu nome completo" />
                    </div>
                </form>
            </CardContent>

            <CardFooter>

                <Confirm
                    clientName="Davi Chagas"
                    whatsapp="(11) 99999-9999"
                    service={service?.title || service?.name}
                    barber={barber?.title || barber?.name || barber}
                    date={date?.date}
                    time={time?.hour}
                    total="R$ 50,00"
                    onClose={onConfirm}
                />
            </CardFooter>
        </Card>
    );
}
