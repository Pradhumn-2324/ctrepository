import React from 'react'

const VRDevService = () => {
    const softwareAdv = [{ title: "Business consulting", points: ["We help you finalize both detailed and high-level VR software concepts as we:","Gather and analyze your needs.","Formulate technical requirements and functional scope.","Help you choose VR equipment with your budget in mind."] }, { title: "Architecture design", points: ["We plan out an individual software architecture to ensure that your VR application will have:", "High performance​.","Fast scalability.","Easy configurability.","World-className security."] }, { title: "3D modeling", points: ["When creating VR content, we apply such immersion-improving elements as:","Highly realistic visuals.","Kinesthetic attributes.","Engaging animations."] }, { title: "VR software development", points: ["Our large and experienced team of VR developers delivers smooth VR experiences by:","Making use of motion/eye tracking and computer vision technologies.","Introducing intuitive interactivity and realistic sound acoustics.","Optimizing back ends for high-load VR processes."] }, { title: "Quality assurance", points: ["To guarantee the quality of your VR application, our testing engineers:","Run unit tests.","Combine manual testing with automated tests.","Provide detailed test documentation."] }, { title: "VR software integration", points: ["We integrate VR software not only with VR hardware but also with any software applications including:", "CMS.","LMS", "EHR.", "CRM."] }, { title: "VR software support", points: ["We maintain your VR application to ensure its seamless performance and long-lasting value and provide regular reports on the app's health and potential risks."] }, { title: "VR software evolution", points: ["We revamp your VR software and expand it with new functional capabilities to keep the solution competitive on the market and enhance its attractiveness for end users."] }, { title: "-------", points: ["Automated spotting of fraudulent activities in digital and physical environments.", "Intelligent enforcement"] }]
    return (
        <div className='w-[85vw] mx-[110px] py-[60px]'>
            <div className='w-[100%] mb-[30px]'>
                <h1 className='font-bold text-3xl'>Our Virtual Reality Development Services</h1>
                <p className='text-[14px] font-semibold mt-[20px]'>We work with all the mainstream technologies to expand the scope of functions the software can perform.</p>
            </div>
            <div className='w-[100%] flex flex-wrap justify-between'>
                {
                    softwareAdv.map((item, index) => {
                        return (
                            <div className='w-[32.5%] h-[250px] border border-[#fffff] mt-[20px] shadow-[4px] flex flex-col gap-[10px] pt-[20px] px-[20px] box-border' key={index}>
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

export default VRDevService