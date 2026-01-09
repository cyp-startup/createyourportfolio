import Squares from '@/components/Squares'
import logo from '../assets/logo.svg'
import Noise from '@/components/Noise'
import { Link } from 'react-router-dom'

const SignInPage = () => {
  return (
    <div className="text-white w-full min-h-[100vh] flex items-center justify-center relative">
        <Link to={'/'} className='fixed top-3 left-3 sm:top-10 sm:left-10 bg-white/15 backdrop-blur-3xl border-white/10 rounded-full w-[50px] h-[50px] p-[10px] z-[40] overflow-hidden'>
            <Noise
                patternSize={250}
                patternScaleX={2}
                patternScaleY={2}
                patternRefreshInterval={2}
                patternAlpha={15}
            />
            <img className="w-[45px] object-contain object-center" src={logo} alt="" />
        </Link>

        <div className="absolute top-0 left-0 w-full h-full">
            <Squares
                speed={0.5} 
                squareSize={40}
                direction='diagonal' // up, down, left, right, diagonal
                borderColor='#7d7d7d'
                hoverFillColor='#222'
            />
        </div>
        <div className="container !px-0 mx-auto relative z-[10]">
            <div className="scale-[0.9] max-w-[500px] mx-auto rounded-[24px] p-[24px] border border-[#fff]/20 bg-[#000]">
                <div className='w-fit p-[12px] sm:p-[16px] mb-[12px] rounded-[12px] bg-white/10 backdrop-blur-xl border border-white/10 relative overflow-hidden'>
                    <img className="w-[40px] sm:w-[50px]" src={logo} alt="" />

                    <Noise
                        patternSize={250}
                        patternScaleX={2}
                        patternScaleY={2}
                        patternRefreshInterval={2}
                        patternAlpha={15}
                    />
                </div>
                <h1 className='text-[2rem] sm:text-[2.25rem] text-white/90 font-poppins tracking-tight leading-[115%] font-semibold mb-[3px] sm:mb-[6px]'>Sign In To Your Account</h1>
                <p className='font-outfit text-white/80 font-medium text-[1rem] mb-[16px]'>Your portfolio shouldn’t take weeks</p>
                
                <div className='space-y-[5px] mb-[24px]'>
                    <button
                        className="flex items-center gap-[10px] pl-[18px] py-[6px] pr-[6px] bg-[#131313] border-white/30 border w-full justify-center rounded-[99px] group see-allbutton-wrapper"
                    >
                        <svg className='w-[23px]' xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="-3 0 262 262"><path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"/><path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"/><path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"/><path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"/></svg>
                        <p className="text-[1.125rem] font-outfit text-white leading-[100%]">
                            Continue with google
                        </p>

                        <div
                            className="w-[30px] h-[30px] flex items-center justify-center transition-colors duration-150 justify-center bg-[#3c7be9] group-hover:bg-white transition-colors duration-300 rounded-full"
                        >
                            <svg className="group-hover:rotate-[360deg] transition-transform duration-300 text-white group-hover:text-[#131313] w-[22px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                        </div>
                    </button>

                    <button
                        className="flex items-center gap-[10px] pl-[18px] py-[6px] pr-[6px] bg-[#131313] border-white/30 border w-full justify-center rounded-[99px] group see-allbutton-wrapper"
                    >
                        <svg className='w-[23px]' xmlns="http://www.w3.org/2000/svg" fill="#fff" stroke="#fff" viewBox="0 -0.5 25 25"><path d="M12.301 0h.093c2.242 0 4.34.613 6.137 1.68l-.055-.031a12.351 12.351 0 0 1 4.449 4.422l.031.058a12.182 12.182 0 0 1 1.654 6.166c0 5.406-3.483 10-8.327 11.658l-.087.026a.724.724 0 0 1-.642-.113l.002.001a.624.624 0 0 1-.208-.466v-.014.001l.008-1.226q.008-1.178.008-2.154a2.844 2.844 0 0 0-.833-2.274 10.918 10.918 0 0 0 1.718-.305l-.076.017a6.508 6.508 0 0 0 1.537-.642l-.031.017a4.52 4.52 0 0 0 1.292-1.058l.006-.007a4.9 4.9 0 0 0 .84-1.645l.009-.035a7.888 7.888 0 0 0 .329-2.281l-.001-.136v.007l.001-.072a4.73 4.73 0 0 0-1.269-3.23l.003.003c.168-.44.265-.948.265-1.479a4.25 4.25 0 0 0-.404-1.814l.011.026a2.095 2.095 0 0 0-1.31.181l.012-.005a8.622 8.622 0 0 0-1.512.726l.038-.022-.609.384c-.922-.264-1.981-.416-3.075-.416s-2.153.152-3.157.436l.081-.02q-.256-.176-.681-.433a9.103 9.103 0 0 0-1.272-.595l-.066-.022A2.174 2.174 0 0 0 5.837 5.1l.013-.002a4.2 4.2 0 0 0-.393 1.788c0 .531.097 1.04.275 1.509l-.01-.029a4.723 4.723 0 0 0-1.265 3.303v-.004l-.001.13c0 .809.12 1.591.344 2.327l-.015-.057c.189.643.476 1.202.85 1.693l-.009-.013a4.35 4.35 0 0 0 1.267 1.062l.022.011c.432.252.933.465 1.46.614l.046.011c.466.125 1.024.227 1.595.284l.046.004c-.431.428-.718 1-.784 1.638l-.001.012a3.056 3.056 0 0 1-.699.236l-.021.004c-.256.051-.549.08-.85.08h-.066.003a1.882 1.882 0 0 1-1.055-.348l.006.004a2.84 2.84 0 0 1-.881-.986l-.007-.015a2.603 2.603 0 0 0-.768-.827l-.009-.006a2.331 2.331 0 0 0-.776-.38l-.016-.004-.32-.048a1.048 1.048 0 0 0-.471.074l.007-.003q-.128.072-.08.184c.039.086.087.16.145.225l-.001-.001c.061.072.13.135.205.19l.003.002.112.08c.283.148.516.354.693.603l.004.006c.191.237.359.505.494.792l.01.024.16.368c.135.402.38.738.7.981l.005.004c.3.234.662.402 1.057.478l.016.002c.33.064.714.104 1.106.112h.007c.045.002.097.002.15.002.261 0 .517-.021.767-.062l-.027.004.368-.064q0 .609.008 1.418t.008.873v.014c0 .185-.08.351-.208.466h-.001a.717.717 0 0 1-.645.111l.005.001C3.486 22.286.006 17.692.006 12.285c0-2.268.612-4.393 1.681-6.219l-.032.058a12.351 12.351 0 0 1 4.422-4.449l.058-.031a11.898 11.898 0 0 1 6.073-1.645h.098-.005zm-7.64 17.666q.048-.112-.112-.192-.16-.048-.208.032-.048.112.112.192.144.096.208-.032zm.497.545q.112-.08-.032-.256-.16-.144-.256-.048-.112.08.032.256.159.157.256.047zm.48.72q.144-.112 0-.304-.128-.208-.272-.096-.144.08 0 .288t.272.112zm.672.673q.128-.128-.064-.304-.192-.192-.32-.048-.144.128.064.304.192.192.32.044zm.913.4q.048-.176-.208-.256-.24-.064-.304.112t.208.24q.24.097.304-.096zm1.009.08q0-.208-.272-.176-.256 0-.256.176 0 .208.272.176.256.001.256-.175zm.929-.16q-.032-.176-.288-.144-.256.048-.224.24t.288.128.225-.224z"/></svg>
                        <p className="text-[1.125rem] font-outfit text-white leading-[100%]">
                            Continue with github
                        </p>

                        <div
                            className="w-[30px] h-[30px] flex items-center justify-center transition-colors duration-150 justify-center bg-[#3c7be9] group-hover:bg-white transition-colors duration-300 rounded-full"
                        >
                            <svg className="group-hover:rotate-[360deg] transition-transform duration-300 text-white group-hover:text-[#131313] w-[22px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                        </div>
                    </button>
                </div>

                <form className='mb-[24px]'>
                    <label className='text-white/80 font-outfit text-[0.938rem] font-medium mb-[6px] leading-[100%] block' htmlFor="email">Email</label>
                    <input id='email' name='email' className='text-[1rem] border border-white/20 rounded-[12px] px-[12px] pb-[11px] pt-[9px] mb-[16px] placeholder:text-white/70 leading-[100%] w-full' placeholder='cyp.project.email@gmail.com' type="email" />

                    <label className='text-white/80 font-outfit text-[0.938rem] font-medium mb-[6px] leading-[100%] block' htmlFor="password">Password</label>
                    <input id='password' name='password' className='text-[1rem] border border-white/20 rounded-[12px] px-[12px] pb-[11px] pt-[9px] placeholder:text-white/70 leading-[100%] w-full' type="password" />
                </form>

                <button
                    className='w-full px-[20px] py-[10px] border border-white/20 bg-white rounded-[12px] mb-[12px]'
                >
                    <p className='text-primary font-outfit text-[1.125rem] font-medium'>Sign In</p>
                </button>

                <p className='text-[white]/90 text-[0.875rem] font-poppins mb-[4px]'>Don't have an account? <Link className='underline' to={'/signup'}>Sign Up</Link></p>
                <p className='text-[white]/70 text-[0.813rem] font-poppins text-right'>By continuing, you agree to our <Link className='underline' to={'/'}>Terms</Link> and <Link className='underline' to={'/'}>Privacy Policy.</Link></p>
            </div>
        </div>
    </div>
  )
}

export default SignInPage