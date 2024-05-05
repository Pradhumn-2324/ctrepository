import React from 'react'

const Customization = () => {
    const softwareAdv = [{ title: "Design", points: ["To create a unique look and feel and promote corporate culture across the company."] }, { title: "Workflows", points: ["To create complex and non-linear custom workflows. They can be created using tools like Power Automate and Visual Studio."] }, { title: "Page content", points: ["To make pages user-friendly and add new functionality like multilingual support, advanced analytics and reports, smart search, chatbots, and content personalization. For example, our team created custom add-ins to show employees’ workplaces on an office plan and provide weather snapshots for up to 10 chosen locations."] }, { title: "Navigation", points: ["To help users quickly access relevant information. For example, during employee portal development for a telecom company, ScienceSoft’s team built three-level navigation – two panels for SharePoint/Office 365 and the employee portal and a tile for quick links."] }]
    return (
        <div className='w-[85vw] mx-[110px] py-[60px]'>
            <div className='w-[100%] mb-[30px]'>
                <h1 className='font-bold text-3xl'>SharePoint and Office 365 Customization Capabilities</h1>
                <p className='text-[14px] font-semibold mt-[20px]'>Telecommunications software is used to organize and manage all aspects of electronic data (text, voice, video, etc.) exchange. ScienceSoft helps telcos ensure that their networks run like clockwork.</p>
            </div>
            <div className='w-[100%] flex flex-wrap justify-between'>
                {
                    softwareAdv.map((item, index) => {
                        return (
                            <div className='w-[49%] h-[200px] border border-[#fffff] mt-[20px] shadow-[4px] flex flex-col gap-[10px] pt-[20px] px-[20px] box-border' key={index}>
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

export default Customization