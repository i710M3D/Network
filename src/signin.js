import icon from './imgs/icon.svg'
import { useState } from 'react';
import { Link } from "react-router-dom";

const Singin = ({FunNav}) => {
    const [psw, setPsw ]= useState('password');
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
        <div className='flex  flex-wrap  flex-row  justify-between bg-white h-screen w-full z-30'>
            <div className="ml-[6%] flex flex-wrap flex-col w-[473px] mr-[6%] max-h-fit   ">
                <h2 className="mt-[14px] font-jost font-semibold text-[32px]  leading-[43px] sm:mx-auto sm:mt-[271px] sm:text-[36px] md:mx-0 md:mt-[14px]  md:text-[32px] lg:mx-0 cursor-pointer "><span className='text-[#0183FF]'>N</span>etwork.</h2>
                <div className="sm:mt-[20px] md:mt-[192px] grid gap-[2px] ">
                    <h2 className="font-mon font-semibold text-[32px] text-[#1F1F1F]  leading-[39px] m-0 cursor-pointer">Sign in</h2>
                    <p className="font-mon text-[#666666] opacity-80 text-[16px] font-normal  leading-[20px] cursor-pointer">Sign in for free to access our platform</p>
                </div>
                <div className="md:mt-[54px] sm: mt-[16px] ">
                    <form>

                        <label htmlFor='email' className="cursor-pointer font-mon font-normal text-[16px] leading-[20px] text-[#666666] block max-w-fit  ">Email address/Username</label>
                        <input id='email' type="text" className=" cursor-pointer border-box h-[56px] w-[100%] border-[1px] border-solid border-[#666666]/30 rounded-[12px]  mb-[19px] mt-[11px] block pl-[25px] font-pop text-[#666666] text-[14px] "></input>

                        <div className="flex flex-wrap flex-row  justify-between mr-[16px]  items-baseline " >
                        <label htmlFor='psw' className=" cursor-pointer font-mon font-normal text-[16px] inline leading-[20px] text-[#666666]  max-w-fit ">Password</label>
                            <button onClick={handleClick} type="button" className="bd-white inline cursor-pointer ">
                                
                                <img src={icon} alt="" className='inline mr-[5px] mt-[2.5px] ' />
                                <span  className="font-mon font-normal text-[18px] text-[#666666] opacity-80 " >{HideShow}</span>
                                
                            </button>
                        </div>
                        <input id='password' type={psw}  className="cursor-pointer border-box h-[56px] w-[100%] border-[1px] border-solid border-[#666666]/30 rounded-[12px]   mt-[5px] block pl-[25px] font-pop text-[#666666] text-[14px] " />
                        <p className="font-mon font-normal leading-[17px]  text-[#666666] mt-[4px] mb-[25px] text-[14px]  ">Forget your <span className='text-[#0183FF] cursor-pointer hover:text-blue-700'>Password</span> ?</p>
                        <Link to="/">
                        <button type='button' className='md:mt-[26px] w-[100%] h-[64px] py-[18px] bg-[#0183FF] rounded-[18px] font-mon font-semibold text-[22px] leading-[27px] text-white md:block sm:hidden '>Log in</button>
                        </Link>
                        <Link to="/" onClick={() => FunNav(true)}>
                        <div className=" cursor-pointer mt-[40px] flex items-center justify-center w-[250px] h-[64px] bg-[#111111] opacity-25 rounded-[32px] text-white font-mon font-medium text-[22px] leading-[27px] mb-[10px] sm:mx-auto md:hidden  " onClick={() => FunNav(true)}>
                        <p >Sign in</p>
                        </div>
                        </Link>
                    </form>
                    <hr className='mt-[35px] w-[85%] h-[1px] bg-[#D9D9D9] m-auto sm:hidden md:block ' />
                <Link to='/Signup1' >
                <div className='border-center w-[100%] h-[80.18px] mt-[37px] border-[0.8px] border-solid border-[#666666]/30 rounded-[19px] flex justify-center items-center '>
                   <h2 className='font-mon font-normal text-[16px] leading-[20px] text-[#333333]  '>Don't have an account?
                    <span className=' font-semibold text-[#0183FF] text-[18px] underline hover:text-blue-600'>
                     Sign up. 
                    </span> 
                    </h2>
                </div>
                </Link>
                  
                
                </div>
                
            </div>
            
        </div>
    );
}

export default Singin;