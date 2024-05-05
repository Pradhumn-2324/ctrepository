import React from 'react'
import mobileApp from '../../../../../assets/Services/DedicatedDevTeam/QaTesting/QAmobileApp.png'
import webApp from '../../../../../assets/Services/DedicatedDevTeam/QaTesting/qaWebApp.png'
import deskTopApp from '../../../../../assets/Services/DedicatedDevTeam/QaTesting/QAdesktop.png'
import saas from '../../../../../assets/Services/DedicatedDevTeam/QaTesting/QASaaS.png'
import DataWareHouse from '../../../../../assets/Services/DedicatedDevTeam/QaTesting/QADataWareHouse.png'
import iot from '../../../../../assets/Services/DedicatedDevTeam/QaTesting/QAIot.png'
import blockchain from '../../../../../assets/Services/DedicatedDevTeam/QaTesting/QAblockchain.png'
import ecommerce from '../../../../../assets/Services/DedicatedDevTeam/QaTesting/QAeCommerse.png'



import { useNavigate } from 'react-router-dom'
const TypeOfSoft = () => {
    const navigate = useNavigate()
    
    const qa_services = [{ title: "Mobile App", image: mobileApp }, { title: "Web App", image:  webApp }, { title: "Desktop App", image: deskTopApp}, { title: "SaaS Software", image: saas }, { title: "Data Warehouse", image: DataWareHouse }, { title: "IOT Apps", image:iot }, { title: "Blockchain Apps", image: blockchain }, { title: "E Commerse App", image: ecommerce }]

    return (
        <div className='w-[100vw] h-[auto] text-[white] box-border pt-[100px] md:pt-[50px] pb-[100px] bg-[black]'>
            <div className='w-[85%] mx-auto md:w-[90%]'>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[blue]'>Types of Software that CT Tests</h1>
                <p className='w-[95%] text-[14px] mt-2 md:w-[100%] md:text-[16px]'>Click your software type to see how our testing experts handle its specifics.</p>
            </div>
            <div className='flex flex-wrap w-[85%] mx-auto gap-[30px] mt-[20px] items-center justify-center md:w-[95%]'>
                {qa_services.map((items, i) => {
                    return (
                        <div style={{ backgroundImage: `url(${items.image})`, backgroundSize: "cover", backgroundPosition: "center" }} className='w-[260px] h-[230px] relative md:w-[90%]'>
                            <div className='absolute top-0 left-0 w-[100%] h-[100%]'>
                                <button className='text-white border border-[white] px-2 absolute bottom-[-10px] left-[-10px] bg-[#272727] h-[46px] text-left' onClick={() => { navigate(`/service/software-dev-service/${items.title}`) }}>{items.title}</button>
                            </div>
                        </div>
                    )
                })}
            </div>


        </div>
    )
}

export default TypeOfSoft
