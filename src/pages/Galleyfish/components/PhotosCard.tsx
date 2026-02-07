const PhotosCard = ({img} : {img: string}) => {
  return (
    <div className='break-inside-avoid mb-[24px]'>
        <div className='w-full h-auto mb-[24px]'>
            <img className='w-full h-auto object-cover object-center' src={img} alt="" />
        </div>

        <div>
            <h2 className='text-[1] font-google-sans-flex font-semibold leading-[100%]'>Optical Illusion</h2>
            <p className='text-[0.938rem] font-medium text-black/80 font-google-sans-flex'>creative/urban</p>
        </div>
    </div>
  )
}

export default PhotosCard