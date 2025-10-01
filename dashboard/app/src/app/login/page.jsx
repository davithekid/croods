"use client";

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
import { Separator } from "@/components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

const Login02Page = () => {
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
    <div className="min-h-screen flex items-center justify-center bg-muted">
      <div
        className="max-w-sm w-full flex flex-col items-center border rounded-lg px-6 py-8 shadow-sm/5 bg-card">
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
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input type="username" placeholder="Username" className="w-full" {...field} />
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
                    <Input type="password" placeholder="Password" className="w-full" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />
            <Button type="submit" className="mt-4 w-full">
              <Link href='/'> Entrar</Link>
            </Button>
          </form>
        </Form>

      </div>
    </div>
  );
};

export default Login02Page;
