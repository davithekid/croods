"use client";

import * as React from "react";
import Link from "next/link";
import {
  IconLayoutDashboard,
  IconReceipt,
  IconTools,
  IconCalendar,
  IconHeadset,
} from "@tabler/icons-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavUser } from "@/components/nav-user";
import { ModeToggle } from "./themes/button-theme";

const data = {
  user: {
    name: "Davi Chagas",
    email: "davi@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    { title: "Dashboard", url: "/", icon: IconLayoutDashboard },
    { title: "Receitas", url: "/receitas", icon: IconReceipt },
    { title: "Serviços", url: "/servicos", icon: IconTools },
    { title: "Agenda & Folgas", url: "/folgas", icon: IconCalendar },
    { title: "Suporte", url: "/suporte", icon: IconHeadset },
  ],
};

export function AppSidebar(props) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <div className="flex justify-between items-center py-6 px-4 text-2xl font-bold text-foreground dark:text-white">
                <div className="flex items-center gap-2">
                  <div className="block dark:hidden">
                    <img src="/logo-dark.svg" className="w-14" alt="Logo Dark" />
                  </div>
                  <div className="hidden dark:block">
                    <img src="/logo.svg" className="w-14" alt="Logo Light" />
                  </div>
                </div>
                <ModeToggle />
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarMenu className="mt-4">
          {data.navMain.map((item) => (
            <SidebarMenuItem key={item.url}>
              <Link
                href={item.url}
                className="
                  flex items-center gap-3 px-4 py-2 rounded-lg
                  text-gray-700 dark:text-gray-200
                  hover:bg-gray-200 dark:hover:bg-gray-700
                  transition-colors duration-200
                "
              >
                <item.icon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                <span className="font-medium">{item.title}</span>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter className="mt-auto px-4 py-4 border-t border-gray-200 dark:border-gray-700">
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
