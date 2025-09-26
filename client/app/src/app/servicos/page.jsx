import { Services } from "@/blocks/our-services";
import Footer05Page from "@/components/footer/footer-05";
import Navbar01Page from "@/components/navbar/navbar-01";

export default function Servicos() {
    return (
        <>
            <header>
                <Navbar01Page />
            </header>

            <main className="mx-auto container">
                <Services />
            </main>

            <footer>    
                <Footer05Page />
            </footer>
        </>
    )
}