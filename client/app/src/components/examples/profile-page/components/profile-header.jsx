'use client';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Camera, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { logoutAction } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import EditProfile from "@/components/edit-profile/EditProfile";

export default function ProfileHeader() {
  const [user, setUser] = useState(null);

  // Função que será passada para o EditProfile e atualiza o estado
  const handleUserUpdate = (updatedUser) => {
    setUser(updatedUser); // AQUI A MÁGICA ACONTECE: O estado é atualizado!
  };

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch("http://localhost:3333/auth/me", {
          credentials: "include",
          cache: "no-store",
        });
        if (res.ok) {
          const data = await res.json();
          setUser(data.user);
        }
      } catch (error) {
        console.error("Erro ao buscar perfil:", error);
      }
    }
    fetchUser();
  }, []);

  async function handleLogout() {
    await logoutAction();
  }

  if (!user) return <p>Carregando...</p>;

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center">
          <div className="relative">
            <Avatar className="h-24 w-24">
              <AvatarImage
                src={user.avatar || "https://bundui-images.netlify.app/avatars/08.png"}
                alt={user.name}
              />
              <AvatarFallback className="text-2xl">
                {user.name ? user.name[0] : "?"}
              </AvatarFallback>
            </Avatar>
            <Button
              size="icon"
              variant="outline"
              className="absolute -right-2 -bottom-2 h-8 w-8 rounded-full"
            >
              <Camera />
            </Button>
          </div>

          <div className="flex-1 space-y-2">
            <div className="flex flex-col gap-2 md:flex-row md:items-center">
              <h1 className="text-2xl font-bold">{user.name}</h1>
            </div>
            <div className="text-muted-foreground flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-1">
                <Mail className="size-4" />
                {user.email}
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <EditProfile
              user={user}
              onUpdate={handleUserUpdate} 
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}