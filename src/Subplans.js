const Subplans = ({FunNav}) => {
    FunNav(false);
    return ( 
    <div className='flex bg-white h-screen w-full '>
    <div className=" w-[50%] border-r-4 px-[6%]  ">
            <h2 className="cursor-pointer  mt-[14px] font-jost font-semibold text-[32px]  leading-[43px] sm:mx-auto sm:mt-[271px] sm:text-[36px] md:mx-0 md:mt-[14px]  md:text-[32px] lg:mx-0 "><span className='text-[#0183FF]'>N</span>etwork.</h2>
            <h2 className="cursor-pointer font-mon font-semibold text-[32px] text-[#1F1F1F]  leading-[39px]  mt-[35px] border-4 w-fit">Choose your plan :</h2>
    </div>
    </div>
     );
}
 
export default Subplans;