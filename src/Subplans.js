const Subplans = ({FunNav}) => {
    FunNav(false);
    return ( <div className='flex   bg-white h-screen w-full '>
    <div className=" ml-[6%] mr-[6%] flex flex-wrap w-[473px]  ">
        <div className='sm:mx-auto   md:mx-0 lg:mx-0'>
            <h2 className="mt-[14px] font-jost font-semibold text-[32px]  leading-[43px] sm:mx-auto sm:mt-[271px] sm:text-[36px] md:mx-0 md:mt-[14px]  md:text-[32px] lg:mx-0 "><span className='text-[#0183FF]'>N</span>etwork.</h2>
        </div>

        <div className="mt-[75px] border-4  ">
            <div className="mb-12  ml-[0%] ">
                <h2 className="font-mon font-semibold text-[32px] text-[#1F1F1F]  leading-[39px] m-0">Sign up</h2>
                <p className="font-mon text-[#666666] opacity-80 text-[16px] font-normal  leading-[20px] ">Sign up for free to access our platform</p>
            </div>
            <div className="font-mon font-semibold text-[22px] leading-[27px] text-[#666666]    text-center smn:hidden mdn:block ">2/2</div>
         </div>  

        </div>
    </div>
     );
}
 
export default Subplans;