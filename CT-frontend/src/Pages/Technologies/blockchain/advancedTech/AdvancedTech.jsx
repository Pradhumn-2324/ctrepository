import React from 'react'

const AdvancedTech = () => {
    const softwareAdv = [{ title: "Internet of Things (IoT)", points: ["SAutomated aggregation, an immutable record, and secure sharing of unstructured and semi-structured IoT big data."] }, { title: "AI-based security techs", points: ["Instant detection of inaccurate data and suspicious transactions and preventing their upload into the blockchain."] }, { title: "Machine learning (ML)", points: ["High quality of analytical results due to ML model training using the reliable and incorruptible data stored in the blockchain."] }]
    return (
        <div className='w-[85vw] mx-[110px] py-[60px]'>
            <div className='w-[100%] mb-[30px]'>
                <h1 className='font-bold text-3xl'>Advanced techs to integrate with blockchain</h1>
                <p className='text-[14px] font-semibold mt-[20px]'>When combined with the latest technologies used for data aggregation, interpretation, and analysis, blockchain offers high integrity, full traceability, enhanced security of data-associated transactions and events. Our blockchain software development company can power your blockchain solution with the following advanced techs:</p>
            </div>
            <div className='w-[100%] flex flex-wrap justify-between'>
                {
                    softwareAdv.map((item, index) => {
                        return (
                            <div className='w-[32.5%] h-[160px] border border-[#fffff] mt-[20px] shadow-[4px] flex flex-col gap-[10px] pt-[20px] px-[20px] box-border' key={index}>
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

export default AdvancedTech