import { Feature197 } from "@/blocks/about";
import Team05Page from "@/blocks/team/team-05";
import Timeline from "@/blocks/timeline/timeline-02";
import { Feature13 } from "@/blocks/unidade";
import Footer05Page from "@/components/footer/footer-05";
import Navbar01Page from "@/components/navbar/navbar-01";

export default function Sobre() {
    return (
        <>
            <header>
                <Navbar01Page />
            </header>

            <main className="mx-auto container">
                <Team05Page id="barbeiros" />
            </main>

            <section id="timeline" className="mx-auto container">
                <Timeline />
            </section>

            <section id="unidade" className="mx-auto container">
                <Feature13 />
            </section>


            <footer>
                <Footer05Page />
            </footer>
        </>
    )
}