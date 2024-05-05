import React from 'react'
import adobe from "../../../HomePage/Component/assets/serviceWeOffer/adobecommerce.png"
const LendingHead = () => {
    return (
        <div className='w-[100vw] h-[100vh]'>
            <div className='w-full h-[100vh]'>
                <div className='w-[100vw] h-full relative' style={{ backgroundImage: `url(${adobe})`, backgroundSize: 'cover', backgroundPosition: 'center' }} >
                    <div className='w-[100%] h-[100%] absolute top-0 left-0 bg-black opacity-[0.6] flex flex-col justify-center items-start box-border px-3 gap-[46px] md:justify-evenly md:items:center'>
                        <div className='flex flex-col gap-[50px] w-[100%]'>
                            <h2 className='text-3xl font-semibold text-white w-[50%] ms-[110px] md:w-[90%] md:text-xl' style={{ fontFamily: 'Montserrat' }}>Lending Software Development Services</h2>
                            <p className='text-xl md:text-[16px] text-white text-left ms-[110px] w-[60%] md:w-[90%] md:mx-auto' style={{ fontFamily: 'Poppins' }}>Fleet management software provides visibility into vehicles’ location, condition, and fuel consumption and gives insights into drivers’ behavior. In fleet management since 2015, ScienceSoft delivers dedicated applications to optimize vehicle maintenance, reduce operational costs, and improve driver safety.</p>
                        </div>
                        <button className="relative overflow-hidden text-white border border-current w-[fit-content] px-3 py-1 ms-[110px] group border-b-2 text-[20px] md:px-4 md:ms-0 md:text-[16px] text-[20px]">
                            <span className="absolute inset-0 bg-gradient-to-r from-[#7CE0FF] via-[#A598FF] to-[#C462FF] transition-width duration-300 ease-in-out transform -translate-x-full group-hover:translate-x-0"></span>
                            <span className="relative z-10">Connect With Our Experts <span className="font-bold">&rarr;</span></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LendingHead