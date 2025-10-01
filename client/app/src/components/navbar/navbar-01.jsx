"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import { ModeToggle } from "../theme/button-theme";
import Link from "next/link";
import { AvatarDemo } from "../avatar/avatar";

const Navbar01Page = () => {
  const [user, setUser] = useState ();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setUser({ name: "Josue", avatar: "/avatar.png" });
    }
  }, []);

  return (
    <div className="bg-muted">
      <nav className="h-20 bg-background border-b">
        <div className="h-full flex items-center justify-between max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6 lg:px-8">
          <Logo />

          <NavMenu className="hidden md:block font-semibold" />

          <div className="flex items-center gap-3">
            {user ? (
              <>
                <div className="flex items-center gap-2">
                  <AvatarDemo />
                  <span className="hidden sm:inline font-medium">{user.name}</span>
                </div>
              </>
            ) : (
              <>
                <Button variant="outline" className="hidden sm:inline-flex">
                  <Link href="/login">Login</Link>
                </Button>
                <Button>
                  <Link href="/register">Registrar</Link>
                </Button>
              </>
            )}

            <ModeToggle />
            <div className="md:hidden">
              <NavigationSheet />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar01Page;
