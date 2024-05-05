import React from 'react'
const Header = () => {
    return (
        <div className='w-[100vw] h-[100vh] bg-black' >
            <div className='w-[100%] h-[100%] bg-[black] opacity-[0.6] flex items-center'>
            <div className='p-[20px] text-[white] flex flex-col gap-[20px] ms-[110px] md:ms-0'>
                <h1 className='text-3xl font-semibold text-white w-[50%] md:w-[90%] md:text-2xl md:ms-[0px]'>Digital Operations Consulting</h1>
                <p className='text-xl font-normal md:text-[18px] text-white text-left w-[85%] md:w-[90%] md:ms-0 lg:w-[97%] md:mx-auto sm:text-[15px]'>Digital operations consulting will help you streamline production or service execution and reduce related costs. The services of ScienceSoft cover technical design of operations management software and, if required, its implementation and continuous support.</p>
                <button className="relative overflow-hidden text-white border border-current w-[fit-content] px-3 py-1 group border-b-2 text-[20px] md:px-4 md:ms-0 md:text-[16px] text-[20px]">
                    <span className="absolute inset-0 bg-gradient-to-r from-[#7CE0FF] via-[#A598FF] to-[#C462FF] transition-width duration-300 ease-in-out transform -translate-x-full group-hover:translate-x-0"></span>
                    <span className="relative z-10">Connect With Our Experts <span className="font-bold">&rarr;</span></span>
                </button>
            </div>

            </div>
            
        </div>
    )
}

export default Header
