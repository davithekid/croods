import CardIncome from "@/blocks/card-income";
import LineChart03 from "@/blocks/charts/line";
import PieChart03 from "@/blocks/charts/pie";

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

      <section className="flex justify-center items-center gap-6">
        <LineChart03 />
        <PieChart03 />
      </section>


    </div>
  );
}
