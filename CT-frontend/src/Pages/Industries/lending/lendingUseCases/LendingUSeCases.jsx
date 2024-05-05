import React from 'react'

const LendingUSeCases = () => {
    const serviceDomain = [{ title: "Consumer lending", points: ["Instant processing of consumer loan applications.", "CFast, analytics-based loan decision-making.", "Facilitated payment collection and debt recovery enabled by robust process automation.", "Convenient omnichannel communications"] }, { title: "Commercial lending", points: ["Streamlined origination and servicing of various business loans, including syndicated and multi-entity loans.", "Intelligent assessment of business credit risks.", "Full traceability of commercial lending operations."] }, { title: "Mortgage lending", points: ["Fast generation, secure sharing, and scalable storage of large-volume mortgage documents.", "Automated calculation of mortgage-associated fees.","Streamlined collateral management, mortgage close, servicing, and foreclosure processes.","Automated mortgage loan trading."] }, { title: "Alternative lending", points: ["Highly accessible and cost-effective peer-to-peer loans with no middleman services.", "Fast access to funds for borrowers and attractive investment opportunities for lenders.", "Automated microlending and microfinance."] }, { title: "-------", points: ["Establishing omni-channel communications.", "Adopting omni-channel approach for managing customer relationships.", "Building flexible reward systems.", "Including gamification elements, and more"] }, { title: "-------", points: ["Customer analytics (customer segmentation, attrition analysis, cross-sell effectiveness analysis, etc.).", "Channel analytics (analysis of branch transactions and customer traffic, analysis of click patterns, frequently accessed web-pages, search behavior, the most widely used mobile "] }]
    return (
        <div className='w-[85vw] mx-[110px] pb-[60px] pt-[30px]'>
            <div className='w-[100%] mb-[30px]'>
                <h1 className='font-bold text-3xl'>Lending Software Use Cases CT Specializes In</h1>
                <p className='text-[14px] font-semibold mt-[20px]'>IT solutions ScienceSoft creates help insurance companies improve overall business efficiency and introduce excellent customer experience. We can design and implement one or several of these targeted insurance solutions, as well as build a full-featured insurance business automation system:</p>
            </div>
            <div className='w-[100%] flex flex-wrap justify-between'>
                {
                    serviceDomain.map((item, index) => {
                        return (
                            <div className='w-[32.5%] h-[240px] border border-[#fffff] mt-[20px] shadow-[4px] flex flex-col gap-[10px] pt-[20px] px-[20px] box-border' key={index}>
                                <h2 className='text-xl font-semibold pl-[10px]'>{item.title}</h2>
                                <ul className='list-disc text-[14px] pl-[30px] font-normal'>
                                    {
                                        item.points.map((point, i) => {
                                            return (
                                                <li>{point}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default LendingUSeCases