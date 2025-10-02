import ProfileHeader from "../../../components/examples/profile-page/components/profile-header";
import ProfileContent from "../../../components/examples/profile-page/components/profile-content";
import Navbar01Page from "@/components/navbar/navbar-01";
import Footer05Page from "@/components/footer/footer-05";

export default function Page() {
    return (
        <>
            <header>
                <Navbar01Page />
            </header>

            <main className="mx-auto max-w-4xl space-y-6 px-4 py-10">
                <ProfileHeader />
                <ProfileContent />
            </main>

            <footer>
                <Footer05Page/> 
            </footer>
        </>
    );
}