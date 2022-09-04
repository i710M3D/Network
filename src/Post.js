import { AiFillStar } from 'react-icons/ai';
import { BiCommentAdd } from 'react-icons/bi';
import { RiShareForward2Line } from 'react-icons/ri';
import { MdOutlineBookmarkAdd, MdNotInterested,MdLightbulbOutline } from "react-icons/md";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FaRegFlag } from "react-icons/fa";

import { useState } from 'react';
const Post = ( {user,rate,category,boost,content,img,time,title,follow}) => {
    const [down, setDown] = useState(true);
    const [light, setLight] = useState(true);
    const [star, setStar] = useState(true);
    const [sv, setSv] = useState(true);
    return (
        <div className='cursor-pointer max-w-[600px] max-h-[600px] relative'>

            <div className="max-h-[600px] max-w-[600px]   mt-[20px] rounded-[8px]  flex bg-gray-100  ">

                <div className='max-h-full w-[48px] bg-gray-200 flex flex-col items-center rounded-l-[8px]   '>

                    <div className='h-fit w-[48px]  flex flex-col items-center  bg-[#0183FF] text-white  hover:bg-blue-600 rounded-l rounded-b-none' onClick={() => setStar(!star)}>
                        <AiFillStar size={25} className={star ? 'mt-4' : 'mt-4 text-yellow-400'} />
                        <p className=' '>{rate}</p> 
                    </div>
                    <MdLightbulbOutline size={25} className={light ? 'mt-auto mb-1 hover:scale-125' : 'mt-auto mb-1 text-yellow-500 scale-125 hover:scale-125'} onClick={() => setLight(!light)}/>
                </div>

                <div className=' w-full'>
                    <div className='flex '>
                        <div className='mr-auto'>    
                        <div className="flex items-center justify-start  mt-3 ml-2">
                            <div className='h-6 w-6 border-2 border-black rounded-[50%] flex justify-center items-center p-2 '><p className=' text-[12px] font-semibold text-gray-500'>P</p></div>
                            <p className=' text-[12px] font-semibold text-gray-500 ml-2 mr-2 hover:underline '>{user}</p>
                            <p className=' text-[12px] font-semibold text-gray-500  '>.{time}</p>
                        </div>
                        { boost && <p className=' text-[14px] font-bold text-violet-500 ml-2 '>Boosted</p>}
                        <h1 className="ml-2 font-semibold text-[18px] mt-1 mb-2">{title}</h1>
                        </div>
                        
                        <Category category={category}  />
                    { follow && <h2 className="sm:w-12 sm:h-6 px-2 h-5 sm:px-0  font-mon text-white bg-[#0183FF]  rounded-full  mr-4 hover:scale-110 hover:bg-blue-600 flex items-center justify-center mt-[17px] text-[10px] sm:text-[14px]">Join</h2>}
                    </div>
                    <div className='max-w-full h-fit  border-y-2 mb-2 flex flex-wrap'>
                        <p className='p-1 font-pop font-medium'>{content}</p>
                        <img src={img} alt="" className=' max-h-96 mx-auto '/>
                    </div>
                    <div className='flex -mt-2  items-center  text-[#0183FF] font-semibold text-md mb-1 ml-1 '>
                    <div className='hover:text-blue-600 flex'> 
                       <BiCommentAdd size={20} className='mt-1 mr-1' /><p className='mr-4' >comment </p>
                       </div>
                       <div className='hover:text-blue-600 flex'>
                        <RiShareForward2Line size={20} className='mt-1 mr-1' /><p className='mr-4' >share</p>
                       </div>
                       <div className={ sv ? 'hover:text-blue-600 flex': 'text-yellow-400 hover:text-yellow-500 flex'} onClick={() => setSv(!sv)}> 
                        <MdOutlineBookmarkAdd size={20} className='mt-1 ' /><p className='mr-4'  >save{!sv && <span>d</span>}</p>
                       </div>
                       
                       <div className='hover:text-blue-600 flex ml-auto'> 
                        <HiOutlineDotsHorizontal size={20} className='cursor-pointer  mr-5' onClick={() => setDown(!down)} />
                       </div> 
                    </div>

                </div>

            </div>
            {!down && <div className='w-[150px] h-[64px] border-4 border-gray-300 flex flex-col justify-center   text-[#0183FF] font-semibold text-md  rounded-lg bg-white z-10 absolute right-0 '>
                <div className='flex border-b-4 px-2 items-center hover:text-blue-600'>
                    <FaRegFlag size={20} className='mr-2 ' /><p className='mb-1' >report</p>
                </div>
                <div className='flex px-2 items-center hover:text-blue-600'>
                    <MdNotInterested size={20} className='mr-1 ' /><p className='' >not intrested</p>
                </div>
            </div>
            }
        </div>
    );
  
    
 
}
const Category = ({category}) =>  ( 
    <div className='  w-fit  flex h-fit flex-wrap justify-center  mt-3 mr-2 ml-aut2 '>    
    {category[0] && < p className='rounded-2xl  max-w-32  bg-gray-200 font-semibold text-gray-500   mt-1 flex justify-center px-1 py-1 ml-[2px] sm:ml-2 sm:text-[12px] text-[8px]  '>{category[0]}</p>}
    {category[1] && < p className='rounded-2xl  max-w-32  bg-gray-200 font-semibold text-gray-500   mt-1 flex justify-center px-1 py-1 ml-[2px] sm:ml-2 sm:text-[12px] text-[8px] '>{category[1]}</p>}
    {category[2] && < p className='rounded-2xl  max-w-32  bg-gray-200 font-semibold text-gray-500   mt-1 flex justify-center px-1 py-1 ml-[2px] sm:ml-2 sm:text-[12px] text-[8px] '>{category[2]}</p>}
    {category[3] && < p className='rounded-2xl  max-w-32  bg-gray-200 font-semibold text-gray-500   mt-1 flex justify-center px-1 py-1 ml-[2px] sm:ml-2 sm:text-[12px] text-[8px] '>{category[3]}</p>}
    </div>
    )

export default Post;