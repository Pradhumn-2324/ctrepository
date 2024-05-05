import React from 'react'

const BankingSoftSolution = () => {
    const customerExperience = [{ title: "Internet banking", points: ["Our software development pricing models.","Cost estimation factors and models.","Cost optimization best practices.","Analyzing the project’s economic feasibility."] }, { title: "Mobile Banking", points: ["Agile scoping and scope creep management.","Risk mitigation steps we take throughout the SDLC.","Our change management process.","Sample software documents we deliver."] }, { title: "Cutomer portal", points: ["Collaboration roles, models, and toolkit.","Our knowledge management activities, techniques, and tools."] }, { title: "Banking CRM", points: ["KPIs to measure cooperation success and software quality.","Process and software reports we provide."] }, { title: "Loyalty program managemnet", points: ["Data and assets we secure.","Security management procedures during the cooperation."] }, { title: "Banking data analytics", points: ["BFSI standards and regulations we help adhere to.","Our compliance-centered development process."] },{title:"Lending software", points:[""]},{title:"Payment software", points:[""]},{title:"Document management system", points:[""]}]
    return (
        <div className='w-[85vw] mx-[110px] pt-[30px] pb-[60px]'>
            <div className='w-[100%] mb-[30px]'>
                <h1 className='font-bold text-3xl'>Banking Software Solutions We Implement</h1>
                <p className='text-[14px] font-semibold mt-[20px]'>ScienceSoft provides a complete set of custom and platform-based solutions designed to meet your needs.</p>
            </div>
            <div className='w-[100%] flex flex-wrap justify-between'>
                {
                    customerExperience.map((item, index) => {
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

export default BankingSoftSolution