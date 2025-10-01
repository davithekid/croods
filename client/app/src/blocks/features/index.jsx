import { Scissors, Star, Tally1 } from "lucide-react";

const Feature16 = () => {
  return (
    <section className="py-16 bg-zinc-100 dark:bg-zinc-900">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-3">
          
          <div className="rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
            <span className="mb-6 flex size-14 items-center justify-center rounded-full bg-amber-500 m-auto shadow-md">
              <Tally1 className="size-7" />
            </span>
            <h3 className="mb-3 text-2xl font-semibold text-center tracking-wide">
              Tradição
            </h3>
            <p className="text-center leading-relaxed">
              Cultivamos a arte clássica do barbear e do corte. Cada serviço é realizado com técnicas atemporais e o toque de maestria que só anos de tradição podem oferecer.
            </p>
          </div>

          <div className="rounded-2x p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
            <span className="mb-6 flex size-14 items-center justify-center rounded-full bg-amber-500 text-black m-auto shadow-md">
              <Star className="size-7" />
            </span>
            <h3 className="mb-3 text-2xl font-semibold text-center tracking-wide">
              Excelência
            </h3>
            <p className="text-center leading-relaxed">
              Nosso compromisso é com a qualidade premium. Utilizamos os melhores produtos e garantimos um resultado impecável em cada corte, barba ou tratamento.
            </p>
          </div>

          <div className="rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
            <span className="mb-6 flex size-14 items-center justify-center rounded-full bg-amber-500 text-black m-auto shadow-md">
              <Scissors className="size-7" />
            </span>
            <h3 className="mb-3 text-2xl font-semibold text-center tracking-wide">
              Experiência
            </h3>
            <p className="text-center leading-relaxed">
              Mais do que um serviço, oferecemos um momento de relaxamento e cuidado. Desfrute de um ambiente sofisticado e um atendimento totalmente personalizado.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export { Feature16 };
