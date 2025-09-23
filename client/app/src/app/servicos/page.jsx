import { Services } from "@/blocks/services";
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
        </>
    )
}