import { useState } from "react"
import { SeeAllButton } from "./LandingPage"
import Noise from "@/components/Noise"
import UserPortfolios from "@/components/UserPortfolios"

const ProfilePage = () => {
    const [toggle, setToggle] = useState('portfolios')

    return (
        <div className="w-full min-h-[calc(100vh_-_67px)] bg-[#bebdbd] bg-[radial-gradient(circle_at_center,_#e8e8e8_0%,_#bebdbd_100%)] pb-[32px] relative">
            <div className="container relative mx-auto pt-[120px]">
                <div className="flex items-end gap-[24px] mb-[32px]">
                    <div className="w-[300px] h-[300px] rounded-[56px] flex items-center justify-center overflow-hidden bg-primary backdrop-blur-xl border border-black/30 overflow-hidden">
                        {/* <h1 className="uppercase text-[10rem] font-outfit text-white font-medium">B</h1> */}
                        <img className="w-full h-full object-cover object-center" src="https://wallpaperbat.com/img/8629684-mid-hair-styles.jpg" alt="" />
                        <Noise
                            patternSize={250}
                            patternScaleX={2}
                            patternScaleY={2}
                            patternRefreshInterval={2}
                            patternAlpha={15}
                            className="!w-[150vw] !h-[150vh]"
                        />
                    </div>

                    <div className="mb-[20px]">
                        <h2 className="text-[#000] text-[3rem] font-semibold font-outfit leading-[100%] tracking-tight mb-[14px]">Black Noir</h2>
                        <p className="text-[1rem] font-google-sans-flex text-[#000]/70 leading-[130%] mb-[18px]">Welcome Back Black Noir! <br /> khamidullayevammoriddin@gmail.com</p>
                    
                        <div className="flex items-center gap-[12px]">
                            <SeeAllButton title="Browse Templates" />

                            <button
                                className="flex items-center gap-[10px] pl-[18px] py-[6px] pr-[6px] bg-[#fff] w-fit rounded-[99px] group see-allbutton-wrapper"
                            >
                                <p className="text-[1.125rem] font-outfit text-[#131313] leading-[100%]">
                                    Settings
                                </p>

                                <div
                                    className="w-[30px] h-[30px] flex items-center justify-center transition-colors duration-150 justify-center bg-[#3c7be9] group-hover:bg-primary transition-colors duration-300 rounded-full"
                                >
                                    <svg className="group-hover:rotate-[360deg] transition-transform duration-300 text-white w-[22px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="w-full border-b border-primary/10 flex items-center gap-[6px] mb-[24px]">
                    <button 
                        onClick={() => setToggle('portfolios')}
                        className={`${toggle === 'portfolios' ? 'border-b-2 border-primary' : ''} pb-[12px] px-[8px] py-[6px]`}
                    >
                        <p className="text-[0.938rem] font-roboto-flex font-medium leading-[100%]">Portfolios</p>
                    </button>
                    <button 
                        onClick={() => setToggle('settings')}
                        className={`${toggle === 'settings' ? 'border-b-2 border-primary' : ''} pb-[12px] px-[8px] py-[6px]`}
                    >
                        <p className="text-[0.938rem] font-roboto-flex font-medium leading-[100%]">Settings</p>
                    </button>
                    <button 
                        onClick={() => setToggle('basket')}
                        className={`${toggle === 'basket' ? 'border-b-2 border-primary' : ''} pb-[12px] px-[8px] py-[6px]`}
                    >
                        <p className="text-[0.938rem] font-roboto-flex font-medium leading-[100%]">Basket</p>
                    </button>
                </div>

                {
                    toggle === 'portfolios' &&
                    <div>
                        <UserPortfolios />
                    </div>
                }
            </div>
        </div>
    )
}

export default ProfilePage