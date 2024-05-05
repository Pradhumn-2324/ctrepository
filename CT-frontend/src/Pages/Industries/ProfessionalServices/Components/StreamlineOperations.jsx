import React from 'react'

const StreamlineOperations = () => {
    const streamlineOperationsArr = [{
        title: "CRM", desc: (
            <ul>
                <li className='list-disc ms-5'>Content marketing.</li>
                <li className='list-disc ms-5'>Omnichannel lead generation.</li>
                <li className='list-disc ms-5'>Customer journey management.</li>
            </ul>
        )
    }, {
        title: "Customer portal", desc: (
            <ul>
                <li className='list-disc ms-5'>360-degree customer view.</li>
                <li className='list-disc ms-5'>Digital service delivery.</li>
                <li className='list-disc ms-5'>Customer self-service.</li>
                <li className='list-disc ms-5'>AI assistant.</li>
                <li className='list-disc ms-5'>Data access and self-service analytics.</li>
                <li className='list-disc ms-5'>eLearning.</li>
            </ul>
        )
    }, {
        title: "Data analytics portal for customers", desc: (
            <ul>
 
                <li className='list-disc ms-5'>Data upload (one-time and continuous).</li>
                <li className='list-disc ms-5'>Secure storage.</li>
                <li className='list-disc ms-5'>Data augmentation and enrichment.</li>
                <li className='list-disc ms-5'>Machine learning and NLP.</li>
                <li className='list-disc ms-5'>Data and insight visualization.</li>
            </ul>
        )
    }
    
    , {
        title: "Project and human resource", desc: (
            <ul>
                <li className='list-disc ms-5'>Project planning.</li>
                <li className='list-disc ms-5'>Task management and scheduling.</li>
                <li className='list-disc ms-5'>Resource allocation.</li>
                <li className='list-disc ms-5'>Progress monitoring.</li>
                <li className='list-disc ms-5'>Workforce utilization management.</li>
            </ul>
        )
    }, {
        title: "Document management", desc: (
            <ul>
                <li className='list-disc ms-5'>Templates.</li>
                <li className='list-disc ms-5'>Intelligent search.</li>
                <li className='list-disc ms-5'>Co-editing with a customer.</li>
                <li className='list-disc ms-5'>Approval workflows.</li>
                <li className='list-disc ms-5'>Document retention policies.</li>
            </ul>
        )
    }, {
        title: "Employee database and portal", desc: (
            <ul>
                <li className='list-disc ms-5'>Organizational chart.</li>
                <li className='list-disc ms-5'>Open positions.</li>
                <li className='list-disc ms-5'>Employee self-service.</li>
                <li className='list-disc ms-5'>Scheduling.</li>
                <li className='list-disc ms-5'>External workforce management.</li>
            </ul>
        )
    }
    ]
    return (
        <div className='w-[100vw] h-[auto] box-border pt-[60px] md:pt-[50px] pb-[30px] pb-[60px]'>
            <div className='w-[85%] mx-auto md:w-[90%]'>
                <h1 className='text-3xl font-bold md:text-[16px] md:text-[blue]'>IT Solutions to Streamline Operations of Professional Services Company </h1>
                <p className='mt-2 w-[98%] mx-auto'>From simple mobile apps to large-scale networks for multi-party transaction processing – as a fintech software development company, ScienceSoft ensures prompt and risk-free implementation of all kinds of fintech initiatives.</p>
                <h4 className='text-[22px] ms-2 mt-5'>Need to build a new CRM?</h4>
            </div>

            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-[20px]'>
                {streamlineOperationsArr.map((item, index) => (
                    <div key={index} className='w-[350px] md:w-[90%] h-[220px] border border-gray-300 p-3'>
                        <h1 className='text-[18px] font-bold'>{item.title}</h1>
                        <p className='text-[13.5px] mt-2 font-medium'>{item.desc}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default StreamlineOperations
