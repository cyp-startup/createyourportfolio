import { Link } from 'react-router-dom'
import logo from '../images/logo.svg'
import basketball from '../images/basketball.svg'
import instagram from '../images/instagram.svg'
import twitter from '../images/twitter.svg'

export default function Footer() {
  return (
    <footer className='w-full border-t-[3px] border-black px-[50px] min-[535px]:px-[100px] py-[67px] min-[535px]:py-[90px]'>
      <div className='container flex flex-col gap-y-[27px] min-[939px]:flex-row justify-between items-center'>
        <Link to={'/'} className='flex items-center'>
          <img className='w-[30px] min-[460px]:w-[49px] mr-[15px]' width={49} height={49} alt='logo' src={logo} />
          <span className='text-[24px] min-[460px]:text-[36px] font-[500]'>znis</span>
        </Link>
        <p className='text-[25px] min-[460px]:text-[32px] font-medium'>Portfolio 2024</p>
        <ul className='flex items-center gap-[0] min-[460px]:w-auto w-full min-[460px]:justify-normal justify-between min-[460px]:gap-[70px]'>
          <li>
            <a href="https://themeforest.net/" target='_blank'>
              <img className='w-[34px] min-[460px]:w-[40px]' width={40} height={40} alt='basket' src={basketball} />
            </a>
          </li>
          <li>
            <a href="https://themeforest.net/" target='_blank'>
              <img className='w-[34px] min-[460px]:w-[40px]' width={40} height={40} alt='instagram' src={instagram} />
            </a>
          </li>
          <li>
            <a href="https://themeforest.net/" target='_blank'>
              <img className='w-[34px] min-[460px]:w-[40px]' width={40} height={40} alt='twitter' src={twitter} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}