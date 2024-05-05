import React from 'react'
import softCon from '../../../../../assets/Services/SoftwareDevService/Home/explore/softConsulting.png'
import customSoftDev from '../../../../../assets/Services/SoftwareDevService/Home/explore/customSoft.png'
import enterprise from '../../../../../assets/Services/SoftwareDevService/Home/explore/customSoft.png'
import softProduct from '../../../../../assets/Services/SoftwareDevService/Home/explore/softProduct.png'
import cloudApp from '../../../../../assets/Services/SoftwareDevService/Home/explore/cloudApp.png'
import lagencySoft from '../../../../../assets/Services/SoftwareDevService/Home/explore/lagencySoft.png'
import softSupport from '../../../../../assets/Services/SoftwareDevService/Home/explore/softSupport.png'
import maintainance from '../../../../../assets/Services/SoftwareDevService/Home/explore/maintanance.png'

import { useNavigate, useParams } from 'react-router-dom'
const ExploreSoftDev = () => {
    const navigate = useNavigate()

    const exploreSoftDevData = [{ title: "Software consulting", image: softCon }, { title: "Custom software development", image: customSoftDev }, { title: "Enterprise software ", image: enterprise }, { title: "Software product", image: softProduct }, { title: "Cloud application", image: cloudApp }, { title: "Legacy software", image: lagencySoft }, { title: "Software support", image: softSupport }, { title: "maintenance", image: maintainance }]

    return (
        <div className='w-[100vw] h-[auto] text-[white] box-border pt-[100px] md:pt-[50px] pb-[30px] bg-[black]'>
            <div className='w-[85%] mx-auto md:w-[90%]'>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[blue] '>Explore Our Software Development Offering</h1>
                <p className='w-[95%] text-[14px] mt-2 md:w-[100%] md:text-[16px]'>Software product development involves the conception and development of commercial software, focusing on creating unique offerings or those with a solid competitive edge. ValueCoders, a prominent software product development firm, empowers startup ventures and established companies to ensure their innovative solutions’ quality.</p>
            </div>
            <div className='flex flex-wrap w-[85%] mx-auto gap-[30px] mt-[20px] md:w-[90%]'>
                {exploreSoftDevData.map((items, i) => {
                    return (
                        <div style={{ backgroundImage: `url(${items.image})`, backgroundSize: "cover", backgroundPosition: "center" }} className='w-[250px] h-[230px] relative md:w-[95%]'>
                            <div className='absolute top-0 left-0 w-[100%] h-[100%]'>
                                <button className='text-white border border-[white] px-1 absolute bottom-[-10px] left-[-10px] bg-[#272727] h-[45px] text-left' onClick={() => { navigate(`/service/Software Development Service/${items.title}`) }}>{items.title}</button>
                            </div>
                        </div>
                    )
                })}
            </div>


        </div>
    )
}

export default ExploreSoftDev
