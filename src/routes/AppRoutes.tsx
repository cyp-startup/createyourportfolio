import { Routes, Route } from "react-router-dom"
import LandingPage from "../pages/LandingPage"
import NotFound from "../pages/NotFound"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"


const AppRoutes = () => {
    return (
        <div>
            <Navbar />
            
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>

            <Footer />
        </div>
    )
}


export default AppRoutes