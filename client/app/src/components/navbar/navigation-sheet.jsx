"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Menu } from "lucide-react";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";

export const NavigationSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu />
        </Button>
      </SheetTrigger>

      <SheetContent className="px-6 py-3">
        <SheetTitle>
          <VisuallyHidden>Menu de Navegação</VisuallyHidden>
        </SheetTitle>

        <Logo />
        <NavMenu orientation="vertical" className="mt-6 [&>div]:h-full" />
      </SheetContent>
    </Sheet>
  );
};
