import React from 'react'

const Function = () => {
    const softwareAdv = [{ title: "Scene detection", points: ["Our AR apps scan real-life surroundings with the camera lens, perceive gathered data as an image on a coordinate plane, and translate it into a depth map to ensure realistic 3D model placement."] }, { title: "Image and object recognition", points: ["Along with scene understanding, our AR apps can be trained to recognize specific 2D images and 3D real-life objects and augment them with the relevant text or model data on the device screen."] }, { title: "Motion tracking", points: ["Common for all smartphones and tablets, GPS, gyroscope, and accelerometer allow our AR apps dynamically resize and calibrate augmentations on the screen as you and your device move around."] }, { title: "Light estimation", points: ["With the help of smart light estimation algorithms, our AR apps can automatically adjust the lighting of the 3D model to naturally match that of the scene in the camera lens."] }]
    return (
        <div className='w-[85vw] mx-[110px] py-[60px]'>
            <div className='w-[100%] mb-[30px]'>
                <h1 className='font-bold text-3xl'>Functions We Can Build into an AR App</h1>
                <p className='text-[14px] font-semibold mt-[20px]'>Telecommunications software is used to organize and manage all aspects of electronic data (text, voice, video, etc.) exchange. CT helps telcos ensure that their networks run like clockwork.</p>
            </div>
            <div className='w-[100%] flex flex-wrap justify-between'>
                {
                    softwareAdv.map((item, index) => {
                        return (
                            <div className='w-[49%] h-[180px] border border-[#fffff] mt-[20px] shadow-[4px] flex flex-col gap-[10px] pt-[20px] px-[20px] box-border' key={index}>
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

export default Function