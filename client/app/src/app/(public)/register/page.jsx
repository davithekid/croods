'use client';

import React, { useState } from "react";
import { handleRegister } from "@/lib/auth"; 
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
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z
  .object({
    nome: z.string().min(3, "O nome deve ter no mínimo 3 caracteres."),
    cpf: z.string().regex(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, "CPF inválido."),
    email: z.string().email("O e-mail fornecido é inválido."),
    password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres."),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem.",
    path: ["confirmPassword"],
  });

function formatCPF(value) {
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d{3})(\d)/, "$1.$2");
  value = value.replace(/(\d{3})(\d)/, "$1.$2");
  value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  return value;
}

export default function RegisterPage() {
  const [serverError, setServerError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    defaultValues: { nome: "", cpf: "", email: "", password: "", confirmPassword: "" },
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    setServerError(null);

    const result = await handleRegister(null, {
      name: data.nome, 
      cpf: data.cpf,
      email: data.email,
      password: data.password,
    });

    if (result?.error) {
      setServerError(result.error);
      setIsLoading(false);
      return;   
    }

    window.location.href = "/login";
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-full h-full grid lg:grid-cols-2">
        <div className="max-w-xs m-auto w-full flex flex-col items-center order-2 lg:order-2">
          <div className="flex items-center gap-8">
            <div className="block dark:hidden">
              <img src="./logo-dark.svg" className="w-13" alt="Logo" />
            </div>
            <div className="hidden dark:block">
              <img src="./logo.svg" className="w-13" alt="Logo" />
            </div>
            <ModeToggle />
          </div>

          <p className="mt-4 text-xl font-semibold tracking-tight">Crie sua conta Croods</p>

          <Form {...form}>
            <form className="w-full space-y-4 mt-6" onSubmit={form.handleSubmit(onSubmit)}>
              {serverError && (
                <div className="bg-red-500/10 border border-red-500 text-red-700 dark:text-red-400 p-3 rounded-lg text-sm text-center">
                  {serverError}
                </div>
              )}

              <FormField control={form.control} name="nome" render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input placeholder="Seu nome completo" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <FormField control={form.control} name="cpf" render={({ field }) => (
                <FormItem>
                  <FormLabel>CPF</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="000.000.000-00"
                      value={field.value}
                      onChange={e => field.onChange(formatCPF(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <FormField control={form.control} name="email" render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="email@exemplo.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <FormField control={form.control} name="password" render={({ field }) => (
                <FormItem>
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="******" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <FormField control={form.control} name="confirmPassword" render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirme sua senha</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="******" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <Button type="submit" className="mt-4 w-full" disabled={isLoading || !form.formState.isValid}>
                {isLoading ? "Registrando..." : "Registrar"}
              </Button>
            </form>
          </Form>

          <div className="mt-5 space-y-5">
            <p className="text-sm text-center">
              Já possui uma conta?
              <Link href="/login" className="ml-1 underline text-muted-foreground">Login</Link>
            </p>
          </div>
        </div>

        <div
          className="hidden lg:block border-r bg-cover bg-center order-1 lg:order-1"
          style={{
            backgroundImage: "url('https://illustrations.popsy.co/yellow/app-launch.svg')",
            height: "100%",
            width: "100%",
          }}
        />
      </div>
    </div>
  );
}
