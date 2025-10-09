"use client";
import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function CardConfirmaAgendamento({
    service,
    barber,
    date,
    time,
    onConfirm,
    user
}) {
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        email: ''
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (!formData.fullName || !formData.phone || !formData.email) {
            toast.error("Por favor, preencha todos os campos.");
            setLoading(false);
            return;
        }

        const [day, month, year] = date.data.split("/");
        const scheduled_at = `${year}-${month}-${day} ${time.hour}:00`;

        const payload = {
            user_id: user?.id, 
            full_name: formData.fullName,
            phone: formData.phone,
            email: formData.email,
            scheduled_at: scheduled_at,
            barber_id: barber.id,
            service_id: service.id,
        };

        try {
            const res = await fetch('http://127.0.0.1:3333/appointments', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.message || "Falha ao agendar.");
            }

            toast.success(`Agendamento Confirmado! Seu horário com ${barber.name} foi reservado.`);

            onConfirm(time.hour);

        } catch (error) {
            console.error("Erro no agendamento:", error.message);
            toast.error(`Erro ao Agendar: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Card className="w-[380px] bg-secondary/40 shadow-md rounded-2xl border border-muted">
            <CardHeader className="text-center space-y-2">
                <CardTitle className="text-2xl font-bold">Confirmação</CardTitle>
                <CardDescription>
                    Preencha seus dados para finalizar o agendamento
                </CardDescription>
            </CardHeader>

            <CardContent>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="fullName">Nome Completo</Label>
                        <Input
                            id="fullName"
                            placeholder="Insira o seu nome completo"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="phone">WhatsApp</Label>
                        <Input
                            id="phone"
                            placeholder="(11) 99999-9999"
                            value={formData.phone}
                            onChange={handleChange}
                            maxLength={15}
                            required
                        />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="Insira o seu email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <CardFooter className="p-0 pt-4">
                        <Button
                            type="submit"
                            className="w-full cursor-pointer"
                            disabled={loading}
                        >
                            {loading ? "Processando..." : "Finalizar Agendamento"}
                        </Button>
                    </CardFooter>
                </form>
            </CardContent>
        </Card>
    );
}
