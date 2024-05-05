import React from 'react'

const ITServices = () => {
    const serviceDomain = [{ title: "Advanced technology consulting", points: ["Insurance data aggregation and processing.","Claim-related decision-making.","Insurance fraud detection.","Risk management.","Advanced operational analytics.","Demand forecasting and spend planning."] }, { title: "Insurance product consulting", points: ["A clear insurance product concept.","A unique selling proposition for your product.","Digital customer journey maps and a usability testing report.","A comprehensive UI kit.","An interactive prototype of your insurance software."] }, { title: "Insurance IT solution development", points: ["Suggesting optimal insurance solution features, architecture, and tech stack.","Implementation project cost & time estimates, ROI calculation."] }, { title: "Insurance digital transformation", points: ["Designing an individual digital transformation strategy and plan.","PoC development to assess the viability of innovative insurance software.","Modernization of existing insurance software and IT infrastructure."] }, { title: "Outsourcing of specific IT functions", points: ["Outsourced QA.","Cybersecurity services.","Outsourced IT support.","Managed IT infrastructure services.","Outsourced help desk."] }, { title: "IT staff augmentation", points: ["Developers (Java, .NET, Python, PHP, C++, and more).","Testers (manual and automated testing).","DevOps engineers.","Data analysts.","Cybersecurity experts."] }]
    return (
        <div className='w-[85vw] mx-[110px] pb-[60px] pt-[30px]'>
            <div className='w-[100%] mb-[30px]'>
                <h1 className='font-bold text-3xl'>IT Services for Insurance Companies</h1>
                <p className='text-[14px] font-semibold mt-[20px]'>Our financial software consulting services are customized to our clients’ needs and may cover:</p>
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

export default ITServices