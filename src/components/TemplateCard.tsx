import { Link } from 'react-router-dom'
import portfolio from '../assets/portfolios/cyp.png'
import GradientText from './GradientText'

const TemplateCard = () => {
  return (
    <Link to={'/templates/reacbitfolio'} className="w-[350px] flex flex-col">
      <div className="w-full h-[300px] relative rounded-[12px] overflow-hidden mb-[14px]">
        <img className='w-full h-full object-cover object-center' src={portfolio} alt="" />

        <div className='absolute top-[16px] z-[15] right-[16px] px-[6px] rounded-[12px] bg-white/10 backdrop-blur-xl border border-white/10'>
          <GradientText
            colors={["#c76e00", "#4f000b", "#eb4511"]}
            animationSpeed={8}
            direction='horizontal'
            yoyo
            showBorder={false}
            className="font-google-sans-flex font-semibold"
          >
            16.49$
          </GradientText>
        </div>
      </div>

      {/* description */}
      <div className='px-[12px] mb-[16px]'>
        <p className='font-poppins text-[0.938rem] font-medium text-black/60'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quasi. Officiis sapiente architecto quas, a totam provident quod</p>
      </div>

      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-[8px]'>
          <svg className="w-[18px] shrink-0 hover:rotate-[-720deg] transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55 59" fill="none"><path fill="#060d0d" d="M54.642 39.509a30 30 0 0 1-12.894 15.185c-5.902 3.445-21.124-53.64-19.563 3.761A30 30 0 0 1 4.58 49.133c-4.636-5.022-6.956-17.348 17.605-18.848-24.56 1.5-24.084-13.038-20.178-18.646A30 30 0 0 1 18.174 0c8.95 52.285 13.576-1.553 19.893 1.054a30 30 0 0 1 14.848 13.281l-26.29 14.45L54.641 39.51Z"/></svg>

          <p className='text-[1.125rem] font-outfit font-medium leading-[100%]'>Reactbitfolio</p>

          <span className='text-[#fff] px-[9px] py-[5px] leading-[100%] tracking-tight text-[0.688rem] font-poppins uppercase font-medium bg-primary rounded-[16px]'>PRO</span>
        </div>

        <div className='flex items-center gap-[6px]'>
          {/* view */}
          <div className='flex items-center gap-[3px]'>
            <svg className='w-[20px]' xmlns="http://www.w3.org/2000/svg" viewBox="-3.5 0 32 32"><path d="M12.406 13.844c1.188 0 2.156.969 2.156 2.156s-.969 2.125-2.156 2.125-2.125-.938-2.125-2.125.938-2.156 2.125-2.156zm0-5.313c7.063 0 12.156 6.625 12.156 6.625.344.438.344 1.219 0 1.656 0 0-5.094 6.625-12.156 6.625S.25 16.812.25 16.812c-.344-.438-.344-1.219 0-1.656 0 0 5.094-6.625 12.156-6.625zm0 12.813c2.938 0 5.344-2.406 5.344-5.344s-2.406-5.344-5.344-5.344S7.062 13.062 7.062 16s2.406 5.344 5.344 5.344z"/></svg>
            <p className='font-outfit text-primary font-medium text-[0.875rem]'>10k</p>
          </div>

          <div className='flex items-center gap-[3px]'>
            <svg className='w-[17px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"/><path d="M21 16.5a1 1 0 0 1-.53.88l-7.9 4.44a1 1 0 0 1-1.14 0l-7.9-4.44A1 1 0 0 1 3 16.5v-9a1 1 0 0 1 .53-.88l7.9-4.44a1 1 0 0 1 1.14 0l7.9 4.44a1 1 0 0 1 .53.88v9M12 4.15 5 8.09v7.82l7 3.94 7-3.94V8.09l-7-3.94m0 2.08 4.9 2.83-4.9 2.83-4.9-2.83L12 6.23m5 8.66-4 2.31v-3.58l4-2.31v3.58m-6 2.31-4-2.31v-3.58l4 2.31Z"/></svg>
            <p className='font-outfit text-primary font-medium text-[0.875rem]'>3k</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default TemplateCard