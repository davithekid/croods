"use client";
import React, { useState } from "react";
import { handleRegister } from "../../../lib/auth";
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
import { toast } from "sonner";
const formSchema = z.object({
  nome: z.string().min(3, 'O nome deve conter no mínmo 3 caracteres'),
  cpf: z.string().min(3).regex(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, "CPF inválido."),
  email: z.string().email('O e-mail fornecido é inválido'),
  password: z.string().min(6, "A senha deve conter no mínimo 6 caracteres."),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'As senhas não coincidem.',
  path: ['confirmPassword']
})

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

    try {
      const res = await fetch("http://127.0.0.1:3333/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.nome,
          cpf: data.cpf,
          email: data.email,
          password: data.password,
          role: "user",
        }),
      });

      const result = await res.json();

      if (!res.ok) {
        toast.error(result.message || "Erro ao registrar");
        setIsLoading(false);
        return;
      }

      toast.success("Usuário registrado com sucesso!");
      window.location.href = "/login";
    } catch (err) {
      console.error(err);
      toast.error("Erro no servidor. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-xs w-full flex flex-col items-center">
        <div className="flex items-center gap-8">
          <div className="block dark:hidden">
            <img src="./logo-dark.svg" className="w-13" alt="Logo" />
          </div>
          <div className="hidden dark:block">
            <img src="./logo.svg" className="w-13" alt="Logo" />
          </div>
          <ModeToggle />
        </div>
        <p className="mt-4 text-xl font-semibold tracking-tight">
          Entre com sua conta croods!
        </p>

        <div className="my-7 w-full flex items-center justify-center overflow-hidden">
          <Separator />
        </div>
        <Form {...form}>
          <form
            className="w-full space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
            {serverError && (
              toast.error(serverError)
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
            <Button
              type="submit"
              className="mt-4 w-full"
              disabled={isLoading || !form.formState.isValid}
            >
              {isLoading ? "Registrando..." : "Registrar"}
            </Button>

          </form>
        </Form>
        <div className="mt-5 space-y-5">
          <p className="text-sm text-center">
            Já possui uma conta?
            <Link href="/login" className="ml-1 underline text-muted-foreground">
              Entrar com sua conta
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};