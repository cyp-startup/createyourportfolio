import logo from '@/assets/logo-black.svg'

const Navbar = () => {
  return (
    <nav className="absolute z-[999] left-1/2 -translate-x-1/2 top-[45px] flex items-center justify-between w-full max-w-[1406px] px-[24px] mx-auto text-white">
        <div className="w-[47px] h-auto">
            <img className="w-full h-auto object-contain object-center" src={logo} alt="" />
        </div>

        <div className='flex items-center gap-[8px] font-montserrat'>
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
  )
}

export default Navbar