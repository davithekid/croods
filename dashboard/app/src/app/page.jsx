import DashboardCards from "@/blocks/card-index";
import CardAgendamentosHoje from "@/blocks/card-scheduling-today";
import CardServicosMais from "@/blocks/card-services";
import Sidebar from "@/components/sidebar/Sidebar";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-6 md:ml-64 flex justify-center ">
        <div className="w-full flex flex-col gap-6 bg-zinc-100 lg:dark:bg-zinc-900 lg:rounded-2xl lg:p-6">
          <h1 className="text-5xl sm:text-6xl font-semibold tracking-tighter">
            Dashboard Administrativa
          </h1>
          <p className="mb-6 text-muted-foreground">
            Gerencie o seu negócio da melhor maneira.
          </p>

          <DashboardCards />

          <div className="grid gap-6 md:grid-cols-2">
            <CardAgendamentosHoje />
            <CardServicosMais />
          </div>
        </div>
      </main>
    </div>
  );
}
