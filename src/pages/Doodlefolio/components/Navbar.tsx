import { useState } from "react"
import { Link } from "react-router-dom"
import starShake from '../images/star-shake.svg'
import logo from '../images/logo.svg'
import burger from '../images/burger.svg'

const Navbar = () => {
    const [navbarState, setNavbarState] = useState(false)

    const handleNavbar = () => {
      setNavbarState(!navbarState)
    }

    return (
        <header className="sm:py-[58px] py-[38px] relative">
            <img className="w-[151px] absolute bottom-[-35px] left-[-64px]" alt="star-shake" src={starShake} />
            <img className="w-[151px] absolute top-[-46px] right-[-51px]" alt="star-shake" src={starShake} />
            <div className="absolute w-[100vw] h-[3px] bg-black bottom-0"></div>

            <nav className='mx-auto px-[20px] w-full max-w-[732px]'>
                <div className='navbar z-50 relative bg-[#fafafa] border-[3px] border-black'>
                    <div className='w-[14px] h-[14px] absolute top-[-10px] left-[-10px] bg-[#fafafa] border-[3px] border-black'></div>
                    <div className='w-[14px] h-[14px] absolute top-[-10px] right-[-10px] bg-[#fafafa] border-[3px] border-black'></div>
                    <div className='w-[14px] h-[14px] absolute bottom-[-10px] left-[-10px] bg-[#fafafa] border-[3px] border-black'></div>
                    <div className='w-[14px] h-[14px] absolute bottom-[-10px] right-[-10px] bg-[#fafafa] border-[3px] border-black'></div>
                    <div className='flex items-center min-[665px]:pr-[0px] pr-[9px]'>
                        <Link to={'/'} className='flex border-r-[0px] min-[665px]:border-r-[3px] border-black items-center flex-grow-[1] py-[12px] px-[14px] min-[665px]:px-[22px]'>
                            <img className='w-[32px] mr-[15px]' width={32} height={32} alt='logo' src={logo} />
                            <span className='text-[30px] font-[500]'>znis</span>
                        </Link>
                        <ul className={`flex transition-[opacity] min-[665px]:opacity-[1] ${navbarState === false ? "opacity-[0]" : "opacity-[1]"} flex-wrap min-[589px]:flex-row flex-col items-center absolute z-40 border-x-[3px] border-black min-[665px]:border-b-[0px] border-b-[3px] min-[665px]:border-x-[0px] min-[665px]:bg-[transparent] bg-[#fafafa] max-[665px]:navbar left-[50%] min-[665px]:left-[0] min-[665px]:translate-x-[0] translate-x-[-50%] bottom-[-305%] min-[589px]:bottom-[-105%] w-[80%] min-[665px]:w-[auto] min-[665px]:relative`}>
                            <Link to={'#services'} className={`py-[16.5px] ${navbarState === false ? "cursor-default hidden min-[665px]:block" : "block cursor-pointer"} px-[22px] border-r-[0px] min-[589px]:border-r-[3px] border-black`}>
                            <p className='cursor-pointer text-[24px] font-medium'>Services //</p>
                            </Link>
                            <Link to={'#portfolio'} className={`py-[16.5px] ${navbarState === false ? "cursor-default hidden min-[665px]:block" : "block cursor-pointer"} px-[22px] border-r-[0px] min-[589px]:border-r-[3px] border-black`}>
                            <p className='cursor-pointer text-[24px] font-medium'>Portfolio</p>
                            </Link>
                            <Link to={'#hireme'} className={`py-[16.5px] px-[22px] ${navbarState === false ? "cursor-default hidden min-[665px]:block" : "block cursor-pointer"}`}>
                            <p className='cursor-pointer text-[24px] font-medium'>Hire Me</p>
                            </Link>
                        </ul>
                        <button onClick={handleNavbar} className='block min-[665px]:hidden'>
                            <img width={37} height={37} alt='burger' className='w-[37px]' src={burger} />
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar