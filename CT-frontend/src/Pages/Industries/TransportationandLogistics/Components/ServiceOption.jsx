import React from 'react'

const ServiceOption = () => {
    const ServiceOptionArr = [{
        title: "Advanced technologies consulting", desc: (
            <ul>
                <li className='list-disc ms-5'>Route modeling and optimization.</li>
                <li className='list-disc ms-5'>Transportation monitoring and risk management.
                </li>
                <li className='list-disc ms-5'>Demand forecasting and spend planning.</li>
                <li className='list-disc ms-5'>Predictive fleet maintenance.</li>
            </ul>
        )
    }, {
        title: "T&L product consulting", desc: (
            <ul>
                <li className='list-disc ms-5'> A clear T&L product concept.</li>
                <li className='list-disc ms-5'>A unique selling proposition to differentiate your product from competitors’ offerings.
                </li>
                <li className='list-disc ms-5'>User journey maps and a usability testing report.</li>
                <li className='list-disc ms-5'>A comprehensive UI kit.</li>
            </ul>
        )
    }
        , {
        title: "T&L solution implementation", desc: (
            <ul>
                <li className='list-disc ms-5'>Designing optimal T&L solution features, architecture, UX and UI, and tech stack.</li>
                <li className='list-disc ms-5'>Estimating the project's cost & timelines, ROI calculation.</li>
                <li className='list-disc ms-5'>T&L software development and testing.</li>
            </ul>
        )
    }
        , {
        title: "Outsourcing of IT functions", desc: (
            <ul>
                <li className='list-disc ms-5'>Outsourced QA.</li>
                <li className='list-disc ms-5'>Cybersecurity services.</li>
                <li className='list-disc ms-5'>Outsourced IT support.DevOps engineers.</li>
                <li className='list-disc ms-5'>Managed infrastructure services.</li>
                <li className='list-disc ms-5'>Outsourced help desk.</li>
            </ul>
        )
    }
        , {
        title: "IT staff augmentation", desc: (
            <ul>
                <li className='list-disc ms-5'> Developers (Java, .NET, Python, PHP, C++, and more).</li>
                <li className='list-disc ms-5'>Testers (manual and automated testing).</li>
                <li className='list-disc ms-5'>DevOps engineers.</li>
                <li className='list-disc ms-5'>Data analysts.</li>
            </ul>
        )
    }
        , {
        title: "-------", desc: (
            <ul>
                <li className='list-disc ms-5'>Managing RFxs, e-auctions, e-tenders.</li>
                <li className='list-disc ms-5'>AI-enabled cost-benefit analysis and carrier bid/rate compliance scoring.</li>
                <li className='list-disc ms-5'>Creation, editing, approval, and centralized storage of carrier contracts and transport orders.</li>
            </ul>
        )
    }
    ]
    return (
        <div className='w-[100vw] h-[auto] box-border pt-[60px] md:pt-[50px] pb-[30px] pb-[60px]'>
            <div className='w-[85%] mx-auto md:w-[90%]'>
                <h1 className='text-3xl font-bold md:text-[16px] md:text-[blue]'>Choose Your Service Option </h1>
                <p className='mt-2 mx-auto'>Telecommunications software is used to organize and manage all aspects of electronic data (text, voice, video, etc.) exchange. ScienceSoft helps telcos ensure that their networks run like clockwork.</p>
            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-[20px]'>
                {ServiceOptionArr.map((item, index) => (
                    <div key={index} className='w-[350px] md:w-[90%] h-[200px] border border-gray-300 p-3'>
                        <h1 className='text-[18px] font-bold'>{item.title}</h1>
                        <p className='text-[13.5px] mt-2 font-medium'>{item.desc}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default ServiceOption
