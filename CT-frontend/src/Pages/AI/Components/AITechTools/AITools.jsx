import React, { useState } from 'react'
import './aiTools.css'
const AITools = () => {
    const reliableTool = [ {
        title: "Machine Learning", stack: [{
            name: "Programming Language", logos: [
                require('../../../../../src/Pages/HomePage/Component/assets/reliableTech/machin_learning/programm_laung/matalab.png'),
                require('../../../../../src/Pages/HomePage/Component/assets/reliableTech/machin_learning/programm_laung/programming1.png'),
                require('../../../../../src/Pages/HomePage/Component/assets/reliableTech/machin_learning/programm_laung/rProgramming.png'),
                require('../../../../../src/Pages/HomePage/Component/assets/reliableTech/machin_learning/programm_laung/sas.png'),
                require('../../../../../src/Pages/HomePage/Component/assets/reliableTech/machin_learning/programm_laung/spss.png'),

            ]
        },
        {
            name: "Frameworks", logos: [
                require('../../../../../src/Pages/HomePage/Component/assets/reliableTech/machin_learning/framworks/caffe.png'),
                require('../../../../../src/Pages/HomePage/Component/assets/reliableTech/machin_learning/cloud_Service/amazonSagaMaker.png'),
                require('../../../../../src/Pages/HomePage/Component/assets/reliableTech/machin_learning/cloud_Service/aml.png'),
                require('../../../../../src/Pages/HomePage/Component/assets/reliableTech/machin_learning/cloud_Service/azML.png'),
                require('../../../../../src/Pages/HomePage/Component/assets/reliableTech/machin_learning/cloud_Service/oracle.png')
            ]
        },
        {
            name: "Libraries", logos: [
                require('../../../../../src/Pages/HomePage/Component/assets/reliableTech/machin_learning/libraries/gensim.png'),
                require('../../../../../src/Pages/HomePage/Component/assets/reliableTech/machin_learning/libraries/skikit_learn.png'),
                require('../../../../../src/Pages/HomePage/Component/assets/reliableTech/machin_learning/libraries/spacy.png'),
                require('../../../../../src/Pages/HomePage/Component/assets/reliableTech/machin_learning/libraries/spark.png'),
                require('../../../../../src/Pages/HomePage/Component/assets/reliableTech/machin_learning/libraries/tensorFlow.png'),

            ]
        },

        {
            name: "cloud Service", logos: [
                require('../../../../../src/Pages/HomePage/Component/assets/reliableTech/machin_learning/cloud_Service/aiML.png'),
                require('../../../../../src/Pages/HomePage/Component/assets/reliableTech/machin_learning/cloud_Service/amazonSagaMaker.png'),
                require('../../../../../src/Pages/HomePage/Component/assets/reliableTech/machin_learning/cloud_Service/aml.png'),
                require('../../../../../src/Pages/HomePage/Component/assets/reliableTech/machin_learning/cloud_Service/azML.png'),
                require('../../../../../src/Pages/HomePage/Component/assets/reliableTech/machin_learning/cloud_Service/oracle.png')
            ]
        }]
    }, 
{
    title: "Big Data", stack: [{
        name: "", logos: [
            require('../../../../../src/Pages/HomePage/Component/assets/reliableTech/big_data/Rectangle34440.png'),
            require('../../../../../src/Pages/HomePage/Component/assets/reliableTech/big_data/azurCloud.png'),
            require('../../../../../src/Pages/HomePage/Component/assets/reliableTech/big_data/azureBlub.png'),
            require('../../../../../src/Pages/HomePage/Component/assets/reliableTech/big_data/azureDataLake.png'),
            require('../../../../../src/Pages/HomePage/Component/assets/reliableTech/big_data/canssandra.png')
        ]
    }]
},   

];


    return (
        <div className='w-[100vw] h-[60vh] bg-[black] text-[white] box-border overflow-y-auto pb-[40px]'>
            <div className='w-[85%] md:w-[100%] bg-[#141414] mx-auto text-[white] flex flex-wrap justify-between md:flex-col md:overflow-x-hidden'>
                {reliableTool.map((items, i) => {
                    return (
                        <div className={items.stack.length > 1 ? 'w-[100%] border-b border-[#303030] py-4' : 'w-[50%] border-b border-[#303030] py-4 md:w-[100%]'}>
                            <h2 className='text-[20px] font-medium ms-3 md:ms-4 md:text-[14px] w-[100%]'>{items.title}</h2>
                            <div className={items.stack.length > 1 ? 'flex w-[100%] gap-x-[100px] flex-wrap gap-y-[40px]' : 'flex w-[100%]'}>{items.stack.map((item, i) => {
                                return (
                                    <div className='px-5 pt-3' key={i} >
                                        <h3 className='text-[13px]'>{item.name}</h3>
                                        <div className='flex gap-[20px] mt-2 md:gap-[10px]'>
                                            {item.logos.map((logo, i) => {
                                                return (
                                                    <div className='w-[55px] md:w-[47px]'>
                                                        <img src={logo} alt="" />
                                                    </div>
                                                )
                                            })}
                                            <div className='w-[55px] md:w-[47px] bg-[#000000] h-[53px] md:h-[47px] border border-[white] flex items-center justify-center text-[10px] cursor-pointer'> See All</div>
                                        </div>
                                    </div>
                                )
                            })}
                            </div>
                        </div>
                    )
                })
                }

            </div>
        </div>
    )
}

export default AITools
