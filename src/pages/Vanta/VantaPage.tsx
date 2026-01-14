import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import developer from './images/developer.png'
import design from './images/design.png'
import maintenance from './images/maintenance.png'
import development from './images/development.png'
import reactjs from './images/react.png'
import js from './images/js.svg'
import bootstrap from './images/bootstrap.svg'
import sass from './images/sass.png'
import c from './images/c.png'
import cplus from './images/c++.png'
import english from './images/english.png'
import spanish from './images/spanish.png'
import portfoliobg from './images/portfolio.png'
import project1 from './images/project1.png'

const VantaPage = () => {
  return (
    <div className="min-h-[100vh] bg-[#000508] flex flex-col">
        <Navbar />

        <main className="grow">
            {/* Hero */}
            <section className="relative min-h-screen">
                <div className="lg:pt-0 pt-[150px] pb-[24px] w-full max-w-[1374px] px-[16px] mx-auto min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-[30px] items-center justify-center text-[#efeccca3]">
                    <div className="h-full flex justify-center flex-col items-start">
                        <h2 className="text-[30px] sm:text-[35px] md:text-[40px] font-bold mb-[16px] sm:mb-[20px] md:mb-[24px]">Hi, I am</h2>
                        <h1 className="font-bold font-poppins mb-[16px] leading-[100%] text-left text-[clamp(40px,6vw,67px)]">Xamidullayev Ammoriddin</h1>
                        <p className="text-[#909090] font-extrabold text-[1rem] sm:text-[22px] font-outfit leading-[110%] mb-[50px]">Front-end Developer / UI Designer</p>
                    
                        <div className="flex items-center gap-[30px]">
                            <a className="w-[61px] h-[56px] flex items-center justify-center bg-[#c7c7ba] shadow-[0px_4px_10px_0px_#0000000a] rounded-[8px]" href="">
                                <svg className="w-[32px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37 36" fill="none"><path fill="#000" d="M17.86 7.367c2.825 0 5.487 1.252 7.438 3.21v.005c0-.94.632-1.65 1.506-1.65h.222c1.38 0 1.656 1.3 1.656 1.71l.006 14.61c-.096.957.988 1.452 1.59.837 2.342-2.409 5.148-12.394-1.457-18.175-6.16-5.396-14.43-4.505-18.825-1.475-4.673 3.228-7.66 10.358-4.758 17.06 3.168 7.306 12.225 9.486 17.615 7.312 2.73-1.102 3.987 2.582 1.15 3.788-4.274 1.823-16.187 1.637-21.75-7.998-3.76-6.508-3.56-17.958 6.413-23.89C16.29-1.828 26.347-.57 32.411 5.76c6.336 6.624 5.97 19.018-.216 23.836-2.802 2.191-6.962.06-6.932-3.132l-.031-1.041c-1.95 1.932-4.547 3.065-7.371 3.065-5.588 0-10.508-4.92-10.508-10.503 0-5.643 4.92-10.616 10.508-10.616v-.002Zm7.03 10.214c-.212-4.09-3.247-6.552-6.915-6.552h-.139c-4.227 0-6.575 3.33-6.575 7.105 0 4.233 2.836 6.906 6.558 6.906 4.155 0 6.882-3.04 7.08-6.636l-.01-.823Z"/></svg>
                            </a>

                            <a className="w-[61px] h-[56px] flex items-center justify-center bg-[#c7c7ba] shadow-[0px_4px_10px_0px_#0000000a] rounded-[8px]" href="">
                                <svg className="w-[33px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" fill="none"><path fill="#000" d="M17.484 0C7.824-.004 0 7.816 0 17.469c0 7.633 4.895 14.12 11.71 16.504.919.23.778-.422.778-.867v-3.028c-5.3.621-5.515-2.887-5.87-3.473-.72-1.226-2.419-1.539-1.911-2.125 1.207-.62 2.438.157 3.863 2.262 1.032 1.528 3.043 1.27 4.063 1.016.223-.918.699-1.738 1.355-2.375-5.492-.985-7.781-4.336-7.781-8.32 0-1.934.637-3.711 1.887-5.145-.797-2.363.074-4.387.191-4.688 2.27-.203 4.63 1.625 4.813 1.77 1.289-.348 2.761-.531 4.41-.531 1.656 0 3.133.191 4.433.543.442-.336 2.63-1.907 4.739-1.715.113.3.965 2.277.215 4.61 1.265 1.437 1.91 3.23 1.91 5.167 0 3.992-2.305 7.348-7.813 8.317a4.984 4.984 0 0 1 1.488 3.554v4.395c.032.351 0 .7.586.7 6.918-2.333 11.899-8.868 11.899-16.567C34.965 7.816 27.137 0 17.485 0Z"/></svg>
                            </a>

                            <a className="w-[61px] h-[56px] flex items-center justify-center bg-[#c7c7ba] shadow-[0px_4px_10px_0px_#0000000a] rounded-[8px]" href="">
                                <svg className="w-[35px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39 39" fill="none"><path fill="#000" d="M19.2 0C8.596 0 0 8.596 0 19.2s8.596 19.2 19.2 19.2 19.2-8.596 19.2-19.2S29.804 0 19.2 0Zm-4.7 27.158h-3.888V14.646H14.5v12.512ZM12.532 13.11c-1.228 0-2.022-.87-2.022-1.946 0-1.098.818-1.942 2.072-1.942s2.022.844 2.046 1.942c0 1.076-.792 1.946-2.096 1.946ZM28.7 27.158h-3.888v-6.934c0-1.614-.564-2.71-1.97-2.71-1.074 0-1.712.742-1.994 1.456-.104.254-.13.614-.13.972v7.214h-3.89v-8.52c0-1.562-.05-2.868-.102-3.992h3.378l.178 1.738h.078c.512-.816 1.766-2.02 3.864-2.02 2.558 0 4.476 1.714 4.476 5.398v7.398Z"/></svg>
                            </a>
                        </div>
                    </div>
                    <div className="flex h-full items-center justify-center">
                        <img className="h-auto max-h-[76vh] w-full rounded-xl object-cover" src={developer} alt="" />
                    </div>
                </div>
            </section>

            <div className="w-full bg-[#1D1D1D] text-white">
                <div className="w-full max-w-[1406px] px-[16px] mx-auto py-[50px]">
                    <h2 className="font-montserrat text-[30px] font-bold uppercase mb-[20px]">About Me</h2>

                    <p className="text-white/70 font-poppins font-normal text-[0.938rem] mb-[24px]">Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna quis libero viverra facilisis ut ac est. Morbi commodo, eros in dignissim tempus, lacus odio rutrum augue, in semper sem magna quis tellus. Etiam enim erat, suscipit eu semper a, dictum sit amet elit. Nunc egestas nisi eget enim gravida facilisis. Pellentesque laoreet varius turpis vel pharetra. Ut ante justo, consequat vitae elementum tempor, accumsan nec eros. </p>

                    <button className="px-[20px] py-[9px] border-x-2 border-white">
                        <p className="text-center text-[0.938rem] font-montserrat font-semibold leading-[100%]">Read More</p>
                    </button>
                </div>
            </div>

            <div className="w-full bg-[#dfe2e6] py-[140px] text-black">
                <div className="w-full max-w-[1098px] px-[16px] mx-auto">
                    <div className="w-full flex items-center justify-center">
                        <div className="px-[75px] py-[30px] border-4 border-black max-w-fit mb-[50px]"> 
                            <p className="text-center font-bold font-montserrat text-[30px] leading-[100%]">My Skills</p>
                        </div>
                    </div>

                    <p className="text-[#050505] text-center font-outfit text-[0.938rem] font-normal max-w-[700px] mx-auto mb-[100px]">Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna quis libero viverra facilisis ut ac est.</p>
                
                    <div className="flex items-center justify-evenly gap-y-[70px] gap-[55px] flex-wrap mb-[50px]">
                        <div className="max-w-[431px] relative">
                            <img className="absolute top-[-15%] left-[-10%]" src={design} alt="" />
                            <div className="relative z-[5]">
                                <h2 className="text-[22px] font-bold font-montserrat uppercase tracking-[18.5%] mb-[16px]">DESIGN</h2>
                                <p className="text-black/70 font-outfit text-[1rem]">I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.</p>
                            </div>
                        </div>

                        <div className="max-w-[431px] relative">
                            <img className="absolute top-[-15%] left-[-10%]" src={development} alt="" />
                            <div className="relative z-[5]">
                                <h2 className="text-[22px] font-bold font-montserrat uppercase tracking-[18.5%] mb-[16px]">DEVELOPMENT</h2>
                                <p className="text-black/70 font-outfit text-[1rem]">I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.</p>
                            </div>
                        </div>

                        <div className="max-w-[431px] relative">
                            <img className="absolute top-[-15%] left-[-10%]" src={maintenance} alt="" />
                            <div className="relative z-[5]">
                                <h2 className="text-[22px] font-bold font-montserrat uppercase tracking-[18.5%] mb-[16px]">MAINTENANCE</h2>
                                <p className="text-black/70 font-outfit text-[1rem]">I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mb-[70px]">
                        <h2 className="text-[#000] font-montserrat font-bold text-[30px] tracking-[18.5%] mb-[40px] md:mb-[80px]">USING NOW:</h2>
                    
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-[20px]">
                            <div className="flex items-center justify-center flex-col gap-[20px]">
                                <div className="h-[70px] md:h-[100px] w-auto">
                                    <img className="h-full w-auto object-contain object-center" src={reactjs} alt="" />
                                </div>
                                <p className="text-center font-outfit font-medium text-[1.125rem] tracking-[13.5%] leading-[100%]">React.js</p>
                            </div>

                            <div className="flex items-center justify-center flex-col gap-[20px]">
                                <div className="h-[70px] md:h-[100px] w-auto">
                                    <img className="h-full w-auto object-contain object-center" src={sass} alt="" />
                                </div>
                                <p className="text-center font-outfit font-medium text-[1.125rem] tracking-[13.5%] leading-[100%]">Sass</p>
                            </div>

                            <div className="flex items-center justify-center flex-col gap-[20px]">
                                <div className="h-[70px] md:h-[100px] w-auto">
                                    <img className="h-full w-auto object-contain object-center" src={js} alt="" />
                                </div>
                                <p className="text-center font-outfit font-medium text-[1.125rem] tracking-[13.5%] leading-[100%]">Javascript</p>
                            </div>

                            <div className="flex items-center justify-center flex-col gap-[20px]">
                                <div className="h-[70px] md:h-[100px] w-auto">
                                    <img className="h-full w-auto object-contain object-center" src={bootstrap} alt="" />
                                </div>
                                <p className="text-center font-outfit font-medium text-[1.125rem] tracking-[13.5%] leading-[100%]">Bootstrap</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-[#000] font-montserrat font-bold text-[30px] tracking-[18.5%] mb-[40px] md:mb-[80px]">OTHER SKILLS:</h2>
                    
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-[20px]">
                            <div className="flex items-center justify-center flex-col gap-[20px]">
                                <div className="h-[70px] md:h-[100px] w-auto">
                                    <img className="h-full w-auto object-contain object-center" src={english} alt="" />
                                </div>
                                <p className="text-center font-outfit font-medium text-[1.125rem] tracking-[13.5%] leading-[100%]">ANGIELSKI C1/C2</p>
                            </div>

                            <div className="flex items-center justify-center flex-col gap-[20px]">
                                <div className="h-[70px] md:h-[100px] w-auto">
                                    <img className="h-full w-auto object-contain object-center" src={spanish} alt="" />
                                </div>
                                <p className="text-center font-outfit font-medium text-[1.125rem] tracking-[13.5%] leading-[100%]">HISZPAŃSKI B1/B2</p>
                            </div>

                            <div className="flex items-center justify-center flex-col gap-[20px]">
                                <div className="h-[70px] md:h-[100px] w-auto">
                                    <img className="h-full w-auto object-contain object-center" src={cplus} alt="" />
                                </div>
                                <p className="text-center font-outfit font-medium text-[1.125rem] tracking-[13.5%] leading-[100%]">C++</p>
                            </div>

                            <div className="flex items-center justify-center flex-col gap-[20px]">
                                <div className="h-[70px] md:h-[100px] w-auto">
                                    <img className="h-full w-auto object-contain object-center" src={c} alt="" />
                                </div>
                                <p className="text-center font-outfit font-medium text-[1.125rem] tracking-[13.5%] leading-[100%]">C</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full text-center h-[210px] sm:h-[320px] relative overflow-hidden">
                <img className="absolute top-1/2 -translate-y-1/2 z-[5] left-0 w-full object-contain object-center" src={portfoliobg} alt="" />
                <div className="absolute top-0 bg-black/20 z-[10] left-0 w-full h-full"></div>
                <div className="relative z-[15] w-full h-full flex items-center justify-center">
                    <div className="px-[60px] sm:px-[90px] py-[20px] sm:py-[26px] border-3 border-black w-fit">
                        <p className="font-montserrat font-bold text-[22px] sm:text-[30px] leading-[100%] tracking-[43%]">Portfolio</p>
                    </div>
                </div>
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div className="w-full aspect-[16/14] relative">
                    <div className="z-[15] absolute w-full h-[100%] bg-linear-to-t from-black/80 to-black/0 bottom-0"></div>

                    <div className="w-full h-full flex absolute items-center justify-center z-[20] flex-col">
                        <h2 className="text-[1.188rem] sm:text-[1.125rem] md:text-[20px] lg:text-[25px] xl:text-[33px] font-medium font-outfit mb-[10px] sm:mb-[12px] md:mb-[16px] tracking-tight text-white">Doodlefolio</h2>
                        <p className="font-montserrat font-medium leading-[125%] text-center text-[0.75rem] sm:text-[0.813rem] md:text-[0.838rem] lg:text-[0.938rem] xl:text-[1rem] max-w-[450px] px-[16px] text-white/80 mb-[32px]">A clean and playful portfolio template with a hand-drawn style, built to help creatives get started fast.</p>

                        <div className="flex items-center justify-center gap-[12px] max-w-[450px] px-[16px]">
                            <button className="px-[35px] py-[8px] border-x-2 border-white text-white">
                                <p className="text-[0.813rem] font-semibold font-montserrat leading-[100%]">DEMO</p>
                            </button>
                        </div>
                    </div>

                    <img className="absolute w-full relative h-full object-cover object-center" src={project1} alt="" />
                </div>
                <div className="w-full aspect-[16/14] relative">
                    <div className="z-[15] absolute w-full h-[100%] bg-linear-to-t from-black/80 to-black/0 bottom-0"></div>

                    <div className="w-full h-full flex absolute items-center justify-center z-[20] flex-col">
                        <h2 className="text-[1.188rem] sm:text-[1.125rem] md:text-[20px] lg:text-[25px] xl:text-[33px] font-medium font-outfit mb-[10px] sm:mb-[12px] md:mb-[16px] tracking-tight text-white">Doodlefolio</h2>
                        <p className="font-montserrat font-medium leading-[125%] text-center text-[0.75rem] sm:text-[0.813rem] md:text-[0.838rem] lg:text-[0.938rem] xl:text-[1rem] max-w-[450px] px-[16px] text-white/80 mb-[32px]">A clean and playful portfolio template with a hand-drawn style, built to help creatives get started fast.</p>

                        <div className="flex items-center justify-center gap-[12px] max-w-[450px] px-[16px]">
                            <button className="px-[35px] py-[8px] border-x-2 border-white text-white">
                                <p className="text-[0.813rem] font-semibold font-montserrat leading-[100%]">DEMO</p>
                            </button>
                        </div>
                    </div>

                    <img className="absolute w-full relative h-full object-cover object-center" src={'https://preview.redd.it/silver-surfer-all-alone-in-the-space-wallpaper-with-ai-v0-68daljq9mide1.png?width=1080&crop=smart&auto=webp&s=a89b41016a1f9b274cbeff03c5298a29a61ce38b'} alt="" />
                </div>
                <div className="col-span-1 md:col-span-3 lg:col-span-1 w-full aspect-[16/14] relative">
                    <div className="z-[15] absolute w-full h-[100%] bg-linear-to-t from-black/80 to-black/0 bottom-0"></div>

                    <div className="w-full h-full flex absolute items-center justify-center z-[20] flex-col">
                        <h2 className="text-[1.188rem] sm:text-[1.125rem] md:text-[20px] lg:text-[25px] xl:text-[33px] font-medium font-outfit mb-[10px] sm:mb-[12px] md:mb-[16px] tracking-tight text-white">Doodlefolio</h2>
                        <p className="font-montserrat font-medium leading-[125%] text-center text-[0.75rem] sm:text-[0.813rem] md:text-[0.838rem] lg:text-[0.938rem] xl:text-[1rem] max-w-[450px] px-[16px] text-white/80 mb-[32px]">A clean and playful portfolio template with a hand-drawn style, built to help creatives get started fast.</p>

                        <div className="flex items-center justify-center gap-[12px] max-w-[450px] px-[16px]">
                            <button className="px-[35px] py-[8px] border-x-2 border-white text-white">
                                <p className="text-[0.813rem] font-semibold font-montserrat leading-[100%]">DEMO</p>
                            </button>
                        </div>
                    </div>

                    <img className="absolute w-full relative h-full object-cover object-center" src={'https://mir-s3-cdn-cf.behance.net/projects/404/e36755198354933.682d00f3a4870.jpg'} alt="" />
                </div>
            </div>

            <div className="w-full bg-[radial-gradient(circle_at_center,_#f1f2f4_0%,_##dfe2e6_80%)] bg-[#f1f2f4] py-[140px] text-black">
                <div className="w-full max-w-[1098px] px-[16px] mx-auto">
                    <div className="w-full flex items-center justify-center">
                        <div className="px-[75px] py-[30px] border-4 border-black max-w-fit mb-[50px]"> 
                            <p className="text-center font-bold font-montserrat text-[30px] leading-[100%]">Contact</p>
                        </div>
                    </div>

                    <p className="text-[#050505] text-center font-outfit text-[0.938rem] font-normal max-w-[700px] mx-auto mb-[100px]">Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna quis libero viverra facilisis ut ac est.</p>

                    <form className="max-w-[650px] mx-auto w-full" action="">
                        <input className="mb-[22px] sm:mb-[32px] md:mb-[42px] px-[14px] py-[10px] border-l-3 border-black border-b-3 text-[0.938rem] font-medium text-primary placeholder:text-[#black]/70 font-outfit w-full " placeholder="ENTER YOUR NAME*" type="text" />
                        <input className="mb-[22px] sm:mb-[32px] md:mb-[42px] px-[14px] py-[10px] border-l-3 border-black border-b-3 text-[0.938rem] font-medium text-primary placeholder:text-[#black]/70 font-outfit w-full " placeholder="ENTER YOUR EMAIL*" type="email" />
                        <textarea rows={5} className="px-[14px] py-[10px] border-l-3 border-black border-b-3 text-[0.938rem] font-medium text-primary placeholder:text-[#black]/70 font-outfit w-full " placeholder="ENTER YOUR EMAIL*" />
                    </form>
                </div>
            </div>
        </main>

        <Footer />
    </div>
  )
}

export default VantaPage