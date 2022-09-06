import { MdOutlineBookmarkAdd } from "react-icons/md";
import sbc from "./imgs/1628016249403.jfif";
import djz from "./imgs/1526292777576.jfif";
import gdsc from "./imgs/gdsc.png";
import usthb from "./imgs/usthb.jfif";
import incubeMe from "./imgs/incubeMe.png";
import Posts from './Posts';
import { Link } from "react-router-dom";
import { useState } from "react";
const Content = ({side,hr}) => {
    const [more, setMore] = useState(false);
    return (
        <div className="z-40  flex mx-2  sm:mx-auto 2xl:ml-[16.9%] sm:max-w-[70%] ">
            <div className='w-[250px] h-fit border-2 relative     flex-col  rounded-lg bg-gray-100 cursor-default  hidden 2xl:flex '>
                <div className=" absolute w-full h-12 bg-gray-400 top-0 rounded-t-lg "></div>
                <div className='h-16 w-16 border-2 border-black rounded-[50%] flex justify-center items-center mx-auto my-3 bg-white z-10 cursor-pointer '>
                    <p className=' text-[32px] font-semibold text-gray-500'>P</p>
                </div>
                <p className=' text-[16px] font-semibold text-gray-500 mx-auto border-b-2 border-gray-200 pb-2 w-[70%] text-center'>Username</p>
                <p className="text-center text-xs text-gray-400 mt-2 mb-2 border-gray-200 border-b-2 pb-2 w-[80%] mx-auto ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Badges/>
                <Badges/>
                <Badges/>
                <div className="flex items-center border-t-2   border-b-2 w-[90%] mx-auto cursor-pointer">
                    <MdOutlineBookmarkAdd size={25} className=' ' /><p className=' text-[#0183FF] font-semibold font-mon text-[16px] py-2 hover:text-blue-600' >saved</p>
                </div>
                <Link to="/signin" className="text-[#0183FF] font-mon font-semibold my-2 ml-9 cursor-pointer hover:text-blue-600">
                    <h1 >Login</h1>
                </Link>
            </div>
             <Posts hr={hr} />
            <div className={`w-80 h-fit border-2  flex-col ml-auto rounded-lg bg-gray-100 cursor-pointer hidden 2xl:flex ${side ? ' -translate-x-14 ease-in-out duration-300 w-80' : 'ml-auto ease-in-out duration-300 w-80'}  `}>
                <h1 className="font-mon font-bold text-gray-500 my-2 ml-2 text-lg border-b-2 w-[90%] cursor-default">Find new subNetworks</h1>
               
               <SubNetworks img={sbc} name="Summer Break Challenge" />
               <SubNetworks img={djz} name="Djezzy" />
                <div className=" flex w-[90%]  py-2 ml-2 items-center border-b-2  ">
                    <div className="w-11 h-11  bg-white rounded-full mr-2 flex justify-center items-center text-[#0183FF] font-mon font-semibold text-3xl">N</div>
                    <h2 className="font-pop font-semibold text-[14px] text-gray-500  " >Network</h2>
                    <h2 className="px-3 font-semibold font-mon text-white bg-[#0183FF] rounded-full ml-auto mr-4 hover:scale-110 hover:bg-blue-600 py-[2px]">Join</h2>
                </div>
                {more && <SubNetworks img={gdsc} name="GDSC USTHB" />}
                {more && <SubNetworks img={usthb} name="USTHB" />}
                {more && <SubNetworks img={incubeMe} name="incubeMe" />}
                <h1 className="font-mon font-bold text-gray-500  text-lg  w-full bg-gray-200 flex items-center justify-center py-2 " onClick={() => setMore(!more)} ><p className="hover:drop-shadow-sm hover:scale-105">see {more ? "less" : "all"}</p></h1>
            </div>
        </div>
    );
}
 const Badges = () => {
    return ( <div className="mx-4 flex mt-2 cursor-pointer">
    <div className="w-5 h-5 bg-gray-200 rounded-full mr-1 mb-2"></div>
    <div className="w-5 h-5 bg-gray-200 rounded-full mr-1 mb-2"></div>
    <div className="w-5 h-5 bg-gray-200 rounded-full mr-1 mb-2"></div>
    <div className="w-5 h-5 bg-gray-200 rounded-full mr-1 mb-2"></div>
    <div className="w-5 h-5 bg-gray-200 rounded-full mr-1 mb-2"></div>
    <div className="w-5 h-5 bg-gray-200 rounded-full mr-1 mb-2"></div>
    <div className="w-5 h-5 bg-gray-200 rounded-full mr-1 mb-2"></div>
    <div className="w-5 h-5 bg-gray-200 rounded-full mr-1 mb-2"></div>
    <div className="w-5 h-5 bg-gray-200 rounded-full mr-1 mb-2"></div>
</div> );
 }
 const SubNetworks = ({img,name}) => {
    return ( <div className=" flex w-[90%] border-b-2 py-2 ml-2 items-center  ">
    <div className="w-11 h-11  bg-white rounded-full mr-2"> <img src={img} alt="" className="rounded-full" /></div>
    <h2 className="font-pop font-semibold text-[14px] text-gray-500 " >{name}</h2>
    <h2 className="px-3 font-semibold font-mon text-white bg-[#0183FF] rounded-full ml-auto mr-4 hover:scale-110 hover:bg-blue-600 py-[2px]">Join</h2>
</div> );
 }
  

  



export default Content;