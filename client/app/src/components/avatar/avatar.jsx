import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function AvatarDemo() {
  return (
    <div className="flex flex-row flex-wrap items-center gap-12">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="p-0 rounded-full w-12 h-12 cursor-pointer">
            <Avatar className="w-12 h-12">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="start">
          <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
          <DropdownMenuGroup>
            <DropdownMenuItem>
                <Link href='/perfil'>Perfil</Link>
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
                <Link href='/meus-agendamentos'>Meus Agendamentos</Link>
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Sair
              <DropdownMenuShortcut>⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
