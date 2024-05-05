import React from 'react'

const BusinessTask = () => {
    const softwareAdv = [{ title: "Blockchain networks", points: ["Secure and scalable decentralized ecosystems with minimized downtime:","Private blockchain networks.","Public blockchain networks.","Hybrid networks."] }, { title: "Asset tokenization solutions", points: ["Decentralized solutions that allow users to create, manage, and trade their asset-backed tokens:","NFT platforms.","ICO, IEO, STO, and IDO solutions."] }, { title: "Blockchain-based market platform", points: ["Peer-to-peer platforms for transparent, fraud-free transactions between the parties:","DeFi platforms.","Decentralized marketplaces."] }, { title: "Smart contracts", points: ["Protocols that guarantee the integrity of multi-party agreements and automatically enforce fixed obligations."] }, { title: "Crypto assets", points: ["Custom cryptocurrencies.","Crypto tokens: NFTs, security, utility, governance, reward, etc."] }, { title: "Crypto wallets", points: ["Digital wallets for storing and transacting various types of crypto assets."] },{title:"dApps", points:["Encrypted peer-to-peer applications with no single point of failure and zero downtime."]},{title:"DAOs", points:["Blockchain-based platforms for collaborative decision-making across communities with no central authority."]},{title:"Cross-chain bridges", points:["Decentralized solutions that enable compatibility of crypto assets across different blockchain platforms."]}]
    return (
        <div className='w-[85vw] mx-[110px] py-[60px]'>
            <div className='w-[100%] mb-[30px]'>
                <h1 className='font-bold text-3xl'>Software for Advanced Business Tasks</h1>
                <p className='text-[14px] font-semibold mt-[20px]'>We work with all the mainstream technologies to expand the scope of functions the software can perform.</p>
            </div>
            <div className='w-[100%] flex flex-wrap justify-between'>
                {
                    softwareAdv.map((item, index) => {
                        return (
                            <div className='w-[32.5%] h-[180px] border border-[#fffff] mt-[20px] shadow-[4px] flex flex-col gap-[10px] pt-[20px] px-[20px] box-border' key={index}>
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

export default BusinessTask