import React from 'react'
import mobileApp from '../../../../assets/Services/QA/typeOfSoft/mobileApp.png'
import webApp from '../../../../assets/Services/QA/typeOfSoft/webApp.png'
import desktop from '../../../../assets/Services/QA/typeOfSoft/desktop.png'
import saas from '../../../../assets/Services/QA/typeOfSoft/Saas.png'
import iot from '../../../../assets/Services/QA/typeOfSoft/IotApp.png'
import datawereHouse from '../../../../assets/Services/QA/typeOfSoft/dataWrHouse.png'
import ecommerse from '../../../../assets/Services/QA/typeOfSoft/Ecommerse.png'
import blockchain from '../../../../assets/Services/QA/typeOfSoft/blockchain.png'
import { useNavigate, useParams } from 'react-router-dom'
const TypesOfSoftwareInCT = () => {
    const navigate = useNavigate()
    
    const solutionsHelpStartUpsData = [{ title: "Mobile App", image: mobileApp }, { title: "web App", image:  webApp }, { title: "Desktop App", image: desktop}, { title: "SaaS Software", image: saas }, { title: "Data Warehouse", image: datawereHouse }, { title: "IOT Apps", image: iot}, { title: "Blockchain Apps", image: blockchain }, { title: "Ecommerce Software", image: ecommerse }]

    return (
        <div className='w-[100vw] h-[auto] text-[black] md:text-[white] box-border pt-[100px] pb-[20px] md:bg-[black]'>
            <div className='w-[85%] mx-auto md:w-full md:px-3'>
                <h1 className='text-3xl font-bold md:text-[20px] md:text-[blue] '>Types of Software that CT Tests</h1>
                <p className='w-[95%] text-[14px] mt-2 md:w-[100%] md:text-[16px]'>Click your software type to see how our testing experts handle its specifics.</p>
            </div>
            <div className='flex flex-wrap w-[85%] mx-auto gap-[30px] mt-[20px] md:w-[95%]'>
                {solutionsHelpStartUpsData.map((items, i) => {
                    return (
                        <div style={{ backgroundImage: `url(${items.image})`, backgroundSize: "cover", backgroundPosition: "center" }} className='w-[250px] h-[230px] relative md:w-[95%] md:mx-auto'>
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

export default TypesOfSoftwareInCT
