import Chose from "@/blocks/chose";
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

            <footer>
                <Footer05Page />
            </footer>
        </>
    )
}