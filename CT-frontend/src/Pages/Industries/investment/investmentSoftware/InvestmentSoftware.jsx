import React from 'react'

const InvestmentSoftware = () => {
    const serviceDomain = [{ title: "Investment portfolio management", points: ["Automation of a company’s unique portfolio modeling, monitoring, and performance reporting workflows, which brings improvement in operational efficiency. Advanced analytics to accurately forecast the financial market and investment performance and minimize risks. Seamless and legally compliant digital trade"] }, { title: "Investment accounting software", points: ["Eliminated manual routines across the major accounting operations like transaction recordkeeping, billing, payouts, and financial reporting to free the fund managers’ time for high-value tasks. Support for all required accounting methods to accurately recognize the income from company-specific types of investments."] }, { title: "Investment compliance monitoring", points: ["Real-time monitoring of the wealth management operations’ compliance with the internal policies and required legal standards, including local standards. It helps prevent improper investment practices and avoid the risk of penalties for non-compliance."] }, { title: "Client lifecycle management", points: ["Facilitated investor data and relationships management and 100% visibility of investor interactions across the entire client lifecycle. Automated KYC/AML verification of new investors to prevent unauthorized access to services."] }, { title: "Investor reporting software", points: ["Streamlined generation and distribution of financial disclosure reports to timely meet the fiduciary responsibility to the investors and keep them up to date on their asset performance."] }, { title: "Trading apps", points: ["Web and mobile client-facing apps enabling seamless 24/7 investment operations across multiple asset classNamees, including alternative assets: real estate, renewable energy, crypto assets (crypto securities, tokenized commodities, NFTs), and more."]}]
    return (
        <div className='w-[85vw] mx-[110px] py-[60px]'>
            <div className='w-[100%] mb-[30px]'>
                <h1 className='font-bold text-3xl'>Investment Software CT Delivers </h1>
                <p className='text-[14px] font-semibold mt-[20px]'>From multi-functional wealth management systems to specialized solutions that automate particular investment operations – ScienceSoft can assist in designing and building software of any complexity to meet your unique needs. The examples of investment solutions we create include:</p>
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

export default InvestmentSoftware