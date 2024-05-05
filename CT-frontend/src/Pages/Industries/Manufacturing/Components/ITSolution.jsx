import React from 'react'

const ITSolution = () => {
    const ITSolutionArr = [{
        title: "High-level management", desc: (
            <ul>
                <li className='list-disc ms-5'>ERP solutions</li>
                <li className='list-disc ms-5'>Business intelligence solutions
                </li>
                <li className='list-disc ms-5'>Manufacturing data analytics solutions</li>
                <li className='list-disc ms-5'>Data warehouse solutions</li>
                <li className='list-disc ms-5'>HR solutions</li>
                <li className='list-disc ms-5'>Project management solutions</li>
                <li className='list-disc ms-5'> Document management solutions</li>

            </ul>
        )
    }, {
        title: "Production process & management", desc: (
            <ul>
                <li className='list-disc ms-5'>Product lifecycle management solutions</li>
                <li className='list-disc ms-5'>Equipment monitoring solutions
                </li>
                <li className='list-disc ms-5'>Machine monitoring solutions</li>
                <li className='list-disc ms-5'>Condition monitoring solutions</li>
                <li className='list-disc ms-5'>Production scheduling solutions</li>
                <li className='list-disc ms-5'>Human-machine interface</li>
            </ul>
        )
    }
        , {
        title: "Procurement", desc: (
            <ul>
                <li className='list-disc ms-5'>Supplier assessment and management.</li>
                <li className='list-disc ms-5'>Procurement solutions</li>
                <li className='list-disc ms-5'>Vendor portals.</li>
                <li className='list-disc ms-5'>Supply chain management solutions</li>
                <li className='list-disc ms-5'>Warehouse management systems</li>
            </ul>
        )
    }
        , {
        title: "Sales and customer management", desc: (
            <ul>
                <li className='list-disc ms-5'>CRM solutions.</li>
                <li className='list-disc ms-5'>Ecommerce solutions</li>
                <li className='list-disc ms-5'>Order management systems</li>
                <li className='list-disc ms-5'>Marketing and advertising solutions</li>
                <li className='list-disc ms-5'>Customer portals</li>
            </ul>
        )
    }, {
        title: "Field service operations", desc: (
            <ul>
                <li className='list-disc ms-5'>Work order management solutions</li>
                <li className='list-disc ms-5'>Remote inspection, diagnostics, and troubleshooting solutions</li>
                <li className='list-disc ms-5'>Scheduling and dispatch management systems</li>
                <li className='list-disc ms-5'>Contract and warranty management solution</li>
            </ul>
        )
    }, {
        title: "Smart factory (Industry 4.0)", desc: (
            <ul>
                <li className='list-disc ms-5'>Industrial IoT (IIoT) solutions</li>
                <li className='list-disc ms-5'>Autonomous robotic systems</li>
                <li className='list-disc ms-5'>Manufacturing digital twins.</li>
                <li className='list-disc ms-5'>AI-based inventory optimization solutions</li>
                <li className='list-disc ms-5'>Predictive maintenance solutions</li>
            </ul>
        )
    }
    ]
    return (
        <div className='w-[100vw] h-[auto] box-border pt-[100px] md:pt-[50px] pb-[30px] pb-[60px]'>
            <div className='w-[85%] mx-auto md:w-[90%]'>
                <h1 className='text-3xl font-bold md:text-[16px] md:text-[blue]'>IT Solutions for Manufacturing Industry to Optimize Your Operations </h1>
                <p className='mt-2 mx-auto'>From simple mobile apps to large-scale networks for multi-party transaction processing – as a fintech software development company, ScienceSoft ensures prompt and risk-free implementation of all kinds of fintech initiatives.</p>
                <h4 className='text-2xl font-bold md:text-[16px] md:text-[blue] mt-[30px]'>Business management</h4>

            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-[20px] items-center justify-center'>
                {ITSolutionArr.map((item, index) => (
                    <div key={index} className='w-[350px] md:w-[90%] h-[200px] border border-gray-300 p-3'>
                        <h1 className='text-[18px] font-bold'>{item.title}</h1>
                        <p className='text-[13.5px] mt-2 font-medium'>{item.desc}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default ITSolution
