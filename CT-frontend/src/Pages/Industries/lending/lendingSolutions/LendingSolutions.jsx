import React from 'react'

const LendingSolutions = () => {
    const serviceDomain = [{ title: "Loan origination software", points: ["Automated borrower onboarding and pre-qualification.", "RPA- and AI-based processing of borrowers’ paper and digital documents.", "AI-powered assessment of borrower credit risks.", "Configurable loan terms (max amount, duration, interest rate, collateral type, etc.)"] }, { title: "Loan servicing software", points: ["Template-based creation of loan amortization schedules.", "Automated calculation of monthly principal and interest amounts and other loan-associated fees.", "Scheduled generation of invoices on due loan repayments and sending them to borrowers"] }, { title: "Debt collection software", points: ["AI-based suggestions on the optimal collection strategies for particular debtors and debtor segments.", "Scheduled and ad hoc omnichannel reminders on due loan repayments.", "Rule-based assignment of debt collection tasks to the debt recovery team members."] }, { title: "Loan pricing software", points: ["Scenario modeling and what-if analysis for various loan pricing strategies.", "Real-time monitoring of competitors’ loan prices across relevant public sources.", "AI-powered analysis and optimization of loan prices."] }, { title: "Peer-to-peer lending software", points: ["Criteria-based search of the best-fitting loan offerings for borrowers and investment opportunities for lenders.", "A comprehensive loan calculator for borrowers.", "Automated loan underwriting and servicing processes."] }, { title: "Customer-facing lending apps", points: ["Automated generation and submission of loan applications.", "Automated loan repayments via the selected payment method.", "End-to-end audit trail of the user account activities."] }]
    return (
        <div className='w-[85vw] mx-[110px] pt-[30px] pb-[60px]'>
            <div className='w-[100%] mb-[30px]'>
                <h1 className='font-bold text-3xl'>Lending Solutions ScienceSoft Delivers</h1>
                <p className='text-[14px] font-semibold mt-[20px]'>We provide full-cycle consulting and development services to help companies build single-purpose lending solutions or implement full-featured loan management systems to drive high ROI across the entire lending process.</p>
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

export default LendingSolutions