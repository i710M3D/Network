import { useState } from "react";

const Sidebar = () => {
    const [dark, setDark] = useState(false);
 


    return (
 
            <div className="">
                
            <div className=" sm:mt-8 w-full scale-75 sm:scale-100 " >
                <div className="w-32 h-32 mx-auto bg-white rounded-full flex justify-center items-center cursor-pointer  ">
                    <h1 className="text-7xl font-semibold  text-[#0183FF]" >P</h1>
                </div>
                <h1 className="w-fit mx-auto mt-4 text-xl font-mon text-white font-semibold  hover">username</h1>
            </div>
          
            <hr className="w-[80%] mx-auto rounded-full sm:mt-4" />
            <ul className="text-white  mt-4 text-lg font-pop cursor-pointer " >
                <li className="py-1 pl-[10%] w-full hover:bg-blue-600" >Profil</li>
                <li className="py-1 pl-[10%] w-full hover:bg-blue-600" >User settings</li>
                <li className="py-1 pl-[10%] w-full hover:bg-blue-600" >Language</li>
            </ul>
            <hr className="w-[80%] mx-auto rounded-full mt-4 hover:bg-blue-600" />
            <div className="w-full mx-auto flex mt-2 py-3 hover:bg-blue-600 cursor-pointer" onClick={() => setDark(!dark)} >
                <h1 className="  text-lg font-pop text-white ml-[10%]  "   >Dark mode</h1>
                <div className={` ml-auto w-12 h-7 rounded-full   flex items-center  mr-[10%] ${dark ? `bg-gray-800 ease-in-out duration-300` : `bg-white ease-in-out duration-300`}  `} >
                    <div className={` w-5 h-5 bg-[#0183FF] rounded-full mx-1 ${dark ? `translate-x-full ease-in-out duration-300  ` : `translate-x-0 ease-in-out duration-300 `} `}  ></div>
                </div>

            </div>
            <hr className="w-[80%] mx-auto rounded-full mt-2 hover:bg-blue-600" />
            <ul className="text-white  mt-4 text-lg font-pop cursor-pointer " >
                <li className="py-1 pl-[10%] w-full hover:bg-blue-600" >Settings</li>
                <li className="py-1 pl-[10%] w-full hover:bg-blue-600" >Create subNetwork</li>
                <li className="py-1 pl-[10%] w-full hover:bg-blue-600" >Sub plans</li>
                <li className="py-1 pl-[10%] w-full hover:bg-blue-600" >Tokens</li>
                <li className="py-1 pl-[10%] w-full hover:bg-blue-600" >Saved</li>
                <li className="py-1 pl-[10%] w-full hover:bg-blue-600" >History</li>
            </ul>
            <hr className="w-[80%] mx-auto rounded-full mt-3 hover:bg-blue-600 mb-4" />
            <h1 className="text-white underline ml-[10%] font-pop cursor-pointer text-[12px] py-1 " >Term of use</h1>
            <h1 className="text-white underline ml-[10%] font-pop cursor-pointer text-[12px] py-1 ">Private policy</h1>
            <h1 className="text-white underline ml-[10%] font-pop cursor-pointer text-[12px] py-1 ">Content policy</h1>
            <h1 className="text-white underline ml-[10%] font-pop cursor-pointer text-[12px]  mt-3 ">Switch account</h1>
            <h1 className="text-white  ml-[10%] font-pop cursor-pointer text-[16px] mt-1">Login</h1>
            

   
        </div>);
}

export default Sidebar; <div>

</div>