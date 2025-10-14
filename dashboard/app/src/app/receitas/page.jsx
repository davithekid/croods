import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import {
    SidebarInset,
    SidebarProvider,
} from "@/components/ui/sidebar"

import { ChartLineLinear } from "@/components/ui/shadcn-io/line-chart-03"
import { ChartPieLabel } from "@/components/ui/shadcn-io/pie-chart-03"
import ReceitaCards from "@/blocks/card-receita"

export default function Receitas() {
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
                        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 mx-4">
                            <ReceitaCards />
                            <div className="px-4 lg:px-6 grid grid-cols-1 lg:grid-cols-2 gap-5">
                                <ChartLineLinear />
                                <ChartPieLabel />
                            </div>
                        </div>
                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
}
