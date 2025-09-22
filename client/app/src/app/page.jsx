import { Services4 } from "@/blocks/services";
import Hero01 from "@/blocks/hero";
import Footer05Page from "@/components/footer/footer-05";
import Navbar01Page from "@/components/navbar/navbar-01";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header>
        <Navbar01Page />
      </header>

      <main className="mx-auto container">
        <Hero01 />
      </main>
        
      <section className="mx-auto container">
        <Services4 />
      </section>

      <footer>
        <Footer05Page />
      </footer>
    </>
  );
}
