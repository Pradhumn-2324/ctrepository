import React from 'react'

const BankingServiceOffer = () => {
    return (
        <div className='w-[100vw] bg-[#000000] text-white pt-[60px] pb-[30px]'>
            <div className='w-[85%] mx-[110px]'>
                <h1 className='font-bold text-3xl mb-[20px]'>Banking IT Services We Offer</h1>
                <p className='text-[14px] font-semibold mb-[60px]'>Banking IT services are a way for banks and financial services companies to improve operational efficiency, drive innovations across their conventional business processes, and introduce the next-gen digital experience for their clients.</p>
            </div>
            <div className='w-[85%] flex flex-wrap justify-between mx-[110px]'>
                <div className='w-[32.5%] h-[220px] bg-[#FF6868] box-border p-[15px]'>
                    <h4 className='text-[18px] font-bold'>Digital transformation consulting</h4>
                    <p className='text-[14px] font-normal'>Whether you need to develop an enterprise digital strategy or move to a new technology platform, ScienceSoft will work closely with you to improve your IT ecosystem. Our IT consultants will help you identify how banking solutions can reinvent your business, as well as help you choose the most suitable platform, and estimate costs.</p>
                </div>
                <div className='w-[32%] h-[220px] bg-[#1777BC] box-border p-[15px]'>
                    <h4 className='text-[18px] font-bold'>IT-based customer experience</h4>
                    <p className='text-[14px] font-normal'>With 12 years of experience in developing CXM solutions, ScienceSoft clearly understands what makes excellent customer experience and how software can optimize and enhance all stages of the CXM cycle. Our CX consultants will guide you through a variety of solutions for customer experience.</p>
                </div>
                <div className='w-[32%] h-[220px] bg-[#E751FF] box-border p-[15px]'>
                    <h4 className='text-[18px] font-bold'>Solution maintenance and support</h4>
                    <p className='text-[14px] font-normal'>Backed by deep expertise in implementing platform-based solutions, ScienceSoft can meet the ever-changing needs of any banking environment at any scale. To reflect your bank’s unique business models, we can create a solution from scratch thereby satisfying your needs much more precisely than any off-the-shelf product.</p>
                </div>
            </div>
        </div>
    )
}

export default BankingServiceOffer