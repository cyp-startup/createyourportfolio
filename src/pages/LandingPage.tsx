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

const LandingPage = () => {
  const [showSecondLine, setShowSecondLine] = useState(false);
  const ref = useRef<HTMLElement | null>(null)
  const [flat, setFlat] = useState(false)
  const [buildInStep, setBuildInStep] = useState(1)
  const scrollLock = useRef(false)
  const stickyTriggerRef = useRef<HTMLDivElement | null>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const scrollAccumulator = useRef(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        // Reset accumulator when entering/leaving to prevent jumpy starts
        scrollAccumulator.current = 0;
      },
      { 
        threshold: 1.0, // Only trigger when the WHOLE sticky box is in view
        rootMargin: "-130px 0px 0px 0px" 
      }
    );
  
    if (stickyTriggerRef.current) {
      observer.observe(stickyTriggerRef.current);
    }
  
    return () => observer.disconnect();
  }, []);
  
  useEffect(() => {
    const handleStepScroll = (e: WheelEvent) => {
      if (!isIntersecting || scrollLock.current) return;
  
      const delta = e.deltaY;
  
      // 1. Check if we should release the scroll to the rest of the page
      if (buildInStep === 3 && delta > 0) return; // Let user scroll down past section
      if (buildInStep === 1 && delta < 0) return; // Let user scroll up away from section
  
      // 2. Lock the page scroll while we are in-between steps
      if (e.cancelable) e.preventDefault();
  
      // 3. Accumulate scroll to handle trackpad sensitivity
      scrollAccumulator.current += delta;
  
      // Trigger step change only after a certain amount of "effort"
      if (Math.abs(scrollAccumulator.current) > 100) {
        scrollLock.current = true;
        
        setBuildInStep((prev) => {
          const direction = scrollAccumulator.current > 0 ? 1 : -1;
          const nextStep = Math.max(1, Math.min(3, prev + direction));
          return nextStep;
        });
  
        // Reset accumulator and unlock after animation
        scrollAccumulator.current = 0;
        setTimeout(() => {
          scrollLock.current = false;
        }, 700); // Match this to your transition duration
      }
    };
  
    // Vital: Add listener to window, but only block when intersecting
    window.addEventListener("wheel", handleStepScroll, { passive: false });
    
    return () => window.removeEventListener("wheel", handleStepScroll);
  }, [isIntersecting, buildInStep]);

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
            className="mb-[30px] sm:mb-[50px] md:mb-[100px] lg:mb-[170px] xl:mb-[260px] container mx-auto w-full relative aspect-video overflow-hidden px-[16px]"
          >
            <img className="w-full h-full object-cover object-center rounded-[24px]" src="data:image/avif;base64,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" alt="" />
          </section>

          {/* Templates */}
          <section className="container mx-auto w-full relative flex xl:items-center justify-baseline gap-[120px] xl:gap-[30px] px-[16px] xl:flex-row flex-col">
            <div className="w-fit shrink-0">
              <h3 className="font-google-sans-flex tracking-tight leading-[115%] text-white/85 mb-[12px] font-bold text-[2rem] sm:text-[3.5rem] md:text-[4rem]">Grab the template you <br /> like and tweak it.</h3>
              <p className="text-[0.75rem] sm:text-[0.938rem] md:text-[1rem] text-white/70 font-poppins font-medium text-wh/60 leading-[150%]">CYP helps you launch projects instantly without the usual hassle. <br className="sm:block hidden" /> Save time, skip the setup, and get your ideas live in minutes, <br className="sm:block hidden" /> no coding, no design skills needed</p>
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
          className={`overflow-x-visible w-full lg:min-h-[220vh] bg-white relative z-[55] py-[40px] transition-[border-radius] duration-500 ease-out
          ${flat ? "rounded-t-none" : "rounded-t-[50px] lg:rounded-t-[200px]"}`}
        >
          <div className="sticky mx-auto lg:block hidden w-[898px] h-[65px] top-[23px] bg-black rounded-[40px] mb-[360px]"></div>
          {/* Build in 3 steps */}
          <div
            className="max-w-[1150px] text-black mx-auto px-[16px] sticky top-[130px] lg:block hidden"
          >
            <div 
              ref={stickyTriggerRef}
              data-aos="fade-up" className="flex items-stretch gap-[16px]"
            >
              {/* left side */}
              <div className="shrink-0 w-[420px] flex flex-col">
                <h2 className="text-black/80 font-google-sans-flex font-semibold text-[2.5rem] mb-[24px]">How it works.</h2>
                
                <div className="grow flex flex-col gap-[16px]">
                  <button
                    onClick={() => setBuildInStep(1)}
                    className={`${buildInStep === 1 ? 'grow' : ''} w-full transition-all duration-300 bg-black p-[16px] rounded-[16px] flex items-start`}
                  >
                    <div className="flex items-center gap-[12px]">
                      <svg className="w-[36px]" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" id="Icons" fill="#fff" version="1.1" viewBox="0 0 32 32"><g id="SVGRepo_iconCarrier"><style>.st1,.st2,.st3.st2,.st3.st3</style><path d="M29 22v4h-4"/><path d="M19 26h-9"/><path d="M7 26H3v-4"/><path d="M3 18v-6"/><path d="M3 10V6h4"/><path d="M13 6h9"/><path d="M25 6h4v4"/><path d="M29 14v6"/></g></svg>
                      <p className="text-white/90 font-outfit leading-[110%] font-semibold text-[1.8rem]">Pick a template</p>
                    </div>
                  </button>

                  <button
                    onClick={() => setBuildInStep(2)}
                    className={`${buildInStep === 2 ? 'grow' : ''} w-full transition-all duration-300 bg-black px-[10px] py-[16px] rounded-[16px] flex items-start`}
                  >
                    <div className="flex items-center gap-[16px]">
                      <svg className="w-[31px]" xmlns="http://www.w3.org/2000/svg" fill="#000" stroke="#000" aria-hidden="true" viewBox="0 0 64 64"><path fill="#fff" d="M61.501 55.155 26.109 19.77l1.613-1.614a2.245 2.245 0 0 0 .597-2.096C37.728 8.44 47.494 4.102 54.763 4.074 47.283-.331 34.92 2.448 23.59 10.84l-.647-.647a2.257 2.257 0 0 0-3.188 0l-1.613 1.612-3.489-3.487c-.35-.348-.791-.499-1.279-.499-2.761 0-7.043 4.855-5.064 6.815l3.501 3.5-1.618 1.618a2.262 2.262 0 0 0 0 3.186l.649.648C2.448 34.911-.332 47.271 4.074 54.747c.031-7.266 4.369-17.03 11.989-26.435a2.252 2.252 0 0 0 2.095-.596l1.619-1.617 35.404 35.396c.348.352.788.505 1.276.505 2.743 0 7.005-4.869 5.044-6.845"/></svg>
                      <p className="text-white/90 font-outfit leading-[110%] font-semibold text-[1.8rem] whitespace-nowrap">Customize Your Content</p>
                    </div>
                  </button>

                  <button
                    onClick={() => setBuildInStep(3)}
                    className={`${buildInStep === 3 ? 'grow' : ''} w-full transition-all duration-300 bg-black p-[16px] rounded-[16px] flex items-start`}
                  >
                    <div className="flex items-center gap-[12px]">
                      <svg className="w-[33px]" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" viewBox="0 0 24 24"><path fill="#fff" d="M21 8V7h-2V2H5v5H3v1H2v10h1v1h3v3h12v-3h3v-1h1V8h-1zm-1 8h-1v1h-1v-5H6v5H5v-1H4v-6h1V9h14v1h1v6zm-4 4H8v-6h8v6zM7 4h10v3H7V4z"/></svg>
                      <p className="text-white/90 font-outfit leading-[110%] font-semibold text-[1.8rem]">Publish Instantly</p>
                    </div>
                  </button>
                </div>
              </div>

              {/* Right side */}
              <div className="grow py-[160px]">
                <div className="w-full">
                  {
                    buildInStep === 1 &&
                    <div className="w-full aspect-video">
                      <h3 className="text-primary/80 mb-[16px] text-[1.85rem] font-google-sans-flex font-medium">Clean, modern, ready-made designs</h3>
                      <video
                        src="https://playntestimages.s3.eu-central-1.amazonaws.com/Videos/Adil+Videos+23.11/Domain+Demo.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover rounded-[16px] border border-primary/80"
                      ></video>
                    </div>
                  }

                  {
                    buildInStep === 2 &&
                    <div className="w-full aspect-video">
                      <h3 className="text-primary/80 mb-[16px] text-[1.85rem] font-poppins font-medium">Edit texts, links, projects...</h3>
                      <video
                        src="https://playntestimages.s3.eu-central-1.amazonaws.com/Videos/Adil+Videos+23.11/Time+Demo.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover rounded-[16px] border border-primary/80"
                      ></video>
                    </div>
                  }

                  {
                    buildInStep === 3 &&
                    <div className="w-full aspect-video">
                      <h3 className="text-primary/80 mb-[16px] text-[1.85rem] font-poppins font-medium">Go live instantly</h3>
                      <video
                        src="https://playntestimages.s3.eu-central-1.amazonaws.com/Videos/Adil+Videos+23.11/Accuracy+Demo.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover rounded-[16px] border border-primary/80"
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
            <h2 className="text-black/80 font-google-sans-flex font-semibold text-[2.5rem] mb-[24px]">How it works.</h2>

            <div
              className={`w-full transition-all duration-300 bg-black/80 rounded-[16px] flex flex-col gap-[16px] mb-[16px]`}
            >
              <div className="flex items-center gap-[12px] p-[16px] pb-0">
                <svg className="w-[31px] sm:w-[36px]" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" id="Icons" fill="#fff" version="1.1" viewBox="0 0 32 32"><g id="SVGRepo_iconCarrier"><style>.st1,.st2,.st3.st2,.st3.st3</style><path d="M29 22v4h-4"/><path d="M19 26h-9"/><path d="M7 26H3v-4"/><path d="M3 18v-6"/><path d="M3 10V6h4"/><path d="M13 6h9"/><path d="M25 6h4v4"/><path d="M29 14v6"/></g></svg>
                <p className="text-white/90 font-outfit leading-[110%] font-semibold text-[1.375rem] sm:text-[1.8rem]">Pick a template</p>
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
              className={`w-full transition-all duration-300 bg-black/80 rounded-[16px] flex flex-col gap-[16px] mb-[16px]`}
            >
              <div className="flex items-center gap-[16px] p-[16px] pb-0">
                <svg className="w-[26px] sm:w-[31px]" xmlns="http://www.w3.org/2000/svg" fill="#000" stroke="#000" aria-hidden="true" viewBox="0 0 64 64"><path fill="#fff" d="M61.501 55.155 26.109 19.77l1.613-1.614a2.245 2.245 0 0 0 .597-2.096C37.728 8.44 47.494 4.102 54.763 4.074 47.283-.331 34.92 2.448 23.59 10.84l-.647-.647a2.257 2.257 0 0 0-3.188 0l-1.613 1.612-3.489-3.487c-.35-.348-.791-.499-1.279-.499-2.761 0-7.043 4.855-5.064 6.815l3.501 3.5-1.618 1.618a2.262 2.262 0 0 0 0 3.186l.649.648C2.448 34.911-.332 47.271 4.074 54.747c.031-7.266 4.369-17.03 11.989-26.435a2.252 2.252 0 0 0 2.095-.596l1.619-1.617 35.404 35.396c.348.352.788.505 1.276.505 2.743 0 7.005-4.869 5.044-6.845"/></svg>
                <p className="text-white/90 font-outfit leading-[110%] font-semibold text-[1.375rem] sm:text-[1.8rem] whitespace-nowrap">Customize Your Content</p>
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
              className={`w-full transition-all duration-300 bg-black/80 rounded-[16px] flex flex-col gap-[16px] mb-[16px]`}
            >
              <div className="flex items-center gap-[12px] p-[16px] pb-0">
                <svg className="w-[28px] sm:w-[33px]" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" viewBox="0 0 24 24"><path fill="#fff" d="M21 8V7h-2V2H5v5H3v1H2v10h1v1h3v3h12v-3h3v-1h1V8h-1zm-1 8h-1v1h-1v-5H6v5H5v-1H4v-6h1V9h14v1h1v6zm-4 4H8v-6h8v6zM7 4h10v3H7V4z"/></svg>
                <p className="text-white/90 font-outfit leading-[110%] font-semibold text-[1.375rem] sm:text-[1.8rem]">Publish Instantly</p>
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
          <div className="container px-[16px] mx-auto w-full">
            <div className="bg-[#f5f5f5]/90 w-full p-[16px] sm:p-[24px] rounded-[32px] sm:rounded-[60px]">
              <h2 className="text-primary font-outfit text-center font-medium text-[2rem] mb-[24px]">Templates Preview</h2>
                
              <div className="flex mb-[56px] flex-wrap items-stretch gap-y-[32px] gap-x-[32px] xl:gap-[75px] justify-center">
                <TemplateCard />
                <TemplateCard />
                <TemplateCard />
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
          <div className="container mx-auto px-[16px] py-[65px] relative z-[10]">
            <Faq1 />
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