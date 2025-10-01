import { Scissors, Star, Tally1 } from "lucide-react"; 

const Feature16 = () => {
  return (
    <section className="">
      <div className="container">
        <div className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-3">
          <div className="rounded-lg bg-accent p-5">
            <span className="mb-8 flex size-12 items-center justify-center rounded-full bg-background m-auto">
              <Tally1 className="size-6" /> 
            </span>
            <h3 className="mb-2 text-xl font-medium flex justify-center">Tradição</h3>
            <p className="leading-7 text-muted-foreground ">
              Cultivamos a arte clássica do barbear e do corte. Cada serviço é realizado com técnicas atemporais e o toque de maestria que só anos de tradição podem oferecer.
            </p>
          </div>
          
          <div className="rounded-lg bg-accent p-5">
            <span className="mb-8 flex size-12 items-center justify-center rounded-full bg-background m-auto">
              <Star className="size-6 " /> 
            </span>
            <h3 className="mb-2 text-xl font-medium flex justify-center ">Excelência</h3>
            <p className="leading-7 text-muted-foreground">
              Nosso compromisso é com a qualidade premium. Utilizamos os melhores produtos e garantimos um resultado impecável em cada corte, barba ou tratamento.
            </p>
          </div>
          
          <div className="rounded-lg bg-accent p-5">
            <span className="mb-8 flex size-12 items-center justify-center rounded-full bg-background m-auto">
              <Scissors className="size-6" /> 
            </span>
            <h3 className="mb-2 text-xl font-medium flex justify-center">Experiência</h3>
            <p className="leading-7 text-muted-foreground">
              Mais do que um serviço, oferecemos um momento de relaxamento e cuidado. Desfrute de um ambiente sofisticado e um atendimento totalmente personalizado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature16 };