import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import {
    SidebarInset,
    SidebarProvider,
} from "@/components/ui/sidebar"
import MessageTable from "@/blocks/support"

export default function Suporte() {
    return (
        <SidebarProvider
            style={
                {
                    "--sidebar-width": "calc(var(--spacing) * 72)",
                    "--header-height": "calc(var(--spacing) * 12)"
                }
            }>
            <AppSidebar variant="inset" />
            <SidebarInset>
                <SiteHeader />
                <div className="flex flex-1 flex-col">
                    <div className="@container/main flex flex-1 flex-col gap-2">
                        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                            <div className="">
                            <h1 className="text-5xl sm:text-6xl font-semibold tracking-tighter flex justify-center">
                                Suporte
                            </h1>
                                
                            <p className="mb-6 text-muted-foreground flex justify-center py-2">
                                Gerencie e responda as dúvidas de seus clientes.
                            </p>
                            </div>
                            <div className="px-4 lg:px-6 flex justify-center gap-5">
                                <MessageTable />
                            </div>
                        </div>
                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
}
