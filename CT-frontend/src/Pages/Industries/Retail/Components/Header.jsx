import React from 'react'
import oilgasHeader from '../../../../assets/Industries/OilandGas/oilAndGas.png'

const Header = () => {
    return (
        <div className='w-[100vw] h-[100vh]' style={{ backgroundImage: `url(${oilgasHeader})`, backgroundSize: 'cover' }}>
            <div className='w-[100%] h-[100%] bg-[black] opacity-[0.6] flex items-center'>
            <div className='p-[20px] text-[white] flex flex-col gap-[20px] ms-[110px]'>
                <h1 className='text-4xl font-semibold'>IT Services & Solutions for Retail</h1>
                <p className='text-[18px] w-[90%] font-normal'>Fleet management software provides visibility into vehicles’ location, condition, and fuel consumption and gives insights into drivers’ behavior. In fleet management since 2015, ScienceSoft delivers dedicated applications to optimize vehicle maintenance, reduce operational costs, and improve driver safety.</p>
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
