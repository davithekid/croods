import Chose from "@/blocks/chose";
import PricingCard from "@/blocks/chose-card";
import Footer05Page from "@/components/footer/footer-05";
import Navbar01Page from "@/components/navbar/navbar-01";

export default function Agendamento() {
    return (
        <>
            <header>
                <Navbar01Page />
            </header>

            <main>
                <Chose />
            </main>

            <section className="m-auto">
                <PricingCard />
            </section>

            <footer>
                <Footer05Page />
            </footer>
        </>
    )
}