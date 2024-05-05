import React from 'react'

const MSServiceOptions = () => {
    const softwareAdv = [{ title: "Digital transformation", points: ["ScienceSoft helps companies unfold holistic digital transformation and achieve the highest ROI from the initiatives based on Microsoft techs."] }, { title: "Big data solutions and platforms", points: ["ScienceSoft builds and supports organization-wide big data platforms and dedicated big-data-powered applications. We help you choose and integrate the right services for high-volume and high-velocity data from a broad Azure portfolio, implement fast and reliable custom components to enable stream processing and advanced analytics"] }, { title: "Data management & analytics", points: ["Help you collect the right data, clean, integrate and protect it.","Run highly efficient and modern data centers.","Create and deploy BI solutions, incl. reporting, dashboards and visualization."] }, { title: "Cloud-native apps on Azure", points: ["End-to-end development of web and mobile apps using Azure cloud services. We take the full responsibility for turning your ideas/needs into a ready-to-use products/solutions and can proceed with its continuous support and evolution."] }, { title: "Azure cloud migration", points: ["Smooth and effective migration of your applications, data warehouses, desktops, etc. to the Azure cloud. No unplanned disruptions. Continuous cloud consumption optimization."] }, { title: "-------", points: ["We set up APIs to integrate your web app with corporate or third-party systems and services. App integration ensures immediate data synchronization across systems."] }]
    return (
        <div className='w-[85vw] mx-[110px] py-[60px]'>
            <div className='w-[100%] mb-[30px]'>
                <h1 className='font-bold text-3xl'>Our Core Microsoft Service Options</h1>
                <p className='text-[14px] font-semibold mt-[20px]'>ScienceSoft assists in specific development stages as well as provides full-cycle mobile app implementation. Our mobile app development services include:</p>
            </div>
            <div className='w-[100%] flex flex-wrap justify-between'>
                {
                    softwareAdv.map((item, index) => {
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

export default MSServiceOptions