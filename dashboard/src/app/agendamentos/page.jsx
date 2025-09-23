import TableScheduling from "@/blocks/table-scheduling";

export default function Agendamentos() {
  return (
    <div className="max-w-full px-6 md:px-12">
      <header className="text-center my-4">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tighter">
          Agendamentos
        </h1>
      </header>

      <main className="w-full">
        <TableScheduling className="w-full" />
      </main>
    </div>
  );
}
