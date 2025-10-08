import { FeatureAbout } from "@/blocks/features-about";
import Localization from "@/blocks/localization";
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
                <Team05Page id="barbeiros" />
            </main>

            <section id="timeline" className="mx-auto container">
                <Timeline />
            </section>

            <section id="valores" className="mx-auto container">
                <FeatureAbout/>
            </section>

            <section id="localization" className="mx-auto container">
                <Localization/>
            </section>

            <footer>
                <Footer05Page />
            </footer>
        </>
    )
}