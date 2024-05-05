import React from 'react'
import softDev from '../../../../../assets/Services/DedicatedDevTeam/Main/softDev.png'
import webDev from '../../../../../assets/Services/DedicatedDevTeam/Main/webDevelop.png'
import mobileDev from '../../../../../assets/Services/DedicatedDevTeam/Main/mobileDev.png'
import dataAnalysis from '../../../../../assets/Services/DedicatedDevTeam/Main/dataAnalysis.png'
import qa_testing from '../../../../../assets/Services/DedicatedDevTeam/Main/QA.png'
import ITSupport from '../../../../../assets/Services/DedicatedDevTeam/Main/ITSupport.png'
import Cybersecurity from '../../../../../assets/Services/DedicatedDevTeam/Main/CyberS.png'
import Helpdesk from '../../../../../assets/Services/DedicatedDevTeam/Main/helpDesk.png'

import { useNavigate, useParams } from 'react-router-dom'
const AreaOfExperties = () => {
    const navigate = useNavigate()
    
    const AreaOfExperties = [{ title: "Software Development", image: softDev }, { title: "Web Development", image:  webDev }, { title: "Mobile Development", image: mobileDev}, { title: "Data analytics", image: dataAnalysis }, { title: "QA & Testing", image: qa_testing }, { title: "IT support", image: ITSupport}, { title: "Cybersecurity", image: Cybersecurity }, { title: "Help desk", image: Helpdesk }]

    return (
        <div className='w-[100vw] h-[auto] text-[white] box-border pt-[100px] md:pt-[50px] pb-[100px] bg-[black]'>
            <div className='w-[85%] mx-auto md:w-[90%]'>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[blue]'>Areas of Expertise</h1>
                <p className='w-[95%] text-[14px] mt-2 md:w-[100%] md:text-[12px]'>Pioneering Excellence: CT's software development teams boast diverse expertise, spanning from web and mobile to AI and blockchain. Empower your projects with our innovative solutions and technical mastery</p>
            </div>
            <div className='flex flex-wrap w-[85%] mx-auto gap-[30px] mt-[20px] items-center justify-center'>
                {AreaOfExperties.map((items, i) => {
                    return (
                        <div style={{ backgroundImage: `url(${items.image})`, backgroundSize: "cover", backgroundPosition: "center" }} className='w-[260px] h-[230px] relative'>
                            <div className='absolute top-0 left-0 w-[100%] h-[100%]'>
                                <button className='text-white border border-[white] px-3 absolute bottom-[-10px] left-[-10px] bg-[#272727] h-[45px] text-left' onClick={() => { navigate(`/service/Dedicated Software Team/${items.title}`) }}>{items.title}</button>
                            </div>
                        </div>
                    )
                })}
            </div>


        </div>
    )
}

export default AreaOfExperties
