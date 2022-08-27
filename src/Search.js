
import { BiSearch } from 'react-icons/bi';

import { RiHomeWifiFill ,RiCompassDiscoverFill ,RiAddCircleFill ,RiNotification3Fill,RiChat3Fill} from 'react-icons/ri';
const Search = () => {
    return (    
        <div className=' h-16 w-full  flex items-center relative border-b-2 '>
        <h1 className=' font-mon font-semibold text-3xl ml-2'> <span className='text-[#0183FF]'>N</span><span>etwork</span></h1>
        <input type="text"  placeholder='search...'  className='h-9 w-[550px] rounded-[32px] pl-6 border-2 border-gray ml-16  placeholder:absolute placeholder:my-1  ' />
        <BiSearch size={20} className=' absolute  left-52' />
        <div className='ml-[400px] flex justify-between w-[600px] h-fit'>    
        <RiHomeWifiFill size={32}   className="" /> 
        <RiCompassDiscoverFill size={32}  className=""/>
        <RiAddCircleFill size={32}  className=""/>
        <RiNotification3Fill size={32}  className=""/>
        <RiChat3Fill size={32}  className=""/>
        </div>
        <div className=' w-20 h-7 bg-[#0183FF] text-white font-mon font-semibold flex justify-center items-center rounded-[18px] cursor-pointer mx-4'>
            <h2 className=''>Login</h2>
        </div>
        <div className='h-9 w-9 border-2 border-black rounded-[50%] flex justify-center items-center ml-auto mr-3'>
            <p className=' text-[20px] font-semibold text-gray-500'>P</p>
        </div>
        </div> 
    );
}
 
export default Search;