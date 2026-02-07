import { Link } from 'react-router-dom'
import heroImg from './images/hero.png'
import PhotosCard from './components/PhotosCard'
import Footer from './components/Footer'

const Galleyfish = () => {
    const photos = [
        {
            img: 'https://radialposters.com/cdn/shop/files/Frameless1_68fd823a-2fb0-4c23-b59e-34739e8b1245.jpg?v=1758601227&width=1946'
        },
        {
            img: 'https://www.watchpro.com/cloud/2023/03/27/m126000-0009_2301jva_002_cmjn.jpg'
        },
        {
            img: 'https://template.canva.com/EAGpLYbfl7E/1/0/800w-omjD7VD-FgA.jpg'
        },
        {
            img: 'https://wallpaperbat.com/img/451966-wallpaper-minimalist-design-widescreen-3-wallpaper-art-wallpaper-aesthetic-desktop-wallpaper-minimalist-desktop-wallpaper-desktop-wallpaper-art.jpg'
        },
        {
            img: 'https://img.freepik.com/premium-vector/fashion-poster-template-vector-with-black-man_53876-117916.jpg?semt=ais_user_personalization&w=740&q=80'
        },
        {
            img: 'https://template.canva.com/EAGMV5kd8_g/1/0/800w-pSiNTrc6DXE.jpg'
        },
        {
            img: 'https://i.pinimg.com/736x/f8/73/65/f8736514cfd4355d15c909742160c0dc.jpg'
        },
        {
            img: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/ca5e78183703723.6544604447d86.png'
        },
        {
            img: 'https://mondoshop.com/cdn/shop/products/Woodson_Daredevil_FINAL.jpg?v=1652127758'
        }
    ]

    return (
        <div className="min-h-[100vh] flex w-full flex-col bg-white text-black">

            <header className='z-[999] fixed top-[24px] left-1/2 -translate-x-1/2 w-[90%] flex items-center justify-between'>
                <Link to={'/templates/gallewave'} className='flex items-center gap-[8px]'>
                    <svg className='w-[18px]' xmlns="http://www.w3.org/2000/svg" viewBox='0 0 16 8' fill="none"><path fill="#000" fill-rule="evenodd" d="M3.615.16.623 3.615a.605.605 0 0 0 0 .768l2.992 3.457a.427.427 0 0 0 .665 0 .605.605 0 0 0 0-.768l-2.19-2.53H16V3.457H2.09L4.28.927a.605.605 0 0 0 0-.768.427.427 0 0 0-.665 0Z" clip-rule="evenodd"/></svg>

                    <h2 className='font-normal font-poppins uppercase text-[1.125rem]'>Home</h2>
                </Link>

                <div className='flex gap-[16px]'>
                    <a href="https://www.instagram.com/cyp.dev" target='_blank'>
                        <svg className='w-[32px] h-[32px]' xmlns="http://www.w3.org/2000/svg" viewBox='0 0 32 32' fill="none"><circle cx="16" cy="16" r="9.5" stroke="#000"/><path fill="#000" fill-rule="evenodd" d="M16 6v20c5.523 0 10-4.477 10-10S21.523 6 16 6Z" clip-rule="evenodd"/></svg>
                    </a>

                    <button>
                        <div className='flex flex-col gap-[5px] w-[28px]'>
                            <div className='w-full h-[0.063rem] bg-[#000]'></div>
                            <div className='w-full h-[0.063rem] bg-[#000]'></div>
                            <div className='w-full h-[0.063rem] bg-[#000]'></div>
                        </div>
                    </button>
                </div>
            </header>

            <main className='grow'>
                <div className="h-[100vh] w-full relative overflow-hidden relative">
                    <div className="absolute w-full h-full overflow-hidden">
                        <img className="w-full h-full object-cover object-center" src={heroImg} alt="" />
                    </div>

                    <div className='max-w-[1200px] px-[24px] mx-auto min-h-full py-[50px] flex items-center justify-center relative'>
                        <h2 className='text-[#000] text-center text-[1.625rem] sm:text-[2rem] md:text-[3.375rem] lg:text-[4rem] font-poppins uppercase font-medium leading-[125%]'>The Starry Night is an oil on canvas painting by Dutch Post Impressionist painter van Gogh. Painted in June 1889.</h2>
                    </div>
                </div>

                <div className='max-w-[1200px] px-[16px] py-[150px] mx-auto'>
                    <div className='w-full aspect-video rounded-[20px] overflow-hidden mb-[150px]'>
                        <img className='w-full h-full object-cover object-center' src={'https://www.watchpro.com/cloud/2023/03/27/m126000-0009_2301jva_002_cmjn.jpg'} alt="" />
                    </div>

                    <div className='mb-[150px]'>
                        <h2 className='text-[1.25rem] font-outfit font-medium mb-[24px]'>About Me</h2>
                        <div className='flex items-stretch gap-[32px]'>
                            <div className='flex items-'>

                            </div>

                            <div className='max-w-[448px] '>
                                <p className='text-[1rem] font-bricolage-grotesque'>The Night Café (French: Le Café de nuit) is an oil painting created by Dutch artist Vincent van Gogh in September 1888 in Arles. Its title is inscribed lower right beneath the signature. The painting is owned by Yale University and is currently held at the Yale University Art Gallery in New Haven, Connecticut.</p>
                            </div>
                        </div>
                    </div>
                    

                    <div className='flex items-stretch gap-[0px]  aspect-[16/12]'>
                        <div className='w-[60%] overflow-hidden rounded-tl-[20px] rounded-bl-[20px] shrink-0'>
                            <img className='w-full h-full object-cover object-center' src={'https://radialposters.com/cdn/shop/files/Frameless1_68fd823a-2fb0-4c23-b59e-34739e8b1245.jpg?v=1758601227&width=1946'} alt="" />
                        </div>
                        <div className='w-[40%] overflow-hidden rounded-tr-[20px] rounded-br-[20px]'>   
                            <img className='w-full h-full object-cover object-center' src={'https://mir-s3-cdn-cf.behance.net/project_modules/1400/ca5e78183703723.6544604447d86.png'} alt="" />
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-2 h-[100vh] gap-[0px]'>
                    <div className='h-full z-[15] relative overflow-hidden'>
                        <img className='w-auto h-full object-cover object-center' src={'https://wallpaperbat.com/img/451966-wallpaper-minimalist-design-widescreen-3-wallpaper-art-wallpaper-aesthetic-desktop-wallpaper-minimalist-desktop-wallpaper-desktop-wallpaper-art.jpg'} alt="" />
                    </div>
                    <div className='h-full p-[70px] flex items-center bg-[#2EBCC7]'>
                        <h2 className='text-[2rem] text-white uppercase font-google-sans-flex max-w-[600px]'>it depicts the view from the east-facing window of his asylum room at Saint Rémy de Provence, just before sunrise, with the addition of an imaginary village. It has been in the permanent collection of the Museum of Modern Art in New York City since 1941, acquired through the Lizzie Plummer Bliss Bequest.</h2>
                    </div>
                </div>

                <div className='py-[150px]'>
                    <div className='w-full mx-auto max-w-[1280px] px-[16px]'>
                        <div className='columns-3 gap-[24px] max-lg:columns-2 max-sm:columns-1'>
                            {
                                photos.map((item, index) => (
                                    <PhotosCard key={index} img={item.img} />
                                ))
                            }                        
                        </div>
                    </div>
                </div>

            </main>

            <Footer />
        </div>
    )
}

export default Galleyfish