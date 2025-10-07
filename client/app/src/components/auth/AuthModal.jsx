"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function AuthModal() {
  const searchParams = useSearchParams();
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (searchParams.get("authError") === "login-required") {
      setOpen(true);
    }
  }, [searchParams]);

  const handleLoginClick = () => {
    setOpen(false);       
    router.push("/login"); 
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Acesso restrito ⚠️</DialogTitle>
          <DialogDescription>
            Você precisa estar logado para acessar esta página.
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-end mt-4">
          <Button onClick={handleLoginClick}>Fazer login</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
