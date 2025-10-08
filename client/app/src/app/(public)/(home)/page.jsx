import { Cta10 } from "@/blocks/cta";
import { Feature16 } from "@/blocks/features";
import Hero01 from "@/blocks/hero";
import { ServicosIndex } from "@/blocks/services-landing";
import Testimonial04 from "@/blocks/testimonial/testimonial-04";
import Footer05Page from "@/components/footer/footer-05";
import Navbar01Page from "@/components/navbar/navbar-01";

export default function Home() {
  return (
    <>
      <header>
        <Navbar01Page />
      </header>

      <main className="mx-auto container">
        <Hero01 />
      </main>

      <section className="bg-zinc-50 dark:bg-zinc-950">
        <Feature16 />
      </section>

      <section className="mx-auto container">
        <ServicosIndex />
      </section>

      <section>
        <Testimonial04 />
      </section>

      <section className="mx-auto">
        <Cta10 />
      </section>

      <footer>
        <Footer05Page />
      </footer>
    </>
  );
}
