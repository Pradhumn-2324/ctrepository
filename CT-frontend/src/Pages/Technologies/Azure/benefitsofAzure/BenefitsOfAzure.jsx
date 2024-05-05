import React from 'react'

const BenefitsOfAzure = () => {
    const softwareAdv = [{ title: "Optimal Azure migration costs", points: ["We analyze the market and your brand identity to spot and manifest your competitive advantage."] }, { title: "Reduced cloud consumption costs", points: ["We assist with app concept finalization, advise on platform/device compatibility, plan project activities, and optimize development costs."] }, { title: "Increased development speed", points: ["DOur designers create sleek and intuitive UX and visually appealing UI to ensure conversion, engagement, and easy adoption."] }, { title: "Tuned app performance", points: ["Our front-end developers can implement any design idea and ensure all interface elements work properly. We work with all most-used JavaScript frameworks, such as Angular, React, Meteor, Vue, Next, Ember."] }, { title: "Highly reliable systems", points: ["Our developers accurately implement the business logic of your web app on the back end. We rely on proven frameworks and ensure fast and quality coding in .Net, Java, Python, Node.js, PHP, Go."] }, { title: "Maximum cloud security", points: ["We set up APIs to integrate your web app with corporate or third-party systems and services. App integration ensures immediate data synchronization across systems."] }]
    return (
        <div className='w-[85vw] mx-[110px] py-[60px]'>
            <div className='w-[100%] mb-[30px]'>
                <h1 className='font-bold text-3xl'>How You Benefit from Azure Consulting by ScienceSoft</h1>
                <p className='text-[14px] font-semibold mt-[20px]'>ScienceSoft assists in specific development stages as well as provides full-cycle mobile app implementation. Our mobile app development services include:</p>
            </div>
            <div className='w-[100%] flex flex-wrap justify-between'>
                {
                    softwareAdv.map((item, index) => {
                        return (
                            <div className='w-[32.5%] h-[220px] border border-[#fffff] mt-[20px] shadow-[4px] flex flex-col gap-[10px] pt-[20px] px-[20px] box-border' key={index}>
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

export default BenefitsOfAzure