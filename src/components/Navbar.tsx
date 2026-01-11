import { Link, useLocation } from "react-router-dom"
import Noise from "./Noise"
import AOSInit from "@/config/AOS"
import { useState } from "react"
// import ProfileDropdown from "./ProfileDropdown"

const Navbar = () => {
  const [openSidebar, setOpenSidebar] = useState(false)

  const {pathname} = useLocation()
  const showNavbar = pathname !== '/signup' && pathname !== '/signin'

  if (!showNavbar) {
    return null;
  }

  return (
    <>
      <AOSInit />

      <nav data-aos="fade-down" data-aos-delay="100" data-aos-offset="0" className="overflow-hidden flex items-center justify-between w-[90%] lg:w-[900px] px-[18px] sm:px-[24px] py-[12px] sm:py-[16px] rounded-[40px] bg-white/70 backdrop-blur-xl border border-white/30 fixed top-[20px] left-1/2 -translate-x-1/2 z-[99]">
        <Noise
          patternSize={250}
          patternScaleX={1}
          patternScaleY={1}
          patternRefreshInterval={2}
          patternAlpha={15}
        />
        
        <Link
          to={'/'}
          className="flex items-center gap-[8px] group"
        >
          <svg className="w-[23px] sm:w-[27px] shrink-0 group-hover:rotate-[-360deg] transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55 59" fill="none"><path fill="#060d0d" d="M54.642 39.509a30 30 0 0 1-12.894 15.185c-5.902 3.445-21.124-53.64-19.563 3.761A30 30 0 0 1 4.58 49.133c-4.636-5.022-6.956-17.348 17.605-18.848-24.56 1.5-24.084-13.038-20.178-18.646A30 30 0 0 1 18.174 0c8.95 52.285 13.576-1.553 19.893 1.054a30 30 0 0 1 14.848 13.281l-26.29 14.45L54.641 39.51Z"/></svg>
        
          <span className="leading-[100%] font-extrabold tracking-[1px] font-google-sans-flex text-[1.25rem] sm:text-[1.375rem] mt-[2px] text-[#060d0d]">CYP</span>
        </Link>

        <button onClick={() => setOpenSidebar(true)} className="sm:hidden flex flex-col gap-[5px] w-[25px]">
          <div className="w-full bg-black h-[2px]"></div>
          <div className="w-full bg-black h-[2px]"></div>
        </button>

        <div className="sm:flex hidden items-center gap-[20px] font-poppins text-[#060d0d]">
          <Link
            to={'/'}
            className="text-[0.938rem] font-semibold"
          > 
            Home
          </Link>

          <Link
            to={'/templates'}
            className="text-[0.938rem] font-semibold"
          > 
            Templates
          </Link>

          <Link
            to={'/tutor'}
            className="text-[0.938rem] font-semibold"
          > 
            Tutor
          </Link>

          <SignUpButton title="Get Started" link="/signup" />

          {/* <ProfileDropdown /> */}
        </div>
      </nav>

      {/* overlay */}
      {
        openSidebar &&
        <div onClick={() => setOpenSidebar(false)} className="fixed w-screen h-screen top-0 left-0 bg-black/40 z-[99]"></div>
      }

      {/* sidebar */}
      <div className={`${openSidebar ? 'translate-x-0' : '-translate-x-[100%]'} transition-transform duration-300 sm:hidden pt-[40px] font-poppins text-[#060d0d] fixed top-0 left-0 w-[270px] p-[24px] bg-white/80 backdrop-blur-xl z-[999] h-screen overflow-hidden`}>
        <Noise
          patternSize={250}
          patternScaleX={1}
          patternScaleY={1}
          patternRefreshInterval={2}
          patternAlpha={15}
        />

        <div className="flex flex-col gap-[20px] relative h-full">
          <button 
            onClick={() => setOpenSidebar(false)}
            className="mb-[20px]"
          >
            <svg className="w-[17px]" fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 460.775 460.775" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55 c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55 c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505 c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55 l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719 c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"></path> </g></svg>
          </button>

          <Link
            to={'/'}
            onClick={() => setOpenSidebar(false)}
            className="text-[1.25rem] font-semibold"
          > 
            Home
          </Link>

          <Link
            to={'/templates'}
            onClick={() => setOpenSidebar(false)}
            className="text-[1.25rem] font-semibold"
          > 
            Templates
          </Link>

          <div className="grow">
            <Link
              to={'/tutor'}
              onClick={() => setOpenSidebar(false)}
              className="text-[1.25rem] font-semibold"
            > 
              Tutor
            </Link>
          </div>

          <SignUpButton title="Get Started" className="text-center text-[1rem] mb-[6px]" link="/signup" />
        </div>
      </div>
    </>
  )
}

export default Navbar

export const SignUpButton = ({title, link, className}: {title: string, link:string, className?: string}) => {
  return (
    <Link
      to={link}
      className={`px-[14px] py-[6px] bg-white rounded-[40px] text-[0.938rem] relative ${className}`}
    >
      {title}
    </Link>
  )
}
