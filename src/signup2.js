import { Link } from 'react-router-dom';
const Signup2 = ({ FunNav }) => {
    FunNav(false);
    return (
        <div className='flex  bg-white h-screen w-full '>

            <div className=" ml-[6%] mr-[6%]  w-[473px]  ">
                <div className='sm:mx-auto md:mx-0 lg:mx-0'>
                    <h2 className="mt-[14px] font-jost font-semibold text-[32px]  leading-[43px] sm:mx-auto sm:mt-[271px] sm:text-[36px] md:mx-0 md:mt-[14px]  md:text-[32px] lg:mx-0 "><span className='text-[#0183FF]'>N</span>etwork.</h2>
                </div>

                <div className="mt-[75px]   ">
                    <div className="mb-12  ml-[0%] ">
                        <h2 className="font-mon font-semibold text-[32px] text-[#1F1F1F]  leading-[39px] m-0">Sign up</h2>
                        <p className="font-mon text-[#666666] opacity-80 text-[16px] font-normal  leading-[20px] ">Sign up for free to access our platform</p>
                    </div>
                    <div className="font-mon font-semibold text-[22px] leading-[27px] text-[#666666]    text-center smn:hidden mdn:block ">2/2</div>
                    <form>
                        <label htmlFor='fn' className="cursor-pointer font-mon font-normal text-[16px] leading-[20px] text-[#666666] block max-w-fit  ">Firstname :</label>
                        <input id='fn' type="text" className=" cursor-pointer border-box h-[56px] w-[100%] border-[1px] border-solid border-[#666666]/30 rounded-[12px]  mb-[21px] mt-[11px] block pl-[25px] font-pop text-[#666666] text-[14px] focus:outline-none"></input>
                        <label htmlFor='ln' className="cursor-pointer font-mon font-normal text-[16px] leading-[20px] text-[#666666] block max-w-fit  ">Lastname :</label>
                        <input id='ln' type="text" className=" cursor-pointer border-box h-[56px] w-[100%] border-[1px] border-solid border-[#666666]/30 rounded-[12px]  mb-[21px] mt-[11px] block pl-[25px] font-pop text-[#666666] text-[14px] focus:outline-none"></input>
                        <label htmlFor='un' className="cursor-pointer font-mon font-normal text-[16px] leading-[20px] text-[#666666] block max-w-fit  ">Username :</label>
                        <input id='un' type="text" className=" cursor-pointer border-box h-[56px] w-[100%] border-[1px] border-solid border-[#666666]/30 rounded-[12px]  mb-[21px] mt-[11px] block pl-[25px] font-pop text-[#666666] text-[14px] focus:outline-none"></input>
                        <label className="cursor-pointer font-mon font-normal text-[16px] leading-[20px] text-[#666666] block max-w-fit  ">Gender :</label>
                        <div className="flex w-[50%] justify-between mt-[11px]  mb-[21px]" >
                            <label htmlFor='male' className="cursor-pointer font-mon font-normal text-[16px] leading-[20px] text-[#666666] block max-w-fit  ">Male :</label>
                            <input type="radio" id="male" name="gender" value="male" className="cursor-pointer focus:outline-none" />
                            <label htmlFor='female' className="cursor-pointer font-mon font-normal text-[16px] leading-[20px] text-[#666666] block max-w-fit  ">Female :</label>
                            <input type="radio" id='female' name="gender" value="female" className="cursor-pointer focus:outline-none" />
                        </div>
                        <label htmlFor="start" className="cursor-pointer font-mon font-normal text-[16px] leading-[20px] text-[#666666] block max-w-fit mb-[11px] ">Birthdate:</label>
                        <input type="date" id="start" name=""
                             max="2004-12-31" className=" w-[50%] h-10 cursor-pointer font-pop text-[#666666] px-2 focus:outline-none border-[1px] border-solid border-[#666666]/30 rounded-[12px] "/>
                    </form>
                    <Link to="/subplan" className='className=" mt-[45px] mx-auto w-[85%] py-[18px] bg-[#0183FF] rounded-[18px] font-mon font-semibold text-[22px] leading-[27px] text-white  flex justify-center items-center cursor-pointer hover:bg-blue-600 hover:scale-105  "'>
                        <p >Signup</p>
                    </Link>
                </div>













            </div>


        </div>);
}

export default Signup2;