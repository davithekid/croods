import Contact02Page from "@/blocks/contact";
import Footer05Page from "@/components/footer/footer-05";
import Navbar01Page from "@/components/navbar/navbar-01";

export default function Contato() {
    return (
        <>
            <header>
                <Navbar01Page />
            </header>

            <main>
                <Contact02Page />
            </main>

            <footer>
                <Footer05Page />
            </footer>

        </>
    )
}