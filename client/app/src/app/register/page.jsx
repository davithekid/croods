"use client";

import { Logo } from "@/components/logo";
import { ModeToggle } from "@/components/theme/button-theme";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8, "Password must be at least 8 characters long"),
});

const Register = () => {
    const form = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
        resolver: zodResolver(formSchema),
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="h-screen flex items-center justify-center">
            <div className="w-full h-full grid lg:grid-cols-2">
                <div
                    className="hidden lg:block border-l bg-cover bg-center"
                    style={{
                        backgroundImage: "url('https://illustrations.popsy.co/yellow/app-launch.svg')",
                        height: "100%",
                        width: "100%",
                    }}
                />
                <div className="max-w-xs m-auto w-full flex flex-col items-center">
                    <div className="flex items-center gap-8">

                    <div className="block dark:hidden">
                        <img src="./logo-dark.svg" className="w-13" alt="" />
                    </div>
                    <div className="hidden dark:block">
                        <img src="./logo.svg" className="w-13" alt="" />
                    </div>
                    <ModeToggle />
                    </div>
                    <p className="mt-4 text-xl font-semibold tracking-tight">
                        Seja um croods!
                    </p>


                    <Form {...form}>
                        <form className="w-full space-y-4 mt-6" onSubmit={form.handleSubmit(onSubmit)}>
                            <FormField
                                control={form.control}
                                name="nome"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Nome</FormLabel>
                                        <FormControl>
                                            <Input type="nome" placeholder="Insira o seu nome" className="w-full" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )} />
                            <FormField
                                control={form.control}
                                name="cpf"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>CPF</FormLabel>
                                        <FormControl>
                                            <Input type="cpf" placeholder="***.***.***-**" className="w-full" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )} />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input type="email" placeholder="Email" className="w-full" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )} />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Senha</FormLabel>
                                        <FormControl>
                                            <Input type="password" placeholder="******" className="w-full" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )} />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Confirme sua senha</FormLabel>
                                        <FormControl>
                                            <Input type="password" placeholder="******" className="w-full" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )} />
                            <Button type="submit" className="mt-4 w-full">
                                Registrar
                            </Button>
                        </form>
                    </Form>

                    <div className="mt-5 space-y-5">
                        <p className="text-sm text-center">
                            Já possui uma conta?
                            <Link href="/login" className="ml-1 underline text-muted-foreground">
                                Login
                            </Link>
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Register;
