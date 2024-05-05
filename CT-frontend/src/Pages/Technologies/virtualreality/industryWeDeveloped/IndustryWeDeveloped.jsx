import React from 'react'

const IndustryWeDeveloped = () => {
    const softwareAdv = [{ title: "Healthcare", points: ["Surgery simulations","Psychological therapy","Gamified rehabilitation"] }, { title: "Education", points: ["Immersive training","Immersive research"] }, { title: "Manufacturing", points: ["Virtual design and engineering","Training","Maintenance guidance"] }, { title: "Retail", points: ["VR showrooms","Training"] }, { title: "Real Estate", points: ["Virtual tours"] }, { title: "Advertising", points: ["Gamified ads","Virtual events"] },{title:"Travel and entertainment", points:["Virtual tours","Virtual art installations"]},{title:"Transportation", points:["Driving simulators","Flight simulators"]}]
    return (
        <div className='w-[85vw] mx-[110px] py-[60px]'>
            <div className='w-[100%] mb-[30px]'>
                <h1 className='font-bold text-3xl'>Industries We Develop VR Apps for</h1>
                <p className='text-[14px] font-semibold mt-[20px]'>Telecommunications software is used to organize and manage all aspects of electronic data (text, voice, video, etc.) exchange. CT helps telcos ensure that their networks run like clockwork.</p>
            </div>
            <div className='w-[100%] flex flex-wrap justify-between'>
                {
                    softwareAdv.map((item, index) => {
                        return (
                            <div className='w-[49%] h-[140px] border border-[#fffff] mt-[20px] shadow-[4px] flex flex-col gap-[10px] pt-[20px] px-[20px] box-border' key={index}>
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

export default IndustryWeDeveloped