"use client";
import React, {useState} from "react";
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
import { Separator } from "@/components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
const formSchema = z.object({
  email: z.string().email('O e-mail fornecido é inválido'),
  password: z.string().min(6, "A senha deve conter no mínimo 6 caracteres."),
});
const Login01Page = () => {
  const [serverError, setServerError] = useState(null);
  const [isLoading, setIsLoading] = useState(false)

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
    formData.append('password', data.password)

    const result = await handleLogin(null, formData);

    if(result && result.error) {
      setServerError(result.error);
      setIsLoading(false);
      form.setError('email', {type: 'server', message: 'Credenciais inválidas'})
      form.setError('password', {type: 'server', message: 'Credenciais inválidas'})
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
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="email@exempl.com"
                      className="w-full"
                      {...field}
                    />
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
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="******"
                      className="w-full"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="mt-4 w-full" disable={isLoading || !form.formState.isValid}>
              {isLoading ? 'Entrando...' : 'Entrar'}
            </Button>
          </form>
        </Form>
        <div className="mt-5 space-y-5">
          <Link
            href="#"
            className="text-sm block underline text-muted-foreground text-center"
          >
            Esqueceu sua senha?
          </Link>
          <p className="text-sm text-center">
            Não possui uma conta?
            <Link href="#" className="ml-1 underline text-muted-foreground">
              Registre-se
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Login01Page;