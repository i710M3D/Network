import { AiFillStar } from 'react-icons/ai';
import { BiCommentAdd } from 'react-icons/bi';
import { RiShareForward2Line } from 'react-icons/ri';
import { MdOutlineBookmarkAdd ,MdOutlineFileUpload ,MdNotInterested} from "react-icons/md";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FaRegFlag } from "react-icons/fa";

import { useState } from 'react';
const Post = () => {
    const [down,setDown] = useState(true); 
    return (
       <div className='mx-auto w-fit '>
        
            <div className="max-h-[600px] w-[600px] border-[1px] mx-auto mt-[20px] rounded-[8px] relative flex bg-gray-100 ">
            <div className='max-h-full w-[48px] bg-gray-200'>    
            <div className='h-fit w-[48px]  flex flex-col items-center  bg-[#0183FF] rounded text-white '>
                <AiFillStar size={25} className=" mt-4 " />
                <p className=' '>4.5</p>
            </div>
            </div>
            <div className=''>
                <div>
                    
                <div className="flex items-center  mt-3 ml-2">
                    <div className='h-6 w-6 border-2 border-black rounded-[50%] flex justify-center items-center '>
                        <p className=' text-[12px] font-semibold text-gray-500'>P</p>
                    </div>
                    <p className=' text-[12px] font-semibold text-gray-500 ml-2 '>subNetwork/Username .</p>
                    <p className=' text-[12px] font-semibold text-gray-500 ml-1 '>2h ago</p>
                </div>
                <p className=' text-[14px] font-bold text-violet-500 ml-2 '>Boosted</p>
                <h1 className="ml-2 font-semibold text-[18px] mt-1 mb-2">Title</h1>
                <p className='absolute top-3 right-4 rounded-2xl px-2 py-1 bg-gray-200 font-semibold text-gray-500'>category</p>
                </div>
                <div className='w-fit  border-y-2 mb-2 ml-1'>
                    <p>what about somthing like this ?? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
                </div>
                <div className='flex   items-center mt-1 text-[#0183FF] font-semibold text-md mb-1 ml-1'>
                <BiCommentAdd size={20} className='mt-1 mr-1'/><p className='mr-4' >comment </p>
                <RiShareForward2Line size={20} className='mt-1 mr-1'/><p className='mr-4' >share</p>
                <MdOutlineBookmarkAdd size={20} className='mt-1 '/><p className='mr-4' >save</p>
                <MdOutlineFileUpload size={20} className=''/>    <p className='mr-4' >submit</p>
                <HiOutlineDotsHorizontal size={20} className='cursor-pointer' onClick = { () => setDown(!down)}  />
                </div>
               
            </div>
          
            </div>
                    { !down && <div className='w-[150px] h-[64px] border-4 ml-96 flex flex-col  justify-center   text-[#0183FF] font-semibold text-md  rounded-xl'>
                   <div className='flex border-b-4 px-2 items-center'>
                   <FaRegFlag size={20} className='mr-2 '/><p className='mb-1' >report</p>
                   </div> 
                    <div className='flex px-2 items-center'>    
                    <MdNotInterested size={20} className='mr-1 '/><p className='' >not intrested</p>
                    </div>
                    </div>
                    }  
       </div> 
    );
}

export default Post;