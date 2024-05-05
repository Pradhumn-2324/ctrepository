import React from 'react'

const SassDevSer = () => {
    const scopeOfSassData = [{ title: "Idea productization and design", points: ["Our consultants analyze competitors and the target audience's needs, describe a SaaS concept, define product differentiation and a unique selling proposition, and more."] }, { title: "Saas consulting", points: ["Our consultants prepare detailed software requirements specifications (SRS), describe the development roadmap, estimate TCO & ROI, and provide other project guidance."] }, { title: "SaaS UX design", points: ["Our UX designers outline personas, create user journey maps, deliver wireframes and storyboards, do usability testing, and more. We can also conduct a UX audit of your existing SaaS."] }, { title: "SaaS UI design", points: ["Our UI designers conduct visual identity analysis and create a design concept. They provide clickable prototypes, comprehensive UI kit, animations, specifications and assets for developers in Zeplin, Sketch or Figma, and more."] }, { title: "SaaS architecture design", points: ["ScienceSoft designs multi-tenancy architectures that are easy to scale, can withstand peak loads, and ensure 99.98% availability."] }, { title: "SaaS application development", points: ["Experienced in a wide range of technologies, our SaaS developers produce top-grade code, while our PMO use mature KPIs to ensure engineers’ highest productivity."] },{title:"QA and Testing",points:["Adhering to ISO 27001 standards and a proprietary Integrated Manual and Automated Testing approach, we ensure data integrity and high test coverage for your SaaS."]},{title:"Support and maintenance", points:["We offer L1, L2, and L3 support for your SaaS product as well as its corrective, adaptive, preventive, and perfective maintenance."]},{title:"SaaS evolution",points:["We help your SaaS cater to the growing audience needs by introducing in-demand features, including video streaming, VoIP, chatbots, AR/VR, AI, analytics."]}]
    return (
        <div className='w-[85vw] mx-[110px] py-[60px]'>
            <div className='w-[100%] mb-[30px]'>
                <h1 className='font-bold text-3xl'>Scope of Our SaaS Development Services </h1>
                <p className='text-[14px] font-semibold mt-[20px]'>ScienceSoft assists in specific development stages as well as provides full-cycle mobile app implementation. Our mobile app development services include:</p>
            </div>
            <div className='w-[100%] flex flex-wrap justify-between'>
                {
                    scopeOfSassData.map((item, index) => {
                        return (
                            <div className='w-[32.5%] h-[180px] border border-[#fffff] mt-[20px] shadow-[4px] flex flex-col gap-[10px] pt-[15px] px-[15px] box-border' key={index}>
                                <h2 className='text-xl font-bold pl-[10px]'>{item.title}</h2>
                                <ul className='list-disc text-[12px] pl-[20px]'>
                                    {
                                        item.points.map((point, i) => {
                                            return (
                                                <li key={i}>{point}</li>
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

export default SassDevSer