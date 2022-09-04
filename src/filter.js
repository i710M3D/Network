import { AiFillStar } from 'react-icons/ai';
import { BsFillCalendarDateFill,BsPlusLg } from "react-icons/bs";
import { MdOutlineCategory } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";

const Filter = ({hr,Funhr}) => {
    
    return ( 
        
        <div className=" sm:scale-100 sm:w-[600px] scale-90 mx-auto h-fit relative mt-12 pt-4  ">
            <div className="w-[90%] flex justify-between  sm:px-10 my-5  mx-auto relative ">    
                <h1 className= "text-[32px] font-mon font-semibold  cursor-pointer scale-75 sm:scale-100"  onClick={() => Funhr(true)}>Home</h1>
                <h1 className="text-[32px] font-mon font-semibold  cursor-pointer scale-75 sm:scale-100"  onClick={() => Funhr(false)}>Recommended</h1>
                <div className={`h-[6px]  rounded-full bg-[#0183FF] absolute bottom-0 left-0 ease-in-out duration-300 scale-75 sm:scale-100 ${ hr ? ' -translate-x-2 sm:translate-x-8  w-[117px]' : ' translate-x-32 sm:translate-x-[237px]   w-[282px]'} `  }></div>
            </div>
            <div className=" flex  items-center h-14 bg-gray-200 rounded-lg mb-[20px]   sm:justify-start px-2">
          
             
            <label ></label><AiFillStar size={20} className=" hidden sm:block  pointer-events-none z-10 sm:ml-4  cursor-pointer" />
            <select  className=" appearance-none  bg-gray-200  border-2 rounded-[32px] h-9 sm:sm:ml-[-25px] font-pop font-base hover:bg-gray-300  focus:outline-none w-20 sm:pl-7 sm:mr-3 cursor-pointer">
            <option value="" hidden>Rate </option>
            <option value=""  >Most</option> 
            <option value="">Least</option>
            </select>
             
                
            <label ></label><BsFillCalendarDateFill size={20} className="hidden sm:block  pointer-events-none z-10 " />
           <select className=" appearance-none bg-gray-200  border-2 rounded-[32px] h-9 sm:ml-[-30px] font-pop font-base hover:bg-gray-300  focus:outline-none sm:text-right sm:pr-2 sm:mr-3 w-20  cursor-pointer">
            <option value=""  > <p className="  ">Now</p> </option>
            <option value="" >Today</option> 
            <option value="" >This week</option>
            <option value="" >This month</option>
            <option value="" >This year</option>
            <option value="" >All time</option>
            </select>
          
       
            <label ></label><MdOutlineCategory size={20} className="hidden sm:block pointer-events-none z-10   cursor-pointer" />
            <select className="appearance-none bg-gray-200  border-2 rounded-[32px] h-9 font-pop font-base w-30 sm:pl-5 pr-3 text-right sm:ml-[-25px]   hover:bg-gray-300  focus:outline-none sm:mr-1 cursor-pointer">
            <option value="" hidden>category</option>
            <option value="">category1</option> 
            <option value="">category2</option>

            </select>
          
           
            <select className=" appearance-none bg-gray-200  border-2 rounded-[32px] h-9 text-left font-pop font-base sm:pl-2 sm:pr-4 hover:bg-gray-300 sm:mr-[-25px] focus:outline-none text-[#0183FF] font-bold text-base cursor-pointer">
            <option value="" hidden>subNetwork</option>
            <option value="">subNetwork1</option> 
            <option value="">subNetwork2</option>
            </select>
            <label ></label><FaAngleDown size={20} className="hidden sm:block  pointer-events-none z-10    cursor-pointer" />
            <div className='hover:bg-gray-300 w-15 h-15 ml-auto mr-1 sm:ml-32 rounded-full cursor-pointer'>  
            <BsPlusLg size={25} className=" p-1"/>
            </div>
            </div>
            <hr/>
        </div>
     );
}
 
export default Filter;