import CardSwap, { Card } from "@/components/CardSwap"
import LightRays from "@/components/LightRays"
import { SignUpButton } from "@/components/Navbar"
import Noise from "@/components/Noise"
import SplitText from "@/components/SplitText"
import AOSInit from "@/config/AOS"
import { useState } from "react"
import { Link } from "react-router-dom"
import portfoliophoto from '../assets/portfolios/cyp.png'
import logo from '../assets/logo.svg'

const LandingPage = () => {
  const [showSecondLine, setShowSecondLine] = useState(false);
  
  return (
    <>
      <AOSInit />

      <div className="relative">
        <div className="w-full h-full absolute top-0 left-0">
          <LightRays
            raysOrigin="top-center"
            raysColor="#00ffff"
            raysSpeed={1.5}
            lightSpread={0.8}
            rayLength={3.5}
            followMouse={true}
            mouseInfluence={0.2}
            noiseAmount={0.1}
            distortion={0.05}
            className="custom-rays"
          />
        </div>
        
        {/* Hero */}
        <section className="w-screen h-screen relative flex items-center justify-center">
          <div data-aos="fade-up" data-aos-delay="200" className="flex flex-col items-center justify-center gap-[24px] relative z-[20]">
            <Link
              to={'/templates'}
              className="px-[12px] py-[5px] group font-google-sans-flex rounded-[24px] bg-white/10 backdrop-blur-xl border border-white/10 flex items-center gap-[3px]"
            >
              <svg className="group-hover:rotate-180 transition-transform duration-300 w-[30px]" fill="#ffffff" viewBox="0 0 64 64" enable-background="new 0 0 64 64" id="Layer_1" version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M34.509,33.048c-2.449,0-5.062-0.032-7.914-0.097c-0.552-0.012-0.99-0.47-0.977-1.022c0.012-0.544,0.458-0.978,0.999-0.978 c0.008,0,0.016,0,0.023,0c3.979,0.089,7.489,0.117,10.732,0.081c0.004,0,0.008,0,0.011,0c0.547,0,0.994,0.44,1,0.989 c0.006,0.552-0.437,1.005-0.989,1.011C36.456,33.043,35.496,33.048,34.509,33.048z"></path> </g> <g> <path d="M31.952,38.383c-0.008,0-0.016,0-0.023,0c-0.552-0.012-0.99-0.47-0.977-1.022c0.09-3.979,0.117-7.49,0.081-10.732 c-0.006-0.552,0.437-1.005,0.989-1.011c0.004,0,0.008,0,0.011,0c0.547,0,0.994,0.44,1,0.989c0.036,3.265,0.01,6.798-0.082,10.799 C32.939,37.95,32.494,38.383,31.952,38.383z"></path> </g> <path d="M40.835,47.818c-0.582,0-1.97-0.008-3.751-0.018c-4.401-0.025-11.215-0.065-14.206-0.03c0,0,0,0-0.001,0 c-3.324,0-7.83-2.253-7.842-6.482c-0.006-2.208,0.012-4.117,0.029-5.955c0.027-2.926,0.053-5.69-0.024-9.208 c-0.129-5.882,2.456-9.413,7.092-9.688c2.534-0.151,7.256-0.256,11.484-0.256c4.166,0,9.432,0.094,10.863,0.544 c2.574,0.808,4.038,3.591,4.308,5.835c0.31,2.564,0.142,11.354,0.052,16.077c-0.026,1.34-0.045,2.346-0.045,2.772 c0,1.804-0.802,3.443-2.259,4.618C45.081,47.199,43.109,47.818,40.835,47.818z M26.091,45.758c3.355,0,7.813,0.025,11.004,0.043 c1.776,0.01,3.159,0.018,3.74,0.018c1.787,0,3.366-0.479,4.445-1.348c0.991-0.798,1.514-1.856,1.514-3.059 c0-0.433,0.019-1.453,0.045-2.812c0.089-4.674,0.255-13.374-0.038-15.8c-0.202-1.678-1.271-3.648-2.921-4.166 c-0.696-0.219-3.758-0.452-10.265-0.452c-4.193,0-8.866,0.104-11.366,0.252c-4.439,0.264-5.284,4.305-5.21,7.648 c0.078,3.549,0.052,6.328,0.024,9.271c-0.017,1.831-0.035,3.731-0.029,5.93c0.008,2.89,3.416,4.489,5.768,4.489 C23.687,45.762,24.808,45.758,26.091,45.758z"></path> </g></svg>
              <p className="text-white text-[0.938rem] mt-[1px]">Create Your Portfolio</p>
            </Link>
            
            <div className="mb-[24px]">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight text-center font-poppins">
                <SplitText
                  text="Launch in minutes."
                  className="z-5 mb-[-15px] hero-text"
                  delay={50}
                  duration={0.6}
                  ease="power3.out"
                  splitType="chars"
                  tag="span"
                  onLetterAnimationComplete={() => setShowSecondLine(true)}
                />
                <br /> 
                <span className={showSecondLine ? "opacity-100" : "opacity-0"}>
                  {showSecondLine ? (
                    <SplitText
                      text="Not in hours."
                      className="text-[#818cf8] z-[10] hero-text"
                      delay={50}
                      duration={0.6}
                      ease="power3.out"
                      splitType="chars"
                      tag="span"
                    />
                  ) : (
                    /* Keeps the line height so the layout doesn't jump */
                    <SplitText
                      text="Not in hours."
                      className="text-[#818cf8] z-[10] opacity-0"
                    />
                  )}
                </span>
              </h1>
              <p className="text-white/65 font-google-sans-flex text-center">CYP lets you build a stylish portfolio effortlessly. Just pick a template, <br /> add your details, and your personal site is ready to go.</p>
              <p className="text-white/65 font-google-sans-flex text-center">no coding, no design skills needed</p>
            </div>
          
            <div className="flex items-center gap-[12px] font-poppins">
              <SignUpButton title="Get Started" link="/signup" className="px-[34px] text-[1rem] py-[9px]" />
              <LearnMoreButton title="Learn More" link="/tutor" />
            </div>
          </div>
        </section>

        <div className="relative z-[40]">
          {/* A short video */}
          <section
            className="mb-[260px] container mx-auto w-full relative aspect-video overflow-hidden rounded-[24px]"
          >
            <img className="w-full h-full object-cover object-center" src="data:image/avif;base64,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" alt="" />
          </section>

          {/* Templates */}
          <section className="container mx-auto w-full relative mb-[60px] flex items-center justify-baseline gap-[30px]">
            <div className="w-fit shrink-0">
              <h3 className="font-google-sans-flex tracking-tight leading-[115%] text-primary/85 mb-[12px] font-bold text-[4rem]">Grab the template you <br /> like and tweak it.</h3>
              <p className="text-primary/70 font-poppins font-medium text-wh/60 leading-[150%]">CYP helps you launch projects instantly without the usual hassle. <br /> Save time, skip the setup, and get your ideas live in minutes, <br /> no coding, no design skills needed</p>
            </div>
            <div className="grow h-[400px] relative">
              <CardSwap
                className="translate-x-[-60px]"
                cardDistance={60}
                verticalDistance={70}
                delay={5000}
                pauseOnHover={false}
              >
                <Card className="overflow-hidden !rounded-[12px]">
                  <div className="w-full flex items-center gap-[6px] pl-[14px] pb-[4px] pt-[6px] border-b border-white">
                    <img className="w-[14px] text-white" src={logo} alt="" />
                    <p className="text-[0.875rem] text-white font-poppins">Brutalism</p>
                  </div>
                  <img className="w-full h-full object-cover object-center" src={portfoliophoto} alt="" />
                </Card>
                <Card className="overflow-hidden !rounded-[12px]">
                  <div className="w-full flex items-center gap-[6px] pl-[14px] pb-[4px] pt-[6px] border-b border-white">
                    <img className="w-[14px] text-white" src={logo} alt="" />
                    <p className="text-[0.875rem] text-white font-poppins">Cyber</p>
                  </div>
                  <img className="w-full h-full object-cover object-center" src={portfoliophoto} alt="" />
                </Card>
                <Card className="overflow-hidden !rounded-[12px]">
                  <div className="w-full flex items-center gap-[6px] pl-[14px] pb-[4px] pt-[6px] border-b border-white">
                    <img className="w-[14px] text-white" src={logo} alt="" />
                    <p className="text-[0.875rem] text-white font-poppins">Nature</p>
                  </div>
                  <img className="w-full h-full object-cover object-center" src={portfoliophoto} alt="" />
                </Card>
              </CardSwap>
            </div>
          </section>
        </div>

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