import logo from '@/assets/logo-black.svg'

const Footer = () => {
  return (
    <div className="w-[90%] mx-auto p-[40px] flex items-center justify-between">
        <div className="flex items-center gap-[8px]">
            <img src={logo} alt="logo" className="w-[20px]" />
            <a href="http://cyp.com/" target='_blank'>
                <p className='text-[1.188rem] leading-[100%] text-black font-google-sans-flex'>createyourportfolio</p>
            </a>
        </div>
    </div>
  )
}

export default Footer