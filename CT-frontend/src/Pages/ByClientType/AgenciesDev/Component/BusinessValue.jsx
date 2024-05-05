import React from 'react'
import dataScience from '../../../../assets/ByClientType/AgenciesSoftDev/dataScience.png'
import bigData from '../../../../assets/ByClientType/AgenciesSoftDev/bigData.png'
import AI from '../../../../assets/ByClientType/AgenciesSoftDev/AI.png'
import imageaAnalysis from '../../../../assets/ByClientType/AgenciesSoftDev/imageAnalysis.png'
import Iot from '../../../../assets/ByClientType/AgenciesSoftDev/Iot.png'
import virtualReality from '../../../../assets/ByClientType/AgenciesSoftDev/virtualReality.png'
import augmented_reality from '../../../../assets/ByClientType/AgenciesSoftDev/augmentedReality.png'
import blockchain from '../../../../assets/ByClientType/AgenciesSoftDev/blockchain.png'

const BusinessValue = () => {
    const mobileAppDeveloped = [{ title: "Data science", image: dataScience }, { title: "Big Data", image: bigData }, { title: "Artificial Inteligence", image: AI }, { title: "Image Analysis", image: imageaAnalysis }, { title: "Internet of Things", image: Iot }, { title: "Virtual Reality", image: virtualReality }, { title: "Agumented Reality", image: augmented_reality }, { title: "Blockchain", image: blockchain }]
    return (
        <div className='pb-[70px] pt-[60px]'>
            <div className='w-[85%] mx-auto md:w-5/6'>
                <h1 className='text-3xl font-bold md:text-base text-blue'>Drive Business Value with Advanced Technologies</h1>
                <p className='w-11/12 text-sm mt-2 md:w-full md:text-xs'>ScienceSoft introduces the most appropriate innovative techs for each business case to achieve high ROI across enterprise-level processes.</p>
            </div>
            <div className='flex flex-wrap w-[85%] mx-auto gap-[30px] mt-[20px]'>
                {mobileAppDeveloped.map((items, i) => {
                    return (
                        <div style={{ backgroundImage: `url(${items.image})`, backgroundSize: "cover", backgroundPosition: "center" }} className='w-[250px] h-[230px] relative'>
                            <div className='absolute top-0 left-0 w-[100%] h-[100%]'>
                                <button className='text-white border border-[white] w-[200px] px-[20px] absolute bottom-[-10px] left-[-10px] bg-[#272727] h-[45px]' onClick={() => { navigate(`/start-up-product-development/${items.title}`) }}>{items.title}</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>

    )
}

export default BusinessValue
