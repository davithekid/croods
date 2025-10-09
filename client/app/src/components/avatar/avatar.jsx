'use client';

import { logoutAction } from "@/lib/auth"; 
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function AvatarDemo({ user }) {
  async function handleLogout() {
    await logoutAction();
  }

  return (
    <div className="flex flex-row flex-wrap items-center gap-12">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="p-0 rounded-full w-12 h-12">
            <Avatar className="w-12 h-12">
              <AvatarImage src={user?.avatar || "https://github.com/shadcn.png"} alt={user?.name} className={'cursor-pointer'} />
              <AvatarFallback>{user?.name?.[0] || "?"}</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="start">
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Link href='/perfil' className="cursor-pointer">Perfil e Agendamentos</Link>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleLogout} >
              <p className="cursor-pointer">
              Sair
              </p>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
