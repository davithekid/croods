"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Chose from "@/blocks/chose-service";
import PricingCard from "@/blocks/chose-barber";
import DateCard from "@/blocks/chose-date";
import TimeCard from "@/blocks/chose-time";
import CardDadosAgendamento from "@/blocks/data-appointment";
import CardConfirmaAgendamento from "@/blocks/final-appointment";
import Footer05Page from "@/components/footer/footer-05";
import Navbar01Page from "@/components/navbar/navbar-01";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import Link from "next/link";

export default function Agendamento() {
    const [step, setStep] = useState(1);
    const [selectedService, setSelectedService] = useState(null);
    const [selectedBarber, setSelectedBarber] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [loggedUser, setLoggedUser] = useState(null);
    const [hasAppointment, setHasAppointment] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const router = useRouter();

    useEffect(() => {
        async function fetchUser() {
            try {
                const res = await fetch("http://localhost:3333/auth/me", {
                    credentials: "include",
                    cache: "no-store",
                });
                if (res.ok) {
                    const data = await res.json();
                    setLoggedUser(data.user);
                }
            } catch (err) {
                console.error("Erro ao buscar usuário logado:", err);
            }
        }
        fetchUser();
    }, []);

    useEffect(() => {
        async function checkAppointment() {
            if (!loggedUser) return;

            try {
                const res = await fetch(
                    `http://localhost:3333/appointments/user/${loggedUser.id}/active`,
                    {
                        credentials: "include",
                        cache: "no-store",
                    }
                );
                if (res.ok) {
                    const data = await res.json();
                    if (Array.isArray(data) && data.length > 0) {
                        setHasAppointment(true);
                        setModalOpen(true);
                    }
                }
            } catch (err) {
                console.error("Erro ao verificar agendamento ativo:", err);
            }
        }

        checkAppointment();
    }, [loggedUser]);


    const steps = ["Barbeiro", "Serviço", "Data", "Horário", "Dados", "Finalizado"];

    const goBack = () => {
        if (step > 1) setStep(step - 1);
    };

    const handleGoToProfile = () => {
        setModalOpen(false);
        router.push("/perfil");
    };

    return (
        <>
            <header>
                <Navbar01Page />
            </header>

            <main className="mx-auto container py-6">
                <div className="flex sm:flex-row items-center justify-center gap-4 mb-8">
                    {steps.map((label, index) => {
                        const current = index + 1;
                        return (
                            <div
                                key={index}
                                className={`flex items-center gap-2 ${step >= current ? "text-primary font-semibold" : "text-muted-foreground"
                                    }`}
                            >
                                <div
                                    className={`h-8 w-8 flex items-center justify-center rounded-full border-2 ${step >= current ? "border-primary" : "border-muted-foreground"
                                        }`}
                                >
                                    {current}
                                </div>
                                <span className="hidden sm:inline text-sm">{label}</span>
                                {index < steps.length - 1 && (
                                    <div className="hidden sm:block flex-1 h-[2px] bg-muted-foreground/30"></div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {!hasAppointment && step > 1 && step < 6 && (
                    <div className="mb-6 flex justify-start">
                        <Button
                            onClick={goBack}
                            variant="outline"
                            className="flex items-center gap-2 rounded-full transition hover:shadow-md"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Voltar
                        </Button>
                    </div>
                )}

                {step === 1 && !hasAppointment && (
                    <section className="mx-auto container">
                        <PricingCard
                            onSelect={(barber) => {
                                setSelectedBarber(barber);
                                setStep(2);
                            }}
                        />
                    </section>
                )}

                {step === 2 && !hasAppointment && (
                    <Chose
                        barberId={selectedBarber?.id}
                        onSelect={(service) => {
                            setSelectedService(service);
                            setStep(3);
                        }}
                    />
                )}

                {step === 3 && !hasAppointment && (
                    <section>
                        <DateCard
                            barber={selectedBarber}
                            service={selectedService}
                            onConfirm={(date) => {
                                setSelectedDate(date);
                                setStep(4);
                            }}
                        />
                    </section>
                )}

                {step === 4 && !hasAppointment && (
                    <TimeCard
                        selectedDate={selectedDate}
                        selectedBarber={selectedBarber}
                        onConfirm={(time) => {
                            setSelectedTime(time);
                            setStep(5);
                        }}
                    />
                )}

                {step === 5 && !hasAppointment && (
                    <section className="mx-auto container flex flex-col md:flex-row justify-center gap-8">
                        <CardDadosAgendamento
                            service={selectedService}
                            barber={selectedBarber}
                            date={selectedDate}
                            time={selectedTime}
                        />

                        <CardConfirmaAgendamento
                            service={selectedService}
                            barber={selectedBarber}
                            date={selectedDate}
                            time={selectedTime}
                            user={loggedUser}
                            onConfirm={() => setStep(6)}
                        />
                    </section>
                )}

                {step === 6 && (
                    <section className="text-center py-10">
                        <h2 className="text-2xl font-bold text-green-600">Agendamento confirmado!</h2>
                        <p className="mt-2 text-muted-foreground">
                            Seu horário foi reservado com sucesso. Checar na sua aba perfil o status do agendamento
                        </p>

                        <Button className={"mt-5"}>
                            <Link href="/perfil">Visualizar agendamento e status</Link>
                        </Button>
                    </section>
                )}
            </main>

            <footer>
                <Footer05Page />
            </footer>

            <Dialog open={modalOpen} onOpenChange={setModalOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Agendamento já existe</DialogTitle>
                        <DialogDescription>
                            Você já possui um agendamento ativo e não pode marcar outro.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="flex justify-end mt-4">
                        <Button onClick={handleGoToProfile}>Ir para meu perfil</Button>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
}
