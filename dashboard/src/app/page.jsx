import CardStats from "@/blocks/card-main";

export default function Home() {
  return (
    <>
    <div className="max-w-full">

      <main className="flex justify-center ">
        <h1>Dashboard Administrativa</h1>
      </main>
      <main>
        <CardStats />
      </main>
    </div>
    </>
  );
}
