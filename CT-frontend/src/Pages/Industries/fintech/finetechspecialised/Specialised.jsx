import React from 'react'

const Specialised = () => {
    const serviceDomain = [{ title: "Banking", points: ["Convenient 24/7 access to banking services for customers via self-service banking apps.", "Fast and easy delivery of banking services due to automation of core banking operations.", "Prompt and error-free processing of financial transactions with the help of open banking APIs."] }, { title: "Payments", points: ["Instant, accurate, and secure payment processing due to payment automation.","High customer satisfaction due to seamless digital payment experience and support for trending payment options: QR code-based payments, NFC-enabled"] }, { title: "Lending", points: ["Prompt AI-powered risk assessment and loan-related decision-making.","Optimal, analytics-based loan pricing.","Efficient payment collection and debt recovery enabled by process automation."] }, { title: "Mortgage", points: ["Automated processing of mortgage applications and calculation of mortgage-associated fees; streamlined collateral management, mortgage close, servicing, and foreclosure processes"] }, { title: "Insurance", points: ["Data-driven insurance underwriting and automated, risk-based insurance pricing.","Prompt and accurate claim settlement due to instant capture and intelligent validation of claim-related data."] }, { title: "Financing", points: ["Minimized financing-associated fees due to intelligent advice on the optimal loan amount and duration.","Automated calculation of charges and commissions under the financing activities."] } ]
    return (
        <div className='w-[85vw] mx-[110px] py-[60px]'>
            <div className='w-[100%] mb-[30px]'>
                <h1 className='font-bold text-3xl'>How Each BFSI Industry Sector Benefits from Specialized Fintech Software </h1>
                <p className='text-[14px] font-semibold mt-[20px]'>We provide full-cycle consulting and development services to help companies build single-purpose lending solutions or implement full-featured loan management systems to drive high ROI across the entire lending process.</p>
            </div>
            <div className='w-[100%] flex flex-wrap justify-between'>
                {
                    serviceDomain.map((item, index) => {
                        return (
                            <div className='w-[32.5%] h-[200px] border border-[#fffff] mt-[20px] shadow-[4px] flex flex-col gap-[10px] pt-[20px] px-[20px] box-border' key={index}>
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

export default Specialised