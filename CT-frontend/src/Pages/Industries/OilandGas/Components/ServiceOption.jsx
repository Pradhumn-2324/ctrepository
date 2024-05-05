import React from 'react'

const ServiceOption = () => {
    const ServiceOptionArr = [{
        title: "Advanced technologies consulting", desc: (
            <ul>
                <li className='list-disc ms-5'>Reservoir modeling, monitoring and management.</li>
                <li className='list-disc ms-5'>Remote operations center (ROC).
                </li>
                <li className='list-disc ms-5'>Predictive equipment maintenance, etc</li>
            </ul>
        )
    }, {
        title: "IT solution consulting, implementation and support", desc: (
            <ul>
                <li className='list-disc ms-5'>Expenses on your ready-made product grow together with your customer base.</li>
                <li className='list-disc ms-5'>Unmet customer needs due to a problematic implementation of custom functionality in a ready-made product.
                </li>
                <li className='list-disc ms-5'>Low user satisfaction due to a complex interface and issues at the code level.</li>
            </ul>
        )
    }
        , {
        title: "IT outsourcing", desc: (
            <ul>



                <li className='list-disc ms-5'>Outsourced development of oil and gas software.</li>
                <li className='list-disc ms-5'>Outsourced data analytics.</li>
                <li className='list-disc ms-5'>Outsourced QA.</li>
                <li className='list-disc ms-5'>Outsourced IT support.</li>
            </ul>
        )
    }
        , {
        title: "IT staff augmentation", desc: (
            <ul>


                <li className='list-disc ms-5'>Developers (Java, .NET, Python, PHP, C++, and more).</li>
                <li className='list-disc ms-5'>Testers (manual and automated testing).</li>
                <li className='list-disc ms-5'>DevOps engineers.</li>
                <li className='list-disc ms-5'>Data analysts.</li>
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
                    <div key={index} className='w-[45%] md:w-[90%] h-[200px] border border-gray-300 p-3'>
                        <h1 className='text-[18px] font-bold'>{item.title}</h1>
                        <p className='text-[13.5px] mt-2 font-medium'>{item.desc}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default ServiceOption
