"use client"

import * as React from "react"
import Link from "next/link"
import {
  IconDashboard,
  IconChartBar,
  IconFolder,
  IconUsers,
} from "@tabler/icons-react"

import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import { NavUser } from "@/components/nav-user"
import { ModeToggle } from "./themes/button-theme"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    { title: "Dashboard", url: "/", icon: IconDashboard },
    { title: "Receitas", url: "/receitas", icon: IconChartBar },
    { title: "Folgas", url: "/folgas", icon: IconFolder },
    { title: "Suporte", url: "/suporte", icon: IconUsers },
  ],
}

export function AppSidebar(props) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      {/* HEADER */}
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="data-[slot=sidebar-menu-button]">
              <div className="flex justify-between items-center py-8 text-2xl font-bold text-foreground dark:text-white">
                <div className="block dark:hidden">
                  <img src="./logo-dark.svg" className="w-13" alt="Logo Dark" />
                </div>
                <div className="hidden dark:block">
                  <img src="./logo.svg" className="w-13" alt="Logo Light" />
                </div>
                <ModeToggle />
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      {/* CONTENT */}
      <SidebarContent>
        <SidebarMenu>
          {data.navMain.map((item) => (
            <SidebarMenuItem key={item.url}>
              <Link
                href={item.url}
                className="flex items-center gap-2 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <item.icon className="w-5 h-5" />
                <span>{item.title}</span>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>

      {/* FOOTER */}
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
