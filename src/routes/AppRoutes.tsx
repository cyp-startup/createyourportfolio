import { Routes, Route } from "react-router-dom"
import LandingPage from "../pages/LandingPage"
import NotFound from "../pages/NotFound"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import SignUpPage from "@/pages/SignUpPage"
import SignInPage from "@/pages/SignInPage"
import TemplatesPage from "@/pages/TemplatesPage"
import ProfilePage from "@/pages/ProfilePage"
import DoodlefolioPage from "@/pages/Doodlefolio/DoodlefolioPage"
import VantaPage from "@/pages/Vanta/VantaPage"
import MusePage from "@/pages/Muse/MusePage"
import Galleyfish from "@/pages/Galleyfish/Galleyfish"
import PictoPage from "@/pages/Picto/PictoPage"
import ReactbitfolioPage from "@/pages/Reactbitfolio/ReactbitfolioPage"


const AppRoutes = () => {
    return (
        <div className="flex flex-col min-h-[100vh]">
            <Navbar />
            
            <main className="grow">
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/signup" element={<SignUpPage />} />
                    <Route path="/signin" element={<SignInPage />} />
                    <Route path="/templates" element={<TemplatesPage />} />
                    <Route path="/templates/doodlefolio" element={<DoodlefolioPage />} />
                    <Route path="/templates/vanta" element={<VantaPage />} />
                    <Route path="/templates/picto" element={<PictoPage />} />
                    <Route path="/templates/muse" element={<MusePage />} />
                    <Route path="/templates/galleyfish" element={<Galleyfish />} />
                    <Route path="/templates/reactbitfolio" element={<ReactbitfolioPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>

            <Footer />
        </div>
    )
}


export default AppRoutes