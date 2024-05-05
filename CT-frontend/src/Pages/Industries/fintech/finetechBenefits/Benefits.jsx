import React from 'react'

const Benefits = () => {
    return (
        <div className='w-[100vw] bg-[#000000] text-white pt-[60px] pb-[30px]'>
            <div className='w-[85%] mx-[110px]'>
                <h1 className='font-bold text-3xl mb-[20px]'>See How You Benefit from Partnering with Us</h1>
                <p className='text-[14px] font-semibold mb-[60px]'>ScienceSoft’s practice shows that flexibility is a key to meeting each client’s expectations regarding the fintech software development timelines and budget. We offer:</p>
            </div>
            <div className='w-[85%] flex flex-wrap justify-between mx-[110px]'>
                <div className='w-[32.5%] h-[220px] bg-[#FF6868] box-border p-[15px]'>
                    <h4 className='text-[18px] font-bold mb-[10px]'>Corporate systems</h4>
                    <ul className='list-disc text-[14px] pl-[20px] font-normal'>
                        <li>Full outsourcing of fintech software development.</li>
                        <li>A dedicated team to take over a part of your project.</li>
                        <li>Team augmentation with the required number (from 0.5 to 150+ FTEs) of our best talents.</li>
                    </ul>
                </div>
                <div className='w-[32%] h-[220px] bg-[#1777BC] box-border p-[15px]'>
                    <h4 className='text-[18px] font-bold mb-[10px]'>Flexible pricing options</h4>
                    <ul className='list-disc text-[14px] pl-[20px] font-normal'>

                        <li>T&M, T&M with a cap – for advisory activities or agile implementation of a fintech solution.</li>
                        <li>
                            Fixed price – for software development divided into clear stages (fixed price for each stage).
                        </li>
                        <li>
                            A monthly subscription fee – for support activities.
                        </li>
                    </ul>
                </div>
                <div className='w-[32%] h-[220px] bg-[#E751FF] box-border p-[15px]'>
                    <h4 className='text-[18px] font-bold mb-[10px]'>Flexible development pace</h4>
                    <ul className='list-disc text-[14px] pl-[20px] font-normal'>
                        <li>
                            T&M, T&M with a cap – for advisory activities or agile implementation of a fintech solution.</li>
                        <li>Fixed price – for software development divided into clear stages (fixed price for each stage).</li>
                        <li>A monthly subscription fee – for support activities.
                        </li>
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default Benefits