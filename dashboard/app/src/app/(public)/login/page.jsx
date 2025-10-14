'use client'

import React, { useState, useEffect } from "react";
import { Logo } from "@/components/logo";
import { ModeToggle } from "@/components/themes/button-theme";
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
import { useForm } from "react-hook-form";
import { z } from "zod";
import { handleLogin } from "@/lib/auth";
import { toast } from "sonner";

const formSchema = z.object({
  email: z.string().email("Digite um e-mail válido"),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
});

const Login02Page = () => {
  const [serverError, setServerError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    defaultValues: { email: "", password: "" },
    resolver: zodResolver(formSchema),
  });

  useEffect(() => {
    if (serverError) toast.error(serverError);
  }, [serverError]);

  const onSubmit = async (data) => {
    setIsLoading(true);
    setServerError(null);

    const result = await handleLogin({ email: data.email, password: data.password });

    if (result?.error) {
      setServerError(result.error);
      setIsLoading(false);
      form.setError("email", { type: "server", message: "Credenciais inválidas" });
      form.setError("password", { type: "server", message: "Credenciais inválidas" });
      return;
    }

    setIsLoading(false);
    toast.success("Login efetuado com sucesso!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted">
      <div className="max-w-sm w-full flex flex-col items-center border rounded-lg px-6 py-8 shadow-sm/5 bg-card">
        <div className="flex flex-col gap-5 items-center">
          <div className="flex items-center gap-8">
            <Logo className="h-9 w-9" />
            <ModeToggle />
          </div>
        </div>

        <p className="mt-4 text-xl font-semibold tracking-tight">
          Acesso ao Sistema
        </p>
        <p className="mt-1 text-sm opacity-80 tracking-tight">
          Entre com suas credenciais
        </p>

        <Form {...form}>
          <form className="w-full space-y-4 mt-12" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="seuemail@gmail.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="******" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="mt-4 w-full" disabled={isLoading || !form.formState.isValid}>
              {isLoading ? "Entrando..." : "Entrar"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Login02Page;
