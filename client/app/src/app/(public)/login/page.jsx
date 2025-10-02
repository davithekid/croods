"use client";
import React, { useState } from 'react'; 
import { handleLogin } from "../../../lib/auth"; 

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

const formSchema = z.object({
  email: z.string().email("O e-mail fornecido é inválido."),
  password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres."),
});

const Login03Page = () => {
  const [serverError, setServerError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    setServerError(null); 

    const formData = new FormData();
    formData.append('email', data.email);
    formData.append('password', data.password);

    const result = await handleLogin(null, formData);

    if (result && result.error) {
      setServerError(result.error);
      setIsLoading(false);
      form.setError("email", { type: "server", message: "Credenciais incorretas." });
      form.setError("password", { type: "server", message: "Credenciais incorretas." });
    }
    
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-full h-full grid lg:grid-cols-2">
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
            Bem-vindo aos Croods!
          </p>
          <Form {...form}>
            <form className="w-full space-y-4 mt-6" onSubmit={form.handleSubmit(onSubmit)}>
              {serverError && (
                <div className="bg-red-500/10 border border-red-500 text-red-700 dark:text-red-400 p-3 rounded-lg text-sm text-center">
                  {serverError}
                </div>
              )}

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="email@exemplo.com" className="w-full" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Senha</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="******" className="w-full" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              <Button type="submit" className="mt-4 w-full" disabled={isLoading || !form.formState.isValid}>
                {isLoading ? "Entrando..." : "Login"}
              </Button>
            </form>
          </Form>

          <div className="mt-5 space-y-5">
            <Link
              href="#"
              className="text-sm block underline text-muted-foreground text-center">
              Esqueceu sua senha?
            </Link>
            <p className="text-sm text-center">
              Não possui uma conta?
              <Link href="/register" className="ml-1 underline text-muted-foreground">
                Criar conta
              </Link>
            </p>
          </div>
        </div>
        <div
          className="hidden lg:block border-l bg-cover bg-center"
          style={{
            backgroundImage: "url('https://illustrations.popsy.co/yellow/app-launch.svg')",
            height: "100%",
            width: "100%",
          }}
        />
      </div>
    </div>
  );
};

export default Login03Page;
