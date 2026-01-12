import { useState } from "react";
import { Link } from "react-router-dom";
import TemplateCard from "./TemplateCard";
import monkeymeme from '../assets/monkeymeme.png'
import bombaclatbillioner from '../assets/bombaclatbillioner.jpg'
import baydarman from '../assets/baydarman.jpg'

const UserPortfolios = () => {
  const [memeStep, setMemeStep] = useState(1)
  const [respond, setRespond] = useState('no')
  
  if (true) {
    return (
      <div className="aspect-square border border-primary max-w-[500px] mx-auto" data-aos='fade-up' data-aos-delay='200'>
        <div className="w-full h-full relative">
          {
            memeStep === 1 &&
            <div className="absolute flex flex-col gap-[16px] items-center justify-center left-0 bottom-[60px] sm:bottom-[110px] w-full z-11">
              <h2 className="mb-[12px] sm:mb-[24px] font-geist text-white tracking-[6%] text-[1.25rem] sm:text-[1.5rem] font-bold [text-shadow:1.6px_0_#000,-1.6px_0_#000,0_1.6px_#000,0_-1.6px_#000]">You do not have a portfolio?</h2>
              <div className="flex items-center gap-[60px]">
                <button 
                  onClick={() => {
                    setMemeStep(2) 
                    setRespond('yeah')
                  }}
                  className="text-[1rem] sm:text-[1.125rem] font-semibold font-montserrat text-white [text-shadow:1.6px_0_#000,-1.6px_0_#000,0_1.6px_#000,0_-1.6px_#000]"
                >
                  yeaaah…
                </button>
                <button 
                  onClick={() => {
                    setMemeStep(2) 
                    setRespond('no')
                  }}
                  className="text-[1rem] sm:text-[1.125rem] font-semibold font-montserrat text-white [text-shadow:1.6px_0_#000,-1.6px_0_#000,0_1.6px_#000,0_-1.6px_#000]"
                >
                  i do
                </button>
              </div>
            </div>
          }

          {
            memeStep === 2 &&
            <div className="absolute flex flex-col gap-[16px] items-center justify-center left-0 bottom-[60px] sm:bottom-[110px] w-full z-11">
              <h2 className="mb-[12px] sm:mb-[24px] font-geist text-white tracking-[6%] text-[1.25rem] sm:text-[1.5rem] font-bold [text-shadow:1.6px_0_#000,-1.6px_0_#000,0_1.6px_#000,0_-1.6px_#000]">{respond === 'no' ? 'How about having one more?' : respond === 'yeah' ? "Then let's create it!" : "Why don't u just wanna try it"} {}</h2>
              {
                respond !== 'no-2' ? (
                  <div className="flex items-center gap-[60px]">
                    <Link
                      to={'/templates'}
                      className="text-[1rem] sm:text-[1.125rem] font-semibold font-montserrat text-white [text-shadow:1.6px_0_#000,-1.6px_0_#000,0_1.6px_#000,0_-1.6px_#000]"
                    >
                      Yeaaah!
                    </Link>
                    <button 
                      onClick={() => {
                        setRespond('no-2')
                      }}
                      className="text-[1rem] sm:text-[1.125rem] font-semibold font-montserrat text-white [text-shadow:1.6px_0_#000,-1.6px_0_#000,0_1.6px_#000,0_-1.6px_#000]"
                    >
                      NO
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center">
                    <Link
                      to={'/templates'}
                      className="text-[1rem] sm:text-[1.125rem] font-semibold font-montserrat text-white [text-shadow:1.6px_0_#000,-1.6px_0_#000,0_1.6px_#000,0_-1.6px_#000]"
                    >
                      Okay Let's give it a try
                    </Link>
                  </div>
                )
              }
            </div>
          }
          <img className={`${memeStep === 1 ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500 absolute top-0 left-0 w-full h-full object-center object-cover`} src={monkeymeme} alt="You do not have a portfolio?" />
          <img className={`${memeStep === 2 ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500 absolute top-0 left-0 w-full h-full object-center object-cover`} src={bombaclatbillioner} alt="You do not have a portfolio?" />
          <img className={`${memeStep === 2 && respond === 'no-2' ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500 absolute top-0 left-0 w-full h-full object-center object-cover`} src={baydarman} alt="You do not have a portfolio?" />
        </div>
      </div>
    )
  }

  return (
    <div className="p-[18px] flex items-center justify-center gap-[16px] flex-wrap">
    </div>
  )
}

export default UserPortfolios