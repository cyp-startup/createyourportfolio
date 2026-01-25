import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import ContactBar from './components/ContactBar'
import EducationSkills from './components/EducationSkills'
import ExperienceSec from './components/ExperienceSec'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import LatestWork from './components/LatestWork'
import Header from './components/Navbar'
import './muse-styles.css'

const MusePage = () => {
  return (
    <div className="w-full min-h-[100vh] bg-[#fff] muse flex flex-col font-bricolage-grotesque">
        <Header />
        <main className='grow'>
          <HeroSection />
          <ContactBar />
          <AboutMe />
          <ExperienceSec />
          <EducationSkills />
          <LatestWork />
          <Contact />
        </main>
        <Footer />
    </div>
  )
}

export default MusePage