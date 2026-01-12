import arrow from '../images/arrow.svg'

export default function Card({image, title, description, animation} : {image: string, title: string, description: string, animation: string}) {
  
  return (
    <div className='min-[592px]:py-[45px] py-[26px] z-[10] min-[592px]:w-[auto] w-[315px] card-shadow relative px-[20px] min-[592px]:px-[35px] bg-[#fafafa]' data-aos={animation}>
      <div className='z-[-1] w-[105%] rounded-l-[15px] rounded-r-[15px] h-[7px] absolute bg-black left-[-10px] top-0'></div>
      <div className='z-[-1] w-[7px] rounded-t-[15px] rounded-b-[15px] h-[105%] absolute bg-black left-0 top-[-15px]'></div>
      <div className='z-[-1] w-[7px] rounded-t-[15px] rounded-b-[15px] h-[105%] absolute bg-black right-0 top-[-13px]'></div>
      <div className='z-[-1] w-[105%] h-[7px] rounded-l-[15px] rounded-r-[15px] absolute bg-black left-[-10px] bottom-0'></div>

      <div className='min-[592px]:w-[463px] w-[273px] overflow-hidden mb-[30px]'>
        <img className='w-full h-full object-cover' alt='project' src={image} />
      </div>

      <div>
        <div className='w-full flex items-center justify-between mb-[12px]'>
          <h2 className='text-[20px] min-[592px]:text-[36px] font-bold'>{title}</h2> 
          <div className='relative min-[592px]:w-[38px] w-[24px] h-[24px] min-[592px]:h-[38px] navbar bg-black'>
            <a href='https://www.youtube.com/' target='_blank' className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
              <img width={24} height={24} alt='arrow' src={arrow} className='min-[592px]:w-[24px] w-[24px]' />
            </a>
          </div>
        </div>
        <p className='text-[15px] min-[592px]:text-[24px] font-medium max-w-[339px]'>{description}</p>
      </div>
    </div>
  )
}