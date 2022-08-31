import icon from './imgs/icon.svg'
import gr from './imgs/google_recaptcha-official 2.svg'


import { useState } from 'react';
import { Link } from 'react-router-dom';





const Signup = ({ FunNav }) => {
    const [psw, setPsw] = useState('password');
    const [HideShow, setHideShow] = useState('See');
    FunNav(false);
    const handleClick = () => {
        if (psw === 'password') {
            setPsw('text');
            setHideShow('Hide');
        } else {
            setPsw('password');
            setHideShow('See');
        }
    }
    return (
        <div className='flex   bg-white h-screen w-full '>
            <div className=" ml-[6%] mr-[6%] flex flex-wrap w-[473px]  ">
                <div className='sm:mx-auto   md:mx-0 lg:mx-0'>
                    <h2 className="mt-[14px] font-jost font-semibold text-[32px]  leading-[43px] sm:mx-auto sm:mt-[271px] sm:text-[36px] md:mx-0 md:mt-[14px]  md:text-[32px] lg:mx-0 cursor-pointer "><span className='text-[#0183FF]'>N</span>etwork.</h2>
                </div>

                <div className="mt-[75px]   ">
                    <div className="mb-12  ml-[0%] ">
                        <h2 className="font-mon font-semibold text-[32px] text-[#1F1F1F]  leading-[39px] m-0 cursor-pointer">Sign up</h2>
                        <p className="font-mon text-[#666666] opacity-80 text-[16px] font-normal  leading-[20px]  cursor-pointer">Sign up for free to access our platform</p>
                    </div>
                    <div className="font-mon font-semibold text-[22px] leading-[27px] text-[#666666]    text-center smn:hidden mdn:block cursor-pointer">1/2</div>
                    <form>

                        <label htmlFor='email' className="cursor-pointer font-mon font-normal text-[16px] leading-[20px] text-[#666666] block max-w-fit  ">Email address</label>
                        <input id='email' type="email" className=" cursor-pointer border-box h-[56px] w-[100%] border-[1px] border-solid border-[#666666]/30 rounded-[12px]  mb-[21px] mt-[11px] block pl-[25px] font-pop text-[#666666] text-[14px] focus:outline-none"></input>

                        <div className="flex flex-wrap flex-row  justify-between mr-[16px]  items-baseline " >
                            <label htmlFor='psw' className=" cursor-pointer font-mon font-normal text-[16px] inline leading-[20px] text-[#666666]  max-w-fit ">Password</label>
                            <button onClick={handleClick} type="button" className="bd-white inline cursor-pointer ">
                                <div>
                                    <img src={icon} alt="" className='inline mr-[4px] mt-[4px] ' />
                                    <span className="font-mon font-normal text-[18px] text-[#666666] opacity-80 " >{HideShow}</span>
                                </div>
                            </button>
                        </div>
                        <input id='password' type={psw} className="cursor-pointer border-box h-[56px] w-[100%] border-[1px] border-solid border-[#666666]/30  rounded-[12px]  mt-[5px] block pl-[25px] font-pop text-[#666666] text-[14px] focus:outline-none" />
                        <p className="font-mon font-normal leading-[17px]  text-[#666666] mt-[4px] mb-[25px] text-[14px]  ">Use 8 or more characters with a mix of letters, numbers & symbols</p>

                        <div className="flex flex-wrap flex-row  justify-between mr-[16px]  items-baseline " >
                            <label htmlFor='psw' className=" cursor-pointer font-mon font-normal text-[16px] inline leading-[20px] text-[#666666]  max-w-fit ">Confirm your password</label>
                        </div>
                        <input id='password' type={psw} className="cursor-pointer border-box h-[56px] w-[100%] border-[1px] border-solid border-[#666666]/30  rounded-[12px]  mt-[5px] block pl-[25px] font-pop text-[#666666] text-[14px] focus:outline-none" />
                    </form>
                </div>

                <div className="max-w-fit mt-7">
                    <label htmlFor='ha' className=" font-mon font-normal text-[16px] leading-[20px] text-[#333333] mb-[28px] flex justify-start items-center ">
                        <input type="checkbox" id='ha' name="" className="cursor-pointer w-[18px] h-[18px] mr-[11px] accent-black" />
                        <span className='cursor-pointer'>Agree to our <Link to='/terms-of-use'><span className="underline cursor-pointer text-[#0183FF] ">Terms of use</span></Link> and <Link to='/privacy-policy'><span className="underline cursor-pointer text-[#0183FF]">Privacy
                            Policy</span></Link> </span></label>
                    <label htmlFor='ba' className=" font-mon font-normal text-[16px] leading-[20px] text-[#333333]   flex justify-start items-center">
                        <input type="checkbox" id="ba" name="" className="cursor-pointer w-[18px]  h-[18px] mr-[11px] accent-black " /><span className='cursor-pointer'>Subscribe to our monthly newsletter</span></label>
                </div>


                <div className="flex flex-row items-center text-center border-box w-[363px] h-[68px] bg-white border-[1px] border-solid border-[#333333]/30 rounded-[18px] mt-[32px] sm:mx-auto  ">

                    <label htmlfor="robot" className="pl-[26px] cursor-pointer ">
                        <input type="checkbox" name="" id="robot" className='cursor-pointer' /><span className="cursor-pointer w-[117px] h-[20px] font-mon font-light text-[16px] leading-[20px] text-[#333333] pl-[9px] mr-[125px] max-w-fit">i'm not a robot</span>
                        <img src={gr} alt="" className=' inline pr-[10px] ' />
                    </label>
                </div>

                <Link to="/signup2" className='className=" mt-[30px] w-[98%] py-[18px] bg-[#0183FF] rounded-[18px] font-mon font-semibold text-[22px] leading-[27px] text-white  flex justify-center items-center cursor-pointer hover:bg-blue-600 hover:scale-105  "'>
                        <p >Next</p>
                </Link>


                <div className='sm:mx-auto ' >
                    <Link to='/signin' >
                        <span className="  cursor-pointer font-mon font-normal text-[16px] leading-[20px] text-[#333333]  ">Already have an account? <span className='underline font-medium text-[#0183FF]'>Log in </span></span>
                    </Link>
                </div>





            </div>


        </div>
    );
}

export default Signup;