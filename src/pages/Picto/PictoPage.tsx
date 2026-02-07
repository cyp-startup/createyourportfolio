import Footer from "./components/Footer"
import Home from "./components/Home"
import NavBar from "./components/Navbar"
import ScrollToTop from "./components/ScrollToTop"
import './main.css'

const PictoPage = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden relative bg-white w-full picto font-work-sans">
        
        <NavBar />

        <main className="grow">
            <Home />
        </main>

        <div className="bg-[#2A374A]">
            <Footer />
        </div>
        <ScrollToTop />

    </div>
  )
}

export default PictoPage