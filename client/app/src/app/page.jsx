import { Services4 } from "@/blocks/diff";
import { Hero1 } from "@/blocks/hero";
import Testimonial04 from "@/blocks/testimonial-04/testimonial-04";
import Footer05Page from "@/components/footer/footer-05";
import Navbar01Page from "@/components/navbar/navbar-01";

export default function Home() {
  return (
    <>
      <header>
        <Navbar01Page />
      </header>

      <main className="mx-auto container">
        <Hero1 />
      </main>

      <section className="mx-auto container">
        <Services4 />
      </section>
      <section>
        <Testimonial04 />
      </section>

      <footer>
        <Footer05Page />
      </footer>
    </>
  );
}
