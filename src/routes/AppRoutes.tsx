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
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>

            <Footer />
        </div>
    )
}


export default AppRoutes