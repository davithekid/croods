import { Feature197 } from "@/blocks/about";
import Team05Page from "@/blocks/team/team-05";
import Timeline from "@/blocks/timeline/timeline-02";
import Footer05Page from "@/components/footer/footer-05";
import Navbar01Page from "@/components/navbar/navbar-01";

export default function Sobre() {
    return (
        <>
            <header>
                <Navbar01Page />
            </header>

            <main className="mx-auto container">
                <Team05Page />
            </main>

            <section className="mx-auto container">
                <Timeline />
            </section>

            <footer>
                <Footer05Page />
            </footer>
        </>
    )
}