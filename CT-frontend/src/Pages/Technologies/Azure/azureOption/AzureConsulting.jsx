import React from 'react'

const AzureConsulting = () => {
    return (
        <div className='w-[100vw] bg-[#000000] text-white py-[60px]'>
            <div className='w-[85%] mx-[110px]'>
                <h1 className='font-bold text-3xl mb-[20px]'>Choose Your Azure Consulting Option</h1>
                <p className='text-[14px] font-semibold mb-[30px]'>CT is a flexible ASP.NET development company that offers different cooperation models to perfectly meet your .NET project needs.</p>
            </div>
            <div className='w-[85%] flex flex-wrap justify-between mx-[110px]'>
                <div className='w-[32.5%] h-[220px] bg-[#FF6868] box-border p-[15px]'>
                    <h4 className='text-[18px] font-bold'>Azure migration</h4>
                    <p className='text-[14px] font-normal mt-[15px]'>Whether you need to develop an enterprise digital strategy or move to a new technology platform, ScienceSoft will work closely with you to improve your IT ecosystem. Our IT consultants will help you identify how banking solutions can reinvent your business, as well as help you choose the most suitable platform, and estimate costs.</p>
                </div>
                <div className='w-[32%] h-[220px] bg-[#1777BC] box-border p-[15px]'>
                    <h4 className='text-[18px] font-bold'>App development in Azure</h4>
                    <p className='text-[14px] font-normal mt-[15px]'>With 12 years of experience in developing CXM solutions, ScienceSoft clearly understands what makes excellent customer experience and how software can optimize and enhance all stages of the CXM cycle. Our CX consultants will guide you through a variety of solutions for customer experience</p>
                </div>
                <div className='w-[32%] h-[220px] bg-[#E751FF] box-border p-[15px]'>
                    <h4 className='text-[18px] font-bold'>Azure optimization</h4>
                    <p className='text-[14px] font-normal mt-[15px]'>Backed by deep expertise in implementing platform-based solutions, ScienceSoft can meet the ever-changing needs of any banking environment at any scale. To reflect your bank’s unique business models, we can create a solution from scratch thereby satisfying your needs much more precisely than any off-the-shelf product.</p>
                </div>
            </div>
        </div>
    )
}

export default AzureConsulting