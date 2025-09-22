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

export default function Agendamento() {
    const [step, setStep] = useState(1);
    const [selectedService, setSelectedService] = useState(null);
    const [selectedBarber, setSelectedBarber] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);

    const steps = ["Serviço", "Barbeiro", "Data", "Horário", "Dados", "Finalizado"];

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
                    <div className="mb-4">
                        <button
                            onClick={goBack}
                            className="px-4 py-2 rounded-lg border cursor-pointer"
                        >
                            Voltar
                        </button>
                    </div>
                )}

                {step === 1 && (
                    <Chose
                        onSelect={(service) => {
                            setSelectedService(service);
                            setStep(2);
                        }}
                    />
                )}

                {step === 2 && (
                    <section className="mx-auto container">
                        <PricingCard
                            onSelect={(barber) => {
                                setSelectedBarber(barber);
                                setStep(3);
                            }}
                        />
                    </section>
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
                            Agendamento concluído com sucesso!
                        </h2>
                        <p className="mt-2 text-muted-foreground">
                            Você receberá a confirmação no seu WhatsApp em instantes.
                        </p>
                    </section>
                )}
            </main>

            <footer>
                <Footer05Page />
            </footer>
        </>
    );
}
