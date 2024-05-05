import React from 'react'

const SoftwareSolution = () => {
    const SoftwareSolutionArr = [{
        title: "Customer Experience", desc: (
            <ul>
                <li className='list-disc ms-5'>As consumers expect a truly omni-channel experience, we respond to this challenge by helping brands to provide consistent and personalized service – before, during and after a purchase.</li>
            </ul>
        )
    }, {
        title: "Ecommerce", desc: (
            <ul>
                <li className='list-disc ms-5'>We deliver scalable solutions that meet consumers’ requirements, facilitate their enjoyable, secure shopping experience and supply operational analytics for marketing and sales.</li>
            </ul>
        )
    }, {
        title: "Supply Chain", desc: (
            <ul>
                <li className='list-disc ms-5'>We enable real-time visibility into every stage of the supply chain, from manufacturing to checkout.</li>
            </ul>
        )
    }, {
        title: "Data Analysis & Business", desc: (
            <ul>
                <li className='list-disc ms-5'> We help you make informed decisions based on rich analytics sourced from your IT ecosystem and customer touchpoints.</li>
            </ul>
        )
    }, {
        title: "Computer Vision", desc: (
            <ul>
                <li className='list-disc ms-5'>ScienceSoft offers the development of custom image analysis solutions to increase the level of customer service in retail:</li>
            </ul>
        )
    }, {
        title: "Information Security", desc: (
            <ul>
                <li className='list-disc ms-5'>Being ISO 27001 certified, we maintain the highest standard of information security. We can help your business enable advanced security management.</li>
            </ul>
        )
    }
    ]
    return (
        <div className='w-[100vw] h-[auto] box-border pt-[50px] md:pt-[50px] pb-[30px] pb-[60px]'>
            <div className='w-[85%] mx-auto md:w-[90%]'>
                <h1 className='text-3xl font-bold md:text-[16px] md:text-[blue]'>Software Solutions We Provide</h1>
                <p className='mt-2 w-[98%] mx-auto'>From simple mobile apps to large-scale networks for multi-party transaction processing – as a fintech software development company, ScienceSoft ensures prompt and risk-free implementation of all kinds of fintech initiatives.</p>

            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-[20px]'>
                {SoftwareSolutionArr.map((item, index) => (
                    <div key={index} className='w-[350px] md:w-[90%] h-[200px] border border-gray-300 p-3'>
                        <h1 className='text-[18px] font-bold'>{item.title}</h1>
                        <p className='text-[13.5px] mt-2 font-medium'>{item.desc}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default SoftwareSolution
