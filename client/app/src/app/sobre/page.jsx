import { Feature197 } from "@/blocks/about";
import Timeline from "@/blocks/timeline/timeline-02";
import Footer05Page from "@/components/footer/footer-05";
import Navbar01Page from "@/components/navbar/navbar-01";

export default function Sobre() {
    return (
        <>
            <header>
                <Navbar01Page />
            </header>

            <main className="px-12 container">
                <Feature197 />
            </main>

            <section className="">
                <Timeline />
            </section>

            <footer>
                <Footer05Page />
            </footer>
        </>
    )
}