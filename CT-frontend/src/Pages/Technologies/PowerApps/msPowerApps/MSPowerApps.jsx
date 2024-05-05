import React from 'react'

const MSPowerApps = () => {
    const softwareAdv = [{ title: "Canvas apps", points: ["App elements are dragged and dropped onto a canvas, data sources are connected to the app via Excel-style formulas.","Highly customizable."] }, { title: "Model-driven apps", points: ["Apps are created based on data models built on Dataverse, an underlying data platform for Power Apps.","Layout and functionality customization is limited."] }, { title: "Web portals", points: ["Designed using preconfigured and custom templates, forms, and views.","Suitable for employees or users outside organizations like customers and partners."] }]
    return (
        <div className='w-[85vw] mx-[110px] py-[60px]'>
            <div className='w-[100%] mb-[30px]'>
                <h1 className='font-bold text-3xl'>Types of Apps to Build with Microsoft Power Apps</h1>
                <p className='text-[14px] font-semibold mt-[20px]'>We work with all the mainstream technologies to expand the scope of functions the software can perform.</p>
            </div>
            <div className='w-[100%] flex flex-wrap justify-between'>
                {
                    softwareAdv.map((item, index) => {
                        return (
                            <div className='w-[32.5%] h-[220px] border border-[#fffff] mt-[20px] shadow-[4px] flex flex-col gap-[10px] pt-[20px] px-[20px] box-border' key={index}>
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

export default MSPowerApps