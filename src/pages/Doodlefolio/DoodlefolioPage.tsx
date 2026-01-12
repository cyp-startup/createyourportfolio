import AOSInit from "@/config/AOS"
import { Link } from "react-router-dom"
import Card from "./components/Card"
import ClientsCard from "./components/ClientsCard"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import heroShake from './images/hero-shake.png'
import handWriting from './images/hand-writing.png'
import clickShake from './images/click-shake.svg'
import heroPhoto from './images/hero-main-photo.png'
import starShake from './images/star-shake.svg'
import smileIcon from './images/smile-icon.svg'
import frame1 from './images/frame-1.png'
import frame2 from './images/frame-2.png'
import frame3 from './images/frame-3.png'
import frame4 from './images/frame-4.png'
import smileBlue from './images/smile-blue.png'
import newIcon from './images/new.svg'
import project1 from './images/project-1.png'
import project2 from './images/project-2.png'
import project3 from './images/project-3.png'
import project4 from './images/project-4.png'
import opa1 from './images/opa-1.png'
import opa2 from './images/opa-2.png'
import opa3 from './images/opa-3.png'
import opa4 from './images/opa-4.png'
import './doodlefolio.css'

const DoodlefolioPage = () => {
  return (
    <>
        <AOSInit />
        
        <div className="w-full bg-[#fff] relative z-[10]">
          <div className="min-h-[100vh] bg-[#f3f4e6] flex flex-col w-full doodlefolio-wrapper">
            <Navbar />

            <main className="grow">
              <section className="min-[665px]:pt-[100px] pt-[40px] relative">
                <div className="flex gap-[42px] min-[1090px]:flex-row flex-col mb-[148px] justify-center items-center min-[1090px]:justify-between max-w-[1340px] px-[16px] mx-auto">
                  <div className="w-fit">
                    <p className="min-[693px]:text-[60px] text-[32px] min-[505px]:text-[50px] font-[600] leading-tight mb-[25px]">
                      Hello I'm a 20 y.o proffessional web designer from uzbeksitan
                    </p>

                    <div className="relative">
                      <Link to={'#portfolio'} className="border-[5px] border-black rounded-[92px] bg-[#bae6ff] px-[24px] py-[11px] min-[505px]:px-[30px] min-[505px]:py-[11px] min-[693px]:py-[16.5px] min-[693px]:px-[40px] min-[693px]:text-[29px] text-[16px] min-[505px]:text-[25px] font-bold">See Projects</Link>
                      <img width={38} height={55} alt="click-shake" src={clickShake} className="absolute min-[693px]:w-[58px] left-[150px] bottom-[-20px] min-[505px]:left-[220px] min-[505px]:bottom-[-35px] min-[693px]:left-[250px] min-[693px]:bottom-[-40px] w-[37px] min-[505px]:w-[45px]" />
                    </div>
                  </div>

                  <div className="w-full sm:w-[512px] hero-main-photo shrink-0">
                    <img alt="hero-main-photo" src={heroPhoto} />
                  </div>
                </div>

                <div className="w-full py-[14px] min-[910px]:py-[40px] relative mb-[80px]">
                  <img
                    width={151}
                    height={127}
                    alt="star-shake"
                    src={starShake}
                    className="w-[151px] absolute top-[-105px] left-[-64px]"
                  />
                  <div className="absolute w-full h-full bg-black top-0 left-0 z-[1]"></div>
                  <div className="w-full max-w-[1200px] mx-auto px-[14px] 647:px-[20px] flex justify-between items-center relative z-[10]">
                    <span data-aos="flip-left" className="text-[16px] 647:text-[30px] min-[910px]:text-[48px] font-medium text-white">Figma</span>
                    <span data-aos="flip-left" className="text-[16px] 647:text-[30px] min-[910px]:text-[48px] font-medium text-white">Framer</span>
                    <span data-aos="flip-left" className="text-[16px] 647:text-[30px] min-[910px]:text-[48px] font-medium text-white">Webflow</span>
                    <span data-aos="flip-left" className="text-[16px] 647:text-[30px] min-[910px]:text-[48px] font-medium text-white">Notion</span>
                    <span data-aos="flip-left" className="text-[16px] 647:text-[30px] min-[910px]:text-[48px] font-medium text-white">Lottie</span>
                  </div>
                </div>

                <div className="w-full relative">
                  <div id="services" className="container">
                    <div data-aos="fade-up" className="flex items-end min-[563px]:items-start gap-[31px] mb-[80px]">
                      <h1 className="text-[24px] min-[505px]:text-[30px] min-[563px]:text-[35px] min-[715px]:text-[48px] font-medium">
                        Services we’re providing <br className="xs:block hidden" />
                        that derive 99% result
                      </h1>
                      <img className="w-[38px] min-[563px]:w-[64px] mt-[20px]" width={64} height={58} alt="always smile" src={smileIcon} />
                    </div>
                  </div>

                  <div  data-aos="fade-up" className="w-full relative">
                    <div className="mr-[0px] lg:mr-[-200px]">
                      <div className="flex mb-[46px]  lg:flex-row flex-col w-full max-w-[1200px] lg:max-w-[1400px] mx-auto min-[460px]:pl-[40px] pl-[20px] pr-[20px] min-[460px]:pr-[40px] lg:pr-[0px]">
                        <div className="lg:block hidden absolute h-[3px] bg-black top-0 w-full"></div>
                        <div className="lg:block hidden absolute h-[3px] bg-black bottom-0 w-full"></div>

                        <div className="flex lg:border-l-[0px] border-l-[3px] lg:border-t-[0px] border-t-[3px] flex-col flex-grow-[0.1] min-[1100px]:flex-grow-[0.3] min-[1372px]:flex-grow-[2] min-[1440px]:flex-grow-[6] border-r-[3px] border-black">
                          <div className="flex flex-col border-b-[3px] py-[30px] px-[20px] border-black">
                            <p className="text-[48px] font-medium">39</p>
                            <span className="text-[24px] font-medium">Projects</span>
                          </div>
                          <div className="flex lg:border-b-[0px] border-b-[3px] flex-col py-[30px] px-[20px] border-[#000000]">
                            <p className="text-[48px] font-medium">100k+</p>
                            <span className="text-[24px] font-medium">generated</span>
                          </div>
                        </div>

                        <div className="flex lg:border-l-[0px] border-l-[3px] flex-col flex-grow-[0] min-[1380px]:flex-grow-[1] border-r-[3px] border-black">
                          <div className="flex py-[60px] border-b-[3px] border-black flex-col px-[25px] gap-[19px]">
                            <img width={70} height={70} alt="frame-1" src={frame1} />
                            <h2 className="text-[36px] font-bold">User Research</h2>
                            <p className="text-[24px] font-medium">Services we’re providing that <br /> derive 99% result</p>
                          </div>
                          <div className="py-[30px] cursor-pointer px-[25px] border-b-[3px] border-black">
                            <h2 className="text-[36px] font-medium">Learn more</h2>
                          </div>
                          <div className="flex py-[60px] border-b-[3px] border-black flex-col px-[25px] gap-[19px]">
                            <img width={70} height={70} alt="frame-3" src={frame3} />
                            <h2 className="text-[36px] font-bold">UI Designing</h2>
                            <p className="text-[24px] font-medium">Services we’re providing that <br /> derive 99% result</p>
                          </div>
                          <div className="py-[30px] cursor-pointer px-[25px]">
                            <h2 className="text-[36px] font-medium">Learn more</h2>
                          </div>
                        </div>

                        <div className="flex lg:border-l-[0px] border-l-[3px] flex-col flex-grow-[0] min-[1380px]:flex-grow-[1] border-r-[3px] border-black">
                          <div className="flex py-[60px] border-b-[3px] border-black flex-col px-[25px] gap-[19px]">
                            <img width={70} height={70} alt="frame-2" src={frame2} />
                            <h2 className="text-[36px] font-bold">User Research</h2>
                            <p className="text-[24px] font-medium">Services we’re providing that <br /> derive 99% result</p>
                          </div>
                          <div className="py-[30px] cursor-pointer px-[25px] border-b-[3px] border-black">
                            <h2 className="text-[36px] font-medium">Learn more</h2>
                          </div>
                          <div className="flex py-[60px] border-b-[3px] border-black flex-col px-[25px] gap-[19px]">
                            <img width={70} height={70} alt="frame-4" src={frame4} />
                            <h2 className="text-[36px] font-bold">UI Designing</h2>
                            <p className="text-[24px] font-medium">Services we’re providing that <br /> derive 99% result</p>
                          </div>
                          <div className="py-[30px] cursor-pointer px-[25px] lg:border-b-[0px] border-b-[3px] border-black">
                            <h2 className="text-[36px] font-medium">Learn more</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                {/* My Projects section */}
                <div id="portfolio" className="container mb-[145px]">
                  <div className="flex mb-[70px] items-center w-full justify-center">
                    <h1 className="text-[40px] min-[490px]:text-[50px] min-[710px]:text-[80px] font-bold ">My Portfolio ️</h1>
                    <img width={152} height={157} alt="always smile" src={smileBlue} className="w-[55px] min-[490px]:w-[120px] min-[710px]:w-[152px]" />
                  </div>

                  <div className="flex flex-wrap justify-center gap-x-[50px] gap-y-[80px]">
                    <Card animation="fade-up-right" title="Portfolio design" description="UI design - User research - webflow develop" image={project1} />
                    <Card animation="fade-up-left" title="Portfolio design" description="UI design - User research - webflow develop" image={project2} />
                    <Card animation="fade-up-right" title="Portfolio design" description="UI design - User research - webflow develop" image={project3} />
                    <Card animation="fade-up-left" title="Portfolio design" description="UI design - User research - webflow develop" image={project4} />
                  </div>
                </div>

                {/* Clients */}

                <div className="w-full max-w-[1300px] px-[30px] mx-auto mb-[216px]">
                  <div className="flex flex-col min-[570px]:flex-row items-center gap-[50px] mb-[70px] min-[570px]:mb-[153px]">
                    <h1 className="text-[26px] min-[795px]:text-[48px] font-medium">Here’s what my clients <br />
                    are saying about my work</h1>
                    <img width={67} height={67} alt="new" className="block ml-auto w-[35px] min-[570px]:w-[55px] min-[795px]:w-[67px]" src={newIcon} />
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px]">
                    <ClientsCard rotate_number={1} desc="“Design is a bridge that connects everyone and everything”" client_name="UX Designer, Company Name" client_photo={opa1} />
                    <ClientsCard rotate_number={1} desc="“Design is a bridge that connects everyone and everything”" client_name="UX Designer, Company Name" client_photo={opa2} />
                    <ClientsCard rotate_number={2} desc="“Design is a bridge that connects everyone and everything”" client_name="UX Designer, Company Name" client_photo={opa3} />
                    <ClientsCard rotate_number={2} desc="“Design is a bridge that connects everyone and everything”" client_name="UX Designer, Company Name" client_photo={opa4} />
                    <ClientsCard rotate_number={1} desc="“Design is a bridge that connects everyone and everything”" client_name="UX Designer, Company Name" client_photo={opa2} />
                    <ClientsCard rotate_number={1} desc="“Design is a bridge that connects everyone and everything”" client_name="UX Designer, Company Name" client_photo={opa1} />
                    <ClientsCard rotate_number={2} desc="“Design is a bridge that connects everyone and everything”" client_name="UX Designer, Company Name" client_photo={opa3} />
                  </div>
                </div>

                <div id="hireme" data-aos='fade-up' className="container mb-[162px]">
                  <div className="relative px-[20px] lg-drop-shadow flex flex-col items-center py-[60px] border-[6px] border-black bg-[#fafafa]">
                    <img alt="star-shake" src={starShake} className="absolute top-[-60px] right-[250px]" />
                    <h1 className="text-[18px] min-[min-[535pxpx]]:text-[26px] min-[665px]:text-[32px] min-[840px]:text-[40px] min-[939px]:text-[48px] font-medium mb-[20px]">Let’s start designing your project</h1>
                    <p className="text-center max-w-[831px] text-[15px] min-[min-[535pxpx]]:text-[18px] min-[665px]:text-[22px] min-[939px]:text-[32px] font-[400] mb-[24px] min-[665px]:mb-[51px]">Want to see how to transform your brand into a unique style. sent us a message</p>
                    <div className="relative">
                      <a href="https://themeforest.net/user/codeeby" className="border-[3px] min-[min-[535pxpx]]:border-[5px] border-black rounded-[92px] bg-[#bae6ff] py-[7px] px-[16px] min-[535px]:py-[10px] min-[535px]:px-[25px] min-[665px]:py-[13.5px] min-[665px]:px-[34px] text-[13px] min-[535px]:text-[16px] min-[939px]:py-[16.5px] min-[939px]:px-[40px] min-[939px]:text-[29px] font-bold">Send us message</a>
                      <img width={38} height={55} alt="click-shake" src={clickShake} className="absolute right-[-20px] bottom-[-10px] min-[535px]:right-[-30px] min-[535px]:bottom-[-20px] min-[665px]:right-[-35px] min-[665px]:bottom-[-25px] min-[939px]:right-[-50px] min-[939px]:bottom-[-40px] w-[20px] min-[535px]:w-[30px] min-[665px]:w-[40px] min-[939px]:w-[58px]" />
                    </div>
                  </div>
                </div>

              </section>
            </main>

            <Footer />
          </div>
        </div>
    </>
  )
}

export default DoodlefolioPage