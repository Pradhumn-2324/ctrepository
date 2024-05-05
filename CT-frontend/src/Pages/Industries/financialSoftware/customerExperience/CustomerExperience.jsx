import React from 'react'

const CustomerExperience = () => {
    const customerExperience = [{ title: "Banking apps", points: ["-------"] }, { title: "Payment apps", points: ["-------"] }, { title: "Money transfer apps", points: ["-------"] }, { title: "Lending apps", points: ["-------"] }, { title: "Insurance apps", points: ["-------"] }, { title: "Crypto wallets", points: ["-------"] }]
    return (
        <div className='w-[85vw] mx-[110px] py-[60px]'>
            <div className='w-[100%] mb-[30px]'>
                <h1 className='font-bold text-3xl'>Web and Mobile Applications to Introduce Excellent Digital Customer Experience</h1>
                <p className='text-[14px] font-semibold mt-[20px]'>Click on the cards below to explore a full scope of CT’s services for your business area.</p>
            </div>
            <div className='w-[100%] flex flex-wrap justify-between'>
                {
                    customerExperience.map((item, index) => {
                        return (
                            <div className='w-[32.5%] h-[200px] border border-[#fffff] mt-[20px] shadow-[4px] flex flex-col gap-[10px] pt-[20px] px-[20px] box-border' key={index}>
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

export default CustomerExperience