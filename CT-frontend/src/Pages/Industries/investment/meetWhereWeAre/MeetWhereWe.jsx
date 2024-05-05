import React from 'react'

const MeetWhereWe = () => {
  return (
    <div className='w-[100vw] bg-[#000000] text-white py-[60px]'>
            <div className='w-[85%] mx-[110px]'>
                <h1 className='font-bold text-3xl mb-[20px]'>Let Us Meet You Where You Are</h1>
                <p className='text-[14px] font-semibold mb-[60px]'>Our custom ERP development services are closely bound to our clients' needs and can be related to:</p>
            </div>
            <div className='w-[85%] flex flex-wrap justify-between mx-[110px]'>
                <div className='w-[32.5%] h-[220px] bg-[#FF6868] box-border p-[15px]'>
                    <h4 className='text-[18px] font-bold'>Investment software consulting</h4>
                    <p className='text-[14px] font-normal'>We can design an optimal feature set, architecture, UX and UI, and a tech stack for your unique solution. For software product companies, we are ready to conduct TA and competitor analysis and define a USP for the product. You also receive a project roadmap with cost and time estimates, a risk mitigation plan,</p>
                </div>
                <div className='w-[32%] h-[220px] bg-[#1777BC] box-border p-[15px]'>
                    <h4 className='text-[18px] font-bold'>Investment software development</h4>
                    <p className='text-[14px] font-normal'>Having 750+ development, BA, PM, QA, and data science professionals on board, we can cover all aspects of investment software creation and take over your project at any implementation stage.</p>
                </div>
                <div className='w-[32%] h-[220px] bg-[#E751FF] box-border p-[15px]'>
                    <h4 className='text-[18px] font-bold'>Investment software modernization</h4>
                    <p className='text-[14px] font-normal'>Already have investment software that underperforms but can’t be replaced yet? We can revamp your legacy software's architecture, codebase, and tech stack and evolve it with the required features.</p>
                </div>
            </div>
        </div>
  )
}

export default MeetWhereWe