"use client";
import { useState } from "react";
import Chose from "@/blocks/chose";
import PricingCard from "@/blocks/chose-card";
import DateCard from "@/blocks/chose-date";
import TimeCard from "@/blocks/chose-time";
import CardDadosAgendamento from "@/blocks/data-scheduling";
import CardConfirmaAgendamento from "@/blocks/finalize-scheduling";
import Footer05Page from "@/components/footer/footer-05";
import Navbar01Page from "@/components/navbar/navbar-01";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Agendamento() {
    const [step, setStep] = useState(1);
    const [selectedService, setSelectedService] = useState(null);
    const [selectedBarber, setSelectedBarber] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);

    const steps = ["Barbeiro", "Serviço", "Data", "Horário", "Dados", "Finalizado"];

    const goBack = () => {
        if (step > 1) setStep(step - 1);
    };

    return (
        <>
            <header>
                <Navbar01Page />
            </header>

            <main className="mx-auto container py-6">
                {/* barra de progresso */}
                <div className="flex items-center justify-center gap-4 mb-8">
                    {steps.map((label, index) => {
                        const current = index + 1;
                        return (
                            <div
                                key={index}
                                className={`flex items-center gap-2 ${step >= current ? "text-primary font-semibold" : "text-muted-foreground"
                                    }`}
                            >
                                <div
                                    className={`h-8 w-8 flex items-center justify-center rounded-full border-2 ${step >= current ? " border-primary" : "border-muted-foreground"
                                        }`}
                                >
                                    {current}
                                </div>
                                <span className="hidden sm:inline text-sm">{label}</span>
                                {index < steps.length - 1 && <div className="w-10 h-[2px] bg-muted-foreground/30"></div>}
                            </div>
                        );
                    })}
                </div>

                {step > 1 && (
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
                {step === 1 && (
                    <section className="mx-auto container">
                        <PricingCard
                            onSelect={(barber) => {
                                setSelectedBarber(barber);
                                setStep(2);
                            }}
                        />
                    </section>
                )}
                {step === 2 && (
                    <Chose
                        onSelect={(service) => {
                            setSelectedService(service);
                            setStep(3);
                        }}
                    />
                )}


                {step === 3 && (
                    <section>
                        <DateCard
                            onConfirm={(date) => {
                                setSelectedDate(date);
                                setStep(4);
                            }}
                        />
                    </section>
                )}

                {step === 4 && (
                    <section>
                        <TimeCard
                            onConfirm={(time) => {
                                setSelectedTime(time);
                                setStep(5);
                            }}
                        />
                    </section>
                )}

                {step === 5 && (
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
                            onConfirm={() => setStep(6)}
                        />
                    </section>
                )}

                {step === 6 && (
                    <section className="text-center py-10">
                        <h2 className="text-2xl font-bold text-green-600">
                            Agendamento confirmado!
                        </h2>
                        <p className="mt-2 text-muted-foreground">
                            Seu horário foi reservado com sucesso. Checar na sua aba perfil o status do agendamento
                        </p>

                        <Button className={'mt-5'}>
                            <Link href='/perfil'>
                                Visualizar agendamento e status
                            </Link>
                        </Button>
                    </section>
                )}
            </main>

            <footer>
                <Footer05Page />
            </footer>
        </>
    );
}
