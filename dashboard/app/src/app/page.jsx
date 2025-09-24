import Sidebar from "@/components/sidebar/Sidebar";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-6 ml-64 flex justify-center">
        <div className="w-full max-w-4xl">
          <h1 className="text-3xl font-bold text-center mb-4">Hello World</h1>
          <p className="text-center">Aqui vai o conteúdo centralizado no espaço restante</p>
        </div>
      </main>
    </div>
  );
}
