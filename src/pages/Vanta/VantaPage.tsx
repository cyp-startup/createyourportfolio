import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import developer from './images/developer.png'

const VantaPage = () => {
  return (
    <div className="min-h-[100vh] bg-[#D7D7D7] flex flex-col">
        <Navbar />

        <main className="grow">
            {/* Hero */}
            <section className="relative min-h-screen overflow-hidden">
                <div className="absolute inset-0 grid grid-cols-2">
                    <div className="h-full" />

                    <div className="relative">
                        <div className="absolute inset-0 bg-black skew-x-[-6deg] origin-top-left scale-x-125" />
                    </div>
                </div>

                <div className="w-full max-w-[1374px] px-[16px] mx-auto min-h-screen grid grid-cols-2 gap-[30px] items-center justify-center text-black">
                    <div className="h-full flex justify-center flex-col items-start">
                        <h2 className="text-[40px] font-bold mb-[24px]">Hi, I am</h2>
                        <h1 className="text-[67px] leading-[100%] font-bold font-poppins mb-[16px] text-left">Tomasz Gajda</h1>
                        <p className="text-[#909090] font-extrabold text-[22px] font-outfit leading-[110%] mb-[50px]">Front-end Developer / UI Designer</p>
                    
                        <div className="flex items-center gap-[30px]">
                            <a className="w-[61px] h-[56px] flex items-center justify-center bg-[#C4C4C4] shadow-[0px_4px_10px_0px_#0000000a] rounded-[8px]" href="">
                                <svg className="w-[32px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37 36" fill="none"><path fill="#000" d="M17.86 7.367c2.825 0 5.487 1.252 7.438 3.21v.005c0-.94.632-1.65 1.506-1.65h.222c1.38 0 1.656 1.3 1.656 1.71l.006 14.61c-.096.957.988 1.452 1.59.837 2.342-2.409 5.148-12.394-1.457-18.175-6.16-5.396-14.43-4.505-18.825-1.475-4.673 3.228-7.66 10.358-4.758 17.06 3.168 7.306 12.225 9.486 17.615 7.312 2.73-1.102 3.987 2.582 1.15 3.788-4.274 1.823-16.187 1.637-21.75-7.998-3.76-6.508-3.56-17.958 6.413-23.89C16.29-1.828 26.347-.57 32.411 5.76c6.336 6.624 5.97 19.018-.216 23.836-2.802 2.191-6.962.06-6.932-3.132l-.031-1.041c-1.95 1.932-4.547 3.065-7.371 3.065-5.588 0-10.508-4.92-10.508-10.503 0-5.643 4.92-10.616 10.508-10.616v-.002Zm7.03 10.214c-.212-4.09-3.247-6.552-6.915-6.552h-.139c-4.227 0-6.575 3.33-6.575 7.105 0 4.233 2.836 6.906 6.558 6.906 4.155 0 6.882-3.04 7.08-6.636l-.01-.823Z"/></svg>
                            </a>

                            <a className="w-[61px] h-[56px] flex items-center justify-center bg-[#C4C4C4] shadow-[0px_4px_10px_0px_#0000000a] rounded-[8px]" href="">
                                <svg className="w-[33px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" fill="none"><path fill="#000" d="M17.484 0C7.824-.004 0 7.816 0 17.469c0 7.633 4.895 14.12 11.71 16.504.919.23.778-.422.778-.867v-3.028c-5.3.621-5.515-2.887-5.87-3.473-.72-1.226-2.419-1.539-1.911-2.125 1.207-.62 2.438.157 3.863 2.262 1.032 1.528 3.043 1.27 4.063 1.016.223-.918.699-1.738 1.355-2.375-5.492-.985-7.781-4.336-7.781-8.32 0-1.934.637-3.711 1.887-5.145-.797-2.363.074-4.387.191-4.688 2.27-.203 4.63 1.625 4.813 1.77 1.289-.348 2.761-.531 4.41-.531 1.656 0 3.133.191 4.433.543.442-.336 2.63-1.907 4.739-1.715.113.3.965 2.277.215 4.61 1.265 1.437 1.91 3.23 1.91 5.167 0 3.992-2.305 7.348-7.813 8.317a4.984 4.984 0 0 1 1.488 3.554v4.395c.032.351 0 .7.586.7 6.918-2.333 11.899-8.868 11.899-16.567C34.965 7.816 27.137 0 17.485 0Z"/></svg>
                            </a>

                            <a className="w-[61px] h-[56px] flex items-center justify-center bg-[#C4C4C4] shadow-[0px_4px_10px_0px_#0000000a] rounded-[8px]" href="">
                                <svg className="w-[35px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39 39" fill="none"><path fill="#000" d="M19.2 0C8.596 0 0 8.596 0 19.2s8.596 19.2 19.2 19.2 19.2-8.596 19.2-19.2S29.804 0 19.2 0Zm-4.7 27.158h-3.888V14.646H14.5v12.512ZM12.532 13.11c-1.228 0-2.022-.87-2.022-1.946 0-1.098.818-1.942 2.072-1.942s2.022.844 2.046 1.942c0 1.076-.792 1.946-2.096 1.946ZM28.7 27.158h-3.888v-6.934c0-1.614-.564-2.71-1.97-2.71-1.074 0-1.712.742-1.994 1.456-.104.254-.13.614-.13.972v7.214h-3.89v-8.52c0-1.562-.05-2.868-.102-3.992h3.378l.178 1.738h.078c.512-.816 1.766-2.02 3.864-2.02 2.558 0 4.476 1.714 4.476 5.398v7.398Z"/></svg>
                            </a>
                        </div>
                    </div>
                    <div className="flex absolute w-1/2 right-0 items-end justify-center h-full">
                        <img className="w-[70%] h-auto object-cover object-bottom" src={developer} alt="" />
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

            <div className="w-full bg-[radial-gradient(circle_at_center,_#1a151500_0%,_#01010129_100%)] h-[200vh]">

            </div>
        </main>

        <Footer />
    </div>
  )
}

export default VantaPage