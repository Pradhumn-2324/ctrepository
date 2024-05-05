import React from 'react'

const ITSolutions = () => {
    const serviceDomain = [{ title: "Underwriting", points: ["Insurance application processing.","Risk assessment.","Insurance pricing.","Compliance management."] }, { title: "Billing", points: ["Personalized premium calculation.","Automated invoicing.","E-signature workflow.","Payment processing."] }, { title: "Policy administration", points: ["Collaborative policy creation.","Policy issuance, updating, and renewal.","Centralized storage of all policy-related data."] }, { title: "Claim management", points: ["Claim capture and processing.","Damage evaluation.","Claim validation and fraud detection.","Claim settlement."] }, { title: "Insurance portal", points: ["Self-service options for agents, customers, and service suppliers.","Insurance application and claim management.","Access to the required insurance data.","An intelligent virtual assistant.","Instant messaging."] }, { title: "Customer-facing insurance app", points: ["Generation and submission of insurance applications and claims.","Premium payment.","Full audit trail of account activities.","KYC/AML verification.","Multi-factor authentication, including biometric authentication."] },{title:"CRM",points:["Customer journey management.","Content marketing.","Omnichannel lead generation."]},{title:"Insurance data analytics", points:["Customer analytics.","Finance analytics.","Risk analytics.","Operational analytics.","Workforce analytics.","Agency performance analytics."]},{title:"P2P insurance", points:["Criteria-based search of insurance offerings.","An insurance price calculator.","Automated underwriting and policy issuance.","Payment processing."]}]
    return (
        <div className='w-[85vw] mx-[110px] pt-[30px] pb-[60px]'>
            <div className='w-[100%] mb-[30px]'>
                <h1 className='font-bold text-3xl'>IT Solutions for Insurance We Develop</h1>
                <p className='text-[14px] font-semibold mt-[20px]'>IT solutions CT creates help insurance companies improve overall business efficiency and introduce excellent customer experience. We can design and implement one or several of these targeted insurance solutions, as well as build a full-featured insurance business automation system:</p>
            </div>
            <div className='w-[100%] flex flex-wrap justify-between'>
                {
                    serviceDomain.map((item, index) => {
                        return (
                            <div className='w-[32.5%] h-[240px] border border-[#fffff] mt-[20px] shadow-[4px] flex flex-col gap-[10px] pt-[20px] px-[20px] box-border' key={index}>
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

export default ITSolutions