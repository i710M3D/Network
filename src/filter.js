import { AiFillStar } from 'react-icons/ai';
import { BsFillCalendarDateFill,BsPlusLg } from "react-icons/bs";
import { MdOutlineCategory } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";
const Filter = () => {
    return ( 
        <div className="  w-[600px] mx-auto h-fit relative ">
            <div className="w-full flex justify-between px-20 my-5">    
                <h1 className="text-[32px] font-mon font-semibold hover:border-blue-500 hover:border-b-4">Home</h1>
                <h1 className="text-[32px] font-mon font-semibold hover:border-blue-500 hover:border-b-4">Recommended</h1>
            </div>
            <div className=" flex  items-center h-14 bg-gray-200 rounded-lg mb-[20px]  ">
          
             
            <label ></label><AiFillStar size={20} className="  pointer-events-none z-10 ml-4 " />
            <select  className=" appearance-none  bg-gray-200  border-2 rounded-[32px] h-9 ml-[-25px] font-pop font-base hover:bg-gray-300  focus:outline-none w-20 pl-7 mr-3">
            <option value="" hidden>Rate </option>
            <option value=""  >Most</option> 
            <option value="">Least</option>
            </select>
             
                
            <label ></label><BsFillCalendarDateFill size={20} className="  pointer-events-none z-10 " />
           <select className=" appearance-none bg-gray-200  border-2 rounded-[32px] h-9 ml-[-30px] font-pop font-base hover:bg-gray-300  focus:outline-none text-right pr-2 mr-3 w-20">
            <option value=""  > <p className="  ">Now</p> </option>
            <option value="" >Today</option> 
            <option value="" >This week</option>
            <option value="" >This month</option>
            <option value="" >This year</option>
            <option value="" >All time</option>
            </select>
          
       
            <label ></label><MdOutlineCategory size={20} className=" pointer-events-none z-10  " />
            <select className="appearance-none bg-gray-200  border-2 rounded-[32px] h-9 font-pop font-base w-30 pl-5 pr-3 text-right ml-[-25px]   hover:bg-gray-300  focus:outline-none mr-1">
            <option value="" hidden>category</option>
            <option value="">category1</option> 
            <option value="">category2</option>

            </select>
          
           
            <select className=" appearance-none bg-gray-200  border-2 rounded-[32px] h-9 text-left font-pop font-base pl-2 pr-4 hover:bg-gray-300 mr-[-25px] focus:outline-none text-[#0183FF] font-bold text-base">
            <option value="" hidden>subNetwork</option>
            <option value="">subNetwork1</option> 
            <option value="">subNetwork2</option>
            </select>
            <label ></label><FaAngleDown size={20} className="  pointer-events-none z-10   " />
            <div className='hover:bg-gray-300 w-15 h-15 ml-32 rounded-full'>  
            <BsPlusLg size={25} className=" p-1"/>
            </div>
            </div>
            <hr/>
        </div>
     );
}
 
export default Filter;