"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export function Confirm({ onClose, clientName, whatsapp, service, barber, date, time, total }) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Confirmar agendamento</Button>
      </AlertDialogTrigger>

      <AlertDialogContent className="rounded-2xl">
        <AlertDialogHeader className="space-y-4 text-center">
          <AlertDialogTitle className="text-2xl font-bold text-green-600">
            Agendamento Confirmado!
          </AlertDialogTitle>
          <AlertDialogDescription className="text-base">
            Seu horário foi confirmado com sucesso.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <div className="space-y-2 py-4 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Cliente:</span>
            <span className="font-medium">{clientName}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Whatsapp:</span>
            <span className="font-medium">{whatsapp}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Serviço:</span>
            <span className="font-medium">{service}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Barbeiro:</span>
            <span className="font-medium">{barber}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Data:</span>
            <span className="font-medium">{date}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Horário:</span>
            <span className="font-medium">{time}</span>
          </div>
          <div className="flex justify-between border-t pt-2">
            <span className="text-muted-foreground">Total:</span>
            <span className="font-semibold">{total}</span>
          </div>
        </div>

        <AlertDialogDescription className="text-center text-sm font-medium text-yellow-600">
          Chegue 10 minutos antes do seu horário
        </AlertDialogDescription>

        <AlertDialogFooter>
          <AlertDialogAction
            className="w-full rounded-xl"
            onClick={onClose} // chama a função passada pelo pai
          >
            Fechar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
