import React from 'react'

const KeyIntegration = () => {
    const softwareAdv = [{ title: "SharePoint Online + Office apps", points: ["To enable fast and easy document creation in SharePoint Online."] }, { title: "SharePoint Online + Teams", points: ["To facilitate employee communication, collaboration, and sharing SharePoint Online files."] }, { title: "SharePoint Online + Planner", points: ["To easily create plans, assign tasks to a team, discuss tasks, and see the team's progress."] }, { title: "SharePoint Online + Power Automate", points: ["To automate business workflows in SharePoint Online like document approval, sending reminders about events, and more."] }, { title: "SharePoint Online + Delve", points: ["To enable convenient search for employee profiles and easy tracking of colleagues’ activities and recent documents in SharePoint Online."] }, { title: "SharePoint Online + Power BI", points: ["To deliver immersive reports and visuals on diverse corporate data (e.g., HR, financial, customer-related) right in SharePoint Online."] }]
    return (
        <div className='w-[85vw] mx-[110px] py-[60px]'>
            <div className='w-[100%] mb-[30px]'>
                <h1 className='font-bold text-3xl'>SharePoint Online + Office 365: Key Integrations</h1>
                <p className='text-[14px] font-semibold mt-[20px]'>ScienceSoft assists in specific development stages as well as provides full-cycle mobile app implementation. Our mobile app development services include:</p>
            </div>
            <div className='w-[100%] flex flex-wrap justify-between'>
                {
                    softwareAdv.map((item, index) => {
                        return (
                            <div className='w-[32.5%] h-[180px] border border-[#fffff] mt-[20px] shadow-[4px] flex flex-col gap-[10px] pt-[20px] px-[20px] box-border' key={index}>
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

export default KeyIntegration