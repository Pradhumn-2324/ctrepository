import React from 'react'
const Header = () => {
    return (
        <div className='w-[100vw] h-[100vh] bg-black'>
            <div className='w-[100%] h-[100%] bg-[black] opacity-[0.6] flex items-center'>
            <div className='p-[20px] text-[white] flex flex-col gap-[20px] ms-[110px] md:ms-0 md:w-full md:px-3'>
                <h1 className='text-3xl font-semibold text-white w-[50%] md:w-[90%] md:text-2xl md:ms-[0px]'>Ecommerce Services</h1>
                <p className='text-xl font-normal md:text-[16px] text-white w-[85%]'>Struggling with your eCommerce venture? Let ValueCoders elevate your business and help you tackle challenges and thrive in the competitive market with our expert eCommerce solutions, including shopping carts and payment gateway integration.</p>
                <button className="relative overflow-hidden text-white border border-current w-[fit-content] px-3 py-1 group border-b-2 text-[20px] md:px-4 md:ms-0 md:text-[16px] text-[20px] md:mt-[80px]">
                    <span className="absolute inset-0 bg-gradient-to-r from-[#7CE0FF] via-[#A598FF] to-[#C462FF] transition-width duration-300 ease-in-out transform -translate-x-full group-hover:translate-x-0"></span>
                    <span className="relative z-10">Connect With Our Experts <span className="font-bold">&rarr;</span></span>
                </button>
            </div>

            </div>
            
        </div>
    )
}

export default Header
