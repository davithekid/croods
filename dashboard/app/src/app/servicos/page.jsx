import { PricingTable } from "@/blocks/pricing";
import { ServicesTablePage } from "@/blocks/services";
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import {
    SidebarInset,
    SidebarProvider,
} from "@/components/ui/sidebar"

export default function Servicos() {
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
                    <div className="@container/main flex flex-1 flex-col gap-2 py-6">
                        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tighter flex justify-center">
                            Serviços
                        </h1>
                        <p className="text-muted-foreground flex justify-center">
                            Gerencie seus serviços.
                        </p>
                        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                            <ServicesTablePage />
                            <PricingTable />
                            <div className="px-4 lg:px-6 flex justify-center gap-5">
                            </div>
                        </div>
                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
}
