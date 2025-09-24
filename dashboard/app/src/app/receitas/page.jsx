import CardsIncome from "@/blocks/card-income";
import Sidebar from "@/components/sidebar/Sidebar";
import { ChartLineLinear } from "@/components/ui/shadcn-io/line-chart-03";
import { ChartPieLabel } from "@/components/ui/shadcn-io/pie-chart-03";

export default function Agendamentos() {
    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <main className="flex-1 p-6 md:ml-64 flex justify-center ">
                <div className="w-full flex flex-col gap-6 bg-zinc-100 lg:dark:bg-zinc-900 lg:rounded-2xl lg:p-6">
                    <h1 className="text-5xl sm:text-6xl font-semibold tracking-tighter">
                        Dashboard Receitas
                    </h1>
                    <p className="mb-6 text-muted-foreground">
                        Gerencie suas receitas
                    </p>
                    <CardsIncome />
                    <div className="grid gap-6 md:grid-cols-2">
                        <ChartLineLinear />
                        <ChartPieLabel />
                    </div>
                </div>
            </main>
        </div>
    );
}
