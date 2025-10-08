'use client';

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import { ModeToggle } from "../theme/button-theme";
import Link from "next/link";
import { AvatarDemo } from "../avatar/avatar";

const Navbar01Page = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch("http://localhost:3333/auth/me", {
          credentials: "include",
          cache: "no-store",
        });
        const data = await res.json();
        setUser(data.user);
      } catch (err) {
        console.error("Erro ao buscar usuário:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, []);

  return (
    <div className="bg-muted">
      <nav className="h-20 bg-background border-b">
        <div className="h-full flex items-center justify-between max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6 lg:px-8">
          <Logo />

          <NavMenu className="hidden md:block font-semibold" />

          <div className="flex items-center gap-3">
            {loading ? null : user ? (
              <div className="flex items-center gap-2 ">
                <ModeToggle/>

                <AvatarDemo src={user.avatar}/>
              </div>
            ) : (
              <>
                <ModeToggle />

                <Button variant="outline" className="hidden sm:inline-flex">
                  <Link href="/login">Login</Link>
                </Button>
                <Button>
                  <Link href="/register">Registrar</Link>
                </Button>
              </>
            )}

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
