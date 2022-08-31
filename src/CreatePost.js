import { FaAngleDown } from "react-icons/fa";
import { MdPostAdd, MdOutlinePoll, MdOutlineFileUpload } from "react-icons/md";
import { FaPhotoVideo } from "react-icons/fa";
import { HiLightningBolt } from "react-icons/hi";
import { CgCheck } from "react-icons/cg";
import { useState } from "react";

import { Link } from "react-router-dom";
const CreatePost = () => {
    const [page, setPage] = useState(0)
    return (
        <div>
            <div className="h-screen w-full mt-16">

                <h1 className="font-mon text-gray-500 text-xl font-semibold w-[40%] border-b-2 mx-auto pt-12">Create Post</h1>
                <div className=" w-[40%] mx-auto flex mt-3 ">
                    <select className=" w-56 appearance-none h-8 focus:outline-none border-2 border-[#0183FF] rounded-[4px] pl-2 font-pop text-gray-500 font-base ">
                        <option value="" hidden>choose subNetwork</option>
                        <option value="">subNetwork1</option>
                        <option value="">subNetwork2</option>
                        <option value="">subNetwork3</option>
                        <option value="">subNetwork4</option>
                    </select>
                    <FaAngleDown size={20} className="  pointer-events-none z-10  ml-[-25px] mt-[5px] " />
                    <h1 className="ml-auto mt-2 font-pop font-semibold text-[#0183FF] mr-2 cursor-pointer hover:text-blue-700">Drafts</h1>
                </div>
                <div className=" w-[40%] h-fit bg-white border-4 mx-auto mt-4 rounded-[4px] " >
                    <div className=" w-full h-16 border-b-2 flex  items-center">
                        <div className={page === 0 ? 'flex  items-center cursor-pointer bg-gray-100 h-full' : 'flex  items-center cursor-pointer h-full hover:bg-gray-100'} onClick={() => setPage(0)}>
                            <MdPostAdd size={30} className="ml-7 pointer-events-none z-10" />
                            <h1 className="pr-6 border-r-2 py-3 font-mon font-semibold text-gray-500 text-lg">Post</h1>
                        </div>
                        <div className={page === 1 ? 'flex items-center cursor-pointer bg-gray-100 h-full' : 'flex items-center cursor-pointer hover:bg-gray-100 h-full'} onClick={() => setPage(1)}>
                            <FaPhotoVideo size={30} className="ml-7 mr-1 pointer-events-none z-10" />
                            <h1 className="pr-6 border-r-2 py-3 font-mon font-semibold text-gray-500 text-lg">image & video</h1>
                        </div>
                        <div className={page === 2 ? 'flex items-center cursor-pointer bg-gray-100 h-full' : 'flex items-center cursor-pointer hover:bg-gray-100 h-full'} onClick={() => setPage(2)}>
                            <MdOutlinePoll size={30} className="ml-7 pointer-events-none z-10" />
                            <h1 className="pr-6 border-r-2 py-3 font-mon font-semibold text-gray-500 text-lg">Poll</h1>
                        </div>
                        <div className="ml-auto flex text-violet-500 border-violet-500 w-fit h-8 border-4 items-center justify-center rounded-xl  hover:bg-violet-500  hover:scale-110 mr-5 cursor-pointer  hover:text-white">
                            <HiLightningBolt size={20} className=" ml-auto pl-1 pointer-events-none z-10 text-yellow-500" />
                            <h1 className=" font-bold  font-mon text-sm pr-2  ">buy Boost</h1>
                        </div>

                    </div>
                    <div className="w-full border-b-2 h-fit  ">
                        <div className="flex">
                            <input type="text" placeholder="Title" className="mt-2 border-2 outline-none w-[90%] mx-auto rounded-md h-8 px-2 " />
                            <p className="font-pop font-medium text-[10px] mt-4 mr-4">0/150</p>
                        </div>
                        {page === 0 && <div className="flex">
                            <textarea rows="" cols="" placeholder="Text..." className="mt-2 border-2 outline-none w-[90%] mx-auto rounded-md h-72 px-2 text-xl"></textarea>
                            <p className="font-pop font-medium text-[10px] mt-4 mr-4">0/450</p>
                        </div>}
                        {page === 1 && <div className=" border-dashed w-[95%] h-72 border-2 flex justify-center items-center mt-2 mx-auto rounded-md">
                            <input type="file" name="" value="" id='up' className="  hidden " />
                            <label for="up" className='bg-[#0183FF] flex items-center justify-center cursor-pointer w-32 h-12 rounded-md'><MdOutlineFileUpload size={20} className='text-white' />    <p className='font-mon font-semibold text-white' >Uplode</p></label>
                        </div>}
                        <div className=" flex mt-3 ml-auto w-fit mr-4 mb-3">
                            <h1 className="font-mon font-semibold px-3 py-1 rounded-full border-[#0183FF] border-2 cursor-pointer hover:bg-[#0183FF]  hover:text-white">cancel</h1>
                            <Link to="/" className="font-mon font-semibold bg-[#0183FF] flex items-center justify-center py-1 px-3 text-white rounded-full ml-5 cursor-pointer hover:bg-blue-600 hover:scale-105">
                            <h1 className="">post</h1>
                            </Link >
                        </div>
                    </div>
                    <div className=" w-full  flex items-center h-11 ml-5  " >
                        <input type="checkbox" id="agree" name="" value="" className=" appearance-none w-5 h-5 rounded-md border-2 bg-white  checked:bg-blue-500 cursor-pointer" />
                        <CgCheck size={20} className=" text-white z-10 ml-[-20px] pointer-events-none" />
                        <label htmlFor="agree" className="font-pop font-semibold text-gray-500 text-xs ml-1 cursor-pointer">i agree on Network's <span className="text-[#0183FF] cursor-pointer">content policy</span> and be a noice <span className="text-[#0183FF]">Networkian</span></label>
                    </div>
                </div>
            </div>
        </div>);
}

export default CreatePost;