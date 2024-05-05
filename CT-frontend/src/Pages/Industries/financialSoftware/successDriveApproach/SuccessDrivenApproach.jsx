import React from 'react'

const SuccessDrivenApproach = () => {
    const customerExperience = [{ title: "Cost estimation", points: ["Our software development pricing models.","Cost estimation factors and models.","Cost optimization best practices.","Analyzing the project’s economic feasibility."] }, { title: "Development flow", points: ["Agile scoping and scope creep management.","Risk mitigation steps we take throughout the SDLC.","Our change management process.","Sample software documents we deliver."] }, { title: "Collaboration", points: ["Collaboration roles, models, and toolkit.","Our knowledge management activities, techniques, and tools."] }, { title: "Quality control", points: ["KPIs to measure cooperation success and software quality.","Process and software reports we provide."] }, { title: "Security managment", points: ["Data and assets we secure.","Security management procedures during the cooperation."] }, { title: "Regulatory compliance", points: ["BFSI standards and regulations we help adhere to.","Our compliance-centered development process."] }]
    return (
        <div className='w-[85vw] mx-[110px] py-[60px]'>
            <div className='w-[100%] mb-[30px]'>
                <h1 className='font-bold text-3xl'>Our Success-Driven Approach to BFSI Software Development</h1>
                <p className='text-[14px] font-semibold mt-[20px]'>Our teams and dedicated project managers ensure that goals are achieved, costs and time are predictable, and uncertainty is addressed agilely. Below, we share the project management and development practices we employ to succeed in financial services software initiatives:</p>
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

export default SuccessDrivenApproach