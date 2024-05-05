import React from 'react'

const ImageAnalysisService = () => {
    const softwareAdv = [{ title: "Facial recognition", points: ["Identification of a specific person’s face to provide exclusive services, identify suspects and trespassers, etc."] }, { title: "Emotion recognition", points: ["Assessing the level of a customer’s satisfaction to solve unique business challenges."] }, { title: "Grading and sorting", points: ["Object quality analysis for streamlined classNameifying and sorting."] }, { title: "Quality control (QC)", points: ["Checking for surface defects, foreign materials, discoloration, absence of components, etc."] }, { title: "Counting", points: ["Using an optical system to count similar objects on the production line or in a warehouse."] }, { title: "Computer-aided diagnosis", points: ["Reading X-ray images, CT, PET and MRI scans, ultrasound scans (including 3D and 4D), isotope scans, etc. Enhancing clinical images, measuring organ dimensions and blood flow, detecting pathological signs and suggesting a diagnosis."] }]
    return (
        <div className='w-[85vw] mx-[110px] py-[60px]'>
            <div className='w-[100%] mb-[30px]'>
                <h1 className='font-bold text-3xl'>Image Analysis Solutions We Offer</h1>
                <p className='text-[14px] font-semibold mt-[20px]'>ScienceSoft assists in specific development stages as well as provides full-cycle mobile app implementation. Our mobile app development services include:</p>
            </div>
            <div className='w-[100%] flex flex-wrap justify-between'>
                {
                    softwareAdv.map((item, index) => {
                        return (
                            <div className='w-[32.5%] h-[200px] border border-[#fffff] mt-[20px] shadow-[4px] flex flex-col gap-[10px] pt-[20px] px-[20px] box-border' key={index}>
                                <h2 className='text-xl font-semibold pl-[10px]'>{item.title}</h2>
                                <ul className='text-[14px] pl-[30px] font-normal'>
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

export default ImageAnalysisService