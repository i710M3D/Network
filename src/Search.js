import { Link } from "react-router-dom";
import { useState } from 'react';
import { BiSearch } from 'react-icons/bi';

import { RiHomeWifiFill, RiCompassDiscoverFill, RiAddCircleFill, RiNotification3Fill, RiChat3Fill } from 'react-icons/ri';
import Sidebar from "./SideBar";

const Search = ({ side, Funside }) => {
    const [nav, setNav] = useState(0);
    const handler = (e) => {
        setNav(e);
        Funside(false);
    }

    return (
        <div className='fixed top-0 w-full z-20 h-fit'>

            <div className=' h-16 w-full  flex items-center relative border-b-2 bg-white'>
                <h1 className=' font-mon font-bold text-lg sm:text-3xl ml-2 cursor-pointer'> <span className='text-[#0183FF]'>N</span><span>etwork</span></h1>
                <input type="text" placeholder='search...' className=' h-9 w-[50%] sm:w-[70%] rounded-[32px] pl-6 pb-1 text-gray-700 font-pop border-2 border-gray sm:ml-16 ml-5  placeholder:absolute placeholder:my-1 focus:outline-none ' />
                <BiSearch size={20} className=' absolute  sm:left-[212px] left-[116px]' />
                <div className='   w-[900px] h-fit   hidden lg:block  ml-6'>
                    <div className="justify-between  px-2 pt-[10px] pb-[4px] hidden lg:flex w-full  ">
                        <Link to='/'>
                            <RiHomeWifiFill size={32} className={nav === 0 ? "cursor-pointer scale-125 " : "cursor-pointer hover:scale-125"} onClick={() => setNav(0)} />
                        </Link>
                        <RiCompassDiscoverFill size={32} className={nav === 1 ? "cursor-pointer scale-125 " : "cursor-pointer hover:scale-125"} onClick={() => setNav(1)} />
                        <Link to='/CreatePost'>
                            <RiAddCircleFill size={32} className={nav === 2 ? "cursor-pointer scale-125 " : "cursor-pointer hover:scale-125"} onClick={() => setNav(2)} />
                        </Link>
                        <RiNotification3Fill size={32} className={nav === 3 ? "cursor-pointer scale-125 " : "cursor-pointer hover:scale-125"} onClick={() => setNav(3)} />
                        <RiChat3Fill size={32} className={nav === 4 ? "cursor-pointer scale-125 " : "cursor-pointer hover:scale-125"} onClick={() => setNav(4)} />
                    </div>
                    <div className="w-full">
                        <div className={`h-[6px] w-10  transform translate-x-1 rounded-full bg-[#0183FF]  bottom-0 left-0 ease-in-out duration-300 ${nav === 0 && 'translate-x-1  '} ${nav === 1 && 'translate-x-[129px] '} ${nav === 2 && 'translate-x-[252.5px] '} ${nav === 3 && 'translate-x-[376px] '} ${nav === 4 && 'translate-x-[500px] '}`}></div>

                    </div>

                </div>
                <Link to='/Signin' className="ml-[8%] mr-2">
                    <div className=' w-20 h-9 bg-[#0183FF] text-white font-mon font-semibold hidden sm:flex justify-center items-center rounded-[18px] cursor-pointer  hover:scale-105 hover:bg-blue-600 '>
                        <h2 className=''>Login</h2>
                    </div>
                </Link>
                <div className='h-[40px] w-[40px] border-2  rounded-full flex justify-center items-center ml-auto mr-3 cursor-pointer bg-[#0183FF] border-[#0183FF] hover:scale-110 ' onClick={() => Funside(!side)}>
                    <p className=' text-[20px] font-semibold  px-3 text-white '>P</p>
                </div>
            </div>
            <div className={`w-full sm:w-72 h-screen bg-[#0183FF] absolute sm:fixed   left-[100%] overflow-scroll sm:overflow-hidden   ${side ? '-translate-x-full sm:-translate-x-72 ease-in-out duration-300 ' : 'translate-x-full sm:translate-x-72 ease-in-out duration-300'}  `}>
                <Sidebar />
                <div className="w-full h-14 bg-white mt-5 sm:hidden flex px-4 justify-between items-center">
                    <Link to='/'>
                        <RiHomeWifiFill size={32} className={nav === 0 ? "cursor-pointer scale-125 text-[#0183FF] ease-linear " : "cursor-pointer hover:scale-125 hover:text-[#0183ff]  "} onClick={() => handler(0)} />
                    </Link>
                    <RiCompassDiscoverFill size={32} className={nav === 1 ? "cursor-pointer scale-125 text-[#0183FF] ease-linear " : "cursor-pointer hover:scale-125 hover:text-[#0183ff]  "} onClick={() => handler(1)} />
                    <Link to='/CreatePost'>
                        <RiAddCircleFill size={32} className={nav === 2 ? "cursor-pointer scale-125 text-[#0183FF] ease-linear " : "cursor-pointer hover:scale-125 hover:text-[#0183ff]  "} onClick={() => handler(2)} />
                    </Link>
                    <RiNotification3Fill size={32} className={nav === 3 ? "cursor-pointer scale-125 text-[#0183FF] ease-linear " : "cursor-pointer hover:scale-125 hover:text-[#0183ff]  "} onClick={() => handler(3)} />
                    <RiChat3Fill size={32} className={nav === 4 ? "cursor-pointer scale-125 text-[#0183FF] ease-linear " : "cursor-pointer hover:scale-125 hover:text-[#0183ff]  "} onClick={() => handler(4)} />
                </div>
                
            </div>
        </div>


    );
}

export default Search;