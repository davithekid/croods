import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import { ModeToggle } from "./themes/button-theme";

const items = [
    { title: "Dashboard Principal", url: "/", icon: Home },
    { title: "Agendamentos", url: "/agendamentos", icon: Inbox },
    { title: "Receitas", url: "/receitas", icon: Calendar },
    { title: "Folgas", url: "/folgas", icon: Search },
];

export function AppSidebar() {
    return (
        <Sidebar className="w-64 bg-white dark:bg-zinc-900 border-r border-muted">
            <SidebarContent className="px-4 py-6">
                <SidebarGroup>
                    <div className="flex justify-between items-center mb-4">
                        <SidebarGroupLabel className="text-lg font-semibold text-foreground">
                            <div className="block dark:hidden">
                                <img src="./logo-dark.svg" className="w-15" alt="" />
                            </div>
                            <div className="hidden dark:block">
                                <img src="./logo.svg" className="w-15" alt="" />
                            </div>
                        </SidebarGroupLabel>
                        <ModeToggle />
                    </div>

                    <SidebarGroupContent>
                        <SidebarMenu className="space-y-2 my-4">
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a
                                            href={item.url}
                                            className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                                        >
                                            <item.icon className="w-5 h-5" />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
}
