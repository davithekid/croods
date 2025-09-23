import CardIncome from "@/blocks/card-income";

export default function Home() {
  return (
    <div className="max-w-full px-6 md:px-12">
      <header className="text-center my-4">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tighter">
          Dashboard Administrativa
        </h1>
      </header>

      <section className="mb-12">
        <CardIncome />
      </section>


    </div>
  );
}
