import React from 'react'

const FeatureWeRecomded = () => {
    const FeatureWeRecomdedArr = [{
        title: "P2P domestic and money transfers.", desc: (
            <ul>
                <li className='list-disc ms-5'>-------</li>
            </ul>
        )
    }, {
        title: "Multi-currency payments", desc: (
            <ul>
                <li className='list-disc ms-5'>------</li>
            </ul>
        )
    }, {
        title: "AI-powered budget", desc: (
            <ul>
                <li className='list-disc ms-5'>------</li>
            </ul>
        )
    },{
        title: "Online and offline QR- payments.", desc: (
            <ul>
                <li className='list-disc ms-5'>-------</li>
            </ul>
        )
    }, {
        title: "NFC-enabled mobile payments.", desc: (
            <ul>
                <li className='list-disc ms-5'>------</li>
            </ul>
        )
    }, {
        title: "managing virtual payment", desc: (
            <ul>
                <li className='list-disc ms-5'>------</li>
            </ul>
        )
    },{
        title: "Biometric authentication.", desc: (
            <ul>
                <li className='list-disc ms-5'>-------</li>
            </ul>
        )
    }, {
        title: "Voice commands & text-to-speech", desc: (
            <ul>
                <li className='list-disc ms-5'>------</li>
            </ul>
        )
    }, {
        title: "ntelligent digital assistants.", desc: (
            <ul>
                <li className='list-disc ms-5'>------</li>
            </ul>
        )
    }
    ]
    return (
        <div className='w-[100vw] h-[auto] box-border pt-[50px] md:pt-[50px] pb-[30px] pb-[60px]'>
            <div className='w-[85%] mx-auto md:w-[90%]'>
                <h1 className='text-3xl font-bold md:text-[16px] md:text-[blue]'>Features We Recommend to Add to Drive High User Satisfaction </h1>
                <p className='mt-2 w-[98%] mx-auto'>In our projects, we power payment solutions with the following capabilities to enhance software convenience for end users and drive high ROI:</p>

            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-[20px]'>
                {FeatureWeRecomdedArr.map((item, index) => (
                    <div key={index} className='w-[350px] md:w-[90%] h-[200px] border border-gray-300 p-3'>
                        <h1 className='text-[18px] font-bold'>{item.title}</h1>
                        <p className='text-[13.5px] mt-2 font-medium'>{item.desc}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default FeatureWeRecomded
