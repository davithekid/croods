import BestServices from "@/blocks/best-services";
import Example from "@/blocks/calender";
import CardStats from "@/blocks/card-main";

export default function Home() {
  return (
    <div className="max-w-full px-6 md:px-12">
      <header className="text-center my-4">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tighter">
          Dashboard Administrativa
        </h1>
      </header>

      <section className="mb-12">
        <CardStats />
      </section>

      <section className="grid grid-cols-2 gap-12">
        <Example />
        <BestServices />
      </section>
    </div>
  );
}
