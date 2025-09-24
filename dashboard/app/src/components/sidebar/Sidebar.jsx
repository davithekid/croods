'use client';
import { useState } from "react";
import { LogOutIcon, HomeIcon, CalendarIcon, UsersIcon, MenuIcon, XIcon } from "lucide-react";
import { ModeToggle } from "../themes/button-theme";

const menuItems = [
    { title: "Dashboard", icon: HomeIcon, url: "/" },
    { title: "Agendamentos", icon: CalendarIcon, url: "/agendamentos" },
    { title: "Receitas", icon: UsersIcon, url: "/receitas" },
    { title: "Folgas", icon: UsersIcon, url: "/folgas" },
];

export default function Sidebar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <>
            <button
                className="fixed top-4 left-4 z-50 md:hidden p-2 rounded bg-white dark:bg-zinc-900 shadow"
                onClick={() => setMobileOpen(!mobileOpen)}
            >
                {mobileOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>

            <aside className="hidden md:flex h-screen w-64 bg-white dark:bg-zinc-900 border-r border-muted flex-col fixed">
                <div className="flex justify-between items-center p-6 text-2xl font-bold text-foreground dark:text-white">
                    <div className="block dark:hidden">
                        <img src="./logo-dark.svg" className="w-13" alt="" />
                    </div>
                    <div className="hidden dark:block">
                        <img src="./logo.svg" className="w-13" alt="" />
                    </div>
                    <ModeToggle />
                </div>



                <nav className="flex-1 px-4 space-y-2 mt-6">
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <a
                                key={item.title}
                                href={item.url}
                                className="flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                            >
                                <Icon className="w-6 h-6" />
                                <span>{item.title}</span>
                            </a>
                        );
                    })}
                </nav>

                <div className="px-4 pb-6">
                    <button className="w-full flex items-center p-3 rounded-lg text-base font-medium text-destructive hover:bg-destructive/10 transition-colors duration-200">
                        <LogOutIcon className="w-6 h-6 mr-3" />
                        Sair
                    </button>
                </div>
            </aside>

            <aside
                className={`fixed top-0 left-0 z-40 h-screen w-64 bg-white dark:bg-zinc-900 border-r border-muted flex flex-col transition-transform duration-300 md:hidden
          ${mobileOpen ? "translate-x-0 shadow-lg" : "-translate-x-full"}
        `}
            >
                <div className="p-6 text-2xl font-bold text-foreground dark:text-white">
                    Minha App
                </div>

                <nav className="flex-1 px-4 space-y-2 mt-6">
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <a
                                key={item.title}
                                href={item.url}
                                className="flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                                onClick={() => setMobileOpen(false)}
                            >
                                <Icon className="w-6 h-6" />
                                <span>{item.title}</span>
                            </a>
                        );
                    })}
                </nav>

                <div className="px-4 pb-6">
                    <button className="w-full flex items-center p-3 rounded-lg text-base font-medium text-destructive hover:bg-destructive/10 transition-colors duration-200">
                        <LogOutIcon className="w-6 h-6 mr-3" />
                        Sair
                    </button>
                </div>
            </aside>

            {mobileOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
                    onClick={() => setMobileOpen(false)}
                />
            )}
        </>
    );
}
