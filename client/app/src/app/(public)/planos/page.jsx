import { FeaturePricing } from "@/blocks/features-pricing";
import Pricing03 from "@/blocks/pricing/page";
import Footer05Page from "@/components/footer/footer-05";
import Navbar01Page from "@/components/navbar/navbar-01";

export default function Planos() {
    return (
        <>
            <header>
                <Navbar01Page />
            </header>

            <main>
                <Pricing03 />
            </main>

            <section>
                <FeaturePricing/>
            </section>

            <footer>
                <Footer05Page />
            </footer>
        </>
    )
}