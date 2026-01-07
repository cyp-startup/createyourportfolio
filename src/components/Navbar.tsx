import { Link } from "react-router-dom"
import Noise from "./Noise"
import AOSInit from "@/config/AOS"

const Navbar = () => {
  return (
    <>
      <AOSInit />

      <nav data-aos="fade-down" data-aos-delay="100" data-aos-offset="0" className="overflow-hidden flex items-center justify-between w-[900px] px-[24px] py-[16px] rounded-[40px] bg-white/10 backdrop-blur-xl border border-white/10 fixed top-[20px] left-1/2 -translate-x-1/2 z-[99]">
        <Noise
          patternSize={250}
          patternScaleX={1}
          patternScaleY={1}
          patternRefreshInterval={2}
          patternAlpha={15}
        />
        
        <Link
          to={'/'}
          className="flex items-center gap-[8px]"
        >
          <svg className="w-[27px] shrink-0 hover:rotate-[-720deg] transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55 59" fill="none"><path fill="#060d0d" d="M54.642 39.509a30 30 0 0 1-12.894 15.185c-5.902 3.445-21.124-53.64-19.563 3.761A30 30 0 0 1 4.58 49.133c-4.636-5.022-6.956-17.348 17.605-18.848-24.56 1.5-24.084-13.038-20.178-18.646A30 30 0 0 1 18.174 0c8.95 52.285 13.576-1.553 19.893 1.054a30 30 0 0 1 14.848 13.281l-26.29 14.45L54.641 39.51Z"/></svg>
        
          <span className="leading-[100%] font-extrabold tracking-[1px] font-google-sans-flex text-[1.375rem] mt-[2px] text-[#060d0d]">CYP</span>
        </Link>

        <div className="flex items-center gap-[20px] font-poppins text-[#060d0d]">
          <Link
            to={'/'}
            className="text-[0.938rem] font-semibold"
          > 
            Home
          </Link>

          <Link
            to={'/'}
            className="text-[0.938rem] font-semibold"
          > 
            Templates
          </Link>

          <Link
            to={'/'}
            className="text-[0.938rem] font-semibold"
          > 
            Tutor
          </Link>

          <SignUpButton title="Get Started" link="/signup" />
        </div>
      </nav>
    </>
  )
}

export default Navbar

export const SignUpButton = ({title, link, className}: {title: string, link:string, className?: string}) => {
  return (
    <Link
      to={link}
      className={`px-[14px] py-[6px] bg-white rounded-[40px] text-[0.938rem] ${className}`}
    >
      {title}
    </Link>
  )
}