import React from 'react'

const LendingIntegration = () => {
    return (
        <div className='w-[100vw] bg-[#000000] text-white pt-[60px] pb-[30px]'>
            <div className='w-[85%] mx-[110px]'>
                <h1 className='font-bold text-3xl mb-[20px]'>Lending Software Integrations ScienceSoft Helps Establish</h1>
                <p className='text-[14px] font-semibold mb-[60px]'>Our custom ERP development services are closely bound to our clients' needs and can be related to:</p>
            </div>
            <div className='w-[85%] flex flex-wrap justify-between mx-[110px]'>
                <div className='w-[32.5%] h-[220px] bg-[#FF6868] box-border p-[15px]'>
                    <h4 className='text-[18px] font-bold mb-[10px]'>Corporate systems</h4>
                    <ul className='list-disc text-[14px] pl-[20px] font-normal'>
                        <li>CRM.</li>
                        <li>Accounting software.</li>
                        <li>Customer-facing apps (e.g., a customer portal, a company website).</li>
                        <li>A BI solution.</li>
                        <li>Case-specific systems, such as core banking software.</li>
                    </ul>
                </div>
                <div className='w-[32%] h-[220px] bg-[#1777BC] box-border p-[15px]'>
                    <h4 className='text-[18px] font-bold mb-[10px]'>External data sources</h4>
                    <ul className='list-disc text-[14px] pl-[20px] font-normal'>

                        <li>Credit rating platforms of the selected credit bureaus (e.g., Experian, Equifax, or TransUnion for the US).</li>
                        <li>
                            Bank accounts.
                        </li>
                        <li>
                            Financial data marketplaces.
                        </li>
                    </ul>
                </div>
                <div className='w-[32%] h-[220px] bg-[#E751FF] box-border p-[15px]'>
                    <h4 className='text-[18px] font-bold mb-[10px]'>Third-party services</h4>
                    <ul className='list-disc text-[14px] pl-[20px] font-normal'>
                        <li>
                            Payment gateways of banks or independent payment service providers (e.g., PayPal, Stripe).</li>
                        <li>Messaging services.</li>
                        <li>Authentication services.
                        </li>
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default LendingIntegration