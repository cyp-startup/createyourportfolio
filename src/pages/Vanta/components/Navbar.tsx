import logo from '@/assets/logo.svg'
import { useState } from 'react'

const Navbar = () => {
    const [openNavbar, setOpenNavbar] = useState(false)

    return (
        <>
            <nav className="absolute z-[999] left-1/2 -translate-x-1/2 top-[45px] flex items-center justify-between w-full max-w-[1406px] px-[24px] mx-auto text-white">
                <div className="w-[30px] min-[890px]:w-[47px] h-auto">
                    <img className="w-full h-auto object-contain object-center" src={logo} alt="" />
                </div>

                <div>
                    <button onClick={() => setOpenNavbar(true)} className="min-[768px]:hidden flex flex-col gap-[5px] w-[25px]">
                        <div className="w-full bg-white h-[2px]"></div>
                        <div className="w-full bg-white h-[2px]"></div>
                    </button>
                </div>

                <div className='items-center gap-[8px] font-montserrat min-[768px]:flex hidden'>
                    <button className='px-[25px] py-[13px]'>
                        <p className='text-center font-bold text-[1.063rem] leading-[100%]'>About me</p>
                    </button>

                    <button className='px-[25px] py-[13px]'>
                        <p className='text-center font-bold text-[1.063rem] leading-[100%]'>Skills</p>
                    </button>

                    <button className='px-[25px] py-[13px] mr-[25px]'>
                        <p className='text-center font-bold text-[1.063rem] leading-[100%]'>Portfolio</p>
                    </button>

                    <button className='px-[20px] py-[13px] bg-white rounded-[30px]'>
                        <p className='text-[0.938rem] font-bold text-black leading-[100%]'>CONTACT ME</p>
                    </button>
                </div>
            </nav>

            <div className={`${openNavbar ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-200 bg-[#eee] min-[768px]:hidden fixed top-0 left-0 h-screen px-[30px] z-[999999] flex flex-col gap-[16px] text-primary w-[85%] min-[568px]:w-[320px] items-start py-[20px]`}>
                <button onClick={() => setOpenNavbar(false)} className='mt-[16px]'>
                    <svg className="w-[17px]" fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 460.775 460.775" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55 c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55 c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505 c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55 l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719 c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"></path> </g></svg>
                </button>
                
                <button className='py-[13px]'>
                    <p className='font-bold text-[1.063rem] leading-[100%]'>About me</p>
                </button>

                <button className='py-[13px]'>
                    <p className='font-bold text-[1.063rem] leading-[100%]'>Skills</p>
                </button>

                <button className='py-[13px] grow flex items-start justify-start'>
                    <p className='font-bold text-[1.063rem] leading-[100%]'>Portfolio</p>
                </button>

                <button className='px-[20px] py-[13px] bg-primary rounded-[30px]'>
                    <p className='text-[0.938rem] font-bold text-white leading-[100%]'>CONTACT ME</p>
                </button>
            </div>

            {
                openNavbar &&
                <div onClick={() => setOpenNavbar(false)} className='fixed w-screen h-screen top-0 left-0 bg-black/50 z-[99999]'></div>
            }
        </>
    )
}

export default Navbar