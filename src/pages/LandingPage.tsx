import LightRays from "@/components/LightRays"
import { SignUpButton } from "@/components/Navbar"
import Noise from "@/components/Noise"
import AOSInit from "@/config/AOS"
import { Link } from "react-router-dom"

const LandingPage = () => {
  return (
    <>
      <AOSInit />

      <div>
        {/* Hero */}
        <section className="w-screen h-screen relative flex items-center justify-center">
          <div className="w-full h-full absolute to-0 left-0">
            <LightRays
              raysOrigin="top-center"
              raysColor="#00ffff"
              raysSpeed={1.5}
              lightSpread={0.8}
              rayLength={1.2}
              followMouse={true}
              mouseInfluence={0.1}
              noiseAmount={0.1}
              distortion={0.05}
              className="custom-rays"
            />
          </div>
          
          <div data-aos="fade-up" data-aos-delay="200" className="flex flex-col items-center justify-center gap-[24px] relative z-[20]">
            <Link
              to={'/templates'}
              className="px-[12px] py-[5px] group font-google-sans-flex rounded-[24px] bg-white/10 backdrop-blur-xl border border-white/10 flex items-center gap-[3px]"
            >
              <svg className="group-hover:rotate-180 transition-transform duration-300 w-[30px]" fill="#ffffff" viewBox="0 0 64 64" enable-background="new 0 0 64 64" id="Layer_1" version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M34.509,33.048c-2.449,0-5.062-0.032-7.914-0.097c-0.552-0.012-0.99-0.47-0.977-1.022c0.012-0.544,0.458-0.978,0.999-0.978 c0.008,0,0.016,0,0.023,0c3.979,0.089,7.489,0.117,10.732,0.081c0.004,0,0.008,0,0.011,0c0.547,0,0.994,0.44,1,0.989 c0.006,0.552-0.437,1.005-0.989,1.011C36.456,33.043,35.496,33.048,34.509,33.048z"></path> </g> <g> <path d="M31.952,38.383c-0.008,0-0.016,0-0.023,0c-0.552-0.012-0.99-0.47-0.977-1.022c0.09-3.979,0.117-7.49,0.081-10.732 c-0.006-0.552,0.437-1.005,0.989-1.011c0.004,0,0.008,0,0.011,0c0.547,0,0.994,0.44,1,0.989c0.036,3.265,0.01,6.798-0.082,10.799 C32.939,37.95,32.494,38.383,31.952,38.383z"></path> </g> <path d="M40.835,47.818c-0.582,0-1.97-0.008-3.751-0.018c-4.401-0.025-11.215-0.065-14.206-0.03c0,0,0,0-0.001,0 c-3.324,0-7.83-2.253-7.842-6.482c-0.006-2.208,0.012-4.117,0.029-5.955c0.027-2.926,0.053-5.69-0.024-9.208 c-0.129-5.882,2.456-9.413,7.092-9.688c2.534-0.151,7.256-0.256,11.484-0.256c4.166,0,9.432,0.094,10.863,0.544 c2.574,0.808,4.038,3.591,4.308,5.835c0.31,2.564,0.142,11.354,0.052,16.077c-0.026,1.34-0.045,2.346-0.045,2.772 c0,1.804-0.802,3.443-2.259,4.618C45.081,47.199,43.109,47.818,40.835,47.818z M26.091,45.758c3.355,0,7.813,0.025,11.004,0.043 c1.776,0.01,3.159,0.018,3.74,0.018c1.787,0,3.366-0.479,4.445-1.348c0.991-0.798,1.514-1.856,1.514-3.059 c0-0.433,0.019-1.453,0.045-2.812c0.089-4.674,0.255-13.374-0.038-15.8c-0.202-1.678-1.271-3.648-2.921-4.166 c-0.696-0.219-3.758-0.452-10.265-0.452c-4.193,0-8.866,0.104-11.366,0.252c-4.439,0.264-5.284,4.305-5.21,7.648 c0.078,3.549,0.052,6.328,0.024,9.271c-0.017,1.831-0.035,3.731-0.029,5.93c0.008,2.89,3.416,4.489,5.768,4.489 C23.687,45.762,24.808,45.758,26.091,45.758z"></path> </g></svg>
              <p className="text-white text-[0.938rem] mt-[1px]">Create Your Portfolio</p>
            </Link>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] tracking-tight text-center font-poppins mb-[24px]">Launch in minutes. <br /> <span className="text-[#818cf8]">Not in hours.</span></h1>
          
            <div className="flex items-center gap-[12px] font-poppins">
              <SignUpButton title="Get Started" link="/signup" className="px-[34px] text-[1rem] py-[9px]" />
              <LearnMoreButton title="Learn More" link="/tutor" />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default LandingPage

export const LearnMoreButton = ({title, link, className} : {title: string, link: string, className?: string}) => {
  return (
    <Link
      to={link}
      className={`overflow-hidden relative px-[34px] py-[12px] leading-[100%] rounded-[24px] bg-white/10 border border-white/10 text-white ${className} backdrop-blur-xl text-[1rem] text-center`}
    >
      <Noise
        patternSize={250}
        patternScaleX={1}
        patternScaleY={1}
        patternRefreshInterval={2}
        patternAlpha={15}
      />
      {title}
    </Link>
  )
}