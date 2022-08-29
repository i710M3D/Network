import { Link } from "react-router-dom";
import { useState } from 'react';
import { BiSearch } from 'react-icons/bi';

import { RiHomeWifiFill ,RiCompassDiscoverFill ,RiAddCircleFill ,RiNotification3Fill,RiChat3Fill} from 'react-icons/ri';
const Search = () => {
    const [nav,setNav] = useState(0)
    
    return (   
        <div className='fixed top-0 w-full z-20'>
            
        <div className=' h-16 w-full  flex items-center relative border-b-2 bg-white'>
        <h1 className=' font-mon font-bold text-3xl ml-2 cursor-pointer'> <span className='text-[#0183FF]'>N</span><span>etwork</span></h1>
        <input type="text"  placeholder='search...'  className='h-9 w-[550px] rounded-[32px] pl-6 border-2 border-gray ml-16  placeholder:absolute placeholder:my-1 focus:outline-none ' />
        <BiSearch size={20} className=' absolute  left-[212px]' />
        <div className='ml-[400px] flex justify-between w-[500px] h-fit'> 
        <Link to='/'>
        <RiHomeWifiFill size={32}   className={nav === 0 ? "cursor-pointer scale-125 border-b-2 border-[#0183FF]" : "cursor-pointer hover:scale-125"} onClick={() => setNav(0)} /> 
        </Link> 
        <RiCompassDiscoverFill size={32}  className={nav === 1 ? "cursor-pointer scale-125 border-b-2 border-[#0183FF]" : "cursor-pointer hover:scale-125"} onClick={() => setNav(1)}/>
        <Link to='/CreatePost'>
        <RiAddCircleFill size={32}  className={nav === 2 ? "cursor-pointer scale-125 border-b-2 border-[#0183FF]" : "cursor-pointer hover:scale-125"} onClick={() =>setNav(2) }/>
        </Link>  
        <RiNotification3Fill size={32}  className={nav === 3 ? "cursor-pointer scale-125 border-b-2 border-[#0183FF]" : "cursor-pointer hover:scale-125"} onClick={() =>setNav(3)}/>
        <RiChat3Fill size={32}  className={nav === 4 ? "cursor-pointer scale-125 border-b-2 border-[#0183FF]" : "cursor-pointer hover:scale-125"} onClick={() => setNav(4)}/>
        </div>
        <Link to='/Signin'>
        <div className=' w-20 h-7 bg-[#0183FF] text-white font-mon font-semibold flex justify-center items-center rounded-[18px] cursor-pointer ml-16 hover:scale-105 hover:bg-blue-600'>
            <h2 className=''>Login</h2>
        </div>
        </Link>
        <div className='h-9 w-9 border-2 border-black rounded-[50%] flex justify-center items-center ml-auto mr-3'>
            <p className=' text-[20px] font-semibold text-gray-500'>P</p>
        </div>
        </div> 
        </div> 
    );
}
 
export default Search;