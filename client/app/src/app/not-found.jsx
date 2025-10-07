"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex h-screen items-center justify-center">
      <Card className="w-full max-w-md text-center shadow-lg">
        <CardHeader>
          <CardTitle className="text-6xl">404</CardTitle>
          <CardDescription className="text-lg">
            Ops! A página que você está procurando não existe.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button variant="default" onClick={() => router.push("/")}>
            Voltar
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
