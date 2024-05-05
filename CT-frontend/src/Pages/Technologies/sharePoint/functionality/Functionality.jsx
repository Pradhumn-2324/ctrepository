import React from 'react'

const Functionality = () => {
    const softwareAdv = [{ title: "Document management", points: ["Document lifecycle automation.", "Templates.", "Co-authoring.","Full text and metadata search (search results filtering and ranking, search across integrated systems).","Versioning."] }, { title: "Collaboration (intranets, portals)", points: ["Knowledge base for a company’s policies, guides, and other content.", "Organization chart and employee profiles.","Communication tools (instant messaging, blogs, discussion boards).","Quick links to other corporate systems and information","Employee self-service."] }, { title: "Human resources management", points: ["Employee information management.", "Recruitment, hiring and onboarding management.", "Time and attendance management.","Employee performance tracking."] }, { title: "Learning management", points: ["Learning materials creation and storage.", "Assigning and scheduling trainings.","Learning assessment.","Certification management.","Competency management."] }]
    return (
        <div className='w-[85vw] mx-[110px] py-[60px]'>
            <div className='w-[100%] mb-[30px]'>
                <h1 className='font-bold text-3xl'>SharePoint and Office 365 Functionality</h1>
                <p className='text-[14px] font-semibold mt-[20px]'>Telecommunications software is used to organize and manage all aspects of electronic data (text, voice, video, etc.) exchange. CT helps telcos ensure that their networks run like clockwork.</p>
            </div>
            <div className='w-[100%] flex flex-wrap justify-between'>
                {
                    softwareAdv.map((item, index) => {
                        return (
                            <div className='w-[49%] h-[220px] border border-[#fffff] mt-[20px] shadow-[4px] flex flex-col gap-[10px] pt-[20px] px-[20px] box-border' key={index}>
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

export default Functionality