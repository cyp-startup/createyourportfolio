import CardSwap, { Card } from "@/components/CardSwap"
import LightRays from "@/components/LightRays"
import { SignUpButton } from "@/components/Navbar"
import Noise from "@/components/Noise"
import SplitText from "@/components/SplitText"
import AOSInit from "@/config/AOS"
import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import portfoliophoto from '../assets/portfolios/cyp.png'
import logo from '../assets/logo.svg'
import CountUp from "@/components/CountUp"
import TemplateCard from "@/components/TemplateCard"
import { Faq1 } from "@/components/FAQ"
import Squares from "@/components/Squares"
import BlurText from "@/components/BlurText"
import { portfolios } from "@/portfolios/portfolios"

const LandingPage = () => {
  const [showSecondLine, setShowSecondLine] = useState(false);
  const [showLastLine, setShowLastLine] = useState(false);
  const ref = useRef<HTMLElement | null>(null)
  const [flat, setFlat] = useState(false)
  const [buildInStep, setBuildInStep] = useState(1)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return
  
      const top = ref.current.getBoundingClientRect().top
      setFlat(top <= 200) // animate earlier
    }
  
    window.addEventListener("scroll", handleScroll)
    handleScroll() // run once
  
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  
  return (
    <>
      <AOSInit />

      <div className="relative">
        <div className="w-full h-screen absolute top-0 left-0">
          <LightRays
            raysOrigin="top-center"
            raysColor="#fff"
            raysSpeed={1}
            lightSpread={0.5}
            rayLength={3}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0}
            distortion={0}
            className="custom-rays"
          />
        </div>
        
        {/* Hero */}
        <section className="w-screen h-screen relative flex items-center justify-center">
          <div data-aos="fade-up" data-aos-delay="200" className="flex flex-col items-center justify-center gap-[16px] md:gap-[24px] relative z-[20] px-[16px]">
            <Link
              to={'/templates'}
              className="px-[8px] md:px-[10px] lg:px-[12px] py-[3px] md:py-[5px] group font-google-sans-flex rounded-[16px] lg:rounded-[24px] bg-white/10 backdrop-blur-xl border border-white/10 flex items-center gap-[2px] md:gap-[3px]"
            >
              <svg className="group-hover:rotate-180 transition-transform duration-300 w-[27px] lg:w-[30px]" fill="#ffffff" viewBox="0 0 64 64" enable-background="new 0 0 64 64" id="Layer_1" version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M34.509,33.048c-2.449,0-5.062-0.032-7.914-0.097c-0.552-0.012-0.99-0.47-0.977-1.022c0.012-0.544,0.458-0.978,0.999-0.978 c0.008,0,0.016,0,0.023,0c3.979,0.089,7.489,0.117,10.732,0.081c0.004,0,0.008,0,0.011,0c0.547,0,0.994,0.44,1,0.989 c0.006,0.552-0.437,1.005-0.989,1.011C36.456,33.043,35.496,33.048,34.509,33.048z"></path> </g> <g> <path d="M31.952,38.383c-0.008,0-0.016,0-0.023,0c-0.552-0.012-0.99-0.47-0.977-1.022c0.09-3.979,0.117-7.49,0.081-10.732 c-0.006-0.552,0.437-1.005,0.989-1.011c0.004,0,0.008,0,0.011,0c0.547,0,0.994,0.44,1,0.989c0.036,3.265,0.01,6.798-0.082,10.799 C32.939,37.95,32.494,38.383,31.952,38.383z"></path> </g> <path d="M40.835,47.818c-0.582,0-1.97-0.008-3.751-0.018c-4.401-0.025-11.215-0.065-14.206-0.03c0,0,0,0-0.001,0 c-3.324,0-7.83-2.253-7.842-6.482c-0.006-2.208,0.012-4.117,0.029-5.955c0.027-2.926,0.053-5.69-0.024-9.208 c-0.129-5.882,2.456-9.413,7.092-9.688c2.534-0.151,7.256-0.256,11.484-0.256c4.166,0,9.432,0.094,10.863,0.544 c2.574,0.808,4.038,3.591,4.308,5.835c0.31,2.564,0.142,11.354,0.052,16.077c-0.026,1.34-0.045,2.346-0.045,2.772 c0,1.804-0.802,3.443-2.259,4.618C45.081,47.199,43.109,47.818,40.835,47.818z M26.091,45.758c3.355,0,7.813,0.025,11.004,0.043 c1.776,0.01,3.159,0.018,3.74,0.018c1.787,0,3.366-0.479,4.445-1.348c0.991-0.798,1.514-1.856,1.514-3.059 c0-0.433,0.019-1.453,0.045-2.812c0.089-4.674,0.255-13.374-0.038-15.8c-0.202-1.678-1.271-3.648-2.921-4.166 c-0.696-0.219-3.758-0.452-10.265-0.452c-4.193,0-8.866,0.104-11.366,0.252c-4.439,0.264-5.284,4.305-5.21,7.648 c0.078,3.549,0.052,6.328,0.024,9.271c-0.017,1.831-0.035,3.731-0.029,5.93c0.008,2.89,3.416,4.489,5.768,4.489 C23.687,45.762,24.808,45.758,26.091,45.758z"></path> </g></svg>
              <p className="text-white text-[0.875rem] lg:text-[0.938rem] mt-[1px]">Create Your Portfolio</p>
            </Link>
            
            <div className="mb-[16px] md:mb-[24px]">
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
                      text="Not in weeks."
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
                      text="Not in weeks."
                      className="text-[#818cf8] z-[10] opacity-0"
                    />
                  )}
                </span>
              </h1>
              <p className="text-white/65 text-[0.75rem] sm:text-[0.875rem] md:text-[0.938rem] lg:text-[1rem] font-google-sans-flex text-center">CYP lets you build a stylish portfolio effortlessly. Just pick a template, <br className="sm:block hidden" /> add your details, and your personal site is ready to go.</p>
              <p className="text-white/65 text-[0.75rem] sm:text-[0.875rem] md:text-[0.938rem] lg:text-[1rem] font-google-sans-flex text-center">no coding, no design skills needed</p>
            </div>
          
            <div className="flex items-center gap-[12px] font-poppins">
              <SignUpButton title="Get Started" link="/signup" className="px-[22px] md:px-[27px] lg:px-[34px] py-[9px] sm:py-[11px] md:py-[12px] lg:py-[13px] leading-[100%] text-[0.875rem] sm:text-[0.938rem] md:text-[1rem]" />
              <LearnMoreButton title="Learn More" link="/tutor" />
            </div>
          </div>
        </section>

        <div className="relative z-[40] pb-[190px]">
          {/* A short video */}
          <section
            className="mb-[30px] sm:mb-[50px] md:mb-[100px] lg:mb-[170px] xl:mb-[260px] max-w-[1200px] mx-auto w-full relative aspect-video overflow-hidden px-[16px]"
          >
            <img className="w-full h-full object-cover object-center rounded-[24px]" src="https://static4.tgstat.ru/channels/_0/da/da021296ad507680f1ef1b853d8d57c8.jpg" alt="" />
          </section>

          {/* Templates */}
          <section className="container mx-auto w-full relative flex xl:items-center justify-baseline gap-[120px] xl:gap-[30px] xl:flex-row flex-col">
            <div className="w-fit shrink-0">
              <h3 className="font-google-sans-flex tracking-tight leading-[115%] text-white/85 mb-[12px] font-bold text-[2rem] sm:text-[3.5rem] md:text-[4rem]">Grab the template you <br /> like and tweak it.</h3>
              <p className="text-[0.75rem] sm:text-[0.938rem] md:text-[1rem] text-white/70 font-poppins font-medium text-wh/60 leading-[150%]">CYP helps you launch portfolios instantly without the usual hassle. <br className="sm:block hidden" /> Save time, skip the setup, and get your ideas live in minutes, <br className="sm:block hidden" /> no coding, no design skills needed</p>
            </div>
            <div className="grow w-full xl:w-auto h-[100px] sm:h-[200px] md:h-[400px] relative">
              <CardSwap
                className="right-[30%] md:right-0 md:translate-x-[-60px]"
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

        {/* How it works */}
        <section 
          ref={ref}
          className={`overflow-x-visible w-full bg-[radial-gradient(circle_at_center,_#7ea6ec_0%,_#3d7eed_80%)] relative z-[55] py-[40px] transition-[border-radius] duration-500 ease-out
          ${flat ? "rounded-t-none" : "rounded-t-[50px] lg:rounded-t-[200px]"}`}
        >
          <div className="sticky mx-auto lg:block hidden w-[898px] h-[65px] top-[23px] bg-black rounded-[40px] mb-[360px]"></div>
          
          {/* Build in 3 steps */}
          <div
            className="max-w-[1214px] text-white mx-auto px-[16px] lg:block hidden"
          >
            <div 
              style={{minHeight: '78vh'}}
              data-aos="fade-up" className="flex items-stretch gap-[16px] bg-[radial-gradient(circle_at_center,_#7ea6ec_0%,_#3d7eed_80%)] p-[32px] rounded-[32px]"
            >
              {/* left side */}
              <div className="shrink-0 w-[420px] flex flex-col">
                <h2 className="text-white/80 font-google-sans-flex font-semibold text-[2.5rem] mb-[24px]">How it works.</h2>
                
                <div className="grow flex flex-col gap-[16px]">
                  <button
                    onClick={() => setBuildInStep(1)}
                    className={`${buildInStep === 1 ? 'grow' : ''} w-full transition-all duration-300 bg-[#fff] border border-black/30 py-[12px] px-[16px] rounded-[35px] flex items-start`}
                  >
                    <div className="flex items-center gap-[6px]">
                      <svg className="w-[28px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="#000" stroke-miterlimit="10" d="M9 2.594v25.562l1.656-1.375 4.031-3.375 2.032 4.032.437.906.907-.469 3.093-1.594.875-.437-.437-.907-1.844-3.625 5.063-.625 2.03-.25L25.407 19 10.72 4.281zm2 4.844 11.563 11.53-4.5.532-1.407.188.657 1.28 2.062 4-1.313.688-2.156-4.312-.594-1.125-.968.812L11 23.844z" font-family="none" font-size="none" font-weight="none" style={{mixBlendMode : 'normal'}} text-anchor="none" transform="scale(8)"/></svg>
                      <p className="text-black font-outfit leading-[110%] font-medium text-[1.375rem]">Pick a template</p>
                    </div>
                  </button>

                  <button
                    onClick={() => setBuildInStep(2)}
                    className={`${buildInStep === 2 ? 'grow' : ''} w-full transition-all duration-300 bg-[#fff] border border-black/30 py-[12px] px-[16px] rounded-[35px] flex items-start`}
                  >
                    <div className="flex items-center gap-[8px]">
                      <svg className="w-[26px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="#000" stroke-miterlimit="10" d="m38.657 18.536 2.44-2.44a6.509 6.509 0 0 0 0-9.193 6.457 6.457 0 0 0-4.597-1.9 6.456 6.456 0 0 0-4.597 1.901l-2.439 2.439zm-11.314-7.072L9.274 29.533a3.51 3.51 0 0 0-.848 1.375l-3.35 10.121a1.498 1.498 0 0 0 1.896 1.895l10.118-3.351c.517-.17.993-.463 1.378-.849l18.068-18.068z" font-family="none" font-size="none" font-weight="none" style={{mixBlendMode : 'normal'}} text-anchor="none" transform="scale(5.33333)"/></svg>
                      <p className="text-black font-outfit leading-[110%] font-medium text-[1.375rem] whitespace-nowrap">Customize Your Content</p>
                    </div>
                  </button>

                  <button
                    onClick={() => setBuildInStep(3)}
                    className={`${buildInStep === 3 ? 'grow' : ''} w-full transition-all duration-300 bg-[#fff] border border-black/30 py-[12px] px-[16px] rounded-[35px] flex items-start`}
                  >
                    <div className="flex items-center gap-[8px]">
                      <svg className='w-[27px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"/><path d="M21 16.5a1 1 0 0 1-.53.88l-7.9 4.44a1 1 0 0 1-1.14 0l-7.9-4.44A1 1 0 0 1 3 16.5v-9a1 1 0 0 1 .53-.88l7.9-4.44a1 1 0 0 1 1.14 0l7.9 4.44a1 1 0 0 1 .53.88v9M12 4.15 5 8.09v7.82l7 3.94 7-3.94V8.09l-7-3.94m0 2.08 4.9 2.83-4.9 2.83-4.9-2.83L12 6.23m5 8.66-4 2.31v-3.58l4-2.31v3.58m-6 2.31-4-2.31v-3.58l4 2.31Z"/></svg>
                      <p className="text-black font-outfit leading-[110%] font-medium text-[1.375rem]">Publish Instantly</p>
                    </div>
                  </button>
                </div>
              </div>

              {/* Right side */}
              <div className="grow">
                <div className="w-full">
                  {
                    buildInStep === 1 &&
                    <div className="w-full aspect-video">
                      <h3 className="text-white/80 mb-[16px] text-[1.85rem] font-google-sans-flex font-medium">Clean, modern, ready-made designs</h3>
                      <video
                        src="https://playntestimages.s3.eu-central-1.amazonaws.com/Videos/Adil+Videos+23.11/Domain+Demo.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover rounded-[16px] border border-black/20"
                      ></video>
                    </div>
                  }

                  {
                    buildInStep === 2 &&
                    <div className="w-full aspect-video">
                      <h3 className="text-white/80 mb-[16px] text-[1.85rem] font-poppins font-medium">Edit texts, links, projects...</h3>
                      <video
                        src="https://playntestimages.s3.eu-central-1.amazonaws.com/Videos/Adil+Videos+23.11/Time+Demo.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover rounded-[16px] border border-black/20"
                      ></video>
                    </div>
                  }

                  {
                    buildInStep === 3 &&
                    <div className="w-full aspect-video">
                      <h3 className="text-white/80 mb-[16px] text-[1.85rem] font-poppins font-medium">Go live instantly</h3>
                      <video
                        src="https://playntestimages.s3.eu-central-1.amazonaws.com/Videos/Adil+Videos+23.11/Accuracy+Demo.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover rounded-[16px] border border-black/20"
                      ></video>
                    </div>
                  }
                </div>
              </div>
            </div>
          </div>

          <div
            className="max-w-[1150px] text-black mx-auto px-[16px] lg:hidden block pt-[30px]"
          >
            <h2 className="text-white/80 font-google-sans-flex font-semibold text-[2.5rem] mb-[24px]">How it works.</h2>

            <div
              className={`w-full transition-all duration-300 bg-[#fff] border border-black/30 rounded-[24px] flex flex-col gap-[12px] mb-[12px]`}
            >
              <div className="flex items-center gap-[6px] pb-0 pt-[12px] px-[16px]">
                <svg className="w-[26px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="#000" stroke-miterlimit="10" d="M9 2.594v25.562l1.656-1.375 4.031-3.375 2.032 4.032.437.906.907-.469 3.093-1.594.875-.437-.437-.907-1.844-3.625 5.063-.625 2.03-.25L25.407 19 10.72 4.281zm2 4.844 11.563 11.53-4.5.532-1.407.188.657 1.28 2.062 4-1.313.688-2.156-4.312-.594-1.125-.968.812L11 23.844z" font-family="none" font-size="none" font-weight="none" style={{mixBlendMode : 'normal'}} text-anchor="none" transform="scale(8)"/></svg>
                <p className="text-black font-outfit leading-[110%] font-semibold text-[1.375rem] sm:text-[1.8rem]">Pick a template</p>
              </div>
              <video
                src="https://playntestimages.s3.eu-central-1.amazonaws.com/Videos/Adil+Videos+23.11/Domain+Demo.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full aspect-video object-cover rounded-[16px] border border-primary/80"
              ></video>
            </div>

            <div
              className={`w-full transition-all duration-300 bg-[#fff] border border-black/30 rounded-[24px] flex flex-col gap-[12px] mb-[12px]`}
            >
              <div className="flex items-center gap-[8px] pt-[12px] px-[16px]">
                <svg className="w-[24px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="#000" stroke-miterlimit="10" d="m38.657 18.536 2.44-2.44a6.509 6.509 0 0 0 0-9.193 6.457 6.457 0 0 0-4.597-1.9 6.456 6.456 0 0 0-4.597 1.901l-2.439 2.439zm-11.314-7.072L9.274 29.533a3.51 3.51 0 0 0-.848 1.375l-3.35 10.121a1.498 1.498 0 0 0 1.896 1.895l10.118-3.351c.517-.17.993-.463 1.378-.849l18.068-18.068z" font-family="none" font-size="none" font-weight="none" style={{mixBlendMode : 'normal'}} text-anchor="none" transform="scale(5.33333)"/></svg>
                <p className="text-black font-outfit leading-[110%] font-semibold text-[1.375rem] sm:text-[1.8rem] whitespace-nowrap">Customize Your Content</p>
              </div>
              <video
                src="https://playntestimages.s3.eu-central-1.amazonaws.com/Videos/Adil+Videos+23.11/Domain+Demo.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full aspect-video object-cover rounded-[16px] border border-primary/80"
              ></video>
            </div>

            <div
              className={`w-full transition-all duration-300 bg-[#fff] border border-black/30 rounded-[24px] flex flex-col gap-[12px] mb-[12px]`}
            >
              <div className="flex items-center gap-[8px] pt-[12px] px-[16px]">
                <svg className='w-[25px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"/><path d="M21 16.5a1 1 0 0 1-.53.88l-7.9 4.44a1 1 0 0 1-1.14 0l-7.9-4.44A1 1 0 0 1 3 16.5v-9a1 1 0 0 1 .53-.88l7.9-4.44a1 1 0 0 1 1.14 0l7.9 4.44a1 1 0 0 1 .53.88v9M12 4.15 5 8.09v7.82l7 3.94 7-3.94V8.09l-7-3.94m0 2.08 4.9 2.83-4.9 2.83-4.9-2.83L12 6.23m5 8.66-4 2.31v-3.58l4-2.31v3.58m-6 2.31-4-2.31v-3.58l4 2.31Z"/></svg>
                <p className="text-black font-outfit leading-[110%] font-semibold text-[1.375rem] sm:text-[1.8rem] whitespace-nowrap">Publish Instantly</p>
              </div>
              <video
                src="https://playntestimages.s3.eu-central-1.amazonaws.com/Videos/Adil+Videos+23.11/Domain+Demo.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full aspect-video object-cover rounded-[16px] border border-primary/80"
              ></video>
            </div>
          </div>
        </section>

        {/* Templates review */}
        <section className="w-full py-[40px] bg-white">
          <div className="container mx-auto w-full">
            <div className="bg-[#f5f5f5]/90 w-full p-[16px] sm:p-[24px] rounded-[32px] sm:rounded-[60px]">
              <h2 className="text-primary font-outfit text-center font-medium text-[2rem] mb-[24px]">Templates Preview</h2>
                
              <div className="flex mb-[32px] flex-wrap items-stretch gap-y-[32px] gap-x-[32px] xl:gap-[75px] justify-center">
                {
                  portfolios.map(portfolio => (
                    <TemplateCard key={portfolio.title} type={portfolio.type} title={portfolio.title} price={portfolio.price} description={portfolio.description} views={portfolio.views} created={portfolio.created} link={portfolio.link} img={portfolio.img} />
                  ))
                }
              </div>

              <div className="flex items-center justify-evenly flex-wrap gap-[24px] mb-[16px]">
                <div className="w-fit flex flex-col items-center">
                  <div className="flex items-center gap-[2px]">
                    <CountUp
                      from={0}
                      to={15}
                      direction="up"
                      duration={2}
                      startWhen
                      className="text-[2.5rem] sm:text-[3rem] font-semibold tracking-tight font-poppins"
                    />
                    <p className="text-[2.5rem] sm:text-[3rem] font-semibold tracking-tight font-poppins">+</p>
                  </div>

                  <p className="text-[1.5rem] font-outfit font-medium leading-[100%] mt-[-2px]">Free Templates</p>
                </div>
                
                <div className="w-fit flex flex-col items-center">
                  <div className="flex items-center gap-[2px]">
                    <CountUp
                      from={0}
                      to={25}
                      direction="up"
                      duration={2}
                      startWhen
                      className="text-[2.5rem] sm:text-[3rem] font-semibold tracking-tight font-poppins"
                    />
                    <p className="text-[2.5rem] sm:text-[3rem] font-semibold tracking-tight font-poppins">+</p>
                  </div>

                  <p className="text-[1.5rem] font-outfit font-medium leading-[100%] mt-[-2px]">Pro Templates</p>
                </div>

                <div className="w-fit flex flex-col items-center">
                  <div className="flex items-center gap-[2px]">
                    <CountUp
                      from={0}
                      to={5}
                      direction="up"
                      duration={2}
                      startWhen
                      className="text-[2.5rem] sm:text-[3rem] font-semibold tracking-tight font-poppins"
                    />
                    <p className="text-[2.5rem] sm:text-[3rem] font-semibold tracking-tight font-poppins">+</p>
                  </div>

                  <p className="text-[1.5rem] font-outfit font-medium leading-[100%] mt-[-2px]">VIP Templates</p>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <SeeAllButton />
              </div>
            </div>
          </div>
        </section>

        {/* Faq */}
        <section className="w-full relative">
          <div className="absolute w-full h-full">
            <Squares
              speed={0.5} 
              squareSize={40}
              direction='diagonal' // up, down, left, right, diagonal
              borderColor='#7d7d7d'
              hoverFillColor='#222'
            />
          </div>
          <div className="container mx-auto py-[65px] relative z-[10]">
            <Faq1 />
          </div>
        </section>

        {/* Portfolio */}
        <section className="w-full relative bg-[radial-gradient(circle_at_center,_#7ea6ec_0%,_#3d7eed_80%)]">
          <div className="max-w-[1100px] mx-auto px-[24px] py-[100px]">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight text-center font-poppins mb-[24px]">
              <BlurText
                text="Your portfolio shouldn’t take weeks"
                className="z-5  hero-text justify-center"
                delay={200}
                stepDuration={0.35}
                animateBy="words"
                direction="bottom"
                threshold={0.1}
                rootMargin="0px"
                onAnimationComplete={() => setShowLastLine(true)}
              />
            </h1>

            <div data-aos='zoom-in' data-aos-delay='100' className="flex items-center justify-center">
              <SeeAllButton title="Start building for free" />
            </div>
          </div>
        </section>

      </div>
    </>
  )
}

export default LandingPage

export const SeeAllButton = ({title = 'See All', link = '/templates'}: {title?: string, link?: string}) => {
  return (
    <Link
      to={link}
      className="flex items-center gap-[10px] pl-[18px] py-[6px] pr-[6px] bg-[#131313] w-fit rounded-[99px] group see-allbutton-wrapper"
    >
      <p className="text-[1.125rem] font-outfit text-white leading-[100%]">
        {title}
      </p>

      <div
        className="w-[30px] h-[30px] flex items-center justify-center transition-colors duration-150 justify-center bg-[#3c7be9] group-hover:bg-white transition-colors duration-300 rounded-full"
      >
        <svg className="group-hover:rotate-[360deg] transition-transform duration-300 text-white group-hover:text-[#131313] w-[22px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
      </div>
    </Link>
  )
}


export const LearnMoreButton = ({title, link, className} : {title: string, link: string, className?: string}) => {
  return (
    <Link
      to={link}
      className={`overflow-hidden relative px-[22px] md:px-[27px] lg:px-[34px] py-[9px] sm:py-[10px] md:py-[11px] lg:py-[12px] leading-[100%] rounded-[24px] bg-white/10 border border-white/10 text-white ${className} backdrop-blur-xl text-[0.875rem] sm:text-[0.938rem] md:text-[1rem] text-center`}
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