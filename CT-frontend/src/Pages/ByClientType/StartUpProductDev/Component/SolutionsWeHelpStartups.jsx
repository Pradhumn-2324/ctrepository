import React from 'react'
import mobileAppDev from '../../../../assets/ByClientType/StartUpDev/Solution/mobileAppDev.png'
import { useNavigate, useParams } from 'react-router-dom'
const SolutionsWeHelpStartups = () => {
    const navigate = useNavigate()
    
    const solutionsHelpStartUpsData = [{ title: "Web Application", image: mobileAppDev }, { title: "Mobile Application", image: mobileAppDev }, { title: "Desktop Application", image: mobileAppDev }, { title: "SaaS Application", image: mobileAppDev }, { title: "Databases", image: mobileAppDev }, { title: "Integration Solution", image: mobileAppDev }, { title: "Digital Transformation", image: mobileAppDev }, { title: "DevOps", image: mobileAppDev }]

    return (
        <div className='w-[100vw] h-[auto] text-[white] box-border pt-[100px] md:pt-[50px] pb-[30px] bg-[black]'>
            <div className='w-[85%] mx-auto md:w-[90%]'>
                <h1 className='text-3xl font-bold md:text-[16px] md:text-[blue]'>Solutions We Help Startups Create</h1>
                <p className='w-[95%] text-[14px] mt-2 md:w-[100%] md:text-[12px]'>Click on the cards below to explore a full scope of ScienceSoft’s services for the type of software you want to build.</p>
            </div>
            <div className='flex flex-wrap w-[85%] mx-auto gap-[30px] mt-[20px]'>
                {solutionsHelpStartUpsData.map((items, i) => {
                    return (
                        <div style={{ backgroundImage: `url(${items.image})`, backgroundSize: "cover", backgroundPosition: "center" }} className='w-[250px] h-[230px] relative'>
                            <div className='absolute top-0 left-0 w-[100%] h-[100%]'>
                                <button className='text-white border border-[white] px-[20px] absolute bottom-[-10px] left-[-10px] bg-[#272727] h-[45px] text-center' onClick={() => { navigate(`/start-up-product-development/${items.title}`) }}>{items.title}</button>
                            </div>
                        </div>
                    )
                })}
            </div>


        </div>
    )
}

export default SolutionsWeHelpStartups
